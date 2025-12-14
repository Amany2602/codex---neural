import { Terminal, Cpu, Globe, Shield, Zap, Layers } from "lucide-react";

export const COMPANY_INFO = {
    name: "Codex Neural",
    tagline: "Architecting the Digital Neural Network",
    description: "We are a collective of digital architects, engineers, and strategists building the nervous system of the future enterprise. We don't just write code; we engineer intelligence.",
    founded: "2023",
    location: "Kathmandu, Nepal",
    stats: [
        { label: "Systems Deployed", value: "50+" },
        { label: "Neural Nodes", value: "10k+" },
        { label: "Uptime", value: "99.9%" },
        { label: "Global Clients", value: "12" },
    ]
};

export const SERVICES_DETAILED = [
    {
        id: "web-eng",
        title: "Quantum Web Engineering",
        short: "Next-gen architecture",
        desc: "Building visible interfaces for invisible intelligence. We utilize React, Next.js, and WebGL to create immersive, high-performance web ecosystems that adapt to user behavior.",
        icon: Globe,
        features: ["SSR & Edge Computing", "WebGL/3D Integration", "Micro-Frontend Architecture"],
        category: "technical"
    },
    {
        id: "neural-ui",
        title: "Neural Interface Design",
        short: "Human-centric UI/UX",
        desc: "Designing for the subconscious. Our UI/UX philosophy bridges the gap between human intent and machine execution through predictive patterns and fluid motion.",
        icon: Layers,
        features: ["Predictive UX", "Motion Design System", "Accessibility First"],
        category: "design"
    },
    {
        id: "ai-core",
        title: "Algorithmic Intelligence",
        short: "Custom ML Models",
        desc: "Deploying the brain. From predictive analytics to autonomous agents, we integrate custom machine learning models directly into your business logic.",
        icon: Cpu,
        features: ["NLP & LLM Integration", "Predictive Analytics", "Computer Vision"],
        category: "business"
    },
    {
        id: "web3-proto",
        title: "Decentralized Protocols",
        short: "Trustless Infrastructure",
        desc: "The future is distributed. We architect secure smart contracts and dApps that enable trustless value exchange on Ethereum and Solana.",
        icon: Shield,
        features: ["Smart Contracts", "DeFi Protocols", "Tokenomics"],
        category: "technical"
    },
    {
        id: "cloud-synapse",
        title: "Cloud Synapse",
        short: "Scalable Serverless",
        desc: "Infrastructure that breathes. Our serverless designs scale automatically with demand, ensuring zero latency and optimal resource usage.",
        icon: Terminal,
        features: ["AWS/Azure Architecture", "CI/CD Pipelines", "Kubernetes Orchestration"],
        category: "technical"
    },
    {
        id: "rapid-deploy",
        title: "Rapid Deployment",
        short: "MVP to Scale",
        desc: "Speed is a feature. We accelerate the path from concept to code, delivering robust MVPs that are ready to scale globally.",
        icon: Zap,
        features: ["Agile Methodology", "Rapid Prototyping", "Growth Hacking"],
        category: "business"
    }
];

export const PROCESS_STEPS = [
    {
        step: "01",
        title: "Neural Mapping",
        desc: "We analyze your business DNA to map the required digital infrastructure."
    },
    {
        step: "02",
        title: "Architectural Design",
        desc: "Blueprinting the system with a focus on scalability, security, and aesthetics."
    },
    {
        step: "03",
        title: "Core Synthesis",
        desc: "Development execution using our proprietary coding standards and CI/CD pipelines."
    },
    {
        step: "04",
        title: "System Activation",
        desc: "Deployment, rigorous testing, and the final handoff of the living system."
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Alex V.",
        role: "CTO, FinTech Global",
        text: "Codex Neural didn't just build a dashboard; they built a predictive engine that saved us 40% in operational costs."
    },
    {
        id: 2,
        name: "Sarah L.",
        role: "Founder, ArtStream",
        text: "The aesthetic sensitivity combined with engineering rigor is unlike anything I've seen in the valley."
    },
    {
        id: 3,
        name: "James K.",
        role: "Director, NexaCorp",
        text: "Their 'Autonomous Evolution' approach meant our platform got faster the more we used it. Incredible."
    }
];

export const CLIENTS = [
    { name: "TechFlow", logo: "TF" },
    { name: "Nebula", logo: "NB" },
    { name: "Quant", logo: "QT" },
    { name: "Vertex", logo: "VX" },
    { name: "Orbit", logo: "OB" },
    { name: "Horizon", logo: "HZ" },
];

export const TEAM = [
    { name: "Aarav S.", role: "Lead Architect", image: "/team/1.jpg" },
    { name: "Priya M.", role: "Neural Designer", image: "/team/2.jpg" },
    { name: "Rohan D.", role: "Systems Engineer", image: "/team/3.jpg" },
];
