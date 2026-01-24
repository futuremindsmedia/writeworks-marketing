import type { Metadata } from "next"
import Link from "next/link"
import {
  Home,
  ChevronRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Target,
  Eye,
  Clock,
  AlertTriangle,
  Lightbulb,
  Users,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Analytics Dashboard | Performance Insights",
  description:
    "Track content performance with our intuitive analytics dashboard. Focus on content performance tracking, engagement metrics, and optimization recommendations.",
  keywords: ["content analytics", "LLM analytics", "citation tracking", "content performance", "AI visibility metrics"],
}

const challenges = [
  {
    title: "No AI Platform Visibility",
    description: "Teams have no insight into how content performs across ChatGPT, Claude, and other AI platforms.",
  },
  {
    title: "Scattered Performance Data",
    description: "Analytics live in multiple tools, making it hard to see the complete content performance picture.",
  },
  {
    title: "Can't Measure ROI",
    description: "Without proper tracking, it's impossible to demonstrate content's impact on business goals.",
  },
  {
    title: "Reactive Not Proactive",
    description: "Teams only discover underperforming content after it's too late to fix.",
  },
]

const solutions = [
  {
    challenge: "No AI Platform Visibility",
    solution: "Track citations and visibility across all major AI platforms in one unified dashboard.",
  },
  {
    challenge: "Scattered Performance Data",
    solution: "Centralized analytics bring together all content metrics for complete visibility.",
  },
  {
    challenge: "Can't Measure ROI",
    solution: "ROI calculation tools connect content performance to business outcomes automatically.",
  },
  {
    challenge: "Reactive Not Proactive",
    solution: "AI-powered alerts and recommendations help optimize content before performance drops.",
  },
]

const jobsToBeDone = [
  { task: "Generate performance report", traditional: "4 hours", withPlatform: "5 min", timeSaved: "98%" },
  { task: "Analyze content trends", traditional: "2 hours", withPlatform: "Instant", timeSaved: "100%" },
  { task: "Track competitor visibility", traditional: "3 hours", withPlatform: "10 min", timeSaved: "94%" },
  { task: "Calculate content ROI", traditional: "6 hours", withPlatform: "15 min", timeSaved: "96%" },
  { task: "Identify optimization opportunities", traditional: "2 hours", withPlatform: "Instant", timeSaved: "100%" },
]

const targetAudience = [
  {
    role: "Marketing Leaders",
    description: "Make data-driven decisions with comprehensive content performance insights.",
  },
  {
    role: "Content Strategists",
    description: "Identify what content works and optimize strategy based on real data.",
  },
  {
    role: "Executives",
    description: "Demonstrate content ROI with clear, automated reporting dashboards.",
  },
]

const capabilities = [
  {
    icon: Eye,
    title: "LLM Visibility Tracking",
    description: "Monitor how often your content appears in AI responses.",
  },
  {
    icon: Target,
    title: "Citation Analytics",
    description: "Track citation rates and understand which content gets referenced.",
  },
  {
    icon: TrendingUp,
    title: "Performance Trends",
    description: "Identify patterns and trends in content performance over time.",
  },
  {
    icon: BarChart3,
    title: "ROI Measurement",
    description: "Calculate the return on investment for content optimization.",
  },
  {
    icon: CheckCircle2,
    title: "Competitive Analysis",
    description: "Compare your visibility against competitors across AI platforms.",
  },
  {
    icon: Target,
    title: "Content Scoring",
    description: "Get detailed breakdowns of visibility scores and opportunities.",
  },
]

const features = [
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
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/platform" className="hover:text-white transition-colors">
              Platform
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/platform/features" className="hover:text-white transition-colors">
              Features
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Analytics</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <BarChart3 className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Analytics & Insights</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Content Analytics Software</h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Track content performance across AI platforms with comprehensive analytics. Measure citation rates,
              visibility scores, and ROI to optimize your content strategy.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/60">Report Time Saved</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">Real-time</div>
                <div className="text-sm text-white/60">Performance Data</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-white/60">AI Platforms Tracked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <AlertTriangle className="h-5 w-5 text-white" />
              <h2 className="text-2xl font-bold text-white">Common Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">{challenge.title}</h3>
                  <p className="text-sm text-white/70">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Lightbulb className="h-5 w-5 text-white" />
              <h2 className="text-2xl font-bold text-white">How WriteWorks Solves This</h2>
            </div>
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.challenge}</h3>
                      <p className="text-sm text-white/70">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Capabilities - Original content preserved */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Analytics Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <capability.icon className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold mb-2 text-white">{capability.title}</h3>
                  <p className="text-sm text-white/70">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Clock className="h-5 w-5 text-white" />
              <h2 className="text-2xl font-bold text-white">Time Saved on Key Tasks</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">Task</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-white">Traditional</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-white">With WriteWorks</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-white">Time Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {jobsToBeDone.map((job, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-3 px-4 text-sm text-white/80">{job.task}</td>
                      <td className="py-3 px-4 text-sm text-white/60 text-center">{job.traditional}</td>
                      <td className="py-3 px-4 text-sm text-white/80 text-center">{job.withPlatform}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-sm font-medium">
                          {job.timeSaved}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Users className="h-5 w-5 text-white" />
              <h2 className="text-2xl font-bold text-white">Who It's For</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                  <h3 className="font-semibold text-white mb-2">{audience.role}</h3>
                  <p className="text-sm text-white/70">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List - Original content preserved */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Make Data-Driven Content Decisions</h2>
            <p className="text-white/70 mb-6">
              Track, measure, and optimize your content performance across AI platforms.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
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
