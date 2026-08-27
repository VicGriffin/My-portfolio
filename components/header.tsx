"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false) }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = "" }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-border/80 bg-background/85 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="section-wrap flex h-[76px] items-center justify-between"><Link href="#home" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Victor Kamau home"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground font-display text-[0.65rem] font-bold text-background transition-transform duration-300 group-hover:rotate-[-8deg]">VK</span><span className="font-display text-base font-semibold tracking-tight">Victor Kamau<span className="text-primary">.</span></span></Link><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navLinks.map((link) => <Link key={link.name} href={link.href} className="group relative py-2 font-mono text-[0.63rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition hover:text-foreground"><span>{link.name}</span><span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" /></Link>)}</nav><div className="flex items-center gap-2"><Link href="#contact" className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 font-mono text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition hover:bg-accent sm:inline-flex">Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" /></Link><ThemeToggle /><button type="button" onClick={() => setIsOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2.5 font-mono text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition hover:border-primary/50 hover:text-foreground lg:hidden" aria-label="Open navigation menu" aria-expanded={isOpen}><Menu className="h-4 w-4" /><span className="hidden sm:inline">Menu</span></button></div></div>
      </header>

      <AnimatePresence>
        {isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-foreground/55 backdrop-blur-sm lg:hidden" onClick={closeMenu} aria-hidden="true" />}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-y-0 right-0 z-[90] flex w-[min(100%,420px)] flex-col bg-foreground px-6 py-6 text-background shadow-2xl sm:px-9" role="dialog" aria-modal="true" aria-label="Mobile navigation"><div className="flex items-center justify-between"><Link href="#home" onClick={closeMenu} className="font-display text-lg font-semibold">Victor Kamau<span className="text-primary">.</span></Link><button type="button" onClick={closeMenu} className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-background/65 transition hover:text-background" aria-label="Close navigation menu">Close <X className="h-5 w-5" /></button></div><div className="mt-20"><p className="font-mono text-[0.63rem] uppercase tracking-[0.2em] text-primary">Navigate / 00</p><nav className="mt-7" aria-label="Mobile navigation">{navLinks.map((link, index) => <Link key={link.name} href={link.href} onClick={closeMenu} className="group flex items-baseline justify-between border-b border-background/15 py-4 font-display text-4xl font-medium tracking-[-.04em] transition hover:text-primary"><span>{link.name}</span><span className="font-mono text-[0.6rem] text-background/45">0{index + 1}</span></Link>)}</nav></div><div className="mt-auto border-t border-background/15 pt-6"><p className="font-mono text-[0.63rem] uppercase tracking-[0.2em] text-primary">Contact / 01</p><a href="mailto:vickamau20@gmail.com" className="mt-4 flex items-center gap-3 text-sm text-background/75 transition hover:text-background"><Mail className="h-4 w-4 text-primary" />vickamau20@gmail.com</a><a href="tel:+254112570156" className="mt-3 flex items-center gap-3 text-sm text-background/75 transition hover:text-background"><Phone className="h-4 w-4 text-primary" />+254 112 570 156</a><p className="mt-3 flex items-center gap-3 text-sm text-background/75"><MapPin className="h-4 w-4 text-primary" />Nairobi, Kenya</p><div className="mt-7 flex items-center gap-4"><Link href="https://github.com/VicGriffin" target="_blank" rel="noopener noreferrer" className="text-background/60 transition hover:text-primary" aria-label="GitHub"><Github className="h-4 w-4" /></Link><Link href="https://www.linkedin.com/in/victor-kamau-987951392" target="_blank" rel="noopener noreferrer" className="text-background/60 transition hover:text-primary" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></Link></div></div></motion.aside>}
      </AnimatePresence>
    </>
  )
}
