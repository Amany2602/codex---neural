"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
}

export function GlassCard({ children, className, hoverEffect = true, onClick }: GlassCardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500",
                hoverEffect && "hover:border-primary/30 hover:bg-white/10 group cursor-pointer",
                className
            )}
        >
            {/* Ambient Glow */}
            <div className="absolute -inset-[100px] bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Border Gradient using Pseudo-element logic in CSS if needed, or simple implementation here */}
        </div>
    );
}
