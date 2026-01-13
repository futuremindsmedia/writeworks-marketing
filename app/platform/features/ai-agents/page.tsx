import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Bot, Sparkles, CheckCircle2, Zap, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "80+ Content Writing Agents | WriteWorks AI Platform",
  description:
    "Access 80+ specialized Content Writing agents trained for specific content types, industries, and use cases. Get expert-level content optimization for any scenario.",
  keywords: ["Content Writing agents", "specialized AI", "content agents", "AI assistants", "content optimization"],
}

export default function AIAgentsPage() {
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
              <Bot className="h-4 w-4 text-[#6366F1]" />
              <span className="text-sm font-medium text-white">AI & Optimization</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Content Writing Agents Software
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access a library of specialized Content Writing agents trained for specific content types, industries, and
              use cases. From technical documentation to creative marketing, we have an expert agent for every need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Explore Content Writing Agents
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

      {/* Agent Categories */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Agent Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Marketing Content Writing Agents",
                  count: "15+",
                  examples: ["Blog posts", "Social media", "Email campaigns", "Ad copy"],
                },
                {
                  icon: Users,
                  title: "Technical Content Writing Agents",
                  count: "12+",
                  examples: ["Documentation", "API guides", "Tutorials", "Release notes"],
                },
                {
                  icon: Sparkles,
                  title: "Creative Content Writing Agents",
                  count: "10+",
                  examples: ["Storytelling", "Brand narratives", "Case studies", "Thought leadership"],
                },
                {
                  icon: Zap,
                  title: "SEO Content Writing Agents",
                  count: "8+",
                  examples: ["Product pages", "Landing pages", "Meta descriptions", "Schema markup"],
                },
                {
                  icon: Bot,
                  title: "Industry Content Writing Agents",
                  count: "20+",
                  examples: ["SaaS", "E-commerce", "Healthcare", "Finance"],
                },
                {
                  icon: CheckCircle2,
                  title: "Specialized Content Writing Agents",
                  count: "15+",
                  examples: ["Press releases", "White papers", "Research summaries", "FAQs"],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#6366F1]/20 bg-card/50 backdrop-blur-sm hover:border-[#6366F1]/40 hover:shadow-lg hover:shadow-[#6366F1]/10 transition-all duration-300"
                >
                  <category.icon className="h-12 w-12 text-[#6366F1] mb-4" />
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <span className="text-sm font-medium text-[#6366F1]">{category.count}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {category.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#6366F1]" />
                        {example}
                      </li>
                    ))}
                  </ul>
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
                  title: "Choose Your Content Writing Agent",
                  description:
                    "Browse our library of 80+ Content Writing agents and select the one that matches your content type and goals.",
                },
                {
                  step: "02",
                  title: "Provide Context",
                  description:
                    "Give the Content Writing agent your topic, target audience, and any specific requirements or guidelines.",
                },
                {
                  step: "03",
                  title: "Generate Content",
                  description:
                    "The Content Writing agent creates optimized content tailored to your needs, with built-in LLM visibility optimization.",
                },
                {
                  step: "04",
                  title: "Refine and Publish",
                  description: "Review, edit, and refine the content with additional AI actions before publishing.",
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
                "80+ Content Writing agents",
                "Industry-specific training",
                "Custom Content Writing agent creation",
                "Multi-language support",
                "Brand voice integration",
                "Context-aware generation",
                "LLM optimization built-in",
                "Tone and style controls",
                "Collaborative Content Writing agent workflows",
                "Performance tracking",
                "API access",
                "Regular Content Writing agent updates",
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Get Expert-Level Content for Any Use Case
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access 80+ Content Writing agents trained for your specific needs. Start your free trial today.
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
