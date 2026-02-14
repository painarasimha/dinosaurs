"use client";

import { motion } from "framer-motion";

export function WhoWeAre() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
       {/* Background Element */}
       <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10">
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-5xl md:text-8xl font-bold font-sans uppercase text-white mb-12 tracking-tighter"
           >
              Not an Agency. <br/>
              <span className="text-red-600 font-serif italic normal-case">Intelligence.</span>
           </motion.h1>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
               >
                  <p className="mb-8">
                      Dinosaurs is a <strong>Technology Intelligence & Transformation Firm</strong>. We don't just "build apps" or "run ads". We engineer the operational backbone of future-ready companies.
                  </p>
                  <p>
                      In a world drowning in "AI Solutions" and SaaS sprawl, we provide the clarity, architecture, and execution discipline required to actually evolve.
                  </p>
               </motion.div>
               
               <div className="border-l border-white/20 pl-8 flex flex-col justify-center">
                   <h3 className="text-sm font-mono text-red-500 uppercase tracking-widest mb-4">Core Identity</h3>
                   <ul className="space-y-4">
                       {["Audit-First", "Architecture-Led", "Outcome-Obsessed"].map((item, i) => (
                           <li key={i} className="text-3xl font-bold font-sans text-white uppercase opacity-80">
                               {item}
                           </li>
                       ))}
                   </ul>
               </div>
           </div>
       </div>
    </section>
  );
}
