import { CheckCircle, Heart, Users, Trophy } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface WhyChooseUsProps {
  dictionary: Dictionary
  lang: Locale
}

export default function WhyChooseUs({ dictionary, lang }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: lang === "bg" ? "Опитни учители" : "Έμπειροι δάσκαλοι",
      description:
        lang === "bg"
          ? "Всички наши учители имат дългогодишен опит в преподаването на български език"
          : "Όλοι οι δάσκαλοί μας έχουν πολυετή εμπειρία στη διδασκαλία της βουλγαρικής γλώσσας",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: lang === "bg" ? "Индивидуална грижа" : "Εξατομικευμένη φροντίδα",
      description:
        lang === "bg"
          ? "Малки класове позволяват персонализирано внимание към всяко дете"
          : "Μικρές τάξεις επιτρέπουν εξατομικευμένη προσοχή σε κάθε παιδί",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: lang === "bg" ? "Силна общност" : "Ισχυρή κοινότητα",
      description:
        lang === "bg"
          ? "Част сте от голямо семейство от български семейства в Кипър"
          : "Είστε μέρος μιας μεγάλης οικογένειας βουλγαρικών οικογενειών στην Κύπρο",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: lang === "bg" ? "Доказани резултати" : "Αποδεδειγμένα αποτελέσματα",
      description:
        lang === "bg"
          ? "Нашите ученици постигат отлични резултати в изучаването на българския език"
          : "Οι μαθητές μας επιτυγχάνουν εξαιρετικά αποτελέσματα στην εκμάθηση της βουλγαρικής γλώσσας",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {lang === "bg" ? "Защо да изберете Родна Стряха?" : "Γιατί να επιλέξετε το Rodna Striha;"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {lang === "bg"
                ? "Ние сме повече от училище - ние сме дом за българската култура в Кипър"
                : "Είμαστε περισσότερο από σχολείο - είμαστε σπίτι για τον βουλγαρικό πολιτισμό στην Κύπρο"}
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt={lang === "bg" ? "Щастливи деца в училище" : "Χαρούμενα παιδιά στο σχολείο"}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">
                {lang === "bg" ? "Оценка от родители" : "Αξιολόγηση από γονείς"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
