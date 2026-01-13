import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources - WriteWorks AI | Guides, Insights & Best Practices for LLM Optimization",
  description:
    "Explore our library of guides, case studies, whitepapers, and insights to help you maximize your brand's visibility across ChatGPT, Claude, Perplexity, and other AI platforms. Learn LLM content optimization best practices.",
  keywords: [
    "LLM optimization guides",
    "AI content best practices",
    "ChatGPT citation strategies",
    "content marketing resources",
    "AI platform visibility",
    "LLM content insights",
    "content optimization guides",
  ],
  openGraph: {
    title: "Resources - WriteWorks AI | Guides, Insights & Best Practices for LLM Optimization",
    description: "Explore guides, case studies, and insights to maximize your brand's visibility across AI platforms.",
    url: "https://writeworks.ai/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources - WriteWorks AI | Guides, Insights & Best Practices for LLM Optimization",
    description: "Explore guides, case studies, and insights to maximize your brand's visibility across AI platforms.",
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
