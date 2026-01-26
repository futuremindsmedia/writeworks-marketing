import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Solutions for Enterprise Teams | WriteWorks",
  description:
    "Discover the leading content platform trusted by enterprise teams. Create, optimize, and scale marketing content with powerful workflows. Start free trial.",
  keywords: [
    "content platform",
    "writing platform",
    "content optimization software",
    "content tool",
    "enterprise content",
  ],
  openGraph: {
    title: "Marketing Solutions for Enterprise Teams | WriteWorks",
    description:
      "Discover the leading content platform trusted by enterprise teams. Create, optimize, and scale marketing content with powerful workflows.",
    url: "https://writeworks.ai/solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Solutions for Enterprise Teams | WriteWorks",
    description:
      "Discover the leading content platform trusted by enterprise teams. Create, optimize, and scale marketing content with powerful workflows.",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
