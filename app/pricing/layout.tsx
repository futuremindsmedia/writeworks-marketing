import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Content Platform Pricing | Plans & Features",
  description:
    "Transparent AI content platform pricing for teams of all sizes. Compare plans, features, and find the perfect fit. Enterprise custom pricing available.",
  keywords: [
    "ai content platform pricing",
    "ai writing tool cost",
    "content ai pricing plans",
    "enterprise content pricing",
  ],
  openGraph: {
    title: "AI Content Platform Pricing | Plans & Features",
    description:
      "Transparent AI content platform pricing for teams of all sizes. Compare plans, features, and find the perfect fit. Enterprise custom pricing available.",
    url: "https://writeworks.ai/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Platform Pricing | Plans & Features",
    description:
      "Transparent AI content platform pricing for teams of all sizes. Compare plans, features, and find the perfect fit. Enterprise custom pricing available.",
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
