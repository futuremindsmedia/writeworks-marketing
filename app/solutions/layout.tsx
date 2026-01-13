import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions - WriteWorks AI | LLM Content Optimization for Marketing Teams",
  description:
    "Solve your LLM visibility challenges. WriteWorks helps content writers and marketing leaders create content that gets cited by ChatGPT, Claude, Perplexity, and other AI platforms using human-built frameworks.",
  keywords: [
    "LLM content solutions",
    "AI citation optimization",
    "content marketing solutions",
    "ChatGPT visibility",
    "AI platform citations",
    "content team tools",
    "marketing content optimization",
  ],
  openGraph: {
    title: "Solutions - WriteWorks AI | LLM Content Optimization for Marketing Teams",
    description: "Solve your LLM visibility challenges with human-built frameworks and 80+ specialized AI agents.",
    url: "https://writeworks.ai/solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions - WriteWorks AI | LLM Content Optimization for Marketing Teams",
    description: "Solve your LLM visibility challenges with human-built frameworks and 80+ specialized AI agents.",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
