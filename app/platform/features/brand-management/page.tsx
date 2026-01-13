"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Palette,
  XCircle,
  CheckCircle2,
  Shield,
  Users,
  FileText,
  TrendingUp,
  Target,
  ChevronRight,
  Home,
  Layers,
  Settings,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1, ...options },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isInView]
}

export default function BrandManagementPage() {
  const [heroRef, heroInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [challengesRef, challengesInView] = useInView()
  const [solutionRef, solutionInView] = useInView()
  const [capabilitiesRef, capabilitiesInView] = useInView()
  const [jobsRef, jobsInView] = useInView()
  const [audienceRef, audienceInView] = useInView()
  const [featuresRef, featuresInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  const challenges = [
    {
      title: "Inconsistent Brand Voice",
      description:
        "Different teams create content with varying tones and messaging that doesn't align with your brand identity.",
    },
    {
      title: "Scattered Brand Assets",
      description:
        "Logos, templates, and guidelines are spread across multiple locations, making it hard to find the right assets.",
    },
    {
      title: "No Approval Process",
      description: "Content goes live without proper review, leading to off-brand messaging and compliance issues.",
    },
    {
      title: "Scaling Challenges",
      description: "As teams grow, maintaining brand consistency becomes exponentially harder to manage.",
    },
  ]

  const solutions = [
    {
      title: "Centralized Brand Voice",
      description: "Define and store multiple brand voices with tone, style, and messaging guidelines in one place.",
      icon: Palette,
    },
    {
      title: "Asset Library",
      description: "Store and organize brand assets, images, logos, and resources in one central, searchable location.",
      icon: Layers,
    },
    {
      title: "Approval Workflows",
      description: "Set up multi-stage approval processes to ensure quality and compliance before publishing.",
      icon: Shield,
    },
    {
      title: "Brand Compliance AI",
      description: "Automatically check content against brand guidelines and get real-time suggestions.",
      icon: CheckCircle2,
    },
  ]

  const capabilities = [
    {
      icon: Palette,
      title: "Brand Voice Library",
      description: "Define and store multiple brand voices with tone, style, and messaging guidelines.",
    },
    {
      icon: FileText,
      title: "Content Templates",
      description: "Create reusable templates that enforce brand standards and speed up content creation.",
    },
    {
      icon: Shield,
      title: "Approval Workflows",
      description: "Set up multi-stage approval processes to ensure quality and compliance.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless collaboration with role-based permissions and access controls.",
    },
    {
      icon: CheckCircle2,
      title: "Brand Compliance",
      description: "Automatically check content against brand guidelines before publishing.",
    },
    {
      icon: Layers,
      title: "Asset Library",
      description: "Store and organize brand assets, images, and resources in one central location.",
    },
  ]

  const audiences = [
    {
      role: "Brand Managers",
      description: "Maintain consistent brand voice across all channels and teams.",
      icon: Palette,
    },
    {
      role: "Marketing Directors",
      description: "Scale content production while ensuring brand compliance.",
      icon: Target,
    },
    {
      role: "Content Teams",
      description: "Access brand guidelines and assets instantly for faster creation.",
      icon: FileText,
    },
    {
      role: "Enterprise Leaders",
      description: "Manage multiple brands with unified governance and control.",
      icon: Settings,
    },
  ]

  const jobs = [
    { task: "Brand guideline updates", time: "1 hour", saved: "80%" },
    { task: "Asset organization", time: "30 min", saved: "75%" },
    { task: "Content approval reviews", time: "2 hours", saved: "70%" },
    { task: "Brand voice documentation", time: "1 hour", saved: "85%" },
    { task: "Template creation", time: "45 min", saved: "65%" },
    { task: "Compliance checking", time: "15 min", saved: "90%" },
  ]

  const includedFeatures = [
    "Unlimited brand voice profiles",
    "Custom content templates",
    "Multi-stage approval workflows",
    "Role-based access control",
    "Brand compliance checking",
    "Centralized asset library",
    "Version control and history",
    "Team collaboration tools",
    "Custom brand guidelines",
    "Style guide enforcement",
    "Multi-brand support",
    "API access for integrations",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-3 md:px-4 pt-4">
        <nav className="flex items-center justify-center gap-2 text-sm text-white/60">
          <Link href="/" className="hover:text-white transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/platform" className="hover:text-white transition-colors">
            Platform
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/platform/features" className="hover:text-white transition-colors">
            Features
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Brand Management</span>
        </nav>
      </div>

      {/* Hero Section - Compact */}
      <section
        ref={heroRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4">
              <Palette className="w-3 h-3 text-white" />
              Brand Management
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Brand Management Software: Consistency at Scale
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Centralize your brand voice, guidelines, and assets in one place. Ensure every piece of content maintains
              consistency and aligns with your brand identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="https://app.writeworks.ai/demo">Watch Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Time Saved Stats - Horizontal Bar */}
      <section
        ref={statsRef}
        className={`py-8 border-y border-white/10 transition-all duration-700 ${
          statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">80%</div>
              <div className="text-sm text-white/60">Time Saved</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-white/60">Brand Consistency</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">5x</div>
              <div className="text-sm text-white/60">Faster Approvals</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">∞</div>
              <div className="text-sm text-white/60">Brand Profiles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section
        ref={challengesRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          challengesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The Brand Management Challenge</h2>
              <p className="text-white/70">Why maintaining brand consistency is harder than ever</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{challenge.title}</h3>
                    <p className="text-sm text-white/60">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        ref={solutionRef}
        className={`py-12 md:py-16 border-y border-white/10 transition-all duration-700 ${
          solutionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">How WriteWorks Solves It</h2>
              <p className="text-white/70">AI-powered brand management for enterprise teams</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{solution.title}</h3>
                    <p className="text-sm text-white/60">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section - Original Content Preserved */}
      <section
        ref={capabilitiesRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          capabilitiesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Key Capabilities</h2>
              <p className="text-white/70">Everything you need for enterprise brand management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <capability.icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-sm text-white/60">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs To Be Done - Time Saved Table */}
      <section
        ref={jobsRef}
        className={`py-12 md:py-16 border-y border-white/10 transition-all duration-700 ${
          jobsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Jobs To Be Done</h2>
              <p className="text-white/70">Time saved on common brand management tasks</p>
            </div>
            <div className="rounded-lg border border-white/10 overflow-hidden">
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
                      <TrendingUp className="w-3 h-3" />
                      {job.saved}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section
        ref={audienceRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          audienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Built For</h2>
              <p className="text-white/70">Brand professionals at every level</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {audiences.map((audience, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-3">
                    <audience.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{audience.role}</h3>
                  <p className="text-xs text-white/60">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Original Content Preserved */}
      <section
        ref={featuresRef}
        className={`py-12 md:py-16 border-y border-white/10 transition-all duration-700 ${
          featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">What's Included</h2>
              <p className="text-white/70">Everything you need for brand success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Maintain Brand Consistency at Scale</h2>
            <p className="text-white/70 mb-6">
              Centralize your brand management and ensure every piece of content aligns with your identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-4">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  )
}
