export class VaikaWordmark {
  constructor(container) {
    this.container = container;
    this.element = null;
    this.vaikaLetters = [];
    this.groupLetters = [];
    this.sweepWrapper = null;
    this.sweepBeam = null;
    this.init();
  }

  init() {
    this.element = document.createElement('div');
    this.element.className = 'vaika-wordmark';
    this.element.setAttribute('aria-label', 'VAIKA GROUP');

    // 1. "VAIKA" Glyphs
    const vaikaWordEl = document.createElement('span');
    vaikaWordEl.className = 'vaika-word';
    for (const char of 'VAIKA') {
      const span = document.createElement('span');
      span.className = 'letter letter-vaika';
      span.textContent = char;
      vaikaWordEl.appendChild(span);
      this.vaikaLetters.push(span);
    }

    // 2. "GROUP" Glyphs
    const groupWordEl = document.createElement('span');
    groupWordEl.className = 'group-word';
    for (const char of 'GROUP') {
      const span = document.createElement('span');
      span.className = 'letter letter-group';
      span.textContent = char;
      groupWordEl.appendChild(span);
      this.groupLetters.push(span);
    }

    // 3. Sweep Beam
    this.sweepWrapper = document.createElement('div');
    this.sweepWrapper.className = 'wordmark-sweep-wrapper';
    this.sweepBeam = document.createElement('div');
    this.sweepBeam.className = 'wordmark-sweep-beam';
    this.sweepWrapper.appendChild(this.sweepBeam);

    this.element.appendChild(vaikaWordEl);
    this.element.appendChild(groupWordEl);
    this.element.appendChild(this.sweepWrapper);
    this.container.appendChild(this.element);
  }

  dispose() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.vaikaLetters = [];
    this.groupLetters = [];
    this.sweepWrapper = null;
    this.sweepBeam = null;
  }
}

