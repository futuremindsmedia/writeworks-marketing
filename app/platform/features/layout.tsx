import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Features | WriteWorks AI - Complete LLM Content Optimization Tools",
  description:
    "Explore all WriteWorks AI platform features: LLM visibility scoring, 80+ AI agents, brand management, team collaboration, content analytics, and more. Everything you need to optimize content for AI platforms.",
  keywords: [
    "LLM content optimization features",
    "AI content tools",
    "content management platform",
    "AI writing assistant",
    "team collaboration tools",
    "content analytics",
    "brand management",
    "WriteWorks features",
  ],
  openGraph: {
    title: "Platform Features | WriteWorks AI",
    description:
      "Comprehensive tools for LLM content optimization: AI agents, visibility scoring, brand management, collaboration, and analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Features | WriteWorks AI",
    description:
      "Comprehensive tools for LLM content optimization: AI agents, visibility scoring, brand management, collaboration, and analytics.",
  },
}

export default function PlatformFeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
