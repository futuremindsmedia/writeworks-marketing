import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Users, Lock, CheckCircle2, UserCheck, Home, ChevronRight, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Role Based Access Control | Team Permissions Management",
  description:
    "Secure your content with granular role-based access control. Define custom roles, set permissions by team or project, and protect sensitive assets.",
  keywords: ["role-based access", "permissions", "security", "access control", "user management", "RBAC"],
}

export default function RoleBasedAccessPage() {
  const challenges = [
    {
      title: "Unauthorized Access",
      description: "Sensitive content exposed to wrong team members without proper permission controls.",
    },
    {
      title: "Complex Permission Management",
      description: "Difficult to manage who can view, edit, or publish content across large teams.",
    },
    {
      title: "Compliance Risks",
      description: "Unable to meet security and compliance requirements without proper access controls.",
    },
  ]

  const solutions = [
    {
      title: "Granular Permissions",
      description: "Define precise access levels for each role, controlling view, edit, and publish rights.",
    },
    {
      title: "Custom Role Creation",
      description: "Create roles that match your organization structure with inherited permissions.",
    },
    {
      title: "Audit-Ready Controls",
      description: "Meet compliance requirements with detailed access logs and permission documentation.",
    },
  ]

  const capabilities = [
    {
      icon: Lock,
      title: "Granular Control",
      description:
        "Define precise permissions for each role, controlling access to specific features, content, and actions.",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Easily manage team members, assign roles, and update permissions as your organization evolves.",
    },
    {
      icon: UserCheck,
      title: "Compliance Ready",
      description: "Meet security and compliance requirements with detailed access controls and audit trails.",
    },
  ]

  const jobsToBeDone = [
    { task: "Set up team permissions", traditional: "2 hours", withPlatform: "15 min", saved: "88%" },
    { task: "Onboard new team member", traditional: "45 min", withPlatform: "5 min", saved: "89%" },
    { task: "Audit access controls", traditional: "4 hours", withPlatform: "30 min", saved: "88%" },
    { task: "Update role permissions", traditional: "30 min", withPlatform: "3 min", saved: "90%" },
  ]

  const targetAudience = [
    { role: "IT Administrators", description: "Manage enterprise-wide access controls and security policies" },
    { role: "Team Leads", description: "Control team member access to projects and content" },
    { role: "Compliance Officers", description: "Ensure access controls meet regulatory requirements" },
  ]

  const features = [
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
            <span className="text-white">Role-Based Access</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Security & Access</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Role Based Access Control | Team Permissions Management
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Secure your content with granular role-based access control. Manage permissions, protect sensitive data,
              and ensure only authorized users can access specific content and features.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                <a href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">88%</div>
                <div className="text-xs text-white/60">Time Saved</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Compliance Ready</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">Zero</div>
                <div className="text-xs text-white/60">Unauthorized Access</div>
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
              <p className="text-white/70">Common access control problems teams face</p>
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
              <p className="text-white/70">Enterprise-grade access control made simple</p>
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
              <p className="text-white/70">See how much faster you can manage access controls</p>
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
              <p className="text-white/70">Teams that need secure access management</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Secure Your Content?</h2>
            <p className="text-white/70 mb-6">
              Implement enterprise-grade access control. Try role-based permissions free for 14 days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                <a href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
                asChild
              >
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
