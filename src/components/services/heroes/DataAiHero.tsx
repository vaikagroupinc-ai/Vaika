'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ArrowDown, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

const AiCoreScene = dynamic(
  () => import('@/components/three/AiCoreScene').then((mod) => mod.AiCoreScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[340px] bg-[#0a0a0f] animate-pulse flex items-center justify-center">
        <span className="font-mono text-xs text-[#8b5cf6]">{'//'} INITIALIZING NEURAL TOPOLOGY...</span>
      </div>
    ),
  }
);

interface DataAiHeroProps {
  onExploreServices: () => void;
  onRequestQuote: () => void;
}

export function DataAiHero({ onExploreServices, onRequestQuote }: DataAiHeroProps) {
  const [terminalClock, setTerminalClock] = useState('09:14:22.180 UTC');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ms = String(now.getMilliseconds()).padStart(3, '0');
      const timeStr = now.toTimeString().split(' ')[0];
      setTerminalClock(`${timeStr}.${ms} UTC`);
    };
    update();
    const interval = setInterval(update, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#050507] pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5"
    >
      {/* Neural Violet Glow & Fine Technical Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#292931_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Division Telemetry Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-white/10 font-mono text-xs text-[#9ba1b3]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-[#8b5cf6]/10 text-[#8b5cf6] font-bold uppercase tracking-wider text-[11px]">
              DIV // 03
            </span>
            <span className="text-[#f5f6fa] uppercase tracking-widest font-semibold">
              DATA & AI CORE // AUTONOMOUS DATA OPS
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#12131a] border border-white/5 text-[#8b5cf6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse" />
              LATENCY: &lt;10MS
            </span>
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-[#161722] text-[#f5f6fa] border border-white/5">
              SOC2-T2 AUDITED
            </span>
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-[#161722] text-[#c5c6ca] border border-white/5">
              ISO 27001 READY
            </span>
          </div>
        </div>

        {/* Hero Asymmetrical Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs text-[#8b5cf6] uppercase tracking-[0.2em] font-bold">
              {'//'} DIVISION 03 : AI TRAINING DATA & ENTERPRISE DATA OPERATIONS
            </span>
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#f5f6fa] uppercase tracking-tight leading-[1.02]">
              INTELLIGENCE STARTS{' '}
              <br />
              <span className="font-serif italic font-normal text-[#8b5cf6]">
                WITH QUALITY DATA.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-5 pb-1">
            <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] leading-relaxed">
              Human-powered data operations, multimodal annotation, RLHF evaluation, and high-accuracy back-office processing for AI teams and global businesses.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreServices}
                className="px-5 py-3 rounded bg-[#f5f6fa] text-[#050507] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider hover:bg-white hover:scale-[1.02] active:scale-[0.99] transition-all shadow-[0_0_24px_rgba(139,92,246,0.25)] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE DATA SERVICES</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={onRequestQuote}
                className="px-5 py-3 rounded bg-[#12131a] text-[#f5f6fa] hover:bg-[#1a1b24] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider hover:text-[#8b5cf6] transition-all border border-white/10 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>DISCUSS YOUR DATA PROJECT</span>
                <ArrowRight className="w-4 h-4 text-[#8b5cf6]" />
              </button>
            </div>
          </div>
        </div>

        {/* Central Technical Interactive Command Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: 3D Neural Topology Canvas */}
          <div className="lg:col-span-7 rounded-xl bg-[#0a0a0f] border border-white/10 overflow-hidden shadow-2xl flex flex-col min-h-[380px]">
            <div className="h-10 px-4 flex items-center justify-between bg-[#0e1017] border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="text-[#9ba1b3] ml-2">VISION_TOPOLOGY_CANVAS</span>
              </div>
              <span className="text-[#8b5cf6]">99.8% ANNOTATION ACCURACY</span>
            </div>

            <div className="relative flex-1 w-full bg-[#06070a]">
              <AiCoreScene />
              <div className="absolute bottom-3 left-3 right-3 pointer-events-none flex flex-wrap justify-between items-center gap-2 bg-[#050507]/85 p-2 rounded-lg backdrop-blur border border-white/10 font-mono text-[11px]">
                <span className="text-[#8b5cf6] font-semibold">INTERACTIVE GROUND TRUTH MESH</span>
                <span className="text-[#9ba1b3]">DRAG TO ROTATE DATA GRAPH</span>
              </div>
            </div>
          </div>

          {/* Right: Live Data Dispatch Logs & Security Enclave */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-5 rounded-xl bg-[#0a0a0f] border border-white/10 shadow-2xl">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-[#f5f6fa] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
                  <span>REAL-TIME PIPELINE DISPATCH</span>
                </div>
                <span className="text-[#78777a]">{terminalClock}</span>
              </div>

              {/* Streaming Terminal Feed */}
              <div className="p-3.5 rounded-lg bg-[#06070a] border border-white/5 font-mono text-xs text-[#9ba1b3] space-y-2 leading-relaxed">
                <div className="text-[#f5f6fa] truncate flex items-center gap-1.5">
                  <span className="text-[#8b5cf6]">&gt;</span>
                  <span>INGEST: 140k polygon segmentation frames buffered</span>
                </div>
                <div className="text-[#c5c6ca] truncate flex items-center gap-1.5">
                  <span className="text-[#8b5cf6]">&gt;</span>
                  <span>VALIDATION: 100% agreement score on dual-blind QA</span>
                </div>
                <div className="text-[#9ba1b3] truncate flex items-center gap-1.5">
                  <span className="text-[#8b5cf6]">&gt;</span>
                  <span>ZERO-LEAK: PII scrubbed via automated NER masking</span>
                </div>
                <div className="text-[#9ba1b3] truncate flex items-center gap-1.5">
                  <span className="text-[#8b5cf6]">&gt;</span>
                  <span>DISPATCH: RLHF human feedback batch exported in JSONL</span>
                </div>
                <div className="text-[#8b5cf6] truncate flex items-center gap-1.5 font-semibold">
                  <span>&gt;</span>
                  <span>STATUS: SECURE PIPELINE OPERATIONAL (0 ERRORS)</span>
                </div>
              </div>
            </div>

            {/* Security Protocol Badges */}
            <div className="grid grid-cols-2 gap-2.5 pt-2 font-mono text-[11px]">
              <div className="p-2.5 rounded bg-[#12131a] border border-white/5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8b5cf6]" />
                <span className="text-[#f5f6fa]">SOC2 TYPE II</span>
              </div>
              <div className="p-2.5 rounded bg-[#12131a] border border-white/5 flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#8b5cf6]" />
                <span className="text-[#f5f6fa]">AIR-GAPPED QA</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Performance Metric Telemetry Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="flex flex-col gap-1 p-5 rounded-xl bg-[#0a0a0f] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors">
            <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#8b5cf6] tracking-tight">
              99.8%
            </span>
            <span className="font-mono text-xs text-[#f5f6fa] uppercase tracking-wider font-semibold">
              Annotation Precision
            </span>
            <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-1 leading-relaxed">
              Multi-tier human consensus verified ground truth datasets for production models.
            </p>
          </div>

          <div className="flex flex-col gap-1 p-5 rounded-xl bg-[#0a0a0f] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors">
            <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#8b5cf6] tracking-tight">
              &lt;10MS
            </span>
            <span className="font-mono text-xs text-[#f5f6fa] uppercase tracking-wider font-semibold">
              Processing Latency
            </span>
            <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-1 leading-relaxed">
              Rapid ingestion enclaves with secure automated pre-processing pipelines.
            </p>
          </div>

          <div className="flex flex-col gap-1 p-5 rounded-xl bg-[#0a0a0f] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors">
            <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#8b5cf6] tracking-tight">
              SOC2-T2
            </span>
            <span className="font-mono text-xs text-[#f5f6fa] uppercase tracking-wider font-semibold">
              Security Protocols
            </span>
            <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-1 leading-relaxed">
              Enterprise compliance posture with air-gapped workstations and strict NDA insulation.
            </p>
          </div>

          <div className="flex flex-col gap-1 p-5 rounded-xl bg-[#0a0a0f] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors">
            <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#8b5cf6] tracking-tight">
              ZERO-LEAK
            </span>
            <span className="font-mono text-xs text-[#f5f6fa] uppercase tracking-wider font-semibold">
              Data Protection
            </span>
            <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-1 leading-relaxed">
              Complete data sovereignty ensuring proprietary training sets never leak to public models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

