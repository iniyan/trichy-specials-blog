import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "Sacred Temples of Trichy | Explore Ancient Tamil Nadu Temples",
  description:
    "Discover the ancient and sacred temples of Tiruchirappalli (Trichy), Tamil Nadu, including Srirangam, Rockfort, and Jambukeswarar temples.",
  keywords: [
    "Trichy temples",
    "Srirangam temple",
    "Rockfort temple",
    "Jambukeswarar temple",
    "Tamil Nadu temples",
    "Hindu temples",
  ],
  authors: [{ name: "Trichy Temple Explorer" }],
  creator: "Trichy Temple Explorer",
  publisher: "Trichy Temple Explorer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trichy-temples.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sacred Temples of Trichy | Ancient Tamil Nadu Temple Guide",
    description:
      "Explore the spiritual heart of Tamil Nadu through its ancient temples. Discover Srirangam, Rockfort, Jambukeswarar and other magnificent temples of Trichy.",
    url: "https://trichy-temples.vercel.app",
    siteName: "Sacred Temples of Trichy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sacred Temples of Trichy - Srirangam Temple Gopuram",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Temples of Trichy | Ancient Tamil Nadu Temple Guide",
    description:
      "Explore the spiritual heart of Tamil Nadu through its ancient temples. Discover Srirangam, Rockfort, Jambukeswarar and other magnificent temples of Trichy.",
    images: ["/og-image.jpg"],
    creator: "@trichytemples",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Suspense fallback={<div className="p-4">Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
