import type { Metadata } from "next"
import Link from "next/link"
import {
  FolderKanban,
  Users,
  Calendar,
  Target,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Content Project Management | Marketing Workflow Tools | WriteWorks",
  description:
    "Organize content projects, track progress, manage deadlines, and collaborate with your team. Keep all your content initiatives on track.",
}

export default function ProjectManagementPage() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Scattered Projects",
      description: "Content initiatives spread across multiple tools and spreadsheets",
    },
    {
      icon: AlertTriangle,
      title: "Missed Deadlines",
      description: "No centralized view of due dates and dependencies",
    },
    {
      icon: AlertTriangle,
      title: "Resource Blindness",
      description: "Unclear who's working on what and team capacity",
    },
  ]

  const solutions = [
    {
      icon: Lightbulb,
      title: "Centralized Hub",
      description: "All content projects organized in one powerful platform",
    },
    {
      icon: Lightbulb,
      title: "Visual Timelines",
      description: "See deadlines, milestones, and dependencies at a glance",
    },
    {
      icon: Lightbulb,
      title: "Resource Management",
      description: "Track assignments and balance team workloads",
    },
  ]

  const jobsToBeDone = [
    { task: "Plan content campaigns", timeSaved: "65%" },
    { task: "Track project progress", timeSaved: "70%" },
    { task: "Manage team assignments", timeSaved: "60%" },
    { task: "Meet publication deadlines", timeSaved: "75%" },
    { task: "Coordinate cross-team work", timeSaved: "55%" },
    { task: "Report on project status", timeSaved: "80%" },
  ]

  const targetAudience = [
    { role: "Content Managers", description: "Oversee content production" },
    { role: "Marketing Directors", description: "Track campaign progress" },
    { role: "Project Managers", description: "Coordinate deliverables" },
    { role: "Team Leads", description: "Manage team workload" },
  ]

  const features = [
    "Project organization",
    "Task management",
    "Deadline tracking",
    "Resource allocation",
    "Milestone planning",
    "Progress dashboards",
    "Team workspaces",
    "Content calendars",
    "Kanban boards",
    "Timeline views",
    "Custom workflows",
    "Reporting & analytics",
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
            <span className="text-white">Project Management</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <FolderKanban className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Collaboration & Workflow</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Content Project Management | Marketing Workflow Tools
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Organize content projects, track progress, manage deadlines, and collaborate seamlessly. Keep all your
              content initiatives on track.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">75%</div>
                <div className="text-xs text-white/60">On-Time Delivery</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Project Visibility</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2x</div>
                <div className="text-xs text-white/60">Team Efficiency</div>
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
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Project Management Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: FolderKanban,
                  title: "Project Organization",
                  description: "Create and organize content projects",
                },
                { icon: Users, title: "Team Collaboration", description: "Assign tasks and set permissions" },
                { icon: Calendar, title: "Deadline Management", description: "Set due dates and milestones" },
                { icon: Target, title: "Goal Tracking", description: "Monitor progress toward objectives" },
                { icon: BarChart3, title: "Progress Visibility", description: "Dashboards and status reports" },
                { icon: CheckCircle2, title: "Workflow Automation", description: "Automate repetitive processes" },
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
            <h2 className="text-2xl font-bold mb-3 text-white">Take Control of Your Content Projects</h2>
            <p className="text-white/70 mb-6 text-sm">Organize, track, and deliver content projects on time.</p>
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
