"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import { getAssignedVariant, Variant, ExperimentId } from "@/lib/experiments";
import { predictiveEngine, IntentCategory } from "@/lib/predictive";

interface EngagementState {
    intensity: number; // 0.0 to 1.0
    isHighEngagement: boolean;
    qualityMode: "high" | "low";
    getVariant: (id: ExperimentId) => Variant;
    primaryIntent: IntentCategory | null;
    isReturning: boolean;
    trackIntent: (category: IntentCategory, weight?: number) => void;
}

const EngagementContext = createContext<EngagementState>({
    intensity: 0,
    isHighEngagement: false,
    qualityMode: "high",
    getVariant: () => "A",
    primaryIntent: null,
    isReturning: false,
    trackIntent: () => { }
});

export function EngagementProvider({ children }: { children: React.ReactNode }) {
    const [intensity, setIntensity] = useState(0);
    const [qualityMode, setQualityMode] = useState<"high" | "low">("high");
    const [primaryIntent, setPrimaryIntent] = useState<IntentCategory | null>(null);
    const [isReturning, setIsReturning] = useState(false);

    // Performance Monitoring Refs
    const frameCountRef = useRef(0);
    const lastFrameTimeRef = useRef(Date.now());

    // Mouse Tracking Refs
    const velocityRef = useRef(0);
    const lastMousePos = useRef({ x: 0, y: 0 });
    const lastTime = useRef(Date.now());

    // Initialize AI
    useEffect(() => {
        setIsReturning(predictiveEngine.isReturningVisitor());
        setPrimaryIntent(predictiveEngine.getPrimaryIntent());
    }, []);

    const trackIntent = (category: IntentCategory, weight?: number) => {
        predictiveEngine.trackInteraction(category, weight);
        setPrimaryIntent(predictiveEngine.getPrimaryIntent()); // Update state
    };

    // FPS Loop
    useEffect(() => {
        let frameId: number;

        const loop = () => {
            const now = Date.now();
            frameCountRef.current++;

            // Check FPS every 2 seconds
            if (now - lastFrameTimeRef.current >= 2000) {
                const fps = frameCountRef.current / 2;
                if (fps < 45 && qualityMode === "high") {
                    setQualityMode("low");
                    // console.log("Downgrading to Low Quality Mode due to FPS:", fps);
                } else if (fps > 55 && qualityMode === "low") {
                    setQualityMode("high");
                }

                lastFrameTimeRef.current = now;
                frameCountRef.current = 0;
            }
            frameId = requestAnimationFrame(loop);
        };

        frameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frameId);
    }, [qualityMode]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            const dt = now - lastTime.current;
            if (dt < 16) return; // Cap at ~60fps

            const dx = e.clientX - lastMousePos.current.x;
            const dy = e.clientY - lastMousePos.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Calculate instantaneous velocity
            const v = Math.min(dist / dt, 5); // Cap velocity

            // Smooth decay accumulator
            velocityRef.current = velocityRef.current * 0.9 + v * 0.1;

            // Update state if significant change to avoid React thrashing
            if (Math.abs(velocityRef.current - intensity) > 0.05) {
                setIntensity(velocityRef.current);
            }

            lastMousePos.current = { x: e.clientX, y: e.clientY };
            lastTime.current = now;
        };

        // Decay loop when idle
        const interval = setInterval(() => {
            velocityRef.current *= 0.95;
            if (velocityRef.current < 0.01) velocityRef.current = 0;
            setIntensity((prev) => (Math.abs(prev - velocityRef.current) > 0.01 ? velocityRef.current : prev));
        }, 100);

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
        };
    }, [intensity]);

    const isHighEngagement = intensity > 0.5;
    const getVariant = (id: ExperimentId) => getAssignedVariant(id);

    return (
        <EngagementContext.Provider value={{
            intensity,
            isHighEngagement,
            qualityMode,
            getVariant,
            primaryIntent,
            isReturning,
            trackIntent
        }}>
            {children}
        </EngagementContext.Provider>
    );
}

export const useEngagement = () => useContext(EngagementContext);
