import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI PR Writing Tool | Press Releases & Media Content",
  description:
    "Craft compelling press releases and media pitches with our AI PR writing tool. Maintain brand voice consistency across all communications. Try free.",
  keywords: [
    "ai pr writing tool",
    "press release ai",
    "communications ai",
    "pr content generator",
    "media relations content",
  ],
  openGraph: {
    title: "AI PR Writing Tool | Press Releases & Media Content",
    description:
      "Craft compelling press releases and media pitches with our AI PR writing tool. Maintain brand voice consistency across all communications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI PR Writing Tool | Press Releases & Media Content",
    description:
      "Craft compelling press releases and media pitches with our AI PR writing tool. Maintain brand voice consistency across all communications.",
  },
}

export default function PRCommunicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
