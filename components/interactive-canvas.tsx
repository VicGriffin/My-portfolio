"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  z: number
  px: number
  py: number
  size: number
  color: string
  speedX: number
  speedY: number
  speedZ: number
  originalSize: number
  opacity: number
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: Particle[] = []
    const particleCount = Math.min(100, Math.floor((width * height) / 15000))
    const fov = 400 // camera field of view / depth perspective

    // High quality metallic colors from our palette
    const colors = [
      "rgba(244, 63, 94, 0.65)",  // ruby red
      "rgba(56, 189, 248, 0.65)", // cerulean blue
      "rgba(251, 191, 36, 0.65)",  // luxury gold
      "rgba(168, 218, 220, 0.4)",  // frosted silver
    ]

    // Initialize 3D particles in a sphere/cluster format
    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 150 + Math.random() * 250

      particles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        px: 0,
        py: 0,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        speedZ: (Math.random() - 0.5) * 0.15,
        originalSize: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Map to -0.5 to 0.5
      mouseRef.current.targetX = (e.clientX / window.innerWidth) - 0.5
      mouseRef.current.targetY = (e.clientY / window.innerHeight) - 0.5
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    let rotationX = 0
    let rotationY = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Apply linear interpolation for ultra-smooth camera shift (Apple/Stripe style inertia)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      // Constant slow background orbit, influenced by mouse position
      rotationY += 0.0015 + mouseRef.current.x * 0.005
      rotationX += 0.0008 + mouseRef.current.y * 0.005

      const sinY = Math.sin(rotationY)
      const cosY = Math.cos(rotationY)
      const sinX = Math.sin(rotationX)
      const cosX = Math.cos(rotationX)

      // Project particles to 2D
      const projected: { x: number; y: number; z: number; size: number; color: string; opacity: number }[] = []

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Natural micro-vibration
        p.x += p.speedX
        p.y += p.speedY
        p.z += p.speedZ

        // Sphere bounds return force
        const d = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z)
        if (d > 450) {
          p.speedX *= -1
          p.speedY *= -1
          p.speedZ *= -1
        }

        // Apply 3D Rotations
        // Rotate around Y axis
        let x1 = p.x * cosY - p.z * sinY
        let z1 = p.z * cosY + p.x * sinY

        // Rotate around X axis
        let y2 = p.y * cosX - z1 * sinX
        let z2 = z1 * cosX + p.y * sinX

        // 3D Perspective projection formula
        const perspective = fov / (fov + z2)
        const screenX = width / 2 + x1 * perspective
        const screenY = height / 2 + y2 * perspective

        // Calculate size based on depth (closer = larger)
        const size = Math.max(0.5, p.originalSize * perspective)
        const depthOpacity = Math.max(0.1, p.opacity * perspective)

        p.px = screenX
        p.py = screenY

        projected.push({
          x: screenX,
          y: screenY,
          z: z2,
          size,
          color: p.color,
          opacity: depthOpacity,
        })
      }

      // Draw constellation connections (neural network lines)
      const maxDistance = 140
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]

          const dx = p1.px - p2.px
          const dy = p1.py - p2.py
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            // Fades as distance increases and based on depth
            const alpha = (1 - dist / maxDistance) * 0.12 * Math.min(p1.opacity, p2.opacity)
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.px, p1.py)
            ctx.lineTo(p2.px, p2.py)
            ctx.stroke()
          }
        }
      }

      // Draw particles (rear ones first for physical correctness)
      projected.sort((a, b) => b.z - a.z)

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i]
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity

        // Draw soft volumetric glowing particles
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        if (p.size > 2) {
          // Draw a outer halo for a luxury volumetric light feeling
          ctx.fillStyle = p.color
          ctx.globalAlpha = p.opacity * 0.15
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1.0 // restore opacity
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 bg-transparent block"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
