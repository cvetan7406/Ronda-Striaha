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

    // Handle root path - rewrite to /bg internally
    if (pathname === "/") {
      const url = request.nextUrl.clone()
      url.pathname = "/bg"
      return NextResponse.rewrite(url)
    }

    // Handle paths that start with /el (Greek)
    if (pathname.startsWith("/el")) {
      return NextResponse.next()
    }

    // Handle paths that start with /bg - rewrite to remove /bg prefix
    if (pathname.startsWith("/bg")) {
      const newPath = pathname.replace("/bg", "") || "/"
      const url = request.nextUrl.clone()
      url.pathname = newPath
      return NextResponse.redirect(url)
    }

    // For any other path, check if it should be treated as Bulgarian (default)
    // If the path doesn't start with /el, treat it as Bulgarian
    if (!pathname.startsWith("/el")) {
      const url = request.nextUrl.clone()
      url.pathname = `/bg${pathname}`
      return NextResponse.rewrite(url)
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    // Fallback to rewriting to default locale
    const url = request.nextUrl.clone()
    url.pathname = `/bg${request.nextUrl.pathname}`
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, _vercel) and files with extensions
    "/((?!_next|api|_vercel|.*\\..*).*)",
  ],
}
