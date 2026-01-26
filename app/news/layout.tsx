import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Marketing News | WriteWorks - Latest Updates & Industry Insights",
  description:
    "Stay updated with the latest developments in content marketing, industry trends, best practices, and insights. Get news, product updates, and expert perspectives.",
  keywords: [
    "content marketing news",
    "marketing industry updates",
    "content strategy news",
    "marketing trends",
    "content marketing insights",
    "marketing best practices",
    "content optimization news",
    "marketing updates",
  ],
  openGraph: {
    title: "Content Marketing News | WriteWorks - Latest Updates & Industry Insights",
    description: "Stay updated with the latest developments in content marketing, industry trends, and best practices.",
    url: "https://writeworks.ai/news",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing News | WriteWorks - Latest Updates & Industry Insights",
    description: "Stay updated with the latest developments in content marketing, industry trends, and best practices.",
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
