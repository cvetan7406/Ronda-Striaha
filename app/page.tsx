import { ViralVideoSection } from "@/components/viral-video-section"
import { NewsVideoSection } from "@/components/news-video-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section would go here */}
      <section className="h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Добре дошли в училище "Родна Стряха"</h1>
          <p className="text-xl">Запазваме българския език, култура и дух</p>
        </div>
      </section>

      {/* Viral Video Section - Right after hero */}
      <ViralVideoSection />

      {/* Other sections would go here */}

      {/* News Video Section */}
      <NewsVideoSection />
    </main>
  )
}
