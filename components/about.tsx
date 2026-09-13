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
          
          {/* Column 2: Engineering philosophy */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <span className="section-label">02 / Engineering philosophy</span>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl">
                Understand the system. Then make it useful.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                I like the work between a vague problem and a dependable product: asking better questions, choosing simple primitives, and shipping software people can trust.
              </p>
              <div className="space-y-3 border-l border-primary/40 pl-4 text-sm leading-6 text-muted-foreground">
                <p><strong className="text-foreground">Learn deliberately.</strong> Curiosity is part of the implementation.</p>
                <p><strong className="text-foreground">Ship intentionally.</strong> Small, observable steps beat impressive complexity.</p>
                <p><strong className="text-foreground">Keep improving.</strong> Good systems leave room for the next question.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
            >
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-2 flex items-center gap-2 text-primary"><Code size={16} /><span className="text-xs font-mono uppercase tracking-wider">Craft</span></div>
                <p className="text-sm text-muted-foreground">Readable interfaces, resilient APIs, and decisions that hold up over time.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-2 flex items-center gap-2 text-primary"><Cpu size={16} /><span className="text-xs font-mono uppercase tracking-wider">Connect</span></div>
                <p className="text-sm text-muted-foreground">Frontend, data, AI, and infrastructure treated as one connected product.</p>
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
