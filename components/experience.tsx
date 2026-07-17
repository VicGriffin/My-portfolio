"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, Star, Network } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Teach 2 Give",
      duration: "3 months",
      highlights: [
        "Provided expert technical support and dynamic diagnostics across critical client portals, increasing ticket resolution velocities.",
        "Authored, configured, and managed layered web application packages utilizing modular component designs.",
        "Monitored live system resource footprints, compiling performance logs to report bottlenecks to key team leads.",
      ],
      icon: <Briefcase size={16} />,
      color: "border-rose-500/30 text-rose-400",
    },
    {
      role: "Data Science Associate",
      company: "Clinton Health Access Initiative",
      duration: "2025",
      highlights: [
        "Synthesized, filtered, and processed vast medical dataset columns to generate actionable diagnostic models.",
        "Formulated key performance profiles guiding major regional initiatives by supplying structured vector graphs and analytical findings.",
      ],
      icon: <Network size={16} />,
      color: "border-sky-500/30 text-sky-400",
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Visual Glowing space indicators */}
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full bg-rose-500/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4"
          >
            <Star className="w-4 h-4 text-rose-500" />
            <span className="text-xs text-rose-400 font-mono tracking-widest uppercase font-semibold">Engineering Path</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
            Professional Timeline
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-rose-500 via-sky-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Detailed chronology of milestones, team roles, and collaborative projects executed in tech environments.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Pulsing indicator node */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center text-rose-400 group-hover:border-rose-500/40 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all duration-500">
                  {exp.icon}
                </div>
              </div>

              {/* Company container card */}
              <div className={`glass-card rounded-2xl p-6 border ${exp.color} relative overflow-hidden`}>
                {/* Volumetric background layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mt-1">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="px-3 py-1 rounded-full bg-black/40 border border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 font-semibold">
                    <Calendar size={12} className="text-rose-400" />
                    <span>{exp.duration.toUpperCase()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">
                    COMPILATION OF HIGHLIGHTS
                  </span>
                  <ul className="space-y-2 text-xs text-neutral-400 leading-relaxed font-sans font-light">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-rose-400 select-none mt-0.5">➜</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
