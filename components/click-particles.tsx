"use client"

import { useEffect, useState } from "react"
import InteractiveParticles from "./interactive-particles"

export default function ClickParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; trigger: boolean }>>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains("hover-particle-trigger") || target.closest(".hover-particle-trigger")) {
        const newParticle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          trigger: true,
        }

        setParticles((prev) => [...prev, newParticle])

        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
        }, 2000)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <>
      {particles.map((particle) => (
        <InteractiveParticles key={particle.id} trigger={particle.trigger} x={particle.x} y={particle.y} />
      ))}
    </>
  )
}
