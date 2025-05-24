import "server-only"
import type { Locale } from "./types"

const dictionaries = {
  bg: () => import("../dictionaries/bg.json").then((module) => module.default),
  el: () => import("../dictionaries/el.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  try {
    // Validate locale
    if (!locale || !["bg", "el"].includes(locale)) {
      console.warn(`Invalid locale: ${locale}, falling back to 'bg'`)
      return dictionaries.bg()
    }

    return await dictionaries[locale]()
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error)
    // Fallback to Bulgarian dictionary
    return dictionaries.bg()
  }
}
