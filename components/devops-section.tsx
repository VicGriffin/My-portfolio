"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Check, Cloud, Container, GitBranch, Gauge, LockKeyhole, Server } from "lucide-react"
import Link from "next/link"

const stages = [
  { label: "Plan", text: "Shape the system around a clear product constraint." },
  { label: "Build", text: "Keep application code, data, and interfaces composable." },
  { label: "Ship", text: "Use containers and cloud tooling to make delivery repeatable." },
  { label: "Run", text: "Leave room for monitoring, iteration, and the next release." },
]

const signals = [
  { icon: Container, label: "Containers", text: "Docker" },
  { icon: Cloud, label: "Cloud", text: "AWS · Cloud Run" },
  { icon: GitBranch, label: "Delivery", text: "CI / CD thinking" },
  { icon: LockKeyhole, label: "Foundations", text: "Security-aware systems" },
]

export default function DevopsSection() {
  return (
    <section id="devops" className="section-space border-b border-border/70 bg-secondary/25">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
          <div>
            <p className="section-kicker">Delivery systems</p>
            <h2 className="display-face max-w-xl text-4xl font-semibold leading-[1.04] sm:text-5xl">Good engineering includes the path to production.</h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">From deployment and cloud infrastructure to CI/CD, containers, monitoring, and production systems, the delivery layer makes product work sustainable.</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">{signals.map(({ icon: Icon, label, text }) => <div key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span><div><p className="font-display text-sm font-semibold">{label}</p><p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">{text}</p></div></div>)}</div>
            <Link href="#contact" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition hover:text-primary">Talk through an architecture <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} className="surface rounded-3xl p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-border pb-5"><div className="flex items-center gap-2.5"><Gauge className="h-4 w-4 text-accent" /><span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em]">Delivery mindset</span></div><span className="font-mono text-[0.62rem] text-muted-foreground">SYSTEM / 04</span></div>
            <div className="relative mt-7 space-y-0">{stages.map((stage, index) => <div key={stage.label} className="relative flex gap-4 pb-8 last:pb-0"><div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-card font-mono text-[0.65rem] font-semibold text-primary">0{index + 1}</div>{index < stages.length - 1 && <span className="absolute left-4 top-8 h-[calc(100%-8px)] w-px bg-border" />}<div className="pt-1"><h3 className="font-display text-lg font-semibold">{stage.label}</h3><p className="mt-1 max-w-xs text-sm leading-6 text-muted-foreground">{stage.text}</p></div></div>)}</div>
            <div className="mt-7 flex items-center gap-2 border-t border-border pt-5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-accent"><Check className="h-3.5 w-3.5" /> Reliable by design, observable in practice</div>
          </motion.div>
        </div>
        <div className="mt-20 flex items-center gap-3 text-muted-foreground"><Server className="h-4 w-4 text-primary" /><span className="eyebrow">Next: products where these ideas meet the user</span></div>
      </div>
    </section>
  )
}
