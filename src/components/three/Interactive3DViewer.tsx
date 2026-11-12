'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Eye, Layers, Sparkles, Activity } from 'lucide-react';

type ShadingMode = 'wireframe' | 'clay' | 'rtx';

function ModelArchitecture({ mode }: { mode: ShadingMode }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.1, 0]}>
      {/* ── 1. SITE FOUNDATION & OUTDOOR LIVING TERRACE ── */}
      {/* Main Ground Platform / Landscape Slab */}
      <mesh position={[0, -1.0, 0]}>
        <boxGeometry args={[5.2, 0.24, 4.6]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#00f0ff" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#d1d5db" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#363946" metalness={0.2} roughness={0.6} />
        )}
      </mesh>

      {/* Illuminated Infinity Reflection Pool */}
      <mesh position={[1.3, -0.87, 1.0]}>
        <boxGeometry args={[2.0, 0.06, 1.6]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#00f0ff" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#cbd5e1" roughness={0.4} />
        ) : (
          <meshStandardMaterial
            color="#00e5ff"
            metalness={0.1}
            roughness={0.05}
            emissive="#007799"
            emissiveIntensity={0.65}
          />
        )}
      </mesh>

      {/* Pool Coping Frame */}
      <mesh position={[1.3, -0.88, 1.0]}>
        <boxGeometry args={[2.14, 0.05, 1.74]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#d4af37" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#9ca3af" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.2} />
        )}
      </mesh>

      {/* Garden Stepping Stones */}
      {[-0.8, -1.3, -1.8].map((x, i) => (
        <mesh key={i} position={[x, -0.87, 1.5]}>
          <boxGeometry args={[0.35, 0.04, 0.55]} />
          {mode === 'wireframe' ? (
            <meshBasicMaterial color="#38bdf8" wireframe />
          ) : mode === 'clay' ? (
            <meshStandardMaterial color="#e5e7eb" roughness={0.9} />
          ) : (
            <meshStandardMaterial color="#64748b" roughness={0.7} />
          )}
        </mesh>
      ))}

      {/* ── 2. GROUND FLOOR: RESIDENTIAL LIVING PAVILION ── */}
      {/* Primary White Travertine / Limestone Walls */}
      <mesh position={[-0.7, -0.22, -0.1]}>
        <boxGeometry args={[2.5, 1.35, 2.5]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#00f0ff" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#f3f4f6" roughness={0.7} />
        ) : (
          <meshStandardMaterial color="#ebe8e0" metalness={0.05} roughness={0.45} />
        )}
      </mesh>

      {/* Floor-to-Ceiling Front Panoramic Glass Wall */}
      <mesh position={[-0.6, -0.22, 1.16]}>
        <boxGeometry args={[2.0, 1.22, 0.06]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#38bdf8" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
        ) : (
          <meshStandardMaterial
            color="#ffe8bf"
            emissive="#ffbe55"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.88}
          />
        )}
      </mesh>

      {/* Side Glass Wall with Interior Glow */}
      <mesh position={[-1.96, -0.22, -0.1]}>
        <boxGeometry args={[0.06, 1.22, 1.8]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#38bdf8" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
        ) : (
          <meshStandardMaterial
            color="#ffe8bf"
            emissive="#ffbe55"
            emissiveIntensity={0.45}
            roughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.85}
          />
        )}
      </mesh>

      {/* Architectural Timber Entryway Door */}
      <mesh position={[0.75, -0.22, 1.16]}>
        <boxGeometry args={[0.65, 1.24, 0.08]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#d4af37" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#9ca3af" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#965a36" roughness={0.55} />
        )}
      </mesh>

      {/* Gold Entry Door Pull Handle */}
      {mode === 'rtx' && (
        <mesh position={[0.55, -0.22, 1.22]}>
          <cylinderGeometry args={[0.015, 0.015, 0.7, 8]} />
          <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.15} />
        </mesh>
      )}

      {/* Structural Slate Chimney / Vertical Feature Column */}
      <mesh position={[-1.6, 0.5, 0.5]}>
        <boxGeometry args={[0.55, 3.4, 0.85]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#8b5cf6" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#94a3b8" roughness={0.9} />
        ) : (
          <meshStandardMaterial color="#2d303a" metalness={0.3} roughness={0.7} />
        )}
      </mesh>

      {/* ── 3. CANTILEVERED UPPER SUITE & BALCONY ── */}
      {/* Cantilevered Master Suite Overhanging the Pool */}
      <mesh position={[0.45, 0.92, 0.35]}>
        <boxGeometry args={[2.6, 1.1, 2.7]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#00f0ff" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#f8fafc" roughness={0.7} />
        ) : (
          <meshStandardMaterial color="#f3f0e8" metalness={0.05} roughness={0.4} />
        )}
      </mesh>

      {/* Upper Floor Front Panorama Window */}
      <mesh position={[0.6, 0.92, 1.71]}>
        <boxGeometry args={[1.8, 0.85, 0.06]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#38bdf8" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
        ) : (
          <meshStandardMaterial
            color="#fff0cc"
            emissive="#ffd27a"
            emissiveIntensity={0.55}
            roughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.88}
          />
        )}
      </mesh>

      {/* Upper Floor Balcony Timber Deck */}
      <mesh position={[0.6, 0.42, 1.95]}>
        <boxGeometry args={[1.9, 0.08, 0.85]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#d4af37" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#9ca3af" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#5a3821" roughness={0.65} />
        )}
      </mesh>

      {/* Balcony Glass Railing */}
      <mesh position={[0.6, 0.68, 2.38]}>
        <boxGeometry args={[1.9, 0.46, 0.04]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#00f0ff" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#cbd5e1" roughness={0.3} />
        ) : (
          <meshStandardMaterial
            color="#38bdf8"
            roughness={0.05}
            metalness={0.1}
            transparent
            opacity={0.65}
          />
        )}
      </mesh>

      {/* Balcony Gold Top Railing */}
      <mesh position={[0.6, 0.92, 2.38]}>
        <boxGeometry args={[1.92, 0.03, 0.05]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#d4af37" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#9ca3af" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
        )}
      </mesh>

      {/* Architectural Wood Screen / Vertical Louvers */}
      <mesh position={[-0.86, 0.92, 0.5]}>
        <boxGeometry args={[0.06, 1.05, 0.85]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#d4af37" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#9ca3af" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#9e653e" roughness={0.5} />
        )}
      </mesh>

      {/* ── 4. MODERN ARCHITECTURAL FLOATING CANOPIES & ROOF ── */}
      {/* Main Floating Cantilevered Roof Slab */}
      <mesh position={[0.3, 1.52, 0.2]}>
        <boxGeometry args={[3.8, 0.12, 3.8]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#8b5cf6" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#94a3b8" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#303342" metalness={0.4} roughness={0.4} />
        )}
      </mesh>

      {/* Champagne Gold Roof Fascia Perimeter Accent */}
      <mesh position={[0.3, 1.52, 0.2]}>
        <boxGeometry args={[3.84, 0.08, 3.84]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#d4af37" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#d1d5db" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.15} />
        )}
      </mesh>

      {/* Ground Floor Entrance Canopy */}
      <mesh position={[-0.5, 0.48, 1.4]}>
        <boxGeometry args={[1.7, 0.06, 1.4]} />
        {mode === 'wireframe' ? (
          <meshBasicMaterial color="#38bdf8" wireframe />
        ) : mode === 'clay' ? (
          <meshStandardMaterial color="#cbd5e1" roughness={0.8} />
        ) : (
          <meshStandardMaterial color="#2d303b" metalness={0.5} roughness={0.3} />
        )}
      </mesh>

      {/* Warm Ambient Under-Canopy Strip Light */}
      {mode === 'rtx' && (
        <mesh position={[-0.5, 0.44, 1.4]}>
          <boxGeometry args={[1.5, 0.015, 1.2]} />
          <meshBasicMaterial color="#ffeed1" />
        </mesh>
      )}
    </group>
  );
}

export function Interactive3DViewer() {
  const [mode, setMode] = useState<ShadingMode>('rtx');
  const [fps] = useState('60.0');

  return (
    <div className="relative w-full rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-2xl">
      {/* Top HUD Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#12131a]/90 backdrop-blur border-b border-white/5 z-20 relative">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#f5f6fa]">
              UE5.4 RAYTRACER VIEWPORT
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#9ba1b3]">
            <span className="px-2 py-0.5 bg-white/5 rounded">NANITE: ACTIVE</span>
            <span className="px-2 py-0.5 bg-white/5 rounded">LUMEN: 5.4</span>
          </div>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="flex items-center gap-1 bg-[#050507] p-1 rounded">
          <button
            onClick={() => setMode('wireframe')}
            className={`px-3 py-1 font-mono text-xs uppercase rounded transition-colors flex items-center gap-1.5 ${
              mode === 'wireframe'
                ? 'bg-[#00f0ff] text-[#050507] font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>WIRE</span>
          </button>
          <button
            onClick={() => setMode('clay')}
            className={`px-3 py-1 font-mono text-xs uppercase rounded transition-colors flex items-center gap-1.5 ${
              mode === 'clay'
                ? 'bg-white text-[#050507] font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)]'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>CLAY</span>
          </button>
          <button
            onClick={() => setMode('rtx')}
            className={`px-3 py-1 font-mono text-xs uppercase rounded transition-colors flex items-center gap-1.5 ${
              mode === 'rtx'
                ? 'bg-[#d4af37] text-[#050507] font-bold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                : 'text-[#9ba1b3] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RTX</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Area */}
      <div className="relative h-[420px] lg:h-[500px] w-full bg-[#050507]">
        <Canvas
          camera={{ position: [4, 3, 5], fov: 42 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: false }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <color attach="background" args={[mode === 'clay' ? '#181922' : mode === 'rtx' ? '#08090f' : '#050507']} />
          <ambientLight intensity={mode === 'clay' ? 0.95 : mode === 'rtx' ? 1.15 : 0.6} color="#f8fafc" />
          <directionalLight position={[6, 9, 5]} intensity={mode === 'clay' ? 1.6 : 2.4} color="#fffcf2" />
          <directionalLight position={[-6, 5, -5]} intensity={mode === 'rtx' ? 1.2 : 0.6} color="#94a3b8" />
          
          {/* Architectural Interior & Landscape Point Lights */}
          <pointLight position={[-0.4, 0.1, 0.3]} intensity={mode === 'rtx' ? 3.5 : 0} distance={7} color="#ffbe55" />
          <pointLight position={[1.3, -0.3, 1.0]} intensity={mode === 'rtx' ? 2.8 : 0} distance={6} color="#00e5ff" />
          <pointLight position={[0.6, 1.2, 1.8]} intensity={mode === 'rtx' ? 2.0 : 0} distance={5} color="#ffd88a" />

          <Suspense fallback={null}>
            <ModelArchitecture mode={mode} />
            <OrbitControls
              enableZoom={false}
              autoRotate={false}
              maxPolarAngle={Math.PI / 2 + 0.1}
              minPolarAngle={Math.PI / 6}
            />
          </Suspense>
        </Canvas>

        {/* L-Shape Corner Alignment Ticks */}
        <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-[#00f0ff]/60 pointer-events-none" />
        <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-[#00f0ff]/60 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-[#00f0ff]/60 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-[#00f0ff]/60 pointer-events-none" />

        {/* Coordinate Overlay */}
        <div className="absolute top-4 left-6 font-mono text-[10px] text-[#9ba1b3]/60 pointer-events-none">
          COORD: [51.5074° N, 0.1278° W] // ELEV: 184M
        </div>

        {/* Bottom HUD Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#12131a]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-xl pointer-events-none">
          <div className="flex items-center gap-1.5 font-mono text-xs text-[#00f0ff]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-bold">{fps} FPS</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-[#9ba1b3]">
            <span>GEOM:</span>
            <span className="text-[#f5f6fa]">142.8M POLYS</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <div className="flex items-center gap-1 font-mono text-[11px] text-[#d4af37]">
            <span>MODE:</span>
            <span className="font-bold uppercase">{mode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
