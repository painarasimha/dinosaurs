"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-black pt-32 pb-8 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

      <div className="container mx-auto px-6 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 items-start">
             {/* CTA Section */}
             <div className="md:col-span-6 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-4xl md:text-6xl font-serif italic text-white mb-8 leading-tight">
                        Ready to go <br/>
                        <span className="text-red-500 not-italic font-sans font-bold">Extinct?</span>
                    </h3>
                    <p className="text-gray-400 max-w-md mb-12 text-lg">
                        Or are you ready to evolve? Let&apos;s build a digital presence that dominates the food chain.
                    </p>
                </div>
                
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-fit flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider overflow-hidden"
                >
                    <span className="relative z-10">Start Project</span>
                    <div className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                    <ArrowUpRight className="relative z-10 group-hover:text-white transition-colors" />
                    <span className="relative z-10 group-hover:text-white transition-colors"></span>
                </motion.button>
             </div>

             {/* Links */}
             <div className="md:col-span-6 grid grid-cols-2 gap-8">
                <div>
                   <h4 className="font-mono text-red-600 mb-6 text-sm">SERVICES</h4>
                   <ul className="space-y-4 text-xl font-sans font-bold text-white uppercase">
                      {[
                        { label: "Tech Audit", href: "/audit" },
                        { label: "Method", href: "/method" },
                        { label: "Transformation", href: "/transformation" },
                        { label: "Implementation", href: "/implementation" },
                        { label: "Industries", href: "/industries" },
                      ].map(item => (
                          <li key={item.label}>
                              <Link href={item.href} className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                                  <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-500">→</span>
                                  {item.label}
                              </Link>
                          </li>
                      ))}
                   </ul>
                </div>
                <div>
                   <h4 className="font-mono text-red-600 mb-6 text-sm">COMPANY</h4>
                   <ul className="space-y-4 text-xl font-sans font-bold text-white uppercase">
                      {[
                        { label: "About", href: "/about" },
                        { label: "Cases", href: "/cases" },
                        { label: "Insights", href: "/insights" },
                        { label: "Principles", href: "/principles" },
                        { label: "Contact", href: "/contact" },
                      ].map(item => (
                          <li key={item.label}>
                              <Link href={item.href} className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                                  <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-500">→</span>
                                  {item.label}
                              </Link>
                          </li>
                      ))}
                   </ul>
                </div>
             </div>
         </div>

         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-mono mb-12 gap-4">
            <span className="uppercase">© 2026 Dinosaurs Agency. Keep Evolving.</span>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-white transition-colors">PRIVACY</Link>
                <Link href="#" className="hover:text-white transition-colors">TERMS</Link>
            </div>
         </div>

         {/* Massive Typography - Interactive */}
         <div className="relative overflow-visible group cursor-default pb-4">
             <motion.h1 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ duration: 1 }}
               className="text-[12vw] leading-none font-black font-sans text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none group-hover:from-red-600/20 group-hover:to-transparent transition-all duration-700"
             >
               DINOSAURS
             </motion.h1>
         </div>
      </div>
    </footer>
  );
}

