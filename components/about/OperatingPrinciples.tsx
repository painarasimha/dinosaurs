"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const principles = [
  "Evidence before recommendation",
  "Architecture before build",
  "ROI before automation",
  "Documentation always",
  "No black-box systems"
];

export function OperatingPrinciples() {
  return (
    <section className="py-32 bg-[#080808]">
       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
               <h2 className="text-3xl md:text-5xl font-bold font-sans text-white uppercase mb-8">
                   Operating <br/> Principles
               </h2>
               <p className="text-gray-400 text-lg mb-8">
                   These are our non-negotiables. The code we live by to ensure your transformation succeeds where others fail.
               </p>
           </div>
           
           <div className="space-y-6">
               {principles.map((p, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="flex items-center gap-6 p-6 border border-white/5 rounded-xl bg-white/5 hover:border-red-600/30 transition-colors"
                   >
                       <CheckCircle className="text-red-600 shrink-0" />
                       <span className="text-xl font-sans font-bold text-white uppercase tracking-wide">{p}</span>
                   </motion.div>
               ))}
           </div>
       </div>
    </section>
  );
}
