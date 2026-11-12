'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FortressStructure({ mousePos }: { mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Subtle mouse tracking & breathing
      const targetRotationY = mousePos.x * 0.35 + state.clock.getElapsedTime() * 0.05;
      const targetRotationX = mousePos.y * 0.2 + 0.1;
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotationY, 2, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotationX, 2, delta);
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Floating Fortress Monument */}
      <mesh ref={coreRef} position={[0, 0.4, 0]}>
        <cylinderGeometry args={[1.2, 0.6, 2.2, 8]} />
        <meshStandardMaterial
          color="#161720"
          metalness={0.9}
          roughness={0.2}
          emissive="#d4af37"
          emissiveIntensity={0.15}
          wireframe={false}
        />
      </mesh>

      {/* Top Observatory Crown */}
      <mesh position={[0, 1.8, 0]}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.8}
          roughness={0.1}
          emissive="#e9c349"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Sub-structures & Cantilevers */}
      <mesh position={[1.4, 0.2, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[1.2, 0.3, 0.8]} />
        <meshStandardMaterial color="#1a1c24" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[-1.4, 0.2, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[1.2, 0.3, 0.8]} />
        <meshStandardMaterial color="#1a1c24" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.4, 1.4]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.8, 0.3, 1.2]} />
        <meshStandardMaterial color="#1a1c24" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.4, -1.4]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[0.8, 0.3, 1.2]} />
        <meshStandardMaterial color="#1a1c24" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Outer Floating Geometric Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.8, 0.03, 16, 100]} />
        <meshBasicMaterial color="#d4af37" opacity={0.6} transparent />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 1.8, Math.PI / 6, 0]}>
        <torusGeometry args={[3.4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>
    </group>
  );
}

function MovingClouds() {
  const cloudCount = 14;
  const clouds = useMemo(() => {
    return Array.from({ length: cloudCount }).map(() => ({
      position: [
        (Math.random() - 0.5) * 14,
        -1.8 - Math.random() * 1.5,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      scale: [2.5 + Math.random() * 2, 0.6 + Math.random() * 0.4, 2 + Math.random() * 2] as [number, number, number],
      speed: 0.08 + Math.random() * 0.12,
    }));
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, idx) => {
        child.position.x += clouds[idx].speed * delta;
        if (child.position.x > 8) {
          child.position.x = -8;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {clouds.map((c, i) => (
        <mesh key={i} position={c.position} scale={c.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#2a2d3d"
            roughness={0.9}
            metalness={0.1}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function GoldenAtmosphereParticles() {
  const count = 300;
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return [pos];
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#d4af37"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function EstateFortressScene() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-[#07070b] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#d4af37] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0.8, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#07080d']} />
        <fog attach="fog" args={['#07080d', 5, 14]} />

        <ambientLight intensity={0.6} />
        {/* Warm Architectural Dusk Sun */}
        <directionalLight position={[6, 8, 4]} intensity={2.2} color="#ffe2a4" />
        {/* Fill Cool Sky Light */}
        <directionalLight position={[-6, -2, -4]} intensity={0.8} color="#4f5e7a" />
        {/* Gold Rim Accent */}
        <pointLight position={[0, 2, 0]} intensity={3} color="#d4af37" distance={6} />

        <FortressStructure mousePos={mousePos} />
        <MovingClouds />
        <GoldenAtmosphereParticles />
      </Canvas>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#050507_90%)]" />
    </div>
  );
}
