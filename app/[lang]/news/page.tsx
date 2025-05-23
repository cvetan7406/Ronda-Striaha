import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsCard from "@/components/news-card"
import EventsCalendar from "@/components/events-calendar"

export default async function NewsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  const newsArticles = [
    {
      id: 1,
      title:
        lang === "bg"
          ? "Коледно тържество 2023 - незабравими моменти"
          : "Christmas Celebration 2023 - unforgettable moments",
      excerpt:
        lang === "bg"
          ? "Нашето коледно тържество беше изпълнено с радост, песни и танци. Децата представиха прекрасна програма."
          : "Ο χριστουγεννιάτικος εορτασμός μας ήταν γεμάτος χαρά, τραγούδια και χορούς. Τα παιδιά παρουσίασαν ένα υπέροχο πρόγραμμα.",
      content:
        lang === "bg"
          ? "Коледното тържество на училище Родна Стряха се проведе на 20 декември 2023 г. в залата на културния център. Над 200 гости присъстваха на събитието, което беше истинско празненство на българския дух и традиции. Децата от всички възрастови групи участваха в програмата с песни, танци и рецитали. Особено впечатляващо беше изпълнението на коледарските песни от най-малките ученици."
          : "Η χριστουγεννιάτικη γιορτή του σχολείου Rodna Striha πραγματοποιήθηκε στις 20 Δεκεμβρίου 2023 στην αίθουσα του πολιτιστικού κέντρου. Πάνω από 200 επισκέπτες παρευρέθηκαν στην εκδήλωση, η οποία ήταν μια πραγματική γιορτή του βουλγαρικού πνεύματος και των παραδόσεων. Παιδιά από όλες τις ηλικιακές ομάδες συμμετείχαν στο πρόγραμμα με τραγούδια, χορούς και απαγγελίες.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-12-22",
      category: "events",
      author: lang === "bg" ? "Мария Иванова" : "Maria Ivanova",
    },
    {
      id: 2,
      title: lang === "bg" ? "Екскурзия до археологическия музей" : "Excursion to the archaeological museum",
      excerpt:
        lang === "bg"
          ? "Учениците от прогимназиалните класове посетиха археологическия музей в Никозия."
          : "Οι μαθητές των γυμνασιακών τάξεων επισκέφθηκαν το αρχαιολογικό μουσείο στη Λευκωσία.",
      content:
        lang === "bg"
          ? "На 15 ноември 2023 г. учениците от прогимназиалните класове на училище Родна Стряха посетиха Археологическия музей в Никозия. Екскурзията беше организирана в рамките на часовете по българска история и география. Децата имаха възможност да видят експонати от различни исторически епохи и да научат повече за древната история на Кипър и връзките ѝ с България."
          : "Στις 15 Νοεμβρίου 2023, οι μαθητές των γυμνασιακών τάξεων του σχολείου Rodna Striha επισκέφθηκαν το Αρχαιολογικό Μουσείο στη Λευκωσία. Η εκδρομή οργανώθηκε στο πλαίσιο των μαθημάτων βουλγαρικής ιστορίας και γεωγραφίας. Τα παιδιά είχαν την ευκαιρία να δουν εκθέματα από διάφορες ιστορικές εποχές.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-11-16",
      category: "excursions",
      author: lang === "bg" ? "Петър Петров" : "Petar Petrov",
    },
    {
      id: 3,
      title:
        lang === "bg"
          ? "Интервю с родител: 'Защо избрахме Родна Стряха'"
          : "Parent interview: 'Why we chose Rodna Striha'",
      excerpt:
        lang === "bg"
          ? "Разговор с г-жа Елена Димитрова за опита на семейството ѝ в нашето училище."
          : "Συνομιλία με την κυρία Elena Dimitrova για την εμπειρία της οικογένειάς της στο σχολείο μας.",
      content:
        lang === "bg"
          ? "Г-жа Елена Димитрова е майка на две деца, които учат в Родна Стряха вече три години. В интервюто си тя споделя: 'Избрахме това училище, защото искахме децата ни да запазят връзката си с българската култура и език. Тук те не само учат български, но и се чувстват част от голямо семейство. Учителите са изключително отдадени и грижовни.'"
          : "Η κυρία Elena Dimitrova είναι μητέρα δύο παιδιών που φοιτούν στο Rodna Striha εδώ και τρία χρόνια. Στη συνέντευξή της μοιράζεται: 'Επιλέξαμε αυτό το σχολείο γιατί θέλαμε τα παιδιά μας να διατηρήσουν τη σύνδεσή τους με τον βουλγαρικό πολιτισμό και τη γλώσσα.'",
      image: "/placeholder.svg?height=400&width=600",
      date: "2023-10-28",
      category: "interviews",
      author: lang === "bg" ? "Редакция" : "Editorial Team",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header dictionary={dictionary} lang={lang} />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">{dictionary.news.title}</h1>
            <p className="text-xl max-w-4xl mx-auto text-muted-foreground">{dictionary.news.subtitle}</p>
          </div>
        </section>

        {/* News Articles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <NewsCard key={article.id} article={article} dictionary={dictionary} />
              ))}
            </div>
          </div>
        </section>

        {/* Events Calendar Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{dictionary.home.upcomingEvents}</h2>
            <EventsCalendar lang={lang} />
          </div>
        </section>

        {/* Facebook Posts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {lang === "bg" ? "Последни публикации във Facebook" : "Τελευταίες δημοσιεύσεις στο Facebook"}
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-muted rounded-lg p-8 text-center">
                <p className="text-muted-foreground">
                  {lang === "bg"
                    ? "Тук ще се показват последните публикации от нашата Facebook страница."
                    : "Εδώ θα εμφανίζονται οι τελευταίες δημοσιεύσεις από τη σελίδα μας στο Facebook."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
