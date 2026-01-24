import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, TrendingDown, Users, Target, Zap, Megaphone, CheckCircle, Calendar } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Demand Generation Content Writing & Management Software | WriteWorks",
  description: "Create pipeline 3x faster with AI-powered campaign content. Ship demand gen campaigns in days, not weeks, while improving lead quality and conversion rates.",
}

export default function DemandGenerationPage() {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Pipeline Content Gap",
      description: "Need 10 campaigns per quarter but only shipping 3. Missing pipeline targets.",
    },
    {
      icon: Users,
      title: "Low Lead Quality",
      description: "Content attracts visitors but doesn't qualify or convert the right prospects.",
    },
    {
      icon: Target,
      title: "Campaign Velocity",
      description: "Campaigns take weeks to launch. Can't test and iterate fast enough to hit goals.",
    },
  ]

  const solutions = [
    {
      title: "Campaign Content at Scale",
      description: "Generate complete campaign assets—landing pages, emails, ads—in hours instead of weeks.",
      icon: Zap,
    },
    {
      title: "Lead Quality Optimization",
      description: "AI-powered content that qualifies prospects and drives high-intent conversions.",
      icon: Target,
    },
    {
      title: "Rapid Testing & Iteration",
      description: "Create multiple variations to test messaging, offers, and positioning quickly.",
      icon: Megaphone,
    },
    {
      title: "Pipeline Visibility",
      description: "Track content performance and optimize for pipeline generation.",
      icon: CheckCircle,
    },
  ]

  const jobs = [
    { task: "Campaign landing pages", time: "2 hours", saved: "75%" },
    { task: "Email nurture sequences", time: "3 hours", saved: "70%" },
    { task: "Lead magnets & content offers", time: "4 hours", saved: "80%" },
    { task: "Ad copy variations", time: "1 hour", saved: "85%" },
    { task: "Sales enablement content", time: "2 hours", saved: "70%" },
    { task: "Campaign briefs", time: "1 hour", saved: "75%" },
  ]

  const audiences = [
    {
      role: "Demand Gen Managers",
      description: "Launch more campaigns without adding headcount",
    },
    {
      role: "Marketing Ops",
      description: "Scale content production efficiently",
    },
    {
      role: "Growth Marketers",
      description: "Test and iterate faster for pipeline growth",
    },
    {
      role: "CMOs",
      description: "Hit pipeline targets with less content debt",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Demand Generation" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Role</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Demand Generation Content Writing &amp; Management Software
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Create pipeline and conversions with high-performing content. Ship campaigns faster and scale lead generation.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">75%</div>
                <div className="text-xs text-white/60">Faster Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4x</div>
                <div className="text-xs text-white/60">Lead Quality</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">Pipeline Growth</div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Demand Generation Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Pipeline targets grow but content resources stay flat
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

      {/* Solutions Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How WriteWorks Solves It</h2>
            <p className="text-white/70">AI-powered demand generation built for pipeline</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{solution.title}</h3>
                  <p className="text-sm text-white/60">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs To Be Done */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Jobs To Be Done</h2>
            <p className="text-white/70">Time saved on demand generation tasks</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 border-b border-white/10 text-sm font-medium text-white/80">
                <div>Task</div>
                <div className="text-center">New Time</div>
                <div className="text-right">Time Saved</div>
              </div>
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-4 text-sm ${
                    index !== jobs.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="text-white">{job.task}</div>
                  <div className="text-center text-white/70">{job.time}</div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                      {job.saved}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Built For</h2>
            <p className="text-white/70">Demand generation professionals at every level</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {audiences.map((audience, index) => (
              <div key={index} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                <div className="text-lg font-semibold mb-1">{audience.role}</div>
                <div className="text-sm text-white/60">{audience.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Hit Your Pipeline Targets?</h2>
            <p className="text-white/70 mb-6">
              Join demand gen teams creating more pipeline with less effort
            </p>
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
