'use client';

import React from 'react';
import Link from 'next/link';
import { X, CheckCircle2, ArrowRight, ArrowUpRight, ShieldCheck, Layers, Clock } from 'lucide-react';
import { ServiceDetail } from '@/types';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  accentColor: string;
  onClose: () => void;
  onInquire: (service: ServiceDetail) => void;
}

export function ServiceDetailModal({
  service,
  accentColor,
  onClose,
  onInquire,
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div
        className="relative z-10 w-full max-w-2xl bg-[#0d0e15] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl animate-in zoom-in-95 duration-200"
        style={{
          borderTop: `3px solid ${accentColor}`,
          boxShadow: `0 20px 50px -10px ${accentColor}20`,
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-start gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <span
                className="font-mono text-xs uppercase tracking-wider font-semibold"
                style={{ color: accentColor }}
              >
                {service.category}
              </span>
              {service.badge && (
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#f5f6fa]">
                  {service.badge}
                </span>
              )}
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#f5f6fa] tracking-tight">
              {service.name}
            </h3>
            <p className="font-['Manrope'] text-sm text-[#9ba1b3] mt-1">
              {service.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded bg-[#161720] hover:bg-[#20222d] text-[#9ba1b3] hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: 5 Core Details */}
        <div className="flex flex-col gap-5 text-sm max-h-[60vh] overflow-y-auto pr-1">
          {/* 1. Concise Explanation */}
          <div>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest font-bold block mb-1.5">
              01 // SERVICE OVERVIEW
            </span>
            <p className="font-['Manrope'] text-sm sm:text-base text-[#f5f6fa] leading-relaxed bg-[#12131a] p-4 rounded-lg border border-white/5">
              {service.explanation}
            </p>
          </div>

          {/* 2. What the Service Includes */}
          <div>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest font-bold block mb-2">
              02 // SCOPE & INCLUSIONS
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.includes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded bg-[#12131a] border border-white/5 font-['Manrope'] text-xs text-[#f5f6fa]"
                >
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: accentColor }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Business Problem It Solves */}
          <div>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest font-bold block mb-1.5">
              03 // BUSINESS PROBLEM SOLVED
            </span>
            <div className="p-3.5 rounded-lg bg-[#161720] border border-white/5 flex items-start gap-2.5">
              <ShieldCheck
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: accentColor }}
              />
              <p className="font-['Manrope'] text-xs text-[#e1e2e6] leading-relaxed">
                {service.problemSolved}
              </p>
            </div>
          </div>

          {/* 4. Expected Deliverables */}
          <div>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest font-bold block mb-2">
              04 // EXPECTED DELIVERABLES
            </span>
            <div className="flex flex-wrap gap-2">
              {service.deliverables.map((del, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded bg-[#12131a] border border-white/10 font-mono text-xs text-[#f5f6fa] flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5 text-[#9ba1b3]" />
                  {del}
                </span>
              ))}
            </div>
          </div>

          {/* 5. End-to-End Process Preview */}
          {service.processSteps && service.processSteps.length > 0 && (
            <div>
              <span className="font-['Space_Grotesk'] text-[11px] text-[#9ba1b3] uppercase tracking-widest font-bold block mb-2">
                05 {"//"} EXECUTION WORKFLOW ({service.processSteps.length} STAGES)
              </span>
              <div className="grid sm:grid-cols-2 gap-2">
                {service.processSteps.slice(0, 6).map((step, idx) => (
                  <div
                    key={step.title}
                    className="p-2.5 rounded bg-[#12131a] border border-white/10 font-['Manrope'] text-xs text-[#e1e2e6]"
                  >
                    <span className="font-mono text-[10px] mr-1.5" style={{ color: accentColor }}>
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="font-semibold text-white">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer / CTA */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-[11px] text-[#9ba1b3] flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>ESTIMATED COMMENCEMENT: WITHIN 24-48H</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {service.detailRoute && (
              <Link
                href={service.detailRoute}
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-3 rounded bg-[#12131a] hover:bg-[#1a1c26] border border-white/15 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-1.5 transition-all"
              >
                <span>FULL SERVICE PAGE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}

            <button
              onClick={() => onInquire(service)}
              style={{
                backgroundColor: accentColor,
                color: '#050507',
              }}
              className="w-full sm:w-auto px-6 py-3 rounded font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:brightness-110 shadow-lg cursor-pointer"
            >
              <span>INQUIRE ABOUT THIS SERVICE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

