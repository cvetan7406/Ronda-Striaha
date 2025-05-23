import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react"

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">{dictionary.contact.title}</h1>
            <p className="text-xl max-w-4xl mx-auto text-muted-foreground">
              {lang === "bg"
                ? "Свържете се с нас за повече информация или въпроси"
                : "Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες ή ερωτήσεις"}
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{dictionary.contact.address}</h3>
                <p className="text-muted-foreground">
                  Epaminonda 7<br />
                  Nicosia 1076
                  <br />
                  Cyprus
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{dictionary.contact.email}</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:rodnastryaha.school@gmail.com" className="hover:text-primary transition-colors">
                    rodnastryaha.school@gmail.com
                  </a>
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{dictionary.contact.phone}</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+35700000000" className="hover:text-primary transition-colors">
                    +357 XXX XXX
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">{dictionary.contact.contactForm}</h2>
                <ContactForm dictionary={dictionary} lang={lang} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">{lang === "bg" ? "Намерете ни" : "Βρείτε μας"}</h2>
                <ContactMap />
              </div>
            </div>
          </div>
        </section>

        {/* Chat Options Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">{dictionary.contact.chatWithUs}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://m.me/rodnastryaha"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Facebook Messenger
              </a>
              <a
                href="https://wa.me/35700000000"
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
