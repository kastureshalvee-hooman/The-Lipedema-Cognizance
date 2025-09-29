import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { EmailSignupPopup } from "@/components/email-signup-popup"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "The Lipedema Cognizance - Unveiling the Veiled",
  description:
    "Dedicated to educating communities, healthcare professionals, and people all around the world by unveiling the veil of Lipedema. Founded by Shalvee Kasture, we provide research-backed information and support for lipedema awareness.",
  keywords: [
    "The Lipedema Cognizance",
    "lipedema",
    "lipedema awareness",
    "lipedema education",
    "Shalvee Kasture",
    "lipedema research",
    "lipedema support",
    "lipedema stages",
    "lipedema vs lymphedema",
    "lipedema nonprofit",
  ],
  authors: [{ name: "Shalvee Kasture" }, { name: "The Lipedema Cognizance" }],
  creator: "The Lipedema Cognizance",
  publisher: "The Lipedema Cognizance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thelipedemacognizance.vercel.app",
    siteName: "The Lipedema Cognizance",
    title: "The Lipedema Cognizance - Unveiling the Veiled",
    description:
      "Dedicated to educating communities, healthcare professionals, and people all around the world by unveiling the veil of Lipedema.",
    images: [
      {
        url: "/images/tlc-logo.png",
        width: 1200,
        height: 630,
        alt: "The Lipedema Cognizance Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lipedema Cognizance - Unveiling the Veiled",
    description:
      "Dedicated to educating communities, healthcare professionals, and people all around the world by unveiling the veil of Lipedema.",
    images: ["/images/tlc-logo.png"],
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <EmailSignupPopup />
      </body>
    </html>
  )
}
