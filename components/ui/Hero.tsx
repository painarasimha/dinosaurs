"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-background"
    >
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none z-30 grain mix-blend-overlay opacity-20" />

      {/* Simple radial glow - just one, subtle */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-red-600/8 rounded-full blur-[200px] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="text-[11px] font-mono text-white/40 tracking-[0.3em] uppercase">
              Technology Intelligence & Transformation
            </span>
          </div>
        </motion.div>

        {/* Headline - clean, massive, confident */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-[clamp(3.5rem,7.5vw,9rem)] font-bold leading-[0.88] tracking-[-0.04em] uppercase font-sans text-white mb-12 max-w-5xl"
        >
          Audit Before You{" "}
          <span className="text-red-600 font-serif italic normal-case">
            Transform
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/40 text-lg md:text-xl font-light max-w-lg mb-14 leading-relaxed"
        >
          We diagnose your operations, systems, and tech stack -
          then design only the right transformation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 bg-red-600 text-white px-9 py-4 rounded-full cursor-pointer overflow-hidden relative"
            >
              <span className="relative z-10 font-sans font-bold tracking-widest uppercase text-sm group-hover:text-red-600 transition-colors duration-300">
                Request Audit
              </span>
              <ArrowUpRight size={16} className="relative z-10 group-hover:text-red-600 transition-colors duration-300" />
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left z-0" />
            </motion.div>
          </Link>

          <Link href="/method">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-9 py-4 border border-white/10 rounded-full hover:border-white/25 transition-colors cursor-pointer"
            >
              <span className="font-sans font-bold tracking-widest uppercase text-sm text-white/70">
                Our Method
              </span>
            </motion.div>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
