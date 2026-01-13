import type { Metadata } from "next"
import Link from "next/link"
import {
  Wand2,
  Zap,
  RefreshCw,
  CheckCircle2,
  Sparkles,
  Target,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Text Editing Tools | Rewrite, Summarize & Optimize | WriteWorks",
  description:
    "One-click AI-powered text optimization. Improve, expand, simplify, or rewrite any text instantly with specialized AI actions.",
  keywords: ["AI text actions", "content optimization", "AI writing", "text improvement", "content enhancement"],
}

export default function AITextActionsPage() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Time-Consuming Edits",
      description: "Manually rewriting and optimizing content takes hours of valuable time",
    },
    {
      icon: AlertTriangle,
      title: "Inconsistent Quality",
      description: "Different writers produce varying quality levels without standardized processes",
    },
    {
      icon: AlertTriangle,
      title: "LLM Visibility Gap",
      description: "Content not optimized for AI platforms misses citation opportunities",
    },
  ]

  const solutions = [
    {
      icon: Lightbulb,
      title: "One-Click Optimization",
      description: "Transform any text instantly with specialized AI actions",
    },
    {
      icon: Lightbulb,
      title: "LLM-Optimized Output",
      description: "Content automatically structured for maximum AI citation potential",
    },
    {
      icon: Lightbulb,
      title: "Multiple Variations",
      description: "Generate several options and choose the best fit",
    },
  ]

  const jobsToBeDone = [
    { task: "Rewrite content for clarity", timeSaved: "85%" },
    { task: "Expand brief sections", timeSaved: "80%" },
    { task: "Simplify complex text", timeSaved: "75%" },
    { task: "Optimize for LLM citations", timeSaved: "90%" },
    { task: "Fix grammar and style", timeSaved: "95%" },
    { task: "Translate tone/voice", timeSaved: "70%" },
  ]

  const targetAudience = [
    { role: "Content Writers", description: "Speed up editing and refinement" },
    { role: "Marketing Teams", description: "Quickly adapt content for channels" },
    { role: "SEO Specialists", description: "Optimize for search and AI" },
    { role: "Editors", description: "Streamline review process" },
  ]

  const features = [
    "15+ specialized AI actions",
    "Context-aware suggestions",
    "Multiple output variations",
    "Tone and style controls",
    "LLM optimization built-in",
    "Undo/redo functionality",
    "Custom action templates",
    "Batch processing support",
    "Brand voice consistency",
    "Multi-language support",
    "Performance analytics",
    "API access for automation",
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/platform" className="text-white/60 hover:text-white transition-colors">
              Platform
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/platform/features" className="text-white/60 hover:text-white transition-colors">
              Features
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">AI Text Actions</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Wand2 className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">AI & Optimization</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              AI Text Editing Tools | Rewrite, Summarize & Optimize
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Transform your content with one-click AI actions. Improve clarity, expand ideas, simplify complex text—all
              optimized for LLM visibility.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
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

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-white/60">AI Actions</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-xs text-white/60">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">More Citations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">The Challenge</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <challenge.icon className="h-5 w-5 text-red-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-white text-sm">{challenge.title}</h3>
                  <p className="text-white/60 text-sm">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">How WriteWorks Solves This</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {solutions.map((solution, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <solution.icon className="h-5 w-5 text-green-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-white text-sm">{solution.title}</h3>
                  <p className="text-white/60 text-sm">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Actions Grid */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Available AI Actions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Sparkles, title: "Improve", description: "Enhance clarity, flow, and impact" },
                { icon: Target, title: "Optimize for LLMs", description: "Maximize AI citation potential" },
                { icon: RefreshCw, title: "Rewrite", description: "Generate alternative versions" },
                { icon: Zap, title: "Simplify", description: "Make complex ideas accessible" },
                { icon: Wand2, title: "Expand", description: "Add depth to brief sections" },
                { icon: CheckCircle2, title: "Fix Grammar", description: "Correct errors instantly" },
              ].map((action, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <action.icon className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold mb-1 text-white text-sm">{action.title}</h3>
                  <p className="text-white/60 text-sm">{action.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Jobs to Be Done</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/80 text-sm font-medium">Task</th>
                    <th className="text-right py-3 px-4 text-white/80 text-sm font-medium">Time Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {jobsToBeDone.map((job, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-3 px-4 text-white text-sm">{job.task}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="inline-flex items-center px-2 py-1 rounded bg-green-500/10 text-green-400 text-sm font-medium">
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
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Built For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                  <Target className="h-6 w-6 text-white mx-auto mb-2" />
                  <h3 className="font-semibold text-white text-sm mb-1">{audience.role}</h3>
                  <p className="text-white/60 text-xs">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3 text-white">Transform Your Content with AI</h2>
            <p className="text-white/70 mb-6 text-sm">Experience the power of one-click AI optimization.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
