import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WriteWorks AI - AI Content Creation Platform",
  description:
    "Create high-quality, on-brand content at scale. 80+ specialized AI agents help you produce engaging content faster while maintaining consistency across all channels.",
  keywords: [
    "AI content creation",
    "AI content writing",
    "content marketing platform",
    "AI writing assistant",
    "content optimization",
    "brand content",
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
    title: "WriteWorks AI - AI Content Creation Platform",
    description:
      "Create high-quality, on-brand content at scale with 80+ specialized AI agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WriteWorks AI - AI Content Creation Platform",
    description:
      "Create high-quality, on-brand content at scale with 80+ specialized AI agents.",
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
