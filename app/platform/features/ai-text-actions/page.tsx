import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Wand2, Zap, RefreshCw, CheckCircle2, Sparkles, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Text Actions | WriteWorks AI Platform",
  description:
    "One-click AI-powered text optimization. Improve, expand, simplify, or rewrite any text instantly with specialized AI actions.",
  keywords: ["AI text actions", "content optimization", "AI writing", "text improvement", "content enhancement"],
}

export default function AITextActionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Features
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Wand2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI & Optimization</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              AI Text Actions Software
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your content with one-click AI actions. Improve clarity, expand ideas, simplify complex text, or
              completely rewrite sections—all optimized for LLM visibility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Actions Grid */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Available AI Actions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Improve",
                  description: "Enhance clarity, flow, and impact while maintaining your original message.",
                },
                {
                  icon: Target,
                  title: "Optimize for LLMs",
                  description: "Restructure content to maximize citation likelihood across AI platforms.",
                },
                {
                  icon: RefreshCw,
                  title: "Rewrite",
                  description: "Generate alternative versions with different tones and styles.",
                },
                {
                  icon: Zap,
                  title: "Simplify",
                  description: "Make complex ideas more accessible without losing key information.",
                },
                {
                  icon: Wand2,
                  title: "Expand",
                  description: "Add depth and detail to brief points or underdeveloped sections.",
                },
                {
                  icon: CheckCircle2,
                  title: "Fix Grammar",
                  description: "Correct grammar, spelling, and punctuation errors instantly.",
                },
              ].map((action, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors"
                >
                  <action.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                  <p className="text-muted-foreground">{action.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Select Text",
                  description: "Highlight any text in your content that you want to optimize or transform.",
                },
                {
                  step: "02",
                  title: "Choose Action",
                  description:
                    "Pick from our library of AI actions—improve, expand, simplify, rewrite, or optimize for LLMs.",
                },
                {
                  step: "03",
                  title: "Review Results",
                  description: "See multiple AI-generated options and choose the one that best fits your needs.",
                },
                {
                  step: "04",
                  title: "Apply Changes",
                  description: "Accept the changes with one click or continue refining until it's perfect.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
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
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Transform Your Content with AI</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the power of one-click AI optimization. Start your free trial today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
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
