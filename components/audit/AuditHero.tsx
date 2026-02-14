"use client";

import { motion } from "framer-motion";

export function AuditHero() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        <div className="container mx-auto px-6 relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-4xl"
            >
                <h1 className="text-5xl md:text-7xl font-bold font-sans uppercase text-white mb-8 tracking-tighter leading-none">
                    Technology Audit & <br/>
                    <span className="text-red-600">Operational Intelligence</span>
                </h1>
                
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-red-600 pl-6">
                    The difference between functioning and thriving is diagnosis. We assume nothing. We measure everything.
                </p>
            </motion.div>
        </div>
    </section>
  );
}
