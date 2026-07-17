"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cloud, Server, Cpu, Terminal, GitBranch, ShieldCheck } from "lucide-react"

interface LogLine {
  id: number
  text: string
  type: "info" | "success" | "warn"
}

export default function DevopsSection() {
  const [logs, setLogs] = useState<LogLine[]>([])
  const [pipelineState, setPipelineState] = useState<"code" | "build" | "test" | "deploy">("code")

  const mockLogs = [
    { text: "git checkout main --force", type: "info" },
    { text: "detecting structural configurations in NextJS payload...", type: "info" },
    { text: "found Dockerfile configuration; optimizing layer cache", type: "info" },
    { text: "docker build -t vickamau/portfolio:latest . --no-cache", type: "info" },
    { text: "STEP 1/9: FROM node:20-alpine AS base", type: "info" },
    { text: "STEP 2/9: RUN apk add --no-cache libc6-compat", type: "info" },
    { text: "STEP 3/9: WORKDIR /app", type: "info" },
    { text: "STEP 4/9: COPY package.json package-lock.json ./", type: "info" },
    { text: "installing production dependencies with NPM cache...", type: "info" },
    { text: "NPM build success. zero fatal vulnerability paths.", type: "success" },
    { text: "running ESLint verification: all imports validated.", type: "success" },
    { text: "running Jest/TypeScript schema test pipeline...", type: "info" },
    { text: "TEST PASSED: components/projects.tsx validation", type: "success" },
    { text: "TEST PASSED: api/endpoints verification", type: "success" },
    { text: "connecting to Cloud Kubernetes cluster: node-sa-east-1", type: "info" },
    { text: "initiating blue-green rolling update sequence", type: "info" },
    { text: "k8s deployment rolled successfully: 3 replicas healthy", type: "success" },
    { text: "Cloud Run routing mapped to https://vickamau.dev/", type: "success" },
  ]

  // Simulate CI/CD logs feeding
  useEffect(() => {
    let logIndex = 0
    let currentLogs: LogLine[] = []

    const interval = setInterval(() => {
      if (logIndex < mockLogs.length) {
        const nextLog = mockLogs[logIndex]
        currentLogs = [...currentLogs, { id: logIndex, text: nextLog.text, type: nextLog.type as "info" | "success" | "warn" }]
        
        // Keep the last 8 lines
        if (currentLogs.length > 8) {
          currentLogs.shift()
        }
        
        setLogs(currentLogs)

        // Set matching pipeline stage based on logIndex
        if (logIndex < 4) {
          setPipelineState("code")
        } else if (logIndex < 10) {
          setPipelineState("build")
        } else if (logIndex < 14) {
          setPipelineState("test")
        } else {
          setPipelineState("deploy")
        }

        logIndex++
      } else {
        logIndex = 0
        currentLogs = []
      }
    }, 1800)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="devops" className="py-24 px-4 relative overflow-hidden">
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4"
          >
            <Cloud className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-emerald-400 font-mono tracking-widest uppercase font-semibold">Infrastructure & Operations</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">
            DevOps & Cloud Architecture
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Architecting secure containerized applications, scaling cloud native systems, and developing automated self-healing CI/CD networks.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* CI/CD Active Pipeline Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-300">Continuous Deploy Core</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Pipeline Active</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Automated orchestration pipeline mapping code checkins directly to highly resilient Kubernetes environments.
              </p>
            </div>

            {/* Simulated Live Terminal */}
            <div className="bg-black/60 rounded-xl border border-white/5 p-4 font-mono text-[11px] min-h-[220px] flex flex-col justify-between mb-4 shadow-inner relative">
              <div className="absolute top-2 right-2 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-700" />
              </div>
              
              <div className="space-y-1.5 overflow-hidden">
                <AnimatePresence>
                  {logs.map((log) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-2 ${
                        log.type === "success"
                          ? "text-emerald-400"
                          : log.type === "warn"
                          ? "text-amber-400"
                          : "text-neutral-300"
                      }`}
                    >
                      <span className="text-neutral-500 select-none">➜</span>
                      <span className="leading-relaxed">{log.text}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="text-[10px] text-neutral-500 border-t border-white/5 pt-2 mt-4 flex justify-between">
                <span>BUFFER_STATUS: STREAMING</span>
                <span>TOTAL NODES: 4</span>
              </div>
            </div>

            {/* Pipeline Stage Indicators */}
            <div className="grid grid-cols-4 gap-2 text-center mt-2">
              {[
                { key: "code", label: "Checkout", icon: <GitBranch size={14} /> },
                { key: "build", label: "Docker Build", icon: <Cpu size={14} /> },
                { key: "test", label: "Lint & Test", icon: <ShieldCheck size={14} /> },
                { key: "deploy", label: "Rollout", icon: <Server size={14} /> },
              ].map((stage) => {
                const isCurrent = pipelineState === stage.key
                return (
                  <div
                    key={stage.key}
                    className={`p-2.5 rounded-lg border transition-all duration-500 flex flex-col items-center justify-center gap-1.5 ${
                      isCurrent
                        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                        : "bg-black/20 border-white/5 text-neutral-500"
                    }`}
                  >
                    <div className={isCurrent ? "text-emerald-400" : "text-neutral-500"}>
                      {stage.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
                      {stage.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Infrastructure Metrics Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-300">Cluster Status Metrics</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  Cluster Live
                </span>
              </div>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Real-time resource allocation profiles. Node auto-scaling rules dynamically scale up replicas as virtual load indices rise.
              </p>
            </div>

            {/* Beautiful visual SVG lines representing metric wave charts */}
            <div className="w-full bg-black/40 rounded-xl border border-white/5 p-4 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                <span>CPU / RAM RESOURCE CONVERGENCE</span>
                <span className="text-emerald-400">HEALHTY - 12%</span>
              </div>

              {/* Dynamic decorative Wave chart */}
              <div className="h-28 relative flex items-end">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  
                  {/* CPU Area wave path */}
                  <path
                    d="M0,80 Q10,40 20,60 T40,30 T60,50 T80,20 T100,15 L100,100 L0,100 Z"
                    fill="url(#cpuGradient)"
                    opacity="0.3"
                  />
                  {/* CPU Stroke path */}
                  <path
                    d="M0,80 Q10,40 20,60 T40,30 T60,50 T80,20 T100,15"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                  />

                  {/* RAM Area wave path */}
                  <path
                    d="M0,90 Q15,70 30,75 T60,55 T90,40 T100,35 L100,100 L0,100 Z"
                    fill="url(#ramGradient)"
                    opacity="0.15"
                  />
                  {/* RAM Stroke path */}
                  <path
                    d="M0,90 Q15,70 30,75 T60,55 T90,40 T100,35"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="1.2"
                  />

                  <defs>
                    <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="ramGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-center border-t border-white/5 pt-2">
                <div>
                  <div className="text-neutral-500">AVG LATENCY</div>
                  <div className="text-neutral-300 mt-0.5">24ms</div>
                </div>
                <div>
                  <div className="text-neutral-500">POD COUNT</div>
                  <div className="text-neutral-300 mt-0.5">3 active</div>
                </div>
                <div>
                  <div className="text-neutral-500">TRAFFIC INDEX</div>
                  <div className="text-neutral-300 mt-0.5">99.98%</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <span>PROV: AWS CLUSTER</span>
              <span>K8S VER: v1.31.2</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
