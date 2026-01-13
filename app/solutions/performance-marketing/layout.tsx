import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Performance Marketing Solutions | WriteWorks AI",
  description:
    "Drive engagement and growth with personalization at scale. Create AI-powered campaigns that convert across every channel.",
  openGraph: {
    title: "Performance Marketing Solutions | WriteWorks AI",
    description: "Drive engagement and growth with personalization at scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Solutions | WriteWorks AI",
    description: "Drive engagement and growth with personalization at scale.",
  },
}

export default function PerformanceMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
