"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Boxes, BrainCircuit, CloudCog, Code2, Compass, MapPin } from "lucide-react"
import Link from "next/link"

const principles = [
  { icon: Code2, title: "Product-minded", text: "Interfaces and APIs are designed together, so the implementation stays close to the user problem." },
  { icon: BrainCircuit, title: "AI, applied", text: "AI is treated as a product capability: useful when it makes a workflow clearer, faster, or more intelligent." },
  { icon: CloudCog, title: "Built to run", text: "Cloud, containers, and delivery are part of the engineering work—not an afterthought after launch." },
]

export default function About() {
  return (
    <section id="about" className="section-space border-b border-border/70">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="section-kicker">How I work</p>
            <h2 className="display-face max-w-md text-4xl font-semibold leading-[1.04] sm:text-5xl">Engineering with context, not just code.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl">I work across the product surface area—from a sharp first screen to the services, data, and delivery systems underneath it.</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {principles.map(({ icon: Icon, title, text }, index) => (
                <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: index * 0.08 }} className="surface surface-hover rounded-2xl p-5">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-8 font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border pt-6">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-accent" /> Nairobi, Kenya</span>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"><Boxes className="h-3.5 w-3.5 text-primary" /> Full-stack / AI / cloud</span>
              <Link href="#experience" className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-foreground transition hover:text-primary">Read the timeline <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {[{ label: "Frontend", value: "Interfaces people understand" }, { label: "Backend", value: "Systems teams can extend" }, { label: "Delivery", value: "Infrastructure that stays observable" }].map((item) => <div key={item.label} className="bg-card px-6 py-7"><p className="eyebrow">{item.label}</p><p className="mt-3 font-display text-xl font-medium tracking-tight">{item.value}</p></div>)}
        </div>
      </div>
    </section>
  )
}
