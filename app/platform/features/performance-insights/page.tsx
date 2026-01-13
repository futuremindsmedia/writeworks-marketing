import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Target, PieChart, Activity, LineChart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Performance Insights Software | WriteWorks AI",
  description:
    "Track content performance, analyze engagement metrics, and optimize your content strategy with data-driven insights.",
}

export default function PerformanceInsightsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs
            items={[
              { label: "Platform", href: "/platform" },
              { label: "Features", href: "/platform/features" },
              { label: "Performance Insights" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Performance Insights Software</h1>
            <p className="text-xl text-white/70 mb-8">
              Track content performance, analyze engagement metrics, and optimize your content strategy with
              comprehensive data-driven insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Performance Insights Matter</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <BarChart3 className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Detailed Analytics</h3>
              <p className="text-white/70">Get comprehensive analytics on content performance and engagement.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <TrendingUp className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Trend Analysis</h3>
              <p className="text-white/70">Identify trends and patterns to optimize your content strategy.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Target className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Goal Tracking</h3>
              <p className="text-white/70">Monitor progress toward content goals and KPIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How Performance Insights Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collect Data</h3>
              <p className="text-white/70 text-sm">Automatically track content performance metrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analyze Trends</h3>
              <p className="text-white/70 text-sm">Identify patterns and trends in your content data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Generate Reports</h3>
              <p className="text-white/70 text-sm">Create detailed performance reports and dashboards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimize Strategy</h3>
              <p className="text-white/70 text-sm">Use insights to improve content performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What's Included</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: BarChart3, text: "Real-time analytics dashboard" },
                { icon: TrendingUp, text: "Trend analysis tools" },
                { icon: Target, text: "Goal tracking & KPIs" },
                { icon: PieChart, text: "Engagement metrics" },
                { icon: Activity, text: "Performance monitoring" },
                { icon: LineChart, text: "Custom report builder" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/70">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Unlock Performance Insights?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Start tracking content performance today and make data-driven decisions.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
