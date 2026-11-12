'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ArrowLeft, ArrowRight, MapPin, Building, Calendar } from 'lucide-react';
import { EstateProjectItem } from '@/types';
import { ESTATE_PROJECTS } from '@/data/content';

interface EstateProjectModalProps {
  project: EstateProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: EstateProjectItem) => void;
}

export function EstateProjectModal({
  project,
  onClose,
  onSelectProject,
}: EstateProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const idx = ESTATE_PROJECTS.findIndex((p) => p.id === project.id);
        const nextIdx = (idx + 1) % ESTATE_PROJECTS.length;
        onSelectProject(ESTATE_PROJECTS[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const idx = ESTATE_PROJECTS.findIndex((p) => p.id === project.id);
        const prevIdx = (idx - 1 + ESTATE_PROJECTS.length) % ESTATE_PROJECTS.length;
        onSelectProject(ESTATE_PROJECTS[prevIdx]);
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

  const currentIndex = ESTATE_PROJECTS.findIndex((p) => p.id === project.id);
  const gallery = project.gallery?.length ? project.gallery : [project.image];

  return (
    <div className="fixed inset-0 z-50 bg-[#050507]/96 backdrop-blur-2xl flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 my-auto">
        {/* Header Bar */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs text-[#9ba1b3]">
            <span className="text-[#d4af37] font-bold uppercase">{'//'} ESTATE MEDIA DOSSIER</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-[#f5f6fa]">
              [0{currentIndex + 1} / 0{ESTATE_PROJECTS.length}]
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

        {/* Project Title & Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#d4af37] mb-1">
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5" />
                {project.propertyType}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-[#f5f6fa] tracking-tight">
              {project.title}
            </h2>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] mt-1">
              CLIENT: <span className="text-[#f5f6fa] font-semibold">{project.client}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {project.services.map((srv, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#161720] border border-white/10 font-mono text-[11px] text-[#d4af37]"
              >
                {srv}
              </span>
            ))}
          </div>
        </div>

        {/* Main Gallery Showcase */}
        <div className="flex flex-col gap-3">
          <div className="w-full aspect-[16/9] rounded-lg overflow-hidden relative bg-[#12131a] border border-white/10 shadow-2xl">
            <Image
              src={gallery[activeImageIndex] || project.image}
              alt={project.title}
              fill
              priority
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-[#050507]/85 backdrop-blur-md px-4 py-2 rounded border border-white/10 text-xs font-mono text-[#9ba1b3]">
              <span>ESTATE CAPTURE // PLATE 0{activeImageIndex + 1} OF 0{gallery.length}</span>
              <span className="text-[#d4af37] font-bold">ARRI RAW 8K LOG-C</span>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-16 rounded overflow-hidden shrink-0 border transition-all ${activeImageIndex === idx
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 scale-105'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" sizes="96px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3-Column Breakdown: Challenge / Solution / Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/10">
          <div className="bg-[#0f1017] p-5 rounded border border-white/5 flex flex-col gap-2">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#d4af37] uppercase tracking-wider flex items-center gap-2">
              <span>01 // THE CHALLENGE</span>
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-[#0f1017] p-5 rounded border border-white/5 flex flex-col gap-2">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#f5f6fa] uppercase tracking-wider flex items-center gap-2">
              <span>02 // THE PRODUCTION SOLUTION</span>
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="bg-[#0f1017] p-5 rounded border border-white/5 flex flex-col gap-2">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#e9c349] uppercase tracking-wider flex items-center gap-2">
              <span>03 // CAMPAIGN RESULTS</span>
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>

        {/* Project Key Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 p-4 rounded bg-[#12131a] border border-white/5 font-mono text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-[11px] text-[#9ba1b3] uppercase block">{m.label}</span>
                <span className="text-base sm:text-lg font-bold text-[#d4af37]">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Next & Previous Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <button
            onClick={() => {
              const idx = ESTATE_PROJECTS.findIndex((p) => p.id === project.id);
              const prevIdx = (idx - 1 + ESTATE_PROJECTS.length) % ESTATE_PROJECTS.length;
              onSelectProject(ESTATE_PROJECTS[prevIdx]);
            }}
            className="font-mono text-xs uppercase text-[#9ba1b3] hover:text-white flex items-center gap-2 transition-colors px-3 py-2 rounded hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PREVIOUS STORY</span>
          </button>
          <button
            onClick={() => {
              const idx = ESTATE_PROJECTS.findIndex((p) => p.id === project.id);
              const nextIdx = (idx + 1) % ESTATE_PROJECTS.length;
              onSelectProject(ESTATE_PROJECTS[nextIdx]);
            }}
            className="font-mono text-xs uppercase text-[#d4af37] hover:underline flex items-center gap-2 transition-colors px-3 py-2 rounded hover:bg-white/5 font-bold"
          >
            <span>NEXT PROPERTY STORY →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
