"use client"

import { useEffect, useRef } from "react"

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const scaleRef = useRef(1)
  const targetScaleRef = useRef(1)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Smooth animation loop
    const animate = () => {
      const { x, y, targetX, targetY } = posRef.current
      
      // Smooth interpolation
      posRef.current.x = x + (targetX - x) * 0.2
      posRef.current.y = y + (targetY - y) * 0.2
      
      // Scale interpolation
      scaleRef.current = scaleRef.current + (targetScaleRef.current - scaleRef.current) * 0.15
      
      // Apply transform - use transform3d for GPU acceleration
      cursor.style.transform = `translate3d(${posRef.current.x - 8}px, ${posRef.current.y - 8}px, 0) scale(${scaleRef.current})`
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX
      posRef.current.targetY = e.clientY
    }

    // Check if hovering over interactive elements
    const handleMouseEnter = () => {
      targetScaleRef.current = 1.5
    }

    const handleMouseLeave = () => {
      targetScaleRef.current = 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Use event delegation for hover detection
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference will-change-transform"
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
    />
  )
}
