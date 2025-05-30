"use client"

import { VideoPlayer } from "./video-player"
import { useLanguage } from "@/hooks/use-language"
import { Calendar, Users, Award } from "lucide-react"

export function NewsVideoSection() {
  const { language } = useLanguage()

  const content = {
    bg: {
      title: "Новини и Събития",
      subtitle: "Последните моменти от живота на училището",
      videoTitle: "Специални моменти от училището",
      newsItems: [
        {
          title: "Празник на буквите",
          date: "24 май 2024",
          description: "Тържествено отбелязване на Деня на българската просвета и култура",
          icon: Award,
        },
        {
          title: "Коледно тържество",
          date: "20 декември 2023",
          description: "Магически коледен концерт с участието на всички класове",
          icon: Users,
        },
        {
          title: "Първи учебен ден",
          date: "15 септември 2023",
          description: "Тържествено откриване на новата учебна година",
          icon: Calendar,
        },
      ],
    },
    gr: {
      title: "Νέα και Εκδηλώσεις",
      subtitle: "Οι τελευταίες στιγμές από τη ζωή του σχολείου",
      videoTitle: "Ειδικές στιγμές από το σχολείο",
      newsItems: [
        {
          title: "Γιορτή των γραμμάτων",
          date: "24 Μαΐου 2024",
          description: "Επίσημος εορτασμός της Ημέρας Βουλγαρικής Παιδείας και Πολιτισμού",
          icon: Award,
        },
        {
          title: "Χριστουγεννιάτικη γιορτή",
          date: "20 Δεκεμβρίου 2023",
          description: "Μαγική χριστουγεννιάτικη συναυλία με τη συμμετοχή όλων των τάξεων",
          icon: Users,
        },
        {
          title: "Πρώτη μέρα σχολείου",
          date: "15 Σεπτεμβρίου 2023",
          description: "Επίσημη έναρξη της νέας σχολικής χρονιάς",
          icon: Calendar,
        },
      ],
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
          <p className="text-xl text-red-600 font-medium">{currentContent.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{currentContent.videoTitle}</h3>
            <VideoPlayer
              src="/videos/school-highlight.mp4"
              title="School News Video"
              className="aspect-video"
              showControls={true}
            />
          </div>

          {/* News Items */}
          <div className="space-y-6">
            {currentContent.newsItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg border-l-4 border-red-600 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-red-600 font-medium mb-2">{item.date}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
