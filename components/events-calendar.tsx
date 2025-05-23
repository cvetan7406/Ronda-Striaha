"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { addToCalendar, subscribeToNewsletter } from "@/lib/utils"
import type { Locale } from "@/lib/types"

interface Event {
  id: number
  title: string
  date: Date
  description: string
}

interface EventsCalendarProps {
  lang: Locale
}

export default function EventsCalendar({ lang }: EventsCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState("")

  // Sample events - in a real app, these would come from an API or database
  const events: Event[] = [
    {
      id: 1,
      title: lang === "bg" ? "Ден на българската просвета и култура" : "Day of Bulgarian Education and Culture",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
      description:
        lang === "bg"
          ? "Празнуване на деня на българската просвета и култура"
          : "Celebration of the Day of Bulgarian Education and Culture",
    },
    {
      id: 2,
      title: lang === "bg" ? "Коледно тържество" : "Christmas Celebration",
      date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 20),
      description: lang === "bg" ? "Коледно тържество с песни и танци" : "Christmas celebration with songs and dances",
    },
    {
      id: 3,
      title: lang === "bg" ? "Ден на народните будители" : "National Awakening Day",
      date: new Date(new Date().getFullYear(), 10, 1), // November 1st
      description:
        lang === "bg" ? "Отбелязване на деня на народните будители" : "Celebration of National Awakening Day",
    },
  ]

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleAddToCalendar = (event: Event) => {
    const endDate = new Date(event.date)
    endDate.setHours(endDate.getHours() + 2) // 2 hour event

    addToCalendar({
      title: event.title,
      start: event.date,
      end: endDate,
      description: event.description,
      location: "Арадиппу, Атиену, Ксилофагу, Cyprus",
    })
  }

  const handleNewsletterSubscription = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    try {
      const result = (await subscribeToNewsletter(email, lang)) as { success: boolean; message: string }
      setSubscriptionMessage(result.message)
      if (result.success) {
        setEmail("")
      }
    } catch (error) {
      setSubscriptionMessage(lang === "bg" ? "Възникна грешка" : "Παρουσιάστηκε σφάλμα")
    } finally {
      setIsSubscribing(false)
      setTimeout(() => setSubscriptionMessage(""), 3000)
    }
  }

  const monthNames = {
    bg: [
      "Януари",
      "Февруари",
      "Март",
      "Април",
      "Май",
      "Юни",
      "Юли",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември",
    ],
    el: [
      "Ιανουάριος",
      "Φεβρουάριος",
      "Μάρτιος",
      "Απρίλιος",
      "Μάιος",
      "Ιούνιος",
      "Ιούλιος",
      "Αύγουστος",
      "Σεπτέμβριος",
      "Οκτώβριος",
      "Νοέμβριος",
      "Δεκέμβριος",
    ],
  }

  const dayNames = {
    bg: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    el: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dayEvents = events.filter(
        (event) => event.date.getDate() === day && event.date.getMonth() === month && event.date.getFullYear() === year,
      )

      days.push(
        <div
          key={day}
          className={`h-24 border border-border p-1 relative ${dayEvents.length > 0 ? "bg-accent/10" : ""}`}
        >
          <span className="text-sm font-medium">{day}</span>
          {dayEvents.map((event) => (
            <div key={event.id} className="mt-1 p-1 text-xs bg-primary text-white rounded truncate group relative">
              {event.title}
              <button
                onClick={() => handleAddToCalendar(event)}
                className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity"
                title={lang === "bg" ? "Добави в календар" : "Προσθήκη στο ημερολόγιο"}
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>,
      )
    }

    return days
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={prevMonth} className="p-2 hover:bg-muted rounded-full" aria-label="Previous month">
          <ChevronLeft size={20} />
        </button>
        <h3 className="text-xl font-bold flex items-center">
          <Calendar className="mr-2" size={20} />
          {monthNames[lang][currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button onClick={nextMonth} className="p-2 hover:bg-muted rounded-full" aria-label="Next month">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dayNames[lang].map((day) => (
          <div key={day} className="h-10 flex items-center justify-center font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>

      <div className="mt-8 text-center">
        <form onSubmit={handleNewsletterSubscription} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang === "bg" ? "Вашият имейл адрес" : "Your email address"}
              className="flex-1 px-4 py-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isSubscribing
                ? lang === "bg"
                  ? "Зареждане..."
                  : "Φόρτωση..."
                : lang === "bg"
                  ? "Абонирай се"
                  : "Subscribe"}
            </button>
          </div>
          {subscriptionMessage && <p className="mt-2 text-sm text-green-600">{subscriptionMessage}</p>}
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "bg"
              ? "Абонирайте се за нашия календар с предстоящи събития"
              : "Subscribe to our upcoming events calendar"}
          </p>
        </form>
      </div>
    </div>
  )
}
