import type { Metadata } from "next"
import Link from "next/link"
import {
  Users,
  CheckCircle2,
  MessageSquare,
  GitBranch,
  Clock,
  AlertTriangle,
  Lightbulb,
  Target,
  ArrowRight,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Workflow Software for Collaborative Teams | WriteWorks",
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
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Siloed Teams",
      description: "Writers, editors, and stakeholders working in isolation without visibility into progress",
    },
    {
      icon: AlertTriangle,
      title: "Approval Bottlenecks",
      description: "Content stuck in review queues with unclear ownership and missing deadlines",
    },
    {
      icon: AlertTriangle,
      title: "Version Confusion",
      description: "Multiple document versions floating around with no single source of truth",
    },
  ]

  const solutions = [
    {
      icon: Lightbulb,
      title: "Real-Time Collaboration",
      description: "Work together simultaneously with live cursors, comments, and instant updates",
    },
    {
      icon: Lightbulb,
      title: "Automated Workflows",
      description: "Create custom approval chains with automatic routing and notifications",
    },
    {
      icon: Lightbulb,
      title: "Complete Version History",
      description: "Track every change with full audit trail and easy rollback capabilities",
    },
  ]

  const jobsToBeDone = [
    { task: "Assign and track content tasks", timeSaved: "70%" },
    { task: "Route content for approval", timeSaved: "65%" },
    { task: "Gather stakeholder feedback", timeSaved: "60%" },
    { task: "Manage content calendars", timeSaved: "55%" },
    { task: "Track project deadlines", timeSaved: "50%" },
    { task: "Coordinate team handoffs", timeSaved: "75%" },
  ]

  const targetAudience = [
    { role: "Content Managers", description: "Oversee content production and team coordination" },
    { role: "Marketing Directors", description: "Ensure campaigns launch on time and on brand" },
    { role: "Editorial Teams", description: "Collaborate on content creation and editing" },
    { role: "Project Managers", description: "Track deliverables and manage resources" },
  ]

  const features = [
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
            <span className="text-white">Workflow & Collaboration</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Users className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Collaboration & Workflow</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Content Workflow Software for Collaborative Teams
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Streamline content creation with powerful workflow management, real-time collaboration, and seamless team
              coordination.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                <a href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-xs text-white/60">Faster Approvals</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Team Visibility</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">More Productive</div>
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
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Key Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Users,
                  title: "Real-Time Editing",
                  description: "Collaborate simultaneously with live cursor tracking",
                },
                {
                  icon: MessageSquare,
                  title: "Comments & Feedback",
                  description: "Leave contextual comments directly on content",
                },
                { icon: GitBranch, title: "Version Control", description: "Track all changes with complete history" },
                { icon: Clock, title: "Task Management", description: "Assign tasks and track progress" },
                { icon: CheckCircle2, title: "Approval Workflows", description: "Create custom approval chains" },
                { icon: Users, title: "Team Permissions", description: "Control access with role-based permissions" },
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
                    <th className="text-right py-3 px-4 text-white/80 text-sm font-medium">Time Saved</th>
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

      {/* What's Included */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
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
            <h2 className="text-2xl font-bold mb-3 text-white">Collaborate Seamlessly Across Teams</h2>
            <p className="text-white/70 mb-6 text-sm">Streamline your content workflow and keep everyone aligned.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent" asChild>
                <Link href="/demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
