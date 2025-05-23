import "server-only"
import type { Locale } from "./types"

const dictionaries = {
  bg: () => import("../dictionaries/bg.json").then((module) => module.default),
  el: () => import("../dictionaries/el.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
