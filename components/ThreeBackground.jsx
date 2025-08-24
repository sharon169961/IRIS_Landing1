"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 1]} intensity={0.8} />
        <Stars radius={80} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
        <Sphere args={[1, 100, 200]} scale={2.8} position={[0, 0, -1]}>
          <MeshDistortMaterial
            speed={2}
            distort={0.45}
            roughness={0.2}
            metalness={0.3}
            emissive="#6d28d9"
            color="#9333ea"
          />
        </Sphere>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-irisBg/40 via-transparent to-irisBg" />
    </div>
  );
}
