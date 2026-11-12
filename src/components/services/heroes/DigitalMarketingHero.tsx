'use client';

import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface DigitalMarketingHeroProps {
  onExploreServices: () => void;
  onRequestQuote: () => void;
}

export function DigitalMarketingHero({ onExploreServices, onRequestQuote }: DigitalMarketingHeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#050507] pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5"
    >
      {/* Crimson / Champagne Creative Atmospheric Glow */}
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,51,102,0.08)_0%,transparent_70%)] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#292931_1px,transparent_1px)] [background-size:36px_36px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Division Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-white/10 font-mono text-xs text-[#9ba1b3]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-[#ff3366]/10 text-[#ff3366] font-bold uppercase tracking-wider text-[11px]">
              DIV // 04
            </span>
            <span className="text-[#f5f6fa] uppercase tracking-widest font-semibold">
              STRATEGIC GROWTH & CREATIVE ENGINE
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 text-[#ff3366]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366] animate-ping" />
              <span>LIVE: GLOBAL BRAND ACQUISITION</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-[#161722] text-[#d4af37] border border-white/5 font-semibold">
              ROAS BENCHMARK: 4.82X
            </span>
          </div>
        </div>

        {/* Hero Asymmetrical Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typographic Monolith */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#161722] text-[#ff3366] font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-widest border border-white/5">
                DIVISION 04 // DIGITAL GROWTH & BRAND SYSTEMS
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#f5f6fa] uppercase tracking-tight leading-[0.98]">
              MAKE YOUR BRAND{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] via-[#d4af37] to-white">
                IMPOSSIBLE
              </span>{' '}
              TO IGNORE.
            </h1>

            <p className="font-['Manrope'] text-base sm:text-lg text-[#9ba1b3] max-w-xl leading-relaxed font-normal">
              Creative thinking, cinematic content production, and hyper-targeted paid acquisition engineered to cut through noise, scale high-ticket conversions, and construct lasting market authority.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 rounded bg-[#f5f6fa] text-[#050507] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider hover:bg-white hover:scale-[1.02] active:scale-[0.99] transition-all shadow-[0_0_24px_rgba(255,51,102,0.25)] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 rounded bg-[#12131a] text-[#f5f6fa] hover:bg-[#1a1b24] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider hover:text-[#ff3366] transition-all border border-white/10 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>START A MARKETING PROJECT</span>
                <ArrowRight className="w-4 h-4 text-[#ff3366]" />
              </button>
            </div>

            {/* 3 Metric Pillars Under Headline */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded-lg bg-[#0a0a0f] border border-white/5">
                <span className="font-mono text-[10px] text-[#9ba1b3] uppercase tracking-wider block">
                  Aggregated Reach
                </span>
                <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#f5f6fa] block mt-0.5">
                  148M+
                </span>
                <span className="font-mono text-[10px] text-[#ff3366] block">
                  Across Client Media
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0a0a0f] border border-white/5">
                <span className="font-mono text-[10px] text-[#9ba1b3] uppercase tracking-wider block">
                  Average ROAS
                </span>
                <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#d4af37] block mt-0.5">
                  4.82X
                </span>
                <span className="font-mono text-[10px] text-[#9ba1b3] block">
                  Validated Attribution
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0a0a0f] border border-white/5">
                <span className="font-mono text-[10px] text-[#9ba1b3] uppercase tracking-wider block">
                  Conversion Lift
                </span>
                <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#ff3366] block mt-0.5">
                  +320%
                </span>
                <span className="font-mono text-[10px] text-[#9ba1b3] block">
                  Post-Rebrand Velocity
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Command & Visual Bento */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-xl bg-[#0a0a0f] border border-white/10 p-5 shadow-2xl flex flex-col gap-4">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#f5f6fa] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse" />
                  <span>LIVE CAMPAIGN TELEMETRY</span>
                </div>
                <span className="text-[#d4af37]">STREAMING // 60 FPS</span>
              </div>

              {/* High-Contrast Luxury Visual Showcase */}
              <div
                className="relative w-full h-64 rounded-lg overflow-hidden bg-cover bg-center flex items-end p-4 shadow-inner group"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIWGBsAESLIl8LxwF8KBpmXwLn6XLkPbd2EVkouxsP2AsQHg_8jpwCanxekD_i-X2v2UlvWFmbtxOiC9NfRlvQ9tE8vaTI8rEbe9KoDIqtq7jC9jOzvYBQcqxWhdH4iM-Wza4GzNUlm8hTi-EjufulCgLRDG0o6yxvyF0_9b677h4mJjuKo0YG_a9cAPwKrNmxYn-wZxAJkykKsqwq40O8b46qfqn0TYGLTkbfgn8')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent" />
                <div className="relative z-10 flex flex-col">
                  <span className="font-mono text-[10px] text-[#ff3366] uppercase tracking-wider font-semibold">
                    CASE STUDY // CAMPAIGN 088
                  </span>
                  <span className="font-['Space_Grotesk'] text-base font-bold text-[#f5f6fa] uppercase">
                    SYNTHESIS BRAND PROTOCOL
                  </span>
                  <span className="font-['Manrope'] text-xs text-[#c5c6ca]">
                    Multi-Channel Omnipresence + Hyper-Targeted Ads
                  </span>
                </div>
              </div>

              {/* Real-Time Sparkline Analytics Widget */}
              <div className="p-3 rounded-lg bg-[#06070a] border border-white/5 flex flex-col gap-2">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="text-[#9ba1b3]">MONTHLY CAMPAIGN VELOCITY</span>
                  <span className="text-[#ff3366] font-bold">+41.8% MOM</span>
                </div>

                {/* SVG Sparkline */}
                <svg className="w-full h-12 text-[#ff3366] overflow-visible" viewBox="0 0 400 60">
                  <defs>
                    <linearGradient id="chartGradientHero" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ff3366" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ff3366" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 48 Q 40 45, 70 32 T 140 38 T 210 20 T 280 25 T 340 12 L 400 4 L 400 60 L 0 60 Z"
                    fill="url(#chartGradientHero)"
                  />
                  <path
                    d="M0 48 Q 40 45, 70 32 T 140 38 T 210 20 T 280 25 T 340 12 L 400 4"
                    fill="none"
                    stroke="#ff3366"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <circle cx="400" cy="4" r="4" fill="#ff3366" className="animate-pulse" />
                </svg>
              </div>

              {/* Real-Time Activity Log Feed */}
              <div className="flex flex-col gap-2 font-mono text-xs text-[#9ba1b3]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366]" />
                    <span>Meta Ads CBO Algorithm Optimizing</span>
                  </span>
                  <span className="text-white/40 text-[10px]">1.2s ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                    <span>4K Short-Form Reel Published</span>
                  </span>
                  <span className="text-white/40 text-[10px]">14m ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                    <span>SEO Domain Authority Upward Shift</span>
                  </span>
                  <span className="text-white/40 text-[10px]">1h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

