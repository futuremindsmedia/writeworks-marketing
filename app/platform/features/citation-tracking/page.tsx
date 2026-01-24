import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import {
  Link2,
  FileText,
  CheckCircle,
  Search,
  BookOpen,
  ExternalLink,
  AlertTriangle,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Citation Tracking Software | WriteWorks AI",
  description:
    "Track sources, manage citations, and ensure proper attribution with intelligent citation tracking tools.",
}

const challenges = [
  {
    icon: AlertTriangle,
    title: "Lost Source Attribution",
    description: "Sources get lost or forgotten during content creation, risking credibility and compliance issues.",
  },
  {
    icon: FileText,
    title: "Manual Citation Management",
    description: "Tracking citations manually across multiple documents wastes time and introduces errors.",
  },
  {
    icon: Shield,
    title: "Compliance Concerns",
    description: "Without proper citation tracking, content may violate copyright or fail to meet industry standards.",
  },
]

const solutions = [
  {
    challenge: "Lost Source Attribution",
    solution: "Automatic source capture and linking ensures every piece of content maintains full attribution history.",
  },
  {
    challenge: "Manual Citation Management",
    solution: "AI-powered citation tracking automatically formats and manages all your sources in one place.",
  },
  {
    challenge: "Compliance Concerns",
    solution: "Built-in compliance checks verify proper attribution and flag potential citation issues.",
  },
]

const capabilities = [
  {
    icon: Link2,
    title: "Source Management",
    description: "Keep track of all sources and references used in your content with automatic organization.",
  },
  {
    icon: CheckCircle,
    title: "Proper Attribution",
    description: "Ensure all sources are properly cited and attributed in your content automatically.",
  },
  {
    icon: BookOpen,
    title: "Credibility Building",
    description: "Build trust with properly sourced and cited content that meets professional standards.",
  },
]

const jobsToBeDone = [
  { task: "Add and track content sources", timeSaved: "70%" },
  { task: "Format citations correctly", timeSaved: "85%" },
  { task: "Verify source attribution", timeSaved: "75%" },
  { task: "Generate bibliographies", timeSaved: "90%" },
  { task: "Check compliance requirements", timeSaved: "80%" },
]

const targetAudience = [
  {
    role: "Content Writers",
    description: "Track sources while writing and ensure proper attribution for credible content.",
  },
  {
    role: "Research Teams",
    description: "Manage large source libraries and maintain accurate citation records across projects.",
  },
  {
    role: "Compliance Officers",
    description: "Verify content meets citation requirements and industry standards.",
  },
]

export default function CitationTrackingPage() {
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
                { label: "Citation Tracking" },
              ]}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Citation Tracking Software</h1>
            <p className="text-lg text-white/70 mb-6">
              Track sources, manage citations, and ensure proper attribution with intelligent citation tracking tools
              that maintain credibility and compliance.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free Trial <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-xs text-white/60">Time Saved</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Attribution Accuracy</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">Zero</div>
                <div className="text-xs text-white/60">Compliance Issues</div>
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
                { icon: Link2, text: "Source link management" },
                { icon: FileText, text: "Citation formatting" },
                { icon: CheckCircle, text: "Attribution verification" },
                { icon: Search, text: "Source search & discovery" },
                { icon: BookOpen, text: "Bibliography generation" },
                { icon: ExternalLink, text: "External link tracking" },
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Track Your Citations?</h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Start managing sources and citations today for more credible, trustworthy content.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
