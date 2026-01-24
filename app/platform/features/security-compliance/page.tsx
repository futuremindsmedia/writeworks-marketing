import type { Metadata } from "next"
import Link from "next/link"
import {
  Shield,
  CheckCircle2,
  Lock,
  FileCheck,
  Users,
  AlertTriangle,
  Lightbulb,
  Target,
  ArrowRight,
  Home,
  Eye,
  Key,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Security Compliance | Enterprise-Ready Platform | WriteWorks",
  description: "Enterprise-grade security with SOC 2, GDPR, and CCPA compliance. Keep your content and data secure.",
  keywords: ["security", "compliance", "data protection", "SOC 2", "GDPR", "enterprise security"],
}

export default function SecurityCompliancePage() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Data Privacy Concerns",
      description: "Sensitive content and customer data require enterprise-grade protection",
    },
    {
      icon: AlertTriangle,
      title: "Compliance Requirements",
      description: "Meeting GDPR, CCPA, and industry-specific regulatory requirements",
    },
    {
      icon: AlertTriangle,
      title: "Access Control",
      description: "Managing who can view, edit, and publish content across teams",
    },
  ]

  const solutions = [
    {
      icon: Lightbulb,
      title: "SOC 2 Type II Certified",
      description: "Independently audited and certified for security, availability, and confidentiality",
    },
    {
      icon: Lightbulb,
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest with AES-256 encryption",
    },
    {
      icon: Lightbulb,
      title: "Granular Permissions",
      description: "Role-based access controls with custom permission sets",
    },
  ]

  const jobsToBeDone = [
    { task: "Ensure data privacy compliance", timeSaved: "90%" },
    { task: "Manage user access permissions", timeSaved: "75%" },
    { task: "Generate compliance reports", timeSaved: "80%" },
    { task: "Monitor security threats", timeSaved: "85%" },
    { task: "Audit content access", timeSaved: "70%" },
    { task: "Implement SSO/SAML", timeSaved: "95%" },
  ]

  const targetAudience = [
    { role: "IT Security Teams", description: "Ensure platform meets security standards" },
    { role: "Compliance Officers", description: "Meet regulatory requirements" },
    { role: "Enterprise Admins", description: "Manage organization-wide settings" },
    { role: "Legal Teams", description: "Ensure data handling compliance" },
  ]

  const certifications = [
    "SOC 2 Type II certified",
    "GDPR compliant",
    "CCPA compliant",
    "ISO 27001 certified",
    "HIPAA compliant options",
    "PCI DSS compliant",
    "Regular security audits",
    "Penetration testing",
    "Data residency options",
    "DPA agreements available",
    "Privacy Shield certified",
    "Annual compliance reviews",
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
            <Link href="/platform" className="text-white/60 hover:text-white transition-colors">
              Platform
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/platform/features" className="text-white/60 hover:text-white transition-colors">
              Features
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Security & Compliance</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Security & Compliance</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Content Security Compliance | Enterprise-Ready Platform
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Enterprise-grade security with comprehensive compliance certifications. Your content and data are
              protected with industry-leading measures.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                <a href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                Contact Security Team
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">SOC 2</div>
                <div className="text-xs text-white/60">Type II Certified</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl font-bold text-white">256-bit</div>
                <div className="text-xs text-white/60">AES Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-white/60">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-12 border-t border-white/10">
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

      {/* Key Features */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Security Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Shield, title: "SOC 2 Type II Certified", description: "Independently audited for security" },
                { icon: Lock, title: "End-to-End Encryption", description: "AES-256 encryption at rest and transit" },
                { icon: FileCheck, title: "GDPR & CCPA Compliant", description: "Full privacy regulation compliance" },
                { icon: Key, title: "SSO & SAML", description: "Enterprise single sign-on support" },
                { icon: Users, title: "Role-Based Access", description: "Granular permissions for teams" },
                { icon: Eye, title: "Audit Logs", description: "Complete activity logging" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <feature.icon className="h-8 w-8 text-white mb-3" />
                  <h3 className="font-semibold mb-1 text-white text-sm">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Jobs to Be Done</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/80 text-sm font-medium">Task</th>
                    <th className="text-right py-3 px-4 text-white/80 text-sm font-medium">Efficiency Gain</th>
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

      {/* Certifications */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Compliance & Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                  <span className="text-white/80 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3 text-white">Enterprise-Grade Security You Can Trust</h2>
            <p className="text-white/70 mb-6 text-sm">
              Your content and data are protected with industry-leading security measures.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                View Security Documentation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent" asChild>
                <Link href="/contact">Contact Security Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
