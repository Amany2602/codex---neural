"use client";

import { motion } from "framer-motion";
import { COMPANY_INFO, TEAM, TESTIMONIALS } from "@/constants/content";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { SectionHeader } from "@/components/ui/neural/SectionHeader";
import { GlassCard } from "@/components/ui/neural/GlassCard";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Intro */}
            <div className="container mx-auto px-4 mb-32">
                <SectionHeader
                    title="THE COLLECTIVE"
                    subtitle="WHO WE ARE"
                    description={COMPANY_INFO.description}
                    align="center"
                />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                    {COMPANY_INFO.stats.map((stat, i) => (
                        <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground tracking-widest uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Clients */}
            <div className="mb-32">
                <div className="text-center mb-8">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Trusted By</span>
                </div>
                <LogoTicker />
            </div>

            {/* Team */}
            <div className="container mx-auto px-4 mb-32">
                <SectionHeader
                    title="THE ARCHITECTS"
                    subtitle="CORE NODE"
                    description="The minds behind the machine."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {TEAM.map((member, i) => (
                        <GlassCard key={i} className="group text-center !p-0">
                            <div className="relative aspect-square w-full bg-gray-900 overflow-hidden">
                                <Image
                                    src={`https://via.placeholder.com/400x400/1a1a1a/cccccc?text=${member.name}`}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            </div>
                            <div className="p-6 relative z-10 -mt-20">
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-primary text-sm tracking-widest uppercase mb-4">{member.role}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
                            <div className="text-primary text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                            <p className="text-lg text-gray-300 italic mb-6 relative z-10 pt-4">{t.text}</p>
                            <div>
                                <h4 className="font-bold text-white">{t.name}</h4>
                                <p className="text-xs text-muted-foreground uppercase">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
