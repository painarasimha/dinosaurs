"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "METHOD", href: "/method" },
  { label: "AUDIT", href: "/audit" },
  { label: "CASES", href: "/cases" },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
         <Link href="/" className="text-white font-sans font-bold text-xl tracking-tighter uppercase relative z-50">
            DINOSAURS
         </Link>

         <button 
           onClick={() => setIsOpen(!isOpen)}
           className="text-white relative z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
         >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
         </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0)" }}
            animate={{ clipPath: "circle(150% at 100% 0)" }}
            exit={{ clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-red-600 z-40 flex items-center overflow-y-auto"
          >
             <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="hidden md:flex flex-col justify-between min-h-[400px]">
                    <div className="text-white/50 font-mono text-sm">
                       DINOSAURS<br/>
                       TECHNOLOGY INTELLIGENCE<br/>
                       EST. 2026
                    </div>
                    <div className="text-black font-serif italic text-3xl max-w-sm leading-tight">
                       "Transformation without diagnosis is expensive guesswork."
                    </div>
                 </div>

                 <ul className="space-y-3">
                    {navLinks.map((item, index) => (
                       <motion.li 
                         key={item.label}
                         initial={{ opacity: 0, x: 50 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.1 + (index * 0.05) }}
                       >
                          <Link 
                            href={item.href} 
                            onClick={() => setIsOpen(false)}
                            className="block text-3xl md:text-5xl font-sans font-bold text-white hover:text-black transition-colors leading-tight"
                          >
                             {item.label}
                          </Link>
                       </motion.li>
                    ))}
                 </ul>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
