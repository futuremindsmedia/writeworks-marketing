"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  FileText,
  Sparkles,
  Target,
  Users,
  Shield,
  Workflow,
  BarChart3,
  Zap,
  BookOpen,
  FolderKanban,
  Clock,
  CheckCircle2,
  TrendingUp,
  Lock,
  Globe,
  MessageSquare,
  Layers,
  GitBranch,
  ArrowRight,
} from "lucide-react"

export default function PlatformFeaturesPage() {
  const featureCategories = [
    {
      category: "Content Creation",
      icon: <FileText className="w-6 h-6" />,
      features: [
        {
          icon: <FileText className="w-8 h-8 text-[#6366F1]" />,
          title: "Rich Text Editor",
          description:
            "Professional content editor with real-time formatting, markdown support, and AI-powered suggestions as you write.",
          benefits: ["Markdown support", "Real-time formatting", "Auto-save", "Distraction-free mode"],
          link: "/platform/features/rich-text-editor",
        },
        {
          icon: <Zap className="w-8 h-8 text-[#6366F1]" />,
          title: "AI Text Actions",
          description:
            "Select any text and instantly improve it with one-click AI actions. Expand, simplify, rephrase, or optimize for LLM visibility.",
          benefits: ["Expand or simplify content", "Rephrase for clarity", "Tone adjustments", "Custom instructions"],
          link: "/platform/features/ai-text-actions",
        },
        {
          icon: <BookOpen className="w-8 h-8 text-[#6366F1]" />,
          title: "Content Templates",
          description:
            "Pre-built templates for every content type, optimized for LLM citations and structured for maximum visibility.",
          benefits: ["Blog post templates", "Social media formats", "Email templates", "Technical docs"],
          link: "/platform/features/content-templates",
        },
        {
          icon: <GitBranch className="w-8 h-8 text-[#6366F1]" />,
          title: "Version Control",
          description:
            "Track every change to your content with automatic version history. Restore previous versions or compare changes anytime.",
          benefits: ["Automatic versioning", "Change tracking", "Restore previous versions", "Compare versions"],
          link: "/platform/features/version-control",
        },
      ],
    },
    {
      category: "AI & Optimization",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        {
          icon: <Target className="w-8 h-8 text-[#6366F1]" />,
          title: "LLM Visibility Scoring",
          description:
            "Real-time analysis of how likely your content is to be cited by AI platforms. Get instant feedback on quality, relevance, and structure.",
          benefits: [
            "Real-time scoring (0-100)",
            "Quality analysis",
            "Structure recommendations",
            "Citation checklist",
          ],
          link: "/platform/features/content-editor",
        },
        {
          icon: <Users className="w-8 h-8 text-[#6366F1]" />,
          title: "80+ Specialized AI Agents",
          description:
            "Access a library of expert AI agents trained on specific content types and LLM optimization frameworks for every workflow.",
          benefits: ["Blog writers", "SEO optimizers", "Social media creators", "Technical writers"],
          link: "/platform/features/ai-agents",
        },
        {
          icon: <MessageSquare className="w-8 h-8 text-[#6366F1]" />,
          title: "AI Chat Assistant",
          description:
            "Get instant help with content strategy, optimization tips, and writing suggestions from our AI assistant.",
          benefits: ["Content strategy advice", "Writing suggestions", "SEO recommendations", "Real-time feedback"],
          link: "/platform/features/ai-chat-assistant",
        },
        {
          icon: <TrendingUp className="w-8 h-8 text-[#6366F1]" />,
          title: "Content Optimization",
          description:
            "Automatic suggestions to improve content quality, readability, and LLM citation potential based on best practices.",
          benefits: ["Readability analysis", "SEO optimization", "Structure improvements", "Citation enhancement"],
          link: "/platform/features/content-optimization",
        },
      ],
    },
    {
      category: "Brand Management",
      icon: <Shield className="w-6 h-6" />,
      features: [
        {
          icon: <Shield className="w-8 h-8 text-[#6366F1]" />,
          title: "Brand Voice & Guidelines",
          description:
            "Define your brand identity, tone, and voice in one place. Every AI agent uses your guidelines to create consistent content.",
          benefits: ["Brand voice definition", "Tone guidelines", "Style preferences", "Messaging framework"],
          link: "/platform/features/brand-management",
        },
        {
          icon: <Globe className="w-8 h-8 text-[#6366F1]" />,
          title: "Target Audience Profiles",
          description:
            "Create detailed audience personas and segments. AI agents tailor content to resonate with your specific audience.",
          benefits: ["Audience personas", "Demographic targeting", "Psychographic profiles", "Behavior patterns"],
          link: "/platform/features/audience-profiles",
        },
        {
          icon: <BookOpen className="w-8 h-8 text-[#6366F1]" />,
          title: "Knowledge Base",
          description:
            "Store brand-specific information, product details, and company knowledge. AI agents reference this for accurate content.",
          benefits: ["Product information", "Company facts", "Industry knowledge", "Custom data"],
          link: "/platform/features/knowledge-base",
        },
        {
          icon: <Layers className="w-8 h-8 text-[#6366F1]" />,
          title: "Content Library",
          description:
            "Centralized repository for all your content assets, templates, and approved materials for easy access and reuse.",
          benefits: ["Asset management", "Template library", "Approved content", "Easy search"],
          link: "/platform/features/content-library",
        },
      ],
    },
    {
      category: "Collaboration & Workflow",
      icon: <Workflow className="w-6 h-6" />,
      features: [
        {
          icon: <FolderKanban className="w-8 h-8 text-[#6366F1]" />,
          title: "Project Management",
          description:
            "Organize content projects, assign tasks, and track progress. Keep your entire content workflow in one place.",
          benefits: ["Project organization", "Task assignment", "Progress tracking", "Deadline management"],
          link: "/platform/features/project-management",
        },
        {
          icon: <Users className="w-8 h-8 text-[#6366F1]" />,
          title: "Team Collaboration",
          description:
            "Work together with your team in real-time. Share workspaces, comment on content, and collaborate seamlessly.",
          benefits: ["Shared workspaces", "Real-time collaboration", "Comments & feedback", "Team permissions"],
          link: "/platform/features/workflow-collaboration",
        },
        {
          icon: <Clock className="w-8 h-8 text-[#6366F1]" />,
          title: "Content Calendar",
          description:
            "Plan and schedule your content strategy with a visual calendar. Never miss a deadline or publication date.",
          benefits: ["Visual planning", "Scheduling", "Deadline tracking", "Publication calendar"],
          link: "/platform/features/content-calendar",
        },
        {
          icon: <CheckCircle2 className="w-8 h-8 text-[#6366F1]" />,
          title: "Approval Workflows",
          description:
            "Set up custom approval processes for content review. Ensure quality control before publication.",
          benefits: ["Custom workflows", "Review process", "Approval tracking", "Quality control"],
          link: "/platform/features/approval-workflows",
        },
      ],
    },
    {
      category: "Analytics & Insights",
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        {
          icon: <BarChart3 className="w-8 h-8 text-[#6366F1]" />,
          title: "Content Analytics",
          description:
            "Track content performance with detailed analytics. Understand what works and optimize your strategy.",
          benefits: ["Performance metrics", "Engagement tracking", "Citation monitoring", "ROI analysis"],
          link: "/platform/features/analytics",
        },
        {
          icon: <TrendingUp className="w-8 h-8 text-[#6366F1]" />,
          title: "LLM Citation Tracking",
          description:
            "Monitor how often your content is cited by AI platforms. Track mentions across ChatGPT, Claude, Perplexity, and more.",
          benefits: ["Citation monitoring", "Platform tracking", "Mention alerts", "Trend analysis"],
          link: "/platform/features/citation-tracking",
        },
        {
          icon: <Target className="w-8 h-8 text-[#6366F1]" />,
          title: "Performance Insights",
          description:
            "Get actionable insights on content performance. Discover opportunities to improve visibility and engagement.",
          benefits: ["Actionable insights", "Improvement suggestions", "Trend identification", "Competitive analysis"],
          link: "/platform/features/performance-insights",
        },
        {
          icon: <FileText className="w-8 h-8 text-[#6366F1]" />,
          title: "Custom Reports",
          description:
            "Generate custom reports for stakeholders. Export data and share insights with your team or clients.",
          benefits: ["Custom reporting", "Data export", "Stakeholder reports", "Scheduled reports"],
          link: "/platform/features/custom-reports",
        },
      ],
    },
    {
      category: "Security & Compliance",
      icon: <Lock className="w-6 h-6" />,
      features: [
        {
          icon: <Lock className="w-8 h-8 text-[#6366F1]" />,
          title: "Enterprise Security",
          description:
            "Bank-level encryption and security measures to protect your content and data. SOC 2 Type II compliant.",
          benefits: ["256-bit encryption", "SOC 2 compliant", "Data privacy", "Secure infrastructure"],
          link: "/platform/features/security-compliance",
        },
        {
          icon: <Shield className="w-8 h-8 text-[#6366F1]" />,
          title: "Role-Based Access",
          description:
            "Control who can access what with granular permissions. Set up roles and permissions for team members.",
          benefits: ["Custom roles", "Granular permissions", "Access control", "Team management"],
          link: "/platform/features/role-based-access",
        },
        {
          icon: <GitBranch className="w-8 h-8 text-[#6366F1]" />,
          title: "Audit Logs",
          description:
            "Complete audit trail of all actions and changes. Track who did what and when for compliance and security.",
          benefits: ["Activity tracking", "Change logs", "User actions", "Compliance reporting"],
          link: "/platform/features/audit-logs",
        },
        {
          icon: <Globe className="w-8 h-8 text-[#6366F1]" />,
          title: "GDPR Compliance",
          description:
            "Fully compliant with GDPR and international data protection regulations. Your data stays secure and private.",
          benefits: ["GDPR compliant", "Data protection", "Privacy controls", "International compliance"],
          link: "/platform/features/gdpr-compliance",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-3 md:px-4 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-white mb-6">
            <Sparkles className="w-3 h-3 text-[#6366F1]" />
            Platform Features
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            Powerful AI Writing Features for Every Content Need
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Comprehensive tools and features designed to help you create content that gets cited by ChatGPT, Claude,
            Perplexity, and other AI platforms. All in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-8 shadow-lg shadow-[#6366F1]/30"
              asChild
            >
              <a href="https://app.writeworks.ai/sign-up">Start Free</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent hover:border-[#6366F1]"
              asChild
            >
              <a href="/platform">See Platform Overview</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features by Category */}
      {featureCategories.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-20 md:py-28 ${
            categoryIndex % 2 === 0 ? "bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#8B5CF6]/10" : ""
          }`}
        >
          <div className="container mx-auto px-3 md:px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-white mb-4">
                {category.icon}
                <span className="text-sm font-medium">{category.category}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {category.category} Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {category.features.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-card/50 backdrop-blur border-[#6366F1]/20 p-8 hover:border-[#6366F1]/40 hover:shadow-lg hover:shadow-[#6366F1]/10 transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2 mb-6">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#6366F1] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  {feature.link && feature.link !== "#" && (
                    <Link
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-sm text-[#6366F1] hover:text-[#8B5CF6] transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#8B5CF6]/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Platform by the Numbers</h2>
            <p className="text-base text-muted-foreground">Trusted by content teams worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "80+", label: "AI Agents" },
              { number: "100+", label: "Content Templates" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-3 md:px-4 py-20">
        <Card className="bg-gradient-to-br from-[#6366F1]/20 via-[#8B5CF6]/15 to-[#6366F1]/20 border-[#6366F1]/30 p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl shadow-[#6366F1]/20">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Experience All These Features?</h2>
          <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start optimizing your content for AI platforms today. No credit card required.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10 shadow-xl shadow-[#6366F1]/40"
            asChild
          >
            <a href="https://app.writeworks.ai/sign-up">Start Free Trial</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Full access to all features • Cancel anytime
          </p>
        </Card>
      </section>
    </div>
  )
}
