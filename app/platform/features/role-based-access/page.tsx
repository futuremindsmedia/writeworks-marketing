import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Users, Lock, CheckCircle2, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Role-Based Access Control Software | WriteWorks AI Platform",
  description:
    "Secure your content with granular role-based access control. Manage permissions, protect sensitive data, and ensure compliance.",
  keywords: ["role-based access", "permissions", "security", "access control", "user management"],
}

export default function RoleBasedAccessPage() {
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
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Security & Access</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Role-Based Access Software
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Secure your content with granular role-based access control. Manage permissions, protect sensitive data,
              and ensure only authorized users can access specific content and features.
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
                  icon: Lock,
                  title: "Granular Control",
                  description:
                    "Define precise permissions for each role, controlling access to specific features, content, and actions.",
                },
                {
                  icon: Users,
                  title: "Team Management",
                  description:
                    "Easily manage team members, assign roles, and update permissions as your organization evolves.",
                },
                {
                  icon: UserCheck,
                  title: "Compliance Ready",
                  description:
                    "Meet security and compliance requirements with detailed access controls and audit trails.",
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
                  title: "Define Roles",
                  description:
                    "Create custom roles that match your organization's structure, from admins to contributors.",
                },
                {
                  step: "02",
                  title: "Set Permissions",
                  description:
                    "Configure granular permissions for each role, controlling access to features, content, and actions.",
                },
                {
                  step: "03",
                  title: "Assign Users",
                  description: "Add team members and assign them to appropriate roles based on their responsibilities.",
                },
                {
                  step: "04",
                  title: "Monitor & Adjust",
                  description: "Track access patterns, review audit logs, and adjust permissions as your needs change.",
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
                "Custom role creation",
                "Granular permission settings",
                "User group management",
                "Content access controls",
                "Feature-level permissions",
                "Audit trail logging",
                "Single sign-on (SSO) support",
                "Multi-factor authentication",
                "IP whitelisting",
                "Session management",
                "Permission inheritance",
                "Bulk user management",
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Secure Your Content?</h2>
            <p className="text-xl text-white/70 mb-8">
              Implement enterprise-grade access control. Try role-based permissions free for 14 days.
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
