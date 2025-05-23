"use client"

import { useState } from "react"
import Image from "next/image"

interface TeamMemberProps {
  member: {
    id: number
    name: string
    role: string
    image: string
    quote: string
  }
}

export default function TeamMember({ member }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="hover-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />

        {isHovered && (
          <div className="absolute inset-0 bg-primary/80 flex items-center justify-center p-6 transition-opacity duration-300">
            <p className="text-white text-center italic">&ldquo;{member.quote}&rdquo;</p>
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-muted-foreground">{member.role}</p>
      </div>
    </div>
  )
}
