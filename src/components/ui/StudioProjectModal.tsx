'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ArrowLeft, ArrowRight, Cpu } from 'lucide-react';
import { StudioProjectItem } from '@/types';
import { STUDIO_PROJECTS } from '@/data/content';

interface StudioProjectModalProps {
  project: StudioProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: StudioProjectItem) => void;
}

export function StudioProjectModal({
  project,
  onClose,
  onSelectProject,
}: StudioProjectModalProps) {
  const [activePass, setActivePass] = useState<'render' | 'wireframe' | 'clay'>('render');

  useEffect(() => {
    setActivePass('render');
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const idx = STUDIO_PROJECTS.findIndex((p) => p.id === project.id);
        const nextIdx = (idx + 1) % STUDIO_PROJECTS.length;
        onSelectProject(STUDIO_PROJECTS[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const idx = STUDIO_PROJECTS.findIndex((p) => p.id === project.id);
        const prevIdx = (idx - 1 + STUDIO_PROJECTS.length) % STUDIO_PROJECTS.length;
        onSelectProject(STUDIO_PROJECTS[prevIdx]);
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

  const currentIndex = STUDIO_PROJECTS.findIndex((p) => p.id === project.id);

  const getImageForPass = () => {
    return project.renderImage || project.wireframeImage;
  };

  const getPassStyle = () => {
    if (activePass === 'wireframe') {
      return 'invert hue-rotate-180 contrast-200 opacity-75';
    }
    if (activePass === 'clay') {
      return 'grayscale brightness-125 contrast-90 opacity-80';
    }
    return 'opacity-90';
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#050507]/96 backdrop-blur-2xl flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 my-auto">
        {/* Header Bar */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs text-[#9ba1b3]">
            <span className="text-[#00f0ff] font-bold uppercase">{'//'} 3D STUDIO SPATIAL DOSSIER</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-[#f5f6fa]">
              [0{currentIndex + 1} / 0{STUDIO_PROJECTS.length}]
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

        {/* Project Title & Pass Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] mb-1">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.client}</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-[#f5f6fa] tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Shading Pass Controls */}
          <div className="flex items-center gap-1.5 bg-[#12131a] p-1.5 rounded-lg border border-white/10 shrink-0">
            <span className="font-mono text-[10px] text-[#9ba1b3] px-2">RENDER PASS:</span>
            <button
              onClick={() => setActivePass('wireframe')}
              className={`px-3 py-1 rounded font-mono text-xs transition-all ${
                activePass === 'wireframe'
                  ? 'bg-[#00f0ff] text-[#050507] font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                  : 'text-[#9ba1b3] hover:text-white'
              }`}
            >
              WIREFRAME
            </button>
            <button
              onClick={() => setActivePass('clay')}
              className={`px-3 py-1 rounded font-mono text-xs transition-all ${
                activePass === 'clay'
                  ? 'bg-white text-[#050507] font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)]'
                  : 'text-[#9ba1b3] hover:text-white'
              }`}
            >
              CLAY
            </button>
            <button
              onClick={() => setActivePass('render')}
              className={`px-3 py-1 rounded font-mono text-xs transition-all ${
                activePass === 'render'
                  ? 'bg-[#00f0ff] text-[#050507] font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                  : 'text-[#9ba1b3] hover:text-white'
              }`}
            >
              FINAL RENDER (RTX)
            </button>
          </div>
        </div>

        {/* Viewport Frame */}
        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden relative bg-[#07090e] border border-white/10 shadow-2xl">
          <Image
            src={getImageForPass()}
            alt={project.title}
            fill
            priority
            className={`object-cover transition-all duration-500 ${getPassStyle()}`}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-40 pointer-events-none" />

          {/* Viewport Telemetry HUD */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#050507]/85 backdrop-blur px-3 py-1.5 rounded border border-white/10 font-mono text-xs text-[#00f0ff]">
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            <span>MODE: {activePass.toUpperCase()} PASS</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-between items-center bg-[#050507]/85 backdrop-blur-md px-4 py-2 rounded border border-white/10 text-xs font-mono text-[#9ba1b3]">
            <span>GEOMETRY: {project.polyCount}</span>
            <span className="text-[#00f0ff] font-bold">ENGINE: {project.engine}</span>
          </div>
        </div>

        {/* Challenge / Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-white/10">
          <div className="bg-[#0f1017] p-5 rounded border border-white/5">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#00f0ff] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>01 // GEOMETRIC & SPATIAL CHALLENGE</span>
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-[#0f1017] p-5 rounded border border-white/5">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#f5f6fa] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>02 // 3D PIPELINE SOLUTION</span>
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Project Key Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 p-4 rounded bg-[#12131a] border border-white/5 font-mono text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-[11px] text-[#9ba1b3] uppercase block">{m.label}</span>
                <span className="text-base sm:text-lg font-bold text-[#00f0ff]">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <button
            onClick={() => {
              const idx = STUDIO_PROJECTS.findIndex((p) => p.id === project.id);
              const prevIdx = (idx - 1 + STUDIO_PROJECTS.length) % STUDIO_PROJECTS.length;
              onSelectProject(STUDIO_PROJECTS[prevIdx]);
            }}
            className="font-mono text-xs uppercase text-[#9ba1b3] hover:text-white flex items-center gap-2 transition-colors px-3 py-2 rounded hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PREVIOUS 3D PROJECT</span>
          </button>
          <button
            onClick={() => {
              const idx = STUDIO_PROJECTS.findIndex((p) => p.id === project.id);
              const nextIdx = (idx + 1) % STUDIO_PROJECTS.length;
              onSelectProject(STUDIO_PROJECTS[nextIdx]);
            }}
            className="font-mono text-xs uppercase text-[#00f0ff] hover:underline flex items-center gap-2 transition-colors px-3 py-2 rounded hover:bg-white/5 font-bold"
          >
            <span>NEXT 3D PROJECT →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
