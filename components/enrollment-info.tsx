import { Calendar, CreditCard, FileText } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface EnrollmentInfoProps {
  dictionary: Dictionary
  lang: Locale
}

export default function EnrollmentInfo({ dictionary, lang }: EnrollmentInfoProps) {
  const fees = [
    {
      category: lang === "bg" ? "Предучилищна възраст (3-6 години)" : "Προσχολική ηλικία (3-6 ετών)",
      monthly: "€50",
      yearly: "€500",
    },
    {
      category: lang === "bg" ? "Начално образование (7-11 години)" : "Πρωτοβάθμια εκπαίδευση (7-11 ετών)",
      monthly: "€60",
      yearly: "€600",
    },
    {
      category: lang === "bg" ? "Прогимназиално образование (12-15 години)" : "Δευτεροβάθμια εκπαίδευση (12-15 ετών)",
      monthly: "€70",
      yearly: "€700",
    },
  ]

  const deadlines = [
    {
      title: lang === "bg" ? "Ранно записване" : "Πρώιμη εγγραφή",
      date: lang === "bg" ? "До 30 юни" : "Έως 30 Ιουνίου",
      discount: "10%",
    },
    {
      title: lang === "bg" ? "Редовно записване" : "Κανονική εγγραφή",
      date: lang === "bg" ? "До 31 август" : "Έως 31 Αυγούστου",
      discount: "0%",
    },
  ]

  const documents = [
    lang === "bg" ? "Копие от удостоверение за раждане" : "Αντίγραφο πιστοποιητικού γέννησης",
    lang === "bg" ? "Копие от паспорт или лична карта на детето" : "Αντίγραφο διαβατηρίου ή ταυτότητας του παιδιού",
    lang === "bg" ? "Медицинска справка" : "Ιατρική βεβαίωση",
    lang === "bg" ? "Снимки 3x4 см (2 броя)" : "Φωτογραφίες 3x4 εκ. (2 τεμάχια)",
    lang === "bg" ? "Попълнена заявка за записване" : "Συμπληρωμένη αίτηση εγγραφής",
  ]

  return (
    <div className="space-y-8">
      {/* Fees */}
      <div>
        <div className="flex items-center mb-4">
          <CreditCard className="w-5 h-5 mr-2 text-primary" />
          <h3 className="text-xl font-bold">{lang === "bg" ? "Такси за обучение" : "Δίδακτρα"}</h3>
        </div>
        <div className="space-y-4">
          {fees.map((fee, index) => (
            <div key={index} className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{fee.category}</h4>
              <div className="flex justify-between text-sm">
                <span>
                  {lang === "bg" ? "Месечно:" : "Μηνιαίως:"} {fee.monthly}
                </span>
                <span>
                  {lang === "bg" ? "Годишно:" : "Ετησίως:"} {fee.yearly}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deadlines */}
      <div>
        <div className="flex items-center mb-4">
          <Calendar className="w-5 h-5 mr-2 text-primary" />
          <h3 className="text-xl font-bold">{lang === "bg" ? "Срокове за записване" : "Προθεσμίες εγγραφής"}</h3>
        </div>
        <div className="space-y-4">
          {deadlines.map((deadline, index) => (
            <div key={index} className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{deadline.title}</h4>
                  <p className="text-sm text-muted-foreground">{deadline.date}</p>
                </div>
                {deadline.discount !== "0%" && (
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">
                    -{deadline.discount} {lang === "bg" ? "отстъпка" : "έκπτωση"}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents */}
      <div>
        <div className="flex items-center mb-4">
          <FileText className="w-5 h-5 mr-2 text-primary" />
          <h3 className="text-xl font-bold">{dictionary.enrollment.documents}</h3>
        </div>
        <ul className="space-y-2">
          {documents.map((document, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-sm">{document}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
