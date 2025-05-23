"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import type { Dictionary, Locale } from "@/lib/types"

interface LanguageSwitcherProps {
  lang: Locale
  dictionary: Dictionary
}

export default function LanguageSwitcher({ lang, dictionary }: LanguageSwitcherProps) {
  const pathName = usePathname()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <div className="flex items-center space-x-2">
      <Link
        href={redirectedPathName("bg")}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          lang === "bg" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted-foreground/20"
        }`}
      >
        {dictionary.language.bg}
      </Link>
      <Link
        href={redirectedPathName("el")}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          lang === "el" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted-foreground/20"
        }`}
      >
        {dictionary.language.el}
      </Link>
    </div>
  )
}
