'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { TeamMember } from '@/types';

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function TeamModal({ member, onClose }: TeamModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-[#050507]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="bg-[#0f1017] border border-white/10 rounded-lg max-w-xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative">
        {/* Header */}
        <div className="flex justify-between items-start border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: member.dotColor }}
            />
            <span
              className="font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold"
              style={{ color: member.dotColor }}
            >
              {member.role}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded bg-[#161720] hover:bg-[#20222d] flex items-center justify-center text-[#f5f6fa] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Member Profile */}
        <div className="flex gap-4 sm:gap-6 items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded overflow-hidden relative shrink-0 border border-white/10 bg-[#161720]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase text-[#f5f6fa] tracking-tight">
              {member.name}
            </h3>
            <p className="font-mono text-xs text-[#9ba1b3] mt-1">{member.stack}</p>
          </div>
        </div>

        {/* Full Bio */}
        <p className="font-['Manrope'] text-sm sm:text-base text-[#f5f6fa] leading-relaxed">
          {member.fullBio}
        </p>

        {/* Credentials */}
        <div className="flex flex-wrap gap-2 pt-2">
          {member.credentials.map((cred, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded bg-[#161720] border border-white/5 font-mono text-[11px] text-[#9ba1b3]"
            >
              {cred}
            </span>
          ))}
        </div>

        {/* Footer info & links */}
        <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 font-mono text-xs gap-3">
          <div className="flex items-center gap-1.5 text-[#525866]">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>SYNDICATE CREDENTIAL: VERIFIED</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => alert(`Connecting to ${member.name} LinkedIn protocol...`)}
              className="px-3 py-1 bg-[#161720] hover:bg-[#20222d] rounded text-[#d4af37] flex items-center gap-1 transition-colors"
            >
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3" />
            </button>
            <button
              onClick={() => alert(`Opening ${member.name} encrypted portfolio reel...`)}
              className="px-3 py-1 bg-[#161720] hover:bg-[#20222d] rounded text-white flex items-center gap-1 transition-colors"
            >
              <span>PORTFOLIO</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
