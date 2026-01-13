import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Performance Marketing | Ad Copy & Landing Pages",
  description:
    "Boost conversions with AI for performance marketing. Generate high-converting ad copy, landing pages, and A/B test variations at scale.",
  keywords: [
    "ai for performance marketing",
    "ad copy ai",
    "marketing copy generator",
    "conversion copywriting ai",
    "ppc copy ai",
  ],
  openGraph: {
    title: "AI for Performance Marketing | Ad Copy & Landing Pages",
    description:
      "Boost conversions with AI for performance marketing. Generate high-converting ad copy, landing pages, and A/B test variations at scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Performance Marketing | Ad Copy & Landing Pages",
    description:
      "Boost conversions with AI for performance marketing. Generate high-converting ad copy, landing pages, and A/B test variations at scale.",
  },
}

export default function PerformanceMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
