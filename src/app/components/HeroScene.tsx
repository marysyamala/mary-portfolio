"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const ACCENT = new THREE.Color("#a3ff5f");
const LINK_DISTANCE = 2.2;

type NetworkProps = { count: number };

function Network({ count }: NetworkProps) {
  const group = useRef<THREE.Group>(null);
  const points = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);

  // Node positions + velocities (stable across re-renders).
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 11;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      velocities[i * 3] = (Math.random() - 0.5) * 0.012;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
    }
    return { positions, velocities };
  }, [count]);

  // Pre-allocated buffer for connection line vertices (worst case: every pair).
  const linePositions = useMemo(
    () => new Float32Array(count * count * 3),
    [count]
  );

  const bounds = { x: 6, y: 3.75, z: 3 };

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05) * 60; // normalize to ~60fps, clamp spikes

    // Drift nodes and bounce within bounds.
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      positions[ix] += velocities[ix] * dt;
      positions[ix + 1] += velocities[ix + 1] * dt;
      positions[ix + 2] += velocities[ix + 2] * dt;
      if (positions[ix] < -bounds.x || positions[ix] > bounds.x)
        velocities[ix] *= -1;
      if (positions[ix + 1] < -bounds.y || positions[ix + 1] > bounds.y)
        velocities[ix + 1] *= -1;
      if (positions[ix + 2] < -bounds.z || positions[ix + 2] > bounds.z)
        velocities[ix + 2] *= -1;
    }

    if (points.current) {
      const attr = points.current.geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      attr.needsUpdate = true;
    }

    // Rebuild connections within LINK_DISTANCE.
    let ptr = 0;
    const maxD2 = LINK_DISTANCE * LINK_DISTANCE;
    for (let i = 0; i < count; i++) {
      const ax = positions[i * 3];
      const ay = positions[i * 3 + 1];
      const az = positions[i * 3 + 2];
      for (let j = i + 1; j < count; j++) {
        const dx = ax - positions[j * 3];
        const dy = ay - positions[j * 3 + 1];
        const dz = az - positions[j * 3 + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < maxD2) {
          linePositions[ptr++] = ax;
          linePositions[ptr++] = ay;
          linePositions[ptr++] = az;
          linePositions[ptr++] = positions[j * 3];
          linePositions[ptr++] = positions[j * 3 + 1];
          linePositions[ptr++] = positions[j * 3 + 2];
        }
      }
    }
    if (lines.current) {
      const attr = lines.current.geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      attr.needsUpdate = true;
      lines.current.geometry.setDrawRange(0, ptr / 3);
    }

    // Constant slow spin, plus subtle mouse parallax (kept on separate
    // channels so the parallax easing never fights the steady rotation).
    if (group.current) {
      group.current.rotation.y += 0.0004 * dt;
      const targetX = -state.pointer.y * 0.18;
      const targetPosX = state.pointer.x * 0.6;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.04
      );
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        targetPosX,
        0.04
      );
    }
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={ACCENT}
          size={0.075}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroScene({ count = 68 }: { count?: number }) {
  return (
    <Canvas
      className="hero3dCanvas"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 9], fov: 52 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
    >
      <fog attach="fog" args={["#080a0c", 8, 17]} />
      <Network count={count} />
      <AdaptiveDpr pixelated={false} />
    </Canvas>
  );
}
