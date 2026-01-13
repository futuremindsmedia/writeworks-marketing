import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Event Marketing Content AI | Conferences & Trade Shows",
  description:
    "Create compelling event marketing content with AI. Generate invitations, booth materials, and follow-up sequences for conferences and trade shows.",
  keywords: [
    "event marketing content ai",
    "event marketing copy",
    "conference content ai",
    "trade show marketing",
    "event promotion content",
  ],
  openGraph: {
    title: "Event Marketing Content AI | Conferences & Trade Shows",
    description:
      "Create compelling event marketing content with AI. Generate invitations, booth materials, and follow-up sequences for conferences and trade shows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Marketing Content AI | Conferences & Trade Shows",
    description:
      "Create compelling event marketing content with AI. Generate invitations, booth materials, and follow-up sequences for conferences and trade shows.",
  },
}

export default function FieldEventsMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
