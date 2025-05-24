"use client"

import { useState } from "react"
import { BookOpen, Download, Eye, Calendar, Share2 } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface InteractiveDocumentsProps {
  dictionary: Dictionary
  lang: Locale
}

export default function InteractiveDocuments({ dictionary, lang }: InteractiveDocumentsProps) {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  const documents = [
    {
      id: "mecana-story",
      title: dictionary.documents?.mecana_story || "Мецана история",
      description: dictionary.documents?.story_description || "Прочетете историята на Мецана",
      type: "story",
      icon: <BookOpen className="w-8 h-8" />,
      file: "/documents/mecana-story.html",
      image: "/placeholder.svg?height=300&width=400&text=Мецана",
      color: "from-green-400 to-blue-500",
    },
    {
      id: "invitation",
      title: dictionary.documents?.invitation || "Покана",
      description: dictionary.documents?.invitation_description || "Покана за 24 май 2025",
      type: "invitation",
      icon: <Calendar className="w-8 h-8" />,
      file: "/images/invitation-may24.jpg",
      image: "/images/invitation-may24.jpg",
      color: "from-red-400 to-yellow-500",
    },
  ]

  const openDocument = (docId: string) => {
    setSelectedDocument(docId)
  }

  const closeDocument = () => {
    setSelectedDocument(null)
  }

  const downloadDocument = (file: string, title: string) => {
    // Create a temporary link element
    const link = document.createElement("a")
    link.href = file
    link.download = title.replace(/[^a-z0-9]/gi, "_").toLowerCase() + (file.includes(".html") ? ".html" : ".jpg")
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show success message
    const message = lang === "bg" ? "Файлът се изтегля..." : "Το αρχείο κατεβαίνει..."
    alert(message)
  }

  const copyLink = async (docId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${docId}`
    try {
      await navigator.clipboard.writeText(url)
      alert(lang === "bg" ? "Линкът е копиран!" : "Ο σύνδεσμος αντιγράφηκε!")
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{dictionary.documents?.title || "Документи"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {lang === "bg"
              ? "Разгледайте нашите интерактивни материали и документи"
              : "Εξερευνήστε τα διαδραστικά μας υλικά και έγγραφα"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="hover-card bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => openDocument(doc.id)}
            >
              <div className={`h-48 bg-gradient-to-br ${doc.color} relative overflow-hidden`}>
                <img
                  src={doc.image || "/placeholder.svg"}
                  alt={doc.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=300&width=400&text=" + encodeURIComponent(doc.title)
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full text-primary">{doc.icon}</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openDocument(doc.id)
                    }}
                    className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    {dictionary.documents?.view || "Преглед"}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      downloadDocument(doc.file, doc.title)
                    }}
                    className="flex-1 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {dictionary.documents?.download || "Изтегли"}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      copyLink(doc.id)
                    }}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    {lang === "bg" ? "Копирай линк" : "Αντιγραφή συνδέσμου"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Document Viewer Modal */}
        {selectedDocument && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-6xl max-h-[90vh] w-full overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-bold">{documents.find((d) => d.id === selectedDocument)?.title}</h3>
                <button onClick={closeDocument} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  ✕
                </button>
              </div>

              <div className="p-4 overflow-auto max-h-[calc(90vh-120px)]">
                {selectedDocument === "mecana-story" && (
                  <iframe
                    src="/documents/mecana-story.html"
                    className="w-full h-[600px] border-0 rounded"
                    title="Първи пролетен ден на Мецана"
                    onError={() => {
                      console.error("Failed to load document")
                    }}
                  />
                )}

                {selectedDocument === "invitation" && (
                  <div className="text-center">
                    <img
                      src="/images/invitation-may24.jpg"
                      alt="Покана за 24 май 2025"
                      className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=600&width=800&text=Покана за 24 май 2025"
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="p-4 border-t bg-gray-50">
                <button
                  onClick={() => {
                    const doc = documents.find((d) => d.id === selectedDocument)
                    if (doc) downloadDocument(doc.file, doc.title)
                  }}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 mx-auto"
                >
                  <Download className="w-4 h-4" />
                  {dictionary.documents?.download || "Изтегли"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
