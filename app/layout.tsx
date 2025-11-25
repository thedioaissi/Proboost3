import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HtmlAttrSanitizer } from "@/components/html-attr-sanitizer"

const fontSans = Inter({ subsets: ["latin"] })
const fontMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Probooster - Formation et E-commerce au Bénin",
  description: "Formations professionnelles et catalogue produits - Probooster Bénin",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${fontSans.className} antialiased`}>
        <Header />
        <HtmlAttrSanitizer />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
