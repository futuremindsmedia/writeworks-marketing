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
  TrendingUp,
  Clock,
  Target,
  Sparkles,
} from "lucide-react"
import { AnimatedChat } from "@/components/animated-chat"

function LogoCarousel() {
  const logos = [
    { name: "ChatGPT", image: "/images/logos/chatgpt.png" },
    { name: "Perplexity", image: "/images/logos/perplexity.png" },
    { name: "Claude", image: "/images/logos/claude.png" },
    { name: "Google AI Overviews", image: "/images/logos/google-ai.png" },
    { name: "Copilot", image: "/images/logos/copilot.png" },
    { name: "Grok", image: "/images/logos/grok.png" },
    { name: "Meta AI", image: "/images/logos/meta-ai.png" },
    { name: "DeepSeek", image: "/images/logos/deepseek.png" },
  ]

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll gap-16">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[200px] h-24 px-8 rounded-lg bg-card border border-border/40 hover:border-[#6366F1]/50 transition-all duration-300"
          >
            <div
              className={`h-12 w-full flex items-center justify-center ${logo.name === "Claude" ? "overflow-hidden" : ""}`}
            >
              <img
                src={logo.image || "/placeholder.svg"}
                alt={logo.name}
                className={`h-full w-auto max-w-[160px] object-contain filter brightness-0 invert ${
                  logo.name === "Claude" ? "scale-110 translate-y-1" : ""
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function EnterprisePage() {
  const challenges = [
    {
      icon: Target,
      title: "Fragmented Content Strategy",
      description:
        "Multiple teams creating content in silos, leading to inconsistent messaging and missed opportunities for AI platform visibility.",
    },
    {
      icon: TrendingUp,
      title: "Scaling Content Production",
      description:
        "Need to produce high-quality, AI-optimized content at scale across multiple brands, products, and markets.",
    },
    {
      icon: Shield,
      title: "Brand Consistency & Compliance",
      description:
        "Ensuring brand guidelines and regulatory compliance across thousands of content pieces and multiple teams.",
    },
    {
      icon: Clock,
      title: "Slow Time-to-Market",
      description:
        "Complex approval workflows and manual processes delay content publication and reduce competitive advantage.",
    },
  ]

  const solutions = [
    {
      icon: Users,
      title: "Unified Content Intelligence Platform",
      description:
        "Centralize all content operations with role-based access, team workspaces, and real-time collaboration across your entire organization.",
    },
    {
      icon: Zap,
      title: "AI-Powered Content Optimization",
      description:
        "Automatically optimize content for AI platform visibility with proprietary Visibility Score, ensuring your brand appears in ChatGPT, Claude, and Perplexity.",
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      description:
        "SOC 2 Type II certified, GDPR compliant, with SSO, advanced permissions, and audit logs to meet your security requirements.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description:
        "Track AI platform performance, content ROI, and team productivity with custom dashboards and executive reporting.",
    },
  ]

  const features = [
    "Unlimited team members and workspaces",
    "Custom AI models and training",
    "Dedicated account manager",
    "Priority support (24/7)",
    "Advanced API access",
    "Custom integrations",
    "On-premise deployment options",
    "SLA guarantees",
    "Custom contract terms",
    "Volume discounts",
    "Training and onboarding",
    "Strategic consulting",
  ]

  const stats = [
    { value: "10M+", label: "Content pieces optimized" },
    { value: "500+", label: "Enterprise customers" },
    { value: "95%", label: "Customer satisfaction" },
    { value: "3x", label: "Increase in AI visibility" },
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
            Enterprise AI Platform for High-Performance Content
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-8 text-pretty max-w-2xl mx-auto">
            WriteWorks empowers enterprise organizations to create content that drives brand visibility across ChatGPT,
            Claude, Perplexity, and all major AI platforms—with enterprise-grade security, scale, and support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-8"
              asChild
            >
              <a href="/contact">Request a Demo</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent hover:border-white/40"
              asChild
            >
              <a href="#features">Explore Features</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-white" />
              300% avg visibility increase
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <section className="py-12 md:py-16 border-y border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <p className="text-center text-sm text-white/70 mb-8">
            WriteWorks drives enterprise growth across all major AI platforms
          </p>
          <LogoCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Challenges Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Enterprise Content Challenges WriteWorks Solves
            </h2>
            <p className="text-base text-white/70 text-balance">
              Large organizations face unique challenges when optimizing content for AI platforms. WriteWorks provides
              enterprise solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
              >
                <challenge.icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{challenge.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{challenge.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How WriteWorks Solves It with AnimatedChat */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Enterprise Content Intelligence Platform
            </h2>
            <p className="text-base text-white/70 text-balance">
              WriteWorks provides the tools, security, and scale your organization needs to dominate AI-powered search.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
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
            <div className="relative flex items-center">
              <AnimatedChat
                messages={[
                  {
                    role: "user",
                    content: "How does WriteWorks handle enterprise-scale content production?",
                    delay: 500,
                  },
                  {
                    role: "assistant",
                    content:
                      "WriteWorks provides unified content intelligence across your entire organization. Teams collaborate in real-time with role-based access, while Content Writing agents scale production without compromising quality or brand consistency.",
                    delay: 800,
                  },
                  { role: "user", content: "What about security and compliance?", delay: 1000 },
                  {
                    role: "assistant",
                    content:
                      "WriteWorks meets enterprise security requirements with SOC 2 Type II certification, GDPR compliance, SSO integration, and comprehensive audit logs. Your data remains secure while teams optimize content for AI platforms.",
                    delay: 1200,
                  },
                ]}
                className="w-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section id="features" className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                  Everything Your Enterprise Needs
                </h2>
                <p className="text-base text-white/70 mb-8 leading-relaxed">
                  From unlimited team members to custom AI models, WriteWorks Enterprise provides the power and
                  flexibility to scale content intelligence across your entire organization.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                  asChild
                >
                  <a href="/contact">
                    Talk to Sales <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
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
                Your data security is the top priority. WriteWorks meets the highest industry standards.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <Lock className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-white/70">Certified security controls and processes</p>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <Globe className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">GDPR Compliant</h3>
                <p className="text-sm text-white/70">Full compliance with data protection regulations</p>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 text-center hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
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
        <Card className="bg-white/5 border-white/10 p-12 md:p-16 text-center max-w-4xl mx-auto hover:border-white/20 transition-all">
          <Sparkles className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Transform Enterprise Content Strategy</h2>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join leading enterprises using WriteWorks to dominate AI-powered search and drive unprecedented brand
            visibility across ChatGPT, Claude, Perplexity, and all major AI platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10"
              asChild
            >
              <a href="/contact">Schedule a Demo</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent hover:border-white/40"
              asChild
            >
              <a href="/pricing">View Pricing</a>
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-6">
            No credit card required • 300% avg visibility increase • Enterprise-grade security
          </p>
        </Card>
      </section>
    </div>
  )
}
