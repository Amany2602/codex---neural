"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useEngagement } from "@/context/EngagementContext";

function Particles(props: any) {
    const ref = useRef<THREE.Points>(null);

    // Generate random points on a sphere
    const sphere = useMemo(() => {
        const temp = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.5 + Math.random() * 0.5; // Radius variation

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    }, []);

    const { intensity } = useEngagement();

    // Store original color to interpolate back
    const colorRef = useRef(new THREE.Color("#00F0FF"));
    const targetColor = new THREE.Color("#7C3AED"); // Neural Violet on high intensity

    useFrame((state, delta) => {
        if (ref.current) {
            // Speed up rotation based on intensity
            const speed = 1 + intensity * 5;
            ref.current.rotation.x -= (delta / 10) * speed;
            ref.current.rotation.y -= (delta / 15) * speed;

            // Pulse size on high intensity
            if (intensity > 0.5) {
                const scale = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.1;
                ref.current.scale.setScalar(scale);
            } else {
                ref.current.scale.setScalar(1);
            }
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00F0FF"
                    opacity={0.4 + intensity * 0.4} // Brighter on high engagement
                    size={0.002 + intensity * 0.002} // Larger particles
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function ParticleNetwork() {
    const { qualityMode } = useEngagement();
    const dpr: [number, number] = qualityMode === "high" ? [1, 2] : [1, 1];

    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={dpr}
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <Particles />
            </Canvas>
        </div>
    );
}
