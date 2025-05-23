import { BookOpen, Globe, Users, Star } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface ValuesSectionProps {
  dictionary: Dictionary
  lang: Locale
}

export default function ValuesSection({ dictionary, lang }: ValuesSectionProps) {
  const values = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: lang === "bg" ? "Качествено образование" : "Ποιοτική εκπαίδευση",
      description:
        lang === "bg"
          ? "Съвременни методи на преподаване, съчетани с традиционни български ценности"
          : "Σύγχρονες μέθοδοι διδασκαλίας συνδυασμένες με παραδοσιακές βουλγαρικές αξίες",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: lang === "bg" ? "Културна идентичност" : "Πολιτιστική ταυτότητα",
      description:
        lang === "bg"
          ? "Запазване и предаване на българските традиции и обичаи на новите поколения"
          : "Διατήρηση και μετάδοση των βουλγαρικών παραδόσεων και εθίμων στις νέες γενιές",
      image:
        "https://images.unsplash.com/photo-1544531586-fbb6cf2ad6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: lang === "bg" ? "Семейна атмосфера" : "Οικογενειακή ατμόσφαιρα",
      description:
        lang === "bg"
          ? "Топла и приветлива среда, където всяко дете се чувства като у дома си"
          : "Ζεστό και φιλόξενο περιβάλλον όπου κάθε παιδί νιώθει σαν στο σπίτι του",
      image:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: lang === "bg" ? "Индивидуален подход" : "Εξατομικευμένη προσέγγιση",
      description:
        lang === "bg"
          ? "Внимание към всяко дете и неговите уникални потребности и способности"
          : "Προσοχή σε κάθε παιδί και τις μοναδικές του ανάγκες και ικανότητες",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{lang === "bg" ? "Нашите ценности" : "Οι αξίες μας"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {lang === "bg"
              ? "Основните принципи, които ръководят нашата работа и формират характера на учениците ни"
              : "Οι βασικές αρχές που καθοδηγούν τη δουλειά μας και διαμορφώνουν τον χαρακτήρα των μαθητών μας"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="hover-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">{value.icon}</div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
