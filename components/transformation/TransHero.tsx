"use client";

import { motion } from "framer-motion";

export function TransHero() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container mx-auto px-6 relative z-10">
            <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-8xl font-bold font-sans uppercase text-white mb-8 tracking-tighter"
            >
                Transformation <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Design</span>
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                Strategy before tactics. Architecture before automation. We design the future state of your enterprise before writing a single line of code.
            </p>
        </div>
    </section>
  );
}
