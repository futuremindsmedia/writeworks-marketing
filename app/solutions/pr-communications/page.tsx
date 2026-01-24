import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, AlertTriangle, Target, Calendar } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "PR & Communications Content Writing & Management Software | WriteWorks",
  description: "Craft clear, aligned messaging 70% faster with AI-powered PR tools. Move quickly on announcements and crises while maintaining accuracy and brand consistency.",
}

export default function PRCommunicationsPage() {
  const challenges = [
    {
      icon: Clock,
      title: "Speed vs. Accuracy",
      description: "PR requires fast responses but messaging must be precise and aligned with stakeholders.",
    },
    {
      icon: AlertTriangle,
      title: "Crisis Management",
      description: "When crises hit, you need polished statements immediately but can't sacrifice quality.",
    },
    {
      icon: Target,
      title: "Media Coverage",
      description: "Press releases and pitches don't get picked up because they lack the right angle or structure.",
    },
  ]

  const solutions = [
    {
      challenge: "Speed vs. Accuracy",
      solution: "Pre-approved messaging frameworks enable fast turnaround while maintaining accuracy and alignment.",
    },
    {
      challenge: "Crisis Management",
      solution: "Crisis communication agents generate statements in minutes with built-in approval workflows.",
    },
    {
      challenge: "Media Coverage",
      solution: "PR-optimized agents create newsworthy releases and personalized pitches that journalists want.",
    },
  ]

  const jobsToBeDone = [
    { task: "Press releases", timeSaved: "75%", before: "4 hours", after: "1 hour" },
    { task: "Media pitches", timeSaved: "80%", before: "2 hours", after: "24 mins" },
    { task: "Crisis statements", timeSaved: "85%", before: "3 hours", after: "27 mins" },
    { task: "Executive quotes", timeSaved: "70%", before: "1 hour", after: "18 mins" },
    { task: "Internal comms", timeSaved: "65%", before: "2 hours", after: "42 mins" },
  ]

  const targetAudience = [
    { role: "PR Directors", description: "Move fast without losing control" },
    { role: "Comms Managers", description: "Create aligned messaging quickly" },
    { role: "Media Relations", description: "Craft pitches that get coverage" },
    { role: "Corporate Comms", description: "Handle crisis communications" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "PR & Communications" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions for PR Teams</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">PR & Communications Content Writing &amp; Management Software</h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Move fast without losing control. Craft clear, aligned messaging at speed.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">75%</div>
                <div className="text-xs text-white/60">Faster Releases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">More Pitches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-xs text-white/60">Crisis Response</div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The PR & Communications Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              PR teams need speed without sacrificing accuracy or stakeholder alignment
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
              AI-powered PR tools for modern communications teams
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-lg font-semibold mb-2">{solution.challenge}</h3>
                <p className="text-sm text-white/60">{solution.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs to Be Done */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Jobs To Be Done</h2>
            <p className="text-white/70">Time saved on common PR tasks</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 border-b border-white/10 text-sm font-medium text-white/80">
              <div>Task</div>
              <div className="text-center">New Time</div>
              <div className="text-right">Time Saved</div>
            </div>
            {jobsToBeDone.map((job, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-4 text-sm ${
                  index !== jobsToBeDone.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="text-white">{job.task}</div>
                <div className="text-center text-white/70">{job.after}</div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                    {job.timeSaved}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Built For</h2>
            <p className="text-white/70">PR and communications professionals</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetAudience.map((audience, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5 text-center">
                <h3 className="text-sm font-semibold mb-2">{audience.role}</h3>
                <p className="text-xs text-white/60">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform PR & Communications?</h2>
            <p className="text-white/70 mb-6">
              Join PR teams creating impactful messaging that drives media coverage and brand reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">
                  Start Free <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="/demo">
                  <Calendar className="mr-2 w-4 h-4 inline" /> Talk to Sales
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
