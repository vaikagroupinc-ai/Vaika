'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/content';
import { ProjectItem, DivisionKey } from '@/types';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | DivisionKey>('all');

  const filterTabs = [
    { key: 'all', label: 'ALL' },
    { key: 'estate', label: 'ESTATE MEDIA' },
    { key: 'studio', label: '3D STUDIO' },
    { key: 'ai', label: 'AI & SOFTWARE' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) =>
    activeFilter === 'all' ? true : p.category === activeFilter
  );

  return (
    <section
      id="portfolio"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#12131a] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="font-['Space_Grotesk'] text-xs text-[#d4af37] tracking-widest uppercase font-bold">
              {'//'} CURATED ARCHIVE
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f6fa] mt-1">
              SELECTED WORK.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as 'all' | DivisionKey)}
                className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeFilter === tab.key
                    ? 'bg-[#20222d] text-[#f5f6fa] border border-white/20 shadow-[0_0_12px_rgba(212,175,55,0.15)] font-bold'
                    : 'bg-[#0f1017] text-[#9ba1b3] hover:text-white border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            // Give the first item large 8-col prominence if in 'all' view
            const isLarge = activeFilter === 'all' && idx === 0;
            const colSpan = isLarge ? 'lg:col-span-8' : 'lg:col-span-4';
            const aspect = isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer bg-[#0f1017] rounded-lg overflow-hidden relative shadow-2xl border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1`}
              >
                <div className={`${aspect} overflow-hidden relative bg-[#161720]`}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                    sizes={isLarge ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 1024px) 100vw, 33vw'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/30 to-transparent" />
                </div>

                <div className="p-6 absolute bottom-0 left-0 right-0 flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs mb-1">
                      <span style={{ color: project.color }}>
                        {project.location} • {project.year}
                      </span>
                      <span className="text-white/20">/</span>
                      <span className="text-[#9ba1b3]">{project.badge1}</span>
                    </div>

                    <h3
                      className={`font-['Space_Grotesk'] font-bold uppercase text-[#f5f6fa] group-hover:text-white transition-colors ${
                        isLarge ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <span
                    className="w-10 h-10 rounded bg-[#161720]/80 backdrop-blur border border-white/10 flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-[#050507] transition-all shrink-0 ml-3"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
