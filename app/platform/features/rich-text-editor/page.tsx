import type { Metadata } from "next"
import Link from "next/link"
import {
  Type,
  Sparkles,
  Layout,
  Code,
  ImageIcon,
  List,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
  ArrowRight,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Rich Text Editor with Built-In AI Assistance | WriteWorks",
  description:
    "Professional-grade rich text editor with AI-powered suggestions, formatting tools, and real-time collaboration.",
}

export default function RichTextEditorPage() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Fragmented Tools",
      description: "Switching between multiple apps for writing, formatting, and collaboration",
    },
    {
      icon: AlertTriangle,
      title: "Limited AI Integration",
      description: "Traditional editors lack built-in AI assistance for optimization",
    },
    {
      icon: AlertTriangle,
      title: "Collaboration Friction",
      description: "Difficult to work together in real-time with proper version control",
    },
  ]

  const solutions = [
    {
      icon: Lightbulb,
      title: "All-in-One Editor",
      description: "Write, format, and collaborate in a single powerful interface",
    },
    {
      icon: Lightbulb,
      title: "Native AI Assistance",
      description: "Get intelligent suggestions as you type without leaving the editor",
    },
    {
      icon: Lightbulb,
      title: "Real-Time Collaboration",
      description: "Work together with live cursors and instant synchronization",
    },
  ]

  const jobsToBeDone = [
    { task: "Format and style content", timeSaved: "60%" },
    { task: "Add media and embeds", timeSaved: "70%" },
    { task: "Get AI writing suggestions", timeSaved: "75%" },
    { task: "Collaborate with team", timeSaved: "65%" },
    { task: "Export to multiple formats", timeSaved: "80%" },
    { task: "Manage document versions", timeSaved: "85%" },
  ]

  const targetAudience = [
    { role: "Content Writers", description: "Create polished content efficiently" },
    { role: "Marketing Teams", description: "Produce campaign materials" },
    { role: "Technical Writers", description: "Build documentation" },
    { role: "Editorial Teams", description: "Collaborate on publications" },
  ]

  const features = [
    "AI-powered writing suggestions",
    "Advanced formatting toolbar",
    "Markdown support",
    "Media drag-and-drop",
    "Real-time collaboration",
    "Live cursor tracking",
    "Version history",
    "Custom templates",
    "Code block support",
    "Table creation",
    "Export to PDF/Word/HTML",
    "Keyboard shortcuts",
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
            <span className="text-white">Rich Text Editor</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Type className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Content Creation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Rich Text Editor with Built-In AI Assistance
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Professional-grade editor with AI-powered suggestions, advanced formatting, and real-time collaboration.
              Create beautiful content with ease.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                <a href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white/60">Formatting Options</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl font-bold text-white">Real-Time</div>
                <div className="text-xs text-white/60">Collaboration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">AI</div>
                <div className="text-xs text-white/60">Built-In</div>
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

      {/* Key Features */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Editor Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Sparkles, title: "AI Suggestions", description: "Intelligent writing assistance as you type" },
                { icon: Layout, title: "Advanced Formatting", description: "Tables, code blocks, embeds, and more" },
                { icon: Code, title: "Markdown Support", description: "Switch between rich text and markdown" },
                { icon: ImageIcon, title: "Media Management", description: "Drag and drop with auto-optimization" },
                { icon: List, title: "Content Templates", description: "Pre-built and custom templates" },
                { icon: CheckCircle2, title: "Real-Time Collab", description: "Edit together with live cursors" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <feature.icon className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold mb-1 text-white text-sm">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
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
            <h2 className="text-2xl font-bold mb-3 text-white">Start Creating Better Content Today</h2>
            <p className="text-white/70 mb-6 text-sm">Experience the power of our AI-enhanced rich text editor.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent" asChild>
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
