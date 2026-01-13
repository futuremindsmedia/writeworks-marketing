import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BookOpen, Search, CheckCircle2, Lightbulb, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Knowledge Base Software | WriteWorks AI Platform",
  description:
    "Build a centralized knowledge base for your team. Store, organize, and share information to improve collaboration and productivity.",
  keywords: ["knowledge base", "documentation", "team knowledge", "information management", "collaboration"],
}

export default function KnowledgeBasePage() {
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
              <BookOpen className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Knowledge Management</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Knowledge Base Software
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Build a centralized knowledge base for your team. Store, organize, and share information to improve
              collaboration, reduce repetitive questions, and boost productivity.
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
                  icon: Search,
                  title: "Easy Discovery",
                  description: "Find information instantly with powerful search and intuitive organization.",
                },
                {
                  icon: Share2,
                  title: "Team Collaboration",
                  description:
                    "Share knowledge across teams and ensure everyone has access to the information they need.",
                },
                {
                  icon: Lightbulb,
                  title: "Continuous Learning",
                  description:
                    "Build institutional knowledge and onboard new team members faster with comprehensive documentation.",
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
                  title: "Create Articles",
                  description: "Write and format knowledge base articles with our rich text editor and media support.",
                },
                {
                  step: "02",
                  title: "Organize Content",
                  description: "Structure your knowledge base with categories, tags, and hierarchical organization.",
                },
                {
                  step: "03",
                  title: "Enable Search",
                  description:
                    "Make information discoverable with powerful search, filters, and related content suggestions.",
                },
                {
                  step: "04",
                  title: "Maintain & Update",
                  description:
                    "Keep your knowledge base current with version control, update notifications, and analytics.",
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
                "Multi-language support",
                "Custom branding",
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Knowledge Base?</h2>
            <p className="text-xl text-white/70 mb-8">
              Centralize team knowledge and improve collaboration. Try knowledge base free for 14 days.
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
