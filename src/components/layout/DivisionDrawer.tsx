'use client';

import React from 'react';
import Link from 'next/link';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { DivisionKey } from '@/types';
import { DIVISIONS } from '@/data/content';

interface DivisionDrawerProps {
  division: DivisionKey | null;
  onClose: () => void;
  onCommission: (division: DivisionKey) => void;
}

export function DivisionDrawer({ division, onClose, onCommission }: DivisionDrawerProps) {
  if (!division) return null;
  const data = DIVISIONS[division];
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over Container */}
      <div
        className="relative z-10 w-full max-w-lg bg-[#0a0a0f]/95 backdrop-blur-2xl border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300"
        style={{
          borderLeftColor: data.accentColor,
        }}
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: data.accentColor }}
              />
              <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[#f5f6fa]">
                {data.sector}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded bg-[#161720] flex items-center justify-center text-[#f5f6fa] hover:bg-[#20222d] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="mt-6 space-y-5">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#f5f6fa] tracking-tight leading-tight">
              {data.title}
            </h3>
            <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] leading-relaxed">
              {data.description}
            </p>

            {/* Core Capability Matrix */}
            <div className="pt-4">
              <span className="font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest block mb-3">
                CORE CAPABILITY MATRIX
              </span>
              <ul className="flex flex-col space-y-2.5 font-['Manrope'] text-sm text-[#f5f6fa]">
                {data.services.map((srv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2 rounded bg-[#12131a] border border-white/5">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: data.accentColor }}
                    />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Division Telemetry Tag */}
            <div className="p-3 rounded bg-[#050507] border border-white/5 flex justify-between items-center font-mono text-xs text-[#9ba1b3]">
              <span>SPECIFICATION</span>
              <span style={{ color: data.accentColor }}>{data.subTag}</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-white/10 mt-6 flex flex-col gap-2.5">
          <Link
            href={data.route}
            onClick={onClose}
            className="w-full py-3 rounded border border-white/20 text-[#f5f6fa] hover:bg-white/5 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            style={{ borderColor: `${data.accentColor}50`, color: data.accentColor }}
          >
            <span>EXPLORE FULL DIVISION PAGE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => {
              onCommission(division);
              onClose();
            }}
            className="w-full py-3.5 rounded bg-[#f5f6fa] text-[#050507] font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_24px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            <span>COMMISSION THIS DIVISION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
