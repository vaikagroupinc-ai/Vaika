'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HERO_POSTER_SRC } from '@/lib/hero/frameSequence';
import { drawCoverFrame } from '@/lib/hero/drawCoverFrame';

interface HeroSectionProps {
  onExplore: () => void;
  onStartProject?: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaStageRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroBlockRef = useRef<HTMLDivElement | null>(null);
  const storyBeatOneRef = useRef<HTMLDivElement | null>(null);
  const storyBeatTwoRef = useRef<HTMLDivElement | null>(null);
  const exitVeilRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mediaStage = mediaStageRef.current;
    const canvas = canvasRef.current;
    const heroBlock = heroBlockRef.current;

    if (!section || !mediaStage || !canvas || !heroBlock) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let cancelled = false;
    let rafId: number | null = null;
    let currentProgress = 0;
    let lastDrawnFrameIndex = -1;
    let canvasW = 0;
    let canvasH = 0;
    let loaderInstance: import('@/lib/hero/frameSequence').VillaFrameSequenceLoader | null = null;
    let motionController: import('@/lib/hero/heroScrollMotion').HeroMotionController | null = null;
    let resizeObserver: ResizeObserver | null = null;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const navConnection = (
      navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean };
      }
    );
    const isConstrainedDevice =
      Boolean(navConnection.connection?.saveData) ||
      (typeof navConnection.deviceMemory === 'number' && navConnection.deviceMemory <= 2);

    const shouldScrubFrames = !prefersReducedMotion && !isConstrainedDevice;

    const syncCanvasDimensions = () => {
      const rect = mediaStage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const nextW = Math.max(1, Math.round(rect.width));
      const nextH = Math.max(1, Math.round(rect.height));

      if (nextW === canvasW && nextH === canvasH) return false;

      canvasW = nextW;
      canvasH = nextH;
      canvas.width = Math.round(nextW * dpr);
      canvas.height = Math.round(nextH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastDrawnFrameIndex = -1;
      return true;
    };

    const renderFrame = (force = false) => {
      rafId = null;
      if (cancelled || !loaderInstance || canvasW === 0 || canvasH === 0) return;

      const { image, resolvedIndex } = loaderInstance.resolveFrameForProgress(currentProgress);
      if (!image) return;

      if (!force && resolvedIndex === lastDrawnFrameIndex) return;

      const drawn = drawCoverFrame(ctx, image, canvasW, canvasH, 0.5, 0.48);
      if (drawn) {
        lastDrawnFrameIndex = resolvedIndex;
        if (canvas.style.opacity !== '1') {
          canvas.style.opacity = '1';
        }
      }
    };

    const scheduleRender = (force = false) => {
      if (cancelled || rafId !== null) {
        if (force && rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => renderFrame(true));
        }
        return;
      }
      rafId = requestAnimationFrame(() => renderFrame(force));
    };

    const bootHeroExperience = async () => {
      const [{ VillaFrameSequenceLoader }, { createHeroScrollMotion }] = await Promise.all([
        import('@/lib/hero/frameSequence'),
        import('@/lib/hero/heroScrollMotion'),
      ]);

      if (cancelled) return;

      syncCanvasDimensions();

      if (shouldScrubFrames) {
        const isMobileViewport = window.innerWidth < 768;
        loaderInstance = new VillaFrameSequenceLoader({
          stride: isMobileViewport ? 6 : 1,
          concurrency: isMobileViewport ? 4 : 6,
          onFrameReady: (loadedIdx) => {
            if (cancelled || !loaderInstance) return;
            const { targetIndex } = loaderInstance.resolveFrameForProgress(currentProgress);
            // Redraw whenever exact target or closer neighbor finishes streaming
            if (
              loadedIdx === targetIndex ||
              Math.abs(loadedIdx - targetIndex) < Math.abs(lastDrawnFrameIndex - targetIndex)
            ) {
              scheduleRender(true);
            }
          },
          onCriticalError: () => {
            if (canvas) {
              canvas.style.opacity = '0';
            }
          },
        });
        loaderInstance.start();
      }

      motionController = createHeroScrollMotion(
        {
          section,
          mediaStage,
          heroBlock,
          scrollCue: null,
          storyBeatOne: storyBeatOneRef.current,
          storyBeatTwo: storyBeatTwoRef.current,
          exitVeil: exitVeilRef.current,
          progressBar: progressBarRef.current,
        },
        {
          onFrameProgress: (progress) => {
            currentProgress = progress;
            if (shouldScrubFrames) {
              scheduleRender(false);
            }
          },
          onModeChange: () => {
            if (syncCanvasDimensions() && shouldScrubFrames) {
              scheduleRender(true);
            }
          },
        }
      );

      resizeObserver = new ResizeObserver(() => {
        if (syncCanvasDimensions()) {
          if (shouldScrubFrames) {
            scheduleRender(true);
          }
          motionController?.refresh();
        }
      });
      resizeObserver.observe(mediaStage);
    };

    void bootHeroExperience();

    return () => {
      cancelled = true;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      resizeObserver?.disconnect();
      resizeObserver = null;
      motionController?.dispose();
      motionController = null;
      loaderInstance?.dispose();
      loaderInstance = null;
    };
  }, []);

  const handleDivisionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onExplore();
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="VAIKA GROUP Architectural Introduction"
      className="relative w-full h-[100svh] min-h-[580px] bg-[#050507] overflow-hidden select-none"
    >
      {/* Full-Viewport Architectural Media Stage */}
      <div
        ref={mediaStageRef}
        className="absolute inset-0 w-full h-full will-change-transform origin-center"
      >
        {/* Immediate LCP Opening Poster (frame 0001) */}
        <Image
          src={HERO_POSTER_SRC}
          alt="Contemporary charred-timber architectural residence at twilight sunset"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-[50%_48%]"
        />

        {/* Deterministic Scroll-Scrubbed Canvas Layer */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{ opacity: 0 }}
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-200"
        />

        {/* Subtle Top Edge Scrim for Navbar Contrast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050507]/45 to-transparent"
        />

        {/* Tight Lower Edge Scrim (Preserves Full Villa & Foreground Color Fidelity) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] sm:h-[34%] bg-gradient-to-t from-[#050507]/82 via-[#050507]/30 to-transparent"
        />

        {/* Minimal Localized Text-Legibility Feather */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 42% at 14% 92%, rgba(5,5,7,0.28) 0%, rgba(5,5,7,0) 70%)',
          }}
        />
      </div>

      {/* Phase 4 Exit Transition Veil */}
      <div
        ref={exitVeilRef}
        aria-hidden="true"
        style={{ opacity: 0 }}
        className="pointer-events-none absolute inset-0 bg-[#050507] z-10"
      />

      {/* Editorial Content Layer */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col justify-end pb-9 sm:pb-12 lg:pb-14 pt-24 pointer-events-none">
        <div className="relative w-full">
          {/* PHASE 1: Opening Editorial Block */}
          <div ref={heroBlockRef} className="max-w-3xl pointer-events-auto">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.26em] text-[#e1e2e6]/85 mb-3 sm:mb-4">
              VAIKA GROUP {"—"} INDEPENDENT THINKING. INTEGRATED EXECUTION.
            </p>

            <h1 className="font-['Space_Grotesk'] text-[clamp(1.85rem,7vw,4.5rem)] font-bold uppercase tracking-[-0.025em] text-[#f5f6fa] leading-[0.98]">
              A VISION.
              <br />
              <span className="font-normal text-[#e6d5a7]">WITHOUT LIMITS.</span>
            </h1>

            <p className="font-['Manrope'] text-sm sm:text-base lg:text-[17px] text-[#cbd0df] max-w-xl mt-4 sm:mt-5 leading-relaxed">
              Four specialized divisions. One integrated vision. Building intelligent solutions through technology, creativity and innovation.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-6 sm:mt-7">
              <button
                type="button"
                onClick={onExplore}
                className="px-6 py-3.5 rounded bg-[#f5f6fa] hover:bg-white text-[#050507] font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-[0.12em] inline-flex items-center gap-2 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
              >
                <span>EXPLORE VAIKA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                onClick={handleDivisionsClick}
                className="px-6 py-3.5 rounded bg-[#050507]/55 hover:bg-[#12131a]/80 text-[#f5f6fa] border border-white/25 hover:border-white/55 backdrop-blur-sm font-['Space_Grotesk'] text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] inline-flex items-center gap-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
              >
                <span>OUR DIVISIONS</span>
              </a>
            </div>
          </div>

          {/* PHASE 3 — Restrained Architectural Storytelling Beat 01 */}
          <div
            ref={storyBeatOneRef}
            aria-hidden="true"
            style={{ opacity: 0 }}
            className="pointer-events-none absolute bottom-0 left-0 max-w-xl"
          >
            <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#d4af37] mb-2">
              01 / SPATIAL &amp; TECHNICAL CRAFT
            </span>
            <p className="font-['Space_Grotesk'] text-xl sm:text-3xl font-medium text-[#f5f6fa] leading-tight tracking-tight">
              Architecture, real-time media, data systems and creative direction engineered as one.
            </p>
          </div>

          {/* PHASE 3 — Restrained Architectural Storytelling Beat 02 */}
          <div
            ref={storyBeatTwoRef}
            aria-hidden="true"
            style={{ opacity: 0 }}
            className="pointer-events-none absolute bottom-0 left-0 max-w-2xl"
          >
            <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#d4af37] mb-2">
              02 / FOUR SPECIALIZED DIVISIONS
            </span>
            <p className="font-['Space_Grotesk'] text-lg sm:text-2xl lg:text-3xl font-medium text-[#f5f6fa] leading-tight tracking-tight">
              Real Estate Media {"·"} Agent Services {"·"} Data &amp; AI Core {"·"} Digital Marketing
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Sequence Progress Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-white/10 z-30"
      >
        <div
          ref={progressBarRef}
          style={{ transform: 'scaleX(0)' }}
          className="h-full w-full origin-left bg-[#d4af37]"
        />
      </div>
    </section>
  );
}
