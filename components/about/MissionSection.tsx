"use client";

import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <section className="py-24 bg-surface border-y border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm font-mono text-red-600 uppercase tracking-widest mb-6"
            >
                Our Mission
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-3xl md:text-5xl font-serif italic text-white leading-tight"
            >
                "To eliminate blind technology adoption and replace it with <span className="text-red-600 not-italic font-sans font-bold uppercase">evidence-based transformation</span>."
            </motion.p>
        </div>
    </section>
  );
}
