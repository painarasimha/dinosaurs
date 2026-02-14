"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const outcomes = [
  { title: "System Clarity", metric: "100%", desc: "Visibility" },
  { title: "Tech Waste Reduction", metric: "40%", desc: "Cost Savings" },
  { title: "Workflow Automation", metric: "12x", desc: "Speed Gain" },
  { title: "AI Where It Fits", metric: "0%", desc: "Hype Tax" },
  { title: "Measurable ROI", metric: "90", desc: "Day Payback" },
];

export function ProofSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} className="bg-background py-32 md:py-48 relative overflow-hidden">
      {/* Floating Background Metric */}
      <motion.div 
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none"
      >
        <span className="text-[30vw] font-black font-sans text-white/[0.02] leading-none">
          ROI
        </span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <div className="text-red-600 font-mono text-xs tracking-[0.3em] uppercase mb-6">TANGIBLE OUTCOMES</div>
          <h2 className="text-5xl md:text-7xl font-bold font-sans text-white uppercase leading-[0.9] tracking-tighter max-w-3xl">
            What Our Work
            <br />
            <span className="font-serif italic normal-case text-red-600">Produces</span>
          </h2>
        </div>

        {/* Metrics Cards — staggered heights */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {outcomes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ marginTop: idx % 2 !== 0 ? '40px' : '0px' }}
              className="group relative border border-white/5 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-600/30 transition-all duration-500 overflow-hidden"
            >
              {/* Big metric */}
              <div className="mb-8">
                <span className="text-5xl md:text-6xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 group-hover:from-red-500 group-hover:to-red-600 transition-all">
                  {item.metric}
                </span>
                <span className="block text-xs font-mono text-gray-600 uppercase tracking-widest mt-2">
                  {item.desc}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-sans uppercase text-white leading-tight tracking-tight">
                {item.title.split(" ").map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h3>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
