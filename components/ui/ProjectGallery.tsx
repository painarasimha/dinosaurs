"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "NEON DUST",
    category: "Cybernetics",
    // In a real app, use real images. 
    image: "/project-1.jpg", 
    color: "from-blue-900",
  },
  {
    id: 2,
    title: "VOID WALKER",
    category: "Aerospace",
    image: "/project-2.jpg",
    color: "from-purple-900",
  },
  {
    id: 3,
    title: "RED SHIFT",
    category: "Automotive",
    image: "/project-3.jpg",
    color: "from-red-900",
  },
];

function ProjectItem({ project, index }: { project: any; index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

    return (
        <div ref={ref} className="relative w-full h-[80vh] flex items-center justify-center mb-0 overflow-hidden group">
            <motion.div 
                style={{ scale }}
                className="relative w-[90%] h-[90%] overflow-hidden rounded-none md:rounded-3xl"
            >
                {/* Background Image / Gradient Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-black z-0 opacity-40`} />
                <div className="absolute inset-0 bg-neutral-900 z-[-1]" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-mono text-red-500 tracking-[0.5em] uppercase mb-4"
                    >
                        {project.category}
                    </motion.p>
                    <motion.h2 
                        className="text-[10vw] font-bold font-sans text-white uppercase tracking-tighter leading-none z-10 mix-blend-overlay group-hover:mix-blend-normal transition-all duration-700"
                    >
                        {project.title}
                    </motion.h2>
                </div>
            </motion.div>
        </div>
    )
}

export function ProjectGallery() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6 mb-20">
         <h2 className="text-right text-4xl font-serif italic text-white/20">Selected Works (2025-2026)</h2>
      </div>
      <div>
          {projects.map((project, index) => (
             <ProjectItem key={project.id} project={project} index={index} />
          ))}
      </div>
    </section>
  );
}
