"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Users, BoxSelect } from "lucide-react";

const disciplines = [
  { icon: BoxSelect, title: "Stage Gates", desc: "Approval checkpoints." },
  { icon: ShieldCheck, title: "QA Layers", desc: "Rigorous testing." },
  { icon: FileCheck, title: "Documentation", desc: "No knowledge silos." },
  { icon: Users, title: "Adoption Support", desc: "Training your team." }
];

export function DeliveryDiscipline() {
  return (
    <section className="py-24 bg-background border-t border-white/10">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold font-sans text-white uppercase mb-16 text-center">Protocol & Discipline</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {disciplines.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center text-center p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors"
                    >
                        <div className="mb-6 text-red-600">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-lg font-bold font-sans text-white uppercase mb-2">{item.title}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
