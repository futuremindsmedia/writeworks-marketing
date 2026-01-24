import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Megaphone, Users, AlertTriangle, Calendar, CheckCircle, Zap, BookOpen, Target } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Corporate Communications Content Software | WriteWorks",
  description: "Transform corporate communications with AI-powered content creation. Align internal messaging, executive content, and company-wide announcements at scale with consistent quality.",
}

export default function CorporateCommunicationsPage() {
  const challenges = [
    {
      icon: Megaphone,
      title: "Message Consistency",
      description: "100 teams, 100 different messages. Can't keep executive and internal comms aligned.",
    },
    {
      icon: Users,
      title: "Internal Engagement",
      description: "Employees don't read announcements. Content isn't reaching or resonating with teams.",
    },
    {
      icon: AlertTriangle,
      title: "Executive Bottleneck",
      description: "Leadership needs speeches, memos, and updates but comms team is underwater.",
    },
  ]

  const solutions = [
    {
      icon: Megaphone,
      title: "Aligned Messaging",
      description: "Create consistent internal communications that keep all teams aligned on company direction.",
    },
    {
      icon: CheckCircle,
      title: "Executive Content",
      description: "Generate speeches, memos, and leadership updates that maintain authentic voice and authority.",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Produce timely company-wide announcements and crisis communications when it matters most.",
    },
    {
      icon: BookOpen,
      title: "Employee Engagement",
      description: "Create compelling newsletters, updates, and content that employees actually read.",
    },
  ]

  const audiences = [
    {
      icon: Megaphone,
      role: "Corporate Comms Leaders",
      description: "Align messaging across the organization and scale internal communications.",
    },
    {
      icon: Users,
      role: "Internal Comms Teams",
      description: "Create engaging employee content and announcements faster than ever.",
    },
    {
      icon: Target,
      role: "Executive Assistants",
      description: "Draft speeches, memos, and leadership content that maintains executive voice.",
    },
    {
      icon: BookOpen,
      role: "Employee Experience",
      description: "Produce communications that engage employees and build company culture.",
    },
  ]

  const jobs = [
    { task: "Executive speeches", time: "2 hours", saved: "75%" },
    { task: "Company-wide memos", time: "1 hour", saved: "80%" },
    { task: "Internal newsletters", time: "3 hours", saved: "70%" },
    { task: "Crisis communications", time: "30 mins", saved: "85%" },
    { task: "Town hall content", time: "2 hours", saved: "75%" },
    { task: "Policy announcements", time: "1 hour", saved: "70%" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Corporate Communications" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Role</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Corporate Communications Content Software
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Align internal messaging and executive content. Keep everyone on the same page with consistent communications.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-xs text-white/60">Faster Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Message Alignment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4x</div>
                <div className="text-xs text-white/60">Engagement</div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Corporate Communications Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Company growth creates message fragmentation and comms overload
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

      {/* Solution Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How WriteWorks Solves It</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              AI-powered corporate communications that keep teams aligned
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

      {/* Jobs To Be Done */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Jobs To Be Done</h2>
            <p className="text-white/70">Time saved on common corporate communications tasks</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg border border-white/10 overflow-hidden">
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
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Built For</h2>
            <p className="text-white/70">Corporate communications professionals</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map((audience, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5 text-center">
                <audience.icon className="w-8 h-8 text-white/80 mb-3 mx-auto" />
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Align Your Corporate Communications?</h2>
            <p className="text-white/70 mb-6">
              Join corporate communications teams creating consistent, engaging content at scale.
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
