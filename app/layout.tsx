import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WriteWorks AI - LLM Content Optimization Platform",
  description:
    "Get your brand cited by ChatGPT, Claude, Perplexity, and AI Overviews. Create content optimized for LLM visibility using human-built frameworks and 80+ specialized AI agents.",
  keywords: [
    "LLM optimization",
    "AI content writing",
    "ChatGPT citations",
    "Claude mentions",
    "Perplexity visibility",
    "AI platform optimization",
    "content marketing",
    "AI agents",
  ],
  authors: [{ name: "WriteWorks AI" }],
  creator: "WriteWorks AI",
  publisher: "WriteWorks AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://writeworks.ai",
    siteName: "WriteWorks AI",
    title: "WriteWorks AI - LLM Content Optimization Platform",
    description:
      "Get your brand cited by ChatGPT, Claude, Perplexity, and AI Overviews. Create content optimized for LLM visibility.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WriteWorks AI - LLM Content Optimization Platform",
    description:
      "Get your brand cited by ChatGPT, Claude, Perplexity, and AI Overviews. Create content optimized for LLM visibility.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
