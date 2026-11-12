'use client';

import React, { useState } from 'react';
import { Volume2, Play, Pause } from 'lucide-react';

interface WaveformVisualizerProps {
  memoId?: string;
  duration?: string;
}

export function WaveformVisualizer({ memoId = '01', duration = '01:30' }: WaveformVisualizerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const barHeights = [24, 48, 32, 56, 20, 40, 64, 28, 44, 52, 36, 60, 26, 46, 30];

  return (
    <div className="w-full bg-[#161720] rounded-lg p-4 flex flex-col justify-between h-48 border border-white/5">
      <div className="flex justify-between items-center font-mono text-xs text-[#9ba1b3]">
        <div className="flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>AUDIO MEMO // {memoId}</span>
        </div>
        <span className="text-[#d4af37] font-semibold">{duration}</span>
      </div>

      {/* Animated Waveform Bars */}
      <div className="flex items-center justify-between gap-1.5 h-16 py-2">
        {barHeights.map((h, i) => (
          <span
            key={i}
            className={`w-1.5 rounded-full transition-all duration-300 ${isPlaying
              ? 'bg-[#d4af37] animate-pulse'
              : 'bg-[#d4af37]/60'
              }`}
            style={{
              height: isPlaying ? `${Math.max(12, ((h * 1.4) % 64))}px` : `${h}px`,
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-white/10">
        <span className="font-['Space_Grotesk'] text-[10px] text-[#9ba1b3] uppercase tracking-wider">
          CONFIDENTIAL BRIEF
        </span>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-3 py-1 rounded bg-[#20222d] hover:bg-[#2b2e3c] text-xs font-mono text-[#f5f6fa] flex items-center gap-1.5 transition-colors border border-white/5"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isPlaying ? 'PAUSE' : 'AUDIT'}</span>
        </button>
      </div>
    </div>
  );
}
