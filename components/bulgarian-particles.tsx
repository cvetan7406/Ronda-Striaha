"use client"

import { useEffect, useRef } from "react"

interface BulgarianParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  letter: string
  rotation: number
  rotationSpeed: number
}

interface BulgarianParticlesProps {
  density?: number
  speed?: number
}

export default function BulgarianParticles({ density = 20, speed = 0.2 }: BulgarianParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<BulgarianParticle[]>([])
  const animationRef = useRef<number>()

  const bulgarianLetters = [
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
        size: Math.random() * 20 + 15,
        opacity: Math.random() * 0.3 + 0.1,
        letter: bulgarianLetters[Math.floor(Math.random() * bulgarianLetters.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
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
      ctx.fillStyle = "#dc2626"
      ctx.font = `${particle.size}px serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)
      ctx.fillText(particle.letter, 0, 0)

      ctx.restore()
    }

    const updateParticle = (particle: BulgarianParticle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.rotation += particle.rotationSpeed

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      particle.y = Math.max(0, Math.min(canvas.height, particle.y))

      // Fade effect
      particle.opacity += (Math.random() - 0.5) * 0.005
      particle.opacity = Math.max(0.05, Math.min(0.4, particle.opacity))
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
