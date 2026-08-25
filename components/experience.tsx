"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BriefcaseBusiness, CalendarDays, Database, Layers3 } from "lucide-react"
import Link from "next/link"

const experiences = [
  { role: "Software Developer Intern", company: "Teach 2 Give", date: "3 months", icon: BriefcaseBusiness, focus: "Support · web applications · performance", highlights: ["Provided technical support and diagnostics across client portals.", "Configured modular web application packages and component-based interfaces.", "Monitored live system resources and reported bottlenecks to team leads."] },
  { role: "Data Science Associate", company: "Clinton Health Access Initiative", date: "2025", icon: Database, focus: "Data preparation · analysis · health initiatives", highlights: ["Synthesized, filtered, and processed medical dataset columns for analytical models.", "Produced structured findings and performance profiles for regional initiatives."] },
]

export default function Experience() {
  return (
    <section id="experience" className="section-space border-b border-border/70">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><p className="section-kicker">06 / Experience</p><h2 className="display-face max-w-sm text-4xl font-semibold leading-[1.04] sm:text-5xl">A career built close to the problem.</h2></div><div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">Work across software support, application development, and data science—learning how systems behave in the hands of real teams.</p><div className="mt-9 space-y-4">{experiences.map(({ role, company, date, icon: Icon, focus, highlights }, index) => <motion.article key={company} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay: index * 0.1 }} className="surface surface-hover rounded-3xl p-5 sm:p-7"><div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"><div className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><div><h3 className="font-display text-xl font-semibold tracking-tight">{role}</h3><p className="mt-1 text-sm font-medium text-primary">{company}</p></div></div><span className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-secondary/55 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" />{date}</span></div><div className="mt-6 border-t border-border pt-5"><p className="eyebrow">Scope / {focus}</p><ul className="mt-4 space-y-2.5">{highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{highlight}</li>)}</ul></div></motion.article>)}</div><div className="mt-8 flex items-center gap-3 text-muted-foreground"><Layers3 className="h-4 w-4 text-primary" /><span className="font-mono text-[0.62rem] uppercase tracking-[0.13em]">The through-line: make complex work more usable</span><Link href="#contact" className="ml-auto" aria-label="Contact Victor Kamau"><ArrowUpRight className="h-4 w-4 transition hover:text-primary" /></Link></div></div></div>
      </div>
    </section>
  )
}
