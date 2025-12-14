"use client";

import { motion } from "framer-motion";

const STEPS = [
    { id: "01", title: "SIGNAL INTAKE", desc: "We analyze your business signals—pain points, goals, and market data." },
    { id: "02", title: "NEURAL MAPPING", desc: "We architect a system topography that solves for both current needs and future scale." },
    { id: "03", title: "SYNTHESIS", desc: "Our engineers build the core, integrating AI and logic layers." },
    { id: "04", title: "DEPLOYMENT", desc: "The system goes live, evolving with real-time feedback loops." }
];

export default function ProcessPage() {
    // Simple page for now to satisfying link
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-12">
                <span className="text-amber font-mono text-xs tracking-widest block mb-4">// PROCESS</span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-20">SYSTEM LOGIC</h1>

                <div className="grid md:grid-cols-2 gap-16">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="border-t border-white/10 pt-8"
                        >
                            <div className="font-mono text-xs text-primary mb-4">{step.id}</div>
                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-muted-foreground">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
