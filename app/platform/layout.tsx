import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Writing Software | WriteWorks Platform",
  description:
    "Professional content writing software designed for marketing teams. Create on-brand content 10x faster with intelligent writing assistance. Start free.",
  keywords: [
    "content writing software",
    "writing tool",
    "content generation platform",
    "content creator",
    "writing automation platform",
  ],
  openGraph: {
    title: "Content Writing Software | WriteWorks Platform",
    description:
      "Professional content writing software designed for marketing teams. Create on-brand content 10x faster with intelligent writing assistance.",
    url: "https://writeworks.ai/platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Writing Software | WriteWorks Platform",
    description:
      "Professional content writing software designed for marketing teams. Create on-brand content 10x faster with intelligent writing assistance.",
  },
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
