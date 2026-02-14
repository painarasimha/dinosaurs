"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const problems = [
  { title: "Tool-First Decisions", stat: "73%", unit: "of SaaS tools sit unused" },
  { title: "AI Hype Adoption", stat: "$2.1M", unit: "avg wasted on failed AI" },
  { title: "No Operational Diagnosis", stat: "89%", unit: "skip the audit phase" },
  { title: "Disconnected Systems", stat: "14+", unit: "avg tools per company" },
  { title: "Automation Without Architecture", stat: "61%", unit: "break within 6 months" },
];

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-background py-32 md:py-48 relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-black font-sans uppercase text-white/[0.02] leading-none whitespace-nowrap">
          FAILURE
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="text-red-600 font-mono text-xs tracking-[0.3em] uppercase mb-6">THE EPIDEMIC</div>
            <h2 className="text-5xl md:text-7xl font-bold font-sans uppercase text-white leading-[0.9] tracking-tighter">
              Most Tech
              <br />
              Transformations
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                Fail
              </span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end"
          >
            <p className="text-2xl font-serif italic text-gray-300 leading-relaxed mb-8">
              "Transformation without diagnosis is expensive guesswork."
            </p>
            <div className="h-px w-24 bg-red-600" />
          </motion.div>
        </div>

        {/* Problems as horizontal scroll cards */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-white/5 hidden md:block">
            <motion.div 
              className="w-full bg-gradient-to-b from-red-600 to-orange-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-0">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group flex items-stretch border-b border-white/5 last:border-none hover:bg-white/[0.02] transition-colors"
              >
                <div className="hidden md:flex items-center justify-center w-24 shrink-0 relative">
                  <div className="w-3 h-3 rounded-full border-2 border-white/20 group-hover:border-red-600 group-hover:bg-red-600 transition-all z-10 bg-background" />
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 py-8 md:py-12 items-center">
                  <div className="md:col-span-1">
                    <span className="text-xs font-mono text-white/20 group-hover:text-red-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-2xl md:text-3xl font-bold font-sans uppercase text-white group-hover:text-red-500 transition-colors tracking-tight">
                      {problem.title}
                    </h3>
                  </div>
                  <div className="md:col-span-3">
                    <span className="text-5xl md:text-6xl font-black font-sans text-white/10 group-hover:text-red-600/30 transition-colors">
                      {problem.stat}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <span className="text-sm text-gray-500 font-light uppercase tracking-wider">
                      {problem.unit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
