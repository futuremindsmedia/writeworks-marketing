"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Building2,
  Shield,
  Users,
  Zap,
  Lock,
  BarChart3,
  Globe,
  CheckCircle2,
  ArrowRight,
  Clock,
  Target,
  Sparkles,
  FileText,
  Layers,
  RefreshCw,
  Bot,
  Workflow,
  BadgeCheck,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnterprisePage() {
  const challenges = [
    {
      icon: Clock,
      title: "Content Takes Too Long",
      description:
        "Marketing teams spend 60% of their time on content creation, leaving little room for strategy and campaign optimization.",
    },
    {
      icon: Users,
      title: "Scaling With Quality",
      description:
        "As content demands grow, maintaining consistent quality and brand voice across global teams becomes nearly impossible.",
    },
    {
      icon: Layers,
      title: "Fragmented Workflows",
      description:
        "Multiple tools, disconnected teams, and manual processes create bottlenecks that slow down content production.",
    },
    {
      icon: Shield,
      title: "Governance & Compliance",
      description:
        "Ensuring brand guidelines, legal compliance, and approval workflows are followed across thousands of content pieces.",
    },
  ]

  const solutions = [
    {
      icon: Bot,
      title: "80+ Specialized Content Writing Agents",
      description:
        "AI agents trained on your brand voice handle first drafts, research, and optimization—while your team focuses on strategy and creativity.",
    },
    {
      icon: FileText,
      title: "Human-Built Frameworks",
      description:
        "Our proprietary frameworks ensure AI output matches your brand standards, tone, and messaging guidelines from the start.",
    },
    {
      icon: Workflow,
      title: "Streamlined Content Workflows",
      description:
        "From brief to publish, automate approvals, track progress, and eliminate bottlenecks with unified content operations.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Performance Insights",
      description:
        "Track content performance, team productivity, and ROI with enterprise dashboards and custom reporting.",
    },
  ]

  const features = [
    "Unlimited team members and workspaces",
    "Custom AI agent training on your brand",
    "Brand voice and style guide enforcement",
    "Multi-language content support",
    "Advanced approval workflows",
    "Role-based access control",
    "Dedicated success manager",
    "Priority support (24/7)",
    "Custom integrations (CMS, DAM, etc.)",
    "SSO and enterprise authentication",
    "SLA guarantees",
    "On-premise deployment options",
  ]

  const stats = [
    { value: "70%", label: "Faster content production" },
    { value: "80+", label: "AI Writing Agents" },
    { value: "100%", label: "Brand consistency" },
    { value: "50%", label: "Cost reduction" },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "10x Content Velocity",
      description: "Produce more high-quality content in less time with AI-assisted writing and automated workflows.",
    },
    {
      icon: BadgeCheck,
      title: "Consistent Brand Voice",
      description:
        "Every piece of content matches your brand guidelines, tone, and messaging—across all teams and markets.",
    },
    {
      icon: RefreshCw,
      title: "Repurpose at Scale",
      description:
        "Transform one piece of content into dozens of formats for different channels, audiences, and regions.",
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description:
        "Free your team from repetitive tasks so they can focus on strategy, creativity, and high-impact work.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-3 md:px-4 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white mb-6">
            <Building2 className="w-3 h-3 text-white" />
            WriteWorks for Enterprise
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            Enterprise Content Writing, Powered by AI + Human Intelligence
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-8 text-pretty max-w-2xl mx-auto">
            WriteWorks combines 80+ AI Writing Agents with human-built frameworks to help enterprise marketing teams
            create quality content faster—without sacrificing brand consistency or creative control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-8"
              asChild
            >
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent hover:border-white/40"
              asChild
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-3 md:px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Screenshot - Dashboard */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <Image
                src="/images/dashboard-screenshot.png"
                alt="WriteWorks Enterprise Dashboard"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-white/50 mt-4">
              WriteWorks Dashboard - Centralized content operations for enterprise teams
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Challenges */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Enterprise Content Challenges
            </h2>
            <p className="text-base text-white/70 text-balance">
              Marketing teams at scale face unique challenges. WriteWorks is built to solve them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 p-6 hover:border-white/20 transition-all duration-300"
              >
                <challenge.icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{challenge.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{challenge.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How WriteWorks Solves It */}
      <section id="how-it-works" className="py-16 md:py-20 border-y border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              AI + Human Intelligence = Quality Content at Scale
            </h2>
            <p className="text-base text-white/70 text-balance">
              WriteWorks doesn&apos;t replace your team—it amplifies their capabilities with intelligent automation and
              proven frameworks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Screenshot - Content Editor */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Write Better Content, Faster</h2>
              <p className="text-base text-white/70 max-w-2xl mx-auto">
                The WriteWorks editor combines AI assistance with your brand guidelines for consistent, high-quality
                content every time.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <Image
                src="/images/editor-screenshot.png"
                alt="WriteWorks Content Editor with AI Assistance"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Why Enterprise Teams Choose WriteWorks
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 p-6 text-center hover:border-white/20 transition-all duration-300"
              >
                <benefit.icon className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Checklist */}
      <section id="features" className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                  Everything Your Enterprise Needs
                </h2>
                <p className="text-base text-white/70 mb-8 leading-relaxed">
                  From unlimited users to custom AI training, WriteWorks Enterprise provides the power, security, and
                  flexibility to scale content operations across your organization.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                  asChild
                >
                  <Link href="/contact">
                    Talk to Sales <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white mb-6">
                <Shield className="w-3 h-3 text-white" />
                Enterprise-Grade Security
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Security and Compliance Built In
              </h2>
              <p className="text-base text-white/70 text-balance">
                Your data security is our top priority. WriteWorks meets the highest industry standards.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10 p-6 text-center hover:border-white/20 transition-all duration-300">
                <Lock className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-white/70">Certified security controls and processes</p>
              </Card>
              <Card className="bg-white/5 border-white/10 p-6 text-center hover:border-white/20 transition-all duration-300">
                <Globe className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">GDPR Compliant</h3>
                <p className="text-sm text-white/70">Full compliance with data protection regulations</p>
              </Card>
              <Card className="bg-white/5 border-white/10 p-6 text-center hover:border-white/20 transition-all duration-300">
                <Shield className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">SSO & SAML</h3>
                <p className="text-sm text-white/70">Seamless integration with your identity provider</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-3 md:px-4 py-16 md:py-20">
        <Card className="bg-white/5 border-white/10 p-10 md:p-14 text-center max-w-4xl mx-auto hover:border-white/20 transition-all">
          <Sparkles className="w-10 h-10 text-white mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Content Operations?
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join enterprise marketing teams using WriteWorks to produce quality content 70% faster while maintaining
            brand consistency across all channels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10"
              asChild
            >
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent hover:border-white/40"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  )
}
