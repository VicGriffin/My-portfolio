"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
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
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "px-3 pt-3 sm:px-6" : "px-5 pt-5 sm:px-8"}`}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 sm:px-4 ${isScrolled ? "border-border/80 bg-background/85 shadow-xl shadow-black/5 backdrop-blur-xl dark:shadow-black/20" : "border-transparent bg-transparent"}`}>
        <Link href="#home" onClick={closeMenu} className="group flex items-center gap-2.5 rounded-full px-2 py-1.5" aria-label="Victor Kamau home">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground font-display text-xs font-bold text-background transition-transform duration-300 group-hover:rotate-[-8deg]">VK</span>
          <span className="font-display text-sm font-semibold tracking-tight">Victor Kamau</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="rounded-full px-3.5 py-2 font-mono text-[0.67rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link href="#contact" className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition hover:bg-primary/90 sm:flex">
            Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <ThemeToggle />
          <button type="button" onClick={() => setIsOpen((value) => !value)} className="rounded-full p-2.5 text-muted-foreground transition hover:bg-secondary hover:text-foreground md:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen}>
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-3 mt-2 rounded-3xl border border-border bg-card/95 p-3 shadow-2xl backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={closeMenu} className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition hover:bg-secondary hover:text-foreground">
                {link.name} <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
