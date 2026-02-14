"use client";

import { motion } from "framer-motion";

const roles = [
  { role: "Technology & Architecture Leadership", desc: "Overseeing the structural integrity of every system we deploy." },
  { role: "Client & Transformation Advisory", desc: "Guiding organizations through the cultural shift of modernization." },
  { role: "Research & Authority Development", desc: "Ensuring our methods stay ahead of the obsolescence curve." }
];

export function Founders() {
  return (
    <section className="py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-sans text-white uppercase mb-4">Leadership Structure</h2>
                <p className="text-gray-400 font-serif italic">Built on role clarity, not personal hype.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {roles.map((role, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="group relative h-96 border border-white/10 rounded-2xl p-8 flex flex-col justify-end overflow-hidden"
                    >
                        {/* Placeholder visual for role */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-red-900/10 transition-colors z-0" />
                        
                        <div className="relative z-20">
                            <h3 className="text-2xl font-bold font-sans text-white uppercase mb-4 leading-tight">{role.role}</h3>
                            <div className="h-0.5 w-12 bg-red-600 mb-4" />
                            <p className="text-gray-400 font-light text-sm">{role.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
