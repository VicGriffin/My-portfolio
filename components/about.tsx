"use client"

import { motion } from "framer-motion"
import { Code, Terminal, Cpu, Heart, Shield } from "lucide-react"
import Image from "next/image"

export default function About() {
  const codeSnippet = `// Core Identity Schema
const engineer = {
  name: "Victor Kamau",
  origin: "Nairobi, Kenya",
  focus: ["Full Stack", "AI Integration", "Cloud native DevOps"],
  values: {
    craftsmanship: "extremely high",
    reliability: "absolute",
    performance: "Lighthouse 100"
  },
  ecosystem: ["TypeScript", "Next.js", "PERN Stack", "Docker", "Kubernetes"]
};

// Autonomic compilation success...
deploy(engineer).then(monitor_active_nodes);`

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle Grid backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ffffff01_0%,transparent_50%)]" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Meticulous Holographic Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div className="glass-card rounded-2xl border border-white/5 p-6 flex flex-col items-center justify-center relative overflow-hidden group h-full">
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-rose-500/40" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-rose-500/40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-rose-500/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-rose-500/40" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Meticulous Framed Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group-hover:border-rose-500/30 transition-colors shadow-2xl bg-black">
                {/* HUD Overlay / Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/60 to-transparent animate-pulse z-10" />
                
                <Image
                  src="/images/victor-profile.jpg"
                  alt="Victor Kamau"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover grayscale contrast-110 brightness-95 hover:grayscale-0 hover:brightness-100 transition-all duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>

              {/* Status HUD telemetry beneath image */}
              <div className="w-full mt-6 flex items-center justify-between font-mono text-[9px] text-neutral-500 border-t border-white/5 pt-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-neutral-400">NODE: ACTIVE_GRYPHON</span>
                </div>
                <span>LOC: NBO_01</span>
              </div>
            </div>
          </motion.div>
          
          {/* Column 2: Main Story & Highlight Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-[10px] uppercase font-semibold">
                <span>01 // WHO_I_AM</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-[1.1] text-balance">
                Engineering elegant systems from the ground up.
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans tracking-wide font-light">
                I am a meticulous Software Engineer based in Nairobi, Kenya. I specialize in assembling performant digital experiences using the PERN stack and NextJS, integrated with intelligent API routers and highly available cloud deployments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              <div className="flex gap-3 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
                <div className="mt-0.5 p-2 rounded-lg bg-neutral-900 border border-white/5 text-rose-500 flex-shrink-0">
                  <Code size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Technical Rigor</h4>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                    Prioritizing clean abstractions, complete type-safety, and modular architecture.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
                <div className="mt-0.5 p-2 rounded-lg bg-neutral-900 border border-white/5 text-rose-500 flex-shrink-0">
                  <Cpu size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Solutions Architect</h4>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                    Translating high-level system needs into reliable container topologies and databases.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Animated Code Console Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <div className="glass-card rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative group h-full flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div>
                {/* Header tab decorations */}
                <div className="bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                    <Terminal size={10} />
                    <span>identity_schema.ts</span>
                  </div>
                </div>

                {/* Code print body */}
                <div className="p-5 font-mono text-[11px] text-neutral-400 leading-relaxed bg-black/30 overflow-x-auto">
                  <pre className="text-[10px] text-rose-400 select-all font-mono">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Bottom footer bar info */}
              <div className="bg-black/40 px-4 py-3 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-neutral-500 mt-auto">
                <span>ENCODING: UTF-8</span>
                <span>STATUS: COMPILED</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
