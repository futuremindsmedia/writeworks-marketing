import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Users, Target, TrendingUp, BarChart, UserCheck, Globe, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Audience Profiles Software | WriteWorks AI",
  description: "Create detailed audience profiles and tailor your content to specific segments for maximum engagement.",
}

const challenges = [
  {
    title: "Generic Content",
    description: "Creating one-size-fits-all content that doesn't resonate with specific audience segments.",
  },
  {
    title: "Unknown Audience Needs",
    description: "Lack of detailed insights into what different audience segments actually want.",
  },
  {
    title: "Poor Personalization",
    description: "Unable to tailor messaging and tone for different buyer personas effectively.",
  },
]

const solutions = [
  {
    title: "Detailed Personas",
    description: "Build comprehensive profiles with demographics, interests, pain points, and preferences.",
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations on content that resonates with each audience segment.",
  },
  {
    title: "Targeted Content",
    description: "Automatically adjust tone, messaging, and style based on selected audience profile.",
  },
]

const capabilities = [
  {
    icon: Target,
    title: "Targeted Content",
    description: "Create content that resonates with specific audience segments and their needs.",
  },
  {
    icon: TrendingUp,
    title: "Better Engagement",
    description: "Increase engagement by delivering personalized content to each audience segment.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    description: "Make informed content decisions based on detailed audience analytics.",
  },
]

const jobsToBeDone = [
  { task: "Create audience persona", before: "4 hours", after: "30 min", saved: "87%" },
  { task: "Tailor content to segment", before: "45 min", after: "5 min", saved: "89%" },
  { task: "Analyze audience engagement", before: "2 hours", after: "15 min", saved: "87%" },
  { task: "Update persona insights", before: "1 hour", after: "Auto", saved: "100%" },
]

const targetAudience = [
  { role: "Content Strategists", description: "Build personas that inform content direction and strategy" },
  { role: "Marketing Managers", description: "Ensure campaigns target the right audience segments" },
  { role: "Product Marketers", description: "Create messaging that resonates with buyer personas" },
]

const features = [
  { icon: Users, text: "Unlimited audience segments" },
  { icon: Target, text: "Custom profile attributes" },
  { icon: TrendingUp, text: "Engagement tracking" },
  { icon: BarChart, text: "Audience analytics" },
  { icon: UserCheck, text: "Persona templates" },
  { icon: Globe, text: "Geographic targeting" },
]

export default function AudienceProfilesPage() {
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
                { label: "Audience Profiles" },
              ]}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Audience Profile Tool: Know Your Readers Inside Out
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Create detailed audience profiles and tailor your content to specific segments for maximum engagement.
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
                <div className="text-2xl font-bold text-white">87%</div>
                <div className="text-xs text-white/60">Faster Personas</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">Better Targeting</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">89%</div>
                <div className="text-xs text-white/60">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Audience Targeting Challenges</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Know Your Audience Better?</h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Start creating audience profiles today and deliver more targeted, effective content.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
