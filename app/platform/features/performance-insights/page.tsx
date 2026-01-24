import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  TrendingUp,
  Target,
  PieChart,
  Activity,
  LineChart,
  AlertTriangle,
  Eye,
  CheckCircle,
  Users,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Performance Insights Software | WriteWorks AI",
  description:
    "Track content performance, analyze engagement metrics, and optimize your content strategy with data-driven insights.",
}

const challenges = [
  {
    icon: AlertTriangle,
    title: "Blind Content Decisions",
    description:
      "Creating content without data means guessing what works, leading to wasted resources and missed opportunities.",
  },
  {
    icon: Eye,
    title: "Scattered Analytics",
    description: "Performance data spread across multiple tools makes it impossible to see the full picture.",
  },
  {
    icon: Target,
    title: "Unclear ROI",
    description: "Without proper tracking, demonstrating content value to stakeholders becomes a challenge.",
  },
]

const solutions = [
  {
    challenge: "Blind Content Decisions",
    solution:
      "AI-powered performance insights show exactly what content drives results, enabling data-backed decisions.",
  },
  {
    challenge: "Scattered Analytics",
    solution: "Unified dashboard brings all your content metrics into one place for comprehensive analysis.",
  },
  {
    challenge: "Unclear ROI",
    solution: "Built-in ROI tracking and reporting tools demonstrate content value with clear metrics.",
  },
]

const capabilities = [
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Get comprehensive analytics on content performance and engagement across all channels.",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Identify trends and patterns to optimize your content strategy proactively.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Monitor progress toward content goals and KPIs with real-time dashboards.",
  },
]

const jobsToBeDone = [
  { task: "Track content performance", timeSaved: "75%" },
  { task: "Generate performance reports", timeSaved: "80%" },
  { task: "Identify top-performing content", timeSaved: "85%" },
  { task: "Analyze audience engagement", timeSaved: "70%" },
  { task: "Measure content ROI", timeSaved: "90%" },
]

const targetAudience = [
  {
    role: "Content Strategists",
    description: "Make data-driven content decisions based on real performance metrics.",
  },
  {
    role: "Marketing Leaders",
    description: "Demonstrate content ROI and justify budget with clear analytics.",
  },
  {
    role: "Content Teams",
    description: "Understand what content resonates and optimize future creation.",
  },
]

export default function PerformanceInsightsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <nav className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Platform", href: "/platform" },
                { label: "Features", href: "/platform/features" },
                { label: "Performance Insights" },
              ]}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Performance Insights Software</h1>
            <p className="text-lg text-white/70 mb-6">
              Track content performance, analyze engagement metrics, and optimize your content strategy with
              comprehensive data-driven insights.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">Better Decisions</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Time Saved</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">Real-time</div>
                <div className="text-xs text-white/60">Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">The Challenges You Face</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <challenge.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-white/70 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How WriteWorks Solves These Challenges</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {solutions.map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.challenge}</h3>
                    <p className="text-white/70 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <capability.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-white/70 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs to be Done */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Jobs to Be Done</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-4 border-b border-white/10 bg-white/5">
                <div className="text-sm font-medium text-white">Task</div>
                <div className="text-sm font-medium text-white text-right">Time Saved</div>
              </div>
              {jobsToBeDone.map((job, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-4 border-b border-white/10 last:border-0">
                  <div className="text-sm text-white/70">{job.task}</div>
                  <div className="text-sm text-white font-medium text-right">{job.timeSaved}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Who It's For</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                <Users className="w-10 h-10 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">{audience.role}</h3>
                <p className="text-white/70 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What's Included</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: BarChart3, text: "Real-time analytics dashboard" },
                { icon: TrendingUp, text: "Trend analysis tools" },
                { icon: Target, text: "Goal tracking & KPIs" },
                { icon: PieChart, text: "Engagement metrics" },
                { icon: Activity, text: "Performance monitoring" },
                { icon: LineChart, text: "Custom report builder" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
                  <feature.icon className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/70 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Unlock Performance Insights?</h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Start tracking content performance today and make data-driven decisions.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
