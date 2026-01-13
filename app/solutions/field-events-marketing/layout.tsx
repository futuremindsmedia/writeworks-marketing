import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Field & Events Marketing Solutions | WriteWorks AI",
  description:
    "Maximize event attendance and create meaningful experiences. Generate compelling event content that drives registrations and engagement.",
  openGraph: {
    title: "Field & Events Marketing Solutions | WriteWorks AI",
    description: "Maximize event attendance and create meaningful experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field & Events Marketing Solutions | WriteWorks AI",
    description: "Maximize event attendance and create meaningful experiences.",
  },
}

export default function FieldEventsMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
