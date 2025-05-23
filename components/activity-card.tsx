"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import type { Dictionary } from "@/lib/types"

interface ActivityCardProps {
  activity: {
    id: number
    title: string
    description: string
    image: string
    videoUrl?: string
    hasVideo: boolean
  }
  dictionary: Dictionary
}

export default function ActivityCard({ activity, dictionary }: ActivityCardProps) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="hover-card bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        {showVideo && activity.videoUrl ? (
          <video controls autoPlay className="w-full h-full object-cover" onEnded={() => setShowVideo(false)}>
            <source src={activity.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            <Image
              src={activity.image || "/placeholder.svg"}
              alt={activity.title}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
            {activity.hasVideo && (
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <div className="bg-white rounded-full p-4 hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </button>
            )}
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
        <p className="text-muted-foreground mb-4">{activity.description}</p>

        {activity.hasVideo && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="text-primary hover:text-primary/80 font-medium text-sm"
          >
            {showVideo ? dictionary.common.close : dictionary.activities.watchVideo}
          </button>
        )}
      </div>
    </div>
  )
}
