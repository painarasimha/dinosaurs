"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Cloud, Factory, MapPin, Briefcase, Rocket } from "lucide-react";

const verticals = [
  { icon: ShoppingBag, title: "D2C / E-commerce", desc: "Inventory sync, omnichannel logic, headless architecture." },
  { icon: Cloud, title: "SaaS", desc: "Churn prediction, usage billing, retention workflows." },
  { icon: Factory, title: "Ops-Heavy SMBs", desc: "Logistics tracking, worker dispatch, asset management." },
  { icon: MapPin, title: "Multi-Location", desc: "Franchise standardization, local marketing automation." },
  { icon: Briefcase, title: "Professional Services", desc: "Billable hour tracking, client portal automation." },
  { icon: Rocket, title: "Growth Startups", desc: "Scalable foundations for Series A+ velocity." }
];

export function VerticalsGrid() {
  return (
    <section className="py-24 bg-surface border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {verticals.map((vert, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="group p-8 bg-background border border-white/5 rounded-2xl hover:border-red-600/50 hover:bg-white/5 transition-all"
                    >
                        <div className="inline-flex p-3 bg-red-600/10 text-red-500 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                            <vert.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold font-sans text-white uppercase mb-3">{vert.title}</h3>
                        <p className="text-gray-400 font-light leading-relaxed">{vert.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
