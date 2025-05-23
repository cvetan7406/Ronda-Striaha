import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AgeGroupCard from "@/components/age-group-card"
import SubjectCard from "@/components/subject-card"
import StudyPlanAccordion from "@/components/study-plan-accordion"

export default async function EducationPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  const ageGroups = [
    {
      id: 1,
      title: dictionary.education.preschool,
      description:
        lang === "bg"
          ? "За деца от 3 до 6 години. Основи на българския език чрез игри, песни и творчески дейности."
          : "Για παιδιά από 3 έως 6 ετών. Βάσεις της βουλγαρικής γλώσσας μέσω παιχνιδιών, τραγουδιών και δημιουργικών δραστηριοτήτων.",
      image: "/placeholder.svg?height=300&width=400",
      ageRange: "3-6 " + (lang === "bg" ? "години" : "ετών"),
    },
    {
      id: 2,
      title: dictionary.education.primary,
      description:
        lang === "bg"
          ? "За деца от 7 до 11 години. Систематично изучаване на българския език, литература и история."
          : "Για παιδιά από 7 έως 11 ετών. Συστηματική μελέτη της βουλγαρικής γλώσσας, λογοτεχνίας και ιστορίας.",
      image: "/placeholder.svg?height=300&width=400",
      ageRange: "7-11 " + (lang === "bg" ? "години" : "ετών"),
    },
    {
      id: 3,
      title: dictionary.education.secondary,
      description:
        lang === "bg"
          ? "За деца от 12 до 15 години. Задълбочено изучаване на българската култура и традиции."
          : "Για παιδιά από 12 έως 15 ετών. Εμβαθυμένη μελέτη του βουλγαρικού πολιτισμού και των παραδόσεων.",
      image: "/placeholder.svg?height=300&width=400",
      ageRange: "12-15 " + (lang === "bg" ? "години" : "ετών"),
    },
  ]

  const subjects = [
    {
      id: 1,
      title: dictionary.education.bulgarianLang,
      description:
        lang === "bg"
          ? "Изучаване на българския език, граматика, правопис и литература."
          : "Μελέτη της βουλγαρικής γλώσσας, γραμματικής, ορθογραφίας και λογοτεχνίας.",
      icon: "📚",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      title: dictionary.education.bulgarianHistory,
      description:
        lang === "bg"
          ? "История на България от древността до наши дни."
          : "Ιστορία της Βουλγαρίας από την αρχαιότητα έως σήμερα.",
      icon: "🏛️",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      title: dictionary.education.geography,
      description:
        lang === "bg"
          ? "География на България и Балканския полуостров."
          : "Γεωγραφία της Βουλγαρίας και της Βαλκανικής χερσονήσου.",
      icon: "🗺️",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 4,
      title: dictionary.education.music,
      description:
        lang === "bg" ? "Българска народна музика, песни и танци." : "Βουλγαρική λαϊκή μουσική, τραγούδια και χοροί.",
      icon: "🎵",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 5,
      title: dictionary.education.culturalHeritage,
      description:
        lang === "bg"
          ? "Българските традиции, обичаи и културно наследство."
          : "Βουλγαρικές παραδόσεις, έθιμα και πολιτιστική κληρονομιά.",
      icon: "🎭",
      color: "bg-red-100 text-red-800",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">{dictionary.education.title}</h1>
            <p className="text-xl max-w-4xl mx-auto text-muted-foreground">{dictionary.education.subtitle}</p>
          </div>
        </section>

        {/* Age Groups Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.education.ageGroups}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ageGroups.map((group) => (
                <AgeGroupCard key={group.id} group={group} />
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.education.subjects}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </div>
        </section>

        {/* Study Plans Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.education.studyPlans}</h2>
            <div className="max-w-4xl mx-auto">
              <StudyPlanAccordion dictionary={dictionary} lang={lang} />
            </div>
          </div>
        </section>
      </div>

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
