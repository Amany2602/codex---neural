"use client";

import { useEngagement } from "@/context/EngagementContext";
import { cn } from "@/lib/utils";

export default function AmbientBackground() {
    const { qualityMode, primaryIntent } = useEngagement();

    // Disable expensive blurs in low quality mode
    if (qualityMode === "low") {
        return <div className="fixed inset-0 z-0 pointer-events-none bg-background" />;
    }

    // Dynamic colors based on intent
    const primaryColor = primaryIntent === "design" ? "bg-violet-500/5" : primaryIntent === "business" ? "bg-amber-500/5" : "bg-cyan-500/5";
    const secondaryColor = primaryIntent === "design" ? "bg-fuchsia-500/5" : primaryIntent === "business" ? "bg-orange-500/5" : "bg-blue-500/5";

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className={cn("absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px] animate-blob transition-colors duration-1000", primaryColor)} />
            <div className={cn("absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full blur-[100px] animate-blob animation-delay-2000 transition-colors duration-1000", secondaryColor)} />
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>
    );
}
