import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, CheckCircle2, Lock, FileCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Security & Compliance | WriteWorks AI Platform",
  description: "Enterprise-grade security with SOC 2, GDPR, and CCPA compliance. Keep your content and data secure.",
  keywords: ["security", "compliance", "data protection", "SOC 2", "GDPR", "enterprise security"],
}

export default function SecurityCompliancePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-white" />
            Back to All Features
          </Link>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-6">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Security & Compliance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Security & Compliance Software
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Enterprise-grade security with comprehensive compliance certifications. Your content and data are
              protected with industry-leading security measures.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                View Security Details
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
              >
                Contact Security Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Security Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "SOC 2 Type II Certified",
                  description: "Independently audited and certified for security, availability, and confidentiality.",
                },
                {
                  icon: Lock,
                  title: "End-to-End Encryption",
                  description: "All data encrypted in transit and at rest with AES-256 encryption.",
                },
                {
                  icon: FileCheck,
                  title: "GDPR & CCPA Compliant",
                  description: "Full compliance with global data protection and privacy regulations.",
                },
                {
                  icon: Users,
                  title: "SSO & SAML",
                  description: "Enterprise single sign-on with SAML 2.0 and OAuth 2.0 support.",
                },
                {
                  icon: Shield,
                  title: "Role-Based Access",
                  description: "Granular permissions and access controls for teams and users.",
                },
                {
                  icon: CheckCircle2,
                  title: "Audit Logs",
                  description: "Complete activity logging and audit trails for compliance reporting.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#6366F1]/20 bg-card/50 backdrop-blur-sm hover:border-[#6366F1]/40 transition-all"
                >
                  <feature.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Compliance & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
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
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Enterprise-Grade Security You Can Trust</h2>
            <p className="text-xl text-white/70 mb-8">
              Your content and data are protected with industry-leading security measures and compliance certifications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                View Security Documentation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Security Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
