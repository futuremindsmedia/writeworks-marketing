import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BarChart3, CheckCircle2, TrendingUp, Target, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Analytics | WriteWorks AI Platform",
  description:
    "Track content performance across AI platforms. Measure citation rates, visibility scores, and ROI with comprehensive analytics.",
  keywords: ["content analytics", "LLM analytics", "citation tracking", "content performance", "AI visibility metrics"],
}

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-white" />
            Back to All Features
          </Link>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-6">
              <BarChart3 className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Analytics & Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Analytics Software
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Track content performance across AI platforms with comprehensive analytics. Measure citation rates,
              visibility scores, and ROI to optimize your content strategy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Analytics Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: "LLM Visibility Tracking",
                  description: "Monitor how often your content appears in AI responses across platforms.",
                },
                {
                  icon: Target,
                  title: "Citation Analytics",
                  description: "Track citation rates and understand which content gets referenced most.",
                },
                {
                  icon: TrendingUp,
                  title: "Performance Trends",
                  description: "Identify patterns and trends in content performance over time.",
                },
                {
                  icon: BarChart3,
                  title: "ROI Measurement",
                  description: "Calculate the return on investment for your content optimization efforts.",
                },
                {
                  icon: CheckCircle2,
                  title: "Competitive Analysis",
                  description: "Compare your visibility against competitors across AI platforms.",
                },
                {
                  icon: Target,
                  title: "Content Scoring",
                  description: "Get detailed breakdowns of visibility scores and optimization opportunities.",
                },
              ].map((capability, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#6366F1]/20 bg-card/50 backdrop-blur-sm hover:border-[#6366F1]/40 transition-all"
                >
                  <capability.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{capability.title}</h3>
                  <p className="text-white/70">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Real-time visibility tracking",
                "Citation rate monitoring",
                "Multi-platform analytics",
                "Custom reporting dashboards",
                "Performance trend analysis",
                "ROI calculation tools",
                "Competitive benchmarking",
                "Content scoring breakdowns",
                "Export and API access",
                "Automated insights",
                "Team performance metrics",
                "Historical data analysis",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Make Data-Driven Content Decisions</h2>
            <p className="text-xl text-white/70 mb-8">
              Track, measure, and optimize your content performance across AI platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
