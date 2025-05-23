"use client"

import { useState } from "react"
import { Play, Maximize, RotateCcw } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface VirtualTourProps {
  dictionary: Dictionary
  lang: Locale
}

export default function VirtualTour({ dictionary, lang }: VirtualTourProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20">
          {!isActive ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <h3 className="text-xl font-bold mb-2">{dictionary.gallery.view3D}</h3>
                <p className="text-muted-foreground mb-4">
                  {lang === "bg"
                    ? "Разгледайте нашите класни стаи в 360° панорама"
                    : "Εξερευνήστε τις αίθουσές μας σε πανόραμα 360°"}
                </p>
                <button
                  onClick={() => setIsActive(true)}
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {lang === "bg" ? "Започни обиколката" : "Ξεκινήστε την περιήγηση"}
                </button>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0">
              {/* Simulated 3D viewer */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-50"></div>

                {/* Control overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/70 text-white px-3 py-2 rounded text-sm">
                    {lang === "bg" ? "Класна стая 1А" : "Αίθουσα 1Α"}
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-black/70 text-white p-2 rounded hover:bg-black/80 transition-colors">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button className="bg-black/70 text-white p-2 rounded hover:bg-black/80 transition-colors">
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hotspots */}
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform"></div>
                </div>
                <div className="absolute top-2/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform"></div>
                </div>

                {/* Navigation hint */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded text-sm">
                  {lang === "bg"
                    ? "Използвайте мишката за навигация • Кликнете върху точките за информация"
                    : "Χρησιμοποιήστε το ποντίκι για πλοήγηση • Κάντε κλικ στις κουκκίδες για πληροφορίες"}
                </div>
              </div>
            </div>
          )}
        </div>

        {isActive && (
          <div className="p-6 border-t">
            <div className="flex flex-wrap gap-4">
              <button className="bg-muted hover:bg-muted-foreground/20 px-4 py-2 rounded transition-colors">
                {lang === "bg" ? "Класна стая 1А" : "Αίθουσα 1Α"}
              </button>
              <button className="bg-muted hover:bg-muted-foreground/20 px-4 py-2 rounded transition-colors">
                {lang === "bg" ? "Класна стая 2Б" : "Αίθουσα 2Β"}
              </button>
              <button className="bg-muted hover:bg-muted-foreground/20 px-4 py-2 rounded transition-colors">
                {lang === "bg" ? "Библиотека" : "Βιβλιοθήκη"}
              </button>
              <button className="bg-muted hover:bg-muted-foreground/20 px-4 py-2 rounded transition-colors">
                {lang === "bg" ? "Актова зала" : "Αίθουσα εκδηλώσεων"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
