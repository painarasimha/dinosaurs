"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Architecture-Led Builds", desc: "Code that follows a blueprint, not a hunch." },
  { title: "Workflow Automation", desc: "Turning manual hours into automated milliseconds." },
  { title: "AI Workflow Deployment", desc: "Integrating LLMs into actual business logic." },
  { title: "System Integrations", desc: "Making your tools talk so you don't have to." },
  { title: "Internal Platforms", desc: "Custom dashboards that give you god-mode visibility." }
];

export function ExecutionServices() {
  return (
    <section className="py-32 bg-surface">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <div>
                    <h2 className="text-4xl font-bold font-sans text-white uppercase mb-8">Build Capabilities</h2>
                    <p className="text-gray-400 mb-8">
                        Our engineering team is disciplined, documentation-obsessed, and ruthless about performance.
                    </p>
                 </div>
                 
                 <div className="space-y-8">
                     {services.map((svc, i) => (
                         <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background border border-white/5 p-6 rounded-xl hover:border-red-600/50 transition-colors"
                         >
                             <h3 className="text-xl font-bold font-sans text-white uppercase mb-2">{svc.title}</h3>
                             <p className="text-gray-500 font-light text-sm">{svc.desc}</p>
                         </motion.div>
                     ))}
                 </div>
            </div>
        </div>
    </section>
  );
}
