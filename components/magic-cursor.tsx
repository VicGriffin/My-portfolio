"use client"

import { useEffect, useRef, useState } from "react"

export default function MagicCursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const position = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!supportsFinePointer || reducedMotion) return
    setEnabled(true)

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * 0.18
      position.current.y += (target.current.y - position.current.y) * 0.18
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`
      frame.current = window.requestAnimationFrame(animate)
    }
    const onMove = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY }
      setIsVisible(true)
      const interactive = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]")
      setLabel(interactive?.dataset.cursor ?? "")
    }
    const onLeave = () => setIsVisible(false)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.documentElement.addEventListener("mouseleave", onLeave)
    frame.current = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      if (frame.current) window.cancelAnimationFrame(frame.current)
    }
  }, [])

  if (!enabled) return null

  return <div ref={cursorRef} className={`magic-cursor ${isVisible ? "magic-cursor-visible" : ""} ${label ? "magic-cursor-labeled" : ""}`} aria-hidden="true"><span>{label}</span></div>
}
