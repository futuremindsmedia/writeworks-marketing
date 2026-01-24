import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { FolderOpen, Search, Tag, Filter, Star, Archive, CheckCircle, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Content Library Software | WriteWorks AI",
  description: "Organize, search, and manage all your content assets in one centralized, intelligent library.",
}

const challenges = [
  {
    title: "Content Scattered Everywhere",
    description: "Assets spread across drives, emails, and platforms making retrieval time-consuming.",
  },
  {
    title: "Difficult to Find Assets",
    description: "No effective search or tagging system leads to recreating content that already exists.",
  },
  {
    title: "Version Confusion",
    description: "Teams using outdated versions of assets because the latest version is hard to locate.",
  },
]

const solutions = [
  {
    title: "Centralized Repository",
    description: "All content assets in one secure, accessible location with unlimited storage.",
  },
  {
    title: "AI-Powered Search",
    description: "Find any content instantly with intelligent search and smart filtering capabilities.",
  },
  {
    title: "Smart Organization",
    description: "Automatic tagging, categories, and version tracking ensures you always use the latest assets.",
  },
]

const capabilities = [
  {
    icon: FolderOpen,
    title: "Centralized Storage",
    description: "Keep all your content assets organized in one secure, accessible location.",
  },
  {
    icon: Search,
    title: "Powerful Search",
    description: "Find any content instantly with advanced search and filtering capabilities.",
  },
  {
    icon: Tag,
    title: "Smart Organization",
    description: "Organize content with tags, categories, and custom metadata for easy retrieval.",
  },
]

const jobsToBeDone = [
  { task: "Find existing content assets", before: "25 min", after: "2 min", saved: "92%" },
  { task: "Organize new content uploads", before: "15 min", after: "3 min", saved: "80%" },
  { task: "Share assets with team members", before: "10 min", after: "1 min", saved: "90%" },
  { task: "Maintain asset version control", before: "20 min", after: "Auto", saved: "100%" },
]

const targetAudience = [
  { role: "Content Managers", description: "Organize and maintain content repositories efficiently" },
  { role: "Marketing Teams", description: "Quick access to approved brand assets and templates" },
  { role: "Creative Directors", description: "Ensure teams use the latest approved versions" },
]

const features = [
  { icon: FolderOpen, text: "Unlimited storage capacity" },
  { icon: Search, text: "Advanced search & filtering" },
  { icon: Tag, text: "Custom tags & categories" },
  { icon: Filter, text: "Smart content organization" },
  { icon: Star, text: "Favorites & bookmarks" },
  { icon: Archive, text: "Archive & restore functionality" },
]

export default function ContentLibraryPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <nav className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Platform", href: "/platform" },
                { label: "Features", href: "/platform/features" },
                { label: "Content Library" },
              ]}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Content Library Software</h1>
            <p className="text-lg text-white/70 mb-6">
              Organize, search, and manage all your content assets in one centralized, intelligent library.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free Trial <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
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
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">92%</div>
                <div className="text-xs text-white/60">Faster Search</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Centralized</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Content Library Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-white/70 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How WriteWorks Solves This</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-white/70 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <capability.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-white/70 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs to be Done */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Time Saved on Key Tasks</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 text-sm font-semibold text-white/80">
                <div>Task</div>
                <div className="text-center">Before</div>
                <div className="text-center">After</div>
                <div className="text-center">Saved</div>
              </div>
              {jobsToBeDone.map((job, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 last:border-b-0 text-sm"
                >
                  <div className="text-white/70">{job.task}</div>
                  <div className="text-center text-white/50">{job.before}</div>
                  <div className="text-center text-white">{job.after}</div>
                  <div className="text-center text-green-400 font-semibold">{job.saved}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Built For</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 text-center hover:border-white/20 transition-colors"
              >
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{audience.role}</h3>
                <p className="text-white/70 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What's Included</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Organize Your Content?</h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Start building your content library today and make content management effortless.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
