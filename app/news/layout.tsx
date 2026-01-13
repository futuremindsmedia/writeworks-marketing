import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI & LLM Industry News - WriteWorks AI | Latest Updates on AI Search & Content Optimization",
  description:
    "Stay updated with the latest developments in AI search, LLM technology, ChatGPT, Claude, Perplexity, and content optimization. Get industry news, product updates, and insights from AI experts.",
  keywords: [
    "AI news",
    "LLM industry updates",
    "ChatGPT news",
    "Claude updates",
    "Perplexity news",
    "AI search trends",
    "content optimization news",
    "AI platform updates",
  ],
  openGraph: {
    title: "AI & LLM Industry News - WriteWorks AI | Latest Updates on AI Search & Content Optimization",
    description: "Stay updated with the latest developments in AI search, LLM technology, and content optimization.",
    url: "https://writeworks.ai/news",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & LLM Industry News - WriteWorks AI | Latest Updates on AI Search & Content Optimization",
    description: "Stay updated with the latest developments in AI search, LLM technology, and content optimization.",
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
