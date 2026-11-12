// Interactive Hero Centerpiece ("Wireframe to Graded Reality")
import { VillaWireframe } from './VillaWireframe';
import { GradedLens } from './GradedLens';
import { GradeChips } from './GradeChips';

export class HeroCenterpiece {
  private container: HTMLElement;
  private wrapper: HTMLDivElement | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private chipsContainer: HTMLDivElement | null = null;
  private villaWireframe: VillaWireframe | null = null;
  private gradedLens: GradedLens | null = null;
  private gradeChips: GradeChips | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.init();
  }

  private init() {
    // 1. Centerpiece Container
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'hero-centerpiece-wrapper';
    this.wrapper.setAttribute(
      'aria-label',
      'Interactive Villa: Wireframe to Graded Reality'
    );

    // 2. Camera Viewfinder Corner Brackets & HUD Overlay
    const viewfinder = document.createElement('div');
    viewfinder.className = 'viewfinder-brackets-layer';
    viewfinder.innerHTML = `
      <div class="vf-bracket vf-tl"></div>
      <div class="vf-bracket vf-tr"></div>
      <div class="vf-bracket vf-bl"></div>
      <div class="vf-bracket vf-br"></div>

      <div class="vf-status-bar top-bar">
        <div class="status-rec"><span class="rec-dot"></span> <span>REC [4K 60P]</span></div>
        <div class="status-sector">SECTOR 01 // SCAN ACTIVE</div>
      </div>

      <div class="vf-status-bar bottom-bar">
        <div class="status-sensor">PHASE ONE IQ4 150MP // HASSELBLAD H6D</div>
        <div class="status-fps">60 FPS · 12-BIT RAW</div>
      </div>
    `;
    this.wrapper.appendChild(viewfinder);

    // 3. Counter-Rotating Orbit Rings
    const orbitContainer = document.createElement('div');
    orbitContainer.className = 'hero-orbit-rings-container';
    orbitContainer.innerHTML = `
      <div class="hero-orbit-ring orbit-ring-inner"></div>
      <div class="hero-orbit-ring orbit-ring-outer"></div>
    `;
    this.wrapper.appendChild(orbitContainer);

    // 4. Layer 0: Wireframe Canvas (Three.js WebGL)
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'villa-wireframe-canvas';
    this.canvas.setAttribute('aria-hidden', 'true');
    this.wrapper.appendChild(this.canvas);

    // Mount wrapper first so getBoundingClientRect yields true container dimensions
    this.container.appendChild(this.wrapper);

    // 5. Layer 1 & 2: Graded Photo with CSS Mask + Reticle HUD
    this.gradedLens = new GradedLens(this.wrapper);

    // 6. Initialize WebGL Wireframe (with graceful static fallback)
    try {
      this.villaWireframe = new VillaWireframe(this.canvas);
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to static composite:', e);
      this.setupStaticFallback();
    }

    // 7. Grade Selector Chips below Centerpiece
    this.chipsContainer = document.createElement('div');
    this.chipsContainer.className = 'hero-grade-chips-mount';
    this.gradeChips = new GradeChips(this.chipsContainer, (preset) => {
      if (this.gradedLens) {
        this.gradedLens.setFilter(preset.filter);
        if (this.gradedLens.hud) {
          this.gradedLens.hud.updateLUT(preset.name);
        }
      }
    });

    this.container.appendChild(this.chipsContainer);
  }

  private setupStaticFallback() {
    if (!this.canvas || !this.wrapper) return;
    this.canvas.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'hero-static-fallback';
    fallback.innerHTML = `
      <img src="/hero/villa-graded_.webp" alt="Villa Architecture" style="width: 100%; height: 100%; object-fit: cover;" />
    `;
    this.wrapper.appendChild(fallback);
  }

  dispose() {
    if (this.villaWireframe) this.villaWireframe.dispose();
    if (this.gradedLens) this.gradedLens.dispose();
    if (this.gradeChips) this.gradeChips.dispose();
    if (this.wrapper && this.wrapper.parentNode) {
      this.wrapper.parentNode.removeChild(this.wrapper);
    }
    if (this.chipsContainer && this.chipsContainer.parentNode) {
      this.chipsContainer.parentNode.removeChild(this.chipsContainer);
    }
  }
}

