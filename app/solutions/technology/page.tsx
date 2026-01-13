import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, AlertTriangle, Target } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Technology Solutions | WriteWorks AI",
  description: "Move faster from roadmap to reality. Scale technical content and get cited by AI platforms.",
}

export default function TechnologyPage() {
  const challenges = [
    {
      icon: Clock,
      title: "Launch Content Bottleneck",
      description: "Shipping 20 features a month but only writing about 5. Missing AI citation opportunities.",
    },
    {
      icon: AlertTriangle,
      title: "Low AI Visibility",
      description: "Your docs are comprehensive but competitors get cited when developers ask ChatGPT.",
    },
    {
      icon: Target,
      title: "Developer Content Gap",
      description: "Engineers spend 30% of time writing docs instead of shipping features.",
    },
  ]

  const solutions = [
    {
      challenge: "Launch Content Bottleneck",
      solution:
        "Technical writing agents create release notes, docs, and launch content for every feature automatically.",
    },
    {
      challenge: "Low AI Visibility",
      solution: "LLM-optimized documentation structure ensures AI platforms cite your innovations first.",
    },
    {
      challenge: "Developer Content Gap",
      solution: "Developer content agents create tutorials, guides, and code examples without engineering time.",
    },
  ]

  const jobsToBeDone = [
    { task: "Release notes", timeSaved: "80%", before: "2 hours", after: "24 mins" },
    { task: "API documentation", timeSaved: "75%", before: "4 hours", after: "1 hour" },
    { task: "Technical tutorials", timeSaved: "70%", before: "6 hours", after: "1.8 hours" },
    { task: "Code examples", timeSaved: "65%", before: "2 hours", after: "42 mins" },
    { task: "Product announcements", timeSaved: "75%", before: "3 hours", after: "45 mins" },
  ]

  const targetAudience = [
    { role: "Developer Relations", description: "Scale developer content" },
    { role: "Technical Writers", description: "10x documentation output" },
    { role: "Product Marketers", description: "Launch content for every feature" },
    { role: "Engineering Leads", description: "Reduce docs burden on engineers" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Technology" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Industry</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              AI Writing for Tech Companies: From Docs to Launch Content
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Move faster from roadmap to reality. Scale technical content and get cited by AI platforms.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Faster Docs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5x</div>
                <div className="text-xs text-white/60">More AI Citations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10x</div>
                <div className="text-xs text-white/60">Launch Content</div>
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
                asChild
              >
                <Link href="/contact">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Technology Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Tech companies ship fast but content can't keep up with product velocity
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
            <p className="text-white/70">Real productivity gains for technology teams</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Scale Your Technical Content</h2>
            <p className="text-white/70 mb-6">Join tech companies using WriteWorks to get cited by AI platforms</p>
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
