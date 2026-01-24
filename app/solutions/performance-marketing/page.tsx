import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Clock, AlertTriangle, Calendar, Zap, TrendingUp, Users, BarChart3 } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Performance Marketing Content Software | WriteWorks",
  description:
    "Create high-converting campaigns 85% faster with AI-powered ad copy and landing pages. Generate hundreds of variations, test efficiently, and scale personalized content across all channels.",
}

export default function PerformanceMarketingPage() {
  const challenges = [
    {
      icon: Clock,
      title: "Campaign Bottlenecks",
      description: "Can't create enough ad variations and landing pages to test and optimize effectively.",
    },
    {
      icon: AlertTriangle,
      title: "Inconsistent Messaging",
      description: "Messaging varies across channels, reducing brand recognition and conversion rates.",
    },
    {
      icon: Target,
      title: "Low Conversion Rates",
      description: "Generic copy fails to resonate with specific audience segments and personas.",
    },
  ]

  const solutions = [
    {
      icon: Zap,
      title: "Rapid Variation Generation",
      description: "Generate hundreds of ad variations, landing pages, and email sequences in minutes, not weeks.",
    },
    {
      icon: Target,
      title: "Consistent Brand Messaging",
      description: "Brand knowledge base ensures consistent voice across all channels while allowing personalization.",
    },
    {
      icon: Users,
      title: "Audience-Specific Copy",
      description: "Audience-specific agents create personalized copy that speaks directly to each segment's pain points.",
    },
    {
      icon: TrendingUp,
      title: "Optimize Conversion",
      description: "Data-driven content testing and optimization to maximize campaign performance and ROI.",
    },
  ]

  const jobsToBeDone = [
    { task: "Ad copy variations", timeSaved: "85%", before: "3 hours", after: "27 mins" },
    { task: "Landing page copy", timeSaved: "75%", before: "4 hours", after: "1 hour" },
    { task: "Email sequences", timeSaved: "70%", before: "5 hours", after: "1.5 hours" },
    { task: "A/B test creation", timeSaved: "80%", before: "2 hours", after: "24 mins" },
    { task: "Audience targeting copy", timeSaved: "65%", before: "1.5 hours", after: "30 mins" },
  ]

  const targetAudience = [
    { icon: Target, role: "Performance Marketers", description: "Scale campaigns without sacrificing quality" },
    { icon: TrendingUp, role: "Growth Managers", description: "Test faster and optimize conversion" },
    { icon: BarChart3, role: "Paid Media Specialists", description: "Create more ad variations efficiently" },
    { icon: Users, role: "Demand Gen Leaders", description: "Drive pipeline with personalized content" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Performance Marketing" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions for Performance Teams</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Performance Marketing Content Software
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Drive engagement and growth with personalization at scale. Launch more campaigns, faster.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-xs text-white/60">Faster Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">More Variations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">40%</div>
                <div className="text-xs text-white/60">Higher CTR</div>
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
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="/demo">
                  <Calendar className="mr-2 w-4 h-4 inline" /> Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Performance Marketing Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Performance teams need more variations, faster iterations, and better personalization
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

      {/* How We Solve It */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How WriteWorks Solves It</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Accelerate testing, personalization, and scale across all performance channels
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <solution.icon className="w-8 h-8 text-white/80 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-white/60">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs to Be Done */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Time Saved on Key Tasks</h2>
            <p className="text-white/70">Real productivity gains for performance marketing teams</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-3 text-sm font-medium text-white/70">Task</th>
                    <th className="text-center p-3 text-sm font-medium text-white/70">Before</th>
                    <th className="text-center p-3 text-sm font-medium text-white/70">After</th>
                    <th className="text-center p-3 text-sm font-medium text-white/70">Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {jobsToBeDone.map((job, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-3 text-sm text-white/90">{job.task}</td>
                      <td className="p-3 text-sm text-white/50 text-center">{job.before}</td>
                      <td className="p-3 text-sm text-white/50 text-center">{job.after}</td>
                      <td className="p-3 text-center">
                        <span className="text-sm font-semibold text-[#6366F1]">{job.timeSaved}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Built For</h2>
            <p className="text-white/70">Performance and growth teams driving measurable results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetAudience.map((persona, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5 text-center">
                <persona.icon className="w-8 h-8 text-white/80 mb-3 mx-auto" />
                <h3 className="text-sm font-semibold mb-2">{persona.role}</h3>
                <p className="text-xs text-white/60">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Performance Marketing?</h2>
            <p className="text-white/70 mb-6">Join performance teams creating high-converting campaigns faster</p>
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
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="/demo">
                  <Calendar className="mr-2 w-4 h-4 inline" /> Book Demo
                </a>
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-4">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  )
}
