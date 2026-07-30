"use client"

import { motion } from "framer-motion"
import { Code, Terminal, Cpu, Heart, Shield } from "lucide-react"
import Image from "next/image"

export default function About() {
  const codeSnippet = `// Core Identity Schema
const engineer = {
  name: "Victor Kamau",
  origin: "Nairobi, Kenya",
  focus: ["Full Stack", "AI Integration", "Cloud native DevOps"],
  values: {
    craftsmanship: "extremely high",
    reliability: "absolute",
    performance: "Lighthouse 100"
  },
  ecosystem: ["TypeScript", "Next.js", "PERN Stack", "Docker", "Kubernetes"]
};

// Autonomic compilation success...
deploy(engineer).then(monitor_active_nodes);`

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/3 pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Meticulous Holographic Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div className="glass-card rounded-lg border border-border p-6 flex flex-col items-center justify-center relative overflow-hidden group h-full">
              {/* Clean framed image */}
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-border group-hover:border-primary/20 transition-colors shadow-sm bg-card">
                <Image
                  src="/images/victor-profile.jpg"
                  alt="Victor Kamau"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </div>
          </motion.div>
          
          {/* Column 2: Main Story & Highlight Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-primary font-semibold text-xs uppercase">
                <span>About Me</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight text-balance">
                Crafting elegant digital experiences.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                I&apos;m a software engineer based in Nairobi, Kenya, passionate about building performant, user-focused applications. I specialize in full-stack development with modern web technologies and cloud infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              <div className="flex gap-3 p-4 rounded-lg bg-secondary border border-border hover:border-primary/20 transition-colors">
                <div className="mt-0.5 p-2 rounded-lg bg-card border border-border text-primary flex-shrink-0">
                  <Code size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Quality First</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Clean code, type safety, and thoughtful architecture.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-lg bg-secondary border border-border hover:border-primary/20 transition-colors">
                <div className="mt-0.5 p-2 rounded-lg bg-card border border-border text-primary flex-shrink-0">
                  <Cpu size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Full-Stack</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    From cloud infrastructure to polished user interfaces.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Animated Code Console Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <div className="glass-card rounded-lg border border-border overflow-hidden shadow-sm relative group h-full flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                    <div className="w-2 h-2 rounded-full bg-primary/20" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Terminal size={12} />
                    <span>skills.txt</span>
                  </div>
                </div>

                {/* Code body */}
                <div className="p-4 font-mono text-xs text-muted-foreground leading-relaxed bg-card overflow-x-auto">
                  <pre className="text-xs text-primary select-all font-mono">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-secondary px-4 py-3 border-t border-border flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>UTF-8</span>
                <span>Ready</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
