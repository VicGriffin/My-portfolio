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
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5 pointer-events-none" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:bg-secondary/80 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                Victor Kamau • Software Engineer
              </span>
            </motion.div>

            {/* Clean headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight max-w-3xl text-balance"
            >
              Software Engineer building systems that move ideas into reality.
            </motion.h1>

            {/* Clean description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-foreground/85 max-w-2xl leading-relaxed"
            >
              I design and ship thoughtful software across frontend, backend, AI, automation, and cloud infrastructure. Based in Nairobi, Kenya.
            </motion.p>

            {/* Technology pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 max-w-xl"
            >
              {[
                { text: "Frontend" },
                { text: "Backend" },
                { text: "AI + automation" },
                { text: "Cloud systems" },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-secondary border border-border hover:border-primary/30 text-xs text-muted-foreground transition-colors"
                >
                  <span>{pill.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Clean button group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start items-center mt-6 w-full"
            >
              <Link href="#projects">
                <Button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm flex items-center gap-2 transition-all">
                  <span>View Projects</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="#contact">
                <Button variant="outline" className="px-8 py-3 border-border hover:border-primary hover:bg-secondary text-foreground font-semibold text-sm transition-all">
                  <span>Get in Touch</span>
                </Button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-8 pt-6 border-t border-border justify-center lg:justify-start text-muted-foreground"
            >
              <Link href="https://github.com/VicGriffin" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/victor-kamau-987951392" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full max-w-2xl pt-2">
              <div className="mb-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span>System map</span>
                <span>Currently building</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:items-center">
                {[
                  ["User", "01"],
                  ["Frontend", "02"],
                  ["API", "03"],
                  ["AI / Data", "04"],
                  ["Infrastructure", "05"],
                ].map(([label, number], index) => (
                  <div key={label} className="relative flex items-center gap-2 sm:block">
                    <div className="system-node w-full text-center">{label}<span className="ml-2 text-primary/70">{number}</span></div>
                    {index < 4 && <span className="hidden sm:block absolute left-full top-1/2 h-px w-2 bg-primary/40" aria-hidden="true" />}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                <span>Available for thoughtful work</span><span>Nairobi / EAT</span><span>Next.js · FastAPI · PostgreSQL</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean profile image */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
              {/* Clean circular frame */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-background shadow-lg bg-card">
                <Image
                  src="/images/victor-profile.jpg"
                  alt="Victor Kamau Profile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}
