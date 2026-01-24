import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Zap, Copy, CheckCircle2, Layout, Home, ChevronRight, AlertTriangle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Content Templates | Start Strong, Finish Faster",
  description:
    "Access 500+ AI content templates for every marketing need. Blog posts, social media, emails, and more. Customize templates to match your brand voice.",
  keywords: ["content templates", "AI templates", "marketing templates", "template library", "content reuse"],
}

export default function ContentTemplatesPage() {
  const challenges = [
    {
      title: "Starting From Scratch",
      description: "Every piece of content requires building structure and format from zero.",
    },
    {
      title: "Inconsistent Output",
      description: "Different team members produce content with varying quality and structure.",
    },
    {
      title: "Slow Production",
      description: "Content creation takes too long without proven frameworks to follow.",
    },
  ]

  const solutions = [
    {
      title: "500+ Ready Templates",
      description: "Pre-built templates for every content type - blogs, emails, social, and more.",
    },
    {
      title: "Brand-Aligned Outputs",
      description: "Templates trained on your brand voice for consistent quality every time.",
    },
    {
      title: "70% Faster Creation",
      description: "Start with proven structures and fill in your unique content.",
    },
  ]

  const capabilities = [
    {
      icon: Zap,
      title: "Faster Creation",
      description: "Start with proven templates and reduce content creation time by up to 70%.",
    },
    {
      icon: Copy,
      title: "Consistent Quality",
      description: "Maintain brand voice and quality standards across all content with reusable templates.",
    },
    {
      icon: Layout,
      title: "Easy Customization",
      description: "Customize templates for specific needs while maintaining core structure and best practices.",
    },
  ]

  const jobsToBeDone = [
    { task: "Create blog post structure", traditional: "45 min", withPlatform: "5 min", saved: "89%" },
    { task: "Write email campaign", traditional: "2 hours", withPlatform: "20 min", saved: "83%" },
    { task: "Build social media series", traditional: "1.5 hours", withPlatform: "15 min", saved: "83%" },
    { task: "Draft landing page copy", traditional: "3 hours", withPlatform: "30 min", saved: "83%" },
  ]

  const targetAudience = [
    { role: "Content Marketers", description: "Scale content production with proven templates" },
    { role: "Marketing Managers", description: "Ensure team consistency across all content" },
    { role: "Freelance Writers", description: "Deliver client work faster with ready frameworks" },
  ]

  const features = [
    "500+ pre-built templates",
    "Custom template creation",
    "Template versioning",
    "Dynamic field insertion",
    "Template categories",
    "Team template sharing",
    "Template analytics",
    "Import/export templates",
    "Template permissions",
    "AI-powered suggestions",
    "Multi-format support",
    "Template preview",
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
            <span className="text-white">Content Templates</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <FileText className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">Content Creation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              AI Content Templates | Start Strong, Finish Faster
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Access 500+ AI content templates for every marketing need. Build a library of templates for blog posts,
              social media, emails, and more.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                <a href="https://app.writeworks.ai/sign-up">Start Free <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                View Templates
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-white/60">Templates</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">70%</div>
                <div className="text-xs text-white/60">Faster Creation</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Customizable</div>
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
              <p className="text-white/70">Common content creation problems teams face</p>
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
              <p className="text-white/70">Templates that accelerate your workflow</p>
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
              <p className="text-white/70">See how much faster you can create content</p>
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
              <p className="text-white/70">Teams that need to create content faster</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Speed Up Content Creation?</h2>
            <p className="text-white/70 mb-6">
              Build your template library and create content faster. Try content templates free for 14 days.
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
