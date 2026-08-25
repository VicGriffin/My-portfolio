"use client"

import { motion } from "framer-motion"
import { Award, CalendarDays, GraduationCap } from "lucide-react"

const certifications = [
  { title: "Cloud Computing", issuer: "AWS Academy", date: "2024" },
  { title: "Data Science", issuer: "Cisco Academy", date: "2024" },
  { title: "Operating Systems", issuer: "Cisco Academy", date: "2024" },
]

export default function Education() {
  return (
    <section id="education" className="border-b border-border/70 py-20 sm:py-24">
      <div className="section-wrap"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><p className="section-kicker">07 / Foundations</p><h2 className="display-face text-3xl font-semibold leading-tight sm:text-4xl">The learning behind the work.</h2></div><div><motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface rounded-3xl p-5 sm:p-7"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div className="flex gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary"><GraduationCap className="h-5 w-5" /></span><div><h3 className="font-display text-xl font-semibold tracking-tight">BSc in Computer Technology</h3><p className="mt-1 text-sm text-muted-foreground">Murang&apos;a University of Technology</p></div></div><span className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-secondary/55 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" /> 2021 — 2025</span></div><div className="mt-7 border-t border-border pt-5"><div className="mb-4 flex items-center gap-2"><Award className="h-4 w-4 text-accent" /><span className="eyebrow">Additional study</span></div><div className="grid gap-2 sm:grid-cols-3">{certifications.map((item) => <div key={item.title} className="rounded-2xl border border-border bg-secondary/40 p-3.5"><p className="font-display text-sm font-semibold">{item.title}</p><p className="mt-1 text-xs text-muted-foreground">{item.issuer}</p><p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">{item.date}</p></div>)}</div></div></motion.div></div></div></div>
    </section>
  )
}
