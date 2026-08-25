"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BrainCircuit, Braces, Database, GitBranch, MessageSquare, Workflow } from "lucide-react"
import Link from "next/link"

const workflow = [
  { label: "Input", detail: "Product context", icon: MessageSquare },
  { label: "Orchestrate", detail: "Intelligent workflow", icon: Workflow },
  { label: "Ground", detail: "Data + APIs", icon: Database },
  { label: "Return", detail: "Useful action", icon: Braces },
]

export default function AiSection() {
  return (
    <section id="ai-architect" className="section-space border-b border-border/70">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="section-kicker">03 / Applied intelligence</p>
            <h2 className="display-face max-w-md text-4xl font-semibold leading-[1.04] sm:text-5xl">AI belongs inside the product, not beside it.</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">Victor explores AI-powered applications, LLM integrations, automation, voice systems, and intelligent workflows—always from the job the system needs to do.</p>
            <Link href="#contact" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition hover:text-primary">Discuss an AI build <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
          <div className="surface overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7"><div className="flex items-center gap-2.5"><BrainCircuit className="h-4 w-4 text-primary" /><span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em]">Applied AI workflow</span></div><span className="font-mono text-[0.62rem] text-accent">READY TO COMPOSE</span></div>
            <div className="p-5 sm:p-8">
              <div className="mb-8 rounded-2xl border border-border bg-secondary/45 p-4 sm:p-5"><div className="mb-5 flex items-center justify-between"><span className="eyebrow">A useful mental model</span><GitBranch className="h-4 w-4 text-muted-foreground" /></div><div className="grid gap-2 sm:grid-cols-4">{workflow.map(({ label, detail, icon: Icon }, index) => <div key={label} className="relative"><div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-3.5"><Icon className="h-4 w-4 text-primary" /><div><p className="font-display text-sm font-semibold">{label}</p><p className="mt-1 font-mono text-[0.6rem] uppercase leading-4 tracking-[0.05em] text-muted-foreground">{detail}</p></div></div>{index < workflow.length - 1 && <span className="absolute -right-2 top-1/2 z-10 hidden h-px w-2 bg-primary/60 sm:block" />}</div>)}</div></div>
              <div className="grid gap-3 sm:grid-cols-3">{[{ title: "AI-powered apps", text: "Bring intelligent assistance into a real product workflow." }, { title: "Automation", text: "Turn repeatable decisions into clear, inspectable steps." }, { title: "Voice + agents", text: "Explore natural interfaces and orchestrated system behavior." }].map((item) => <div key={item.title} className="border-l-2 border-primary/40 pl-4"><h3 className="font-display text-base font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p></div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
