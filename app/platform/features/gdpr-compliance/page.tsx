import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Shield, Lock, FileCheck, AlertCircle, CheckCircle, Globe, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "GDPR Compliance Software | WriteWorks AI",
  description:
    "Ensure your content operations meet GDPR requirements with built-in compliance tools and data protection features.",
}

const challenges = [
  {
    title: "Compliance Complexity",
    description: "Navigating complex GDPR requirements while managing content across multiple teams and regions.",
  },
  {
    title: "Data Security Concerns",
    description: "Ensuring personal data in content workflows is properly protected and encrypted.",
  },
  {
    title: "Audit Requirements",
    description: "Maintaining detailed records of data access and processing for compliance audits.",
  },
]

const solutions = [
  {
    title: "Built-In Compliance",
    description: "GDPR compliance baked into the platform with automatic data protection measures.",
  },
  {
    title: "Enterprise Security",
    description: "End-to-end encryption, EU data residency, and SOC 2 certified infrastructure.",
  },
  {
    title: "Complete Audit Trail",
    description: "Automatic logging of all data access and processing activities for compliance reporting.",
  },
]

const capabilities = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Protect user data with GDPR-compliant security measures and encryption.",
  },
  {
    icon: FileCheck,
    title: "Compliance Tools",
    description: "Built-in tools to help you maintain GDPR compliance effortlessly.",
  },
  {
    icon: CheckCircle,
    title: "Peace of Mind",
    description: "Operate confidently knowing your platform meets EU data protection standards.",
  },
]

const jobsToBeDone = [
  { task: "Generate compliance report", before: "4 hours", after: "5 min", saved: "98%" },
  { task: "Respond to data requests", before: "2 hours", after: "15 min", saved: "87%" },
  { task: "Audit data access logs", before: "3 hours", after: "10 min", saved: "94%" },
  { task: "Ensure data encryption", before: "Manual", after: "Auto", saved: "100%" },
]

const targetAudience = [
  { role: "Compliance Officers", description: "Ensure content operations meet regulatory requirements" },
  { role: "Legal Teams", description: "Maintain proper data handling and documentation" },
  { role: "Enterprise Admins", description: "Manage organizational data security policies" },
]

const features = [
  { icon: Lock, text: "End-to-end encryption" },
  { icon: Shield, text: "Data protection measures" },
  { icon: FileCheck, text: "Compliance documentation" },
  { icon: AlertCircle, text: "Breach notification system" },
  { icon: CheckCircle, text: "Regular compliance audits" },
  { icon: Globe, text: "EU data residency options" },
]

export default function GDPRCompliancePage() {
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
                { label: "GDPR Compliance" },
              ]}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GDPR Compliant Content Tool | EU Data Privacy
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Ensure your content operations meet GDPR requirements with built-in compliance tools and data protection
              features.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
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
                <div className="text-xs text-white/60">GDPR Compliant</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">SOC 2</div>
                <div className="text-xs text-white/60">Certified</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">EU</div>
                <div className="text-xs text-white/60">Data Residency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Compliance Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
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
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How WriteWorks Solves This</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-white/70 text-sm">{solution.description}</p>
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
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Time Saved on Key Tasks</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 text-sm font-semibold text-white/80">
                <div>Task</div>
                <div className="text-center">Before</div>
                <div className="text-center">After</div>
                <div className="text-center">Saved</div>
              </div>
              {jobsToBeDone.map((job, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 last:border-b-0 text-sm"
                >
                  <div className="text-white/70">{job.task}</div>
                  <div className="text-center text-white/50">{job.before}</div>
                  <div className="text-center text-white">{job.after}</div>
                  <div className="text-center text-green-400 font-semibold">{job.saved}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Built For</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 text-center hover:border-white/20 transition-colors"
              >
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
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
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Ensure GDPR Compliance?</h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Start using GDPR-compliant content tools today and protect your users' data.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
