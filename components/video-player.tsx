"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

interface VideoPlayerProps {
  src: string
  title: string
  className?: string
  autoPlay?: boolean
  showControls?: boolean
}

export function VideoPlayer({ src, title, className = "", autoPlay = false, showControls = true }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const togglePlay = () => {
    const video = document.getElementById("video-player") as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      <video
        id="video-player"
        className="w-full h-full object-cover rounded-lg shadow-lg"
        autoPlay={autoPlay}
        muted={autoPlay}
        loop={autoPlay}
        playsInline
        controls={showControls}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        <p className="text-center text-gray-600">Your browser does not support the video tag.</p>
      </video>

      {!showControls && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-200">
            {isPlaying ? <Pause className="w-8 h-8 text-red-600" /> : <Play className="w-8 h-8 text-red-600 ml-1" />}
          </div>
        </button>
      )}
    </div>
  )
}
