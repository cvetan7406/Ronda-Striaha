import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// List of supported locales
export const locales = ["bg", "el"]
export const defaultLocale = "bg"

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  try {
    // Get the Accept-Language header
    const acceptLanguage = request.headers.get("accept-language")

    if (!acceptLanguage) {
      return defaultLocale
    }

    // Simple locale detection without external dependencies
    const preferredLocales = acceptLanguage
      .split(",")
      .map((lang) => {
        const [locale, q = "1"] = lang.trim().split(";q=")
        return {
          locale: locale.toLowerCase().split("-")[0], // Get just the language part
          quality: Number.parseFloat(q),
        }
      })
      .sort((a, b) => b.quality - a.quality)

    // Find the first supported locale
    for (const { locale } of preferredLocales) {
      if (locales.includes(locale)) {
        return locale
      }
    }

    return defaultLocale
  } catch (error) {
    console.error("Error in getLocale:", error)
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  try {
    const pathname = request.nextUrl.pathname

    // Skip middleware for static files and API routes
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/_vercel") ||
      pathname.includes(".") // Skip files with extensions
    ) {
      return NextResponse.next()
    }

    // Check if the pathname already has a locale
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    if (pathnameHasLocale) {
      return NextResponse.next()
    }

    // Redirect if there is no locale in the pathname
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)

    return NextResponse.redirect(newUrl)
  } catch (error) {
    console.error("Middleware error:", error)
    // Fallback to default locale on error
    const newUrl = new URL(`/${defaultLocale}${request.nextUrl.pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, _vercel) and files with extensions
    "/((?!_next|api|_vercel|.*\\..*).*)",
  ],
}
