import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Content Platform for Enterprise Marketing | WriteWorks",
  description:
    "Discover the leading AI content platform trusted by enterprise teams. Create, optimize, and scale marketing content with AI-powered workflows. Start free trial.",
  keywords: [
    "ai content platform",
    "ai writing platform",
    "content optimization software",
    "ai content tool",
    "enterprise content ai",
  ],
  openGraph: {
    title: "AI Content Platform for Enterprise Marketing | WriteWorks",
    description:
      "Discover the leading AI content platform trusted by enterprise teams. Create, optimize, and scale marketing content with AI-powered workflows.",
    url: "https://writeworks.ai/solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Platform for Enterprise Marketing | WriteWorks",
    description:
      "Discover the leading AI content platform trusted by enterprise teams. Create, optimize, and scale marketing content with AI-powered workflows.",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
