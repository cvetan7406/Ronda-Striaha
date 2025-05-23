import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamMember from "@/components/team-member"
import Timeline from "@/components/timeline"

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  // Sample team members - in a real app, these would come from an API or database
  const teamMembers = [
    {
      id: 1,
      name: "Мария Иванова",
      role: lang === "bg" ? "Директор" : "Principal",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        lang === "bg"
          ? "Нашата мисия е да запазим българския дух жив в сърцата на нашите деца."
          : "Our mission is to keep the Bulgarian spirit alive in the hearts of our children.",
    },
    {
      id: 2,
      name: "Петър Петров",
      role: lang === "bg" ? "Учител по български език" : "Bulgarian Language Teacher",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        lang === "bg"
          ? "Езикът е мостът към нашите корени и идентичност."
          : "Language is the bridge to our roots and identity.",
    },
    {
      id: 3,
      name: "Елена Димитрова",
      role: lang === "bg" ? "Учител по история" : "History Teacher",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        lang === "bg"
          ? "Историята ни учи кои сме и накъде отиваме."
          : "History teaches us who we are and where we are going.",
    },
    {
      id: 4,
      name: "Георги Николов",
      role: lang === "bg" ? "Учител по музика" : "Music Teacher",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        lang === "bg"
          ? "Музиката е универсален език, който свързва душите ни."
          : "Music is a universal language that connects our souls.",
    },
  ]

  // Sample timeline events
  const timelineEvents = [
    {
      id: 1,
      year: "2015",
      title: lang === "bg" ? "Основаване на училището" : "Ίδρυση του σχολείου",
      description:
        lang === "bg"
          ? 'Българско училище "Родна стряха" отваря за първи път врати на 03/10/2015 в Арадиппу, Атиену, Ксилофагу.'
          : "Το βουλγαρικό σχολείο Rodna Striha ανοίγει για πρώτη φορά τις πόρτες του στις 03/10/2015 στην Αραδίππου, Αθηένου, Ξυλοφάγου.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      year: "2018",
      title: lang === "bg" ? "Стартиране на подготовка за Б2" : "Έναρξη προετοιμασίας για Β2",
      description:
        lang === "bg"
          ? "От учебната 2018/2019 стартира подготовка на кандидат-студенти за изпит за ниво на владеене на български език Б2."
          : "Από το σχολικό έτος 2018/2019 ξεκινά η προετοιμασία υποψήφιων φοιτητών για εξέταση επιπέδου Β2 βουλγαρικής γλώσσας.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      year: "2019",
      title: lang === "bg" ? "Първи изпит Б2" : "Πρώτη εξέταση Β2",
      description:
        lang === "bg"
          ? "Провеждане на първия изпит за ниво Б2 съвместно с Департамента за езиково обучение на Софийски университет."
          : "Διεξαγωγή της πρώτης εξέτασης επιπέδου Β2 σε συνεργασία με το Τμήμα Γλωσσικής Εκπαίδευσης του Πανεπιστημίου της Σόφιας.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      year: "2020",
      title: lang === "bg" ? "Дистанционно обучение" : "Εξ αποστάσεως εκπαίδευση",
      description:
        lang === "bg"
          ? "Въвеждане на възможност за дистанционно обучение за ученици от по-отдалечените райони."
          : "Εισαγωγή δυνατότητας εξ αποστάσεως εκπαίδευσης για μαθητές από πιο απομακρυσμένες περιοχές.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      year: "2025",
      title: lang === "bg" ? "10 години опит и доверие" : "10 χρόνια εμπειρίας και εμπιστοσύνης",
      description:
        lang === "bg"
          ? "Десет години градим опит и доверие в преподаването на български език. Подкрепяме се от МОН и над 20 университета."
          : "Δέκα χρόνια χτίζουμε εμπειρία και εμπιστοσύνη στη διδασκαλία της βουλγαρικής γλώσσας. Υποστηριζόμαστε από το Υπουργείο και πάνω από 20 πανεπιστήμια.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      <div className="pt-24">
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">{dictionary.about.title}</h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-center mb-12">{dictionary.about.description}</p>

              <div className="relative h-80 mb-12">
                <div className="absolute inset-0 bg-primary/10 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Rodna Striha School"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.about.team}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.about.timeline}</h2>

            <Timeline events={timelineEvents} />
          </div>
        </section>
      </div>

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
