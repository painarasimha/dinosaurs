"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const signals = [
  "Too many tools, not enough truth",
  "Poor reporting visibility",
  "Manual operations dragging down speed",
  "Automation confusion",
  "AI uncertainty & fear"
];

export function WhoNeedsAudit() {
  return (
    <section className="py-24 bg-red-900/10 border-y border-red-900/30">
        <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-red-600/20 text-red-500 rounded-full mb-8">
                <AlertTriangle size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-white uppercase mb-12">Who Needs This Audit?</h2>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {signals.map((sig, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-6 py-4 bg-black/40 border border-red-500/30 rounded-lg backdrop-blur-sm"
                    >
                        <span className="text-gray-200 font-medium">{sig}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
