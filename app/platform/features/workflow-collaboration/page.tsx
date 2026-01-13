import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Users, CheckCircle2, MessageSquare, GitBranch, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Workflow & Collaboration | WriteWorks AI Platform",
  description: "Streamline content creation with powerful workflow management and real-time team collaboration tools.",
  keywords: [
    "workflow management",
    "team collaboration",
    "content workflow",
    "project management",
    "team productivity",
  ],
}

export default function WorkflowCollaborationPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-white" />
            {/* </CHANGE> */}
            Back to All Features
          </Link>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-6">
              <Users className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Collaboration & Workflow</span>
              {/* </CHANGE> */}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Workflow & Collaboration Software
            </h1>
            {/* </CHANGE> */}
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Streamline content creation with powerful workflow management, real-time collaboration, and seamless team
              coordination. Keep everyone aligned and productive.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
              >
                Watch Demo
              </Button>
              {/* </CHANGE> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Collaboration Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Real-Time Editing",
                  description: "Collaborate on content simultaneously with live cursor tracking and instant updates.",
                },
                {
                  icon: MessageSquare,
                  title: "Comments & Feedback",
                  description: "Leave contextual comments, suggestions, and feedback directly on content.",
                },
                {
                  icon: GitBranch,
                  title: "Version Control",
                  description: "Track all changes with complete version history and easy rollback capabilities.",
                },
                {
                  icon: Clock,
                  title: "Task Management",
                  description: "Assign tasks, set deadlines, and track progress across all content projects.",
                },
                {
                  icon: CheckCircle2,
                  title: "Approval Workflows",
                  description: "Create custom approval chains with automated notifications and status tracking.",
                },
                {
                  icon: Users,
                  title: "Team Permissions",
                  description: "Control access with granular role-based permissions for users and teams.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#6366F1]/20 bg-card/50 backdrop-blur-sm hover:border-[#6366F1]/40 transition-all"
                >
                  <feature.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                  {/* </CHANGE> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Real-time collaborative editing",
                "Inline comments and feedback",
                "Complete version history",
                "Task assignment and tracking",
                "Custom approval workflows",
                "Role-based permissions",
                "Activity notifications",
                "Team workspaces",
                "Content calendars",
                "Deadline management",
                "Integration with Slack, Teams",
                "Mobile collaboration support",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white">{feature}</span>
                  {/* </CHANGE> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Collaborate Seamlessly Across Teams</h2>
            <p className="text-xl text-white/70 mb-8">
              Streamline your content workflow and keep everyone aligned. Start your free trial today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
              {/* </CHANGE> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
