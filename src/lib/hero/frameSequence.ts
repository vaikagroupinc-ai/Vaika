/**
 * Progressive WebP frame sequence loader & deterministic resolver.
 *
 * The supplied public/videos/villa_main_hero_1.webp asset is an animated 169-frame
 * WebP (~52.7 MB, 800x446) whose native animation playback cannot be arbitrarily scrubbed.
 * Individual composited RGB WebP frames (/frames/villa-hero/frame-0001.webp .. 0169.webp,
 * totaling ~6.5 MB) are progressively decoded into memory with nearest-frame fallback so
 * forward and reverse GSAP ScrollTrigger scrubbing stays instantaneous without blocking LCP.
 */

export const HERO_FRAME_COUNT = 169;
export const HERO_FRAME_BASE_PATH = '/frames/villa-hero';
export const HERO_POSTER_SRC = `${HERO_FRAME_BASE_PATH}/frame-0001.webp`;

export function getHeroFrameUrl(frameIndex: number): string {
  const clamped = Math.max(0, Math.min(HERO_FRAME_COUNT - 1, Math.round(frameIndex)));
  const padded = String(clamped + 1).padStart(4, '0');
  return `${HERO_FRAME_BASE_PATH}/frame-${padded}.webp`;
}

export interface FrameSequenceOptions {
  /** Frame step (1 = all 169 frames, 6 = curated 29-frame mobile stride) */
  stride?: number;
  /** Maximum parallel network/decode operations */
  concurrency?: number;
  /** Called once the opening/closing keyframes are ready or when a closer frame arrives for current target */
  onFrameReady?: (loadedIndex: number) => void;
  /** Called if all critical initial frame loads fail so UI falls back cleanly */
  onCriticalError?: () => void;
}

export class VillaFrameSequenceLoader {
  private readonly stride: number;
  private readonly concurrency: number;
  private readonly onFrameReady?: (loadedIndex: number) => void;
  private readonly onCriticalError?: () => void;

  /** Ordered list of physical frame indices (0..168) scheduled to load */
  public readonly activeIndices: number[];

  private readonly decodedCache = new Map<number, HTMLImageElement>();
  private readonly pendingUrls = new Set<number>();
  private queue: number[] = [];
  private activeWorkers = 0;
  private disposed = false;
  private criticalFailures = 0;

  constructor(options: FrameSequenceOptions = {}) {
    this.stride = Math.max(1, options.stride ?? 1);
    this.concurrency = Math.max(1, options.concurrency ?? 6);
    this.onFrameReady = options.onFrameReady;
    this.onCriticalError = options.onCriticalError;

    const indices: number[] = [];
    for (let i = 0; i < HERO_FRAME_COUNT; i += this.stride) {
      indices.push(i);
    }
    if (indices[indices.length - 1] !== HERO_FRAME_COUNT - 1) {
      indices.push(HERO_FRAME_COUNT - 1);
    }
    this.activeIndices = indices;
    this.queue = this.buildPriorityQueue(indices);
  }

  /**
   * Orders frames so frame 0 (opening elevation), final gable frame (168),
   * evenly distributed anchor frames across the orbit, and opening burst load first.
   */
  private buildPriorityQueue(indices: number[]): number[] {
    const ordered: number[] = [];
    const seen = new Set<number>();

    const pushUnique = (idx: number) => {
      if (!seen.has(idx)) {
        seen.add(idx);
        ordered.push(idx);
      }
    };

    // 1. First & closing frames
    pushUnique(indices[0]);
    pushUnique(indices[indices.length - 1]);

    // 2. Keyframe anchors (~14 evenly spaced checkpoints across the trajectory)
    const keyStep = Math.max(1, Math.floor(indices.length / 14));
    for (let k = 0; k < indices.length; k += keyStep) {
      pushUnique(indices[k]);
    }

    // 3. Opening sequence burst for immediate early-scroll smoothness
    const openingBurst = Math.min(18, indices.length);
    for (let i = 0; i < openingBurst; i++) {
      pushUnique(indices[i]);
    }

    // 4. All remaining frames in sequence
    for (const idx of indices) {
      pushUnique(idx);
    }

    return ordered;
  }

  public start(): void {
    if (this.disposed) return;
    this.pumpQueue();
  }

  private pumpQueue(): void {
    if (this.disposed) return;

    while (this.activeWorkers < this.concurrency && this.queue.length > 0) {
      const nextIdx = this.queue.shift();
      if (nextIdx === undefined || this.decodedCache.has(nextIdx) || this.pendingUrls.has(nextIdx)) {
        continue;
      }

      this.pendingUrls.add(nextIdx);
      this.activeWorkers += 1;
      void this.loadFrame(nextIdx);
    }
  }

  private async loadFrame(frameIndex: number): Promise<void> {
    const img = new Image();
    img.decoding = 'async';

    try {
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed loading frame ${frameIndex}`));
        img.src = getHeroFrameUrl(frameIndex);
      });

      if (this.disposed) return;

      if (typeof img.decode === 'function') {
        try {
          await img.decode();
        } catch {
          // Decode can reject on certain browsers even when naturalWidth > 0; still usable
        }
      }

      if (this.disposed || img.naturalWidth === 0) return;

      this.decodedCache.set(frameIndex, img);
      this.onFrameReady?.(frameIndex);
    } catch {
      if (frameIndex === 0 || frameIndex === HERO_FRAME_COUNT - 1) {
        this.criticalFailures += 1;
        if (this.criticalFailures >= 2) {
          this.onCriticalError?.();
        }
      }
    } finally {
      this.pendingUrls.delete(frameIndex);
      this.activeWorkers = Math.max(0, this.activeWorkers - 1);
      if (!this.disposed) {
        this.pumpQueue();
      }
    }
  }

  /**
   * Maps normalized progress [0..1] deterministically onto the physical frame index
   * matching the active stride, returning both the exact target and nearest decoded frame.
   */
  public resolveFrameForProgress(progress: number): {
    targetIndex: number;
    image: HTMLImageElement | null;
    resolvedIndex: number;
  } {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const slot = Math.min(
      this.activeIndices.length - 1,
      Math.floor(clampedProgress * (this.activeIndices.length - 1) + 0.0001)
    );
    const targetIndex = this.activeIndices[slot];

    const exact = this.decodedCache.get(targetIndex);
    if (exact) {
      return { targetIndex, image: exact, resolvedIndex: targetIndex };
    }

    // Radial nearest-loaded fallback so scrubbing remains crisp while streaming remaining frames
    for (let offset = 1; offset < HERO_FRAME_COUNT; offset++) {
      const backward = targetIndex - offset;
      if (backward >= 0) {
        const backImg = this.decodedCache.get(backward);
        if (backImg) {
          return { targetIndex, image: backImg, resolvedIndex: backward };
        }
      }

      const forward = targetIndex + offset;
      if (forward < HERO_FRAME_COUNT) {
        const fwdImg = this.decodedCache.get(forward);
        if (fwdImg) {
          return { targetIndex, image: fwdImg, resolvedIndex: forward };
        }
      }
    }

    return { targetIndex, image: null, resolvedIndex: -1 };
  }

  public get loadedCount(): number {
    return this.decodedCache.size;
  }

  public dispose(): void {
    this.disposed = true;
    this.queue = [];
    this.pendingUrls.clear();
    this.decodedCache.clear();
  }
}

