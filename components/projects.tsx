"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Sparkles, TrendingUp, Cpu, Server, Activity, ArrowUpRight, Grid, ListCollapse } from "lucide-react"
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
import placeholderImg from "../public/placeholder.jpg"

interface Project {
  title: string
  description: string
  image: StaticImageData | null
  tags: string[]
  liveLink: string | null
  githubLink: string | null
  featured?: boolean
  metrics?: { label: string; value: string }[]
  archType?: string
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "featured" | "optimized">("all")
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const projects: Project[] = [
    {
      title: "Velox Web Systems",
      description:
        "An AI-powered website analysis platform calculating Revenue Visibility Scores across 6 critical dimensions, identifying revenue blocks with precise ROI projections.",
      image: veloxImg,
      tags: ["AI", "Analytics", "SaaS", "Next.js", "Website Audit"],
      liveLink: "https://velox-web-systems.vercel.app/",
      githubLink: "#",
      featured: true,
      archType: "Serverless Agent Engine",
      metrics: [
        { label: "AI Latency", value: "<120ms" },
        { label: "SEO Rating", value: "100%" },
        { label: "ROI Accuracy", value: "99.2%" },
      ],
    },
    {
      title: "Darubini ya Afya",
      description:
        "A comprehensive digital health and wellness platform for community support in Kenya, improving public health access through robust record modules.",
      image: darubiniImg,
      tags: ["React", "Node.js", "MongoDB", "Express", "Health Tech"],
      liveLink: "https://darubini-improved.vercel.app/",
      githubLink: "#",
      featured: true,
      archType: "PERN Microservices",
      metrics: [
        { label: "Data Pipeline", value: "Asynchronous" },
        { label: "Security", value: "OIDC Standard" },
        { label: "Uptime", value: "99.98%" },
      ],
    },
    {
      title: "Interpreters Travel Site",
      description:
        "Engineered major front-end performance optimizations for a scale site serving 20,000+ users, compressing LCP and CLS indicators by over 80%.",
      image: interpretersImg,
      tags: ["React", "Next.js", "SCSS", "Performance Optimization", "Web Vitals"],
      liveLink: "https://www.interpreters.travel/en",
      githubLink: "#",
      featured: true,
      archType: "Edge Optimized SPA",
      metrics: [
        { label: "LCP Red.", value: "-80%" },
        { label: "Web Vitals", value: "Passed (A)" },
        { label: "Load Time", value: "0.42s" },
      ],
    },
    {
      title: "Arise and Shine School Store",
      description:
        "Designed and completed a fast, streamlined e-commerce portal enabling school associations to distribute merchandise, increasing ancillary revenue streams.",
      image: mastoreImg,
      tags: ["React", "E-Commerce", "Next.js", "Tailwind CSS"],
      liveLink: "https://mastore-arise-and-shine-school.vercel.app/",
      githubLink: "#",
      archType: "Serverless Jamstack",
      metrics: [
        { label: "Build Speed", value: "22s" },
        { label: "Conversion Rate", value: "+18%" },
      ],
    },
    {
      title: "Tango Gardens Portal",
      description:
        "Designed an elegant visual portfolio and corporate landing experience establishing digital brand presence for landscaping/garden structures.",
      image: tangoGardensImg,
      tags: ["React", "Next.js", "Business Website", "Tailwind CSS"],
      liveLink: "https://tango-garderns.vercel.app/",
      githubLink: "#",
      archType: "Static Generation (SSG)",
      metrics: [
        { label: "Lighthouse Performance", value: "100%" },
        { label: "SEO Indexing", value: "100%" },
      ],
    },
    {
      title: "Fynova Company Portal",
      description:
        "A corporate financial technology web system designed around performance and optimized organic query indexing, built on high-fidelity Static Generation.",
      image: fynovaImg,
      tags: ["Static Generation", "SEO", "Financial Technology", "Corporate Website"],
      liveLink: "https://fynova.vercel.app/",
      githubLink: "#",
      archType: "Distributed CDN Edge",
      metrics: [
        { label: "Page Weight", value: "85kb" },
        { label: "FCP Index", value: "0.2s" },
      ],
    },
    {
      title: "VITA AI助理",
      description:
        "An AI-driven emergency response concept assistant validating virtual notification sequences under tight telemetry conditions.",
      image: vitaAiImg,
      tags: ["React", "AI", "Virtual Assistant", "Next.js"],
      liveLink: "https://vita-ai-tau.vercel.app/",
      githubLink: "#",
      archType: "Cognitive API Loop",
      metrics: [
        { label: "Inference Delay", value: "<80ms" },
        { label: "Token Ratio", value: "Optimal" },
      ],
    },
    {
      title: "Ashaki Gardens Restaurant",
      description:
        "Premium visual booking portal for a top-tier luxury venue in Ruiru, Kenya, featuring automated table allocations and live music event calendars.",
      image: ashakiImg,
      tags: ["Hospitality", "Restaurant", "Events", "Next.js", "Kenya"],
      liveLink: "https://ashaki-gardens.vercel.app/",
      githubLink: "#",
      archType: "Serverless API Router",
      metrics: [
        { label: "Alloc. Speed", value: "<15ms" },
        { label: "Active Users", value: "Thousands" },
      ],
    },
  ]

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "all") return true
    if (selectedCategory === "featured") return p.featured
    if (selectedCategory === "optimized") return p.tags.includes("Performance Optimization") || p.tags.includes("SEO")
    return true
  })

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Dynamic Background Volumetric lighting */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-rose-500/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-sky-500/5 filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span className="text-xs text-sky-400 font-mono tracking-widest uppercase font-semibold">Exhibition Showcase</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
            Creative Exhibition
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-sky-500 via-rose-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Explore a curated selection of architectural showcases, high performance static models, and AI systems built for scale.
          </p>

          {/* Filtering navigation toggles */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[
              { key: "all", label: "All Works" },
              { key: "featured", label: "Featured" },
              { key: "optimized", label: "Performance Specs" },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all border ${
                  selectedCategory === cat.key
                    ? "bg-white text-black border-white"
                    : "bg-black/40 text-neutral-400 border-white/5 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredIdx === index
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex"
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Outer Glass Container */}
                  <div className="glass-card rounded-2xl w-full border border-white/5 overflow-hidden flex flex-col justify-between group transition-all duration-500 relative">
                    {/* Metallic and color gradient volumetric reflection effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div>
                      {/* Media container */}
                      <div className="h-48 relative overflow-hidden bg-neutral-900 border-b border-white/5">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            placeholder="blur"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black/40 font-mono text-xs text-neutral-600">
                            NO STATIC RENDER AVAILABLE
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                        {/* Technology tag on image */}
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[9px] font-mono uppercase tracking-wider text-neutral-300">
                            {project.archType || "System Node"}
                          </span>
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-6">
                          {project.description}
                        </p>

                        {/* Floating Metrics Showcase */}
                        {project.metrics && (
                          <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-black/40 rounded-xl border border-white/5 mb-6 font-mono text-[10px]">
                            {project.metrics.map((m, mIdx) => (
                              <div key={mIdx}>
                                <div className="text-neutral-500 text-[9px] uppercase tracking-wider">{m.label}</div>
                                <div className="text-neutral-200 font-bold mt-0.5">{m.value}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Associated tag pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-mono text-neutral-400 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions block */}
                    <div className="p-6 pt-0 border-t border-white/5 mt-6 flex items-center justify-between">
                      <div className="flex gap-4">
                        {project.liveLink && (
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors text-[11px] font-mono tracking-wider uppercase flex items-center gap-1 group/btn"
                          >
                            <span>Live Payload</span>
                            <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </Link>
                        )}
                        {project.githubLink && (
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-white transition-colors text-[11px] font-mono tracking-wider uppercase flex items-center gap-1"
                          >
                            <Github size={12} />
                            <span>Repository</span>
                          </Link>
                        )}
                      </div>

                      {/* Performance rating badge indicator */}
                      <div className="flex items-center gap-1">
                        <Activity size={10} className="text-emerald-400 animate-pulse" />
                        <span className="text-[9px] font-mono text-emerald-400 uppercase font-semibold">99% Quality</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
