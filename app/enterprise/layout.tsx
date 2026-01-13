import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enterprise | WriteWorks AI - Scale Content Intelligence Across Your Organization",
  description:
    "Enterprise-grade content intelligence platform for large organizations. Optimize content for LLM citations at scale with advanced security, team collaboration, and dedicated support.",
  keywords:
    "enterprise content management, LLM optimization enterprise, AI content platform, enterprise SEO, content intelligence, team collaboration, SOC 2, GDPR compliance",
  openGraph: {
    title: "Enterprise | WriteWorks AI",
    description:
      "Scale content intelligence across your enterprise with advanced security, unlimited teams, and dedicated support.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise | WriteWorks AI",
    description:
      "Scale content intelligence across your enterprise with advanced security, unlimited teams, and dedicated support.",
  },
}

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
