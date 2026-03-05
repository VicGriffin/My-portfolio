"use client"

import { Github, Heart, Linkedin, Mail, MapPin, Phone, Sparkles, ArrowUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ bottom: "10%", left: "10%" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Brand section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Victor Kamau
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Passionate Software Engineer crafting exceptional digital experiences with modern web technologies.
              Specialized in building scalable, performant applications that delight users.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Nairobi, Kenya
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +254112570156
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                vickamau20@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6">Connect With Me</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button size="icon" variant="outline" asChild className="rounded-full">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button size="icon" variant="outline" asChild className="rounded-full">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button size="icon" variant="outline" asChild className="rounded-full">
                <a href="mailto:vickamau20@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <Button onClick={scrollToTop} size="sm" variant="outline" className="w-full gap-2">
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} Victor Kamau. All rights reserved. Made with
            <Heart className="w-3 h-3 inline mx-1 text-primary" />
            in Nairobi
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
