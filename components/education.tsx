"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar, BadgeCheck } from "lucide-react"

export default function Education() {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "AWS Academy",
      date: "2024",
    },
    {
      title: "Data Science",
      issuer: "Cisco Academy",
      date: "2024",
    },
    {
      title: "Operating Systems",
      issuer: "Cisco Academy",
      date: "2024",
    },
  ]

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-sky-500/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4"
          >
            <GraduationCap className="w-4 h-4 text-rose-500" />
            <span className="text-xs text-rose-400 font-mono tracking-widest uppercase font-semibold">Academic Nodes</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
            Education & Academy
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-rose-500 via-sky-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Systematic foundational training and professional credentials acquired across computing infrastructures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Main University Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-6 border border-rose-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-white/5">
                <div className="flex gap-3">
                  <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20 flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                      BSc in Computer Technology
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mt-1">
                      Murang'a University of Technology
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-black/40 border border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 font-semibold">
                  <Calendar size={12} className="text-rose-400" />
                  <span>2021 - 2025</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                Comprehensive education in distributed computing, enterprise programming paradigms, advanced networking protocols, and systems engineering methodologies. Earned practical training inside real-world environments while mastering robust analytical problem-solving keys.
              </p>
            </div>
          </motion.div>

          {/* Certifications Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <Award className="h-5 w-5 text-rose-500" />
              <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-white">
                Credentials & Badges
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-4 border border-white/5 hover:border-rose-500/20 transition-all duration-300 relative group"
                >
                  <div className="absolute top-2 right-2 flex items-center justify-center">
                    <BadgeCheck size={14} className="text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="text-sm font-mono font-bold text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider mb-3">
                    {cert.issuer}
                  </p>

                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[9px] font-mono text-neutral-400">
                    <Calendar size={10} className="text-rose-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
