'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PARTNERS_TICKER, TESTIMONIALS } from '@/data/content';
import { WaveformVisualizer } from '@/components/ui/WaveformVisualizer';

export function ValidationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full py-20 bg-[#12131a] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-['Space_Grotesk'] text-xs text-[#9ba1b3] tracking-widest uppercase font-bold">
              {'//'} VALIDATION
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f6fa] mt-1">
              TRUSTED TO CREATE.<br />
              <span className="text-[#d4af37]">BUILT TO DELIVER.</span>
            </h2>
          </div>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] max-w-sm">
            Collaborating with real estate professionals, visionary developers, and enterprise partners across global markets.
          </p>
        </div>

        {/* Infinite Logo Ticker */}
        <div className="w-full overflow-hidden py-4 relative mb-12 border-y border-white/5 bg-[#0a0a0f]">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee">
            <div className="flex items-center gap-10 font-['Space_Grotesk'] text-sm sm:text-base tracking-widest text-[#9ba1b3]/40 uppercase shrink-0">
              {PARTNERS_TICKER.map((partner, idx) => (
                <React.Fragment key={idx}>
                  <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                    {partner}
                  </span>
                  <span className="text-[#d4af37]">•</span>
                </React.Fragment>
              ))}
            </div>
            {/* Seamless clone */}
            <div
              aria-hidden="true"
              className="flex items-center gap-10 font-['Space_Grotesk'] text-sm sm:text-base tracking-widest text-[#9ba1b3]/40 uppercase shrink-0"
            >
              {PARTNERS_TICKER.map((partner, idx) => (
                <React.Fragment key={`clone-${idx}`}>
                  <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                    {partner}
                  </span>
                  <span className="text-[#d4af37]">•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Testimonial Carousel */}
        <div className="relative bg-[#0f1017] rounded-lg p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                <span className="font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest font-semibold">
                  VERIFIED PRODUCTION AUDIT
                </span>
              </div>

              <p className="font-['Space_Grotesk'] text-xl sm:text-2xl lg:text-3xl text-[#f5f6fa] leading-snug font-medium min-h-[100px] flex items-center">
                {current.quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#20222d] border border-white/10 flex items-center justify-center font-['Space_Grotesk'] text-sm font-bold text-[#d4af37] shrink-0">
                  {current.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#f5f6fa] uppercase">
                    {current.author}
                  </h4>
                  <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3]">
                    {current.role} • {current.company}, {current.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Waveform Visualizer Card & Carousel Controls */}
            <div className="w-full lg:w-80 shrink-0 flex flex-col gap-3">
              <WaveformVisualizer
                memoId={current.audioMemoId}
                duration={current.duration}
              />
              <div className="flex justify-between items-center px-1">
                <span className="font-mono text-xs text-[#9ba1b3]">
                  AUDIT [0{currentIndex + 1} / 0{TESTIMONIALS.length}]
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous audit"
                    className="w-8 h-8 rounded bg-[#161720] hover:bg-[#20222d] border border-white/10 flex items-center justify-center text-[#f5f6fa] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next audit"
                    className="w-8 h-8 rounded bg-[#161720] hover:bg-[#20222d] border border-white/10 flex items-center justify-center text-[#f5f6fa] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
