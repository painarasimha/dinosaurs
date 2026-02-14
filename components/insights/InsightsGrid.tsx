"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  { category: "Audit Insights", title: "Why Your CRM Is Empty: A behavioral diagnosis", date: "Protocol 01 / 2026" },
  { category: "Tech Waste", title: "The Hidden Cost of 'Seat-Based' SaaS Pricing", date: "Protocol 02 / 2026" },
  { category: "AI Suitability", title: "LLMs Are Not Databases: A common architecture failure", date: "Protocol 03 / 2026" },
  { category: "Transformation", title: "The 'Big Bang' Migration Fallacy", date: "Protocol 04 / 2026" },
  { category: "Automation", title: "When To Code vs. When To No-Code", date: "Protocol 05 / 2026" },
  { category: "Strategy", title: "Stop Hiring Developers Before Architects", date: "Protocol 06 / 2026" }
];

export function InsightsGrid() {
  return (
    <section className="py-24 bg-surface border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {articles.map((article, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[4/3] bg-background border border-white/10 mb-6 relative overflow-hidden rounded-lg">
                            <div className="absolute inset-0 bg-white/5 group-hover:bg-red-600/10 transition-colors" />
                            {/* Abstract Graphic */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <div className="w-full h-[1px] bg-white rotate-45" />
                                <div className="w-full h-[1px] bg-white -rotate-45" />
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center text-xs font-mono text-red-500 mb-3 uppercase tracking-widest">
                            <span>{article.category}</span>
                            <span>{article.date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold font-sans text-white uppercase leading-tight mb-4 group-hover:text-red-500 transition-colors">
                            {article.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                            Read Protocol <ArrowRight size={14} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
