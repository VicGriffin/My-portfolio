"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight, Terminal, Cpu, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Cinematic grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Volumetric Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-rose-500/5 filter blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-sky-500/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Premium Editorial Info */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 order-2 lg:order-1">
            
            {/* Subtle status tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/60 border border-white/5 backdrop-blur-xl hover:border-rose-500/20 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase font-semibold">
                VICTOR_KAMAU // SOFTWARE ENGINEER
              </span>
            </motion.div>

            {/* Huge Premium Editorial Typography Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tight text-white leading-[1.05] max-w-4xl text-balance"
            >
              Software Beyond <span className="gradient-text-accent">Interfaces</span>.
            </motion.h1>

            {/* Beautiful Subtitle description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-neutral-400 max-w-xl font-sans tracking-wide leading-relaxed font-light"
            >
              Engineering elegant full stack infrastructures, cognitive AI agents, and resilient cloud architecture. Operating at the intersections of design, systems engineering, and creative technology.
            </motion.p>

            {/* Technology pills floating beneath header */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 max-w-xl"
            >
              {[
                { icon: <Terminal size={12} />, text: "Full Stack" },
                { icon: <Cpu size={12} />, text: "AI Systems" },
                { icon: <Database size={12} />, text: "PERN Stack" },
                { icon: <Cloud size={12} />, text: "Cloud Native" },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 hover:border-white/10 text-xs text-neutral-300 font-mono transition-colors"
                >
                  <span className="text-neutral-500">{pill.icon}</span>
                  <span>{pill.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Majestic Button Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mt-2 w-full"
            >
              <Link href="#projects">
                <Button className="rounded-full px-8 py-6 bg-white hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.03]">
                  <span>Explore Showcase</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="#contact">
                <Button variant="outline" className="rounded-full px-8 py-6 border-white/10 hover:border-rose-500/40 bg-black/40 text-white font-semibold text-xs uppercase tracking-wider transition-all hover:scale-[1.03]">
                  <span>Initiate Handshake</span>
                </Button>
              </Link>
            </motion.div>

            {/* Social Handles in Hero */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-4 pt-6 border-t border-white/5 w-48 justify-center lg:justify-start text-neutral-500"
            >
              <Link href="https://github.com/VicGriffin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={18} />
              </Link>
              <span className="text-neutral-800 font-mono">/</span>
              <Link href="https://www.linkedin.com/in/victor-kamau-987951392" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={18} />
              </Link>
              <span className="text-neutral-800 font-mono">/</span>
              <Link href="#contact" className="hover:text-white transition-colors">
                <Mail size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Holographic/Sci-Fi Profile Container */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              {/* Spinning tech boundary rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-rose-500/10 animate-[spin_120s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-white/5 animate-[spin_180s_linear_infinite]" />
              
              {/* Outer decorative indicators */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 bg-rose-500 text-[8px] font-mono px-2 py-0.5 rounded text-black font-extrabold tracking-widest z-20">
                SYSTEM_LIVE
              </div>
              
              {/* Glowing Ambient Backing */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-rose-500/10 via-sky-500/5 to-transparent blur-xl group-hover:scale-105 transition-transform duration-1000" />
              
              {/* Meticulous circular frame */}
              <div className="absolute inset-2 rounded-full overflow-hidden border border-white/10 group-hover:border-rose-500/40 transition-all duration-700 bg-neutral-950 p-1.5 shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  
                  {/* Digital Scanning HUD Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(244,63,94,0.1),transparent_70%)] z-10" />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent animate-pulse z-10" />
                  
                  {/* Actual Profile Image */}
                  <Image
                    src="/images/victor-profile.jpg"
                    alt="Victor Kamau Profile"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover grayscale contrast-115 brightness-90 hover:grayscale-0 hover:brightness-100 hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </div>
              </div>
              
              {/* Cybernetic Tech brackets/ticks */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-rose-500/30" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-rose-500/30" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-rose-500/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-rose-500/30" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down arrow indicator scroll trigger */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-neutral-600">Scroll Chapter</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-3 rounded-full bg-neutral-700"
        />
      </div>
    </section>
  )
}
