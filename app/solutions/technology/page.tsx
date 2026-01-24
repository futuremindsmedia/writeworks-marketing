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
                  Start Free <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
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
      {/* Solutions section will be added here if needed */}

      {/* Jobs to Be Done */}
      {/* Jobs to Be Done section will be added here if needed */}

      {/* Target Audience */}
      {/* Target Audience section will be added here if needed */}

      {/* CTA Section */}
      {/* CTA section will be added here if needed */}
    </div>
  )
}
