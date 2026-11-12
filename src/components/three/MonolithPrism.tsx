'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MonolithPrismProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export function MonolithPrism({ mouse }: MonolithPrismProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth auto-rotation
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;

      // Mouse tilt damping
      const targetRotX = mouse.current.y * 0.3;
      const targetRotZ = -mouse.current.x * 0.3;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.05);

      // Subtle breathing float
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.15;
    }

    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.06;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Monolithic Octahedron / Obsidian Crystal */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[2.0, 0]} />
        <meshPhysicalMaterial
          color="#12131a"
          roughness={0.15}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
          transmission={0.3}
          thickness={1.2}
          ior={1.6}
        />
      </mesh>

      {/* Internal Glowing Core (Prismatic energy) */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial
          color="#d4af37"
          wireframe={true}
          transparent={true}
          opacity={0.7}
        />
      </mesh>

      {/* Outer Titanium Wireframe Skeleton */}
      <mesh>
        <octahedronGeometry args={[2.05, 0]} />
        <meshBasicMaterial
          color="#9ba1b3"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Brand Node Vertex Orbs (Gold, Cyan, Violet) */}
      <mesh position={[0, 2.05, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" />
      </mesh>
      <mesh position={[0, -2.05, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
      <mesh position={[2.05, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#d4af37" />
      </mesh>
      <mesh position={[-2.05, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" />
      </mesh>
      <mesh position={[0, 0, 2.05]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#d4af37" />
      </mesh>
      <mesh position={[0, 0, -2.05]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
    </group>
  );
}
