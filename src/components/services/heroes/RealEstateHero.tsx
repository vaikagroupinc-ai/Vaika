'use client';

import React, { useEffect, useRef } from 'react';
import { HeroCenterpiece } from '@/components/hero/HeroCenterpiece';
import '@/styles/centerpiece.css';

/**
 * Interactive "Wireframe to Graded Reality" centerpiece mounted inside
 * the Real Estate division hero viewport.
 */
export function RealEstateHero() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    mountEl.innerHTML = '';
    const centerpiece = new HeroCenterpiece(mountEl);

    return () => {
      centerpiece.dispose();
    };
  }, []);

  return (
    <div
      id="hero-centerpiece-mount"
      ref={mountRef}
      className="hero-centerpiece-mount"
      role="region"
      aria-label="Interactive Real Estate Wireframe to Graded Reality Showcase"
    />
  );
}

