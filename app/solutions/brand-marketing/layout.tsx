import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brand Marketing Solutions | WriteWorks AI",
  description:
    "Automate brand compliance. Protect voice, tone, and style with AI-powered brand management and content governance.",
  openGraph: {
    title: "Brand Marketing Solutions | WriteWorks AI",
    description: "Automate brand compliance. Protect voice, tone, and style.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Marketing Solutions | WriteWorks AI",
    description: "Automate brand compliance. Protect voice, tone, and style.",
  },
}

export default function BrandMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
