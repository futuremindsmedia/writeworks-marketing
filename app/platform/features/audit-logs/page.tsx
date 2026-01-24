import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { FileText, Clock, User, Shield, Search, Download, AlertTriangle, Eye, CheckCircle, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Audit Logs Software | WriteWorks AI",
  description:
    "Track all system activities with comprehensive audit logs for security, compliance, and accountability.",
}

const challenges = [
  {
    icon: AlertTriangle,
    title: "Lack of Visibility",
    description: "Without audit logs, you have no way to know who did what in your content system.",
  },
  {
    icon: Shield,
    title: "Compliance Risks",
    description: "Regulatory requirements demand detailed activity tracking that manual processes can't provide.",
  },
  {
    icon: Eye,
    title: "Security Blind Spots",
    description: "Unauthorized access or suspicious activities go unnoticed without proper monitoring.",
  },
]

const solutions = [
  {
    challenge: "Lack of Visibility",
    solution: "Comprehensive audit logs capture every action, user, timestamp, and context automatically.",
  },
  {
    challenge: "Compliance Risks",
    solution: "Built-in compliance reporting generates audit-ready documentation for regulatory requirements.",
  },
  {
    challenge: "Security Blind Spots",
    solution: "Real-time activity monitoring alerts you to suspicious behavior and unauthorized access attempts.",
  },
]

const capabilities = [
  {
    icon: Shield,
    title: "Security Monitoring",
    description: "Monitor all system activities to detect and prevent security issues proactively.",
  },
  {
    icon: FileText,
    title: "Compliance Ready",
    description: "Meet regulatory requirements with detailed activity tracking and reporting.",
  },
  {
    icon: User,
    title: "Full Accountability",
    description: "Track who did what and when for complete accountability across your team.",
  },
]

const jobsToBeDone = [
  { task: "Track user activities", timeSaved: "100%" },
  { task: "Generate compliance reports", timeSaved: "90%" },
  { task: "Investigate security issues", timeSaved: "85%" },
  { task: "Review access patterns", timeSaved: "80%" },
  { task: "Export audit documentation", timeSaved: "95%" },
]

const targetAudience = [
  {
    role: "Security Teams",
    description: "Monitor activities and detect potential security threats in real-time.",
  },
  {
    role: "Compliance Officers",
    description: "Generate audit-ready reports and ensure regulatory compliance.",
  },
  {
    role: "IT Administrators",
    description: "Track system usage and manage access across the organization.",
  },
]

export default function AuditLogsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <nav className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Platform", href: "/platform" },
                { label: "Features", href: "/platform/features" },
                { label: "Audit Logs" },
              ]}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Audit Logs Software</h1>
            <p className="text-lg text-white/70 mb-6">
              Track all system activities with comprehensive audit logs for security, compliance, and accountability
              across your entire content operation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free Trial <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Activity Tracked</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">Real-time</div>
                <div className="text-xs text-white/60">Monitoring</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">Audit-Ready</div>
                <div className="text-xs text-white/60">Reports</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">The Challenges You Face</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <challenge.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-white/70 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How WriteWorks Solves These Challenges</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {solutions.map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.challenge}</h3>
                    <p className="text-white/70 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <capability.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-white/70 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs to be Done */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Jobs to Be Done</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-4 border-b border-white/10 bg-white/5">
                <div className="text-sm font-medium text-white">Task</div>
                <div className="text-sm font-medium text-white text-right">Time Saved</div>
              </div>
              {jobsToBeDone.map((job, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-4 border-b border-white/10 last:border-0">
                  <div className="text-sm text-white/70">{job.task}</div>
                  <div className="text-sm text-white font-medium text-right">{job.timeSaved}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Who It's For</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                <Users className="w-10 h-10 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">{audience.role}</h3>
                <p className="text-white/70 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What's Included</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: "Comprehensive activity logs" },
                { icon: Clock, text: "Timestamp tracking" },
                { icon: User, text: "User attribution" },
                { icon: Shield, text: "Security event monitoring" },
                { icon: Search, text: "Advanced search & filtering" },
                { icon: Download, text: "Export & reporting tools" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
                  <feature.icon className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/70 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Track System Activities?</h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Start using audit logs today for better security, compliance, and accountability.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
