"use client"

import { useEffect, useRef } from "react"

interface ClickParticle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
  type: "heart" | "star" | "circle"
}

export default function ClickParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<ClickParticle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createClickParticle = (x: number, y: number): ClickParticle => {
      const colors = ["#dc2626", "#eab308", "#ffffff", "#f97316"]
      const types: ("heart" | "star" | "circle")[] = ["heart", "star", "circle"]

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8 - 2,
        life: 60,
        maxLife: 60,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
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

      // Left curve
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

      // Right curve
      ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight)

      ctx.closePath()
      ctx.fill()
    }

    const drawParticle = (particle: ClickParticle) => {
      const alpha = particle.life / particle.maxLife
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = particle.color

      switch (particle.type) {
        case "circle":
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

    const updateParticle = (particle: ClickParticle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += 0.2 // gravity
      particle.life--
      particle.size *= 0.98
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

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Create multiple particles for each click
      for (let i = 0; i < 8; i++) {
        particlesRef.current.push(createClickParticle(x, y))
      }
    }

    const handleResize = () => {
      resizeCanvas()
    }

    resizeCanvas()
    animate()

    document.addEventListener("click", handleClick)
    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      document.removeEventListener("click", handleClick)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ background: "transparent" }} />
  )
}
