import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Writing for Tech Companies | Technical Content at Scale",
  description:
    "Purpose-built AI writing for tech companies. Create technical documentation, release notes, and product content that resonates with developers and buyers.",
  keywords: [
    "ai writing for tech companies",
    "technology content marketing",
    "tech marketing ai",
    "b2b tech content",
    "saas content creation",
  ],
  openGraph: {
    title: "AI Writing for Tech Companies | Technical Content at Scale",
    description:
      "Purpose-built AI writing for tech companies. Create technical documentation, release notes, and product content that resonates with developers and buyers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Writing for Tech Companies | Technical Content at Scale",
    description:
      "Purpose-built AI writing for tech companies. Create technical documentation, release notes, and product content that resonates with developers and buyers.",
  },
}

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children
}
