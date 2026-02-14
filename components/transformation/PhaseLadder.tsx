"use client";

import { motion } from "framer-motion";

const phases = [
  { phase: "Phase 1", title: "Foundation", desc: "Data hygiene, security, core integrations." },
  { phase: "Phase 2", title: "Optimization", desc: "Workflow automation, dashboarding, reporting." },
  { phase: "Phase 3", title: "Innovation", desc: "AI deployment, predictive analytics, new models." }
];

export function PhaseLadder() {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
        <div className="container mx-auto px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-white uppercase mb-20 text-center">
                The Phased <span className="text-red-600">Evolution</span>
            </h2>
            
            <div className="relative w-full max-w-4xl">
                {/* Vertical Line */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2" />
                
                <div className="space-y-24">
                    {phases.map((phase, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-background border-4 border-red-600 rounded-full -translate-x-[19px] md:-translate-x-1/2 z-10 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            
                            {/* Content Side */}
                            <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                <h3 className="text-red-600 font-mono text-sm uppercase tracking-widest mb-2">{phase.phase}</h3>
                                <h4 className="text-3xl font-bold font-sans text-white uppercase mb-4">{phase.title}</h4>
                                <p className="text-gray-400 font-light">{phase.desc}</p>
                            </div>
                            
                             <div className="w-full md:w-1/2 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
