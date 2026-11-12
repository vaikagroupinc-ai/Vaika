'use client';

import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export function TerminalStream() {
  const logLines = [
    '> Initializing tensor array [1024, 768]...',
    '> Connecting to spatial telemetry stream: OK',
    '> Model confidence: 99.84% latency: 8.2ms',
    '> Autonomous media routing active.',
    '> Spatial segmentation mask: 0.998 IoU',
    '> Synthesizing 3D Gaussian radiance field...',
    '> Quantization: INT8 TensorRT engine ready',
    '> Zero-data retention cryptographic handshake verified',
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % logLines.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [logLines.length]);

  return (
    <div className="w-full h-44 rounded bg-[#050507] p-3 font-mono text-[11px] flex flex-col justify-between overflow-hidden border border-white/10 shadow-inner">
      <div className="flex items-center justify-between text-[#9ba1b3] border-b border-white/10 pb-1.5">
        <div className="flex items-center gap-1.5 text-[#8b5cf6]">
          <Terminal className="w-3.5 h-3.5" />
          <span className="font-bold">SYS.NEURAL_NET_DAEMON</span>
        </div>
        <span className="inline-block w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
      </div>

      <div className="flex flex-col space-y-1 text-[#9ba1b3] my-1">
        {logLines.slice(0, currentLineIndex + 1).slice(-4).map((line, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-300 ${
              idx === 3 ? 'text-[#f5f6fa]' : 'text-[#9ba1b3]/80'
            }`}
          >
            {line.includes('99.84%') || line.includes('Gaussian') ? (
              <span className="text-[#8b5cf6]">{line}</span>
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-[10px] text-[#525866] flex justify-between items-center border-t border-white/5 pt-1">
        <span>MEM: 14.8GB / 64GB</span>
        <span className="text-[#8b5cf6] font-semibold">PORT 8080 // WS SECURE</span>
      </div>
    </div>
  );
}
