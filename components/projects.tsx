"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Grid2X2, Layers3, Sparkles } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import darubiniImg from "../src/darubini.jpg"
import mastoreImg from "../src/mastore-arise-and-shine-school.jpg"
import tangoGardensImg from "../src/tango gardens.jpg"
import vitaAiImg from "../src/vita-ai.jpg"
import veloxImg from "../src/velox-web-systems.jpg"
import ashakiImg from "../src/ashaki-gardens.jpg"
import allThingsJessImg from "../src/allthingsjess-design.jpg"
import interpretersImg from "../public/interpreters-travel.png"
import fynovaImg from "../public/fynova-company.png"
import hydraImg from "../public/hydra-water-solutions.png"
import bkkraftImg from "../public/bkkraft.png"
import dancoImg from "../public/danco.png"
import fynovaShowcaseImg from "../public/fynova-showcase.png"

interface Project {
  title: string
  description: string
  image: StaticImageData
  tags: string[]
  liveLink: string
  featured?: boolean
  buildAngle: string
}

const projects: Project[] = [
  { title: "Velox Web Systems", description: "An AI-powered website analysis platform calculating Revenue Visibility Scores across six critical dimensions and identifying revenue blocks with ROI projections.", image: veloxImg, tags: ["AI", "Analytics", "SaaS", "Next.js"], liveLink: "https://velox-web-systems.vercel.app/", featured: true, buildAngle: "AI product / website analysis" },
  { title: "Darubini ya Afya", description: "A digital health and wellness platform for community support in Kenya, improving public health access through robust record modules.", image: darubiniImg, tags: ["React", "Node.js", "MongoDB", "Health tech"], liveLink: "https://darubini-improved.vercel.app/", featured: true, buildAngle: "Digital health / community platform" },
  { title: "Interpreters Travel Site", description: "Front-end performance work for a travel platform serving 20,000+ users, with a focus on improving LCP and CLS indicators.", image: interpretersImg, tags: ["React", "Next.js", "SCSS", "Web vitals"], liveLink: "https://www.interpreters.travel/en", featured: true, buildAngle: "Performance / travel product" },
  { title: "Hydra Water Solutions", description: "A water treatment and solutions provider website with service showcases, technical specifications, and an enterprise-facing experience.", image: hydraImg, tags: ["B2B", "Next.js", "Enterprise"], liveLink: "https://hydrawatersolutions.vercel.app/", featured: true, buildAngle: "B2B / technical marketing" },
  { title: "Arise and Shine School Store", description: "A streamlined e-commerce portal enabling school associations to distribute merchandise through a focused digital storefront.", image: mastoreImg, tags: ["React", "E-commerce", "Next.js"], liveLink: "https://mastore-arise-and-shine-school.vercel.app/", buildAngle: "Commerce / school community" },
  { title: "Tango Gardens Portal", description: "A visual portfolio and corporate landing experience establishing digital brand presence for a landscaping and garden structures business.", image: tangoGardensImg, tags: ["React", "Next.js", "Business"], liveLink: "https://tango-garderns.vercel.app/", buildAngle: "Brand / business website" },
  { title: "Fynova Company Portal", description: "A corporate fintech web system designed around performance and optimized organic query indexing.", image: fynovaImg, tags: ["Static generation", "SEO", "Fintech"], liveLink: "https://fynova.vercel.app/", buildAngle: "Fintech / corporate platform" },
  { title: "VITA AI助理", description: "An AI-driven emergency response concept assistant validating virtual notification sequences under tight telemetry conditions.", image: vitaAiImg, tags: ["React", "AI", "Assistant"], liveLink: "https://vita-ai-tau.vercel.app/", buildAngle: "AI concept / emergency response" },
  { title: "Ashaki Gardens Restaurant", description: "A visual booking portal for a luxury venue in Ruiru, Kenya, featuring table allocations and live music event calendars.", image: ashakiImg, tags: ["Hospitality", "Events", "Next.js"], liveLink: "https://ashaki-gardens.vercel.app/", buildAngle: "Hospitality / booking experience" },
  { title: "BK Kraft Kenya", description: "An e-commerce platform for eco-friendly kraft products with inventory, packaging, and checkout experiences.", image: bkkraftImg, tags: ["E-commerce", "Sustainability", "React"], liveLink: "https://bkkraft.co.ke/", featured: true, buildAngle: "Commerce / sustainable products" },
  { title: "Danco Construction", description: "A professional construction company portfolio showcasing projects, service offerings, and civil engineering expertise.", image: dancoImg, tags: ["Construction", "Portfolio", "Infrastructure"], liveLink: "https://danco.co.ke/", buildAngle: "Brand / infrastructure" },
  { title: "Fynova Financial Platform", description: "A fintech platform concept for insights, analytics, and wealth management tools with real-time data feeds.", image: fynovaShowcaseImg, tags: ["Fintech", "Analytics", "Dashboard"], liveLink: "https://fynova.vercel.app/", buildAngle: "Financial analytics / dashboard" },
  { title: "All Things Jess", description: "A visual design project for a focused personal brand and digital presence.", image: allThingsJessImg, tags: ["Design", "Brand", "Web"], liveLink: "#projects", buildAngle: "Brand / digital presence" },
]

function ProjectImage({ project, large = false }: { project: Project; large?: boolean }) {
  return <div className={`relative overflow-hidden bg-foreground ${large ? "aspect-[1.65] sm:aspect-[2.25]" : "aspect-[1.6]"}`}><Image src={project.image} alt={project.title} fill sizes={large ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} className="object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/5 to-transparent" /><span className="absolute bottom-4 left-4 rounded-full border border-background/25 bg-foreground/55 px-2.5 py-1 font-mono text-[0.59rem] uppercase tracking-[0.12em] text-background backdrop-blur-sm">{project.buildAngle}</span></div>
}

export default function Projects() {
  const [filter, setFilter] = useState<"featured" | "all">("featured")
  const featured = projects.filter((project) => project.featured)
  const supporting = projects.filter((project) => !project.featured)
  const visible = filter === "featured" ? featured : projects
  const primary = visible[0]
  const secondary = visible.slice(1, 3)

  return (
    <section id="projects" className="section-space border-b border-border/70">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-10 sm:flex-row sm:items-end"><div><p className="section-kicker">05 / Selected work</p><h2 className="display-face max-w-xl text-4xl font-semibold leading-[1.04] sm:text-5xl">Products, platforms, and systems made to be used.</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">A curated selection of work across AI, health, travel, commerce, fintech, and technical brand experiences.</p></div><div className="flex shrink-0 gap-1 rounded-full border border-border bg-secondary/60 p-1"><button type="button" onClick={() => setFilter("featured")} className={`flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[0.63rem] uppercase tracking-[0.12em] transition ${filter === "featured" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}><Sparkles className="h-3.5 w-3.5" /> Featured</button><button type="button" onClick={() => setFilter("all")} className={`flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[0.63rem] uppercase tracking-[0.12em] transition ${filter === "all" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}><Grid2X2 className="h-3.5 w-3.5" /> All work</button></div></div>

        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="mt-10">
            {filter === "featured" ? <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]"><Link href={primary.liveLink} target="_blank" rel="noopener noreferrer" className="group surface surface-hover overflow-hidden rounded-3xl"><ProjectImage project={primary} large /><div className="p-6 sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="eyebrow">Featured case / 01</p><h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{primary.title}</h3></div><ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{primary.description}</p><div className="mt-6 flex flex-wrap gap-1.5">{primary.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[0.61rem] uppercase tracking-[0.06em] text-muted-foreground">{tag}</span>)}</div></div></Link><div className="grid gap-5">{secondary.map((project, index) => <Link key={project.title} href={project.liveLink} target="_blank" rel="noopener noreferrer" className="group surface surface-hover overflow-hidden rounded-3xl"><ProjectImage project={project} /><div className="p-5"><div className="flex items-start justify-between gap-3"><div><p className="eyebrow">Featured case / 0{index + 2}</p><h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{project.title}</h3></div><ExternalLink className="h-4 w-4 shrink-0 text-primary" /></div><p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{project.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="font-mono text-[0.6rem] uppercase tracking-[0.05em] text-muted-foreground">{tag}</span>)}</div></div></Link>)}</div></div> : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map((project, index) => <Link key={project.title} href={project.liveLink} target={project.liveLink !== "#projects" ? "_blank" : undefined} rel={project.liveLink !== "#projects" ? "noopener noreferrer" : undefined} className="group surface surface-hover overflow-hidden rounded-3xl"><ProjectImage project={project} /><div className="p-5"><div className="flex items-start justify-between gap-3"><div><p className="eyebrow">Work / {String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{project.title}</h3></div><ArrowUpRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div><p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-1.5">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-secondary/60 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.04em] text-muted-foreground">{tag}</span>)}</div></div></Link>)}</div>}
          </motion.div>
        </AnimatePresence>

        {filter === "featured" && <div className="mt-10"><div className="mb-5 flex items-center gap-3"><Layers3 className="h-4 w-4 text-primary" /><span className="eyebrow">More work / supporting products</span></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{supporting.slice(0, 4).map((project) => <Link key={project.title} href={project.liveLink} target="_blank" rel="noopener noreferrer" className="surface surface-hover rounded-2xl p-4"><div className="flex items-start justify-between gap-3"><h3 className="font-display text-base font-semibold leading-5">{project.title}</h3><ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-primary" /></div><p className="mt-3 font-mono text-[0.61rem] uppercase leading-5 tracking-[0.06em] text-muted-foreground">{project.buildAngle}</p></Link>)}</div></div>}
      </div>
    </section>
  )
}
