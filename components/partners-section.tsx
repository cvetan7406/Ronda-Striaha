import type { Dictionary, Locale } from "@/lib/types"

interface PartnersSectionProps {
  dictionary: Dictionary
  lang: Locale
}

export default function PartnersSection({ dictionary, lang }: PartnersSectionProps) {
  const partners = [
    {
      name: "Министерство на образованието на България",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
      description: lang === "bg" ? "Официална подкрепа" : "Επίσημη υποστήριξη",
    },
    {
      name: "Българско посолство в Кипър",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
      description: lang === "bg" ? "Дипломатическа подкрепа" : "Διπλωματική υποστήριξη",
    },
    {
      name: "Българска общност в Кипър",
      logo: "https://images.unsplash.com/photo-1544531586-fbb6cf2ad6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
      description: lang === "bg" ? "Общностна подкрепа" : "Κοινοτική υποστήριξη",
    },
    {
      name: "Кипърско министерство на образованието",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
      description: lang === "bg" ? "Местна подкрепа" : "Τοπική υποστήριξη",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{lang === "bg" ? "Нашите партньори" : "Οι συνεργάτες μας"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {lang === "bg"
              ? "Работим в партньорство с водещи институции за качествено образование"
              : "Συνεργαζόμαστε με κορυφαίους οργανισμούς για ποιοτική εκπαίδευση"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center hover-card bg-white p-6 rounded-lg">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-full h-16 object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="font-semibold text-sm mb-2">{partner.name}</h3>
              <p className="text-xs text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
            <span className="text-sm font-medium mr-2">
              {lang === "bg" ? "Сертифицирано от:" : "Πιστοποιημένο από:"}
            </span>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=30&q=80"
                alt="Certification"
                className="h-6"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=30&q=80"
                alt="Accreditation"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
