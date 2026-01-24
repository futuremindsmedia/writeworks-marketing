"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Share2, Zap, XCircle, Users, TrendingUp, Award, ChevronRight, Home, Calendar, MessageSquare, Target } from "lucide-react"
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

export default function SocialMediaPage() {
  const [heroRef, heroInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [challengesRef, challengesInView] = useInView()
  const [solutionRef, solutionInView] = useInView()
  const [audienceRef, audienceInView] = useInView()
  const [ctaRef, ctaInView] = useInView()
  const [jobsRef, jobsInView] = useInView()

  const challenges = [
    {
      title: "Constant Content Demands",
      description:
        "Social platforms require daily posting across multiple channels to maintain engagement.",
    },
    {
      title: "Inconsistent Brand Voice",
      description: "Different team members create posts that don't align with your brand identity.",
    },
    {
      title: "Low Engagement Rates",
      description: "Content doesn't resonate with audiences, leading to poor reach and interaction.",
    },
    {
      title: "Time-Consuming Creation",
      description: "Crafting compelling social posts takes hours away from strategic work.",
    },
  ]

  const solutions = [
    {
      title: "Multi-Platform Content",
      description:
        "Generate engaging posts optimized for LinkedIn, Twitter, Instagram, Facebook, and more.",
      icon: Share2,
    },
    {
      title: "Consistent Brand Voice",
      description: "Maintain your unique tone and messaging across all social channels.",
      icon: MessageSquare,
    },
    {
      title: "Engagement-Optimized",
      description: "Create content designed to drive likes, comments, shares, and clicks.",
      icon: Target,
    },
    {
      title: "Rapid Content Creation",
      description: "Generate weeks of social content in hours with AI-powered copywriting.",
      icon: Zap,
    },
  ]

  const audiences = [
    {
      role: "Social Media Managers",
      description: "Scale content production across multiple platforms effortlessly.",
      icon: Share2,
    },
    {
      role: "Content Creators",
      description: "Create more engaging content faster without sacrificing quality.",
      icon: Users,
    },
    {
      role: "Marketing Teams",
      description: "Drive social engagement and brand awareness at scale.",
      icon: TrendingUp,
    },
    {
      role: "Brand Managers",
      description: "Maintain consistent voice across all social channels.",
      icon: Award,
    },
  ]

  const jobs = [
    { task: "LinkedIn posts & threads", time: "20 mins", saved: "80%" },
    { task: "Twitter/X content", time: "15 mins", saved: "85%" },
    { task: "Instagram captions", time: "15 mins", saved: "75%" },
    { task: "Facebook posts", time: "20 mins", saved: "70%" },
    { task: "Social media calendars", time: "1 hour", saved: "80%" },
    { task: "Content repurposing", time: "30 mins", saved: "85%" },
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
          <Link href="/solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Social Media</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4">
              <Share2 className="w-3 h-3 text-white" />
              For Social Media Teams
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Social Media Content Writing &amp; Management Software
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Generate high-performing social content for LinkedIn, Twitter, Instagram, and more with AI.
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
                  <Calendar className="mr-2 w-4 h-4 inline" /> Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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
              <div className="text-sm text-white/60">Faster Posts</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">3x</div>
              <div className="text-sm text-white/60">Engagement</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">65%</div>
              <div className="text-sm text-white/60">Time Saved</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">5x</div>
              <div className="text-sm text-white/60">Output</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section
        ref={challengesRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          challengesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The Social Media Challenge</h2>
              <p className="text-white/70">Why social content creation is so demanding</p>
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

      {/* Solutions */}
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
              <p className="text-white/70">AI-powered social media content that engages</p>
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

      {/* Jobs To Be Done */}
      <section
        ref={jobsRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          jobsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Jobs To Be Done</h2>
              <p className="text-white/70">Time saved on social media tasks</p>
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
        className={`py-12 md:py-16 border-y border-white/10 transition-all duration-700 ${
          audienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Built For</h2>
              <p className="text-white/70">Social media professionals driving engagement</p>
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

      {/* CTA */}
      <section
        ref={ctaRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Scale Your Social Media?</h2>
            <p className="text-white/70 mb-6">
              Join teams creating engaging social content across all platforms with AI.
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
    

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Social Media?</h2>
            <p className="text-white/70 mb-6">
              Join social media teams creating viral content that drives engagement and growth.
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
