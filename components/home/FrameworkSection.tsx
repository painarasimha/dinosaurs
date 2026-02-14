"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Diagnose", desc: "Operational + tech + workflow audits", color: "from-red-600/20" },
  { id: "02", title: "Map", desc: "System & data cartography", color: "from-orange-600/20" },
  { id: "03", title: "Score", desc: "Risk, ROI, automation, AI fit", color: "from-amber-600/20" },
  { id: "04", title: "Architect", desc: "Transformation blueprint", color: "from-yellow-600/20" },
  { id: "05", title: "Transform", desc: "Phased implementation", color: "from-lime-600/20" },
  { id: "06", title: "Validate", desc: "QA + adoption metrics", color: "from-green-600/20" },
  { id: "07", title: "Optimize", desc: "Continuous refinement", color: "from-emerald-600/20" },
];

export function FrameworkSection() {
  return (
    <section className="bg-background py-32 md:py-48 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <div>
            <div className="text-red-600 font-mono text-xs tracking-[0.3em] uppercase mb-6">THE SYSTEM</div>
            <h2 className="text-5xl md:text-7xl font-bold font-sans text-white uppercase leading-[0.9] tracking-tighter">
              Structured Tech
              <br />
              Transformation
              <br />
              <span className="font-serif italic normal-case text-red-600">Framework™</span>
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-sm max-w-xs uppercase tracking-wider leading-relaxed">
            7 Phases. Zero Guesswork. Complete Visibility.
          </p>
        </div>

        {/* Staggered Cards — Bento-ish Layout */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`group relative bg-gradient-to-b ${step.color} to-transparent border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[280px] hover:border-white/20 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Phase number */}
              <div className="flex justify-between items-start">
                <span className="text-[64px] font-black font-sans text-white/[0.04] leading-none group-hover:text-white/10 transition-colors">
                  {step.id}
                </span>
              </div>

              <div>
                {/* Decorative line */}
                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-transparent transition-all duration-700 mb-4" />
                
                <h3 className="text-xl font-bold font-sans uppercase text-white mb-2 tracking-tight group-hover:text-red-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
