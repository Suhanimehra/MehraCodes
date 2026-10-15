import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

/**
 * Interactive 3D transforming crystal mesh that reacts to mouse position and scroll.
 */
function MorphingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Custom particle cloud surrounding the central 3D object
  const particleCount = 70;
  const [positions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const scrollProgress = Math.min(scrollY / 1000, 2);

    if (groupRef.current) {
      // Smooth lerp towards mouse position
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.7 + scrollProgress * Math.PI * 0.8,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.y * 0.5 + scrollProgress * 0.4,
        0.05
      );

      // Subtle scale transformation based on scroll
      const targetScale = Math.max(0.7, 1 - scrollProgress * 0.25);
      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.08)
      );
    }

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.18;
      wireframeRef.current.rotation.z += delta * 0.22;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer translucent organic TorusKnot */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.32, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#6366f1"
          emissive="#4338ca"
          emissiveIntensity={0.25}
          roughness={0.15}
          metalness={0.85}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={false}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Outer cybernetic wireframe overlay */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.75, 2]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner glowing core octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.65, 0]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#9333ea"
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Surrounding cyber spark particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#38bdf8"
          transparent
          opacity={0.75}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[380px] md:min-h-[520px] relative pointer-events-auto">
      {/* Ambient background glow behind canvas */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-accent/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4.8]} fov={45} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#818cf8" />
        <directionalLight position={[-5, -5, -3]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[0, 0, 2]} intensity={1.2} color="#c084fc" />

        <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
          <MorphingGeometry />
        </Float>
      </Canvas>
    </div>
  );
}
