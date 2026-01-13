import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Content Marketing Platform | Strategy to Execution",
  description:
    "Transform your content marketing with our AI content marketing platform. Plan, create, optimize, and measure content performance—all in one place.",
  keywords: [
    "ai content marketing platform",
    "content marketing ai",
    "ai for content strategy",
    "content creation ai",
    "marketing content generator",
  ],
  openGraph: {
    title: "AI Content Marketing Platform | Strategy to Execution",
    description:
      "Transform your content marketing with our AI content marketing platform. Plan, create, optimize, and measure content performance—all in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Marketing Platform | Strategy to Execution",
    description:
      "Transform your content marketing with our AI content marketing platform. Plan, create, optimize, and measure content performance—all in one place.",
  },
}

export default function ContentMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
