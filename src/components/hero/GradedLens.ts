// Graded Lens & Camera Window Layer
import { LensHUD } from './LensHUD';

export const LENS_CONFIG = {
  DESKTOP_RADIUS: 170,
  MOBILE_RADIUS: 120,
  SHRUNK_FACTOR: 0.58,
  LERP_FACTOR: 0.14,
  TOUCH_LERP_FACTOR: 0.2,
  AUTOPILOT_SPEED: 0.75,
};

export class GradedLens {
  private container: HTMLElement;
  private element: HTMLDivElement | null = null;
  private imgElement: HTMLImageElement | null = null;
  private hintElement: HTMLDivElement | null = null;
  public hud: LensHUD | null = null;

  private isTouch = false;
  private isUserInteracted = false;
  private isHoveringText = false;
  private rafId: number | null = null;

  private pos = {
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
  };

  private baseRadius = LENS_CONFIG.DESKTOP_RADIUS;
  private currentRadius = LENS_CONFIG.DESKTOP_RADIUS;
  private targetRadius = LENS_CONFIG.DESKTOP_RADIUS;
  private time = 0;

  private boundOnPointerMove: (e: PointerEvent) => void;
  private boundOnTouchMove: (e: TouchEvent) => void;
  private boundOnResize: () => void;
  private shrinkCleanupHandlers: Array<() => void> = [];

  constructor(container: HTMLElement) {
    this.container = container;
    const rect = this.container.getBoundingClientRect();
    const initX = rect.width ? rect.width * 0.5 : window.innerWidth * 0.5;
    const initY = rect.height ? rect.height * 0.48 : 240;

    this.pos = {
      currentX: initX,
      currentY: initY,
      targetX: initX,
      targetY: initY,
    };

    this.baseRadius =
      window.innerWidth < 768 ? LENS_CONFIG.MOBILE_RADIUS : LENS_CONFIG.DESKTOP_RADIUS;
    this.currentRadius = this.baseRadius;
    this.targetRadius = this.baseRadius;

    this.boundOnPointerMove = this.onPointerMove.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnResize = this.onResize.bind(this);

    this.init();
  }

  private init() {
    this.isTouch = window.matchMedia('(hover: none)').matches;

    this.element = document.createElement('div');
    this.element.className = 'graded-lens-layer';
    this.element.setAttribute('aria-hidden', 'true');

    this.imgElement = document.createElement('img');
    this.imgElement.className = 'graded-villa-img';
    this.imgElement.src = '/hero/villa-graded_.webp';
    this.imgElement.alt = 'Villa Graded Dusk Photograph';
    this.imgElement.draggable = false;
    this.imgElement.onerror = () => {
      if (this.imgElement && !this.imgElement.src.endsWith('/hero/villa-graded.jpg')) {
        this.imgElement.src = '/hero/villa-graded.jpg';
      }
    };

    this.element.appendChild(this.imgElement);
    this.container.appendChild(this.element);

    // Mount LensHUD on the container (outside mask-image) so reticle & telemetry stay crisp
    this.hud = new LensHUD(this.container);

    this.hintElement = document.createElement('div');
    this.hintElement.className = 'lens-develop-hint';
    this.hintElement.innerHTML = `
      <span class="hint-icon">✦</span>
      <span class="hint-text">DRAG / MOVE TO DEVELOP</span>
    `;
    this.container.appendChild(this.hintElement);

    this.updateCSSVars(this.pos.currentX, this.pos.currentY, this.currentRadius);

    window.addEventListener('pointermove', this.boundOnPointerMove, { passive: true });
    window.addEventListener('touchmove', this.boundOnTouchMove, { passive: true });
    window.addEventListener('resize', this.boundOnResize, { passive: true });

    this.setupHoverShrinkListeners();
    this.animate();
  }

  private setupHoverShrinkListeners() {
    const textEls = document.querySelectorAll(
      '[data-shrink-lens], .hero-title, .hero-cta-group, .hero-stats-row'
    );
    textEls.forEach((el) => {
      const onEnter = () => {
        this.isHoveringText = true;
        this.targetRadius = this.baseRadius * LENS_CONFIG.SHRUNK_FACTOR;
      };
      const onLeave = () => {
        this.isHoveringText = false;
        this.targetRadius = this.baseRadius;
      };
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      this.shrinkCleanupHandlers.push(() => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    });
  }

  private onPointerMove(e: PointerEvent) {
    const rect = this.container.getBoundingClientRect();
    this.pos.targetX = e.clientX - rect.left;
    this.pos.targetY = e.clientY - rect.top;
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      this.dismissHint();
    }
  }

  private onTouchMove(e: TouchEvent) {
    if (e.touches && e.touches.length > 0) {
      const rect = this.container.getBoundingClientRect();
      this.pos.targetX = e.touches[0].clientX - rect.left;
      this.pos.targetY = e.touches[0].clientY - rect.top;
      this.dismissHint();
    }
  }

  private dismissHint() {
    if (!this.isUserInteracted) {
      this.isUserInteracted = true;
      if (this.hintElement) this.hintElement.classList.add('fade-out');
    }
  }

  private onResize() {
    this.baseRadius =
      window.innerWidth < 768 ? LENS_CONFIG.MOBILE_RADIUS : LENS_CONFIG.DESKTOP_RADIUS;
    if (!this.isHoveringText) this.targetRadius = this.baseRadius;
  }

  setFilter(filterCss: string) {
    if (this.imgElement) this.imgElement.style.filter = filterCss;
  }

  private updateCSSVars(x: number, y: number, radius: number) {
    this.container.style.setProperty('--x', `${x.toFixed(1)}px`);
    this.container.style.setProperty('--y', `${y.toFixed(1)}px`);
    this.container.style.setProperty('--lens-radius', `${radius.toFixed(1)}px`);
  }

  private animate() {
    this.rafId = requestAnimationFrame(() => this.animate());
    this.time += 0.016;

    const rect = this.container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    if (!this.isUserInteracted) {
      const centerX = rect.width * 0.5;
      const centerY = rect.height * 0.48;
      const rx = rect.width * 0.22;
      const ry = rect.height * 0.16;
      const t = this.time * LENS_CONFIG.AUTOPILOT_SPEED;

      this.pos.targetX = centerX + Math.sin(t * 0.9) * rx;
      this.pos.targetY = centerY + Math.cos(t * 0.65) * ry;
    }

    const factor = this.isTouch ? LENS_CONFIG.TOUCH_LERP_FACTOR : LENS_CONFIG.LERP_FACTOR;
    this.pos.currentX += (this.pos.targetX - this.pos.currentX) * factor;
    this.pos.currentY += (this.pos.targetY - this.pos.currentY) * factor;
    this.currentRadius += (this.targetRadius - this.currentRadius) * 0.1;

    this.updateCSSVars(this.pos.currentX, this.pos.currentY, this.currentRadius);

    if (this.hud) {
      const nx = (this.pos.currentX / rect.width) * 2 - 1;
      const ny = (this.pos.currentY / rect.height) * 2 - 1;
      this.hud.updateTelemetry(nx, ny);

      const isInside =
        this.pos.currentX > 0 &&
        this.pos.currentX < rect.width &&
        this.pos.currentY > 0 &&
        this.pos.currentY < rect.height;
      this.hud.setMode(isInside);
    }
  }

  dispose() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    window.removeEventListener('pointermove', this.boundOnPointerMove);
    window.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('resize', this.boundOnResize);
    this.shrinkCleanupHandlers.forEach((cleanup) => cleanup());
    this.shrinkCleanupHandlers = [];
    if (this.hud) this.hud.dispose();
    if (this.hintElement && this.hintElement.parentNode) {
      this.hintElement.parentNode.removeChild(this.hintElement);
    }
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

