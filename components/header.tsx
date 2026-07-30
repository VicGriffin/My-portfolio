"use client"

import { useState, useEffect } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "AI Core", href: "#ai-architect" },
    { name: "DevOps", href: "#devops" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-background/95 dark:bg-neutral-950/80 backdrop-blur-xl border-border dark:border-white/5 shadow-lg py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#home" className="group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 dark:from-rose-600 dark:to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Terminal className="w-4 h-4 text-black font-black" />
            </div>
            <span className="text-base font-serif font-bold tracking-tight text-foreground dark:text-white">
              Victor Kamau
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                className="text-xs font-mono tracking-wider uppercase text-muted-foreground dark:text-neutral-400 hover:text-foreground dark:hover:text-white transition-colors relative py-1.5 block group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-secondary dark:bg-white/5 text-foreground dark:text-white hover:bg-secondary/80 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background dark:bg-neutral-950 border-t border-border dark:border-white/5 overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono tracking-widest uppercase text-muted-foreground dark:text-neutral-400 hover:text-foreground dark:hover:text-white py-2 border-b border-border dark:border-white/5 last:border-none block"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
