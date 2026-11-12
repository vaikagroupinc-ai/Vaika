import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let pluginRegistered = false;

function ensureScrollTrigger(): void {
  if (!pluginRegistered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    pluginRegistered = true;
  }
}

export interface HeroMotionElements {
  section: HTMLElement;
  mediaStage: HTMLElement;
  heroBlock: HTMLElement;
  scrollCue: HTMLElement | null;
  storyBeatOne: HTMLElement | null;
  storyBeatTwo: HTMLElement | null;
  exitVeil: HTMLElement | null;
  progressBar: HTMLElement | null;
}

export interface HeroMotionCallbacks {
  onFrameProgress: (normalizedProgress: number) => void;
  onModeChange?: (mode: 'desktop' | 'tablet' | 'mobile' | 'reduced') => void;
}

export interface HeroMotionController {
  refresh: () => void;
  dispose: () => void;
}

/**
 * Configures responsive GSAP ScrollTrigger pinning and timeline choreography
 * for the architectural villa hero section with clean matchMedia teardown.
 */
export function createHeroScrollMotion(
  elements: HeroMotionElements,
  callbacks: HeroMotionCallbacks
): HeroMotionController {
  ensureScrollTrigger();

  const {
    section,
    mediaStage,
    heroBlock,
    scrollCue,
    storyBeatOne,
    storyBeatTwo,
    exitVeil,
    progressBar,
  } = elements;

  const setStaticHeroState = () => {
    gsap.set(mediaStage, { clearProps: 'transform,opacity' });
    gsap.set(heroBlock, { opacity: 1, y: 0, clearProps: 'transform' });
    heroBlock.style.pointerEvents = 'auto';
    if (scrollCue) gsap.set(scrollCue, { opacity: 1, y: 0 });
    if (storyBeatOne) gsap.set(storyBeatOne, { opacity: 0, y: 12 });
    if (storyBeatTwo) gsap.set(storyBeatTwo, { opacity: 0, y: 12 });
    if (exitVeil) gsap.set(exitVeil, { opacity: 0 });
    if (progressBar) gsap.set(progressBar, { scaleX: 0 });
  };

  const mm = gsap.matchMedia();

  const buildPinnedSequence = (
    pinDistance: string,
    scrubValue: number,
    mode: 'desktop' | 'tablet' | 'mobile'
  ) => {
    callbacks.onModeChange?.(mode);
    setStaticHeroState();

    // Fast, restrained entrance without obscuring initial LCP visibility
    gsap.fromTo(
      heroBlock,
      { opacity: 0.78, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'transform',
      }
    );

    const frameDriver = { progress: 0 };

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: pinDistance,
        pin: true,
        pinSpacing: true,
        scrub: scrubValue,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          heroBlock.style.pointerEvents = self.progress < 0.24 ? 'auto' : 'none';
        },
        onRefresh: () => {
          callbacks.onFrameProgress(frameDriver.progress);
        },
      },
    });

    // PHASE 2: Linear deterministic frame scrubbing across 0.00 -> 0.90
    tl.to(
      frameDriver,
      {
        progress: 1,
        duration: 0.9,
        ease: 'none',
        onUpdate: () => {
          callbacks.onFrameProgress(frameDriver.progress);
        },
      },
      0
    );

    if (progressBar) {
      tl.to(
        progressBar,
        {
          scaleX: 1,
          duration: 0.9,
          ease: 'none',
        },
        0
      );
    }

    // PHASE 1 -> 3: Restrained opening block exit so architecture remains center stage
    if (scrollCue) {
      tl.to(scrollCue, { opacity: 0, y: 8, duration: 0.1, ease: 'power1.out' }, 0.04);
    }

    tl.to(
      heroBlock,
      {
        opacity: 0,
        y: -18,
        duration: 0.12,
        ease: 'power1.inOut',
      },
      0.18
    );

    // PHASE 3: Restrained architectural storytelling beats
    if (storyBeatOne) {
      tl.fromTo(
        storyBeatOne,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.09, ease: 'power2.out' },
        0.31
      ).to(
        storyBeatOne,
        { opacity: 0, y: -10, duration: 0.08, ease: 'power1.in' },
        0.52
      );
    }

    if (storyBeatTwo) {
      tl.fromTo(
        storyBeatTwo,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.09, ease: 'power2.out' },
        0.61
      ).to(
        storyBeatTwo,
        { opacity: 0, y: -10, duration: 0.08, ease: 'power1.in' },
        0.8
      );
    }

    // PHASE 4: Seamless dark architectural exit connecting into ServicesSection
    tl.to(
      mediaStage,
      {
        scale: mode === 'mobile' ? 0.99 : 0.985,
        opacity: 0.88,
        duration: 0.11,
        ease: 'power1.inOut',
      },
      0.89
    );

    if (exitVeil) {
      tl.to(
        exitVeil,
        {
          opacity: 0.9,
          duration: 0.11,
          ease: 'power1.in',
        },
        0.89
      );
    }

    callbacks.onFrameProgress(0);
  };

  mm.add('(prefers-reduced-motion: reduce)', () => {
    callbacks.onModeChange?.('reduced');
    setStaticHeroState();
    callbacks.onFrameProgress(0);
  });

  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    buildPinnedSequence('+=2200', 0.35, 'desktop');
  });

  mm.add('(min-width: 768px) and (max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
    buildPinnedSequence('+=1500', 0.35, 'tablet');
  });

  mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
    buildPinnedSequence('+=900', 0.25, 'mobile');
  });

  // Refresh ScrollTrigger once VaikaIntro reveals #website-root or fonts settle
  let introObserver: MutationObserver | null = null;
  let refreshTimer: number | null = null;

  const scheduleRefresh = () => {
    if (refreshTimer !== null) window.clearTimeout(refreshTimer);
    refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
  };

  const websiteRoot = document.getElementById('website-root');
  if (websiteRoot && !websiteRoot.classList.contains('revealed')) {
    introObserver = new MutationObserver(() => {
      if (websiteRoot.classList.contains('revealed')) {
        scheduleRefresh();
        introObserver?.disconnect();
        introObserver = null;
      }
    });
    introObserver.observe(websiteRoot, { attributes: true, attributeFilter: ['class'] });
  }

  if (typeof document !== 'undefined' && document.fonts?.ready) {
    document.fonts.ready.then(() => {
      scheduleRefresh();
    }).catch(() => {});
  }

  return {
    refresh: () => ScrollTrigger.refresh(),
    dispose: () => {
      if (refreshTimer !== null) {
        window.clearTimeout(refreshTimer);
        refreshTimer = null;
      }
      introObserver?.disconnect();
      introObserver = null;
      mm.revert();
    },
  };
}

