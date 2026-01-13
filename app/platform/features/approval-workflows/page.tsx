import type { Metadata } from "next"
import Link from "next/link"
import {
  GitBranch,
  CheckCircle,
  CheckCircle2,
  MessageSquare,
  Clock,
  Home,
  ChevronRight,
  AlertTriangle,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Approval Workflow | Review Faster, Launch Sooner",
  description:
    "Streamline content review with customizable approval workflows. Set up multi-stage reviews, track feedback, and maintain compliance before publishing.",
  keywords: ["approval workflows", "content review", "quality control", "publishing workflow", "content approval"],
}

export default function ApprovalWorkflowsPage() {
  const challenges = [
    {
      title: "Slow Approvals",
      description: "Content gets stuck waiting for reviews with no visibility into who needs to act.",
    },
    {
      title: "Inconsistent Reviews",
      description: "Different reviewers apply different standards without structured processes.",
    },
    {
      title: "Lost Feedback",
      description: "Comments and revision requests scattered across emails and chat threads.",
    },
  ]

  const solutions = [
    {
      title: "Automated Routing",
      description: "Content automatically moves to the right reviewer based on type and workflow rules.",
    },
    {
      title: "Standardized Process",
      description: "Define review criteria and checklists to ensure consistent quality.",
    },
    {
      title: "Centralized Feedback",
      description: "All comments, revisions, and approvals tracked in one place.",
    },
  ]

  const capabilities = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Ensure every piece of content meets your standards before it goes live.",
    },
    {
      icon: Clock,
      title: "Faster Approvals",
      description: "Streamline the review process and reduce approval time with automated workflows.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Keep feedback organized and track approval status with built-in commenting.",
    },
  ]

  const jobsToBeDone = [
    { task: "Route content for review", traditional: "30 min", withPlatform: "Auto", saved: "100%" },
    { task: "Collect stakeholder feedback", traditional: "2 hours", withPlatform: "15 min", saved: "88%" },
    { task: "Track approval status", traditional: "1 hour", withPlatform: "Real-time", saved: "95%" },
    { task: "Final publish approval", traditional: "45 min", withPlatform: "5 min", saved: "89%" },
  ]

  const targetAudience = [
    { role: "Content Managers", description: "Oversee review processes and ensure quality standards" },
    { role: "Legal & Compliance", description: "Review content for regulatory compliance" },
    { role: "Marketing Leadership", description: "Final approval authority for campaigns" },
  ]

  const features = [
    "Custom workflow creation",
    "Multi-stage approvals",
    "Parallel approval paths",
    "Automatic notifications",
    "In-line commenting",
    "Change tracking",
    "Approval history",
    "Deadline management",
    "Conditional routing",
    "Approval delegation",
    "Email notifications",
    "Mobile approvals",
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href="/platform" className="text-white/60 hover:text-white transition-colors">
              Platform
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href="/platform/features" className="text-white/60 hover:text-white transition-colors">
              Features
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <span className="text-white">Approval Workflows</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <GitBranch className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Workflow & Collaboration</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Content Approval Workflow | Review Faster, Launch Sooner
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Streamline content review and approval with customizable workflows. Ensure quality control, maintain
              compliance, and get content approved faster.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
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

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">5x</div>
                <div className="text-xs text-white/60">Faster Approvals</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Audit Trail</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">Zero</div>
                <div className="text-xs text-white/60">Lost Feedback</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">The Challenges</h2>
              <p className="text-white/70">Common approval process problems teams face</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <AlertTriangle className="h-8 w-8 text-white/60 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                  <p className="text-sm text-white/70">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">How WriteWorks Solves This</h2>
              <p className="text-white/70">Structured approval processes that move fast</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <Zap className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-sm text-white/70">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">Key Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <capability.icon className="h-10 w-10 text-white mb-3" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{capability.title}</h3>
                  <p className="text-sm text-white/70">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs to Be Done */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Time Saved on Key Tasks</h2>
              <p className="text-white/70">See how much faster you can get approvals</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/80 font-medium">Task</th>
                    <th className="text-center py-3 px-4 text-white/80 font-medium">Traditional</th>
                    <th className="text-center py-3 px-4 text-white/80 font-medium">With WriteWorks</th>
                    <th className="text-center py-3 px-4 text-white/80 font-medium">Time Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {jobsToBeDone.map((job, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-3 px-4 text-white/70">{job.task}</td>
                      <td className="py-3 px-4 text-center text-white/50">{job.traditional}</td>
                      <td className="py-3 px-4 text-center text-white">{job.withPlatform}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2 py-1 rounded bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-medium">
                          {job.saved}
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

      {/* Target Audience */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Built For</h2>
              <p className="text-white/70">Teams that need structured content approval</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="p-5 rounded-lg border border-white/10 bg-white/5 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">{audience.role}</h3>
                  <p className="text-sm text-white/70">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Streamline Approvals?</h2>
            <p className="text-white/70 mb-6">
              Implement structured approval workflows. Try approval automation free for 14 days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
