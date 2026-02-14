"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  { id: "01", title: "Brand Identity", desc: "Forging the face of future empires." },
  { id: "02", title: "Digital Product", desc: "Interfaces that feel biological." },
  { id: "03", title: "Creative Dev", desc: "Code as a form of expression." },
  { id: "04", title: "Art Direction", desc: "Visuals that demand obedience." },
];

export function AboutAgency() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-background py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-24 border-b border-white/10 pb-8 flex items-end justify-between">
            <h2 className="text-4xl md:text-6xl font-bold font-sans text-white uppercase tracking-tighter">
                The Protocol
            </h2>
            <div className="text-right hidden md:block">
                <span className="text-red-600 font-mono text-xs">EST. 2026</span>
            </div>
        </div>

        <div>
            {services.map((service, index) => (
                <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    className="group border-t border-white/10 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-500 hover:bg-white/5 px-4"
                >
                    <div className="flex items-baseline gap-8 md:gap-16">
                        <span className="font-mono text-red-600 text-sm md:text-base">
                            /{service.id}
                        </span>
                        <h3 className="text-3xl md:text-6xl font-serif italic text-gray-400 group-hover:text-white group-hover:not-italic transition-all duration-500">
                            {service.title}
                        </h3>
                    </div>

                    <div className="mt-4 md:mt-0 flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-10 group-hover:translate-x-0">
                        <p className="text-sm text-gray-400 font-sans uppercase tracking-widest hidden md:block">
                            {service.desc}
                        </p>
                        <div className="bg-red-600 p-2 rounded-full text-white">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </motion.div>
            ))}
            <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
