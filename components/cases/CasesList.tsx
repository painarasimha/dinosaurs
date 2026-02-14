"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart, Cpu, GitPullRequest } from "lucide-react";

const cases = [
  {
    title: "The Fragmented E-com Scale-Up",
    problem: "Inventory data siloed from marketing spend.",
    diagnosis: "Zero single-source-of-truth.",
    transformation: "Headless Shopify + ERP middleware.",
    outcome: "40% reduction in stock-outs.",
    tags: ["D2C", "Integration", "ERP"]
  },
  {
    title: "The Manual SaaS Onboarding",
    problem: "CSMs spending 12 hours per client setup.",
    diagnosis: "Human API bottleneck.",
    transformation: "Self-serve portal + webhook automation.",
    outcome: "Setup time reduced to 45 mins.",
    tags: ["SaaS", "Automation", "CX"]
  },
  {
    title: "The Blind Agency",
    problem: "No visibility into project profitability.",
    diagnosis: "Time-tracking disconnected from billing.",
    transformation: "Unified operations OS creation.",
    outcome: "15% net margin increase in Q1.",
    tags: ["Services", "Ops", "Finance"]
  }
];

export function CasesList() {
  return (
    <section className="py-24 bg-surface border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="space-y-16">
                {cases.map((study, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="group border border-white/10 rounded-3xl p-8 md:p-12 bg-background hover:border-red-600/30 transition-all relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-red-600 text-white p-4 rounded-full">
                                <ArrowUpRight size={32} />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-1/3">
                                <h2 className="text-3xl font-bold font-sans text-white uppercase mb-6 leading-tight group-hover:text-red-500 transition-colors">
                                    {study.title}
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono uppercase px-3 py-1 border border-white/20 rounded-full text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/5 p-6 rounded-xl">
                                    <div className="text-red-500 mb-4"><BarChart size={24} /></div>
                                    <h4 className="text-sm font-bold text-white uppercase mb-2">Problem Pattern</h4>
                                    <p className="text-gray-400 text-sm">{study.problem}</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl">
                                    <div className="text-red-500 mb-4"><Cpu size={24} /></div>
                                    <h4 className="text-sm font-bold text-white uppercase mb-2">System Diagnosis</h4>
                                    <p className="text-gray-400 text-sm">{study.diagnosis}</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl">
                                    <div className="text-red-500 mb-4"><GitPullRequest size={24} /></div>
                                    <h4 className="text-sm font-bold text-white uppercase mb-2">Transformation Map</h4>
                                    <p className="text-gray-400 text-sm">{study.transformation}</p>
                                </div>
                                <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
                                    <div className="text-red-500 mb-4 font-mono text-xl">ROI</div>
                                    <h4 className="text-sm font-bold text-white uppercase mb-2">Measured Outcome</h4>
                                    <p className="text-white font-bold text-lg">{study.outcome}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
