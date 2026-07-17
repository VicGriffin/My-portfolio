"use client"

import { Github, Heart, Linkedin, Mail, MapPin, Phone, Terminal, ArrowUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 px-6 overflow-hidden border-t border-white/5 bg-black/40">
      {/* Background Volumetric Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="#home" className="group inline-flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4 text-black font-black" />
              </div>
              <span className="text-lg font-serif font-bold text-white">Victor Kamau</span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Meticulous Software Engineer based in Nairobi, Kenya. Designing cognitive AI structures, highly optimized server routers, and custom distributed topologies.
            </p>
            <div className="space-y-2 text-[11px] font-mono text-neutral-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <span>+254 112 570 156</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-rose-500" />
                <span>vickamau20@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xs font-mono tracking-wider uppercase text-neutral-300 font-bold">
              Quick Directory
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "AI Core", href: "#ai-architect" },
                { name: "DevOps", href: "#devops" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-rose-400 transition-colors"
                  >
                    ➜ {link.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xs font-mono tracking-wider uppercase text-neutral-300 font-bold">
              Social Channels
            </h3>
            <div className="flex gap-3">
              <Link
                href="https://github.com/VicGriffin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/victor-kamau-987951392"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/5 pt-8 flex justify-between items-center"
        >
          <p className="text-xs text-neutral-500 flex items-center gap-1.5 font-mono">
            © {currentYear} Victor Kamau. Built in Nairobi with
            <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
