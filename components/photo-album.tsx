"use client"
import { X } from "lucide-react"
import { useState } from "react"

interface PhotoAlbumProps {
  album?: { photos?: string[] }
  dictionary?: any // Replace 'any' with a more specific type if available
  onClose: () => void
}

export default function PhotoAlbum({ album, dictionary, onClose }: PhotoAlbumProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  // Safety checks
  if (!album || !album.photos || !Array.isArray(album.photos)) {
    return null
  }

  const photos = album.photos || []
  const safePhotoCount = photos.length || 0

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-4xl max-h-[90vh] overflow-auto relative">
        <button onClick={onClose} className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1">
          <X size={20} />
        </button>
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <img key={index} src={photo || "/placeholder.svg"} alt={`Photo ${index + 1}`} className="rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}
