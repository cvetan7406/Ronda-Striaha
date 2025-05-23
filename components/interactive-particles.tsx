"use client"

import { useEffect, useRef } from "react"

interface InteractiveParticle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
  type: "spark" | "star" | "heart"
}

interface InteractiveParticlesProps {
  trigger?: boolean
  x?: number
  y?: number
}

export default function InteractiveParticles({ trigger, x = 0, y = 0 }: InteractiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<InteractiveParticle[]>([])
  const animationRef = useRef<number>()

  const colors = ["#dc2626", "#eab308", "#ffffff", "#f97316", "#ef4444"]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const createBurst = (centerX: number, centerY: number) => {
      const particleCount = 15
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount
        const velocity = Math.random() * 3 + 2
        const particle: InteractiveParticle = {
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 60,
          maxLife: 60,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: ["spark", "star", "heart"][Math.floor(Math.random() * 3)] as "spark" | "star" | "heart",
        }
        particlesRef.current.push(particle)
      }
    }

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const spikes = 5
      const outerRadius = size
      const innerRadius = size * 0.4

      ctx.beginPath()
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius
        const angle = (i * Math.PI) / spikes
        const px = x + Math.cos(angle) * radius
        const py = y + Math.sin(angle) * radius
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.fill()
    }

    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const width = size
      const height = size

      ctx.beginPath()
      const topCurveHeight = height * 0.3
      ctx.moveTo(x, y + topCurveHeight)

      ctx.bezierCurveTo(x, y, x - width / 2, y, x - width / 2, y + topCurveHeight)
      ctx.bezierCurveTo(
        x - width / 2,
        y + (height + topCurveHeight) / 2,
        x,
        y + (height + topCurveHeight) / 2,
        x,
        y + height,
      )
      ctx.bezierCurveTo(
        x,
        y + (height + topCurveHeight) / 2,
        x + width / 2,
        y + (height + topCurveHeight) / 2,
        x + width / 2,
        y + topCurveHeight,
      )
      ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight)

      ctx.closePath()
      ctx.fill()
    }

    const drawParticle = (particle: InteractiveParticle) => {
      const alpha = particle.life / particle.maxLife
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = particle.color

      switch (particle.type) {
        case "spark":
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          break
        case "star":
          drawStar(ctx, particle.x, particle.y, particle.size)
          break
        case "heart":
          drawHeart(ctx, particle.x, particle.y, particle.size)
          break
      }
      ctx.restore()
    }

    const updateParticle = (particle: InteractiveParticle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += 0.1 // gravity
      particle.vx *= 0.99 // friction
      particle.vy *= 0.99
      particle.life--
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((particle) => {
        updateParticle(particle)
        if (particle.life > 0) {
          drawParticle(particle)
          return true
        }
        return false
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    if (trigger) {
      createBurst(x, y)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [trigger, x, y])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ background: "transparent" }} />
  )
}
