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
      year: "2004",
      title: lang === "bg" ? "Основаване на училището" : "School Foundation",
      description:
        lang === "bg"
          ? 'Училище "Родна Стряха" е основано от група ентусиасти с цел да съхрани българския език и култура сред децата в Кипър.'
          : "Rodna Striha School was founded by a group of enthusiasts with the aim of preserving the Bulgarian language and culture among children in Cyprus.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      year: "2008",
      title: lang === "bg" ? "Първи випуск" : "First Graduation",
      description:
        lang === "bg"
          ? 'Първият випуск ученици завършва успешно своето образование в училище "Родна Стряха".'
          : "The first class of students successfully completes their education at Rodna Striha School.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      year: "2012",
      title: lang === "bg" ? "Нова сграда" : "New Building",
      description:
        lang === "bg"
          ? "Училището се премества в нова, по-голяма сграда, за да посрещне нарастващия брой ученици."
          : "The school moves to a new, larger building to accommodate the growing number of students.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      year: "2018",
      title: lang === "bg" ? "Разширяване на програмата" : "Program Expansion",
      description:
        lang === "bg"
          ? "Въвеждане на нови предмети и извънкласни дейности за обогатяване на образователната програма."
          : "Introduction of new subjects and extracurricular activities to enrich the educational program.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      year: "2023",
      title: lang === "bg" ? "Най-голямото българско училище в Кипър" : "The Largest Bulgarian School in Cyprus",
      description:
        lang === "bg"
          ? 'Училище "Родна Стряха" се утвърждава като най-голямото българско училище в Кипър с над 200 ученици.'
          : "Rodna Striha School establishes itself as the largest Bulgarian school in Cyprus with over 200 students.",
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
