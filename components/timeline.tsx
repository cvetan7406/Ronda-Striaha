"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

interface TimelineEvent {
  id: number
  year: string
  title: string
  description: string
  image: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
    if (timelineItems) {
      timelineItems.forEach((item) => {
        observer.observe(item)
      })
    }

    return () => {
      if (timelineItems) {
        timelineItems.forEach((item) => {
          observer.unobserve(item)
        })
      }
    }
  }, [])

  return (
    <div ref={timelineRef} className="max-w-4xl mx-auto">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`timeline-item opacity-0 flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } mb-16 last:mb-0`}
        >
          <div className="md:w-1/2 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 p-4 flex flex-col justify-center">
            <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
              {event.year}
            </div>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
