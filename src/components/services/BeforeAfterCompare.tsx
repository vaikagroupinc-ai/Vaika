'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { MoveHorizontal } from 'lucide-react';
import { DemonstrationBeforeAfterPair } from '@/types';

interface BeforeAfterCompareProps {
  pair: DemonstrationBeforeAfterPair;
  accentColor?: string;
}

/**
 * Pixel-aligned draggable/touch/keyboard comparison divider for paired
 * Original vs Final architectural plates.
 */
export function BeforeAfterCompare({
  pair,
  accentColor = '#d4af37',
}: BeforeAfterCompareProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(4, Math.min(96, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.stopPropagation();
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.stopPropagation();
    setIsDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();
      setPosition((prev) => Math.max(4, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      setPosition((prev) => Math.min(96, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="relative w-full h-full min-h-[260px] select-none overflow-hidden rounded-lg bg-[#050507] cursor-ew-resize touch-none"
    >
      {/* Final Result Base Layer */}
      <Image
        src={pair.finalSrc}
        alt={pair.finalAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 85vw"
        className="object-contain pointer-events-none select-none"
        priority
      />

      {/* Original Source Clipped Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={pair.originalSrc}
          alt={pair.originalAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 85vw"
          className="object-contain pointer-events-none select-none"
          priority
        />
      </div>

      {/* Original / Final Labels */}
      <span className="pointer-events-none absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050507]/85 border border-white/15 font-mono text-[10px] uppercase tracking-widest text-[#f5f6fa] backdrop-blur">
        {pair.originalLabel || 'ORIGINAL'}
      </span>
      <span
        className="pointer-events-none absolute top-3 right-3 px-2.5 py-1 rounded bg-[#050507]/85 border font-mono text-[10px] uppercase tracking-widest backdrop-blur"
        style={{ borderColor: `${accentColor}66`, color: accentColor }}
      >
        {pair.finalLabel || 'FINAL'}
      </span>

      {/* Draggable Vertical Divider & Keyboard Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison divider"
        aria-valuemin={4}
        aria-valuemax={96}
        aria-valuenow={Math.round(position)}
        onKeyDown={handleKeyDown}
        className="absolute inset-y-0 -translate-x-1/2 flex items-center justify-center focus:outline-none group"
        style={{ left: `${position}%` }}
      >
        <div
          className="w-[2px] h-full shadow-[0_0_12px_rgba(0,0,0,0.9)]"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="absolute w-9 h-9 rounded-full bg-[#050507]/90 border-2 flex items-center justify-center shadow-2xl group-focus-visible:ring-2 group-focus-visible:ring-white transition-transform group-hover:scale-105"
          style={{ borderColor: accentColor, color: accentColor }}
        >
          <MoveHorizontal className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

