'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DivisionKey } from '@/types';
import { TerminalStream } from '@/components/ui/TerminalStream';

interface ServicesSectionProps {
  onOpenDivisionDrawer?: (division: DivisionKey) => void;
}

export function ServicesSection({}: ServicesSectionProps = {}) {
  const [activeFilter, setActiveFilter] = useState<'all' | DivisionKey>('all');

  const filterTabs = [
    { key: 'all', label: 'ALL DIVISIONS' },
    { key: 'estate', label: '01 // REAL ESTATE' },
    { key: 'agent', label: '02 // AGENT SERVICES' },
    { key: 'data-ai', label: '03 // DATA & AI' },
    { key: 'digital-marketing', label: '04 // MARKETING' },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 font-['Space_Grotesk'] text-xs text-[#d4af37] uppercase tracking-widest font-bold">
              <span className="w-2 h-0.5 bg-[#d4af37]" />
              DISCIPLINARY ARCHITECTURE
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight uppercase text-[#f5f6fa]">
              FOUR DIVISIONS.<br />
              <span className="text-[#9ba1b3]">ONE INTEGRATED ENGINE.</span>
            </h2>
          </div>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] max-w-md leading-relaxed">
            From luxury architectural media and turn-key agent operations to human-in-the-loop AI data pipelines and full-funnel digital growth marketing, Vaika merges visual mastery with operational rigor.
          </p>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as 'all' | DivisionKey)}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-[#20222d] text-[#f5f6fa] border border-white/20 shadow-[0_0_15px_rgba(212,175,55,0.15)] font-bold'
                  : 'bg-[#12131a] text-[#9ba1b3] hover:text-white border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 World Portals Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CARD 01: REAL ESTATE MEDIA & VISUALIZATION (Gold #d4af37) */}
          {(activeFilter === 'all' || activeFilter === 'estate') && (
            <Link
              href="/services/real-estate"
              className="flex flex-col justify-between rounded-lg bg-[#0f1017] p-6 relative overflow-hidden border border-white/5 hover:border-[#d4af37]/50 transition-all duration-500 hover:-translate-y-2 group shadow-xl cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#d4af37]" />
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none group-hover:bg-[#d4af37]/25 transition-all" />

              <div>
                <div className="flex justify-between items-start font-mono text-xs text-[#9ba1b3] mb-4">
                  <span className="text-[#d4af37] font-bold">{'// DIV 01'}</span>
                  <span className="tracking-widest uppercase">ESTATE & VISUALS</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#f5f6fa] tracking-tight group-hover:text-[#d4af37] transition-colors">
                  REAL ESTATE MEDIA & VISUALIZATION
                </h3>
                <p className="font-['Space_Grotesk'] text-[11px] text-[#d4af37] mt-1 tracking-widest uppercase font-semibold">
                  PROPERTY • CINEMA • 3D VISUALS
                </p>
                <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-3 leading-relaxed">
                  Premium property photography, HDR flambient editing, virtual staging, 3D architectural renders, and listing marketing.
                </p>

                {/* Preview Box */}
                <div className="w-full h-40 rounded bg-[#050507] mt-4 relative overflow-hidden flex items-center justify-center border border-white/5 group/preview">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO84LPO5WoDq4JSeMbIFp6_OHWxXZId97XpUJkHMAAF0wBmkNYPje5qciUpxJZ7REMBX0lfWpWPOPSnZsEy2N1WPonF2MtbyiGiht7tq6y2sYt8UXPGdjMtzQ6BlvzkItVvZuTrWcncxg7grivRYnkpZ4ecMSjyPugbPbg2WDOJGGFJijKm1JMPh2BYlx0D_ROZoqZIxPD8kudUCeq1WO2gp3WJW82hav1-rIiN8-p9sccuG0afN5G"
                    alt="Dark luxury penthouse architectural interior"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover/preview:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-2.5 left-2.5 font-mono text-[10px] text-[#d4af37] bg-[#050507]/90 px-2 py-0.5 rounded backdrop-blur border border-white/10">
                    ARRI RAW 8K LOG-C
                  </span>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {['HDR / Flambient', 'Virtual Staging', '2D & 3D Floor Plans', 'Listing Cinema'].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#161720] border border-white/5 font-mono text-[10px] text-[#f5f6fa]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex justify-between items-center">
                <span
                  className="font-['Space_Grotesk'] text-xs font-bold text-[#d4af37] group-hover:underline flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <span>EXPLORE DIVISION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-mono text-[10px] text-[#525866]">V4.9-EST</span>
              </div>
            </Link>
          )}

          {/* CARD 02: AGENT SERVICES (Silver #e1e2e6) */}
          {(activeFilter === 'all' || activeFilter === 'agent' || activeFilter === 'studio') && (
            <Link
              href="/services/agent-services"
              className="flex flex-col justify-between rounded-lg bg-[#0f1017] p-6 relative overflow-hidden border border-white/5 hover:border-[#e1e2e6]/50 transition-all duration-500 hover:-translate-y-2 group shadow-xl cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#e1e2e6]" />
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#e1e2e6]/10 blur-3xl pointer-events-none group-hover:bg-[#e1e2e6]/25 transition-all" />

              <div>
                <div className="flex justify-between items-start font-mono text-xs text-[#9ba1b3] mb-4">
                  <span className="text-[#e1e2e6] font-bold">{'// DIV 02'}</span>
                  <span className="tracking-widest uppercase">AGENT SYSTEMS</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#f5f6fa] tracking-tight group-hover:text-[#e1e2e6] transition-colors">
                  AGENT SERVICES
                </h3>
                <p className="font-['Space_Grotesk'] text-[11px] text-[#e1e2e6] mt-1 tracking-widest uppercase font-semibold">
                  LEAD FUNNELS • OPERATIONS • CRM
                </p>
                <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-3 leading-relaxed">
                  Turn-key operational and lead generation support for agents: listing promotion ads, transaction coordination, and CRM support.
                </p>

                {/* Visual Preview Box */}
                <div className="w-full h-40 rounded bg-[#050507] mt-4 relative overflow-hidden flex flex-col justify-between p-3 border border-white/5 group/preview">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                    alt="Agent operational CRM pipeline"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover opacity-60 transition-transform duration-700 group-hover/preview:scale-105"
                  />
                  <div className="relative z-10 flex justify-between items-center w-full">
                    <span className="font-mono text-[10px] text-[#e1e2e6] bg-[#050507]/90 px-2 py-0.5 rounded backdrop-blur border border-white/10">
                      CRM PIPELINE LIVE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                  </div>
                  <div className="relative z-10 font-mono text-[10px] text-[#9ba1b3] bg-[#12131a]/90 p-1.5 rounded backdrop-blur border border-white/10 flex justify-between">
                    <span>SPEED-TO-LEAD: &lt;3M</span>
                    <span className="text-[#e1e2e6] font-bold">TC CLOSINGS: 99.4%</span>
                  </div>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {['Listing Ads', 'Buyer Funnels', 'Transaction Coord.', 'CRM Management'].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#161720] border border-white/5 font-mono text-[10px] text-[#f5f6fa]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex justify-between items-center">
                <span
                  className="font-['Space_Grotesk'] text-xs font-bold text-[#e1e2e6] group-hover:underline flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <span>EXPLORE DIVISION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-mono text-[10px] text-[#525866]">OPS // v4.2</span>
              </div>
            </Link>
          )}

          {/* CARD 03: DATA & AI CORE (Violet #8b5cf6) */}
          {(activeFilter === 'all' || activeFilter === 'data-ai' || activeFilter === 'ai') && (
            <Link
              href="/services/data-ai"
              className="flex flex-col justify-between rounded-lg bg-[#0f1017] p-6 relative overflow-hidden border border-white/5 hover:border-[#8b5cf6]/50 transition-all duration-500 hover:-translate-y-2 group shadow-xl cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#8b5cf6]" />
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#8b5cf6]/10 blur-3xl pointer-events-none group-hover:bg-[#8b5cf6]/25 transition-all" />

              <div>
                <div className="flex justify-between items-start font-mono text-xs text-[#9ba1b3] mb-4">
                  <span className="text-[#8b5cf6] font-bold">{'// DIV 03'}</span>
                  <span className="tracking-widest uppercase">DATA & AI OPS</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#f5f6fa] tracking-tight group-hover:text-[#8b5cf6] transition-colors">
                  DATA & AI CORE
                </h3>
                <p className="font-['Space_Grotesk'] text-[11px] text-[#8b5cf6] mt-1 tracking-widest uppercase font-semibold">
                  ANNOTATION • AI DATA • BACK-OFFICE
                </p>
                <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-3 leading-relaxed">
                  Human-powered training data services, computer vision labeling, GIS/satellite mapping, and back-office data processing.
                </p>

                {/* Terminal Stream */}
                <div className="mt-4">
                  <TerminalStream />
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {['Image Annotation', 'AI Evaluation', 'GIS Mapping', 'OCR & Catalogs'].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#161720] border border-white/5 font-mono text-[10px] text-[#f5f6fa]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex justify-between items-center">
                <span
                  className="font-['Space_Grotesk'] text-xs font-bold text-[#8b5cf6] group-hover:underline flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <span>EXPLORE DIVISION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-mono text-[10px] text-[#525866]">ACC // 99.9%</span>
              </div>
            </Link>
          )}

          {/* CARD 04: DIGITAL MARKETING & CREATIVE (Cyan #00f0ff) */}
          {(activeFilter === 'all' || activeFilter === 'digital-marketing') && (
            <Link
              href="/services/digital-marketing"
              className="flex flex-col justify-between rounded-lg bg-[#0f1017] p-6 relative overflow-hidden border border-white/5 hover:border-[#00f0ff]/50 transition-all duration-500 hover:-translate-y-2 group shadow-xl cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#00f0ff]" />
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#00f0ff]/10 blur-3xl pointer-events-none group-hover:bg-[#00f0ff]/25 transition-all" />

              <div>
                <div className="flex justify-between items-start font-mono text-xs text-[#9ba1b3] mb-4">
                  <span className="text-[#00f0ff] font-bold">{'// DIV 04'}</span>
                  <span className="tracking-widest uppercase">MARKETING & BRAND</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#f5f6fa] tracking-tight group-hover:text-[#00f0ff] transition-colors">
                  DIGITAL MARKETING & CREATIVE
                </h3>
                <p className="font-['Space_Grotesk'] text-[11px] text-[#00f0ff] mt-1 tracking-widest uppercase font-semibold">
                  SOCIAL • SEO &amp; ADS • WEB &amp; VIDEO
                </p>
                <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-3 leading-relaxed">
                  Integrated digital growth: social strategy, Meta advertising, technical &amp; local SEO, Figma UI/UX, Next.js web builds, and video editing.
                </p>

                {/* Preview Box */}
                <div className="w-full h-40 rounded bg-[#050507] mt-4 relative overflow-hidden flex items-center justify-center border border-white/5 group/preview">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Digital marketing growth analytics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover opacity-70 transition-transform duration-700 group-hover/preview:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-2.5 left-2.5 font-mono text-[10px] text-[#00f0ff] bg-[#050507]/90 px-2 py-0.5 rounded backdrop-blur border border-white/10">
                    GROWTH ENGINE 360°
                  </span>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {['Meta Ads', 'SEO & GBP', 'Web & Brand UI', 'Video Editing'].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#161720] border border-white/5 font-mono text-[10px] text-[#f5f6fa]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex justify-between items-center">
                <span
                  className="font-['Space_Grotesk'] text-xs font-bold text-[#00f0ff] group-hover:underline flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <span>EXPLORE DIVISION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-mono text-[10px] text-[#525866]">GROWTH // 360</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
