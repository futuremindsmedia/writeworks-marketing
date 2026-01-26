import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Marketing Resources | Guides, Webinars & Research",
  description:
    "Explore our library of content marketing resources. In-depth guides, original research, webinars, and best practices to elevate your marketing strategy.",
  keywords: ["content marketing resources", "marketing guides", "writing resources", "marketing content hub"],
  openGraph: {
    title: "Content Marketing Resources | Guides, Webinars & Research",
    description:
      "Explore our library of content marketing resources. In-depth guides, original research, webinars, and best practices to elevate your marketing strategy.",
    url: "https://writeworks.ai/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Resources | Guides, Webinars & Research",
    description:
      "Explore our library of content marketing resources. In-depth guides, original research, webinars, and best practices to elevate your marketing strategy.",
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
