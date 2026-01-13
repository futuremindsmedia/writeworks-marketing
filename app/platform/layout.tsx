import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Content Writing Software | WriteWorks Platform",
  description:
    "Professional AI content writing software designed for marketing teams. Create on-brand content 10x faster with intelligent writing assistance. Start free.",
  keywords: [
    "ai content writing software",
    "ai writing tool",
    "content generation platform",
    "ai content creator",
    "writing automation platform",
  ],
  openGraph: {
    title: "AI Content Writing Software | WriteWorks Platform",
    description:
      "Professional AI content writing software designed for marketing teams. Create on-brand content 10x faster with intelligent writing assistance.",
    url: "https://writeworks.ai/platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Writing Software | WriteWorks Platform",
    description:
      "Professional AI content writing software designed for marketing teams. Create on-brand content 10x faster with intelligent writing assistance.",
  },
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
