import Hero from "@/components/sections/Hero";
import ServicesModules from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesModules />

      {/* Manifesto / About Section */}
      <section className="py-32 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-12 text-center md:text-left">
          <span className="text-amber font-mono text-xs tracking-widest block mb-6">// THE MANIFESTO</span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-4xl">
            "Logic is the beginning of wisdom, not the end. We fuse rigorous engineering with fluid creativity to solve problems that don't satisfy with standard answers."
          </h2>
        </div>
      </section>

    </div>
  );
}
