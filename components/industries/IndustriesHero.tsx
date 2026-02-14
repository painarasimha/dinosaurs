"use client";

import { motion } from "framer-motion";

export function IndustriesHero() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-bold font-sans uppercase text-white mb-8 tracking-tighter"
            >
                Sector <br/>
                <span className="text-red-600 font-serif italic normal-case">Deep Dives</span>
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                Transformation patterns are universal, but the execution is vertical-specific.
            </p>
        </div>
    </section>
  );
}
