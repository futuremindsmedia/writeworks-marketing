import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Shield, Lock, FileCheck, AlertCircle, CheckCircle, Globe } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "GDPR Compliance Software | WriteWorks AI",
  description:
    "Ensure your content operations meet GDPR requirements with built-in compliance tools and data protection features.",
}

export default function GDPRCompliancePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs
            items={[
              { label: "Platform", href: "/platform" },
              { label: "Features", href: "/platform/features" },
              { label: "GDPR Compliance" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">GDPR Compliance Software</h1>
            <p className="text-xl text-white/70 mb-8">
              Ensure your content operations meet GDPR requirements with built-in compliance tools and data protection
              features that keep you secure and compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free Trial</Link>
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
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why GDPR Compliance Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Shield className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
              <p className="text-white/70">Protect user data with GDPR-compliant security measures and encryption.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <FileCheck className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Compliance Tools</h3>
              <p className="text-white/70">Built-in tools to help you maintain GDPR compliance effortlessly.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <CheckCircle className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Peace of Mind</h3>
              <p className="text-white/70">
                Operate confidently knowing your platform meets EU data protection standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How GDPR Compliance Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Encryption</h3>
              <p className="text-white/70 text-sm">All data is encrypted at rest and in transit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Access Controls</h3>
              <p className="text-white/70 text-sm">Manage who can access and process personal data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Audit Trails</h3>
              <p className="text-white/70 text-sm">Track all data access and processing activities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Rights</h3>
              <p className="text-white/70 text-sm">Support user rights to access, delete, and export data</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What's Included</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Lock, text: "End-to-end encryption" },
                { icon: Shield, text: "Data protection measures" },
                { icon: FileCheck, text: "Compliance documentation" },
                { icon: AlertCircle, text: "Breach notification system" },
                { icon: CheckCircle, text: "Regular compliance audits" },
                { icon: Globe, text: "EU data residency options" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/70">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ensure GDPR Compliance?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Start using GDPR-compliant content tools today and protect your users' data.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
