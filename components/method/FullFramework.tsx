"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Diagnose", desc: "Operational + tech + workflow audits to find the bleeding.", content: "We analyze your current stack, user behavior, and process bottlenecks before suggesting a single tool." },
  { id: "02", title: "Map", desc: "System & data mapping.", content: "Visualizing the hidden complexity of your data flows to identify redundancy and risk." },
  { id: "03", title: "Score", desc: "Risk, ROI, automation, AI suitability.", content: "Evaluating every potential change against a strict ROI framework." },
  { id: "04", title: "Architect", desc: "Transformation architecture.", content: "Designing the future state with scalability and integration at the core." },
  { id: "05", title: "Transform", desc: "Phased implementation.", content: "Executing the build in controlled sprints to minimize operational disruption." },
  { id: "06", title: "Validate", desc: "QA + adoption metrics.", content: "Testing not just for bugs, but for user adoption and business impact." },
  { id: "07", title: "Optimize", desc: "Continuous refinement.", content: "Establishing feedback loops to ensure the system evolves with your business." }
];

export function FullFramework() {
  return (
    <section className="py-32 bg-surface">
        <div className="container mx-auto px-6">
            <div className="space-y-32">
                {steps.map((step, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
                    >
                        {/* Visual Block */}
                        <div className="w-full md:w-1/2 aspect-video bg-background border border-white/10 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                            <div className="absolute top-4 left-4 text-8xl font-black font-sans text-white/5 z-0 group-hover:text-red-600/10 transition-colors">
                                {step.id}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Abstract Geometric Representation */}
                                <div className="w-32 h-32 border border-white/20 rounded-full animate-pulse-slow" />
                                <div className="absolute w-24 h-24 border border-red-600/30 rotate-45" />
                            </div>
                        </div>
                        
                        {/* Content Block */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-red-600 font-mono text-sm uppercase tracking-widest mb-4">Phase {step.id}</h2>
                            <h3 className="text-4xl md:text-5xl font-bold font-sans text-white uppercase mb-6">{step.title}</h3>
                            <h4 className="text-xl font-serif italic text-white/80 mb-6 border-l-2 border-red-600 pl-4">{step.desc}</h4>
                            <p className="text-gray-400 leading-relaxed">{step.content}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
