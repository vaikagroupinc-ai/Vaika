'use client';

import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { FOUNDER_DATA, TEAM_GROUP_DATA } from '@/data/content';
import { TeamMember } from '@/types';

interface TeamSectionProps {
  onSelectTeamMember?: (member: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = () => {
  return (
    <section
      id="team"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
          <div>
            <span className="font-['Space_Grotesk'] text-xs text-[#d4af37] tracking-widest uppercase font-bold">
              {"//"} PERSONNEL • COGNITION
            </span>
            <h2 className="font-['Space_Grotesk'] text-[clamp(1.65rem,6vw,3rem)] font-bold uppercase tracking-tight text-[#f5f6fa] mt-1 leading-tight">
              THE PEOPLE BEHIND THE WORK.
            </h2>
          </div>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] max-w-md leading-relaxed">
            A sovereign assembly of architectural visionaries, real-time computational artists, and AI systems researchers.
          </p>
        </div>

        {/* Founder Flagship Split Card */}
        <div
          id="founder-studio"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0f1017] rounded-lg p-6 sm:p-10 relative overflow-hidden items-center border border-white/10 shadow-2xl"
        >
          <div className="lg:col-span-5 relative group overflow-hidden rounded-lg aspect-[4/5] bg-[#161720]">
            <Image
              src={FOUNDER_DATA.image}
              alt={FOUNDER_DATA.imageAlt}
              fill
              className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute bottom-3 left-3 bg-[#050507]/85 px-3 py-1.5 rounded backdrop-blur font-mono text-xs text-[#d4af37] flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              {FOUNDER_DATA.role}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#9ba1b3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[#d4af37] font-semibold tracking-wider uppercase">EXECUTIVE LEADERSHIP</span>
              <span className="text-[#525866]">•</span>
              <span className="text-[#f5f6fa] uppercase tracking-wider font-medium">{FOUNDER_DATA.protocol}</span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase text-[#f5f6fa] tracking-tight">
              {FOUNDER_DATA.name}
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-[#9ba1b3] tracking-widest uppercase font-semibold">
              {FOUNDER_DATA.titles}
            </p>

            <blockquote className="font-['Space_Grotesk'] text-lg sm:text-xl text-[#f5f6fa] leading-snug border-l-2 border-[#d4af37] pl-4 my-2 italic">
              {FOUNDER_DATA.quote}
            </blockquote>

            <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] leading-relaxed whitespace-pre-line">
              {FOUNDER_DATA.bio}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-xs">
              {FOUNDER_DATA.credentials.map((cred, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded bg-[#161720] border border-white/5 ${
                    idx === FOUNDER_DATA.credentials.length - 1
                      ? 'text-[#d4af37] border-[#d4af37]/30'
                      : 'text-[#f5f6fa]'
                  }`}
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Collective Team Group Showcase */}
        <div className="bg-[#0f1017] rounded-lg border border-white/10 overflow-hidden shadow-2xl group">
          <div className="relative w-full aspect-[16/8] min-h-[300px] sm:min-h-[360px] bg-[#0b0c12] flex items-center justify-center overflow-hidden">
            {TEAM_GROUP_DATA.image ? (
              <>
                <Image
                  src={TEAM_GROUP_DATA.image}
                  alt={TEAM_GROUP_DATA.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050507]/90 via-[#050507]/20 to-transparent"
                />
                <div className="absolute top-4 left-4 bg-[#050507]/85 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span className="font-mono text-xs text-[#f5f6fa] uppercase tracking-wider">
                    {TEAM_GROUP_DATA.eyebrow}
                  </span>
                </div>
              </>
            ) : (
              <div className="px-6 py-12 text-center max-w-2xl mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#161720] border border-[#d4af37]/30 flex items-center justify-center mx-auto">
                  <Users className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#d4af37]">
                  {TEAM_GROUP_DATA.eyebrow}
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#f5f6fa]">
                  {TEAM_GROUP_DATA.title}
                </h3>
                <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
                  {TEAM_GROUP_DATA.description}
                </p>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#d4af37] block mb-1">
                {TEAM_GROUP_DATA.eyebrow}
              </span>
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase text-[#f5f6fa]">
                {TEAM_GROUP_DATA.title}
              </h3>
              <p className="font-['Manrope'] text-sm text-[#9ba1b3] mt-1 max-w-2xl">
                {TEAM_GROUP_DATA.description}
              </p>

              {/* Creative Software & Technology Stack */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] text-[#d4af37] uppercase tracking-wider mr-1">
                  CORE SOFTWARE PIPELINE:
                </span>
                {TEAM_GROUP_DATA.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-[#161720] border border-white/10 font-mono text-[11px] text-[#f5f6fa] hover:border-[#d4af37]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              {TEAM_GROUP_DATA.divisions.map((div) => (
                <span
                  key={div}
                  className="px-3 py-1.5 rounded bg-[#161720] border border-white/10 font-mono text-[11px] text-[#d4af37] font-semibold"
                >
                  {div}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
