import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import EventsCalendar from "@/components/events-calendar"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      {/* Hero Section with Video Background */}
      <section className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-overlay">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 fade-in">{dictionary.home.welcome}</h1>
            <p className="text-xl md:text-2xl mb-8 fade-in" style={{ animationDelay: "0.2s" }}>
              {dictionary.home.subWelcome}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
              <Button href={`/${lang}/about`} size="lg" className="bg-primary hover:bg-primary/90 text-white">
                {dictionary.home.learnMore}
              </Button>
              <Button
                href={`/${lang}/enrollment`}
                size="lg"
                variant="outline"
                className="bg-white text-primary border-primary hover:bg-primary/10"
              >
                {dictionary.home.enrollChild}
              </Button>
              <Button
                href={`/${lang}/gallery`}
                size="lg"
                variant="outline"
                className="bg-white text-primary border-primary hover:bg-primary/10"
              >
                {dictionary.home.viewGallery}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{dictionary.home.upcomingEvents}</h2>
          <EventsCalendar lang={lang} />
        </div>
      </section>

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
