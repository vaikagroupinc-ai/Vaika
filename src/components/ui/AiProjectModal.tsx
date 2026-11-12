'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ArrowLeft, ArrowRight, Network } from 'lucide-react';
import { AiProjectItem } from '@/types';
import { AI_PROJECTS } from '@/data/content';

interface AiProjectModalProps {
  project: AiProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: AiProjectItem) => void;
}

export function AiProjectModal({
  project,
  onClose,
  onSelectProject,
}: AiProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const idx = AI_PROJECTS.findIndex((p) => p.id === project.id);
        const nextIdx = (idx + 1) % AI_PROJECTS.length;
        onSelectProject(AI_PROJECTS[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const idx = AI_PROJECTS.findIndex((p) => p.id === project.id);
        const prevIdx = (idx - 1 + AI_PROJECTS.length) % AI_PROJECTS.length;
        onSelectProject(AI_PROJECTS[prevIdx]);
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

  const currentIndex = AI_PROJECTS.findIndex((p) => p.id === project.id);

  return (
    <div className="fixed inset-0 z-50 bg-[#050507]/96 backdrop-blur-2xl flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 my-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs text-[#9ba1b3]">
            <span className="text-[#8b5cf6] font-bold uppercase">{'//'} AI & ENGINEERING CASE STUDY</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-[#f5f6fa]">
              [0{currentIndex + 1} / 0{AI_PROJECTS.length}]
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
            <div className="flex items-center gap-2 text-xs font-mono text-[#8b5cf6] mb-1">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-[#f5f6fa] tracking-tight">
              {project.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {project.technology.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#181926] border border-white/10 font-mono text-[11px] text-[#c084fc]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Showcase Image & Architecture Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 aspect-[16/10] rounded-lg overflow-hidden relative bg-[#0d0e17] border border-white/10 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-[#050507]/90 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-xs font-mono text-[#9ba1b3]">
              <span className="text-[#8b5cf6]">H100 NEURAL INFERENCE</span>
              <span>ZERO DATA RETENTION</span>
            </div>
          </div>

          {/* Architecture Pipeline Flow Box */}
          <div className="lg:col-span-5 bg-[#0f101a] p-5 rounded-lg border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-['Space_Grotesk'] text-xs text-[#8b5cf6] font-bold uppercase tracking-wider mb-4">
                <Network className="w-4 h-4" />
                <span>SYSTEM ARCHITECTURE PIPELINE</span>
              </div>

              <div className="space-y-2.5">
                {project.architectureFlow.map((node, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded bg-[#151624] border border-white/5 font-mono text-xs"
                  >
                    <span className="w-6 h-6 rounded bg-[#8b5cf6]/20 text-[#8b5cf6] flex items-center justify-center font-bold text-[11px] shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-[#f5f6fa] font-semibold">{node}</span>
                    {idx < project.architectureFlow.length - 1 && (
                      <span className="text-white/20 ml-auto">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#9ba1b3]">
              <span>STATUS: PRODUCTION LIVE</span>
              <span className="text-[#8b5cf6] font-bold">100% DETERMINISTIC</span>
            </div>
          </div>
        </div>

        {/* Problem, Solution, Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/10">
          <div className="bg-[#0f101a] p-5 rounded border border-white/5">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#f87171] uppercase tracking-wider mb-2">
              01 // THE SYSTEM PROBLEM
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-[#0f101a] p-5 rounded border border-white/5">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#8b5cf6] uppercase tracking-wider mb-2">
              02 // NEURAL & CODE ARCHITECTURE
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="bg-[#0f101a] p-5 rounded border border-white/5">
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#34d399] uppercase tracking-wider mb-2">
              03 // OPERATIONAL RESULTS
            </h4>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 p-4 rounded bg-[#12131f] border border-white/5 font-mono text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-[11px] text-[#9ba1b3] uppercase block">{m.label}</span>
                <span className="text-base sm:text-lg font-bold text-[#c084fc]">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <button
            onClick={() => {
              const idx = AI_PROJECTS.findIndex((p) => p.id === project.id);
              const prevIdx = (idx - 1 + AI_PROJECTS.length) % AI_PROJECTS.length;
              onSelectProject(AI_PROJECTS[prevIdx]);
            }}
            className="font-mono text-xs uppercase text-[#9ba1b3] hover:text-white flex items-center gap-2 transition-colors px-3 py-2 rounded hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PREVIOUS SYSTEM</span>
          </button>
          <button
            onClick={() => {
              const idx = AI_PROJECTS.findIndex((p) => p.id === project.id);
              const nextIdx = (idx + 1) % AI_PROJECTS.length;
              onSelectProject(AI_PROJECTS[nextIdx]);
            }}
            className="font-mono text-xs uppercase text-[#8b5cf6] hover:underline flex items-center gap-2 transition-colors px-3 py-2 rounded hover:bg-white/5 font-bold"
          >
            <span>NEXT AI SYSTEM CASE STUDY →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
