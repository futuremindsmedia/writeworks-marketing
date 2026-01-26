import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WriteWorks Pricing | Plans & Features for Marketing Teams",
  description:
    "Transparent pricing for teams of all sizes. Compare plans, features, and find the perfect fit for your content needs. Enterprise custom pricing available.",
  keywords: [
    "content platform pricing",
    "writing tool cost",
    "content pricing plans",
    "enterprise content pricing",
  ],
  openGraph: {
    title: "WriteWorks Pricing | Plans & Features for Marketing Teams",
    description:
      "Transparent pricing for teams of all sizes. Compare plans, features, and find the perfect fit for your content needs. Enterprise custom pricing available.",
    url: "https://writeworks.ai/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "WriteWorks Pricing | Plans & Features for Marketing Teams",
    description:
      "Transparent pricing for teams of all sizes. Compare plans, features, and find the perfect fit for your content needs. Enterprise custom pricing available.",
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
