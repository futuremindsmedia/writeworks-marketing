import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Sparkles,
  Zap,
  Brain,
  HelpCircle,
  Clock,
  AlertTriangle,
  Search,
  CheckCircle,
  Users,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "AI Chat Assistant Software | WriteWorks AI",
  description: "Get instant help and content suggestions with an intelligent AI chat assistant available 24/7.",
}

const challenges = [
  {
    icon: AlertTriangle,
    title: "Waiting for Help",
    description: "Support tickets and waiting for team members slows down content creation.",
  },
  {
    icon: Search,
    title: "Finding Answers",
    description: "Searching through documentation and guidelines wastes valuable creative time.",
  },
  {
    icon: Brain,
    title: "Writer's Block",
    description: "Getting stuck without immediate guidance or suggestions derails productivity.",
  },
]

const solutions = [
  {
    challenge: "Waiting for Help",
    solution: "24/7 AI assistant provides instant answers and guidance without waiting for human support.",
  },
  {
    challenge: "Finding Answers",
    solution: "Context-aware AI understands your content and surfaces relevant help automatically.",
  },
  {
    challenge: "Writer's Block",
    solution: "Smart suggestions and creative prompts help you push through any creative obstacles.",
  },
]

const capabilities = [
  {
    icon: MessageSquare,
    title: "Instant Support",
    description: "Get immediate answers to questions and help with content creation anytime.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description: "Receive intelligent content suggestions and improvements in real-time.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access AI assistance anytime, anywhere, without waiting for support.",
  },
]

const jobsToBeDone = [
  { task: "Get content suggestions", timeSaved: "80%" },
  { task: "Find platform help", timeSaved: "90%" },
  { task: "Overcome writer's block", timeSaved: "75%" },
  { task: "Learn new features", timeSaved: "85%" },
  { task: "Get writing feedback", timeSaved: "70%" },
]

const targetAudience = [
  {
    role: "Content Writers",
    description: "Get instant suggestions and help while writing without leaving your workflow.",
  },
  {
    role: "New Team Members",
    description: "Learn the platform quickly with AI-guided onboarding and assistance.",
  },
  {
    role: "Busy Marketers",
    description: "Get quick answers and support without waiting for team availability.",
  },
]

export default function AIChatAssistantPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <nav className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Platform", href: "/platform" },
                { label: "Features", href: "/platform/features" },
                { label: "AI Chat Assistant" },
              ]}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Chat Assistant Software</h1>
            <p className="text-lg text-white/70 mb-6">
              Get instant help and content suggestions with an intelligent AI chat assistant available 24/7 to support
              your content creation workflow.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-white/60">Availability</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">Instant</div>
                <div className="text-xs text-white/60">Responses</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">The Challenges You Face</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <challenge.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-white/70 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How WriteWorks Solves These Challenges</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {solutions.map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.challenge}</h3>
                    <p className="text-white/70 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <capability.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-white/70 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs to be Done */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Jobs to Be Done</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-4 border-b border-white/10 bg-white/5">
                <div className="text-sm font-medium text-white">Task</div>
                <div className="text-sm font-medium text-white text-right">Time Saved</div>
              </div>
              {jobsToBeDone.map((job, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-4 border-b border-white/10 last:border-0">
                  <div className="text-sm text-white/70">{job.task}</div>
                  <div className="text-sm text-white font-medium text-right">{job.timeSaved}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Who It's For</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                <Users className="w-10 h-10 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">{audience.role}</h3>
                <p className="text-white/70 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What's Included</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: MessageSquare, text: "Natural language interface" },
                { icon: Sparkles, text: "Content suggestions" },
                { icon: Zap, text: "Instant responses" },
                { icon: Brain, text: "Context-aware assistance" },
                { icon: HelpCircle, text: "How-to guidance" },
                { icon: Clock, text: "24/7 availability" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
                  <feature.icon className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/70 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for AI-Powered Assistance?</h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Start using the AI chat assistant today and get instant help with your content.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
