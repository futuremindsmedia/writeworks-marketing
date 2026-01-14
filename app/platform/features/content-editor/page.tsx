import type { Metadata } from "next"
import Link from "next/link"
import {
  Home,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Zap,
  CheckCircle2,
  BarChart3,
  Clock,
  AlertTriangle,
  Lightbulb,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Content Editor | A Smart Writing Environment",
  description:
    "Experience a AI content editor that anticipates your needs. Real-time suggestions, grammar/style checking, and collaborative editing features.",
  keywords: ["content editor", "LLM scoring", "AI optimization", "content visibility", "citation likelihood"],
}

const challenges = [
  {
    title: "Inconsistent Content Quality",
    description: "Content varies in quality across different writers and pieces, making brand voice unpredictable.",
  },
  {
    title: "Slow Editing Process",
    description: "Manual editing and optimization takes hours, delaying content publication schedules.",
  },
  {
    title: "No AI Visibility Insights",
    description: "Writers have no way to know if content will be cited by AI platforms before publishing.",
  },
  {
    title: "Scattered Feedback",
    description: "Comments and revisions live in emails and documents, making collaboration chaotic.",
  },
]

const solutions = [
  {
    challenge: "Inconsistent Content Quality",
    solution:
      "Real-time AI suggestions ensure every piece meets quality standards with grammar, style, and readability checks.",
  },
  {
    challenge: "Slow Editing Process",
    solution: "AI-powered suggestions and one-click fixes reduce editing time by 70% while improving output.",
  },
  {
    challenge: "No AI Visibility Insights",
    solution: "Live LLM visibility scoring shows citation likelihood as you write, enabling real-time optimization.",
  },
  {
    challenge: "Scattered Feedback",
    solution: "Inline comments, version history, and collaborative editing keep all feedback in one place.",
  },
]

const jobsToBeDone = [
  { task: "Write blog post draft", traditional: "3 hours", withPlatform: "45 min", timeSaved: "75%" },
  { task: "Optimize for AI citations", traditional: "2 hours", withPlatform: "15 min", timeSaved: "88%" },
  { task: "Edit and proofread", traditional: "1.5 hours", withPlatform: "20 min", timeSaved: "78%" },
  { task: "Format and structure", traditional: "45 min", withPlatform: "10 min", timeSaved: "78%" },
  { task: "Collaborate on revisions", traditional: "2 hours", withPlatform: "30 min", timeSaved: "75%" },
]

const targetAudience = [
  {
    role: "Content Writers",
    description: "Create high-quality content faster with AI assistance and real-time optimization.",
  },
  {
    role: "Content Managers",
    description: "Ensure consistent quality across all content with standardized editing tools.",
  },
  {
    role: "Marketing Teams",
    description: "Collaborate seamlessly on content with inline feedback and version control.",
  },
]

const features = [
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
]

export default function ContentEditorPage() {
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
            <span className="text-white">Content Editor</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Content Creation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">AI Content Editor Software</h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Create and optimize content with real-time LLM visibility scoring. Get instant feedback on how likely your
              content is to be cited by AI systems like ChatGPT, Claude, and Perplexity.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free Trial
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">75%</div>
                <div className="text-sm text-white/60">Faster Writing</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-sm text-white/60">More AI Citations</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">88%</div>
                <div className="text-sm text-white/60">Time Saved</div>
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

      {/* Key Benefits - Original content preserved */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: TrendingUp,
                  title: "Real-Time Scoring",
                  description: "See your LLM visibility score update in real-time as you write.",
                },
                {
                  icon: Zap,
                  title: "Instant Feedback",
                  description: "Get immediate suggestions on how to improve citation likelihood.",
                },
                {
                  icon: BarChart3,
                  title: "Performance Insights",
                  description: "Track how your content performs across different LLMs.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <benefit.icon className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-sm text-white/70">{benefit.description}</p>
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
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Optimize Your Content?</h2>
            <p className="text-white/70 mb-6">
              Start creating content that gets cited by AI systems. Try our content editor free for 14 days.
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
