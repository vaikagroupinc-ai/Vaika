'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ImageOff,
  FolderOpen,
  SplitSquareHorizontal,
  Images,
  Clock,
  Layers,
} from 'lucide-react';
import { DemonstrationItem } from '@/types';
import { BeforeAfterCompare } from './BeforeAfterCompare';

interface ProjectGalleryModalProps {
  project: DemonstrationItem | null;
  accentColor?: string;
  onClose: () => void;
  returnFocusTo?: HTMLElement | null;
}

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ProjectGalleryModal({
  project,
  accentColor = '#d4af37',
  onClose,
  returnFocusTo,
}: ProjectGalleryModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const [prevProjectId, setPrevProjectId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'gallery' | 'compare'>('gallery');
  const [activeCompareIdx, setActiveCompareIdx] = useState<number>(0);
  const [loadedSrcs, setLoadedSrcs] = useState<Record<string, boolean>>({});
  const [failedSrcs, setFailedSrcs] = useState<Record<string, boolean>>({});

  const currentProjectId = project?.id ?? null;
  if (currentProjectId !== prevProjectId) {
    setPrevProjectId(currentProjectId);
    setActiveIndex(0);
    setActiveCompareIdx(0);
    setViewMode('gallery');
  }

  const slides = useMemo(() => {
    if (!project) return [];
    if (project.gallery && project.gallery.length > 0) {
      return project.gallery;
    }
    return [
      {
        id: `${project.id}-cover`,
        title: project.title,
        caption: project.description,
        src: project.image,
        alt: project.imageAlt || project.title,
        assetRole: project.badge,
      },
    ];
  }, [project]);

  const comparisons = project?.beforeAfterPairs ?? [];
  const hasComparisons = comparisons.length > 0;
  const currentSlide = slides[activeIndex] ?? slides[0];

  // Lock background scroll & restore focus cleanly on close
  useEffect(() => {
    if (!project) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const previousFocused =
      returnFocusTo || (document.activeElement as HTMLElement | null);

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 20);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      if (previousFocused && typeof previousFocused.focus === 'function') {
        previousFocused.focus({ preventScroll: true });
      }
    };
  }, [project, returnFocusTo]);

  const goPrev = useCallback(() => {
    setActiveIndex((idx) => (idx > 0 ? idx - 1 : idx));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((idx) => (idx < slides.length - 1 ? idx + 1 : idx));
  }, [slides.length]);

  // Preload only the adjacent next verified image to keep initial load light
  useEffect(() => {
    if (!project || viewMode !== 'gallery') return;
    const nextSlide = slides[activeIndex + 1];
    if (nextSlide?.src && typeof window !== 'undefined') {
      const preload = new window.Image();
      preload.src = nextSlide.src;
    }
  }, [project, activeIndex, slides, viewMode]);

  // Smoothly scroll the active thumbnail into horizontal view
  useEffect(() => {
    const thumbEl = thumbRefs.current[activeIndex];
    if (thumbEl) {
      thumbEl.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeIndex, prefersReducedMotion]);

  // Keyboard navigation + modal focus trapping
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      const activeRole = (document.activeElement as HTMLElement | null)?.getAttribute('role');
      if (viewMode === 'gallery' && activeRole !== 'slider') {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goPrev();
          return;
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          goNext();
          return;
        }
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => el.offsetParent !== null);

        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, goPrev, goNext, viewMode]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (viewMode !== 'gallery' || e.touches.length !== 1) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (viewMode !== 'gallery' || !touchStartRef.current || e.changedTouches.length === 0) {
      return;
    }
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  const formatCounter = (n: number) => String(n).padStart(2, '0');
  const currentSrc = currentSlide?.src;
  const isCurrentLoaded = currentSrc ? Boolean(loadedSrcs[currentSrc]) : false;
  const isCurrentFailed = currentSrc ? Boolean(failedSrcs[currentSrc]) : false;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-gallery-backdrop"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[100] bg-[#050507]/96 backdrop-blur-2xl flex flex-col justify-between overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          aria-describedby="gallery-modal-subtitle"
          ref={modalRef}
          style={{
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          <motion.div
            key={project.id}
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.985, y: 8 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.985, y: 8 }
            }
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col justify-between gap-4 overflow-y-auto md:overflow-hidden"
          >
            {/* ============================================================
                TOP HEADER
            ============================================================ */}
            <header className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10 shrink-0">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
                  <span style={{ color: accentColor }} className="font-bold">
                    {project.category}
                  </span>
                  <span className="text-white/25">/</span>
                  <span className="text-[#9ba1b3]">{project.badge}</span>
                </div>
                <h2
                  id="gallery-modal-title"
                  className="font-['Space_Grotesk'] text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#f5f6fa] truncate mt-0.5"
                >
                  {project.title}
                </h2>
                <p id="gallery-modal-subtitle" className="sr-only">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                {hasComparisons && (
                  <div
                    role="tablist"
                    aria-label="Gallery View Mode"
                    className="flex items-center p-0.5 rounded bg-[#0f1017] border border-white/10 font-mono text-[11px]"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={viewMode === 'gallery'}
                      onClick={() => setViewMode('gallery')}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                        viewMode === 'gallery'
                          ? 'bg-[#1a1c26] text-[#f5f6fa] font-semibold'
                          : 'text-[#9ba1b3] hover:text-white'
                      }`}
                    >
                      <Images className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">GALLERY</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={viewMode === 'compare'}
                      onClick={() => setViewMode('compare')}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                        viewMode === 'compare'
                          ? 'bg-[#1a1c26] font-semibold'
                          : 'text-[#9ba1b3] hover:text-white'
                      }`}
                      style={viewMode === 'compare' ? { color: accentColor } : undefined}
                    >
                      <SplitSquareHorizontal className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">BEFORE / AFTER</span>
                    </button>
                  </div>
                )}

                {viewMode === 'gallery' && (
                  <div
                    aria-live="polite"
                    className="font-mono text-xs px-3 py-1.5 rounded bg-[#0f1017] border border-white/10 text-[#f5f6fa] tabular-nums"
                  >
                    <span style={{ color: accentColor }} className="font-bold">
                      {formatCounter(activeIndex + 1)}
                    </span>
                    <span className="text-white/30 mx-1">/</span>
                    <span className="text-[#9ba1b3]">{formatCounter(slides.length)}</span>
                  </div>
                )}

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close project gallery"
                  className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded bg-[#12131a] hover:bg-[#1b1d28] text-[#f5f6fa] border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] transition-colors cursor-pointer"
                >
                  <span className="hidden sm:inline">CLOSE [ESC]</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* ============================================================
                MAIN VISUAL STAGE
            ============================================================ */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative flex-1 min-h-[260px] sm:min-h-[360px] w-full rounded-xl bg-[#0a0b10] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl"
            >
              {viewMode === 'compare' && hasComparisons ? (
                <div className="w-full h-full p-2 sm:p-4 flex flex-col gap-3">
                  <BeforeAfterCompare
                    pair={comparisons[activeCompareIdx] ?? comparisons[0]}
                    accentColor={accentColor}
                  />
                  {comparisons.length > 1 && (
                    <div className="flex justify-center gap-2">
                      {comparisons.map((pair, idx) => (
                        <button
                          key={pair.id}
                          type="button"
                          onClick={() => setActiveCompareIdx(idx)}
                          className={`px-3 py-1 rounded font-mono text-[11px] uppercase border transition-colors cursor-pointer ${
                            idx === activeCompareIdx
                              ? 'bg-[#1a1c26] text-white border-[#d4af37]/60'
                              : 'bg-[#0f1017] text-[#9ba1b3] border-white/10 hover:text-white'
                          }`}
                        >
                          {pair.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide?.id || 'empty-slide'}
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
                      className="relative w-full h-full flex items-center justify-center p-2 sm:p-6"
                    >
                      {currentSrc && !isCurrentFailed ? (
                        <div className="relative w-full h-full min-h-[240px]">
                          {!isCurrentLoaded && (
                            <div
                              aria-hidden="true"
                              className="absolute inset-4 rounded-lg bg-[#12131a] animate-pulse border border-white/5"
                            />
                          )}
                          <Image
                            src={currentSrc}
                            alt={currentSlide.alt}
                            fill
                            priority={activeIndex === 0}
                            sizes="(max-width: 1024px) 100vw, 85vw"
                            className="object-contain select-none"
                            onLoad={() =>
                              setLoadedSrcs((prev) => ({ ...prev, [currentSrc]: true }))
                            }
                            onError={() =>
                              setFailedSrcs((prev) => ({ ...prev, [currentSrc]: true }))
                            }
                          />
                        </div>
                      ) : isCurrentFailed ? (
                        <div className="max-w-md mx-auto p-6 rounded-xl bg-[#0f1017] border border-white/10 text-center flex flex-col items-center gap-3">
                          <ImageOff className="w-8 h-8 text-[#9ba1b3]" />
                          <span className="font-mono text-xs uppercase tracking-widest text-[#f5f6fa]">
                            IMAGE UNAVAILABLE
                          </span>
                          <p className="font-['Manrope'] text-xs text-[#9ba1b3] leading-relaxed">
                            Unable to load <code className="text-white/80">{currentSrc}</code>. Verify the file exists or update this entry in{' '}
                            <code>realEstatePortfolioGallery.ts</code>.
                          </p>
                        </div>
                      ) : (
                        <div className="max-w-lg mx-auto p-6 sm:p-8 rounded-xl bg-[#0f1017]/90 border border-dashed border-[#d4af37]/35 text-center flex flex-col items-center gap-3">
                          <div
                            className="w-11 h-11 rounded-full bg-[#161720] border border-[#d4af37]/30 flex items-center justify-center"
                            style={{ color: accentColor }}
                          >
                            <FolderOpen className="w-5 h-5" />
                          </div>
                          <span
                            className="font-mono text-[10px] uppercase tracking-widest font-bold"
                            style={{ color: accentColor }}
                          >
                            SLOT {formatCounter(activeIndex + 1)} {'//'} {currentSlide?.assetRole || 'GALLERY ASSET'}
                          </span>
                          <h3 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold uppercase text-[#f5f6fa]">
                            {currentSlide?.title}
                          </h3>
                          {currentSlide?.caption && (
                            <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3] leading-relaxed">
                              {currentSlide.caption}
                            </p>
                          )}
                          {currentSlide?.expectedAssetPath && (
                            <div className="mt-1 px-3 py-1.5 rounded bg-[#050507] border border-white/10 font-mono text-[11px] text-[#f5f6fa]/80 break-all">
                              Asset Slot: public{currentSlide.expectedAssetPath}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Previous / Next Controls */}
                  {slides.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={goPrev}
                        disabled={activeIndex === 0}
                        aria-label="Previous project image"
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#050507]/85 border border-white/15 text-[#f5f6fa] flex items-center justify-center backdrop-blur transition-all hover:border-[#d4af37]/60 hover:text-[#d4af37] disabled:opacity-25 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        disabled={activeIndex === slides.length - 1}
                        aria-label="Next project image"
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#050507]/85 border border-white/15 text-[#f5f6fa] flex items-center justify-center backdrop-blur transition-all hover:border-[#d4af37]/60 hover:text-[#d4af37] disabled:opacity-25 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </>
              )}
            </div>

            {/* ============================================================
                BOTTOM AREA — CAPTION, METADATA & THUMBNAIL STRIP
            ============================================================ */}
            <footer className="flex flex-col gap-3 shrink-0 pt-1">
              {/* Slide Caption & Project Specs */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 px-1">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#f5f6fa]">
                      {viewMode === 'compare' && comparisons[activeCompareIdx]
                        ? comparisons[activeCompareIdx].title
                        : currentSlide?.title}
                    </span>
                    {currentSlide?.assetRole && viewMode === 'gallery' && (
                      <span
                        className="font-mono text-[10px] uppercase px-2 py-0.5 rounded border"
                        style={{
                          borderColor: `${accentColor}45`,
                          color: accentColor,
                          backgroundColor: '#0f1017',
                        }}
                      >
                        {currentSlide.src ? currentSlide.assetRole : `${currentSlide.assetRole} • Slot`}
                      </span>
                    )}
                  </div>
                  {(viewMode === 'compare'
                    ? comparisons[activeCompareIdx]?.caption
                    : currentSlide?.caption) && (
                    <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-0.5 line-clamp-2">
                      {viewMode === 'compare'
                        ? comparisons[activeCompareIdx]?.caption
                        : currentSlide?.caption}
                    </p>
                  )}
                </div>

                {project.projectDetails && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-[#9ba1b3] shrink-0">
                    {project.projectDetails.deliverableSpec && (
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" style={{ color: accentColor }} />
                        <span>{project.projectDetails.deliverableSpec}</span>
                      </span>
                    )}
                    {project.projectDetails.turnaround && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" style={{ color: accentColor }} />
                        <span>{project.projectDetails.turnaround}</span>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Thumbnail Strip (Gallery Mode) */}
              {viewMode === 'gallery' && slides.length > 0 && (
                <div
                  role="list"
                  aria-label="Project gallery thumbnails"
                  className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-thin"
                >
                  {slides.map((slide, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={slide.id}
                        ref={(el) => {
                          thumbRefs.current[idx] = el;
                        }}
                        type="button"
                        role="listitem"
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`View image ${idx + 1}: ${slide.title}`}
                        aria-current={isActive ? 'true' : undefined}
                        className={`relative shrink-0 w-24 sm:w-28 h-14 sm:h-16 rounded-md overflow-hidden border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] cursor-pointer ${
                          isActive
                            ? 'ring-1 bg-[#141620]'
                            : 'border-white/10 bg-[#0b0c12] opacity-65 hover:opacity-100 hover:border-white/30'
                        }`}
                        style={
                          isActive
                            ? {
                                borderColor: accentColor,
                                boxShadow: `0 0 0 1px ${accentColor}80`,
                              }
                            : undefined
                        }
                      >
                        {slide.src && !failedSrcs[slide.src] ? (
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            loading="lazy"
                            sizes="120px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center px-1.5 text-center bg-[#0e0f17]">
                            <span
                              className="font-mono text-[9px] uppercase font-bold"
                              style={{ color: isActive ? accentColor : '#9ba1b3' }}
                            >
                              SLOT {formatCounter(idx + 1)}
                            </span>
                            <span className="font-['Manrope'] text-[9px] text-[#9ba1b3] truncate w-full">
                              {slide.assetRole || slide.title}
                            </span>
                          </div>
                        )}
                        <span className="absolute bottom-1 left-1 px-1 py-0.2 rounded bg-[#050507]/85 font-mono text-[9px] text-[#f5f6fa]">
                          {formatCounter(idx + 1)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

