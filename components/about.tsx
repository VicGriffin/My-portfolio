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
          
          {/* Column 2: Crazy Designer Section */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 animate-pulse" />
                <div className="relative px-6 py-4 bg-background dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 rounded-lg">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-400/50 text-pink-600 dark:text-pink-400 font-bold text-xs uppercase">
                    <span className="animate-pulse">⚡</span>
                    <span>About Me</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Building the Future
                </h2>
                <p className="text-lg font-bold text-foreground dark:text-white leading-relaxed drop-shadow-sm">
                  Software engineer crafting blazing-fast digital experiences that push boundaries and inspire innovation.
                </p>
                <p className="text-base font-semibold text-foreground/85 dark:text-foreground/90 leading-relaxed drop-shadow-sm">
                  Based in 🇰🇪 Nairobi, I specialize in full-stack development, cloud architecture, and AI integration. Every line of code is an opportunity to create excellence.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg opacity-60 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative flex gap-3 p-4 rounded-lg bg-background dark:bg-slate-900 border border-emerald-400/30 hover:border-emerald-400/80 transition-all">
                  <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white flex-shrink-0 shadow-lg">
                    <Code size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-foreground dark:text-white">Quality First</h4>
                    <p className="text-xs text-foreground/60 dark:text-foreground/70 mt-1 leading-relaxed">
                      Type-safe, performant, and beautiful code. No compromises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg opacity-60 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative flex gap-3 p-4 rounded-lg bg-background dark:bg-slate-900 border border-orange-400/30 hover:border-orange-400/80 transition-all">
                  <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 text-white flex-shrink-0 shadow-lg">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-foreground dark:text-white">Full-Stack Power</h4>
                    <p className="text-xs text-foreground/60 dark:text-foreground/70 mt-1 leading-relaxed">
                      From cloud infrastructure to pixel-perfect UX. Complete mastery.
                    </p>
                  </div>
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
