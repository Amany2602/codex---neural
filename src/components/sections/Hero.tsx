"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEngagement } from "@/context/EngagementContext";
import { recordConversion } from "@/lib/experiments";

const ParticleNetwork = dynamic(() => import("@/components/three/ParticleNetwork"), {
    ssr: false,
    loading: () => null
});

const BOOT_SEQUENCE = [
    "INITIALIZING KERNEL...",
    "LOADING NEURAL MESH...",
    "ESTABLISHING CONNECTION...",
    "ACCESS GRANTED."
];

export default function SystemBootHero() {
    const [bootStep, setBootStep] = useState(0);
    const [isBooted, setIsBooted] = useState(false);

    useEffect(() => {
        if (bootStep < BOOT_SEQUENCE.length) {
            const timeout = setTimeout(() => {
                setBootStep((prev) => prev + 1);
            }, 600);
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => setIsBooted(true), 800);
        }
    }, [bootStep]);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const { getVariant, isReturning } = useEngagement();
    const ctaVariant = getVariant("hero_cta_text");

    return (
        <section ref={ref} className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden font-mono">
            {/* ... Boot Loader ... */}
            {!isBooted && (
                <div className="absolute inset-0 z-50 bg-background flex flex-col items-center justify-center text-xs tracking-widest text-primary/80">
                    <div className="w-64 max-w-[80vw] flex flex-col gap-2">
                        {BOOT_SEQUENCE.slice(0, bootStep).map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2"
                            >
                                <span className="text-secondary">{">"}</span> {log}
                            </motion.div>
                        ))}
                        <motion.div
                            animate={{ opacity: [0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.5 }}
                            className="h-4 w-2 bg-primary mt-2"
                        />
                    </div>
                </div>
            )}

            {/* Main Content Reveal */}
            <motion.div
                style={{ y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isBooted ? 1 : 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-10 container mx-auto px-4 md:px-12 flex flex-col items-start"
            >
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: isBooted ? 0 : 20, opacity: isBooted ? 1 : 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-full h-[1px] bg-white/10" />
                        <span className="text-xs text-muted-foreground whitespace-nowrap tracking-[0.2em]">
                            {isReturning ? "WELCOME_BACK_ARCHITECT" : "SYSTEM_READY"}
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                            {isReturning ? "RESURECTING" : "WE ARCHITECT"}
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted via-gray-500 to-gray-800">
                            {isReturning ? "YOUR VISION." : "THE UNSEEN."}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                        Codex Neural is not a software shop. We are a collective of digital architects building the nervous system of the future enterprise.
                    </p>

                    <div className="group relative overflow-hidden rounded-full bg-white/5 p-[1px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-blob" />
                        <button
                            onClick={() => recordConversion()}
                            className="relative bg-background px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:text-white transition-colors z-10"
                        >
                            {ctaVariant === "A" ? "Initiate System" : "Start Project"}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0 pointer-events-none" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none opacity-50" />

        </section>
    );
}
