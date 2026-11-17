import { VaikaVideo } from './VaikaVideo.js';
import { VaikaFinalLockup } from './VaikaFinalLockup.js';
import gsap from 'gsap';

export class VaikaIntro {
  constructor(options = {}) {
    this.options = Object.assign({
      onStart: () => {},
      onComplete: () => {}
    }, options);

    this.rootContainer = document.getElementById('vaika-intro-root');
    this.websiteRoot = document.getElementById('website-root');
    this.siteNav = document.getElementById('site-nav');

    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    this.isForceIntro = urlParams ? urlParams.get('intro') === 'force' : false;
    this.hasSeenIntro = typeof window !== 'undefined' && sessionStorage.getItem('vaika_intro_seen') === 'true';
    this.prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.videoContainer = null;
    this.videoComponent = null;
    this.lockupStage = null;
    this.finalLockup = null;
    this.isTransitioned = false;

    this.init();
  }

  init() {
    if (!this.rootContainer) return;

    // Check session
    if (this.hasSeenIntro && !this.isForceIntro) {
      this.skipInstantly();
      return;
    }

    this.options.onStart();

    this.rootContainer.innerHTML = '';
    this.rootContainer.style.background = '#000000';
    this.rootContainer.style.opacity = '1';
    this.rootContainer.style.display = 'block';
    this.rootContainer.style.pointerEvents = 'auto';

    // 1. Fullscreen Video Container
    this.videoContainer = document.createElement('div');
    this.videoContainer.className = 'vaika-video-container';
    this.rootContainer.appendChild(this.videoContainer);

    // 2. Lockup Stage
    this.lockupStage = document.createElement('div');
    this.lockupStage.className = 'vaika-lockup-stage';
    this.rootContainer.appendChild(this.lockupStage);

    // 3. Final Lockup Controller
    this.finalLockup = new VaikaFinalLockup(this.lockupStage, {
      onLock: () => {
        // Hold on black for 2.4s then transition
        setTimeout(() => {
          this.transitionToWebsite();
        }, 2400);
      }
    });

    // 4. Video Engine
    this.videoComponent = new VaikaVideo(this.videoContainer, {
      onTimeUpdate: (currentTime, duration) => {
        // Crossfade to lockup at duration - 1.4s
        const triggerTime = Math.max(0.2, duration - 1.4);
        if (currentTime >= triggerTime) {
          this.finalLockup.triggerFinalReveal();
        }
      },
      onEnded: () => {
        if (this.videoComponent) this.videoComponent.pause();
        this.finalLockup.triggerFinalReveal();
      },
      onError: () => {
        this.finalLockup.triggerFinalReveal();
      }
    });

    if (this.prefersReducedMotion) {
      this.playReducedMotion();
    }

    // Click anywhere to skip
    this.rootContainer.style.cursor = 'pointer';
    this.rootContainer.addEventListener('click', () => {
      this.transitionToWebsite();
    }, { once: true });
  }

  transitionToWebsite() {
    if (this.isTransitioned) return;
    this.isTransitioned = true;

    try {
      sessionStorage.setItem('vaika_intro_seen', 'true');
    } catch {}

    // Fade out intro root
    gsap.to(this.rootContainer, {
      opacity: 0,
      duration: 0.7,
      ease: 'power3.inOut',
      onComplete: () => {
        if (this.rootContainer) {
          this.rootContainer.style.display = 'none';
          this.rootContainer.style.pointerEvents = 'none';
        }
        if (this.videoComponent) this.videoComponent.pause();
        this.options.onComplete();
      }
    });

    // Reveal site content
    if (this.websiteRoot) this.websiteRoot.classList.add('revealed');
    if (this.siteNav) this.siteNav.classList.add('visible');
  }

  skipInstantly() {
    if (this.rootContainer) {
      this.rootContainer.style.display = 'none';
      this.rootContainer.style.opacity = '0';
      this.rootContainer.style.pointerEvents = 'none';
    }
    if (this.websiteRoot) this.websiteRoot.classList.add('revealed');
    if (this.siteNav) this.siteNav.classList.add('visible');
    this.options.onComplete();
  }

  playReducedMotion() {
    if (this.finalLockup && this.finalLockup.wordmark) {
      gsap.set([...this.finalLockup.wordmark.vaikaLetters, ...this.finalLockup.wordmark.groupLetters], {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'none'
      });
    }
    setTimeout(() => {
      this.transitionToWebsite();
    }, 2000);
  }

  dispose() {
    if (this.videoComponent) this.videoComponent.dispose();
    if (this.finalLockup) this.finalLockup.kill();
  }
}

