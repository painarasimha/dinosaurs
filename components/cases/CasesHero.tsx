"use client";

import { motion } from "framer-motion";

export function CasesHero() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-bold font-sans uppercase text-white mb-8 tracking-tighter"
            >
                Case <br/>
                <span className="text-red-600 font-serif italic normal-case">Intelligence</span>
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                Anonymized transformation patterns. Real architecture. Real outcomes. No logos, just logic.
            </p>
        </div>
    </section>
  );
}
