"use client"

import { useEffect, useRef } from "react"

interface BulgarianParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  rotation: number
  rotationSpeed: number
  symbol: string
  color: string
}

interface BulgarianParticlesProps {
  density?: number
  speed?: number
}

export default function BulgarianParticles({ density = 30, speed = 0.3 }: BulgarianParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<BulgarianParticle[]>([])
  const animationRef = useRef<number>()

  const bulgarianSymbols = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ь",
    "Ю",
    "Я",
  ]
  const colors = ["#dc2626", "#eab308", "#ffffff", "rgba(220, 38, 38, 0.7)", "rgba(234, 179, 8, 0.7)"]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): BulgarianParticle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.4 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        symbol: bulgarianSymbols[Math.floor(Math.random() * bulgarianSymbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < density; i++) {
        particlesRef.current.push(createParticle())
      }
    }

    const drawParticle = (particle: BulgarianParticle) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.font = `${particle.size}px serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)

      // Add text shadow for better visibility
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)"
      ctx.shadowBlur = 2
      ctx.shadowOffsetX = 1
      ctx.shadowOffsetY = 1

      ctx.fillText(particle.symbol, 0, 0)
      ctx.restore()
    }

    const updateParticle = (particle: BulgarianParticle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.rotation += particle.rotationSpeed

      // Wrap around edges
      if (particle.x < -50) particle.x = canvas.width + 50
      if (particle.x > canvas.width + 50) particle.x = -50
      if (particle.y < -50) particle.y = canvas.height + 50
      if (particle.y > canvas.height + 50) particle.y = -50

      // Subtle opacity animation
      particle.opacity += Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.001
      particle.opacity = Math.max(0.05, Math.min(0.5, particle.opacity))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        updateParticle(particle)
        drawParticle(particle)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [density, speed])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
