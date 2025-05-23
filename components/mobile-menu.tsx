"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/types"
import LanguageSwitcher from "./language-switcher"

interface MobileMenuProps {
  dictionary: Dictionary
  lang: Locale
}

export default function MobileMenu({ dictionary, lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const nav = dictionary.navigation

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="p-2 text-foreground" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-4">
            <Link
              href={`/${lang}`}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.about}
            </Link>
            <Link
              href={`/${lang}/education`}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.education}
            </Link>
            <Link
              href={`/${lang}/activities`}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.activities}
            </Link>
            <Link
              href={`/${lang}/news`}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.news}
            </Link>
            <Link
              href={`/${lang}/gallery`}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.gallery}
            </Link>
            <Link
              href={`/${lang}/enrollment`}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.enrollment}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nav.contact}
            </Link>

            <div className="pt-6">
              <LanguageSwitcher lang={lang} dictionary={dictionary} />
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
