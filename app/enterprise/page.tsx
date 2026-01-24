import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, AlertTriangle, Target, Users, Shield, Zap, FileText, CheckCircle2 } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Enterprise Content Platform | WriteWorks AI",
  description:
    "Scale enterprise content production with AI + human intelligence. Maintain brand consistency, streamline workflows, and empower global marketing teams.",
}

export default function EnterprisePage() {
  const challenges = [
    {
      icon: Clock,
      title: "Content Takes Too Long",
      description: "Marketing teams spend 60% of time on content creation instead of strategy and campaign execution.",
    },
    {
      icon: AlertTriangle,
      title: "Inconsistent Brand Voice",
      description: "Quality and messaging varies across global teams, agencies, and freelancers.",
    },
    {
      icon: Target,
      title: "Fragmented Workflows",
      description: "Multiple tools, manual handoffs, and disconnected approval processes create bottlenecks.",
    },
  ]

  const solutions = [
    {
      challenge: "Content Takes Too Long",
      solution:
        "80+ AI Writing Agents create first drafts in minutes while human-built frameworks ensure quality output.",
    },
    {
      challenge: "Inconsistent Brand Voice",
      solution:
        "Brand Knowledge Base and style enforcement ensures every piece of content matches your guidelines—automatically.",
    },
    {
      challenge: "Fragmented Workflows",
      solution:
        "Unified platform with custom approval workflows, role-based access, and real-time collaboration eliminates bottlenecks.",
    },
  ]

  const jobsToBeDone = [
    { task: "Create first draft content", timeSaved: "75%", before: "4 hours", after: "1 hour" },
    { task: "Ensure brand consistency", timeSaved: "100%", before: "Manual review", after: "Automated" },
    { task: "Repurpose content across channels", timeSaved: "80%", before: "3 hours", after: "36 mins" },
    { task: "Route content for approval", timeSaved: "65%", before: "2 days", after: "4 hours" },
    { task: "Onboard new team members", timeSaved: "70%", before: "2 weeks", after: "3 days" },
    { task: "Scale content production", timeSaved: "10x", before: "Limited", after: "Unlimited" },
  ]

  const targetAudience = [
    { role: "VP of Marketing", description: "Scale content operations without scaling headcount" },
    { role: "Content Directors", description: "Maintain quality and brand voice at scale" },
    { role: "Marketing Operations", description: "Streamline workflows and eliminate bottlenecks" },
    { role: "Global Teams", description: "Unified platform for worldwide content creation" },
  ]

  const capabilities = [
    { icon: Zap, title: "80+ AI Writing Agents", description: "Specialized agents for every content type and format" },
    { icon: FileText, title: "Brand Voice Engine", description: "Enforce guidelines and style across all content" },
    { icon: Users, title: "Team Collaboration", description: "Real-time editing, comments, and feedback" },
    { icon: Shield, title: "Enterprise Security", description: "SOC 2, GDPR, SSO, and role-based access" },
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
    "Custom integrations (CMS, DAM)",
    "SSO and enterprise authentication",
    "SLA guarantees",
    "On-premise deployment options",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Enterprise" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Enterprise Content Platform</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Content Writing, Powered by AI + Human Intelligence
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              WriteWorks combines 80+ AI Writing Agents with human-built frameworks to help enterprise marketing teams
              create quality content faster—without sacrificing brand consistency.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-xs text-white/60">Faster Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">80+</div>
                <div className="text-xs text-white/60">AI Agents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Brand Consistency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50%</div>
                <div className="text-xs text-white/60">Cost Reduction</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
              asChild
            >
              <Link href="https://app.writeworks.ai/sign-up">
                Start Free <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Screenshot - Dashboard */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/images/screenshot-202025-10-27-20at-2016.png"
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
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Enterprise Content Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Enterprise marketing teams face unique challenges when scaling content production
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <challenge.icon className="w-8 h-8 text-white/80 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                <p className="text-sm text-white/60">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Solve It */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How WriteWorks Solves This</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {solutions.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">{item.challenge}</div>
                  <div className="text-white/90">{item.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Enterprise Capabilities</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Purpose-built features for enterprise content teams</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                <capability.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-lg font-semibold mb-1">{capability.title}</div>
                <div className="text-sm text-white/60">{capability.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Screenshot - Editor */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Write Better Content, Faster</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                The WriteWorks editor combines AI assistance with your brand guidelines for consistent, high-quality
                content every time.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/images/screenshot-202025-10-27-20at-2015.png"
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
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Time Saved on Key Tasks</h2>
            <p className="text-white/70">Real productivity gains for enterprise content teams</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-3 text-sm font-medium text-white/70">Task</th>
                    <th className="text-center p-3 text-sm font-medium text-white/70">Before</th>
                    <th className="text-center p-3 text-sm font-medium text-white/70">After</th>
                    <th className="text-center p-3 text-sm font-medium text-white/70">Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {jobsToBeDone.map((job, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-3 text-sm text-white/90">{job.task}</td>
                      <td className="p-3 text-sm text-white/50 text-center">{job.before}</td>
                      <td className="p-3 text-sm text-white/50 text-center">{job.after}</td>
                      <td className="p-3 text-center">
                        <span className="text-sm font-semibold text-[#6366F1]">{job.timeSaved}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Built For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {targetAudience.map((persona, index) => (
              <div key={index} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                <div className="text-lg font-semibold mb-1">{persona.role}</div>
                <div className="text-sm text-white/60">{persona.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What's Included</h2>
            <p className="text-white/70">Everything enterprise teams need for content at scale</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 p-2">
                <CheckCircle2 className="h-4 w-4 text-[#6366F1] flex-shrink-0" />
                <span className="text-white/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Security */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Enterprise-Grade Security</h2>
            <p className="text-white/70">Security and compliance built for enterprise requirements</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
              <Shield className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="font-semibold mb-1">SOC 2 Type II</div>
              <div className="text-xs text-white/60">Certified security controls</div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
              <Shield className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="font-semibold mb-1">GDPR Compliant</div>
              <div className="text-xs text-white/60">Full data protection</div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
              <Shield className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="font-semibold mb-1">SSO & SAML</div>
              <div className="text-xs text-white/60">Enterprise authentication</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Content Operations?</h2>
            <p className="text-white/70 mb-6">
              Join enterprise teams using WriteWorks to produce quality content 70% faster
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
              asChild
            >
              <Link href="https://app.writeworks.ai/sign-up">
                Start Free <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
