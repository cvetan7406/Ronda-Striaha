"use client"

import type React from "react"
import { useState } from "react"
import { sendContactForm } from "@/lib/utils"
import type { Dictionary, Locale } from "@/lib/types"

interface ContactFormProps {
  dictionary: Dictionary
  lang: Locale
}

export default function ContactForm({ dictionary, lang }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const result = (await sendContactForm(formData)) as { success: boolean; message: string }

      if (result.success) {
        setSubmitMessage(lang === "bg" ? "Съобщението е изпратено успешно!" : "Το μήνυμα στάλθηκε επιτυχώς!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitMessage(lang === "bg" ? "Възникна грешка при изпращането." : "Παρουσιάστηκε σφάλμα κατά την αποστολή.")
      }
    } catch (error) {
      setSubmitMessage(lang === "bg" ? "Възникна грешка при изпращането." : "Παρουσιάστηκε σφάλμα κατά την αποστολή.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(""), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {dictionary.contact.name} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {dictionary.contact.email} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          {dictionary.contact.subject} *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{dictionary.contact.selectSubject}</option>
          <option value="inquiry">{dictionary.contact.inquiry}</option>
          <option value="enrollment">{dictionary.contact.enrollmentInquiry}</option>
          <option value="events">{dictionary.contact.events}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {dictionary.contact.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
        />
      </div>

      {submitMessage && (
        <div
          className={`p-3 rounded-md ${submitMessage.includes("успешно") || submitMessage.includes("επιτυχώς") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {submitMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? dictionary.common.loading : dictionary.contact.send}
      </button>
    </form>
  )
}
