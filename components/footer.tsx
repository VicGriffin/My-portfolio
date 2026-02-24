"use client"

import { Github, Heart, Linkedin, Mail, MapPin, Phone, Sparkles, ArrowUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="group inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Victor Kamau</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate Software Engineer crafting exceptional digital experiences with modern web technologies. 
              Specialized in building scalable, performant applications that delight users.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+254112570156</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
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
          >
            <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
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
          >
            <h3 className="text-lg font-semibold mb-4 gradient-text">Connect With Me</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://github.com/VicGriffin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-effect hover:shadow-lg transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github size={20} className="group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://www.linkedin.com/in/victor-kamau-987951392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-effect hover:shadow-lg transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="mailto:vickamau20@gmail.com"
                  className="p-3 rounded-full glass-effect hover:shadow-lg transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail size={20} className="group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            </div>
            <div className="space-y-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-shadow"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
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
          className="border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Victor Kamau. All rights reserved. Made with
              <Heart size={14} className="text-red-500 animate-pulse" /> in Nairobi
            </p>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-3 rounded-full glass-effect hover:shadow-lg transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:text-primary transition-colors" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
