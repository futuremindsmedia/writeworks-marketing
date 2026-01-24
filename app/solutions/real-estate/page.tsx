import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Home, MapPin, TrendingUp, Calendar, CheckCircle, Zap, BookOpen, Target, Users } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Content Writing Software for Real Estate | WriteWorks",
  description: "Scale real estate marketing with AI-powered content creation. Generate property listings, market reports, and marketing materials that attract buyers and close deals faster.",
}

export default function RealEstatePage() {
  const challenges = [
    {
      icon: Home,
      title: "Listing Content Volume",
      description: "Creating unique, compelling descriptions for every property listing takes hours away from client work.",
    },
    {
      icon: MapPin,
      title: "Market Report Production",
      description: "Generating detailed neighborhood and market reports for clients requires extensive research and writing.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Materials",
      description: "Producing brochures, emails, and social content for multiple properties simultaneously is overwhelming.",
    },
  ]

  const solutions = [
    {
      icon: Home,
      title: "Compelling Listings",
      description: "Generate unique, SEO-optimized property descriptions that highlight features and attract buyers.",
    },
    {
      icon: CheckCircle,
      title: "Market Reports",
      description: "Create detailed neighborhood guides and market analysis reports in minutes, not hours.",
    },
    {
      icon: Zap,
      title: "Marketing at Scale",
      description: "Produce brochures, email campaigns, and social media content for multiple properties simultaneously.",
    },
    {
      icon: BookOpen,
      title: "Client Communications",
      description: "Generate personalized client updates, newsletters, and follow-up materials that build relationships.",
    },
  ]

  const audiences = [
    {
      icon: Home,
      role: "Real Estate Agents",
      description: "Create compelling listings and marketing materials faster to close more deals.",
    },
    {
      icon: Users,
      role: "Brokerage Managers",
      description: "Equip your team with tools to scale content production and increase listings.",
    },
    {
      icon: Target,
      role: "Property Managers",
      description: "Generate rental listings and tenant communications efficiently at scale.",
    },
    {
      icon: TrendingUp,
      role: "Real Estate Marketers",
      description: "Create campaigns and content that attract buyers and generate qualified leads.",
    },
  ]

  const jobs = [
    { task: "Property listings", time: "15 mins", saved: "85%" },
    { task: "Neighborhood guides", time: "1 hour", saved: "75%" },
    { task: "Market reports", time: "2 hours", saved: "70%" },
    { task: "Property brochures", time: "30 mins", saved: "80%" },
    { task: "Email campaigns", time: "45 mins", saved: "70%" },
    { task: "Social media posts", time: "20 mins", saved: "85%" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Real Estate" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Industry</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Content Writing Software for Real Estate
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Create compelling property listings and marketing materials that drive inquiries. Scale your content without sacrificing quality.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Faster Listings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">More Inquiries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5x</div>
                <div className="text-xs text-white/60">Property Views</div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Real Estate Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Create unique, compelling content for every property while managing multiple clients and listings.
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
              AI-powered content creation for real estate professionals
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
            <p className="text-white/70">Time saved on common real estate content tasks</p>
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
            <p className="text-white/70">Real estate professionals and teams</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Real Estate Marketing?</h2>
            <p className="text-white/70 mb-6">
              Join real estate professionals creating compelling content that attracts buyers and closes deals.
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
