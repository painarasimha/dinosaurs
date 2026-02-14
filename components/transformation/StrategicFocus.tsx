"use client";

import { motion } from "framer-motion";

const areas = [
  { title: "Transformation Roadmaps", desc: "A Quarter-by-Quarter execution plan." },
  { title: "System Architecture", desc: "Designing a decoupled, scalable tech stack." },
  { title: "Integration Planning", desc: "Ensuring data flows seamlessly between silos." },
  { title: "Automation Design", desc: "Mapping logic for high-velocity workflows." },
  { title: "AI Decision Frameworks", desc: "Governance for responsible AI deployment." }
];

export function StrategicFocus() {
  return (
    <section className="py-24 bg-surface border-y border-white/5">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold font-sans uppercase text-white mb-16 text-center">Strategic Core</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {areas.map((area, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-background border border-white/5 p-8 rounded-xl hover:border-red-600/30 transition-all"
                    >
                        <h3 className="text-xl font-bold font-sans text-white uppercase mb-4">{area.title}</h3>
                        <p className="text-gray-400 font-light">{area.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
