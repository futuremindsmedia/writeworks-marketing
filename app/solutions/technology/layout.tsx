import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technology Solutions | WriteWorks AI - Scale Technical Content & Get Cited by AI",
  description:
    "Move faster from roadmap to reality. Create technical content, documentation, and developer resources that get cited by ChatGPT, Claude, and Perplexity. Built for tech companies.",
  openGraph: {
    title: "Technology Solutions | WriteWorks AI",
    description:
      "Scale technical content production and get cited by AI platforms. Perfect for tech companies shipping fast.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Solutions | WriteWorks AI",
    description:
      "Scale technical content production and get cited by AI platforms. Perfect for tech companies shipping fast.",
  },
}

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children
}
