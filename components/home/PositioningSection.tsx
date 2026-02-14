"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PositioningSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-40 md:py-56 relative overflow-hidden bg-[#080808]">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Cross-hair decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-px h-[600px] bg-white/5" />
        <div className="w-[600px] h-px bg-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div 
        style={{ scale, opacity }}
        className="container mx-auto px-6 text-center max-w-5xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 mb-12">
            <div className="h-px w-12 bg-red-600" />
            <span className="text-red-600 font-mono text-xs tracking-[0.5em] uppercase">IDENTITY</span>
            <div className="h-px w-12 bg-red-600" />
          </div>

          <h2 className="text-4xl md:text-7xl font-bold font-sans text-white uppercase leading-[0.95] tracking-tighter mb-12">
            Technology Audit &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Transformation Intelligence
            </span>
            <br />
            <span className="text-white/40">Firm</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-400 font-serif italic leading-relaxed">
              We don&apos;t just build software. We deconstruct your business reality,
              identify the inefficiencies, and engineer a precise technological evolution.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-3 gap-px mt-20 max-w-2xl mx-auto">
            {["Evidence-Based", "Architecture-Driven", "ROI-Mapped"].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="py-6 px-4 border border-white/5 bg-white/[0.02] first:rounded-l-xl last:rounded-r-xl"
              >
                <span className="text-sm font-bold font-sans uppercase text-white tracking-wider">
                  {pillar}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
