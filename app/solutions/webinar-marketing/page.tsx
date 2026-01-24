"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Presentation, Zap, XCircle, Users, TrendingUp, Award, ChevronRight, Home, Calendar, UserCheck, MonitorPlay } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export const metadata = {
  title: "Webinar Marketing Script Platform | WriteWorks AI",
  description: "Write compelling webinar scripts and promotional content. AI-powered webinar marketing that drives registrations.",
}

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

export default function WebinarMarketingPage() {
  const [heroRef, heroInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [challengesRef, challengesInView] = useInView()
  const [solutionRef, solutionInView] = useInView()
  const [audienceRef, audienceInView] = useInView()
  const [ctaRef, ctaInView] = useInView()
  const [jobsRef, jobsInView] = useInView()

  const challenges = [
    {
      title: "Low Registration Rates",
      description:
        "Webinar promotional content fails to drive signups and attendance.",
    },
    {
      title: "Engagement Drop-Off",
      description: "Webinar scripts don't maintain audience engagement throughout.",
    },
    {
      title: "Time-Intensive Scripts",
      description: "Writing compelling webinar content takes days of preparation.",
    },
    {
      title: "Poor Conversion",
      description: "Webinars don't effectively convert attendees to customers.",
    },
  ]

  const solutions = [
    {
      title: "Engaging Scripts",
      description:
        "Create webinar scripts that maintain engagement from start to finish.",
      icon: Presentation,
    },
    {
      title: "Promotional Content",
      description: "Write landing pages and emails that drive registrations.",
      icon: UserCheck,
    },
    {
      title: "Rapid Production",
      description: "Generate webinar content 70% faster with AI assistance.",
      icon: Zap,
    },
    {
      title: "Conversion-Focused",
      description: "Scripts designed to guide attendees to take action.",
      icon: MonitorPlay,
    },
  ]

  const audiences = [
    {
      role: "Webinar Hosts",
      description: "Create engaging scripts and presentations faster.",
      icon: Presentation,
    },
    {
      role: "Marketing Teams",
      description: "Drive registrations with better promotional content.",
      icon: Users,
    },
    {
      role: "Sales Teams",
      description: "Convert more attendees to customers with better scripts.",
      icon: TrendingUp,
    },
    {
      role: "Training Professionals",
      description: "Deliver more impactful educational webinars.",
      icon: Award,
    },
  ]

  const jobs = [
    { task: "Webinar scripts (60 mins)", time: "1.5 hours", saved: "70%" },
    { task: "Registration landing pages", time: "45 mins", saved: "75%" },
    { task: "Promotional email sequences", time: "40 mins", saved: "70%" },
    { task: "Webinar slide outlines", time: "30 mins", saved: "65%" },
    { task: "Q&A preparation", time: "25 mins", saved: "70%" },
    { task: "Follow-up content", time: "35 mins", saved: "75%" },
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
          <span className="text-white">Webinar Marketing</span>
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
              <Presentation className="w-3 h-3 text-white" />
              For Webinar Marketers
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              AI for Webinar Marketing: Scripts That Drive Registrations
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Write webinar scripts and promotional content that drives registrations and engagement.
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
              <div className="text-2xl md:text-3xl font-bold text-white">70%</div>
              <div className="text-sm text-white/60">Faster Scripts</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">3x</div>
              <div className="text-sm text-white/60">Registrations</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">60%</div>
              <div className="text-sm text-white/60">Time Saved</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">4x</div>
              <div className="text-sm text-white/60">Attendance</div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The Webinar Marketing Challenge</h2>
              <p className="text-white/70">Why webinars underperform</p>
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
              <p className="text-white/70">AI-powered webinar content that converts</p>
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
              <p className="text-white/70">Time saved on webinar marketing tasks</p>
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
              <p className="text-white/70">Webinar professionals driving results</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Your Webinar Marketing?</h2>
            <p className="text-white/70 mb-6">
              Join webinar teams creating engaging scripts and content with AI.
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
