import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Brand Content Tool | Brand Voice & Consistency",
  description:
    "Ensure brand consistency at scale with our AI brand content tool. Train AI on your brand voice and maintain messaging integrity across all channels.",
  keywords: [
    "ai brand content tool",
    "brand marketing ai",
    "brand voice ai",
    "brand consistency tool",
    "brand content generator",
  ],
  openGraph: {
    title: "AI Brand Content Tool | Brand Voice & Consistency",
    description:
      "Ensure brand consistency at scale with our AI brand content tool. Train AI on your brand voice and maintain messaging integrity across all channels.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Brand Content Tool | Brand Voice & Consistency",
    description:
      "Ensure brand consistency at scale with our AI brand content tool. Train AI on your brand voice and maintain messaging integrity across all channels.",
  },
}

export default function BrandMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
