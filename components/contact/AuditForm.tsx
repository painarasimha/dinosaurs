"use client";

import { motion } from "framer-motion";

export function AuditForm() {
  return (
    <section className="pb-32 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
            <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8 bg-surface p-8 md:p-12 border border-white/10 rounded-3xl"
            >
                {/* Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-red-500 uppercase tracking-widest">Company Name</label>
                        <input type="text" className="w-full bg-background border-b border-white/20 focus:border-red-600 outline-none py-2 text-white transition-colors" placeholder="Acme Corp" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-red-500 uppercase tracking-widest">Website</label>
                        <input type="url" className="w-full bg-background border-b border-white/20 focus:border-red-600 outline-none py-2 text-white transition-colors" placeholder="acme.com" />
                    </div>
                </div>

                {/* Scale */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-red-500 uppercase tracking-widest">Revenue Band</label>
                        <select className="w-full bg-background border-b border-white/20 focus:border-red-600 outline-none py-2 text-white transition-colors appearance-none">
                            <option>Select Range</option>
                            <option>$1M - $5M</option>
                            <option>$5M - $20M</option>
                            <option>$20M - $50M</option>
                            <option>$50M+</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-red-500 uppercase tracking-widest">Team Size</label>
                        <select className="w-full bg-background border-b border-white/20 focus:border-red-600 outline-none py-2 text-white transition-colors appearance-none">
                            <option>Select Range</option>
                            <option>10 - 50</option>
                            <option>50 - 200</option>
                            <option>200 - 500</option>
                            <option>500+</option>
                        </select>
                    </div>
                </div>

                {/* Tech & Problem */}
                <div className="space-y-2">
                    <label className="text-xs font-mono text-red-500 uppercase tracking-widest">Current Tech Stack (Key Tools)</label>
                    <input type="text" className="w-full bg-background border-b border-white/20 focus:border-red-600 outline-none py-2 text-white transition-colors" placeholder="Salesforce, HubSpot, Jira, NetSuite, Custom..." />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono text-red-500 uppercase tracking-widest">Main Operational Pain Point</label>
                    <textarea rows={3} className="w-full bg-background border-b border-white/20 focus:border-red-600 outline-none py-2 text-white transition-colors resize-none" placeholder="We have 12 tools and none of them talk to each other..." />
                </div>

                {/* Logistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-red-500 uppercase tracking-widest">Budget Band</label>
                        <select className="w-full bg-background border-b border-white/20 focus:border-red-600 outline-none py-2 text-white transition-colors appearance-none">
                            <option>Select Range</option>
                            <option>$20k - $50k</option>
                            <option>$50k - $100k</option>
                            <option>$100k+</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-red-500 uppercase tracking-widest">Timeline</label>
                        <select className="w-full bg-background border-b border-white/20 focus:border-red-600 outline-none py-2 text-white transition-colors appearance-none">
                            <option>Select Timeline</option>
                            <option>Immediately</option>
                            <option>Q3 2026</option>
                            <option>Q4 2026</option>
                            <option>2027 Strategy</option>
                        </select>
                    </div>
                </div>

                <div className="pt-8">
                    <button className="w-full bg-red-600 text-white font-bold font-sans uppercase tracking-widest py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        Request Structured Audit
                    </button>
                </div>
            </motion.form>
        </div>
    </section>
  );
}
