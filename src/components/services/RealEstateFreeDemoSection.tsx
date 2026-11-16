'use client';

import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
  FileCheck2,
  Layers,
  Camera,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface RealEstateFreeDemoSectionProps {
  accentColor?: string;
  onClaimFreeDemo?: () => void;
  onViewPortfolio?: () => void;
}

export function RealEstateFreeDemoSection({
  accentColor = '#d4af37',
  onClaimFreeDemo,
  onViewPortfolio,
}: RealEstateFreeDemoSectionProps) {
  const tickerItems = [
    '⚡ COMPLIMENTARY 5-PHOTO BENCHMARK DEMO',
    '• TEST VAIKA REAL ESTATE MEDIA PIPELINE 100% FREE',
    '• 12–24H GUARANTEED TURNAROUND SLA',
    '• 5 COMPLIMENTARY SAMPLE EDITS',
    '• HDR FLAMBIENT & CRISP WINDOW PULLS',
    '• DAY-TO-DUSK TWILIGHT RELIGHTING',
    '• PHOTOREALISTIC VIRTUAL STAGING',
    '• AERIAL DRONE COLOR GRADING',
    '• 16-BIT UNCOMPRESSED TIFF DELIVERY',
    '• ZERO RISK // ZERO FINANCIAL COMMITMENT',
    '• STRICT NDA & CLIENT CONFIDENTIALITY',
  ];

  return (
    <section
      id="free-demo"
      className="relative w-full bg-[#07070b] border-b border-white/10 overflow-hidden"
    >
      {/* ============================================================
          1. SLIDING ANIMATION (RIGHT TO LEFT)
      ============================================================ */}
      <div className="w-full bg-[#0d0e15] border-y border-[#d4af37]/30 py-3 overflow-hidden select-none relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.08)]">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {/* Looped for seamless infinite right-to-left marquee animation */}
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f5f6fa] hover:text-[#d4af37] transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/70" />
            </div>
          ))}
        </div>
      </div>

      {/* Atmospheric ambient backlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] blur-[150px] pointer-events-none rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* ============================================================
          2. SOLID & CAPTIVATING 5-PHOTO BENCHMARK MESSAGE CARD
      ============================================================ */}
      <div className="relative max-w-7xl mx-auto py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#0e0f17] via-[#0b0c12] to-[#07070b] border border-[#d4af37]/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Watermark */}
          <div className="absolute top-0 right-0 p-8 font-mono text-[90px] font-black text-white/[0.02] select-none pointer-events-none hidden md:block">
            05_DEMO
          </div>

          <div className="flex flex-col gap-8 relative z-10">
            {/* Top Badge & Live Telemetry Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest font-bold text-[#d4af37]">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span>{'//'} QUALITY VERIFICATION PROTOCOL • 5-PHOTO COMPLIMENTARY PILOT</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] font-mono text-[11px] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                  <span>5 IMAGES • 100% FREE • 12–24H SLA</span>
                </span>
              </div>
            </div>

            {/* Captivating Headline & Core Value Proposition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#f5f6fa] leading-[1.12]">
                  TEST OUR EDITING BENCHMARK.{' '}
                  <span style={{ color: accentColor }}>SEND 5 PHOTOS, ON US.</span>
                </h2>

                <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] leading-relaxed max-w-3xl">
                  Don’t risk your high-value property campaigns on unverified promises. Test VAIKA GROUP’s elite real estate media pipeline on your own live work with <strong className="text-white">5 complimentary sample edits</strong>.
                </p>

                <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] leading-relaxed max-w-3xl">
                  Send us 5 RAW bracketed exposures for HDR Flambient exposure blending, an exterior for Day-to-Dusk twilight conversion, or a vacant room for photorealistic virtual staging. We return publication-ready 16-bit master plates within <strong className="text-[#d4af37]">12 to 24 hours</strong>. Zero financial commitment. Zero risk.
                </p>
              </div>

              {/* Action Trigger Card */}
              <div className="lg:col-span-4 flex flex-col gap-3.5 bg-[#12131c]/90 rounded-xl p-5 sm:p-6 border border-[#d4af37]/25 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9ba1b3]">
                    PILOT CAPACITY
                  </span>
                  <span className="font-mono text-[10px] text-[#00f0ff] font-bold">
                    ACTIVE FOR REAL ESTATE
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
                    05 PHOTOS
                  </span>
                  <span className="font-mono text-xs text-[#d4af37] font-bold uppercase">
                    COMPLIMENTARY
                  </span>
                </div>

                <p className="font-['Manrope'] text-xs text-[#9ba1b3] leading-relaxed">
                  Includes your choice of Flambient HDR, Day-to-Dusk Twilight, Virtual Staging, or Aerial Drone Color.
                </p>

                <button
                  type="button"
                  onClick={onClaimFreeDemo}
                  style={{
                    backgroundColor: accentColor,
                    color: '#050507',
                  }}
                  className="w-full py-3.5 rounded-lg font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all cursor-pointer mt-1"
                >
                  <span>CLAIM 5 FREE DEMO EDITS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onViewPortfolio && (
                  <button
                    type="button"
                    onClick={onViewPortfolio}
                    className="w-full py-2.5 rounded-lg bg-[#161720] hover:bg-[#1f212c] text-[#9ba1b3] hover:text-white font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer border border-white/5"
                  >
                    VIEW RECENT BENCHMARKS →
                  </button>
                )}
              </div>
            </div>

            {/* 4 Trust & Specification Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded-lg bg-[#0a0a0f] border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f5f6fa]">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>12–24H SLA</span>
                </div>
                <span className="text-[11px] text-[#9ba1b3] font-mono">
                  Guaranteed delivery window
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0a0a0f] border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f5f6fa]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>100% FREE</span>
                </div>
                <span className="text-[11px] text-[#9ba1b3] font-mono">
                  No credit card required
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0a0a0f] border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f5f6fa]">
                  <FileCheck2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>16-BIT TIFF</span>
                </div>
                <span className="text-[11px] text-[#9ba1b3] font-mono">
                  Publication MLS & Print specs
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0a0a0f] border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f5f6fa]">
                  <Layers className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  <span>STRICT NDA</span>
                </div>
                <span className="text-[11px] text-[#9ba1b3] font-mono">
                  Confidential client handling
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
