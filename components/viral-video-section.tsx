"use client"

import { VideoPlayer } from "./video-player"
import { useLanguage } from "@/hooks/use-language"

export function ViralVideoSection() {
  const { language } = useLanguage()

  const content = {
    bg: {
      title: "Моментите, които ни правят горди",
      subtitle: "Вижте как нашите деца растат с българския дух и традиции",
      description: 'Всеки ден в училище "Родна Стряха" е изпълнен с радост, учене и незабравими спомени.',
    },
    gr: {
      title: "Οι στιγμές που μας κάνουν περήφανους",
      subtitle: "Δείτε πώς τα παιδιά μας μεγαλώνουν με το βουλγαρικό πνεύμα και τις παραδόσεις",
      description: 'Κάθε μέρα στο σχολείο "Rodna Striha" είναι γεμάτη χαρά, μάθηση και αξέχαστες αναμνήσεις.',
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
          <p className="text-xl text-red-600 mb-6 font-medium">{currentContent.subtitle}</p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{currentContent.description}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <VideoPlayer
            src="/videos/school-highlight.mp4"
            title="School Highlight Video"
            className="aspect-video"
            showControls={true}
          />
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-8 space-x-4">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </section>
  )
}
