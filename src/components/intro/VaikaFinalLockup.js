import { VaikaWordmark } from './VaikaWordmark.js';
import gsap from 'gsap';

export class VaikaFinalLockup {
  constructor(container, callbacks = {}) {
    this.container = container;
    this.callbacks = Object.assign({
      onLock: () => {}
    }, callbacks);

    this.emblemEl = null;
    this.wordmark = null;
    this.tl = null;
    this.isRevealing = false;

    this.init();
  }

  init() {
    // Emblem Container
    this.emblemEl = document.createElement('div');
    this.emblemEl.className = 'vaika-medium-emblem';
    this.emblemEl.setAttribute('aria-hidden', 'true');

    const logoImg = document.createElement('img');
    logoImg.className = 'vaika-medium-logo-img';
    logoImg.src = '/vaika-logo.webp';
    logoImg.onerror = () => {
      logoImg.src = '/vaika-logo.png';
    };
    logoImg.alt = 'VAIKA Emblem';
    logoImg.width = 300;
    logoImg.height = 200;
    logoImg.decoding = 'async';
    logoImg.draggable = false;
    this.emblemEl.appendChild(logoImg);

    this.container.appendChild(this.emblemEl);
    this.wordmark = new VaikaWordmark(this.container);
  }

  triggerFinalReveal() {
    if (this.isRevealing) return;
    this.isRevealing = true;

    this.tl = gsap.timeline({
      onComplete: () => {
        this.callbacks.onLock();
      }
    });

    const vLetters = this.wordmark.vaikaLetters;
    const gLetters = this.wordmark.groupLetters;
    const sweepWrapper = this.wordmark.sweepWrapper;
    const sweepBeam = this.wordmark.sweepBeam;

    // 1. Cross-fade Stage to Pure Black
    this.tl.to(this.container, {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.inOut'
    }, 0);

    // 2. Emblem Scale Settle (1.12 -> 1.00)
    this.tl.fromTo(this.emblemEl, {
      scale: 1.12,
      opacity: 0.7
    }, {
      scale: 1.0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out'
    }, 0);

    // 3. VAIKA Glyphs Stagger (0.06s stagger)
    const vaikaStart = 0.25;
    vLetters.forEach((letter, index) => {
      this.tl.fromTo(letter, {
        opacity: 0,
        y: 12,
        scale: 0.98,
        filter: 'blur(6px)'
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.38,
        ease: 'power3.out'
      }, vaikaStart + index * 0.06);
    });

    // 4. GROUP Glyphs Stagger (0.06s stagger)
    const groupStart = vaikaStart + 0.35;
    gLetters.forEach((letter, index) => {
      this.tl.fromTo(letter, {
        opacity: 0,
        y: 12,
        scale: 0.98,
        filter: 'blur(6px)'
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.38,
        ease: 'power3.out'
      }, groupStart + index * 0.06);
    });

    // 5. Specular Sweep (All the way past "GROUP")
    const sweepStart = groupStart + 0.35;
    this.tl.set(sweepWrapper, { opacity: 1 }, sweepStart);
    this.tl.fromTo(sweepBeam, {
      xPercent: -160
    }, {
      xPercent: 880,
      duration: 1.15,
      ease: 'power2.inOut'
    }, sweepStart);

    this.tl.to(sweepWrapper, {
      opacity: 0,
      duration: 0.25,
      ease: 'power1.out'
    }, sweepStart + 1.05);

    return this.tl;
  }

  kill() {
    if (this.tl) {
      this.tl.kill();
      this.tl = null;
    }
    if (this.wordmark) this.wordmark.dispose();
  }
}

