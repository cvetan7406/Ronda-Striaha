import { Users, GraduationCap, Award, Heart } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface StatsSectionProps {
  dictionary: Dictionary
  lang: Locale
}

export default function StatsSection({ dictionary, lang }: StatsSectionProps) {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "200+",
      label: lang === "bg" ? "Активни ученици" : "Ενεργοί μαθητές",
      description: lang === "bg" ? "от различни възрасти" : "από διάφορες ηλικίες",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "20+",
      label: lang === "bg" ? "Години опит" : "Χρόνια εμπειρίας",
      description: lang === "bg" ? "в образованието" : "στην εκπαίδευση",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "50+",
      label: lang === "bg" ? "Награди и отличия" : "Βραβεία και διακρίσεις",
      description: lang === "bg" ? "на национално ниво" : "σε εθνικό επίπεδο",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "100%",
      label: lang === "bg" ? "Удовлетворени родители" : "Ικανοποιημένοι γονείς",
      description: lang === "bg" ? "препоръчват училището" : "συστήνουν το σχολείο",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {lang === "bg" ? "Нашите постижения в цифри" : "Τα επιτεύγματά μας σε αριθμούς"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {lang === "bg"
              ? "Вече 20 години изграждаме мостове между България и Кипър чрез образованието"
              : "Εδώ και 20 χρόνια χτίζουμε γέφυρες μεταξύ Βουλγαρίας και Κύπρου μέσω της εκπαίδευσης"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center hover-card bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
