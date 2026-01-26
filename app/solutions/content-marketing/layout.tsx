import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Marketing Platform | Strategy to Execution",
  description:
    "Transform your content marketing with our content marketing platform. Plan, create, optimize, and measure content performance—all in one place.",
  keywords: [
    "content marketing platform",
    "content marketing software",
    "content strategy",
    "content creation",
    "marketing content generator",
  ],
  openGraph: {
    title: "Content Marketing Platform | Strategy to Execution",
    description:
      "Transform your content marketing with our content marketing platform. Plan, create, optimize, and measure content performance—all in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Platform | Strategy to Execution",
    description:
      "Transform your content marketing with our content marketing platform. Plan, create, optimize, and measure content performance—all in one place.",
  },
}

export default function ContentMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
