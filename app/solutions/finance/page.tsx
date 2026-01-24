import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, DollarSign, FileCheck, TrendingUp } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Finance Writing Software | WriteWorks AI",
  description: "AI-powered writing software for financial services. Create compliant, clear content that builds client confidence.",
}

export default function FinancePage() {
  const challenges = [
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Financial content must meet strict compliance requirements while remaining clear and actionable for clients.",
    },
    {
      icon: DollarSign,
      title: "Complex Information",
      description: "Translating complex financial data and concepts into client-friendly reports and communications.",
    },
    {
      icon: TrendingUp,
      title: "Trust Building",
      description: "Every communication must build confidence and demonstrate expertise in financial matters.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Finance" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Industry</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              AI Writing Software for Financial Services
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Create compliant, clear financial content that builds client confidence. Scale reports and communications without sacrificing accuracy.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-xs text-white/60">Faster Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4x</div>
                <div className="text-xs text-white/60">Trust Building</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <Link href="https://app.writeworks.ai/sign-up">
                  Start Free <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Financial Services Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Balance regulatory compliance, clarity, and client confidence in every communication.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <challenge.icon className="w-8 h-8 text-white/80 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                <p className="text-sm text-white/60">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
