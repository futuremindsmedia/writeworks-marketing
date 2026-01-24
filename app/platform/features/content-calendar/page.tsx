import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, TrendingUp, CheckCircle2, Users, Home, ChevronRight, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Content Calendar | Plan Smarter, Publish on Time",
  description:
    "Plan, schedule, and manage your content strategy with an AI-powered content calendar. Smart scheduling, deadline tracking, and team coordination.",
  keywords: ["content calendar", "editorial calendar", "content planning", "scheduling", "content strategy"],
}

export default function ContentCalendarPage() {
  const challenges = [
    {
      title: "Missed Deadlines",
      description: "Content publishing dates slip without centralized tracking and reminders.",
    },
    {
      title: "Poor Visibility",
      description: "No clear view of what's coming up, what's in progress, or what's blocked.",
    },
    {
      title: "Team Misalignment",
      description: "Multiple teams working on content without coordination or shared planning.",
    },
  ]

  const solutions = [
    {
      title: "AI-Powered Scheduling",
      description: "Smart recommendations for optimal publish times based on audience data.",
    },
    {
      title: "Visual Pipeline",
      description: "See all content at a glance with drag-and-drop calendar management.",
    },
    {
      title: "Team Coordination",
      description: "Shared calendars with assignments, deadlines, and automatic notifications.",
    },
  ]

  const capabilities = [
    {
      icon: Clock,
      title: "Better Planning",
      description: "Visualize your content pipeline weeks or months in advance and plan strategically.",
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Keep everyone aligned with shared calendars, assignments, and deadline tracking.",
    },
    {
      icon: TrendingUp,
      title: "Consistent Publishing",
      description: "Maintain a steady content flow and never miss important publishing dates or campaigns.",
    },
  ]

  const jobsToBeDone = [
    { task: "Plan monthly content", traditional: "4 hours", withPlatform: "30 min", saved: "88%" },
    { task: "Schedule social posts", traditional: "2 hours", withPlatform: "15 min", saved: "88%" },
    { task: "Coordinate team content", traditional: "3 hours", withPlatform: "20 min", saved: "89%" },
    { task: "Track content status", traditional: "1 hour", withPlatform: "5 min", saved: "92%" },
  ]

  const targetAudience = [
    { role: "Content Managers", description: "Oversee content planning and publishing schedules" },
    { role: "Marketing Teams", description: "Coordinate campaigns across multiple channels" },
    { role: "Editorial Teams", description: "Manage content workflows and deadlines" },
  ]

  const features = [
    "Visual calendar interface",
    "Drag-and-drop scheduling",
    "Multiple calendar views",
    "Team member assignments",
    "Deadline notifications",
    "Content status tracking",
    "Recurring content support",
    "Campaign planning",
    "Calendar sharing",
    "Export to external calendars",
    "Content type filtering",
    "Publishing automation",
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
            <span className="text-white">Content Calendar</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Calendar className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Planning & Scheduling</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              AI Content Calendar | Plan Smarter, Publish on Time
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Plan, schedule, and manage your content strategy with an intuitive content calendar. Visualize your
              content pipeline, coordinate with your team, and never miss a deadline.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">88%</div>
                <div className="text-xs text-white/60">Time Saved</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">Zero</div>
                <div className="text-xs text-white/60">Missed Deadlines</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Team Visibility</div>
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
              <p className="text-white/70">Common content planning problems teams face</p>
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
              <p className="text-white/70">Smart planning for modern content teams</p>
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
                  {React.createElement(capability.icon, { className: "h-10 w-10 text-white mb-3" })}
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
              <p className="text-white/70">See how much faster you can plan content</p>
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
              <p className="text-white/70">Teams that need organized content planning</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Plan Your Content Strategy?</h2>
            <p className="text-white/70 mb-6">
              Get organized with a visual content calendar. Try content planning free for 14 days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
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
