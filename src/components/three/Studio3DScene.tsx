'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface StudioSceneProps {
  mode?: 'wire' | 'clay' | 'rtx';
}

function ArchitecturalComplex({ mode }: { mode: 'wire' | 'clay' | 'rtx' }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.7) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.2;
      ringRef.current.rotation.y += delta * 0.15;
    }
  });

  const isWire = mode === 'wire';
  const isClay = mode === 'clay';

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Kinetic Pavilion */}
      <mesh ref={coreRef} position={[0, 0.2, 0]}>
        <dodecahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color={isClay ? '#d0d4dc' : isWire ? '#00f0ff' : '#0e111a'}
          wireframe={isWire}
          roughness={isClay ? 0.9 : 0.15}
          metalness={isClay ? 0.05 : isWire ? 0.9 : 0.95}
          emissive={isWire ? '#00f0ff' : '#003344'}
          emissiveIntensity={isWire ? 0.6 : 0.2}
        />
      </mesh>

      {/* Floating Cantilevered Facades */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        const x = Math.cos(angle) * 2.1;
        const z = Math.sin(angle) * 2.1;
        return (
          <mesh
            key={i}
            position={[x, Math.sin(i) * 0.6, z]}
            rotation={[0.2 * i, angle, 0.1 * i]}
          >
            <boxGeometry args={[0.9, 0.25, 0.6]} />
            <meshStandardMaterial
              color={isClay ? '#b8bcc6' : isWire ? '#00f0ff' : '#141824'}
              wireframe={isWire}
              roughness={isClay ? 0.8 : 0.2}
              metalness={isClay ? 0.1 : 0.9}
            />
          </mesh>
        );
      })}

      {/* Holographic Gyro Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.7, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={isWire ? 0.9 : 0.4}
        />
      </mesh>

      {/* 3D Camera Rig & Lighting Helper Marker */}
      <mesh position={[2.6, 1.8, 1.8]} rotation={[0.4, -0.6, 0]}>
        <coneGeometry args={[0.2, 0.4, 4]} />
        <meshBasicMaterial color="#00f0ff" wireframe />
      </mesh>
      <mesh position={[-2.4, 2.2, -1.8]} rotation={[-0.4, 0.6, 0]}>
        <coneGeometry args={[0.2, 0.4, 4]} />
        <meshBasicMaterial color="#ffe088" wireframe />
      </mesh>
    </group>
  );
}

function GridFloor({ isWire }: { isWire: boolean }) {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[20, 24, isWire ? '#00f0ff' : '#1a2332', '#0d131d']}
      position={[0, -2, 0]}
    />
  );
}

function DigitalParticles() {
  const count = 250;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#00f0ff"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function Studio3DScene({ mode = 'rtx' }: StudioSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-[#05060a] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#00f0ff] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 1.2, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#05060a']} />
        <fog attach="fog" args={['#05060a', 4, 12]} />

        <ambientLight intensity={mode === 'clay' ? 1.4 : 0.5} />
        {/* Key Cyan Rim Light */}
        <directionalLight
          position={[5, 6, 4]}
          intensity={mode === 'clay' ? 2 : 2.5}
          color={mode === 'clay' ? '#ffffff' : '#a8f5ff'}
        />
        {/* Fill Violet/Blue */}
        <directionalLight
          position={[-5, -2, -3]}
          intensity={mode === 'clay' ? 1 : 1.2}
          color={mode === 'clay' ? '#e2e6f0' : '#4d2bf5'}
        />
        <pointLight position={[0, 0, 0]} intensity={2} color="#00f0ff" distance={5} />

        <ArchitecturalComplex mode={mode} />
        <GridFloor isWire={mode === 'wire'} />
        <DigitalParticles />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,#05060a_92%)]" />
    </div>
  );
}
