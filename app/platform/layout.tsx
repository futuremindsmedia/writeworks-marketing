import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform - WriteWorks AI | Complete LLM Content Optimization Platform",
  description:
    "Explore the WriteWorks platform: Content editor with LLM visibility scoring, 80+ specialized AI agents, brand management, and team collaboration tools. Everything you need to get cited by AI platforms.",
  keywords: [
    "LLM content platform",
    "AI content editor",
    "LLM visibility score",
    "AI writing agents",
    "content optimization platform",
    "brand management tools",
    "content collaboration",
  ],
  openGraph: {
    title: "Platform - WriteWorks AI | Complete LLM Content Optimization Platform",
    description:
      "Content editor with LLM visibility scoring, 80+ AI agents, brand management, and collaboration tools.",
    url: "https://writeworks.ai/platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform - WriteWorks AI | Complete LLM Content Optimization Platform",
    description:
      "Content editor with LLM visibility scoring, 80+ AI agents, brand management, and collaboration tools.",
  },
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
