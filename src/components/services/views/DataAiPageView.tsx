'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { DATA_AI_DIVISION } from '@/data/servicesData';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

const AiCoreScene = dynamic(
  () => import('@/components/three/AiCoreScene').then((mod) => mod.AiCoreScene),
  { ssr: false, loading: () => <div className="w-full h-80 rounded-xl bg-[#0a0a0f] animate-pulse border border-white/5" /> }
);

export function DataAiPageView() {
  return (
    <ServicePageTemplate
      data={DATA_AI_DIVISION}
      heroElement={
        <div className="w-full h-80 sm:h-96 rounded-xl bg-[#0a0a0f] border border-white/10 relative overflow-hidden shadow-2xl">
          <AiCoreScene />
          <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center font-mono text-[11px] text-[#9ba1b3] bg-[#050507]/80 px-3 py-1.5 rounded backdrop-blur border border-white/10 pointer-events-none">
            <span className="text-[#8b5cf6] font-semibold">{'//'} NEURAL TRAINING DATA PIPELINE</span>
            <span>MULTI-LAYER GROUND TRUTH</span>
          </div>
        </div>
      }
    />
  );
}

