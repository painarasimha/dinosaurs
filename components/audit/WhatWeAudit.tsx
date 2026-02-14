"use client";

import { motion } from "framer-motion";

const areas = [
  "Operations", "Workflows", "Tech Stack", "Data Flow", "Automation Potential", "AI Suitability", "Tool Waste"
];

export function WhatWeAudit() {
  return (
    <section className="py-24 bg-surface border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                <h2 className="text-3xl font-bold font-sans uppercase text-white">Scope of Diagnosis</h2>
                <p className="text-gray-400 text-sm font-mono mt-4 md:mt-0">COMPLETE SYSTEM VISIBILITY</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
                {areas.map((area, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-6 py-3 border border-white/10 rounded-full bg-white/5 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all cursor-crosshair"
                    >
                        <span className="font-mono text-sm uppercase tracking-wide text-gray-300 group-hover:text-white">{area}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
