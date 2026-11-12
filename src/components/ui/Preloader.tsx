'use client';

import React, { useState, useEffect } from 'react';

export function Preloader() {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 8;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050507] flex flex-col items-center justify-center transition-opacity duration-700 ${
        percent >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6 max-w-xs w-full px-6">
        {/* Animated Emblem */}
        <svg viewBox="0 0 56 56" className="w-12 h-12 animate-pulse" fill="none">
          <defs>
            <linearGradient id="vaikaPreload" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="accentPreload" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>
          <polygon points="28,2 54,54 44,54 28,20 12,54 2,54" fill="url(#vaikaPreload)" />
          <polygon points="28,24 40,48 16,48" fill="url(#accentPreload)" opacity="0.9" />
          <circle cx="28" cy="2" r="3" fill="#00f0ff" />
          <circle cx="2" cy="54" r="3" fill="#d4af37" />
          <circle cx="54" cy="54" r="3" fill="#8b5cf6" />
        </svg>

        <div className="text-center">
          <span className="font-['Space_Grotesk'] text-xl font-bold tracking-widest text-[#f5f6fa] uppercase block">
            VAIKA GROUP
          </span>
          <span className="font-mono text-[10px] text-[#9ba1b3] tracking-[0.3em] uppercase block mt-1">
            INITIALIZING MONOLITH MATRIX
          </span>
        </div>

        {/* Progress Bar & Number */}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-0.5 bg-[#161720] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00f0ff] via-[#8b5cf6] to-[#d4af37] transition-all duration-100 ease-out"
              style={{ width: `${Math.min(100, percent)}%` }}
            />
          </div>
          <div className="flex justify-between items-center font-mono text-[11px] text-[#9ba1b3]">
            <span>SYSTEM BOOT</span>
            <span className="text-[#d4af37] font-bold">
              {percent < 10 ? `0${percent}` : Math.min(100, percent)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
