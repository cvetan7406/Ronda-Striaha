"use client"

import type React from "react"
import { useState } from "react"
import { Upload, X, CheckCircle } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"

interface EnrollmentFormProps {
  dictionary: Dictionary
  lang: Locale
}

export default function EnrollmentForm({ dictionary, lang }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    ageGroup: "",
  })
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => {
      const isValidType = ["application/pdf", "image/jpeg", "image/png"].includes(file.type)
      const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB
      return isValidType && isValidSize
    })

    if (validFiles.length !== files.length) {
      alert(
        lang === "bg"
          ? "Някои файлове са отхвърлени. Моля, качете само PDF, JPG или PNG файлове до 5MB."
          : "Μερικά αρχεία απορρίφθηκαν. Παρακαλώ ανεβάστε μόνο PDF, JPG ή PNG αρχεία έως 5MB.",
      )
    }

    setUploadedFiles((prev) => [...prev, ...validFiles])
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // Simulate form submission with file upload
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      setSubmitMessage(
        lang === "bg"
          ? "Заявката е изпратена успешно! Ще се свържем с вас скоро."
          : "Η αίτηση στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.",
      )

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        ageGroup: "",
      })
      setUploadedFiles([])
    } catch (error) {
      setSubmitMessage(
        lang === "bg"
          ? "Възникна грешка при изпращането на заявката."
          : "Παρουσιάστηκε σφάλμα κατά την αποστολή της αίτησης.",
      )
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitMessage("")
        setIsSuccess(false)
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            {dictionary.enrollment.firstName} *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            {dictionary.enrollment.lastName} *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {dictionary.enrollment.email} *
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
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          {dictionary.enrollment.phone} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="childName" className="block text-sm font-medium mb-2">
            {dictionary.enrollment.childName} *
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            required
            value={formData.childName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="childAge" className="block text-sm font-medium mb-2">
            {dictionary.enrollment.childAge} *
          </label>
          <input
            type="number"
            id="childAge"
            name="childAge"
            required
            min="3"
            max="15"
            value={formData.childAge}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ageGroup" className="block text-sm font-medium mb-2">
          {dictionary.enrollment.ageGroup} *
        </label>
        <select
          id="ageGroup"
          name="ageGroup"
          required
          value={formData.ageGroup}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{dictionary.enrollment.selectAgeGroup}</option>
          <option value="preschool">{dictionary.education.preschool}</option>
          <option value="primary">{dictionary.education.primary}</option>
          <option value="secondary">{dictionary.education.secondary}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">{dictionary.enrollment.uploadDocuments}</label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-muted-foreground">
              {lang === "bg"
                ? "Кликнете за качване на документи или ги плъзнете тук"
                : "Κάντε κλικ για να ανεβάσετε έγγραφα ή σύρετέ τα εδώ"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG (max 5MB)</p>
          </label>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                <span className="text-sm">{file.name}</span>
                <button type="button" onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {submitMessage && (
        <div
          className={`p-3 rounded-md flex items-center gap-2 ${isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {isSuccess && <CheckCircle className="w-5 h-5" />}
          {submitMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? dictionary.common.loading : dictionary.enrollment.submit}
      </button>
    </form>
  )
}
