"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function CtaBlock({
  headline = "Start With Diagnosis - Not Tools",
  buttonText = "Request Audit",
}: {
  headline?: string;
  buttonText?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ scale }}
      className="py-40 md:py-56 bg-red-600 relative overflow-hidden"
    >
      {/* Grain Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 grain mix-blend-overlay opacity-40" />

      {/* Giant ghost text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[25vw] font-black font-sans uppercase text-black/10 leading-none whitespace-nowrap">
          ACT NOW
        </span>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-12 right-12 w-24 h-24 border border-black/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border border-black/10 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold font-sans text-white uppercase tracking-tighter leading-[0.9] mb-16 max-w-4xl mx-auto">
            {headline}
          </h2>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 bg-black text-white px-12 py-7 rounded-full font-bold uppercase tracking-widest overflow-hidden text-lg"
          >
            <span className="relative z-10 group-hover:text-red-600 transition-colors duration-300">
              {buttonText}
            </span>
            <ArrowUpRight className="relative z-10 group-hover:text-red-600 group-hover:rotate-45 transition-all duration-300" />
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
