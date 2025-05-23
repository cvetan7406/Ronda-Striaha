import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import type { Locale } from "@/lib/types"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic", "greek"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Родна Стряха | Българско училище в Кипър",
  description: "Българско училище Родна Стряха в Кипър - съхраняваме българския език, култура и дух",
}

export async function generateStaticParams() {
  return [{ lang: "bg" }, { lang: "el" }]
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang} className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
