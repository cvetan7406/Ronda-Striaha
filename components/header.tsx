import Link from "next/link"
import type { Dictionary, Locale } from "@/lib/types"
import LanguageSwitcher from "./language-switcher"
import MobileMenu from "./mobile-menu"

interface HeaderProps {
  dictionary: Dictionary
  lang: Locale
}

export default function Header({ dictionary, lang }: HeaderProps) {
  const nav = dictionary.navigation

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center">
            <span className="text-2xl font-bold text-primary">Родна Стряха</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link href={`/${lang}`} className="text-foreground hover:text-primary transition-colors">
                {nav.home}
              </Link>
              <Link href={`/${lang}/about`} className="text-foreground hover:text-primary transition-colors">
                {nav.about}
              </Link>
              <Link href={`/${lang}/education`} className="text-foreground hover:text-primary transition-colors">
                {nav.education}
              </Link>
              <Link href={`/${lang}/activities`} className="text-foreground hover:text-primary transition-colors">
                {nav.activities}
              </Link>
              <Link href={`/${lang}/news`} className="text-foreground hover:text-primary transition-colors">
                {nav.news}
              </Link>
              <Link href={`/${lang}/gallery`} className="text-foreground hover:text-primary transition-colors">
                {nav.gallery}
              </Link>
              <Link href={`/${lang}/enrollment`} className="text-foreground hover:text-primary transition-colors">
                {nav.enrollment}
              </Link>
              <Link href={`/${lang}/contact`} className="text-foreground hover:text-primary transition-colors">
                {nav.contact}
              </Link>
            </nav>

            <LanguageSwitcher lang={lang} dictionary={dictionary} />
          </div>

          <MobileMenu dictionary={dictionary} lang={lang} />
        </div>
      </div>
    </header>
  )
}
