export type Locale = "bg" | "el"

export interface Dictionary {
  navigation: {
    home: string
    about: string
    education: string
    activities: string
    news: string
    gallery: string
    enrollment: string
    contact: string
  }
  home: {
    welcome: string
    subWelcome: string
    learnMore: string
    enrollChild: string
    viewGallery: string
    upcomingEvents: string
  }
  about: {
    title: string
    description: string
    timeline: string
    team: string
  }
  language: {
    bg: string
    el: string
  }
}

// Utility function to validate locale
export function isValidLocale(locale: string): locale is Locale {
  return ["bg", "el"].includes(locale)
}
