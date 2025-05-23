import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ActivityCard from "@/components/activity-card"
import AchievementGallery from "@/components/achievement-gallery"

export default async function ActivitiesPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  const activities = [
    {
      id: 1,
      title: dictionary.activities.folkDance,
      description:
        lang === "bg"
          ? "Нашата танцова група изучава традиционни български хора и ръченици. Децата се учат на координация, ритъм и се запознават с българския фолклор."
          : "Η χορευτική μας ομάδα μελετά παραδοσιακούς βουλγαρικούς χορούς. Τα παιδιά μαθαίνουν συντονισμό, ρυθμό και εξοικειώνονται με τη βουλγαρική λαϊκή παράδοση.",
      image: "/placeholder.svg?height=300&width=500",
      videoUrl: "/placeholder.svg?height=300&width=500",
      hasVideo: true,
    },
    {
      id: 2,
      title: dictionary.activities.theater,
      description:
        lang === "bg"
          ? "Детската театрална група поставя спектакли по български приказки и легенди. Развиваме творческите способности и самочувствието на децата."
          : "Η παιδική θεατρική ομάδα παρουσιάζει παραστάσεις βασισμένες σε βουλγαρικά παραμύθια και θρύλους. Αναπτύσσουμε τις δημιουργικές ικανότητες και την αυτοπεποίθηση των παιδιών.",
      image: "/placeholder.svg?height=300&width=500",
      hasVideo: false,
    },
    {
      id: 3,
      title: dictionary.activities.workshops,
      description:
        lang === "bg"
          ? "Организираме работилници за изработване на мартеници, великденски яйца и други традиционни български занаяти."
          : "Διοργανώνουμε εργαστήρια για την κατασκευή μαρτένικων, πασχαλινών αυγών και άλλων παραδοσιακών βουλγαρικών χειροτεχνιών.",
      image: "/placeholder.svg?height=300&width=500",
      hasVideo: false,
    },
    {
      id: 4,
      title: dictionary.activities.performances,
      description:
        lang === "bg"
          ? "Участваме в празници и представления, където децата показват наученото и се гордеят с българската си идентичност."
          : "Συμμετέχουμε σε γιορτές και παραστάσεις, όπου τα παιδιά παρουσιάζουν αυτά που έμαθαν και είναι περήφανα για τη βουλγαρική τους ταυτότητα.",
      image: "/placeholder.svg?height=300&width=500",
      hasVideo: false,
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">{dictionary.activities.title}</h1>
            <p className="text-xl max-w-4xl mx-auto text-muted-foreground">{dictionary.activities.subtitle}</p>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} dictionary={dictionary} />
              ))}
            </div>
          </div>
        </section>

        {/* Achievement Gallery Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.activities.achievements}</h2>
            <AchievementGallery dictionary={dictionary} lang={lang} />
          </div>
        </section>
      </div>

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
