import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Marketing Solutions | WriteWorks AI",
  description:
    "Align and refine your GTM strategy. Launch faster with AI-powered messaging that hits. Optimize product positioning and launch materials for maximum impact.",
  openGraph: {
    title: "Product Marketing Solutions | WriteWorks AI",
    description: "Align and refine your GTM strategy. Launch faster with AI-powered messaging that hits.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Marketing Solutions | WriteWorks AI",
    description: "Align and refine your GTM strategy. Launch faster with AI-powered messaging that hits.",
  },
}

export default function ProductMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
