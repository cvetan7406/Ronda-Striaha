"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  type: "circle" | "star" | "heart" | "book"
}

interface ParticlesBackgroundProps {
  density?: number
  speed?: number
  colors?: string[]
  types?: ("circle" | "star" | "heart" | "book")[]
  interactive?: boolean
}

export default function ParticlesBackground({
  density = 50,
  speed = 0.5,
  colors = ["#dc2626", "#eab308", "#ffffff"],
  types = ["circle", "star", "heart"],
  interactive = true,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
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

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
      }
    }

    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < density; i++) {
        particlesRef.current.push(createParticle())
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

    const drawBook = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const width = size * 1.2
      const height = size

      // Book cover
      ctx.fillRect(x - width / 2, y - height / 2, width, height)

      // Book spine
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fillRect(x - width / 2, y - height / 2, width * 0.1, height)

      // Pages
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.fillRect(x - width / 2 + width * 0.1, y - height / 2 + height * 0.1, width * 0.8, height * 0.8)
    }

    const drawParticle = (particle: Particle) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
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
        case "book":
          drawBook(ctx, particle.x, particle.y, particle.size)
          break
      }
      ctx.restore()
    }

    const updateParticle = (particle: Particle) => {
      // Mouse interaction
      if (interactive) {
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx -= (dx / distance) * force * 0.01
          particle.vy -= (dy / distance) * force * 0.01
        }
      }

      particle.x += particle.vx
      particle.y += particle.vy

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      particle.y = Math.max(0, Math.min(canvas.height, particle.y))

      // Fade effect
      particle.opacity += (Math.random() - 0.5) * 0.01
      particle.opacity = Math.max(0.1, Math.min(0.6, particle.opacity))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        updateParticle(particle)
        drawParticle(particle)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    resizeCanvas()
    initParticles()
    animate()

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [density, speed, colors, types, interactive])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
