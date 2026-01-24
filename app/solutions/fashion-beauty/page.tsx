import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, TrendingUp, Package, Calendar, CheckCircle, Zap, BookOpen, Target, Users } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Content Writing Software for Fashion & Beauty | WriteWorks",
  description: "Scale fashion content with AI-powered creation tools. Generate product descriptions, lookbooks, and editorial content that drives sales and builds brand appeal.",
}

export default function FashionBeautyPage() {
  const challenges = [
    {
      icon: Package,
      title: "Product Descriptions",
      description: "Creating unique, compelling descriptions for hundreds of products across collections is time-consuming.",
    },
    {
      icon: TrendingUp,
      title: "Trend Content",
      description: "Keeping up with fast-moving trends and producing timely content requires constant attention and speed.",
    },
    {
      icon: Sparkles,
      title: "Brand Storytelling",
      description: "Maintaining consistent brand voice while creating diverse content across multiple channels is challenging.",
    },
  ]

  const solutions = [
    {
      icon: Package,
      title: "Product Descriptions",
      description: "Generate unique, SEO-optimized descriptions for entire collections in minutes.",
    },
    {
      icon: CheckCircle,
      title: "Trend Content",
      description: "Create timely lookbooks, style guides, and editorial content that captures current trends.",
    },
    {
      icon: Zap,
      title: "Brand Storytelling",
      description: "Produce consistent brand narratives across all channels while maintaining your unique voice.",
    },
    {
      icon: BookOpen,
      title: "Marketing Content",
      description: "Scale email campaigns, social posts, and promotional materials for product launches.",
    },
  ]

  const audiences = [
    {
      icon: Sparkles,
      role: "Fashion Marketers",
      description: "Create compelling campaigns and content that drive sales and build brand appeal.",
    },
    {
      icon: Users,
      role: "E-commerce Managers",
      description: "Scale product descriptions and category content for online stores efficiently.",
    },
    {
      icon: Target,
      role: "Brand Managers",
      description: "Maintain consistent brand voice across all touchpoints and marketing materials.",
    },
    {
      icon: TrendingUp,
      role: "Content Teams",
      description: "Produce editorial content, lookbooks, and trend reports at the speed of fashion.",
    },
  ]

  const jobs = [
    { task: "Product descriptions", time: "15 mins", saved: "85%" },
    { task: "Lookbooks & style guides", time: "2 hours", saved: "75%" },
    { task: "Editorial content", time: "1 hour", saved: "80%" },
    { task: "Email campaigns", time: "45 mins", saved: "70%" },
    { task: "Social media posts", time: "20 mins", saved: "85%" },
    { task: "Trend reports", time: "2 hours", saved: "70%" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Fashion & Beauty" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Industry</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Content Writing Software for Fashion &amp; Beauty
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Create trend-forward content that converts. Scale product descriptions and brand storytelling effortlessly.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Faster Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4x</div>
                <div className="text-xs text-white/60">Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">Conversions</div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Fashion & Beauty Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Stay on-trend with high-volume content production while maintaining brand consistency and quality.
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
              AI-powered content creation for fashion and beauty brands
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
            <p className="text-white/70">Time saved on common fashion & beauty content tasks</p>
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
            <p className="text-white/70">Fashion and beauty professionals</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Fashion Content?</h2>
            <p className="text-white/70 mb-6">
              Join fashion brands creating compelling content that drives sales and builds brand loyalty.
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
