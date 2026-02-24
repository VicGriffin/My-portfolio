"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer'
    )
    
    interactiveElements.forEach(element => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach(element => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/30 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-primary/5 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      />
    </>
  )
}
