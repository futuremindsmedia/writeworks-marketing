import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WriteWorks - Content Creation Platform for Marketing Teams",
  description:
    "Create high-quality, on-brand content at scale. 80+ specialized agents help you produce engaging content faster while maintaining consistency across all channels.",
  keywords: [
    "content creation",
    "content writing",
    "content marketing platform",
    "writing assistant",
    "content optimization",
    "brand content",
    "content marketing",
    "marketing platform",
  ],
  authors: [{ name: "WriteWorks" }],
  creator: "WriteWorks",
  publisher: "WriteWorks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://writeworks.ai",
    siteName: "WriteWorks",
    title: "WriteWorks - Content Creation Platform for Marketing Teams",
    description:
      "Create high-quality, on-brand content at scale with 80+ specialized agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WriteWorks - Content Creation Platform for Marketing Teams",
    description:
      "Create high-quality, on-brand content at scale with 80+ specialized agents.",
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
