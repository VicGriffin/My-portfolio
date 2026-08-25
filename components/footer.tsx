"use client"

import { ArrowUpRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/25">
      <div className="section-wrap py-10"><div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><Link href="#home" className="font-display text-lg font-semibold tracking-tight">Victor Kamau<span className="text-primary">.</span></Link><p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">Software engineer building useful products and dependable systems from Nairobi.</p></div><div className="flex flex-wrap gap-x-5 gap-y-3">{links.map((link) => <Link key={link.label} href={link.href} className="font-mono text-[0.63rem] uppercase tracking-[0.12em] text-muted-foreground transition hover:text-foreground">{link.label}</Link>)}<Link href="#contact" className="font-mono text-[0.63rem] uppercase tracking-[0.12em] text-primary">Contact</Link></div></div><div className="mt-10 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="font-mono text-[0.61rem] uppercase tracking-[0.12em] text-muted-foreground">© {new Date().getFullYear()} Victor Kamau</p><div className="flex items-center gap-3"><Link href="https://github.com/VicGriffin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition hover:text-foreground" aria-label="GitHub"><Github className="h-4 w-4" /></Link><Link href="https://www.linkedin.com/in/victor-kamau-987951392" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition hover:text-foreground" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></Link><Link href="#home" className="ml-3 inline-flex items-center gap-1 font-mono text-[0.61rem] uppercase tracking-[0.12em] text-muted-foreground transition hover:text-foreground">Back to top <ArrowUpRight className="h-3.5 w-3.5" /></Link></div></div></div>
    </footer>
  )
}
