"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface TestimonialsSectionProps {
  dictionary: Dictionary
  lang: Locale
}

export default function TestimonialsSection({ dictionary, lang }: TestimonialsSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Мария Петрова",
      role: lang === "bg" ? "Майка на ученик" : "Μητέρα μαθητή",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      text:
        lang === "bg"
          ? "Родна Стряха е второто семейство на нашето дете. Тук то не само учи български, но и изгражда приятелства за цял живот."
          : "Το Rodna Striha είναι η δεύτερη οικογένεια του παιδιού μας. Εδώ όχι μόνο μαθαίνει βουλγαρικά, αλλά και χτίζει φιλίες για μια ζωή.",
    },
    {
      name: "Георги Димитров",
      role: lang === "bg" ? "Баща на ученичка" : "Πατέρας μαθήτριας",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      text:
        lang === "bg"
          ? "Благодарение на училището дъщеря ми запази връзката си с българската култура и традиции. Учителите са изключителни!"
          : "Χάρη στο σχολείο η κόρη μου διατήρησε τη σύνδεσή της με τον βουλγαρικό πολιτισμό και τις παραδόσεις. Οι δάσκαλοι είναι εξαιρετικοί!",
    },
    {
      name: "Елена Стоянова",
      role: lang === "bg" ? "Майка на двама ученици" : "Μητέρα δύο μαθητών",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      text:
        lang === "bg"
          ? "И двете ми деца обожават да идват в училище. Атмосферата е топла и приветлива, а програмата е много богата."
          : "Και τα δύο μου παιδιά λατρεύουν να έρχονται στο σχολείο. Η ατμόσφαιρα είναι ζεστή και φιλόξενη, και το πρόγραμμα είναι πολύ πλούσιο.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{lang === "bg" ? "Какво казват родителите" : "Τι λένε οι γονείς"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {lang === "bg"
              ? "Отзиви от семейства, които са част от нашата общност"
              : "Μαρτυρίες από οικογένειες που είναι μέρος της κοινότητάς μας"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 relative hover:shadow-2xl transition-shadow duration-300">
            <Quote className="w-12 h-12 text-primary/20 absolute top-4 left-4" />

            <div className="text-center">
              <div className="relative group">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white shadow-lg transition-transform transform hover:scale-110 duration-300"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {lang === "bg" ? "Виж повече" : "Δείτε περισσότερα"}
                </div>
              </div>

              <blockquote className="text-lg italic mb-6 max-w-2xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
              <div className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</div>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
