"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Grid2X2, Sparkles } from "lucide-react"
import Image from "next/image"
import type { StaticImageData } from "next/image"
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

interface Project { title: string; description: string; image: StaticImageData; tags: string[]; liveLink: string; featured?: boolean; buildAngle: string }

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

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const external = project.liveLink !== "#projects"
  return <Link href={project.liveLink} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} data-cursor="View" className="group grid gap-5 border-b border-border py-6 transition-colors hover:bg-secondary/35 sm:py-8 md:grid-cols-[72px_1fr_250px_28px] md:items-center md:gap-8 md:px-4">
    <span className="font-display text-3xl font-medium tracking-[-.05em] text-muted-foreground/45 transition-colors group-hover:text-primary">{String(index + 1).padStart(2, "0")}</span>
    <div className="min-w-0"><p className="eyebrow">{project.buildAngle}</p><h3 className="mt-2 font-display text-2xl font-medium tracking-[-.035em] transition-colors group-hover:text-primary sm:text-3xl">{project.title}</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:pr-8">{project.description}</p><div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">{project.tags.map((tag) => <span key={tag} className="font-mono text-[0.59rem] uppercase tracking-[0.06em] text-muted-foreground/80">{tag}</span>)}</div></div>
    <div className="relative aspect-[1.6] overflow-hidden rounded-2xl border border-border bg-foreground/5 md:aspect-[1.5] md:opacity-70 md:grayscale-[35%] md:transition-[opacity,filter,transform] md:group-hover:scale-[1.02] md:group-hover:opacity-100 md:group-hover:grayscale-0"><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 250px" className="object-cover" /></div>
    <span className="hidden justify-self-end text-primary md:block"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
  </Link>
}

export default function Projects() {
  const [filter, setFilter] = useState<"featured" | "all">("featured")
  const visible = filter === "featured" ? projects.filter((project) => project.featured) : projects
  return <section id="projects" className="section-space border-b border-border/70"><div className="section-wrap"><div className="relative flex flex-col justify-between gap-8 border-b border-border pb-10 sm:flex-row sm:items-end"><div><p className="section-kicker">05 / Selected work</p><h2 className="display-face max-w-2xl text-4xl font-semibold leading-[.97] sm:text-6xl">Work that gives complex ideas a usable shape.</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">A selection of products, platforms, and digital experiences across AI, health, travel, commerce, fintech, and infrastructure.</p></div><div className="flex shrink-0 gap-1 rounded-full border border-border bg-secondary/60 p-1"><button type="button" onClick={() => setFilter("featured")} className={`flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[0.63rem] uppercase tracking-[0.12em] transition ${filter === "featured" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}><Sparkles className="h-3.5 w-3.5" /> Featured</button><button type="button" onClick={() => setFilter("all")} className={`flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[0.63rem] uppercase tracking-[0.12em] transition ${filter === "all" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}><Grid2X2 className="h-3.5 w-3.5" /> All work</button></div></div><AnimatePresence mode="wait"><motion.div key={filter} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .3 }} className="mt-2">{visible.map((project, index) => <ProjectRow key={project.title} project={project} index={index} />)}</motion.div></AnimatePresence><div className="mt-7 flex items-center justify-between"><span className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-muted-foreground">Showing {visible.length} {filter === "featured" ? "featured" : "total"} projects</span><span className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-muted-foreground"><ExternalLink className="h-3.5 w-3.5 text-primary" /> Hover a row to preview</span></div></div></section>
}
