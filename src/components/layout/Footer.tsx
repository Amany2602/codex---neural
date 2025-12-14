import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold">
                                C
                            </div>
                            <span className="text-xl font-bold text-white">Codex Neural</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Transforming businesses with next-generation technology. We build scalable, high-performance digital solutions powered by AI and Web3.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            {["Web Development", "Mobile Apps", "AI Solutions", "UI/UX Design"].map((service) => (
                                <li key={service}>
                                    <Link
                                        href="/services"
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>Kathmandu, Nepal</li>
                            <li>contact@codexneural.com</li>
                            <li>+977 9800000000</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Codex Neural Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* Social placeholders */}
                        <div className="text-muted-foreground text-xs">Privacy Policy</div>
                        <div className="text-muted-foreground text-xs">Terms of Service</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
