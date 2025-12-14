"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, CATEGORIES } from "@/constants/projects";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useEngagement } from "@/context/EngagementContext";

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const { primaryIntent } = useEngagement();

    // Categorize intent to Portfolio categories
    const intentToCategory: Record<string, string> = {
        'technical': 'Web3', // Bias towards complex tech
        'design': 'AI/ML',   // Bias towards flashy interfaces (AI/ML usually has cool viz)
        'business': 'Enterprise',
    };

    const recommendedCategory = primaryIntent ? intentToCategory[primaryIntent] : null;

    const filteredProjects = PROJECTS.filter(p => activeCategory === "All" || p.category === activeCategory)
        .sort((a, b) => {
            if (!recommendedCategory) return 0;
            // Bubble recommended category to top
            if (a.category === recommendedCategory && b.category !== recommendedCategory) return -1;
            if (a.category !== recommendedCategory && b.category === recommendedCategory) return 1;
            return 0;
        });

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                        Our Work
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A showcase of technical excellence and creative problem-solving. Explore how we turn complex challenges into elegant digital solutions.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                                activeCategory === cat
                                    ? "bg-primary text-white border-primary shadow-[0_0_15px_var(--primary)]"
                                    : "bg-white/5 text-muted-foreground border-white/10 hover:border-white/20 hover:bg-white/10"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative rounded-xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-colors"
                            >
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-gray-900 group-hover:scale-105 transition-transform duration-500 relative">
                                    <Image
                                        src={`https://via.placeholder.com/800x600/0E0F12/00F0FF?text=${encodeURIComponent(project.title)}`}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-10">
                                        <button className="px-6 py-2 rounded-full bg-white text-black font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            View Case Study <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-xs text-primary font-medium tracking-wider uppercase mb-1 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <span key={tech} className="px-2 py-1 rounded text-xs bg-white/5 text-gray-400 border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    );
}
