import type { Dictionary, Locale } from "@/lib/types"

interface SchoolLifeGalleryProps {
  dictionary: Dictionary
  lang: Locale
}

export default function SchoolLifeGallery({ dictionary, lang }: SchoolLifeGalleryProps) {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      alt: lang === "bg" ? "Деца в класната стая" : "Παιδιά στην τάξη",
      title: lang === "bg" ? "Интерактивни уроци" : "Διαδραστικά μαθήματα",
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      alt: lang === "bg" ? "Деца четат книги" : "Παιδιά διαβάζουν βιβλία",
      title: lang === "bg" ? "Четене и литература" : "Ανάγνωση και λογοτεχνία",
    },
    {
      src: "https://images.unsplash.com/photo-1544531586-fbb6cf2ad6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      alt: lang === "bg" ? "Народни танци" : "Λαϊκοί χοροί",
      title: lang === "bg" ? "Български фолклор" : "Βουλγαρικός φολκλόρ",
    },
    {
      src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      alt: lang === "bg" ? "Групова работа" : "Ομαδική εργασία",
      title: lang === "bg" ? "Екипна работа" : "Ομαδική δουλειά",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      alt: lang === "bg" ? "Творчески дейности" : "Δημιουργικές δραστηριότητες",
      title: lang === "bg" ? "Изкуство и занаяти" : "Τέχνη και χειροτεχνίες",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      alt: lang === "bg" ? "Празнично събитие" : "Εορταστική εκδήλωση",
      title: lang === "bg" ? "Културни събития" : "Πολιτιστικές εκδηλώσεις",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{lang === "bg" ? "Училищният ни живот" : "Η σχολική μας ζωή"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {lang === "bg"
              ? "Моменти от ежедневието в Родна Стряха - учене, игра и приятелство"
              : "Στιγμές από την καθημερινότητα στο Rodna Striha - μάθηση, παιχνίδι και φιλία"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="hover-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={`/${lang}/gallery`}
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {lang === "bg" ? "Виж цялата галерия" : "Δείτε ολόκληρη τη γκαλερί"}
          </a>
        </div>
      </div>
    </section>
  )
}
