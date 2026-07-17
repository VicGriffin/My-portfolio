"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Flame, Layers, Sparkles, Star, TrendingUp } from "lucide-react"

interface Technology {
  name: string
  category: "frontend" | "backend" | "devops" | "cloud"
  years: string
  fact: string
  projects: string
  glowColor: string
  posDelay: number
}

export default function Skills() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)

  const technologies: Technology[] = [
    {
      name: "React",
      category: "frontend",
      years: "3+ Years",
      fact: "Authored 30+ production custom hook profiles to optimize synchronous state pipelines and canvas draw loops.",
      projects: "AMTMTI, Interpreters Travel, Fynova Portal",
      glowColor: "rgba(56, 189, 248, 0.4)", // Cyan
      posDelay: 0,
    },
    {
      name: "Next.js",
      category: "frontend",
      years: "2+ Years",
      fact: "Configured advanced Incremental Static Regeneration (ISR) and standalone Docker assets, driving First Contentful Paint times down by 40%.",
      projects: "LogOf Consult, portfolio showcase",
      glowColor: "rgba(255, 255, 255, 0.4)", // White
      posDelay: 1,
    },
    {
      name: "Node.js",
      category: "backend",
      years: "3+ Years",
      fact: "Designed multi-threaded event-loop API architectures handling thousands of simultaneous JSON telemetry payloads safely.",
      projects: "Health data science models, core APIs",
      glowColor: "rgba(16, 185, 129, 0.4)", // Green
      posDelay: 2,
    },
    {
      name: "FastAPI",
      category: "backend",
      years: "1+ Years",
      fact: "Created ultra-low-latency asynchronous REST bridges integrated directly with Gemini and deep learning endpoints.",
      projects: "Data analytics science connectors",
      glowColor: "rgba(20, 184, 166, 0.4)", // Teal
      posDelay: 3,
    },
    {
      name: "TypeScript",
      category: "frontend",
      years: "3+ Years",
      fact: "Implemented strict union discrimination schema definitions across complex application pipelines, catching 99.8% of compile-time logic gaps.",
      projects: "Unified component registries, API interfaces",
      glowColor: "rgba(59, 130, 246, 0.4)", // Blue
      posDelay: 4,
    },
    {
      name: "PostgreSQL",
      category: "backend",
      years: "3+ Years",
      fact: "Refactored raw SQL query indexing sequences and structured relational views, reducing server response bottlenecks by 50%.",
      projects: "Fynova database core, Clinton health analysis",
      glowColor: "rgba(37, 99, 235, 0.4)", // Deep blue
      posDelay: 5,
    },
    {
      name: "Docker",
      category: "devops",
      years: "2+ Years",
      fact: "Created multi-stage Alpine build strategies, slimming production artifact weights from 1.2GB down to 140MB.",
      projects: "Containerized microservice deploy stacks",
      glowColor: "rgba(14, 165, 233, 0.4)", // Light blue
      posDelay: 6,
    },
    {
      name: "Kubernetes",
      category: "devops",
      years: "1+ Years",
      fact: "Authored self-healing manifest declarations, ensuring seamless horizontal replica expansion during traffic spikes.",
      projects: "Scalable staging environments",
      glowColor: "rgba(59, 130, 246, 0.45)", // Navy-ish blue
      posDelay: 7,
    },
    {
      name: "AWS",
      category: "cloud",
      years: "2+ Years",
      fact: "Deployed and managed secure EC2, IAM, and S3 server topologies configured with strict origin access control rules.",
      projects: "Enterprise media storage pipelines",
      glowColor: "rgba(249, 115, 22, 0.4)", // Orange
      posDelay: 8,
    },
    {
      name: "Supabase",
      category: "cloud",
      years: "2+ Years",
      fact: "Leveraged PostgreSQL row-level-security (RLS) policies to enable instant full-stack authentication without custom backend logic.",
      projects: "Autonomous prototype environments",
      glowColor: "rgba(16, 185, 129, 0.45)", // Emerald
      posDelay: 9,
    },
  ]

  // Default select first item
  if (!selectedTech && technologies.length > 0) {
    setSelectedTech(technologies[0])
  }

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Visual glowing space backdrops */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-rose-500/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-sky-500/5 filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4"
          >
            <Layers className="w-4 h-4 text-rose-500" />
            <span className="text-xs text-rose-400 font-mono tracking-widest uppercase font-semibold">Universe of Skills</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
            Interactive Universe
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-rose-500 via-sky-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Click any orbiting node within the engineering universe to probe its telemetry stats, deployment metrics, and practical case facts.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left panel: Orbiting technology node grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 relative">
            {technologies.map((tech) => {
              const isSelected = selectedTech?.name === tech.name
              return (
                <motion.div
                  key={tech.name}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tech.posDelay * 0.4,
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedTech(tech)}
                  className={`relative p-5 rounded-xl border cursor-pointer select-none transition-all duration-300 ${
                    isSelected
                      ? "bg-neutral-900 border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                      : "bg-black/40 border-white/5 hover:border-white/15"
                  }`}
                  style={{
                    boxShadow: isSelected ? `0 0 25px ${tech.glowColor}` : "none",
                  }}
                >
                  {/* Subtle inner node lighting */}
                  <div className="absolute top-2 right-2 flex items-center justify-center">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: isSelected ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)",
                        boxShadow: isSelected ? "0 0 8px hsl(var(--primary))" : "none",
                      }}
                    />
                  </div>

                  <h3 className="text-sm font-mono tracking-wider font-bold text-white mb-1">
                    {tech.name}
                  </h3>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 font-semibold block">
                    {tech.category}
                  </span>
                </motion.div>
              )
            })}
          </div>

          {/* Right panel: Holographic Telemetry Screen */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedTech && (
                <motion.div
                  key={selectedTech.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden"
                >
                  {/* Holographic scanner laser line visual overlay */}
                  <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent animate-pulse" />

                  <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                        {selectedTech.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-semibold block mt-1">
                        Node Telemetry Module
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-neutral-900 border border-white/10 flex items-center gap-1 text-[11px] font-mono text-neutral-300 font-bold">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span>{selectedTech.years}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Fact box */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-500 uppercase font-semibold">
                        <Flame size={12} className="text-rose-500" />
                        <span>Core Engineering Fact</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light">
                        {selectedTech.fact}
                      </p>
                    </div>

                    {/* Associated Case Projects */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-500 uppercase font-semibold">
                        <Cpu size={12} className="text-sky-400" />
                        <span>Associated Nodes</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                        {selectedTech.projects}
                      </p>
                    </div>

                    {/* Interactive diagnostic metric gauges */}
                    <div className="space-y-3 pt-2">
                      <span className="block font-mono text-[9px] text-neutral-500 uppercase font-semibold">
                        PROBE INDEX ANALYSIS
                      </span>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-[10px] font-mono text-neutral-400 mb-1">
                            <span>RECONCILIATION CONFIDENCE</span>
                            <span>98%</span>
                          </div>
                          <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "98%" }}
                              transition={{ duration: 0.8 }}
                              className="h-full bg-rose-500"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[10px] font-mono text-neutral-400 mb-1">
                            <span>AVAILABILITY METRIC</span>
                            <span>94%</span>
                          </div>
                          <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "94%" }}
                              transition={{ duration: 0.8 }}
                              className="h-full bg-sky-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-neutral-500">
                    <span>SECTOR: {selectedTech.category.toUpperCase()}</span>
                    <span>LOG: ONLINE</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
