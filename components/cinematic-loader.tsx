"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CinematicLoader() {
  const [loading, setLoading] = useState(true)
  const [showText, setShowText] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Only run on client-side
    const timerText = setTimeout(() => setShowText(true), 600)
    const timerEnd = setTimeout(() => setLoading(false), 3200)

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    interface AssemblyParticle {
      x: number
      y: number
      targetX: number
      targetY: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
    }

    const particles: AssemblyParticle[] = []
    const particleCount = 150

    // Targets around a central radius representing a logo core
    const centerX = width / 2
    const centerY = height / 2

    for (let i = 0; i < particleCount; i++) {
      // Random starting positions on screen borders (gathering from outer bounds)
      let x = 0, y = 0
      const border = Math.floor(Math.random() * 4)
      if (border === 0) { // Top
        x = Math.random() * width
        y = -20
      } else if (border === 1) { // Right
        x = width + 20
        y = Math.random() * height
      } else if (border === 2) { // Bottom
        x = Math.random() * width
        y = height + 20
      } else { // Left
        x = -20
        y = Math.random() * height
      }

      // Targets: Concentric circular shells creating a glowing logo sphere
      const angle = Math.random() * Math.PI * 2
      const radius = 60 + Math.random() * 80
      const targetX = centerX + Math.cos(angle) * radius
      const targetY = centerY + Math.sin(angle) * radius

      particles.push({
        x,
        y,
        targetX,
        targetY,
        vx: 0,
        vy: 0,
        size: Math.random() * 1.5 + 0.5,
        color: i % 2 === 0 ? "244, 63, 94" : "251, 191, 36", // Ruby and Gold
        alpha: Math.random() * 0.5 + 0.5,
      })
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    let progress = 0

    const draw = () => {
      ctx.fillStyle = "rgba(2, 2, 5, 0.25)" // trail effect
      ctx.fillRect(0, 0, width, height)

      progress += 0.008

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Smooth gravitational pull towards target coordinates
        const dx = p.targetX - p.x
        const dy = p.targetY - p.y
        
        // Acceleration increases as we load
        const pull = Math.min(0.08, progress * 0.02)
        
        p.vx += dx * pull - p.vx * 0.1
        p.vy += dy * pull - p.vy * 0.1

        p.x += p.vx
        p.y += p.vy

        // If very close to target, oscillate slightly to look active and fluid
        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
          p.x += Math.sin(Date.now() * 0.003 + i) * 0.2
          p.y += Math.cos(Date.now() * 0.003 + i) * 0.2
        }

        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Core light bridge connections
        if (i < particles.length - 1 && progress > 0.4) {
          const nextP = particles[i + 1]
          const distDx = p.x - nextP.x
          const distDy = p.y - nextP.y
          const dist = Math.sqrt(distDx * distDx + distDy * distDy)
          if (dist < 40) {
            ctx.strokeStyle = `rgba(251, 191, 36, ${0.1 * (1 - dist / 40)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(nextP.x, nextP.y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      clearTimeout(timerText)
      clearTimeout(timerEnd)
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020205] select-none overflow-hidden"
        >
          {/* Dust gather canvas */}
          <canvas ref={canvasRef} className="absolute inset-0" />

          {/* Logo center piece */}
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* Ambient gold glow sphere */}
            <div className="absolute w-[250px] h-[250px] rounded-full bg-amber-500/10 blur-[80px]" />

            {/* Glowing Logo ring */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-36 h-36 rounded-full border border-amber-500/20 flex items-center justify-center"
            >
              <div className="absolute inset-1.5 rounded-full border border-dashed border-rose-500/25 animate-slow-spin" />
              
              <AnimatePresence>
                {showText && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                  >
                    {/* Glowing golden initials */}
                    <span className="text-4xl font-mono tracking-widest font-black text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                      VK
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 mt-2 font-mono">
                      SYSTEM INIT
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Loading text status indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -bottom-16 flex flex-col items-center"
            >
              <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                <span>ASSEMBLING QUANTUM ENGINE</span>
              </div>
              <div className="w-32 h-[1px] bg-neutral-800 mt-2 overflow-hidden relative">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-rose-500 to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
