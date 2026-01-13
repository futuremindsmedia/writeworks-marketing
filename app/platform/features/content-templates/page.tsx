import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Zap, Copy, CheckCircle2, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Templates Software | WriteWorks AI Platform",
  description:
    "Create and reuse content templates to maintain consistency and speed up content creation. Build your template library today.",
  keywords: ["content templates", "template library", "content reuse", "consistency", "productivity"],
}

export default function ContentTemplatesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Back Navigation */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Features
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <FileText className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Content Creation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Content Templates Software
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Create and reuse content templates to maintain consistency and speed up content creation. Build a library
              of templates for blog posts, social media, emails, and more.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Faster Creation",
                  description: "Start with proven templates and reduce content creation time by up to 70%.",
                },
                {
                  icon: Copy,
                  title: "Consistent Quality",
                  description: "Maintain brand voice and quality standards across all content with reusable templates.",
                },
                {
                  icon: Layout,
                  title: "Easy Customization",
                  description:
                    "Customize templates for specific needs while maintaining core structure and best practices.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <benefit.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">How It Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Choose a Template",
                  description: "Browse our library of pre-built templates or create your own from scratch.",
                },
                {
                  step: "02",
                  title: "Customize Content",
                  description: "Fill in template fields, adjust formatting, and personalize content for your needs.",
                },
                {
                  step: "03",
                  title: "Save & Reuse",
                  description: "Save customized versions as new templates for future use across your team.",
                },
                {
                  step: "04",
                  title: "Share with Team",
                  description:
                    "Share templates across your organization to maintain consistency and speed up workflows.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-2xl font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-white/70 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Pre-built template library",
                "Custom template creation",
                "Template versioning",
                "Dynamic field insertion",
                "Template categories",
                "Team template sharing",
                "Template analytics",
                "Import/export templates",
                "Template permissions",
                "AI-powered suggestions",
                "Multi-format support",
                "Template preview",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Speed Up Content Creation?</h2>
            <p className="text-xl text-white/70 mb-8">
              Build your template library and create content faster. Try content templates free for 14 days.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
