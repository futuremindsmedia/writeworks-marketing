import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - WriteWorks AI | Simple, Transparent Pricing for LLM Content Optimization",
  description:
    "Choose the right plan for your team. All plans include 80+ specialized AI agents, human-built LLM frameworks, and tools to get your content cited by ChatGPT, Claude, Perplexity, and more. Start with a 14-day free trial.",
  keywords: [
    "WriteWorks pricing",
    "LLM optimization pricing",
    "AI content platform pricing",
    "content marketing pricing",
    "AI writing tools cost",
    "content optimization plans",
  ],
  openGraph: {
    title: "Pricing - WriteWorks AI | Simple, Transparent Pricing for LLM Content Optimization",
    description:
      "Choose the right plan for your team. All plans include 80+ AI agents and human-built LLM frameworks. Start with a 14-day free trial.",
    url: "https://writeworks.ai/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - WriteWorks AI | Simple, Transparent Pricing for LLM Content Optimization",
    description:
      "Choose the right plan for your team. All plans include 80+ AI agents and human-built LLM frameworks. Start with a 14-day free trial.",
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
