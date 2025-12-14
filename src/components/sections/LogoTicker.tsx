"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/constants/content";

export function LogoTicker() {
    return (
        <div className="w-full overflow-hidden py-12 border-y border-white/5 bg-black/20">
            <div className="flex">
                <motion.div
                    className="flex gap-16 md:gap-32 pr-16 md:pr-32 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                        <div key={i} className="flex items-center gap-2 group cursor-default">
                            <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center font-bold text-gray-500 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                {client.logo}
                            </div>
                            <span className="text-lg font-bold text-gray-700 group-hover:text-white transition-colors">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
