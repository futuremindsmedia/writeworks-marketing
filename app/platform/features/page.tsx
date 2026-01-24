"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Sparkles,
  FileText,
  Zap,
  Users,
  Shield,
  BarChart3,
  Workflow,
  ArrowRight,
  BookOpen,
  GitBranch,
  Target,
  MessageSquare,
  TrendingUp,
  Globe,
  Layers,
  FolderKanban,
  Clock,
  CheckCircle2,
  Lock,
} from "lucide-react"

export default function PlatformFeaturesPage() {
  const allFeatures = [
    // Content Creation
    {
      category: "Content Creation",
      icon: <FileText className="w-4 h-4" />,
      features: [
        {
          name: "Content Editor with LLM Scoring",
          description: "Write with real-time AI citation scoring",
          href: "/platform/features/content-editor",
          icon: <FileText className="w-5 h-5 text-white" />,
        },
        {
          name: "AI Text Actions",
          description: "One-click text improvements",
          href: "/platform/features/ai-text-actions",
          icon: <Zap className="w-5 h-5 text-white" />,
        },
        {
          name: "Rich Text Editor",
          description: "Professional formatting tools",
          href: "/platform/features/rich-text-editor",
          icon: <FileText className="w-5 h-5 text-white" />,
        },
        {
          name: "Content Templates",
          description: "500+ pre-built templates",
          href: "/platform/features/content-templates",
          icon: <BookOpen className="w-5 h-5 text-white" />,
        },
        {
          name: "Version Control",
          description: "Track and restore changes",
          href: "/platform/features/version-control",
          icon: <GitBranch className="w-5 h-5 text-white" />,
        },
      ],
    },
    // AI & Optimization
    {
      category: "AI & Optimization",
      icon: <Sparkles className="w-4 h-4" />,
      features: [
        {
          name: "80+ AI Content Agents",
          description: "Specialized agents for every content type",
          href: "/platform/features/ai-agents",
          icon: <Users className="w-5 h-5 text-white" />,
        },
        {
          name: "AI Chat Assistant",
          description: "Get instant writing help",
          href: "/platform/features/ai-chat-assistant",
          icon: <MessageSquare className="w-5 h-5 text-white" />,
        },
        {
          name: "Content Optimization",
          description: "AI-powered improvement suggestions",
          href: "/platform/features/content-optimization",
          icon: <TrendingUp className="w-5 h-5 text-white" />,
        },
        {
          name: "Citation Tracking",
          description: "Monitor AI platform mentions",
          href: "/platform/features/citation-tracking",
          icon: <Target className="w-5 h-5 text-white" />,
        },
      ],
    },
    // Brand Management
    {
      category: "Brand Management",
      icon: <Shield className="w-4 h-4" />,
      features: [
        {
          name: "Brand Voice & Guidelines",
          description: "Maintain consistency across content",
          href: "/platform/features/brand-management",
          icon: <Shield className="w-5 h-5 text-white" />,
        },
        {
          name: "Knowledge Base",
          description: "Store brand-specific information",
          href: "/platform/features/knowledge-base",
          icon: <BookOpen className="w-5 h-5 text-white" />,
        },
        {
          name: "Audience Profiles",
          description: "Target content to personas",
          href: "/platform/features/audience-profiles",
          icon: <Globe className="w-5 h-5 text-white" />,
        },
        {
          name: "Content Library",
          description: "Centralized asset management",
          href: "/platform/features/content-library",
          icon: <Layers className="w-5 h-5 text-white" />,
        },
      ],
    },
    // Workflow & Collaboration
    {
      category: "Workflow & Collaboration",
      icon: <Workflow className="w-4 h-4" />,
      features: [
        {
          name: "Project Management",
          description: "Organize content projects",
          href: "/platform/features/project-management",
          icon: <FolderKanban className="w-5 h-5 text-white" />,
        },
        {
          name: "Team Collaboration",
          description: "Work together in real-time",
          href: "/platform/features/workflow-collaboration",
          icon: <Users className="w-5 h-5 text-white" />,
        },
        {
          name: "Content Calendar",
          description: "Plan and schedule content",
          href: "/platform/features/content-calendar",
          icon: <Clock className="w-5 h-5 text-white" />,
        },
        {
          name: "Approval Workflows",
          description: "Streamline review process",
          href: "/platform/features/approval-workflows",
          icon: <CheckCircle2 className="w-5 h-5 text-white" />,
        },
      ],
    },
    // Analytics & Insights
    {
      category: "Analytics & Insights",
      icon: <BarChart3 className="w-4 h-4" />,
      features: [
        {
          name: "Content Analytics",
          description: "Track content performance",
          href: "/platform/features/analytics",
          icon: <BarChart3 className="w-5 h-5 text-white" />,
        },
        {
          name: "Performance Insights",
          description: "Actionable improvement suggestions",
          href: "/platform/features/performance-insights",
          icon: <TrendingUp className="w-5 h-5 text-white" />,
        },
        {
          name: "Custom Reports",
          description: "Generate stakeholder reports",
          href: "/platform/features/custom-reports",
          icon: <FileText className="w-5 h-5 text-white" />,
        },
      ],
    },
    // Security & Compliance
    {
      category: "Security & Compliance",
      icon: <Lock className="w-4 h-4" />,
      features: [
        {
          name: "Enterprise Security",
          description: "SOC 2 Type II compliant",
          href: "/platform/features/security-compliance",
          icon: <Lock className="w-5 h-5 text-white" />,
        },
        {
          name: "Role-Based Access",
          description: "Granular team permissions",
          href: "/platform/features/role-based-access",
          icon: <Shield className="w-5 h-5 text-white" />,
        },
        {
          name: "Audit Logs",
          description: "Complete activity tracking",
          href: "/platform/features/audit-logs",
          icon: <GitBranch className="w-5 h-5 text-white" />,
        },
        {
          name: "GDPR Compliance",
          description: "International data protection",
          href: "/platform/features/gdpr-compliance",
          icon: <Globe className="w-5 h-5 text-white" />,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Platform", href: "/platform" }, { label: "Features" }]} />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-3 md:px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-6">
            <Sparkles className="w-3 h-3 text-white" />
            24 Powerful Features
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Powerful AI Writing Features for Every Content Need
          </h1>
          <p className="text-base text-white/70 mb-6 max-w-2xl mx-auto">
            Everything you need to create content that gets cited by AI platforms. From writing and optimization to
            collaboration and analytics.
          </p>
          <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
            <a href="https://app.writeworks.ai/sign-up">
              Free Trial <ArrowRight className="ml-2 w-4 h-4 inline" />
            </a>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mt-10 py-6 border-y border-white/10">
          <div className="text-center">
            <div className="text-xl font-bold text-white">24</div>
            <div className="text-xs text-white/60">Features</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-white">80+</div>
            <div className="text-xs text-white/60">AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-white">500+</div>
            <div className="text-xs text-white/60">Templates</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-white">99.9%</div>
            <div className="text-xs text-white/60">Uptime</div>
          </div>
        </div>
      </section>

      {/* All Features by Category */}
      {allFeatures.map((category, idx) => (
        <section
          key={category.category}
          className={`container mx-auto px-3 md:px-4 py-10 ${idx > 0 ? "border-t border-white/10" : ""}`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                {category.icon}
              </div>
              <h2 className="text-lg font-semibold text-white">{category.category}</h2>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.features.map((feature) => (
                <Link
                  key={feature.name}
                  href={feature.href}
                  className="group p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-white transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">{feature.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-white/50 group-hover:text-white/80 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="container mx-auto px-3 md:px-4 py-12">
        <div className="max-w-2xl mx-auto text-center p-8 rounded-lg bg-white/5 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-3">Ready to Experience All Features?</h2>
          <p className="text-sm text-white/70 mb-6">Start your free trial today. No credit card required.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
              asChild
            >
              <a href="https://app.writeworks.ai/sign-up">
                Free Trial <ArrowRight className="ml-2 w-4 h-4 inline" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
