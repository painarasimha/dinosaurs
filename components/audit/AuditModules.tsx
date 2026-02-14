"use client";

import { motion } from "framer-motion";

const modules = [
  { title: "Stack Ecology", desc: "Identifying redundant, unused, or conflicting software licenses." },
  { title: "Data Cartography", desc: "Mapping where data lives, where it dies, and where it leaks." },
  { title: "Workflow Friction", desc: "Pinpointing manual steps that kill velocity." },
  { title: "Automation Scoping", desc: "Finding high-impact, low-risk automation targets." },
  { title: "Security Posture", desc: "Basic vulnerability assessment and access control review." },
  { title: "AI Readiness", desc: "Evaluating data structure for future AI integration." }
];

export function AuditModules() {
  return (
    <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-sans uppercase text-white mb-16 text-center">Intelligence Modules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {modules.map((mod, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 border-l-2 border-white/10 hover:border-red-600 bg-gradient-to-r from-white/5 to-transparent transition-all group"
                    >
                        <h3 className="text-xl font-bold font-sans text-white uppercase mb-3 group-hover:text-red-500 transition-colors">{mod.title}</h3>
                        <p className="text-gray-400 font-light text-sm">{mod.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
