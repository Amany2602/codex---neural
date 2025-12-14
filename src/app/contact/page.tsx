"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { recordConversion } from "@/lib/experiments";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        recordConversion(); // Feed the AI

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus("success");
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <span className="text-amber font-mono text-xs tracking-widest block mb-4">// SIGNAL</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-12">
                            INITIATE<br />CONNECTION
                        </h1>

                        <div className="space-y-2 font-mono text-muted-foreground">
                            <p>EMAIL: CONTACT@CODEXNEURAL.COM</p>
                            <p>FREQ: +977 9800000000</p>
                            <p>LOC: KATHMANDU, NEPAL</p>
                        </div>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <label className="block text-xs font-mono tracking-widest text-muted-foreground">IDENTITY</label>
                            <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors text-xl" placeholder="Your Name or Org" />
                        </div>

                        <div className="space-y-4">
                            <label className="block text-xs font-mono tracking-widest text-muted-foreground">COORDINATES</label>
                            <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors text-xl" placeholder="Email Address" />
                        </div>

                        <div className="space-y-4">
                            <label className="block text-xs font-mono tracking-widest text-muted-foreground">TRANSMISSION</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors text-xl resize-none" placeholder="Message content..." />
                        </div>

                        <button className="group flex items-center gap-4 text-white hover:text-primary transition-colors mt-8">
                            <span className="text-xl font-bold tracking-tight">SEND SIGNAL</span>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
