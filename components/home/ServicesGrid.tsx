"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Tech Audit", desc: "Deep operational + stack diagnosis.", span: "md:col-span-2 md:row-span-2" },
  { title: "Transformation Roadmap", desc: "Phased execution strategy.", span: "md:col-span-1" },
  { title: "Architecture Design", desc: "Blueprints for scalability.", span: "md:col-span-1" },
  { title: "Automation Systems", desc: "Eliminate manual operational drag.", span: "md:col-span-1" },
  { title: "AI Suitability", desc: "Hype-free implementation.", span: "md:col-span-1" },
  { title: "Implementation", desc: "End-to-end build authority.", span: "md:col-span-2" },
];

export function ServicesGrid() {
  return (
    <section className="bg-surface py-32 md:py-48 relative overflow-hidden">
      {/* Full-width label */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none">
        <div className="whitespace-nowrap animate-marquee-slow">
          <span className="text-[14vw] font-black font-sans uppercase text-white/[0.015] leading-none">
            INTELLIGENCE MODULES - INTELLIGENCE MODULES - INTELLIGENCE MODULES -&nbsp;
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <div className="text-red-600 font-mono text-xs tracking-[0.3em] uppercase mb-6">CAPABILITIES</div>
            <h2 className="text-5xl md:text-7xl font-bold font-sans text-white uppercase leading-[0.9] tracking-tighter">
              Intelligence
              <br />
              <span className="font-serif italic normal-case text-gray-400">Modules</span>
            </h2>
          </div>
          <p className="text-gray-500 font-serif italic text-lg max-w-xs">
            Everything you need to modernize. Nothing you don&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative ${service.span} border border-white/5 rounded-2xl p-8 bg-background hover:border-red-600/50 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between`}
            >
              {/* Hover gradient reveal */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-mono text-white/20 group-hover:text-red-600 transition-colors">
                  /{String(idx + 1).padStart(2, '0')}
                </span>
                <div className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} className="text-red-500" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold font-sans uppercase text-white mb-3 tracking-tight group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light text-sm">{service.desc}</p>
                
                {/* Expanding underline */}
                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-700 mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
