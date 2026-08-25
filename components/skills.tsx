"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BrainCircuit, Braces, Cloud, Database, Layers3, Terminal } from "lucide-react"
import Link from "next/link"

const groups = [
  { label: "Frontend", icon: Layers3, description: "Interfaces with a clear point of view and a dependable component foundation.", technologies: ["React", "Next.js", "TypeScript", "SCSS", "Tailwind CSS"] },
  { label: "Backend", icon: Braces, description: "APIs and application logic built to remain legible as products grow.", technologies: ["Node.js", "FastAPI", "Express"] },
  { label: "AI & data", icon: BrainCircuit, description: "Product-facing AI workflows, data analysis, and integrations that stay grounded in use cases.", technologies: ["AI integrations", "Data science", "Analytics", "Virtual assistants"] },
  { label: "Cloud & DevOps", icon: Cloud, description: "The delivery layer for shipping, operating, and iterating on real systems.", technologies: ["AWS", "Docker", "Kubernetes", "Cloud Run"] },
  { label: "Databases", icon: Database, description: "Structured data foundations for reliable product behavior.", technologies: ["PostgreSQL", "MongoDB", "Supabase"] },
  { label: "Tools & practice", icon: Terminal, description: "A practical workflow that keeps quality close to the code.", technologies: ["Git", "REST APIs", "Web performance", "Responsive design"] },
]

export default function Skills() {
  return (
    <section id="skills" className="section-space border-b border-border/70 bg-secondary/25">
      <div className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:gap-24">
          <div>
            <p className="section-kicker">02 / Capability map</p>
            <h2 className="display-face max-w-sm text-4xl font-semibold leading-[1.04] sm:text-5xl">The stack is a means. The system is the work.</h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-muted-foreground">A focused toolkit across product interfaces, application services, applied AI, and cloud delivery.</p>
            <Link href="#projects" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition hover:text-primary">See the stack in context <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {groups.map(({ label, icon: Icon, description, technologies }, index) => (
              <motion.article key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay: index * 0.05 }} className="surface surface-hover rounded-2xl p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4"><Icon className="h-5 w-5 text-primary" /><span className="font-mono text-[0.62rem] text-muted-foreground">0{index + 1}</span></div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">{technologies.map((technology) => <span key={technology} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-muted-foreground">{technology}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
