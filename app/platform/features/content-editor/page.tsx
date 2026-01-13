import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Sparkles, TrendingUp, Zap, CheckCircle2, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Editor with LLM Scoring | WriteWorks AI Platform",
  description:
    "Create and optimize content with real-time LLM visibility scoring. Get instant feedback on how likely your content is to be cited by AI systems.",
  keywords: ["content editor", "LLM scoring", "AI optimization", "content visibility", "citation likelihood"],
}

export default function ContentEditorPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Back Navigation */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Features
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#8B5CF6]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-6">
              <Sparkles className="h-4 w-4 text-[#6366F1]" />
              <span className="text-sm font-medium text-white">Content Creation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Content Editor Software
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create and optimize content with real-time LLM visibility scoring. Get instant feedback on how likely your
              content is to be cited by AI systems like ChatGPT, Claude, and Perplexity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Real-Time Scoring",
                  description:
                    "See your LLM visibility score update in real-time as you write, helping you optimize content on the fly.",
                },
                {
                  icon: Zap,
                  title: "Instant Feedback",
                  description:
                    "Get immediate suggestions on how to improve your content's citation likelihood across all major AI platforms.",
                },
                {
                  icon: BarChart3,
                  title: "Performance Insights",
                  description:
                    "Track how your content performs across different LLMs and identify optimization opportunities.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#6366F1]/20 bg-card/50 backdrop-blur-sm hover:border-[#6366F1]/40 hover:shadow-lg hover:shadow-[#6366F1]/10 transition-all duration-300"
                >
                  <benefit.icon className="h-12 w-12 text-[#6366F1] mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-br from-transparent via-[#8B5CF6]/10 to-[#6366F1]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">How It Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Write Your Content",
                  description:
                    "Use our intuitive rich text editor to create your content. Format text, add images, and structure your content naturally.",
                },
                {
                  step: "02",
                  title: "Get Real-Time Scores",
                  description:
                    "As you write, our AI analyzes your content and provides real-time LLM visibility scores showing citation likelihood.",
                },
                {
                  step: "03",
                  title: "Optimize with Suggestions",
                  description:
                    "Review AI-powered suggestions to improve your content's structure, clarity, and citation potential.",
                },
                {
                  step: "04",
                  title: "Publish with Confidence",
                  description:
                    "Once optimized, publish your content knowing it's positioned for maximum visibility across AI platforms.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-[#6366F1]/30">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Real-time LLM visibility scoring",
                "Multi-platform citation analysis",
                "AI-powered content suggestions",
                "Rich text formatting tools",
                "Image and media support",
                "Version history and drafts",
                "Collaborative editing",
                "Export to multiple formats",
                "SEO optimization tools",
                "Plagiarism detection",
                "Readability analysis",
                "Brand voice consistency checks",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#6366F1] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-br from-[#6366F1]/15 via-[#8B5CF6]/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Optimize Your Content?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating content that gets cited by AI systems. Try our content editor free for 14 days.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
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
