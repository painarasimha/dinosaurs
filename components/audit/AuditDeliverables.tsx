"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const deliverables = [
  "Risk Heatmap",
  "Tech Waste Index",
  "Automation Map",
  "AI Fit Zones",
  "Phased Roadmap",
  "ROI Model"
];

export function AuditDeliverables() {
  return (
    <section className="py-32 bg-[#080808]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold font-sans text-white uppercase mb-8">
                    Tangible <br/> <span className="text-red-600">Assets</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                    You don't just get a PDF. You get a strategic war room of assets to guide your decision making for the next 18-24 months.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-surface p-6 rounded-lg border border-white/5 flex items-center gap-4"
                    >
                        <div className="bg-red-600/10 text-red-600 p-2 rounded-full">
                            <Check size={16} />
                        </div>
                        <span className="font-sans font-bold text-white uppercase text-sm">{item}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
