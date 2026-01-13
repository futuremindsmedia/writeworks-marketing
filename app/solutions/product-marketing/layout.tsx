import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Product Marketing | Launch Content & Positioning",
  description:
    "Accelerate product launches with AI for product marketing. Generate positioning docs, battle cards, and feature announcements in minutes, not days.",
  keywords: [
    "ai for product marketing",
    "product marketing content",
    "product launch content ai",
    "feature announcement writing",
    "product positioning",
  ],
  openGraph: {
    title: "AI for Product Marketing | Launch Content & Positioning",
    description:
      "Accelerate product launches with AI for product marketing. Generate positioning docs, battle cards, and feature announcements in minutes, not days.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Product Marketing | Launch Content & Positioning",
    description:
      "Accelerate product launches with AI for product marketing. Generate positioning docs, battle cards, and feature announcements in minutes, not days.",
  },
}

export default function ProductMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
