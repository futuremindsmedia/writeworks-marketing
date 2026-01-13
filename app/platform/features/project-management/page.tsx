import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FolderKanban, Users, Calendar, Target, BarChart3, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Project Management | WriteWorks AI Platform",
  description:
    "Organize content projects, track progress, manage deadlines, and collaborate with your team. Keep all your content initiatives on track.",
}

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="container relative mx-auto px-4 py-24">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Features
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <FolderKanban className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Collaboration & Workflow</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Project Management Software
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Organize content projects, track progress, manage deadlines, and collaborate seamlessly. Keep all your
              content initiatives on track from ideation to publication.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Managing Projects
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Streamline Your Content Operations</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FolderKanban,
                title: "Project Organization",
                description:
                  "Create projects for campaigns, content series, or initiatives. Organize content by project for better visibility.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Assign tasks, set permissions, and collaborate with team members. Everyone knows what to work on.",
              },
              {
                icon: Calendar,
                title: "Deadline Management",
                description: "Set due dates, milestones, and reminders. Never miss a publication deadline again.",
              },
              {
                icon: Target,
                title: "Goal Tracking",
                description:
                  "Set project goals and KPIs. Track progress toward content objectives and measure success.",
              },
              {
                icon: BarChart3,
                title: "Progress Visibility",
                description:
                  "See project status at a glance. Track completion rates, bottlenecks, and team productivity.",
              },
              {
                icon: CheckCircle2,
                title: "Workflow Automation",
                description:
                  "Automate repetitive tasks and approvals. Set up custom workflows for different content types.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="relative group rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Manage content projects from start to finish</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Create a Project",
                description:
                  "Start a new project for your content initiative. Add a name, description, goals, and timeline. Choose a project template or start from scratch.",
              },
              {
                step: "02",
                title: "Add Content & Tasks",
                description:
                  "Add content pieces to your project. Break down work into tasks and subtasks. Set priorities and dependencies.",
              },
              {
                step: "03",
                title: "Assign Team Members",
                description:
                  "Assign tasks to team members based on their roles and expertise. Set permissions and access levels for each member.",
              },
              {
                step: "04",
                title: "Set Deadlines",
                description:
                  "Add due dates for each task and milestone. Set up reminders and notifications to keep everyone on track.",
              },
              {
                step: "05",
                title: "Track Progress",
                description:
                  "Monitor project progress in real-time. View kanban boards, timelines, and progress reports. Identify bottlenecks early.",
              },
              {
                step: "06",
                title: "Review & Publish",
                description:
                  "Review completed content, approve changes, and publish. Track project success metrics and gather insights for future projects.",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Perfect For</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Content Marketing Campaigns",
                description:
                  "Plan and execute multi-channel content campaigns. Coordinate blog posts, social media, emails, and more in one place.",
              },
              {
                title: "Editorial Calendars",
                description:
                  "Manage your editorial calendar with ease. Plan content themes, assign writers, and track publication schedules.",
              },
              {
                title: "Product Launches",
                description:
                  "Coordinate all content for product launches. Ensure marketing, sales, and support content is ready on time.",
              },
              {
                title: "Content Series",
                description:
                  "Manage multi-part content series and guides. Keep all related content organized and track completion.",
              },
            ].map((useCase, index) => (
              <div key={index} className="rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-6">
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Control of Your Content Projects</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Organize, track, and deliver content projects on time with our powerful project management tools.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
