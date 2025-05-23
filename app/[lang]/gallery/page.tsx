import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PhotoAlbum from "@/components/photo-album"
import VirtualTour from "@/components/virtual-tour"

export default async function GalleryPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  const photoAlbums = [
    {
      id: 1,
      title: dictionary.gallery.firstDay,
      description:
        lang === "bg"
          ? "Първите дни от новата учебна година, пълни с вълнение и радост."
          : "Οι πρώτες μέρες της νέας σχολικής χρονιάς, γεμάτες συγκίνηση και χαρά.",
      coverImage: "/placeholder.svg?height=300&width=400",
      photoCount: 24,
      photos: Array.from({ length: 24 }, (_, i) => ({
        id: i + 1,
        src: `/placeholder.svg?height=400&width=600&text=Photo${i + 1}`,
        alt: `First day photo ${i + 1}`,
      })),
    },
    {
      id: 2,
      title: dictionary.gallery.christmas,
      description:
        lang === "bg"
          ? "Коледното тържество с песни, танци и много усмивки."
          : "Η χριστουγεννιάτικη γιορτή με τραγούδια, χορούς και πολλά χαμόγελα.",
      coverImage: "/placeholder.svg?height=300&width=400",
      photoCount: 36,
      photos: Array.from({ length: 36 }, (_, i) => ({
        id: i + 1,
        src: `/placeholder.svg?height=400&width=600&text=Christmas${i + 1}`,
        alt: `Christmas photo ${i + 1}`,
      })),
    },
    {
      id: 3,
      title: dictionary.gallery.nationalDay,
      description:
        lang === "bg"
          ? "Отбелязване на Деня на народните будители с тържествена програма."
          : "Εορτασμός της Ημέρας Εθνικής Αφύπνισης με επίσημο πρόγραμμα.",
      coverImage: "/placeholder.svg?height=300&width=400",
      photoCount: 18,
      photos: Array.from({ length: 18 }, (_, i) => ({
        id: i + 1,
        src: `/placeholder.svg?height=400&width=600&text=National${i + 1}`,
        alt: `National day photo ${i + 1}`,
      })),
    },
    {
      id: 4,
      title: dictionary.gallery.easter,
      description:
        lang === "bg"
          ? "Великденски работилници за изработване на яйца и традиционни занаяти."
          : "Πασχαλινά εργαστήρια για την κατασκευή αυγών και παραδοσιακών χειροτεχνιών.",
      coverImage: "/placeholder.svg?height=300&width=400",
      photoCount: 30,
      photos: Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        src: `/placeholder.svg?height=400&width=600&text=Easter${i + 1}`,
        alt: `Easter photo ${i + 1}`,
      })),
    },
    {
      id: 5,
      title: dictionary.gallery.ourArt,
      description:
        lang === "bg"
          ? "Творби на нашите ученици - рисунки, стихове и проекти."
          : "Δημιουργίες των μαθητών μας - ζωγραφιές, ποιήματα και έργα.",
      coverImage: "/placeholder.svg?height=300&width=400",
      photoCount: 42,
      photos: Array.from({ length: 42 }, (_, i) => ({
        id: i + 1,
        src: `/placeholder.svg?height=400&width=600&text=Art${i + 1}`,
        alt: `Student art ${i + 1}`,
      })),
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">{dictionary.gallery.title}</h1>
            <p className="text-xl max-w-4xl mx-auto text-muted-foreground">
              {lang === "bg"
                ? "Разгледайте моментите, които правят нашето училище специално"
                : "Δείτε τις στιγμές που κάνουν το σχολείο μας ξεχωριστό"}
            </p>
          </div>
        </section>

        {/* 3D Virtual Tour Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.gallery.classroom}</h2>
            <VirtualTour dictionary={dictionary} lang={lang} />
          </div>
        </section>

        {/* Photo Albums Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {lang === "bg" ? "Фотоалбуми" : "Φωτογραφικά άλμπουμ"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoAlbums.map((album) => (
                <PhotoAlbum key={album.id} album={album} dictionary={dictionary} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
