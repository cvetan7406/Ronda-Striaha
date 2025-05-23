import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EnrollmentForm from "@/components/enrollment-form"
import EnrollmentInfo from "@/components/enrollment-info"
import EnrollmentFAQ from "@/components/enrollment-faq"

export default async function EnrollmentPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">{dictionary.enrollment.title}</h1>
            <p className="text-xl max-w-4xl mx-auto text-muted-foreground">{dictionary.enrollment.subtitle}</p>
          </div>
        </section>

        {/* Enrollment Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">{dictionary.enrollment.form}</h2>
                <EnrollmentForm dictionary={dictionary} lang={lang} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">{dictionary.enrollment.fees}</h2>
                <EnrollmentInfo dictionary={dictionary} lang={lang} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.enrollment.faq}</h2>
            <div className="max-w-4xl mx-auto">
              <EnrollmentFAQ dictionary={dictionary} lang={lang} />
            </div>
          </div>
        </section>
      </div>

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
