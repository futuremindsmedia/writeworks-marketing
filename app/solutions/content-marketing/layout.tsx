import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Marketing Solutions | WriteWorks AI",
  description:
    "Plan, create, and scale with ease. Elevate quality and performance with AI-powered content optimization for maximum LLM visibility.",
  openGraph: {
    title: "Content Marketing Solutions | WriteWorks AI",
    description: "Plan, create, and scale with ease. Elevate quality and performance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Solutions | WriteWorks AI",
    description: "Plan, create, and scale with ease. Elevate quality and performance.",
  },
}

export default function ContentMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
