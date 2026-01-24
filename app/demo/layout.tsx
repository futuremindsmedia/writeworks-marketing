import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Demo | WriteWorks AI",
  description:
    "Schedule a personalized demo of WriteWorks AI. See how our AI-powered content platform helps teams create content that gets cited by ChatGPT, Claude, and Perplexity.",
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
