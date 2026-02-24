"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 px-4 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-gradient opacity-10 animate-gradient"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "6s" }}></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Available for work</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">Victor Kamau</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-4xl text-muted-foreground font-medium"
            >
              Software Engineer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-lg text-balance"
            >
              Crafting exceptional digital experiences with modern web technologies. 
              Specialized in building scalable, performant applications that delight users.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <MapPin size={16} className="text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <Phone size={16} className="text-primary" />
                <span>+254112570156</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <Mail size={16} className="text-primary" />
                <span>vickamau20@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="https://github.com/VicGriffin" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full glass-effect hover:scale-110 transition-transform">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/victor-kamau-987951392" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full glass-effect hover:scale-110 transition-transform">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="rounded-full px-8 py-3 gradient-bg hover:scale-105 transition-transform shadow-lg">
                <Mail className="mr-2 w-4 h-4" />
                Get In Touch
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full px-8 py-3 hover:scale-105 transition-transform">
                <Download className="mr-2 w-4 h-4" />
                Resume
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-4 rounded-full border-2 border-purple-500/20"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-8 rounded-full border-2 border-pink-500/20"
            />
            
            {/* Central profile image with glass effect */}
            <div className="absolute inset-12 rounded-full overflow-hidden glass-effect shadow-2xl">
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/victor-profile.jpg"
                  alt="Victor Kamau"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </motion.div>
            </div>
            
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg"
            >
              3+ Years
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute -bottom-4 -left-4 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold shadow-lg"
            >
              Full Stack
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}