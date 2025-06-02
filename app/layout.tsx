import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanduni Senanayake - Portfolio",
  description: "Software Engineer Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sanduni Senanayake",
              jobTitle: "Software Engineer",
              url: "https://sanduniportfolio.vercel.app",
              sameAs: [
                "https://github.com/osusara",
                "https://linkedin.com/in/mhansi",
                "https://facebook.com/sanduni.madhuhansi.3",
                "https://instagram.com/mhansi_senanayake",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
