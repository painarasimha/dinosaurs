"use client";

import { motion } from "framer-motion";
import { Scale, Lock, Shield, FileCheck, Layers, BookOpen } from "lucide-react";

const principles = [
  { icon: Scale, title: "Vendor Neutrality", desc: "We take zero commissions. We recommend what fits, not what pays." },
  { icon: Layers, title: "Architecture Discipline", desc: "No ad-hoc features. Every build must fit the master schematic." },
  { icon: Shield, title: "QA Systems", desc: "Automated regression testing is mandatory, not optional." },
  { icon: FileCheck, title: "Documentation Standards", desc: "Code without docs is legacy debt from day one." },
  { icon: Lock, title: "Audit Integrity", desc: "We report the brutal truth, even if it hurts your feelings." },
  { icon: BookOpen, title: "Decision Frameworks", desc: "Logic over opinion. Data over hunch." }
];

export function OsGrid() {
  return (
    <section className="py-24 bg-surface border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {principles.map((pr, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-background border border-white/5 p-8 rounded-xl hover:border-white/20 transition-all flex flex-col items-start h-full"
                    >
                        <div className="p-3 bg-white/5 rounded-lg text-white mb-6">
                            <pr.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold font-sans text-white uppercase mb-4">{pr.title}</h3>
                        <p className="text-gray-400 font-light leading-relaxed">{pr.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
