"use client";

import { motion } from "framer-motion";

export function MethodHero() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#330505_0%,_#050505_70%)] opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-8xl font-bold font-sans uppercase text-white mb-8 tracking-tighter"
            >
                The System <br/>
                <span className="text-red-600 font-serif italic normal-case">Is The Product</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
            >
                Most firms sell tools. We run <strong className="text-white font-bold">diagnosis systems</strong>. Transformation isn't about buying software; it's about re-architecting your operational reality.
            </motion.p>
        </div>
    </section>
  );
}
