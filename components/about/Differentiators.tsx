"use client";

import { motion } from "framer-motion";

const diffs = [
  { title: "Audit-First", desc: "We never build without diagnosing. Prescription without diagnosis is malpractice." },
  { title: "Tech-Neutral", desc: "We aren't married to a specific stack. We choose what fits your architecture." },
  { title: "Architecture-Driven", desc: "Scale is baked in from day one. No spaghetti code. No technical debt." },
  { title: "ROI-Mapped", desc: "Every line of code and every tool must fight for its existence on the P&L." },
  { title: "Implementation-Capable", desc: "We don't just advise. We execute the transformation we recommend." }
];

export function Differentiators() {
  return (
    <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold font-sans text-white uppercase mb-20 tracking-tighter">
                Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Different</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diffs.map((diff, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                    >
                        <div className="text-red-600 font-mono text-xs mb-4">0{i+1}</div>
                        <h3 className="text-2xl font-bold font-sans text-white uppercase mb-4">{diff.title}</h3>
                        <p className="text-gray-400 font-light leading-relaxed">{diff.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
