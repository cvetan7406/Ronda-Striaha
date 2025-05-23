import Link from "next/link"
import type { Dictionary, Locale } from "@/lib/types"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

interface FooterProps {
  dictionary: Dictionary
  lang: Locale
}

export default function Footer({ dictionary, lang }: FooterProps) {
  const nav = dictionary.navigation

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Родна Стряха</h3>
            <p className="mb-4">Epaminonda 7, Nicosia 1076, Cyprus</p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a
                href="mailto:rodnastryaha.school@gmail.com"
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a href="tel:+35700000000" className="hover:text-accent transition-colors" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{nav.home}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href={`/${lang}`} className="hover:text-accent transition-colors">
                {nav.home}
              </Link>
              <Link href={`/${lang}/about`} className="hover:text-accent transition-colors">
                {nav.about}
              </Link>
              <Link href={`/${lang}/education`} className="hover:text-accent transition-colors">
                {nav.education}
              </Link>
              <Link href={`/${lang}/activities`} className="hover:text-accent transition-colors">
                {nav.activities}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{nav.contact}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href={`/${lang}/news`} className="hover:text-accent transition-colors">
                {nav.news}
              </Link>
              <Link href={`/${lang}/gallery`} className="hover:text-accent transition-colors">
                {nav.gallery}
              </Link>
              <Link href={`/${lang}/enrollment`} className="hover:text-accent transition-colors">
                {nav.enrollment}
              </Link>
              <Link href={`/${lang}/contact`} className="hover:text-accent transition-colors">
                {nav.contact}
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Родна Стряха. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
