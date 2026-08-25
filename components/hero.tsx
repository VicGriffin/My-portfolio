"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Check, Cloud, Code2, Github, Linkedin, Mail, Server, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const modules = [
  { icon: Code2, label: "Product interfaces", value: "React · Next.js · TypeScript", tone: "text-primary" },
  { icon: Server, label: "Application systems", value: "Node.js · FastAPI · PostgreSQL", tone: "text-accent" },
  { icon: Cloud, label: "Delivery layer", value: "AWS · Docker · Kubernetes", tone: "text-sky-500" },
]

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-border/70">
      <div className="absolute inset-0 -z-10 hairline-grid opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="section-wrap flex min-h-[760px] items-center pb-20 pt-36 sm:pb-28 sm:pt-44 lg:min-h-[820px]">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>
            <div className="mb-7 flex items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_hsl(var(--accent)/.12)]" />
              Available for thoughtful work
            </div>
            <h1 className="display-face max-w-3xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-[5.5rem]">
              Software for the systems that move ideas forward.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Victor Kamau is a software engineer in Nairobi building full-stack products, AI-powered applications, and the cloud foundations that keep them dependable.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-background transition hover:bg-primary">
                See selected work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-foreground transition hover:border-primary/60 hover:bg-secondary">
                Start a conversation
              </Link>
            </div>
            <div className="mt-9 flex items-center gap-5 text-muted-foreground">
              <span className="eyebrow mr-1">Find me</span>
              <Link href="https://github.com/VicGriffin" target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground" aria-label="Victor Kamau on GitHub"><Github className="h-[18px] w-[18px]" /></Link>
              <Link href="https://www.linkedin.com/in/victor-kamau-987951392" target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground" aria-label="Victor Kamau on LinkedIn"><Linkedin className="h-[18px] w-[18px]" /></Link>
              <Link href="#contact" className="transition hover:text-foreground" aria-label="Email Victor Kamau"><Mail className="h-[18px] w-[18px]" /></Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }} className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="surface overflow-hidden rounded-[2rem] p-3 shadow-2xl shadow-primary/10">
              <div className="overflow-hidden rounded-[1.35rem] border border-border/80 bg-secondary/60">
                <div className="flex items-center justify-between border-b border-border/80 px-5 py-4">
                  <div className="flex items-center gap-2.5"><span className="h-2 w-2 rounded-full bg-accent" /><span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">vk / engineering.profile</span></div>
                  <span className="font-mono text-[0.62rem] text-muted-foreground">01</span>
                </div>
                <div className="relative aspect-[1.18] overflow-hidden bg-foreground">
                  <Image src="/images/victor-profile.jpg" alt="Victor Kamau" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-top opacity-90 grayscale-[15%] transition duration-700 hover:scale-105 hover:grayscale-0" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-background">
                    <div><p className="font-display text-2xl font-semibold tracking-tight">Victor Kamau</p><p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-background/70">Software engineer · Nairobi</p></div>
                    <Sparkles className="mb-1 h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="space-y-1 px-5 py-5">
                  <div className="mb-4 flex items-center justify-between"><span className="eyebrow">Current focus</span><span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-accent"><Check className="h-3.5 w-3.5" /> Online</span></div>
                  {modules.map(({ icon: Icon, label, value, tone }) => <div key={label} className="flex items-center gap-3 border-t border-border/70 py-3.5"><Icon className={`h-4 w-4 shrink-0 ${tone}`} /><div><p className="text-sm font-medium">{label}</p><p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">{value}</p></div></div>)}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-xl sm:block"><p className="eyebrow">Principle</p><p className="mt-1 font-display text-sm font-medium">Make complexity feel simple.</p></div>
          </motion.div>
        </div>
      </div>
      <Link href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground sm:flex">Scroll to explore <ArrowDown className="h-3.5 w-3.5" /></Link>
    </section>
  )
}
