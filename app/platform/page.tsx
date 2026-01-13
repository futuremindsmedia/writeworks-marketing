"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Sparkles, Brain, Shield, BarChart3, FileText, Target, Workflow, ArrowRight, Check } from "lucide-react"

export default function PlatformPage() {
  const featureCategories = [
    {
      title: "Content Creation",
      description: "Write faster with AI-powered tools",
      icon: <FileText className="w-5 h-5 text-white" />,
      features: [
        { name: "Content Editor with LLM Scoring", href: "/platform/features/content-editor" },
        { name: "AI Text Actions", href: "/platform/features/ai-text-actions" },
        { name: "Rich Text Editor", href: "/platform/features/rich-text-editor" },
        { name: "Content Templates", href: "/platform/features/content-templates" },
        { name: "Version Control", href: "/platform/features/version-control" },
      ],
    },
    {
      title: "AI & Optimization",
      description: "Optimize for AI citations",
      icon: <Sparkles className="w-5 h-5 text-white" />,
      features: [
        { name: "80+ AI Content Agents", href: "/platform/features/ai-agents" },
        { name: "AI Chat Assistant", href: "/platform/features/ai-chat-assistant" },
        { name: "Content Optimization", href: "/platform/features/content-optimization" },
        { name: "Citation Tracking", href: "/platform/features/citation-tracking" },
      ],
    },
    {
      title: "Brand Management",
      description: "Maintain consistency at scale",
      icon: <Shield className="w-5 h-5 text-white" />,
      features: [
        { name: "Brand Voice & Guidelines", href: "/platform/features/brand-management" },
        { name: "Knowledge Base", href: "/platform/features/knowledge-base" },
        { name: "Audience Profiles", href: "/platform/features/audience-profiles" },
        { name: "Content Library", href: "/platform/features/content-library" },
      ],
    },
    {
      title: "Workflow & Collaboration",
      description: "Scale your content operations",
      icon: <Workflow className="w-5 h-5 text-white" />,
      features: [
        { name: "Project Management", href: "/platform/features/project-management" },
        { name: "Team Collaboration", href: "/platform/features/workflow-collaboration" },
        { name: "Content Calendar", href: "/platform/features/content-calendar" },
        { name: "Approval Workflows", href: "/platform/features/approval-workflows" },
      ],
    },
    {
      title: "Analytics & Insights",
      description: "Measure and improve performance",
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      features: [
        { name: "Content Analytics", href: "/platform/features/analytics" },
        { name: "Performance Insights", href: "/platform/features/performance-insights" },
        { name: "Custom Reports", href: "/platform/features/custom-reports" },
      ],
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade protection",
      icon: <Shield className="w-5 h-5 text-white" />,
      features: [
        { name: "Security & Compliance", href: "/platform/features/security-compliance" },
        { name: "Role-Based Access", href: "/platform/features/role-based-access" },
        { name: "Audit Logs", href: "/platform/features/audit-logs" },
        { name: "GDPR Compliance", href: "/platform/features/gdpr-compliance" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Platform" }]} />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-3 md:px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-6">
            <Sparkles className="w-3 h-3 text-white" />
            AI + Human Intelligence
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance leading-tight">
            AI Content Writing Software for Marketing Teams
          </h1>
          <p className="text-base text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
            WriteWorks AI combines artificial intelligence with human-built frameworks to help you write quality content
            faster and easier. Get cited by ChatGPT, Claude, Perplexity, and all major AI platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
              asChild
            >
              <a href="https://app.writeworks.ai/sign-up">Free Trial</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent"
              asChild
            >
              <Link href="/platform/features">View All Features</Link>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-10 py-6 border-y border-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">80+</div>
            <div className="text-xs text-white/60">AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">70%</div>
            <div className="text-xs text-white/60">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">3x</div>
            <div className="text-xs text-white/60">More Citations</div>
          </div>
        </div>
      </section>

      {/* How It Works - AI + Human */}
      <section className="container mx-auto px-3 md:px-4 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">AI + Human Intelligence</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Human-Built Frameworks</h3>
              <p className="text-sm text-white/70">
                Content structures designed by experts for maximum AI citation potential
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">80+ AI Agents</h3>
              <p className="text-sm text-white/70">
                Specialized agents trained on specific content types and workflows
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">LLM Visibility Scoring</h3>
              <p className="text-sm text-white/70">Real-time analysis of citation likelihood across AI platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories Grid */}
      <section className="container mx-auto px-3 md:px-4 py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Platform Features</h2>
          <p className="text-sm text-white/70 text-center mb-8">Everything you need to create AI-optimized content</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCategories.map((category) => (
              <div
                key={category.title}
                className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">{category.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{category.title}</h3>
                    <p className="text-xs text-white/60">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.features.map((feature) => (
                    <li key={feature.name}>
                      <Link
                        href={feature.href}
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:translate-x-1 transition-transform">{feature.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent" asChild>
              <Link href="/platform/features">
                View All 24 Features
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why WriteWorks */}
      <section className="container mx-auto px-3 md:px-4 py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Marketing Teams Choose WriteWorks</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Write 70% faster with AI assistance",
              "Increase AI citations by 3x",
              "Maintain brand consistency at scale",
              "Real-time LLM visibility scoring",
              "80+ specialized content agents",
              "Enterprise-grade security",
              "Team collaboration built-in",
              "No technical skills required",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-3 md:px-4 py-12">
        <div className="max-w-2xl mx-auto text-center p-8 rounded-lg bg-white/5 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-3">Ready to Write Better Content?</h2>
          <p className="text-sm text-white/70 mb-6">
            Start creating AI-optimized content in minutes. No credit card required.
          </p>
          <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
            <a href="https://app.writeworks.ai/sign-up">Start Free Trial</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
