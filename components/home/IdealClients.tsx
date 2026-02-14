"use client";

import { motion } from "framer-motion";

const painPoints = [
  "Drowning in multi-tool chaos",
  "Experiencing workflow friction",
  "Confused by automation options",
  "Exploring AI but fearing hype",
];

const profiles = [
  { label: "Revenue", value: "$2M - $50M+" },
  { label: "Team Size", value: "20 - 500+" },
  { label: "Industry", value: "SaaS · D2C · Services" },
  { label: "Stage", value: "Growth → Scale" },
];

export function IdealClients() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-[#060606]">
      {/* Radial subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Content */}
          <div>
            <div className="text-red-600 font-mono text-xs tracking-[0.3em] uppercase mb-6">WHO WE SERVE</div>
            <h2 className="text-5xl md:text-6xl font-bold font-sans text-white uppercase leading-[0.9] tracking-tighter mb-8">
              Growth-Stage &
              <br />
              Established
              <br />
              <span className="font-serif italic normal-case text-gray-400">Companies</span>
            </h2>

            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-md">
              We partner with organizations that have outgrown their spreadsheets but aren&apos;t ready for enterprise bureaucracy.
            </p>

            {/* Pain Points as pills */}
            <div className="space-y-3">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="inline-flex items-center gap-3 mr-3"
                >
                  <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                  <span className="text-white font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="border border-white/10 rounded-3xl p-10 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-600/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-600/10 to-transparent" />

              <div className="relative z-10">
                <h3 className="text-sm font-mono text-red-600 uppercase tracking-[0.3em] mb-8">IDEAL CLIENT PROFILE</h3>

                <div className="space-y-6">
                  {profiles.map((profile, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex justify-between items-center border-b border-white/5 pb-6 last:border-none"
                    >
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{profile.label}</span>
                      <span className="text-xl font-bold font-sans text-white">{profile.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="mt-10 pt-8 border-t border-white/5 text-center">
                  <span className="text-3xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                    ROI FOCUSED
                  </span>
                  <p className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-widest">Every engagement measured</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
