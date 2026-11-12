'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { DivisionKey } from '@/types';

interface CrossDivisionNavProps {
  currentDivision?: DivisionKey;
}

export function CrossDivisionNav({ currentDivision }: CrossDivisionNavProps) {
  const normalizedCurrent =
    currentDivision === 'studio' ? 'agent' : currentDivision === 'ai' ? 'data-ai' : currentDivision;

  const worlds = [
    {
      key: 'estate',
      code: '01',
      title: 'REAL ESTATE MEDIA & VISUALIZATION',
      sector: 'PROPERTY • CINEMA • 3D VISUALIZATION',
      description: 'Ultra-prime architectural cinematography, HDR flambient photo editing, virtual staging, and 3D architectural rendering suites.',
      accentColor: '#d4af37',
      route: '/services/real-estate',
      tag: 'V4.9-EST',
      image: '/assets/divisions/real-estate-division.jpg',
    },
    {
      key: 'agent',
      code: '02',
      title: 'AGENT SERVICES',
      sector: 'LEAD FUNNELS • TRANSACTION OPS • CRM',
      description: 'Institutional operational backbone for agents: Facebook/Instagram listing ads, buyer lead funnels, transaction coordination, and CRM support.',
      accentColor: '#e1e2e6',
      route: '/services/agent-services',
      tag: 'OPS // v4.2',
      image: '/assets/divisions/agent-services-division.jpg',
    },
    {
      key: 'data-ai',
      code: '03',
      title: 'DATA & AI CORE',
      sector: 'AI DATA SERVICES • ANNOTATION • DATA PROCESSING',
      description: 'Human-powered training data operations: image/video/text annotation, GIS and satellite mapping, RLHF verification, and back-office catalog processing.',
      accentColor: '#8b5cf6',
      route: '/services/data-ai',
      tag: 'VERIFIED // 99.9%',
      image: '/assets/divisions/data-ai-division.jpg',
    },
    {
      key: 'digital-marketing',
      code: '04',
      title: 'DIGITAL MARKETING & CREATIVE',
      sector: 'META ADS • BRAND SYSTEMS • VIDEO EDITING',
      description: 'Integrated digital growth: paid acquisition on Meta & Google, bespoke Next.js web experiences, brand identity design, and viral short-form video production.',
      accentColor: '#00f0ff',
      route: '/services/digital-marketing',
      tag: 'GROWTH // 360',
      image: '/assets/divisions/digital-marketing-division.jpg',
    },
  ];

  // Show the other divisions if currentDivision is passed, otherwise all 4
  const displayWorlds = normalizedCurrent
    ? worlds.filter((w) => w.key !== normalizedCurrent)
    : worlds;

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#08080d] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-['Space_Grotesk'] text-xs text-[#d4af37] uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE VAIKA ECOSYSTEM</span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-[#f5f6fa] tracking-tight mt-1">
              RELATED SERVICE DIVISIONS
            </h3>
          </div>
          <p className="font-['Manrope'] text-sm text-[#9ba1b3] max-w-md">
            Seamlessly traverse our four primary service divisions. Each division offers distinct specialized mastery and institutional reliability.
          </p>
        </div>

        {/* Division Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayWorlds.slice(0, 3).map((world) => (
            <Link
              key={world.key}
              href={world.route}
              className="flex flex-col justify-between rounded-lg bg-[#0f1017] p-6 relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group shadow-xl cursor-pointer"
              style={{
                borderTop: `3px solid ${world.accentColor}`,
              }}
            >
              <div
                className="absolute -right-20 -top-20 w-40 h-40 rounded-full blur-3xl pointer-events-none group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: `${world.accentColor}25` }}
              />

              <div>
                <div className="flex justify-between items-start font-mono text-xs text-[#9ba1b3] mb-3">
                  <span style={{ color: world.accentColor }} className="font-bold">
                    {'//'} DIV {world.code}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider">
                    {world.tag}
                  </span>
                </div>

                <h4
                  className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#f5f6fa] tracking-tight group-hover:text-white transition-colors"
                >
                  {world.title}
                </h4>
                <span
                  className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest font-semibold block mt-1"
                  style={{ color: world.accentColor }}
                >
                  {world.sector}
                </span>

                <p className="font-['Manrope'] text-xs text-[#9ba1b3] mt-3 leading-relaxed">
                  {world.description}
                </p>

                <div className="w-full h-32 rounded bg-[#050507] mt-4 relative overflow-hidden border border-white/5">
                  <Image
                    src={world.image}
                    alt={world.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1017] via-transparent to-transparent" />
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/10 flex justify-between items-center">
                <span
                  className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  style={{ color: world.accentColor }}
                >
                  <span>EXPLORE DIVISION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-mono text-[10px] text-[#525866]">VAIKA CORE</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
