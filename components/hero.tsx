"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Available for work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold text-balance"
          >
            Victor Kamau
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl lg:text-3xl gradient-text font-semibold"
          >
            Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            Crafting exceptional digital experiences with modern web technologies. Specialized in building
            scalable, performant applications that delight users.
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground"
          >
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
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="https://github.com" target="_blank">
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <Button size="lg" variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </Link>

            <Link href="#contact">
              <Button size="lg" className="gap-2">
                Get In Touch
              </Button>
            </Link>

            <Button size="lg" variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Animated rings */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full border border-primary/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Central profile image with glass effect */}
          <motion.div
            className="relative w-64 h-64 rounded-full overflow-hidden glass-effect"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/profile.jpg"
              alt="Victor Kamau"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute top-20 right-0 px-4 py-2 rounded-full bg-card border border-border shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-sm font-semibold">3+ Years</div>
            <div className="text-xs text-muted-foreground">Experience</div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-0 px-4 py-2 rounded-full bg-card border border-border shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            <div className="text-sm font-semibold">Full Stack</div>
            <div className="text-xs text-muted-foreground">Developer</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
