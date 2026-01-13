import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, TrendingUp, CheckCircle2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Calendar Software | WriteWorks AI Platform",
  description:
    "Plan, schedule, and manage your content strategy with an intuitive content calendar. Visualize your content pipeline and never miss a deadline.",
  keywords: ["content calendar", "content planning", "scheduling", "editorial calendar", "content strategy"],
}

export default function ContentCalendarPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Back Navigation */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Features
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Calendar className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Planning & Scheduling</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Content Calendar Software
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Plan, schedule, and manage your content strategy with an intuitive content calendar. Visualize your
              content pipeline, coordinate with your team, and never miss a deadline.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Better Planning",
                  description: "Visualize your content pipeline weeks or months in advance and plan strategically.",
                },
                {
                  icon: Users,
                  title: "Team Coordination",
                  description: "Keep everyone aligned with shared calendars, assignments, and deadline tracking.",
                },
                {
                  icon: TrendingUp,
                  title: "Consistent Publishing",
                  description: "Maintain a steady content flow and never miss important publishing dates or campaigns.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <benefit.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">How It Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Create Content Items",
                  description:
                    "Add content pieces to your calendar with titles, descriptions, and target publish dates.",
                },
                {
                  step: "02",
                  title: "Assign & Schedule",
                  description: "Assign content to team members, set deadlines, and schedule publication dates.",
                },
                {
                  step: "03",
                  title: "Track Progress",
                  description: "Monitor content status, track deadlines, and get notifications for upcoming tasks.",
                },
                {
                  step: "04",
                  title: "Publish & Analyze",
                  description: "Publish on schedule and analyze your content calendar performance over time.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-2xl font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-white/70 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Visual calendar interface",
                "Drag-and-drop scheduling",
                "Multiple calendar views",
                "Team member assignments",
                "Deadline notifications",
                "Content status tracking",
                "Recurring content support",
                "Campaign planning",
                "Calendar sharing",
                "Export to external calendars",
                "Content type filtering",
                "Publishing automation",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Plan Your Content Strategy?</h2>
            <p className="text-xl text-white/70 mb-8">
              Get organized with a visual content calendar. Try content planning free for 14 days.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free Trial
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
