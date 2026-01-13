import type { Metadata } from "next"
import Link from "next/link"
import { Home, ChevronRight, Bot, CheckCircle2, Users, Clock, AlertTriangle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Agents for Content | Autonomous Content Creation",
  description:
    "Deploy AI Agents for content that research, write, and optimize autonomously. Scale content production while maintaining quality and brand voice.",
  keywords: ["Content Writing agents", "specialized AI", "content agents", "AI assistants", "content optimization"],
}

const challenges = [
  {
    title: "Content Production Bottlenecks",
    description: "Teams can't produce enough content to meet demand, causing missed opportunities.",
  },
  {
    title: "Inconsistent Quality at Scale",
    description: "Quality drops as volume increases, damaging brand reputation and effectiveness.",
  },
  {
    title: "High Content Costs",
    description: "Hiring writers or agencies is expensive and doesn't scale economically.",
  },
  {
    title: "Lack of Specialization",
    description: "Generic AI tools don't understand industry nuances or content type requirements.",
  },
]

const solutions = [
  {
    challenge: "Content Production Bottlenecks",
    solution: "80+ specialized AI agents work 24/7 to produce content, eliminating capacity constraints.",
  },
  {
    challenge: "Inconsistent Quality at Scale",
    solution: "Each agent is trained for specific content types, ensuring consistent quality regardless of volume.",
  },
  {
    challenge: "High Content Costs",
    solution: "AI agents reduce content production costs by 70% while increasing output 5x.",
  },
  {
    challenge: "Lack of Specialization",
    solution: "Industry-specific agents understand SaaS, e-commerce, healthcare, finance, and 20+ verticals.",
  },
]

const jobsToBeDone = [
  { task: "Research and outline content", traditional: "2 hours", withPlatform: "10 min", timeSaved: "92%" },
  { task: "Write first draft", traditional: "4 hours", withPlatform: "30 min", timeSaved: "88%" },
  { task: "Create technical documentation", traditional: "6 hours", withPlatform: "1 hour", timeSaved: "83%" },
  { task: "Generate social media content", traditional: "1 hour", withPlatform: "5 min", timeSaved: "92%" },
  { task: "Produce case study", traditional: "8 hours", withPlatform: "2 hours", timeSaved: "75%" },
]

const targetAudience = [
  {
    role: "Content Teams",
    description: "Scale content production without scaling headcount or sacrificing quality.",
  },
  {
    role: "Marketing Leaders",
    description: "Meet content demands across all channels with specialized AI assistance.",
  },
  {
    role: "Agencies",
    description: "Serve more clients with consistent, high-quality content delivery.",
  },
]

const agentCategories = [
  { title: "Marketing Agents", count: "15+", examples: ["Blog posts", "Social media", "Email campaigns", "Ad copy"] },
  { title: "Technical Agents", count: "12+", examples: ["Documentation", "API guides", "Tutorials", "Release notes"] },
  {
    title: "Creative Agents",
    count: "10+",
    examples: ["Storytelling", "Brand narratives", "Case studies", "Thought leadership"],
  },
  {
    title: "SEO Agents",
    count: "8+",
    examples: ["Product pages", "Landing pages", "Meta descriptions", "Schema markup"],
  },
  { title: "Industry Agents", count: "20+", examples: ["SaaS", "E-commerce", "Healthcare", "Finance"] },
  {
    title: "Specialized Agents",
    count: "15+",
    examples: ["Press releases", "White papers", "Research summaries", "FAQs"],
  },
]

const features = [
  "80+ Content Writing agents",
  "Industry-specific training",
  "Custom agent creation",
  "Multi-language support",
  "Brand voice integration",
  "Context-aware generation",
  "LLM optimization built-in",
  "Tone and style controls",
  "Collaborative workflows",
  "Performance tracking",
  "API access",
  "Regular agent updates",
]

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/platform" className="hover:text-white transition-colors">
              Platform
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/platform/features" className="hover:text-white transition-colors">
              Features
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">AI Agents</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Bot className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">AI & Automation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">AI Content Writing Agents Software</h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Access a library of 80+ specialized Content Writing agents trained for specific content types, industries,
              and use cases. From technical documentation to creative marketing, we have an expert agent for every need.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Explore AI Agents
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">80+</div>
                <div className="text-sm text-white/60">Specialized Agents</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">5x</div>
                <div className="text-sm text-white/60">Content Output</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-sm text-white/60">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <AlertTriangle className="h-5 w-5 text-white" />
              <h2 className="text-2xl font-bold text-white">Common Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">{challenge.title}</h3>
                  <p className="text-sm text-white/70">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Lightbulb className="h-5 w-5 text-white" />
              <h2 className="text-2xl font-bold text-white">How WriteWorks Solves This</h2>
            </div>
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.challenge}</h3>
                      <p className="text-sm text-white/70">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Categories - Original content preserved */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Agent Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agentCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white">{category.title}</h3>
                    <span className="text-sm font-medium text-white/60">{category.count}</span>
                  </div>
                  <ul className="space-y-1 text-sm text-white/70">
                    {category.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/40" />
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

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Clock className="h-5 w-5 text-white" />
              <h2 className="text-2xl font-bold text-white">Time Saved on Key Tasks</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">Task</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-white">Traditional</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-white">With WriteWorks</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-white">Time Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {jobsToBeDone.map((job, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-3 px-4 text-sm text-white/80">{job.task}</td>
                      <td className="py-3 px-4 text-sm text-white/60 text-center">{job.traditional}</td>
                      <td className="py-3 px-4 text-sm text-white/80 text-center">{job.withPlatform}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-sm font-medium">
                          {job.timeSaved}
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

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Users className="h-5 w-5 text-white" />
              <h2 className="text-2xl font-bold text-white">Who It's For</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                  <h3 className="font-semibold text-white mb-2">{audience.role}</h3>
                  <p className="text-sm text-white/70">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List - Original content preserved */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Get Expert-Level Content for Any Use Case</h2>
            <p className="text-white/70 mb-6">
              Access 80+ AI agents trained for your specific needs. Start your free trial today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
