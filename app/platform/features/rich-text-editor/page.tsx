import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Type, Sparkles, Layout, Code, ImageIcon, List, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Rich Text Editor | WriteWorks AI Platform",
  description:
    "Professional-grade rich text editor with AI-powered suggestions, formatting tools, and real-time collaboration for creating optimized content.",
}

export default function RichTextEditorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="container relative mx-auto px-4 py-24">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Features
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Type className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Content Creation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Rich Text Editor Software
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Professional-grade editor with AI-powered suggestions, advanced formatting, and real-time collaboration.
              Create beautiful, optimized content with ease.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Try Editor
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Teams Love Our Editor</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Suggestions",
                description:
                  "Get intelligent writing suggestions, grammar corrections, and style improvements as you type.",
              },
              {
                icon: Layout,
                title: "Advanced Formatting",
                description: "Rich formatting options including tables, code blocks, embeds, and custom components.",
              },
              {
                icon: Code,
                title: "Markdown Support",
                description: "Write in markdown or rich text mode. Switch seamlessly between both formats.",
              },
              {
                icon: ImageIcon,
                title: "Media Management",
                description: "Drag and drop images, videos, and files. Automatic optimization and CDN delivery.",
              },
              {
                icon: List,
                title: "Content Templates",
                description: "Pre-built templates for common content types. Save your own custom templates.",
              },
              {
                icon: CheckCircle2,
                title: "Real-time Collaboration",
                description: "Multiple team members can edit simultaneously with live cursors and presence.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="relative group rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">A powerful editor designed for modern content creation</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Start Writing",
                description:
                  "Open the editor and start typing. Choose from templates or start from scratch. The clean interface keeps you focused on your content.",
              },
              {
                step: "02",
                title: "Format & Style",
                description:
                  "Use the formatting toolbar or keyboard shortcuts to style your content. Add headings, lists, quotes, code blocks, and more with ease.",
              },
              {
                step: "03",
                title: "Add Media",
                description:
                  "Drag and drop images, videos, and files directly into your content. Media is automatically optimized and hosted on our CDN.",
              },
              {
                step: "04",
                title: "Get AI Suggestions",
                description:
                  "As you write, receive intelligent suggestions for improvements. Fix grammar, enhance clarity, and optimize for LLM visibility.",
              },
              {
                step: "05",
                title: "Collaborate",
                description:
                  "Invite team members to edit together. See live cursors, comments, and changes in real-time. Track version history.",
              },
              {
                step: "06",
                title: "Publish",
                description:
                  "When ready, publish your content with one click. Export to multiple formats or integrate with your CMS.",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Perfect For</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Blog Posts & Articles",
                description:
                  "Write long-form content with proper formatting, headings, and media. Optimize for both human readers and LLM citations.",
              },
              {
                title: "Documentation",
                description:
                  "Create technical documentation with code blocks, tables, and diagrams. Support for markdown and rich text.",
              },
              {
                title: "Marketing Copy",
                description:
                  "Craft compelling marketing content with AI assistance. Get suggestions for headlines, CTAs, and persuasive language.",
              },
              {
                title: "Knowledge Base",
                description:
                  "Build comprehensive help centers and FAQs. Organize content with categories, tags, and internal linking.",
              },
            ].map((useCase, index) => (
              <div key={index} className="rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-6">
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Creating Better Content Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the power of our rich text editor with AI-powered suggestions and real-time collaboration.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
