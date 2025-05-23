import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import EventsCalendar from "@/components/events-calendar"
import StatsSection from "@/components/stats-section"
import ValuesSection from "@/components/values-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import PartnersSection from "@/components/partners-section"
import SchoolLifeGallery from "@/components/school-life-gallery"
import InteractiveDocuments from "@/components/interactive-documents"
import ParticlesBackground from "@/components/particles-background"
import BulgarianParticles from "@/components/bulgarian-particles"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen flex flex-col relative">
      {/* Background Particles */}
      <ParticlesBackground
        density={40}
        speed={0.3}
        colors={["rgba(220, 38, 38, 0.3)", "rgba(234, 179, 8, 0.3)", "rgba(255, 255, 255, 0.2)"]}
        types={["circle", "star", "heart"]}
        interactive={true}
      />

      {/* Bulgarian Letters Particles */}
      <BulgarianParticles density={20} speed={0.2} />

      <Header dictionary={dictionary} lang={lang} />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 text-white">
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
            <Link
              href={lang === "bg" ? "/about" : "/el/about"}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-md transition-colors hover-particle-trigger"
            >
              {dictionary.home.learnMore}
            </Link>
            <Link
              href={lang === "bg" ? "/enrollment" : "/el/enrollment"}
              className="inline-flex items-center justify-center bg-white text-primary border border-primary hover:bg-primary/10 text-lg px-8 py-4 rounded-md transition-colors hover-particle-trigger"
            >
              {dictionary.home.enrollChild}
            </Link>
            <Link
              href={lang === "bg" ? "/gallery" : "/el/gallery"}
              className="inline-flex items-center justify-center bg-white text-primary border border-primary hover:bg-primary/10 text-lg px-8 py-4 rounded-md transition-colors hover-particle-trigger"
            >
              {dictionary.home.viewGallery}
            </Link>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center text-gray-800 hover-card">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm">{lang === "bg" ? "Години опит" : "Χρόνια εμπειρίας"}</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center text-gray-800 hover-card">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm">{lang === "bg" ? "Ученици" : "Μαθητές"}</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center text-gray-800 hover-card">
              <div className="text-2xl font-bold text-primary">Б2</div>
              <div className="text-sm">{lang === "bg" ? "Сертификация" : "Πιστοποίηση"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Documents Section */}
      <div className="relative z-10">
        <InteractiveDocuments dictionary={dictionary} lang={lang} />
      </div>

      {/* Stats Section */}
      <div className="relative z-10">
        <StatsSection dictionary={dictionary} lang={lang} />
      </div>

      {/* Values Section */}
      <div className="relative z-10">
        <ValuesSection dictionary={dictionary} lang={lang} />
      </div>

      {/* School Life Gallery */}
      <div className="relative z-10">
        <SchoolLifeGallery dictionary={dictionary} lang={lang} />
      </div>

      {/* Why Choose Us Section */}
      <div className="relative z-10">
        <WhyChooseUs dictionary={dictionary} lang={lang} />
      </div>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{dictionary.home.upcomingEvents}</h2>
          <EventsCalendar lang={lang} />
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="relative z-10">
        <TestimonialsSection dictionary={dictionary} lang={lang} />
      </div>

      {/* Partners Section */}
      <div className="relative z-10">
        <PartnersSection dictionary={dictionary} lang={lang} />
      </div>

      <div className="relative z-10">
        <Footer dictionary={dictionary} lang={lang} />
      </div>
    </main>
  )
}
