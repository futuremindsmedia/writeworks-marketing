import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, GitBranch, CheckCircle, CheckCircle2, MessageSquare, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Approval Workflows Software | WriteWorks AI Platform",
  description:
    "Streamline content review and approval with customizable workflows. Ensure quality control and compliance before publishing.",
  keywords: ["approval workflows", "content review", "quality control", "publishing workflow", "content approval"],
}

export default function ApprovalWorkflowsPage() {
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
              <GitBranch className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Workflow & Collaboration</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Approval Workflows Software
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Streamline content review and approval with customizable workflows. Ensure quality control, maintain
              compliance, and get content approved faster with structured approval processes.
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
                  title: "Define Workflow",
                  description:
                    "Create custom approval workflows with multiple stages and reviewers for different content types.",
                },
                {
                  step: "02",
                  title: "Submit for Review",
                  description:
                    "Content creators submit work for review, automatically notifying the next approver in the chain.",
                },
                {
                  step: "03",
                  title: "Review & Feedback",
                  description:
                    "Reviewers provide feedback, request changes, or approve content to move it to the next stage.",
                },
                {
                  step: "04",
                  title: "Publish Approved Content",
                  description: "Once all approvals are complete, content is ready to publish with full audit trail.",
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Streamline Approvals?</h2>
            <p className="text-xl text-white/70 mb-8">
              Implement structured approval workflows. Try approval automation free for 14 days.
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
