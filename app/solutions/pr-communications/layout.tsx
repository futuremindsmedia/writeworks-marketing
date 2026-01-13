import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PR & Communications Solutions | WriteWorks AI",
  description:
    "Move fast without losing control. Craft clear, aligned messaging with AI-powered PR and communications tools.",
  openGraph: {
    title: "PR & Communications Solutions | WriteWorks AI",
    description: "Move fast without losing control. Craft clear, aligned messaging.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PR & Communications Solutions | WriteWorks AI",
    description: "Move fast without losing control. Craft clear, aligned messaging.",
  },
}

export default function PRCommunicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
