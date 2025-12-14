"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeader({ title, subtitle, description, align = "left", className }: SectionHeaderProps) {
    return (
        <div className={cn("mb-16", align === "center" ? "text-center mx-auto max-w-3xl" : "text-left", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
                    // {subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {title}
                </h2>
                {description && (
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
