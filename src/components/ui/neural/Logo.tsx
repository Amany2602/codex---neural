"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function NeuralLogo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="relative w-8 h-8 md:w-10 md:h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="8">
                    {/* Neural Node Icon */}
                    <motion.path
                        d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    <motion.circle
                        cx="50" cy="50" r="10"
                        fill="currentColor"
                        initial={{ opacity: 0.5, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <path d="M50 50 L80 35" strokeOpacity="0.5" />
                    <path d="M50 50 L20 65" strokeOpacity="0.5" />
                    <path d="M50 50 L50 80" strokeOpacity="0.5" />
                </svg>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tighter text-white">
                CODEX <span className="text-primary">NEURAL</span>
            </span>
        </div>
    );
}
