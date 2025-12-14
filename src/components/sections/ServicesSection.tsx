"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEngagement } from "@/context/EngagementContext";
import { SERVICES_DETAILED } from "@/constants/content";
import { SectionHeader } from "@/components/ui/neural/SectionHeader";
import { GlassCard } from "@/components/ui/neural/GlassCard";
import { cn } from "@/lib/utils";

export default function ServicesModules() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { trackIntent, primaryIntent } = useEngagement();

    return (
        <section ref={targetRef} className="relative py-32 container mx-auto px-4 md:px-12">

            <SectionHeader
                title="SYSTEM MODULES"
                subtitle="CAPABILITIES"
                description="Our core operational modules designed to accelerate your digital evolution."
                className="mb-20"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES_DETAILED.map((service, i) => {
                    const isRecommended = primaryIntent === service.category;
                    const Icon = service.icon;

                    return (
                        <GlassCard
                            key={service.id}
                            hoverEffect={true}
                            className={cn(
                                "min-h-[300px] flex flex-col justify-between group",
                                isRecommended && "border-primary/40 bg-primary/5 ring-1 ring-primary/20"
                            )}
                        >
                            <div onMouseEnter={() => trackIntent(service.category as any, 0.5)} className="h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                                        isRecommended ? "bg-primary text-background" : "bg-white/10 text-white group-hover:bg-primary group-hover:text-background"
                                    )}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    {isRecommended && (
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 px-2 py-1 rounded-full">
                                            Recommended
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {service.desc}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.map(feat => (
                                        <li key={feat} className="flex items-center gap-2 text-xs text-gray-400">
                                            <div className="w-1 h-1 rounded-full bg-primary" /> {feat}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mt-auto cursor-pointer group-hover:gap-4 transition-all">
                                    Initialize <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </GlassCard>
                    );
                })}
            </div>
        </section>
    );
}
