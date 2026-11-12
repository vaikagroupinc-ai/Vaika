// LUT Color Grade Selector Component
export interface LutPreset {
  id: string;
  name: string;
  filter: string;
}

export const LUT_PRESETS: LutPreset[] = [
  {
    id: 'cinematic',
    name: 'Cinematic',
    filter: 'contrast(1.18) saturate(1.22) brightness(0.96) hue-rotate(-2deg)',
  },
  {
    id: 'warm',
    name: 'Warm Home',
    filter: 'contrast(1.10) saturate(1.35) brightness(1.02) sepia(0.20)',
  },
  {
    id: 'cool',
    name: 'Cool Modern',
    filter: 'contrast(1.22) saturate(0.92) brightness(0.98) hue-rotate(15deg)',
  },
  {
    id: 'natural',
    name: 'Natural',
    filter: 'contrast(1.04) saturate(1.08) brightness(1.0)',
  },
];

export class GradeChips {
  private container: HTMLElement;
  private onGradeChange: (preset: LutPreset) => void;
  private element: HTMLDivElement | null = null;
  private activeId = 'cinematic';
  private buttons: HTMLButtonElement[] = [];

  constructor(container: HTMLElement, onGradeChange?: (preset: LutPreset) => void) {
    this.container = container;
    this.onGradeChange = onGradeChange || (() => {});
    this.init();
  }

  private init() {
    this.element = document.createElement('div');
    this.element.className = 'grade-chips-container';
    this.element.setAttribute('role', 'radiogroup');
    this.element.setAttribute('aria-label', 'Color Grade LUT Selector');

    const label = document.createElement('span');
    label.className = 'grade-chips-label';
    label.textContent = 'GRADE //';
    this.element.appendChild(label);

    const chipsWrapper = document.createElement('div');
    chipsWrapper.className = 'grade-chips-wrapper';

    LUT_PRESETS.forEach((preset, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `grade-chip-btn ${preset.id === this.activeId ? 'active' : ''}`;
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', preset.id === this.activeId ? 'true' : 'false');
      btn.setAttribute('tabindex', preset.id === this.activeId ? '0' : '-1');
      btn.setAttribute('data-id', preset.id);
      btn.textContent = preset.name;

      btn.addEventListener('click', () => this.selectGrade(preset.id, false));
      btn.addEventListener('keydown', (e) => this.handleKeyDown(e, index));

      chipsWrapper.appendChild(btn);
      this.buttons.push(btn);
    });

    this.element.appendChild(chipsWrapper);
    this.container.appendChild(this.element);

    const defaultPreset = LUT_PRESETS.find((p) => p.id === this.activeId);
    if (defaultPreset) this.onGradeChange(defaultPreset);
  }

  selectGrade(id: string, shouldFocus = true) {
    this.activeId = id;
    const selected = LUT_PRESETS.find((p) => p.id === id);

    this.buttons.forEach((btn) => {
      const isSelected = btn.getAttribute('data-id') === id;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      btn.setAttribute('tabindex', isSelected ? '0' : '-1');
      if (isSelected && shouldFocus) btn.focus();
    });

    if (selected) this.onGradeChange(selected);
  }

  private handleKeyDown(e: KeyboardEvent, index: number) {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % this.buttons.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (index - 1 + this.buttons.length) % this.buttons.length;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      this.selectGrade(LUT_PRESETS[nextIndex].id, true);
    }
  }

  dispose() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

