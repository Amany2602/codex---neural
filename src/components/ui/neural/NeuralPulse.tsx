"use client";

import { motion } from "framer-motion";

export const NeuralPulse = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Horizontal Data Streams */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`h-${i}`}
                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full"
                    style={{ top: `${20 + i * 15}%` }}
                    animate={{
                        x: ["-100%", "100%"],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                    }}
                />
            ))}

            {/* Vertical Pulse */}
            <motion.div
                className="absolute top-0 bottom-0 w-[1px] bg-accent/20 left-1/2"
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Abstract Circle */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};
