"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NeuralLogo } from "@/components/ui/neural/Logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "01. SYSTEM", href: "/" },
    { label: "02. MODULES", href: "/services" },
    { label: "03. CORE", href: "/about" },
    { label: "04. LOG", href: "/portfolio" },
    { label: "05. SIGNAL", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-mono text-xs tracking-widest",
                scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50">
                    <NeuralLogo />
                </Link>

                <div className="hidden md:flex gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "hover:text-primary transition-colors relative text-gradient-hover",
                                pathname === item.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {pathname === item.href && (
                                <motion.span
                                    layoutId="active-dot"
                                    className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full"
                                />
                            )}
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    {/* Mobile menu trigger placeholder - relying on simplified interaction for now */}
                    <span className="text-primary">[MENU]</span>
                </div>
            </div>
        </nav>
    );
}
