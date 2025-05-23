import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Download file function
export function downloadFile(url: string, filename: string) {
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Add to calendar function
export function addToCalendar(event: {
  title: string
  start: Date
  end?: Date
  description?: string
  location?: string
}) {
  const startDate = event.start.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  const endDate = event.end ? event.end.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z" : startDate

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description || "")}&location=${encodeURIComponent(event.location || "")}`

  window.open(googleCalendarUrl, "_blank")
}

// Share on social media
export function shareOnSocial(platform: string, url: string, text?: string) {
  let shareUrl = ""

  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
      break
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text || "")}`
      break
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
      break
    case "whatsapp":
      shareUrl = `https://wa.me/?text=${encodeURIComponent((text || "") + " " + url)}`
      break
    default:
      return
  }

  window.open(shareUrl, "_blank", "width=600,height=400")
}

// Copy to clipboard
export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error("Failed to copy: ", err)
    return false
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string, lang: string) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: lang === "bg" ? "Успешно се абонирахте!" : "Επιτυχής εγγραφή!" })
    }, 1000)
  })
}

// Send contact form
export async function sendContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Message sent successfully!" })
    }, 1500)
  })
}
