'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralCore({ mousePos }: { mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  // Generate 24 Synaptic Nodes
  const nodeCount = 28;
  const nodes = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.4 + Math.random() * 0.8;
      const sinPhi = Math.sin(phi);
      arr.push(
        new THREE.Vector3(
          r * sinPhi * Math.cos(theta),
          r * sinPhi * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }
    return arr;
  }, []);

  // Construct interconnecting synaptic lines
  const linePositions = useMemo(() => {
    const points: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.6) {
          points.push(nodes[i].x, nodes[i].y, nodes[i].z);
          points.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return new Float32Array(points);
  }, [nodes]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const targetY = mousePos.x * 0.4 + state.clock.getElapsedTime() * 0.15;
      const targetX = mousePos.y * 0.3;
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetY, 2, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetX, 2, delta);
    }

    if (coreMeshRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.08 + 1;
      coreMeshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Quantum Tensor Core */}
      <mesh ref={coreMeshRef}>
        <icosahedronGeometry args={[0.9, 2]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#6366f1"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* Internal High-Energy Glow */}
      <mesh>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.5} />
      </mesh>

      {/* Neural Synaptic Nodes */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color={idx % 2 === 0 ? '#8b5cf6' : '#c084fc'} />
        </mesh>
      ))}

      {/* Synaptic Connection Lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function DataStreamStreamers() {
  const count = 320;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a855f7"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function AiCoreScene() {
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
      <div className="w-full h-full bg-[#050509] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#8b5cf6] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#050509']} />
        <fog attach="fog" args={['#050509', 4, 12]} />

        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={3} color="#8b5cf6" distance={6} />
        <directionalLight position={[4, 5, 3]} intensity={1.5} color="#c084fc" />
        <directionalLight position={[-4, -3, -3]} intensity={1.2} color="#4338ca" />

        <NeuralCore mousePos={mousePos} />
        <DataStreamStreamers />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#050509_92%)]" />
    </div>
  );
}
