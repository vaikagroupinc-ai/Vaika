// Camera Lens HUD & Telemetry Component
export class LensHUD {
  private container: HTMLElement;
  private hudElement: HTMLDivElement | null = null;
  private ringElement: HTMLDivElement | null = null;
  private readoutElement: HTMLDivElement | null = null;
  private modeBadgeElement: HTMLSpanElement | null = null;
  private lutBadgeElement: HTMLSpanElement | null = null;
  private isoEl: HTMLElement | null = null;
  private apEl: HTMLElement | null = null;
  private latEl: HTMLElement | null = null;

  private currentLUT = 'Cinematic';
  private isGradedActive = true;

  constructor(container: HTMLElement) {
    this.container = container;
    this.init();
  }

  private init() {
    this.hudElement = document.createElement('div');
    this.hudElement.className = 'lens-hud-overlay';
    this.hudElement.setAttribute('aria-hidden', 'true');

    // 1. Dual Rings & Crosshairs
    this.ringElement = document.createElement('div');
    this.ringElement.className = 'lens-reticle-ring';
    this.ringElement.innerHTML = `
      <div class="lens-inner-ring"></div>
      <div class="lens-outer-dial"></div>
      <div class="lens-crosshair ch-top"></div>
      <div class="lens-crosshair ch-bottom"></div>
      <div class="lens-crosshair ch-left"></div>
      <div class="lens-crosshair ch-right"></div>
    `;

    // 2. Telemetry Readout attached to lens edge
    this.readoutElement = document.createElement('div');
    this.readoutElement.className = 'lens-telemetry-readout';
    this.readoutElement.innerHTML = `
      <div class="telemetry-item"><span class="t-label">ISO</span> <span class="t-val" data-telemetry="iso">100</span></div>
      <div class="telemetry-item"><span class="t-label">AP</span> <span class="t-val" data-telemetry="ap">f/2.8</span></div>
      <div class="telemetry-item"><span class="t-label">RES</span> <span class="t-val">150MP</span></div>
      <div class="telemetry-item"><span class="t-label">LAT</span> <span class="t-val" data-telemetry="lat">43.4° N</span></div>
    `;

    this.isoEl = this.readoutElement.querySelector('[data-telemetry="iso"]');
    this.apEl = this.readoutElement.querySelector('[data-telemetry="ap"]');
    this.latEl = this.readoutElement.querySelector('[data-telemetry="lat"]');

    // 3. Status Badge (RAW vs GRADED) & Active LUT
    const statusWrap = document.createElement('div');
    statusWrap.className = 'lens-status-badges';

    this.modeBadgeElement = document.createElement('span');
    this.modeBadgeElement.className = 'mode-badge badge-graded';
    this.modeBadgeElement.textContent = 'GRADED';

    this.lutBadgeElement = document.createElement('span');
    this.lutBadgeElement.className = 'lut-badge';
    this.lutBadgeElement.textContent = `LUT: ${this.currentLUT.toUpperCase()}`;

    statusWrap.appendChild(this.modeBadgeElement);
    statusWrap.appendChild(this.lutBadgeElement);

    this.hudElement.appendChild(this.ringElement);
    this.hudElement.appendChild(this.readoutElement);
    this.hudElement.appendChild(statusWrap);

    this.container.appendChild(this.hudElement);
  }

  updateLUT(lutName: string) {
    this.currentLUT = lutName;
    if (this.lutBadgeElement) {
      this.lutBadgeElement.textContent = `LUT: ${lutName.toUpperCase()}`;
    }
  }

  updateTelemetry(normalizedX: number, normalizedY: number) {
    if (this.isoEl) {
      const iso = Math.round(100 + Math.abs(normalizedX) * 200);
      this.isoEl.textContent = iso.toString();
    }
    if (this.apEl) {
      const stops = ['f/2.8', 'f/3.2', 'f/4.0', 'f/5.6'];
      const idx = Math.min(stops.length - 1, Math.floor(Math.abs(normalizedY) * stops.length));
      this.apEl.textContent = stops[idx];
    }
    if (this.latEl) {
      const lat = (43.4 + normalizedX * 0.05).toFixed(2);
      this.latEl.textContent = `${lat}° N`;
    }
  }

  setMode(isInside: boolean) {
    if (this.isGradedActive === isInside) return;
    this.isGradedActive = isInside;
    if (this.modeBadgeElement) {
      if (isInside) {
        this.modeBadgeElement.className = 'mode-badge badge-graded';
        this.modeBadgeElement.textContent = 'GRADED';
      } else {
        this.modeBadgeElement.className = 'mode-badge badge-raw';
        this.modeBadgeElement.textContent = 'RAW';
      }
    }
  }

  dispose() {
    if (this.hudElement && this.hudElement.parentNode) {
      this.hudElement.parentNode.removeChild(this.hudElement);
    }
  }
}

