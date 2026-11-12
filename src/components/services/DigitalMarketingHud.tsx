'use client';

import React, { useState } from 'react';

export function DigitalMarketingHud() {
  const [activeTab, setActiveTab] = useState<'roas' | 'creative' | 'video'>('roas');

  return (
    <div className="w-full bg-[#0a0a0f] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#12131a] border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-white">
            {'GROWTH ENGINE 360° // MULTI-CHANNEL COCKPIT'}
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-[#050507] p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('roas')}
            className={`px-3 py-1 rounded font-mono text-[11px] uppercase transition-all cursor-pointer ${
              activeTab === 'roas'
                ? 'bg-[#20222d] text-[#00f0ff] font-bold shadow-sm'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            [ PAID ROAS & CAC ]
          </button>
          <button
            onClick={() => setActiveTab('creative')}
            className={`px-3 py-1 rounded font-mono text-[11px] uppercase transition-all cursor-pointer ${
              activeTab === 'creative'
                ? 'bg-[#20222d] text-[#00f0ff] font-bold shadow-sm'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            [ BRAND & WEB ]
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-3 py-1 rounded font-mono text-[11px] uppercase transition-all cursor-pointer ${
              activeTab === 'video'
                ? 'bg-[#20222d] text-[#00f0ff] font-bold shadow-sm'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            [ VIDEO & REELS ]
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-6 bg-[#0d0e15] min-h-[300px]">
        {activeTab === 'roas' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#9ba1b3] uppercase">META ADS ATTRIBUTED ROAS</span>
                <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#00f0ff] block mt-1">4.62X</span>
                <p className="text-xs text-[#9ba1b3] mt-1">Blended return across acquisition funnels.</p>
              </div>
              <div className="pt-3 border-t border-white/5 font-mono text-[10px] text-[#00f0ff]">
                CPA: -24.8% MO/MO
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#9ba1b3] uppercase">GOOGLE SEARCH CONVERSION</span>
                <span className="font-['Space_Grotesk'] text-3xl font-bold text-white block mt-1">14.8%</span>
                <p className="text-xs text-[#9ba1b3] mt-1">High-intent exact match keywords.</p>
              </div>
              <div className="pt-3 border-t border-white/5 font-mono text-[10px] text-[#9ba1b3]">
                PMax & Search Active
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#9ba1b3] uppercase">ORGANIC SEO MOAT</span>
                <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#00f0ff] block mt-1">+142%</span>
                <p className="text-xs text-[#9ba1b3] mt-1">Non-brand keyword impression lift.</p>
              </div>
              <div className="pt-3 border-t border-white/5 font-mono text-[10px] text-[#00f0ff]">
                Core Web Vitals: 98/100
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#9ba1b3] uppercase">EMAIL AUTOMATION REVENUE</span>
                <span className="font-['Space_Grotesk'] text-3xl font-bold text-white block mt-1">32.4%</span>
                <p className="text-xs text-[#9ba1b3] mt-1">Share of total sales from owned flows.</p>
              </div>
              <div className="pt-3 border-t border-white/5 font-mono text-[10px] text-[#9ba1b3]">
                Zero Ad Cost Per Sale
              </div>
            </div>
          </div>
        )}

        {activeTab === 'creative' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#00f0ff] uppercase">
                BRAND SYSTEM & VISUAL IDENTITY
              </span>
              <p className="text-xs text-[#9ba1b3]">
                Complete design architecture: vector logomarks, color psychology, typographic hierarchy, and comprehensive brand books.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-white">
                ASSETS: FIGMA TOKENS & SYSTEM EXPORT
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                HIGH-PERFORMANCE NEXT.JS WEB
              </span>
              <p className="text-xs text-[#9ba1b3]">
                Sub-second page speeds, micro-interactions, responsive mobile fluidity, and integrated headless CMS workflows.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-[#00f0ff]">
                METRICS: 95+ GOOGLE PAGESPEED
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#00f0ff] uppercase">
                CONVERSION UI/UX OPTIMIZATION
              </span>
              <p className="text-xs text-[#9ba1b3]">
                User journey pathing, checkout friction reduction, and behavioral heatmap testing that raises site-wide conversion rates.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-white">
                CONVERSION LIFT: +38% AVERAGE
              </div>
            </div>
          </div>
        )}

        {activeTab === 'video' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#00f0ff] uppercase">
                YOUTUBE LONG-FORM PRODUCTION
              </span>
              <p className="text-xs text-[#9ba1b3]">
                High-retention storytelling, pattern interrupts every 5 seconds, sound design, and custom click-optimized thumbnails.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-[#00f0ff]">
                AVG VIEW DURATION: 58%+ RETENTION
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-white uppercase">
                VIRAL KINETIC SHORTS & REELS
              </span>
              <p className="text-xs text-[#9ba1b3]">
                Dynamic word-by-word animated captions, high-energy pacing, sound effects, and seamless looping hooks.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-white">
                FORMAT: 9:16 VERTICAL OPTIMIZED
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#12131a] border border-white/5 flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#00f0ff] uppercase">
                PODCAST MULTI-CAM POST-PRODUCTION
              </span>
              <p className="text-xs text-[#9ba1b3]">
                Broadcast-grade audio cleanup (-16 LUFS), dynamic multi-camera angle switching, and vertical clip extraction.
              </p>
              <div className="mt-2 p-2 rounded bg-[#161720] font-mono text-[10px] text-[#00f0ff]">
                OUTPUT: 1 EPISODE = 15+ SHORT CLIPS
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Status Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#12131a] py-3 px-4 sm:px-6 text-center border-t border-white/10 text-xs font-mono">
        <div>
          <span className="text-[#9ba1b3] block text-[10px]">VERIFIED ROAS</span>
          <span className="text-[#00f0ff] font-bold">4.6X BENCHMARK</span>
        </div>
        <div>
          <span className="text-[#9ba1b3] block text-[10px]">VIDEO WATCH TIME</span>
          <span className="text-white font-bold">&gt; 58% RETENTION</span>
        </div>
        <div>
          <span className="text-[#9ba1b3] block text-[10px]">PAGESPEED SCORE</span>
          <span className="text-[#00f0ff] font-bold">98/100 PERFORMANCE</span>
        </div>
        <div>
          <span className="text-[#9ba1b3] block text-[10px]">CREATIVE CADENCE</span>
          <span className="text-white font-bold">WEEKLY TEST SPRINTS</span>
        </div>
      </div>
    </div>
  );
}
