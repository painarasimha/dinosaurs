"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
             <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold font-sans uppercase text-white mb-8 tracking-tighter"
            >
                Initiate <br/>
                <span className="text-red-600 font-serif italic normal-case">Protocol</span>
            </motion.h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                This isn't a contact form. It's a structured intake for serious transformation. 
                <br/> If you're ready to diagnose, we're ready to operate.
            </p>
        </div>
    </section>
  );
}
