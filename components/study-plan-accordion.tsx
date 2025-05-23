"use client"

import { useState } from "react"
import { ChevronDown, Download } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface StudyPlanAccordionProps {
  dictionary: Dictionary
  lang: Locale
}

export default function StudyPlanAccordion({ dictionary, lang }: StudyPlanAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const studyPlans = [
    {
      id: 1,
      title: dictionary.education.preschool,
      content:
        lang === "bg"
          ? "Учебният план за предучилищна възраст включва основи на българския език, запознаване с българската азбука, народни песни и игри, творчески дейности и развитие на моториката."
          : "Το πρόγραμμα σπουδών για την προσχολική ηλικία περιλαμβάνει βάσεις της βουλγαρικής γλώσσας, εξοικείωση με το βουλγαρικό αλφάβητο, λαϊκά τραγούδια και παιχνίδια, δημιουργικές δραστηριότητες και ανάπτυξη κινητικότητας.",
      files: [
        { name: "preschool-curriculum.pdf", size: "2.3 MB" },
        { name: "activities-guide.pdf", size: "1.8 MB" },
      ],
    },
    {
      id: 2,
      title: dictionary.education.primary,
      content:
        lang === "bg"
          ? "Учебният план за начално образование включва систематично изучаване на българския език и литература, българска история, география, музика и културно наследство."
          : "Το πρόγραμμα σπουδών για την πρωτοβάθμια εκπαίδευση περιλαμβάνει συστηματική μελέτη της βουλγαρικής γλώσσας και λογοτεχνίας, βουλγαρικής ιστορίας, γεωγραφίας, μουσικής και πολιτιστικής κληρονομιάς.",
      files: [
        { name: "primary-curriculum.pdf", size: "3.1 MB" },
        { name: "reading-list.pdf", size: "1.2 MB" },
        { name: "assessment-guide.pdf", size: "2.0 MB" },
      ],
    },
    {
      id: 3,
      title: dictionary.education.secondary,
      content:
        lang === "bg"
          ? "Учебният план за прогимназиално образование включва задълбочено изучаване на българската литература, история, география, културни традиции и подготовка за изпити."
          : "Το πρόγραμμα σπουδών για τη δευτεροβάθμια εκπαίδευση περιλαμβάνει εμβαθυμένη μελέτη της βουλγαρικής λογοτεχνίας, ιστορίας, γεωγραφίας, πολιτιστικών παραδόσεων και προετοιμασία για εξετάσεις.",
      files: [
        { name: "secondary-curriculum.pdf", size: "4.2 MB" },
        { name: "exam-preparation.pdf", size: "2.8 MB" },
        { name: "project-guidelines.pdf", size: "1.5 MB" },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      {studyPlans.map((plan) => (
        <div key={plan.id} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(plan.id)}
            className="w-full px-6 py-4 text-left bg-white hover:bg-muted transition-colors flex items-center justify-between"
          >
            <h3 className="text-lg font-semibold">{plan.title}</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${openItems.includes(plan.id) ? "rotate-180" : ""}`}
            />
          </button>

          {openItems.includes(plan.id) && (
            <div className="px-6 py-4 bg-muted border-t border-border">
              <p className="text-muted-foreground mb-4">{plan.content}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{dictionary.education.downloadPlan}:</h4>
                {plan.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">{file.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">({file.size})</span>
                    </div>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      {dictionary.education.downloadPlan}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
