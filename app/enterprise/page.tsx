import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
  ArrowRight,
  Home,
  Users,
  Shield,
  Bot,
  FileText,
  Workflow,
  BarChart3,
  Lock,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Enterprise Content Platform | WriteWorks",
  description:
    "WriteWorks combines AI Writing Agents with human-built frameworks to help enterprise marketing teams create quality content faster.",
  keywords: [
    "enterprise content platform",
    "ai content writing",
    "marketing content",
    "brand consistency",
    "content at scale",
  ],
}

export default function EnterprisePage() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Content Takes Too Long",
      description: "Marketing teams spend 60% of their time on content creation, leaving little room for strategy",
    },
    {
      icon: AlertTriangle,
      title: "Scaling With Quality",
      description: "Maintaining consistent quality and brand voice across global teams becomes nearly impossible",
    },
    {
      icon: AlertTriangle,
      title: "Fragmented Workflows",
      description: "Multiple tools, disconnected teams, and manual processes create bottlenecks",
    },
  ]

  const solutions = [
    {
      icon: Lightbulb,
      title: "80+ AI Writing Agents",
      description:
        "Specialized agents handle first drafts, research, and optimization while your team focuses on strategy",
    },
    {
      icon: Lightbulb,
      title: "Human-Built Frameworks",
      description: "Proprietary frameworks ensure AI output matches your brand standards and messaging guidelines",
    },
    {
      icon: Lightbulb,
      title: "Unified Content Operations",
      description: "From brief to publish, automate approvals and eliminate bottlenecks with streamlined workflows",
    },
  ]

  const capabilities = [
    { icon: Bot, title: "AI Writing Agents", description: "80+ specialized agents for every content type" },
    { icon: FileText, title: "Brand Voice Engine", description: "Enforce brand guidelines automatically" },
    { icon: Workflow, title: "Workflow Automation", description: "Custom approval chains and routing" },
    { icon: BarChart3, title: "Performance Analytics", description: "Track content ROI and team productivity" },
    { icon: Shield, title: "Enterprise Security", description: "SOC 2, GDPR, SSO and more" },
    { icon: Users, title: "Team Collaboration", description: "Real-time editing and feedback" },
  ]

  const jobsToBeDone = [
    { task: "Create first draft content", timeSaved: "75%" },
    { task: "Maintain brand consistency", timeSaved: "100%" },
    { task: "Repurpose content across channels", timeSaved: "80%" },
    { task: "Route content for approval", timeSaved: "65%" },
    { task: "Onboard new team members", timeSaved: "70%" },
    { task: "Scale content production", timeSaved: "10x" },
  ]

  const targetAudience = [
    { role: "VP of Marketing", description: "Scale content operations without scaling headcount" },
    { role: "Content Directors", description: "Maintain quality and brand consistency at scale" },
    { role: "Marketing Operations", description: "Streamline workflows and eliminate bottlenecks" },
    { role: "Enterprise Teams", description: "Unified platform for global content creation" },
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

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Enterprise</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Building2 className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Enterprise Platform</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Enterprise Content Writing, Powered by AI + Human Intelligence
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              WriteWorks combines 80+ AI Writing Agents with human-built frameworks to help enterprise marketing teams
              create quality content faster—without sacrificing brand consistency.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <Link href="https://app.writeworks.ai/sign-up">Free Trial</Link>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-4 gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-xs text-white/60">Faster Content</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl font-bold text-white">80+</div>
                <div className="text-xs text-white/60">AI Agents</div>
              </div>
              <div className="text-center border-r border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Brand Consistency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50%</div>
                <div className="text-xs text-white/60">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/images/dashboard-screenshot.png"
                alt="WriteWorks Enterprise Dashboard"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-xs text-white/50 mt-3">
              WriteWorks Dashboard - Centralized content operations for enterprise teams
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
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

      {/* Solutions Section */}
      <section id="how-it-works" className="py-12 border-t border-white/10">
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

      {/* Key Capabilities */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Key Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <capability.icon className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold mb-1 text-white text-sm">{capability.title}</h3>
                  <p className="text-white/60 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshot - Editor */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Write Better Content, Faster</h2>
            <p className="text-center text-white/70 mb-6 max-w-2xl mx-auto text-sm">
              The WriteWorks editor combines AI assistance with your brand guidelines for consistent, high-quality
              content.
            </p>
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/images/editor-screenshot.png"
                alt="WriteWorks Content Editor"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs to Be Done */}
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

      {/* Built For */}
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

      {/* Security & Compliance */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Enterprise-Grade Security</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                <Lock className="h-6 w-6 text-white mx-auto mb-2" />
                <h3 className="font-semibold text-white text-sm mb-1">SOC 2 Type II</h3>
                <p className="text-white/60 text-xs">Certified security controls</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                <Globe className="h-6 w-6 text-white mx-auto mb-2" />
                <h3 className="font-semibold text-white text-sm mb-1">GDPR Compliant</h3>
                <p className="text-white/60 text-xs">Full data protection compliance</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                <Shield className="h-6 w-6 text-white mx-auto mb-2" />
                <h3 className="font-semibold text-white text-sm mb-1">SSO & SAML</h3>
                <p className="text-white/60 text-xs">Enterprise authentication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3 text-white">Ready to Transform Your Content Operations?</h2>
            <p className="text-white/70 mb-6 text-sm">
              Join enterprise teams using WriteWorks to produce quality content 70% faster.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                <Link href="https://app.writeworks.ai/sign-up">
                  Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
