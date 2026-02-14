"use client";

import { motion } from "framer-motion";
import { FileText, Cpu, Layers, Activity, GitBranch, PieChart } from "lucide-react";

const artifacts = [
  { icon: Activity, title: "Risk Maps", desc: "Identifying single points of failure." },
  { icon: Layers, title: "Tech Stack Maps", desc: "Visualizing dependency chains." },
  { icon: GitBranch, title: "Automation Maps", desc: "Workflow logic documentation." },
  { icon: Cpu, title: "AI Suitability Zones", desc: "Where AI adds value vs noise." },
  { icon: FileText, title: "Architecture Diagrams", desc: "Blueprints for engineering." },
  { icon: PieChart, title: "ROI Models", desc: "Financial justification for every tool." }
];

export function FrameworkArtifacts() {
  return (
    <section className="py-32 bg-background border-t border-white/10">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold font-sans text-white uppercase mb-4">
                    Tangible <span className="text-red-600">Intelligence</span>
                </h2>
                <p className="text-gray-400 font-serif italic text-xl">The assets we deliver to secure your future.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artifacts.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-surface border border-white/5 p-8 rounded-xl hover:border-red-600/30 transition-all group"
                    >
                        <div className="bg-red-600/10 p-3 rounded-lg w-fit mb-6 text-red-500 group-hover:text-white group-hover:bg-red-600 transition-colors">
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-sans text-white uppercase mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
