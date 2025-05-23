"use client"

import { useState } from "react"
import Image from "next/image"
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Dictionary } from "@/lib/types"

interface Photo {
  id: number
  src: string
  alt: string
}

interface PhotoAlbumProps {
  album: {
    id: number
    title: string
    description: string
    coverImage: string
    photoCount: number
    photos: Photo[]
  }
  dictionary: Dictionary
}

export default function PhotoAlbum({ album, dictionary }: PhotoAlbumProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const openGallery = () => {
    setIsOpen(true)
    setCurrentPhotoIndex(0)
  }

  const closeGallery = () => {
    setIsOpen(false)
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % album.photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + album.photos.length) % album.photos.length)
  }

  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index)
  }

  return (
    <>
      <div className="hover-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={openGallery}>
        <div className="relative h-48">
          <Image
            src={album.coverImage || "/placeholder.svg"}
            alt={album.title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="text-white text-center">
              <Images className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">{dictionary.gallery.viewAlbum}</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {album.photoCount} {dictionary.gallery.viewAlbum.toLowerCase()}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{album.title}</h3>
          <p className="text-muted-foreground text-sm">{album.description}</p>
        </div>
      </div>

      {/* Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white">
              <div>
                <h3 className="text-xl font-bold">{album.title}</h3>
                <p className="text-sm opacity-80">
                  {currentPhotoIndex + 1} / {album.photos.length}
                </p>
              </div>
              <button
                onClick={closeGallery}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <Image
                  src={album.photos[currentPhotoIndex].src || "/placeholder.svg"}
                  alt={album.photos[currentPhotoIndex].alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center p-4 space-x-4">
              <button
                onClick={prevPhoto}
                className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2 max-w-md overflow-x-auto">
                {album.photos.slice(0, 10).map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => goToPhoto(index)}
                    className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-colors ${
                      index === currentPhotoIndex ? "border-white" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                {album.photos.length > 10 && (
                  <div className="flex items-center text-white text-sm px-2">+{album.photos.length - 10}</div>
                )}
              </div>

              <button
                onClick={nextPhoto}
                className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
