"use client";

import { motion } from "framer-motion";

export function NarrativeSection() {
  return (
    <section className="min-h-screen bg-background relative py-32 overflow-hidden">
       <div className="container mx-auto px-4 md:px-0 relative h-full flex flex-col justify-center">
          
          {/* Orbital decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/5 md:blur-[100px] blur-[60px] bg-red-900/10 pointer-events-none" />

          <div className="grid grid-cols-12 gap-y-12 md:gap-y-24">
              {/* Block 1 */}
              <div className="col-span-12 md:col-span-8 md:col-start-2">
                 <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-light font-serif italic text-white leading-tight"
                 >
                    We exist in the space between <br />
                    <span className="font-sans font-bold not-italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        Signal & Noise.
                    </span>
                 </motion.h2>
              </div>

              {/* Block 2 */}
              <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-400 text-sm md:text-base font-sans tracking-wide uppercase border-l-2 border-red-600 pl-6"
                  >
                     Traditional agencies build websites.<br/>
                     We reconstruct digital reality.
                  </motion.p>
              </div>

               {/* Block 3 - The Chaos */}
               <div className="col-span-12 relative mt-20">
                   <h3 className="text-[15vw] leading-[0.8] font-bold font-sans text-surface uppercase tracking-tighter opacity-10 absolute -top-20 left-0 select-none pointer-events-none">
                       Silence
                   </h3>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                       <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.4 }}
                       >
                           <span className="text-red-600 font-mono text-xs mb-4 block">01 / DISRUPTION</span>
                           <p className="text-2xl md:text-4xl font-serif text-white leading-normal">
                               Normality is a glitch. We patch it with aggressive aesthetics and bleeding-edge functionality.
                           </p>
                       </motion.div>

                       <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="md:pt-32"
                       >
                           <span className="text-red-600 font-mono text-xs mb-4 block">02 / DOMINANCE</span>
                           <p className="text-xl text-gray-400 font-light leading-relaxed">
                               Your competitors are fighting for attention. We take it by force. Through strategic design and relentless performance optimization.
                           </p>
                       </motion.div>
                   </div>
               </div>
          </div>
       </div>
    </section>
  );
}
