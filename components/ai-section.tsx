"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Cpu, MessageSquare, Network, Sparkles, Workflow } from "lucide-react"

interface AgentStep {
  name: string
  status: "idle" | "active" | "success"
  desc: string
  icon: React.ReactNode
}

export default function AiSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  // Timeline Agent steps
  const agentSteps: AgentStep[] = [
    { name: "User Input Proxy", status: "active", desc: "User triggers prompt: 'Optimize regional logistics pipeline in East Africa'", icon: <MessageSquare size={16} /> },
    { name: "Semantic Embedding Check", status: "idle", desc: "Embeddings vector generated, scanning database for local regulatory contexts", icon: <Brain size={16} /> },
    { name: "Cognitive Loop & Tool Decider", status: "idle", desc: "Gemini agent selects PostgreSQL & Geolocation tools dynamically", icon: <Cpu size={16} /> },
    { name: "Parallel Output Compilation", status: "idle", desc: "Stand-alone node execution finished; JSON payload validated & streamed", icon: <Sparkles size={16} /> }
  ]

  // Loop through agent workflow step animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % agentSteps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [agentSteps.length])

  // Neural Network visualizer on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const width = (canvas.width = 450)
    const height = (canvas.height = 320)

    interface Node {
      x: number
      y: number
      layer: number
      pulse: number
      pulseSpeed: number
    }

    const nodes: Node[] = []
    const layers = [4, 6, 5, 3] // Neural network layout nodes per layer
    const layerSpacing = width / (layers.length + 0.5)

    // Build neural nodes coordinates
    layers.forEach((count, lIdx) => {
      const layerX = (lIdx + 0.8) * layerSpacing
      const verticalSpacing = height / (count + 1)
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: layerX,
          y: (i + 1) * verticalSpacing,
          layer: lIdx,
          pulse: Math.random() * Math.PI,
          pulseSpeed: 0.05 + Math.random() * 0.05,
        })
      }
    })

    // Impulse particles firing down synapses
    interface Impulse {
      startX: number
      startY: number
      endX: number
      endY: number
      progress: number
      speed: number
    }
    const impulses: Impulse[] = []

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 18, 0.4)" // clear with trails
      ctx.fillRect(0, 0, width, height)

      // Periodically trigger new impulses from layer 0
      if (Math.random() < 0.1) {
        const startNodes = nodes.filter((n) => n.layer === 0)
        const startNode = startNodes[Math.floor(Math.random() * startNodes.length)]
        const targetNodes = nodes.filter((n) => n.layer === 1)
        const endNode = targetNodes[Math.floor(Math.random() * targetNodes.length)]

        impulses.push({
          startX: startNode.x,
          startY: startNode.y,
          endX: endNode.x,
          endY: endNode.y,
          progress: 0,
          speed: 0.02 + Math.random() * 0.02,
        })
      }

      // Draw synapse connections
      ctx.lineWidth = 0.5
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]
        n1.pulse += n1.pulseSpeed
        
        // Find nodes in the next layer
        const targets = nodes.filter((n) => n.layer === n1.layer + 1)
        targets.forEach((n2) => {
          const intensity = 0.08 + Math.sin(n1.pulse) * 0.04
          ctx.strokeStyle = `rgba(244, 63, 94, ${intensity})`
          ctx.beginPath()
          ctx.moveTo(n1.x, n1.y)
          ctx.lineTo(n2.x, n2.y)
          ctx.stroke()
        })
      }

      // Update and draw impulses
      for (let i = impulses.length - 1; i >= 0; i--) {
        const imp = impulses[i]
        imp.progress += imp.speed

        // Calculate position
        const x = imp.startX + (imp.endX - imp.startX) * imp.progress
        const y = imp.startY + (imp.endY - imp.startY) * imp.progress

        // Glowing impulse particle
        ctx.fillStyle = "#38bdf8"
        ctx.shadowColor = "#38bdf8"
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow

        // If completed, trigger next step or remove
        if (imp.progress >= 1) {
          // Find next targets if not in last layer
          const currentEndNodes = nodes.filter((n) => n.x === imp.endX && n.y === imp.endY)
          if (currentEndNodes.length > 0) {
            const currentLayer = currentEndNodes[0].layer
            if (currentLayer < layers.length - 1) {
              const nextTargets = nodes.filter((n) => n.layer === currentLayer + 1)
              const nextTarget = nextTargets[Math.floor(Math.random() * nextTargets.length)]
              impulses.push({
                startX: imp.endX,
                startY: imp.endY,
                endX: nextTarget.x,
                endY: nextTarget.y,
                progress: 0,
                speed: 0.02 + Math.random() * 0.02,
              })
            }
          }
          impulses.splice(i, 1)
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const size = n.layer === 0 || n.layer === layers.length - 1 ? 5 : 3.5
        const glow = Math.sin(n.pulse) * 4 + 4

        ctx.fillStyle = n.layer === 0 ? "#f43f5e" : n.layer === layers.length - 1 ? "#fbbf24" : "#e2e8f0"
        ctx.shadowColor = ctx.fillStyle as string
        ctx.shadowBlur = glow
        ctx.beginPath()
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section id="ai-architect" className="py-24 px-4 relative overflow-hidden">
      {/* Background Volumetric Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-rose-500/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-sky-500/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4"
          >
            <Brain className="w-4 h-4 text-rose-500" />
            <span className="text-xs text-rose-400 font-mono tracking-widest uppercase">Intelligent Systems</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">
            AI Engineering
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-rose-500 via-sky-500 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Designing cognitive computing solutions, autonomous agent logic, semantic search frameworks, and deep prompt engineering workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Neural Synapse Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-rose-500" />
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-300">Live Cognitive Network</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 animate-pulse">
                  Ready
                </span>
              </div>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Synaptic pulse paths modeling token progression across generative layers. Interactive firing mimics backpropagation tuning.
              </p>
            </div>

            <div className="w-full flex justify-center items-center py-4 bg-black/40 rounded-xl border border-white/5">
              <canvas ref={canvasRef} className="max-w-full h-auto rounded-lg" />
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-400">
              <span>WEIGHT RE-TUNING: DYNAMIC</span>
              <span>BIAS: +0.246s</span>
            </div>
          </motion.div>

          {/* Autonomous Agent Orchestration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-sky-500" />
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-300">Agent Cognitive Workflow</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                  <Sparkles className="w-3 h-3 animate-spin" />
                  <span>Looping</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                A stateful multi-agent system executing parallel subtasks. Watch the loop transition through parsing, vector embedding lookup, reflection, and JSON schema formatting.
              </p>
            </div>

            {/* Steps Timeline Stack */}
            <div className="space-y-3 my-4">
              {agentSteps.map((step, idx) => {
                const isActive = activeStep === idx
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl transition-all duration-500 flex items-start gap-3 border ${
                      isActive
                        ? "bg-sky-500/5 border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.1)] translate-x-1"
                        : "bg-black/20 border-white/5 opacity-50"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-500 ${
                      isActive ? "bg-sky-500 text-black" : "bg-neutral-900 text-neutral-400"
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className={`text-xs font-mono font-bold ${isActive ? "text-sky-400" : "text-neutral-300"}`}>
                          {step.name}
                        </h4>
                        {isActive && (
                          <span className="text-[9px] font-mono bg-sky-400/20 text-sky-300 px-1.5 py-0.2 rounded animate-pulse">
                            ACTIVE NODE
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>AGENT FRAMEWORK: GEMINI-3.5-FLASH</span>
              <span>CONVERGENCE RATIO: 99.8%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
