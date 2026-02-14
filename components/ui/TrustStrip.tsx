"use client";

import { motion } from "framer-motion";

const brands = [
  "SUPA BLOX", "HYPE BLOX", "FRAME BLOX", "ULTRA BLOX", "NEO VISION", "CYBER CORE", "NEXUS LABS", "VORTEX AI"
];

export function TrustStrip() {
  return (
    <section className="bg-background py-16 border-y border-white/5 overflow-hidden relative z-10">
      <div className="flex whitespace-nowrap">
        <motion.div 
            className="flex gap-16 md:gap-32"
            animate={{ x: "-50%" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
            {[...brands, ...brands, ...brands].map((brand, index) => (
                <div key={index} className="flex items-center gap-4">
                    <span className="text-4xl md:text-6xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5 uppercase tracking-tighter">
                        {brand}
                    </span>
                    <span className="text-red-600 text-2xl">✦</span>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
