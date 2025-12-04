"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-2"
            >
              Victor Kamau
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-3xl text-muted-foreground font-medium"
            >
              Software Engineer
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={18} />
              <span>+254112570156</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={18} />
              <span>vickamau20@gmail.com</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <Link href="https://github.com/VicGriffin" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/victor-muthui-9351b3355" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="rounded-full px-6">Contact Me</Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-background/80 backdrop-blur-sm"></div>
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="text-primary/50"
              >
                <User size={120} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
