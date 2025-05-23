import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import type { Locale } from "@/lib/types"
import ClickParticles from "@/components/click-particles"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Configure the font properly with weight ranges
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Родна Стряха | Българско училище в Кипър",
  description: "Българско училище Родна Стряха в Кипър - съхраняваме българския език, култура и дух",
}

export async function generateStaticParams() {
  return [{ lang: "bg" }, { lang: "el" }]
}

// Validate params
function isValidLocale(locale: string): locale is Locale {
  return ["bg", "el"].includes(locale)
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Validate and fallback locale
  const validatedLang: Locale = isValidLocale(params.lang) ? params.lang : "bg"

  return (
    <html lang={validatedLang}>
      <head>
        {/* Add canonical URLs for SEO */}
        {validatedLang === "bg" && <link rel="canonical" href="/" />}
        {validatedLang === "el" && <link rel="canonical" href="/el" />}

        {/* Add hreflang for SEO */}
        <link rel="alternate" hrefLang="bg" href="/" />
        <link rel="alternate" hrefLang="el" href="/el" />
        <link rel="alternate" hrefLang="x-default" href="/" />
      </head>
      <body className={montserrat.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <ClickParticles />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
