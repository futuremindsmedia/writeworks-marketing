import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, FileText, Zap, Calendar, CheckCircle, BookOpen, Target, Users } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Content Writing Software for SaaS Companies | WriteWorks",
  description: "Accelerate SaaS content creation with AI-powered tools. Generate product docs, marketing content, and technical materials at scale to drive growth and reduce time-to-market.",
}

export default function TechnologySaaSPage() {
  const challenges = [
    {
      icon: Code,
      title: "Technical Documentation Lag",
      description: "Product releases outpace documentation updates. Engineers spend hours writing docs instead of coding.",
    },
    {
      icon: FileText,
      title: "API Documentation Gaps",
      description: "Incomplete or outdated API docs frustrate developers and slow adoption of your platform.",
    },
    {
      icon: Zap,
      title: "Launch Content Delays",
      description: "Marketing can't create release notes and launch materials fast enough for your ship velocity.",
    },
  ]

  const solutions = [
    {
      icon: Zap,
      title: "Rapid Documentation",
      description: "Generate technical documentation, API docs, and release notes in hours, not days.",
    },
    {
      icon: CheckCircle,
      title: "Technical Accuracy",
      description: "Maintain technical precision while creating developer-friendly documentation.",
    },
    {
      icon: Code,
      title: "Launch Content at Scale",
      description: "Create product announcements, blog posts, and marketing materials that match your ship velocity.",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base Creation",
      description: "Build comprehensive help centers and support documentation that scales with your product.",
    },
  ]

  const audiences = [
    {
      icon: Code,
      role: "Product Managers",
      description: "Create release notes and product documentation faster than your sprint cycle.",
    },
    {
      icon: Users,
      role: "Developer Advocates",
      description: "Scale technical content, tutorials, and API documentation for your developer community.",
    },
    {
      icon: Target,
      role: "Product Marketers",
      description: "Launch products with comprehensive content that drives adoption and revenue.",
    },
    {
      icon: BookOpen,
      role: "Technical Writers",
      description: "Produce more documentation with higher quality and better developer experience.",
    },
  ]

  const jobs = [
    { task: "API documentation", time: "2 hours", saved: "80%" },
    { task: "Product release notes", time: "30 mins", saved: "85%" },
    { task: "Technical blog posts", time: "1 hour", saved: "75%" },
    { task: "Help center articles", time: "45 mins", saved: "70%" },
    { task: "Integration guides", time: "2 hours", saved: "80%" },
    { task: "Feature announcements", time: "30 mins", saved: "85%" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Technology & SaaS" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Industry</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Content Writing Software for SaaS Companies
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Scale technical content, documentation, and launch materials faster. Keep docs in sync with your product velocity.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Faster Docs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5x</div>
                <div className="text-xs text-white/60">More AI Citations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10x</div>
                <div className="text-xs text-white/60">Launch Content</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <Link href="https://app.writeworks.ai/sign-up">
                  Start Free <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="/demo">
                  <Calendar className="mr-2 w-4 h-4 inline" /> Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Technology & SaaS Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ship fast, document faster. Keep your technical content in sync with product velocity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <challenge.icon className="w-8 h-8 text-white/80 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                <p className="text-sm text-white/60">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How WriteWorks Solves It</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              AI-powered content creation that keeps pace with your product velocity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <solution.icon className="w-8 h-8 text-white/80 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-white/60">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs To Be Done */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Jobs To Be Done</h2>
            <p className="text-white/70">Time saved on common SaaS content tasks</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 border-b border-white/10 text-sm font-medium text-white/80">
              <div>Task</div>
              <div className="text-center">New Time</div>
              <div className="text-right">Time Saved</div>
            </div>
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-4 text-sm ${
                  index !== jobs.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="text-white">{job.task}</div>
                <div className="text-center text-white/70">{job.time}</div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                    {job.saved}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Built For</h2>
            <p className="text-white/70">SaaS professionals and teams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map((audience, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5 text-center">
                <audience.icon className="w-8 h-8 text-white/80 mb-3 mx-auto" />
                <h3 className="text-sm font-semibold mb-2">{audience.role}</h3>
                <p className="text-xs text-white/60">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Scale Your SaaS Content?</h2>
            <p className="text-white/70 mb-6">
              Join technology companies creating high-quality content that drives product adoption and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">
                  Start Free <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="/demo">
                  <Calendar className="mr-2 w-4 h-4 inline" /> Talk to Sales
                </a>
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-4">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>
</div>
  )
}
