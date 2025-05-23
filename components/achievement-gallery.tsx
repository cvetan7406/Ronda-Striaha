"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, Medal, Trophy } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface AchievementGalleryProps {
  dictionary: Dictionary
  lang: Locale
}

export default function AchievementGallery({ dictionary, lang }: AchievementGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const achievements = [
    {
      id: 1,
      title: lang === "bg" ? "Първо място в танцов конкурс" : "First place in dance competition",
      category: "dance",
      type: "medal",
      image: "/placeholder.svg?height=300&width=400",
      year: "2023",
    },
    {
      id: 2,
      title: lang === "bg" ? "Награда за най-добра театрална постановка" : "Award for best theatrical performance",
      category: "theater",
      type: "trophy",
      image: "/placeholder.svg?height=300&width=400",
      year: "2023",
    },
    {
      id: 3,
      title:
        lang === "bg"
          ? "Сертификат за участие в културен фестивал"
          : "Certificate for participation in cultural festival",
      category: "culture",
      type: "certificate",
      image: "/placeholder.svg?height=300&width=400",
      year: "2022",
    },
    {
      id: 4,
      title: lang === "bg" ? "Златен медал за народни танци" : "Gold medal for folk dances",
      category: "dance",
      type: "medal",
      image: "/placeholder.svg?height=300&width=400",
      year: "2022",
    },
    {
      id: 5,
      title: lang === "bg" ? "Награда за най-добра детска пиеса" : "Award for best children's play",
      category: "theater",
      type: "trophy",
      image: "/placeholder.svg?height=300&width=400",
      year: "2021",
    },
    {
      id: 6,
      title: lang === "bg" ? "Диплома за изкуство и занаяти" : "Diploma for arts and crafts",
      category: "culture",
      type: "certificate",
      image: "/placeholder.svg?height=300&width=400",
      year: "2021",
    },
  ]

  const categories = [
    { id: "all", name: lang === "bg" ? "Всички" : "Όλα" },
    { id: "dance", name: lang === "bg" ? "Танци" : "Χοροί" },
    { id: "theater", name: lang === "bg" ? "Театър" : "Θέατρο" },
    { id: "culture", name: lang === "bg" ? "Култура" : "Πολιτισμός" },
  ]

  const filteredAchievements =
    selectedCategory === "all"
      ? achievements
      : achievements.filter((achievement) => achievement.category === selectedCategory)

  const getIcon = (type: string) => {
    switch (type) {
      case "medal":
        return <Medal className="w-5 h-5 text-yellow-500" />
      case "trophy":
        return <Trophy className="w-5 h-5 text-yellow-500" />
      case "certificate":
        return <Award className="w-5 h-5 text-blue-500" />
      default:
        return <Award className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category.id
                ? "bg-primary text-white"
                : "bg-white text-foreground hover:bg-primary/10"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => (
          <div key={achievement.id} className="hover-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={achievement.image || "/placeholder.svg"}
                alt={achievement.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white rounded-full p-2">{getIcon(achievement.type)}</div>
              <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-sm font-bold">
                {achievement.year}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm">{achievement.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {lang === "bg" ? "Няма постижения в тази категория." : "Δεν υπάρχουν επιτεύγματα σε αυτή την κατηγορία."}
          </p>
        </div>
      )}
    </div>
  )
}
