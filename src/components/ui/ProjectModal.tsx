'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { ProjectItem } from '@/types';
import { PROJECTS_DATA } from '@/data/content';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectModal({ project, onClose, onSelectProject }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const idx = PROJECTS_DATA.findIndex((p) => p.id === project.id);
        const nextIdx = (idx + 1) % PROJECTS_DATA.length;
        onSelectProject(PROJECTS_DATA[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const idx = PROJECTS_DATA.findIndex((p) => p.id === project.id);
        const prevIdx = (idx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
        onSelectProject(PROJECTS_DATA[prevIdx]);
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);

  return (
    <div className="fixed inset-0 z-50 bg-[#050507]/95 backdrop-blur-2xl flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 my-auto">
        {/* Top Modal Bar */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs text-[#9ba1b3]">
            <span style={{ color: project.color }} className="font-bold uppercase">
              {project.divTag}
            </span>
            <span>{'//'} CASE STUDY DOSSIER</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-[#f5f6fa]">
              [0{currentIndex + 1} / 0{PROJECTS_DATA.length}]
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded bg-[#12131a] hover:bg-[#1a1c24] text-[#f5f6fa] border border-white/10 transition-colors"
          >
            <span>CLOSE [ESC]</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-['Space_Grotesk'] text-xs text-[#9ba1b3] uppercase tracking-widest block">
              CLIENT: {project.client}
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-[#f5f6fa] tracking-tight mt-1">
              {project.title}
            </h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <span
              className="px-3 py-1 rounded bg-[#12131a] border border-white/10 font-mono text-xs"
              style={{ color: project.color }}
            >
              {project.badge1}
            </span>
            <span className="px-3 py-1 rounded bg-[#12131a] border border-white/10 font-mono text-xs text-[#f5f6fa]">
              {project.badge2}
            </span>
          </div>
        </div>

        {/* Showcase Frame */}
        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden relative bg-[#12131a] border border-white/10 shadow-2xl">
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-40 pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-between items-center bg-[#050507]/85 backdrop-blur-md px-4 py-2.5 rounded border border-white/10">
            <span className="font-mono text-xs text-[#9ba1b3] uppercase">
              SHOWCASE // {project.badge1}
            </span>
            <span className="font-mono text-xs text-[#d4af37]">
              {project.techSpecs || '8192 x 4320 • COLOR GRADE 33-POINT LUT'}
            </span>
          </div>
        </div>

        {/* Breakdown 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/10">
          <div className="bg-[#0f1017] p-5 rounded border border-white/5">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#f5f6fa] uppercase mb-2 flex items-center gap-2">
              <span className="text-[#d4af37]">01 //</span>
              <span>THE CHALLENGE</span>
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-[#0f1017] p-5 rounded border border-white/5">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#f5f6fa] uppercase mb-2 flex items-center gap-2">
              <span className="text-[#00f0ff]">02 //</span>
              <span>ARCHITECTURAL SOLUTION</span>
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="bg-[#0f1017] p-5 rounded border border-white/5">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#f5f6fa] uppercase mb-2 flex items-center gap-2">
              <span className="text-[#8b5cf6]">03 //</span>
              <span>RECORD OUTCOME</span>
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Project Key Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 p-4 rounded bg-[#12131a] border border-white/5 font-mono text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-[11px] text-[#9ba1b3] uppercase block">{m.label}</span>
                <span className="text-base font-bold text-[#f5f6fa]">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Modal Navigation Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <button
            onClick={() => {
              const idx = PROJECTS_DATA.findIndex((p) => p.id === project.id);
              const prevIdx = (idx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
              onSelectProject(PROJECTS_DATA[prevIdx]);
            }}
            className="font-mono text-xs uppercase text-[#9ba1b3] hover:text-white flex items-center gap-2 transition-colors px-3 py-1.5 rounded hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PREVIOUS PROJECT</span>
          </button>
          <button
            onClick={() => {
              const idx = PROJECTS_DATA.findIndex((p) => p.id === project.id);
              const nextIdx = (idx + 1) % PROJECTS_DATA.length;
              onSelectProject(PROJECTS_DATA[nextIdx]);
            }}
            className="font-mono text-xs uppercase text-[#d4af37] hover:underline flex items-center gap-2 transition-colors px-3 py-1.5 rounded hover:bg-white/5"
          >
            <span>NEXT PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
