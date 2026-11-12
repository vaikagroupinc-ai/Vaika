'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { MonolithPrism } from './MonolithPrism';
import { OrbitalRings } from './OrbitalRings';
import { ParticleCloud } from './ParticleCloud';
import { FallbackCanvas } from './FallbackCanvas';

export function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    // Test WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) {
    return <FallbackCanvas />;
  }

  if (!hasWebGL) {
    return <FallbackCanvas />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[10, -5, 5]} intensity={1.5} color="#d4af37" />
        <pointLight position={[0, 8, -5]} intensity={1.2} color="#8b5cf6" />

        <Suspense fallback={null}>
          <MonolithPrism mouse={mouse} />
          <OrbitalRings />
          <ParticleCloud count={140} />
        </Suspense>
      </Canvas>
      {/* Cinematic Vignette & Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/80 via-transparent to-[#050507]/80 pointer-events-none" />
    </div>
  );
}
