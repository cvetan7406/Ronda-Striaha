import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import EventsCalendar from "@/components/events-calendar"
import StatsSection from "@/components/stats-section"
import ValuesSection from "@/components/values-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import PartnersSection from "@/components/partners-section"
import SchoolLifeGallery from "@/components/school-life-gallery"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      {/* Hero Section with Video Background */}
      <section className="video-container">
        <video autoPlay muted loop playsInline>
          <source
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="video-overlay">
          <div className="max-w-6xl mx-auto text-center px-4">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
                alt="Bulgarian Flag"
                className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 fade-in">{dictionary.home.welcome}</h1>
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 fade-in max-w-4xl mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              {dictionary.home.subWelcome}
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 fade-in mb-8"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                href={`/${lang}/about`}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4"
              >
                {dictionary.home.learnMore}
              </Button>
              <Button
                href={`/${lang}/enrollment`}
                size="lg"
                variant="outline"
                className="bg-white text-primary border-primary hover:bg-primary/10 text-lg px-8 py-4"
              >
                {dictionary.home.enrollChild}
              </Button>
              <Button
                href={`/${lang}/gallery`}
                size="lg"
                variant="outline"
                className="bg-white text-primary border-primary hover:bg-primary/10 text-lg px-8 py-4"
              >
                {dictionary.home.viewGallery}
              </Button>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center text-gray-800">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm">{lang === "bg" ? "Години опит" : "Χρόνια εμπειρίας"}</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center text-gray-800">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm">{lang === "bg" ? "Ученици" : "Μαθητές"}</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center text-gray-800">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm">{lang === "bg" ? "Учители" : "Δάσκαλοι"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection dictionary={dictionary} lang={lang} />

      {/* Values Section */}
      <ValuesSection dictionary={dictionary} lang={lang} />

      {/* School Life Gallery */}
      <SchoolLifeGallery dictionary={dictionary} lang={lang} />

      {/* Why Choose Us Section */}
      <WhyChooseUs dictionary={dictionary} lang={lang} />

      {/* Upcoming Events Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{dictionary.home.upcomingEvents}</h2>
          <EventsCalendar lang={lang} />
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection dictionary={dictionary} lang={lang} />

      {/* Partners Section */}
      <PartnersSection dictionary={dictionary} lang={lang} />

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
