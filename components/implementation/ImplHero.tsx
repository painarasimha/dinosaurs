"use client";

import { motion } from "framer-motion";

export function ImplHero() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
             <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-8xl font-bold font-sans uppercase text-white mb-8 tracking-tighter"
            >
                Execution <br/>
                <span className="text-red-600 font-serif italic normal-case">Authority</span>
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                Strategy is hallucination without execution. We build the systems we design.
            </p>
        </div>
    </section>
  );
}
