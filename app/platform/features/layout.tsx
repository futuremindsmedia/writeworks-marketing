import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Features | WriteWorks - Complete Content Creation Tools",
  description:
    "Explore all WriteWorks platform features: content scoring, 80+ specialized agents, brand management, team collaboration, content analytics, and more. Everything you need to create high-quality content at scale.",
  keywords: [
    "content creation features",
    "content tools",
    "content management platform",
    "writing assistant",
    "team collaboration tools",
    "content analytics",
    "brand management",
    "WriteWorks features",
  ],
  openGraph: {
    title: "Platform Features | WriteWorks",
    description:
      "Comprehensive tools for content creation: specialized agents, content scoring, brand management, collaboration, and analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Features | WriteWorks",
    description:
      "Comprehensive tools for content creation: specialized agents, content scoring, brand management, collaboration, and analytics.",
  },
}

export default function PlatformFeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
