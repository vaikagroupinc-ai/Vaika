'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function OrbitalRings() {
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.18;
      ring1Ref.current.rotation.x += delta * 0.05;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.22;
      ring2Ref.current.rotation.z -= delta * 0.08;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.15;
      ring3Ref.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group>
      {/* Cyan 3D Studio Ring */}
      <group ref={ring1Ref} rotation={[0.4, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[3.2, 0.018, 16, 100]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.45} />
        </mesh>
        {/* Orbital Satellite Node */}
        <mesh position={[3.2, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
      </group>

      {/* Gold Estate Media Ring */}
      <group ref={ring2Ref} rotation={[-0.5, 0.4, 0.3]}>
        <mesh>
          <torusGeometry args={[4.0, 0.015, 16, 100]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.4} />
        </mesh>
        <mesh position={[0, 4.0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#d4af37" />
        </mesh>
      </group>

      {/* Violet AI Core Ring */}
      <group ref={ring3Ref} rotation={[0.8, -0.6, 0.5]}>
        <mesh>
          <torusGeometry args={[4.8, 0.012, 16, 100]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.35} />
        </mesh>
        <mesh position={[-4.8, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>
      </group>
    </group>
  );
}
