import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Search, CheckCircle2, Lightbulb, Share2, Home, ChevronRight, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Knowledge Base | Your Content's Secret Weapon",
  description:
    "Build an AI-powered knowledge base that learns from your best content. Store brand guidelines, style guides, and research to power consistent AI outputs.",
  keywords: ["knowledge base", "AI knowledge", "content repository", "brand guidelines", "style guides"],
}

export default function KnowledgeBasePage() {
  const challenges = [
    {
      title: "Scattered Information",
      description: "Brand guidelines, research, and best practices spread across multiple locations.",
    },
    {
      title: "Inconsistent AI Outputs",
      description: "AI tools produce generic content without access to your specific knowledge.",
    },
    {
      title: "Slow Onboarding",
      description: "New team members take weeks to learn brand voice and content standards.",
    },
  ]

  const solutions = [
    {
      title: "Centralized Knowledge",
      description: "One source of truth for brand voice, guidelines, and content best practices.",
    },
    {
      title: "AI-Powered Context",
      description: "Your knowledge base trains our AI to produce brand-aligned content.",
    },
    {
      title: "Instant Onboarding",
      description: "New team members access all they need to create on-brand content immediately.",
    },
  ]

  const capabilities = [
    {
      icon: Search,
      title: "Easy Discovery",
      description: "Find information instantly with powerful search and intuitive organization.",
    },
    {
      icon: Share2,
      title: "Team Collaboration",
      description: "Share knowledge across teams and ensure everyone has access to the information they need.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "Build institutional knowledge and onboard new team members faster with comprehensive documentation.",
    },
  ]

  const jobsToBeDone = [
    { task: "Find brand guidelines", traditional: "15 min", withPlatform: "10 sec", saved: "99%" },
    { task: "Onboard new writer", traditional: "2 weeks", withPlatform: "2 days", saved: "86%" },
    { task: "Update style guide", traditional: "4 hours", withPlatform: "30 min", saved: "88%" },
    { task: "Share best practices", traditional: "1 hour", withPlatform: "1 click", saved: "99%" },
  ]

  const targetAudience = [
    { role: "Content Teams", description: "Access brand knowledge to create consistent content" },
    { role: "Brand Managers", description: "Maintain and distribute brand guidelines" },
    { role: "Marketing Leaders", description: "Ensure team alignment on messaging and voice" },
  ]

  const features = [
    "Rich text article editor",
    "Category organization",
    "Tag management",
    "Full-text search",
    "Related articles",
    "Version history",
    "Access controls",
    "Article analytics",
    "Feedback collection",
    "Export capabilities",
    "AI context integration",
    "Custom branding",
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href="/platform" className="text-white/60 hover:text-white transition-colors">
              Platform
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href="/platform/features" className="text-white/60 hover:text-white transition-colors">
              Features
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <span className="text-white">Knowledge Base</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <BookOpen className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Knowledge Management</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              AI Knowledge Base | Your Content's Secret Weapon
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Build an AI-powered knowledge base that learns from your best content. Store brand guidelines, style
              guides, and research to power consistent AI outputs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-xs text-white/60">Faster Search</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">86%</div>
                <div className="text-xs text-white/60">Faster Onboarding</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Brand Consistency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">The Challenges</h2>
              <p className="text-white/70">Common knowledge management problems teams face</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <AlertTriangle className="h-8 w-8 text-white/60 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                  <p className="text-sm text-white/70">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">How WriteWorks Solves This</h2>
              <p className="text-white/70">Your knowledge powering every piece of content</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <Zap className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-sm text-white/70">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">Key Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <capability.icon className="h-10 w-10 text-white mb-3" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{capability.title}</h3>
                  <p className="text-sm text-white/70">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs to Be Done */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Time Saved on Key Tasks</h2>
              <p className="text-white/70">See how much faster you can manage knowledge</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/80 font-medium">Task</th>
                    <th className="text-center py-3 px-4 text-white/80 font-medium">Traditional</th>
                    <th className="text-center py-3 px-4 text-white/80 font-medium">With WriteWorks</th>
                    <th className="text-center py-3 px-4 text-white/80 font-medium">Time Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {jobsToBeDone.map((job, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-3 px-4 text-white/70">{job.task}</td>
                      <td className="py-3 px-4 text-center text-white/50">{job.traditional}</td>
                      <td className="py-3 px-4 text-center text-white">{job.withPlatform}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2 py-1 rounded bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-medium">
                          {job.saved}
                        </span>
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Built For</h2>
              <p className="text-white/70">Teams that need organized brand knowledge</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="p-5 rounded-lg border border-white/10 bg-white/5 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">{audience.role}</h3>
                  <p className="text-sm text-white/70">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Build Your Knowledge Base?</h2>
            <p className="text-white/70 mb-6">
              Centralize team knowledge and improve AI outputs. Try knowledge base free for 14 days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
                asChild
              >
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
