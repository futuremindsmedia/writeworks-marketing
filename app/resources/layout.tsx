import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Content Resources | Guides, Webinars & Research",
  description:
    "Explore our library of AI content resources. In-depth guides, original research, webinars, and best practices to elevate your content marketing.",
  keywords: ["ai content resources", "content marketing resources", "ai writing guides", "marketing content hub"],
  openGraph: {
    title: "AI Content Resources | Guides, Webinars & Research",
    description:
      "Explore our library of AI content resources. In-depth guides, original research, webinars, and best practices to elevate your content marketing.",
    url: "https://writeworks.ai/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Resources | Guides, Webinars & Research",
    description:
      "Explore our library of AI content resources. In-depth guides, original research, webinars, and best practices to elevate your content marketing.",
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
