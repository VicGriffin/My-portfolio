"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const exitDelay = reducedMotion ? 220 : 1050
    const exitTimer = window.setTimeout(() => setIsLeaving(true), exitDelay)
    const removeTimer = window.setTimeout(() => setIsVisible(false), exitDelay + (reducedMotion ? 120 : 720))
    const heroResetTimer = window.setTimeout(() => window.scrollTo(0, 0), exitDelay + 800)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
      window.clearTimeout(heroResetTimer)
      window.history.scrollRestoration = previousScrollRestoration
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    if (!isVisible) document.body.style.overflow = ""
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className={`preloader ${isLeaving ? "preloader-leaving" : ""}`} role="status" aria-label="Loading Victor Kamau portfolio">
      <div className="preloader-topline"><span>VK / portfolio</span><span>2026</span></div>
      <div className="preloader-center"><p className="preloader-label">Software engineer · Nairobi</p><p className="preloader-word">Loading<span className="text-primary">.</span></p></div>
      <div className="preloader-progress"><span className="preloader-progress-bar" /></div>
    </div>
  )
}
