import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, AlertTriangle, Target } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Field & Events Marketing Solutions | WriteWorks AI",
  description: "Maximize event attendance and create meaningful experiences with AI-powered content creation.",
}

export default function FieldEventsMarketingPage() {
  const challenges = [
    {
      icon: Clock,
      title: "Content Crunch",
      description:
        "Events require massive amounts of content - invites, landing pages, social, follow-ups - all on tight deadlines.",
    },
    {
      icon: AlertTriangle,
      title: "Inconsistent Experience",
      description: "Pre-event, during-event, and post-event content often feels disconnected.",
    },
    {
      icon: Target,
      title: "Low Registration Rates",
      description: "Generic event promotion fails to drive the registrations and attendance needed.",
    },
  ]

  const solutions = [
    {
      challenge: "Content Crunch",
      solution: "Event-specific agents create all content types - from save-the-dates to post-event recaps - in hours.",
    },
    {
      challenge: "Inconsistent Experience",
      solution: "Unified event templates ensure consistent messaging and branding across the entire event lifecycle.",
    },
    {
      challenge: "Low Registration Rates",
      solution: "Personalized invitation sequences and targeted promotion content drive higher registration rates.",
    },
  ]

  const jobsToBeDone = [
    { task: "Event landing pages", timeSaved: "75%", before: "4 hours", after: "1 hour" },
    { task: "Invitation sequences", timeSaved: "80%", before: "3 hours", after: "36 mins" },
    { task: "Social promotion content", timeSaved: "70%", before: "2 hours", after: "36 mins" },
    { task: "Speaker bios & sessions", timeSaved: "65%", before: "3 hours", after: "1 hour" },
    { task: "Post-event follow-ups", timeSaved: "75%", before: "2 hours", after: "30 mins" },
  ]

  const targetAudience = [
    { role: "Event Marketers", description: "Create all event content faster" },
    { role: "Field Marketing Managers", description: "Scale regional events efficiently" },
    { role: "Conference Organizers", description: "Manage speaker and session content" },
    { role: "Demand Gen Teams", description: "Drive event registrations at scale" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Field & Events Marketing" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions for Event Teams</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Event Marketing Content AI: From Invites to Follow-Ups
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Maximize event attendance and create meaningful experiences. Scale event content without the crunch.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">75%</div>
                <div className="text-xs text-white/60">Faster Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2x</div>
                <div className="text-xs text-white/60">More Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">45%</div>
                <div className="text-xs text-white/60">Higher Registration</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <Link href="https://app.writeworks.ai/sign-up">
                  Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
              >
                <a href="https://app.writeworks.ai/demo">Book Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Events Marketing Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Events require massive content volume on tight timelines</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How WriteWorks Solves This</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {solutions.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">{item.challenge}</div>
                  <div className="text-white/90">{item.solution}</div>
                </div>
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
            <p className="text-white/70">Real productivity gains for event marketing teams</p>
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
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {targetAudience.map((persona, index) => (
              <div key={index} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                <div className="text-lg font-semibold mb-1">{persona.role}</div>
                <div className="text-sm text-white/60">{persona.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Elevate Your Events</h2>
            <p className="text-white/70 mb-6">
              Join event teams using WriteWorks to drive more registrations and engagement
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
              asChild
            >
              <Link href="https://app.writeworks.ai/sign-up">
                Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
