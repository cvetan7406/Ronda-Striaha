"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, User, ChevronDown, ChevronUp, Share2, Plus } from "lucide-react"
import { addToCalendar, shareOnSocial } from "@/lib/utils"
import type { Dictionary } from "@/lib/types"

interface NewsCardProps {
  article: {
    id: number
    title: string
    excerpt: string
    content: string
    image: string
    date: string
    category: string
    author: string
  }
  dictionary: Dictionary
}

export default function NewsCard({ article, dictionary }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("bg-BG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "events":
        return dictionary.news.festiveEvents
      case "excursions":
        return dictionary.news.excursions
      case "interviews":
        return dictionary.news.interviews
      default:
        return category
    }
  }

  const handleAddToCalendar = () => {
    const eventDate = new Date(article.date)
    const endDate = new Date(eventDate)
    endDate.setHours(endDate.getHours() + 2)

    addToCalendar({
      title: article.title,
      start: eventDate,
      end: endDate,
      description: article.excerpt,
      location: "Арадиппу, Атиену, Ксилофагу, Cyprus",
    })
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    shareOnSocial(platform, url, article.title)
    setShowShareMenu(false)
  }

  return (
    <article className="hover-card bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
          {getCategoryName(article.category)}
        </div>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleAddToCalendar}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
            title={dictionary.news.addToCalendar}
          >
            <Plus className="w-4 h-4 text-primary" />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              title="Share"
            >
              <Share2 className="w-4 h-4 text-primary" />
            </button>

            {showShareMenu && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-2 z-10">
                <button
                  onClick={() => handleShare("facebook")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                >
                  Facebook
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                >
                  Twitter
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                >
                  WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>

        <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(article.date)}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {article.author}
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{isExpanded ? article.content : article.excerpt}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-primary hover:text-primary/80 font-medium text-sm"
        >
          {isExpanded ? (
            <>
              {dictionary.common.close}
              <ChevronUp className="w-4 h-4 ml-1" />
            </>
          ) : (
            <>
              {dictionary.news.readMore}
              <ChevronDown className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </article>
  )
}
