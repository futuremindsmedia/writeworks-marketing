"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Zap, Users, Check, FileText, Target, ArrowRight, XCircle, Megaphone, Award, TrendingUp, Clock, Globe, Briefcase, Building2, PenTool, BarChart3 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

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

function LogoCarousel() {
  const logos = [
    { name: "Microsoft" },
    { name: "Adobe" },
    { name: "Salesforce" },
    { name: "HubSpot" },
    { name: "Atlassian" },
    { name: "Shopify" },
    { name: "Stripe" },
    { name: "Zendesk" },
  ]

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll gap-16">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[200px] h-24 px-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="text-white/80 font-semibold text-lg">
              {logo.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [heroRef, heroInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [challengesRef, challengesInView] = useInView()
  const [solutionRef, solutionInView] = useInView()
  const [jobsRef, jobsInView] = useInView()
  const [industriesRef, industriesInView] = useInView()
  const [rolesRef, rolesInView] = useInView()
  const [sizesRef, sizesInView] = useInView()
  const [featuresRef, featuresInView] = useInView()
  const [testimonialsRef, testimonialsInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  const challenges = [
    {
      title: "Slow Content Production",
      description:
        "Creating high-quality content takes weeks, not days, limiting your ability to scale and meet deadlines.",
    },
    {
      title: "Disconnected Research Process",
      description: "Teams waste hours gathering information from multiple sources, slowing down the entire workflow.",
    },
    {
      title: "Fragmented Collaboration",
      description: "Writers, editors, and stakeholders struggle with version control and unclear feedback loops.",
    },
    {
      title: "Inconsistent Content Quality",
      description: "Without standardized workflows, content quality varies across team members and projects.",
    },
  ]

  const solutions = [
    {
      title: "Accelerated Research",
      description:
        "Intelligent research tools gather and organize information instantly, cutting research time by 75%.",
      icon: Target,
    },
    {
      title: "Seamless Collaboration",
      description: "Real-time editing, commenting, and approval workflows keep your entire team aligned and productive.",
      icon: Users,
    },
    {
      title: "80+ Content Templates",
      description: "Pre-built templates for blog posts, technical docs, social media, emails, and more ensure consistency.",
      icon: Zap,
    },
    {
      title: "Complete Content Platform",
      description: "End-to-end platform for research, creation, collaboration, and optimization in one place.",
      icon: Award,
    },
  ]

  const industries = [
    {
      name: "Technology",
      description: "Technical documentation, product announcements, and developer content at scale.",
      icon: Globe,
    },
    {
      name: "E-commerce",
      description: "Product descriptions, category pages, and promotional content that converts.",
      icon: Briefcase,
    },
    {
      name: "Media & Publishing",
      description: "News articles, editorial content, and multimedia storytelling workflows.",
      icon: PenTool,
    },
    {
      name: "Enterprise",
      description: "Internal communications, reports, and cross-functional team content.",
      icon: Building2,
    },
  ]

  const roles = [
    {
      role: "Content Writers",
      description: "Write better content faster with AI-powered research and intelligent writing assistance.",
      icon: FileText,
    },
    {
      role: "Marketing Teams",
      description: "Produce more campaigns, landing pages, and promotional content without hiring more writers.",
      icon: Megaphone,
    },
    {
      role: "Product Managers",
      description: "Create product documentation, release notes, and feature announcements in minutes.",
      icon: Target,
    },
    {
      role: "Content Leaders",
      description: "Streamline workflows, maintain quality standards, and scale your content operation.",
      icon: TrendingUp,
    },
  ]

  const businessSizes = [
    {
      size: "Startups",
      description: "Move fast with limited resources. Produce professional content from day one.",
      metric: "2-10 team members",
    },
    {
      size: "SMBs",
      description: "Scale your content without scaling headcount. Compete with larger competitors.",
      metric: "10-100 team members",
    },
    {
      size: "Enterprise",
      description: "Standardize workflows across teams and regions. Maintain brand consistency at scale.",
      metric: "100+ team members",
    },
  ]

  const jobs = [
    { task: "Blog posts & articles", time: "2 hours", saved: "75%" },
    { task: "Technical documentation", time: "1.5 hours", saved: "80%" },
    { task: "Social media content", time: "30 min", saved: "85%" },
    { task: "Email campaigns", time: "1 hour", saved: "70%" },
    { task: "Product announcements", time: "2 hours", saved: "65%" },
    { task: "Case studies & whitepapers", time: "3 hours", saved: "60%" },
  ]

  return (
    <div className="min-h-screen bg-black">
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
              <Sparkles className="w-3 h-3 text-white" />
              Content Writing Platform for Modern Teams
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
              Write Better Content, Faster
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Accelerate your content workflow from research to publication. Collaborate seamlessly, optimize efficiently, and boost team productivity with the all-in-one content writing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">
                  Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="https://app.writeworks.ai/demo">Book Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Screenshot */}
      <section className="pb-12">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden border border-white/10">
              <div className="bg-black rounded-lg overflow-hidden">
                <img
                  src="/images/screenshot-202025-10-27-20at-2016.png"
                  alt="WriteWorks AI Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Horizontal */}
      <section
        ref={statsRef}
        className={`py-8 border-y border-white/10 transition-all duration-700 ${
          statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">75%</div>
              <div className="text-sm text-white/60">Time Saved</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/60">Content Pieces Created</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">5x</div>
              <div className="text-sm text-white/60">Productivity Increase</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">90%</div>
              <div className="text-sm text-white/60">Team Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <p className="text-center text-sm text-white/60 mb-8">
            Trusted by enterprise content teams at leading companies
          </p>
          <LogoCarousel />
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Content Creation Challenges</h2>
              <p className="text-white/70">Common pain points slowing down content teams</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">How WriteWorks Accelerates Content</h2>
              <p className="text-white/70">Complete platform for streamlined content creation and collaboration</p>
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

      {/* Jobs To Be Done - Time Saved Table */}
      <section
        ref={jobsRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          jobsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Jobs To Be Done</h2>
              <p className="text-white/70">Time saved on common content creation tasks</p>
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

      {/* Feature Showcase - Research & Speed */}
      <section className="py-16 md:py-20 bg-black border-y border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Accelerated Research
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Speed Up Research, Focus on Writing
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                Stop wasting hours gathering information. Our intelligent research tools aggregate, organize, and summarize content from multiple sources instantly—cutting research time by 75% so you can focus on creating great content.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Instant information gathering from multiple trusted sources",
                  "Smart summarization and organization of research materials",
                  "Automatic citation tracking and source management",
                  "Contextual research suggestions as you write",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="/platform">Learn About Research Tools</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="relative rounded-lg overflow-hidden border border-white/10 w-full">
                <img
                  src="/images/research-dashboard.jpg"
                  alt="Research dashboard showing organized content sources and summaries"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase - Collaboration */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative flex items-center">
              <div className="relative rounded-lg overflow-hidden border border-white/10 w-full">
                <img
                  src="/images/collaboration-team.jpg"
                  alt="Team collaboration interface with real-time comments and editing"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Seamless Collaboration
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Collaborate Seamlessly Across Teams
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                Keep writers, editors, and stakeholders aligned with real-time collaboration tools. No more version control nightmares or lost feedback—everyone works together in one unified workspace.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time collaborative editing with multiple team members",
                  "Threaded comments and contextual feedback on specific sections",
                  "Streamlined approval workflows with clear status tracking",
                  "Version history and change tracking for complete transparency",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="/platform/features/collaboration">Explore Collaboration Features</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase - Content Editor */}
      <section className="py-16 md:py-20 bg-black border-y border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Intelligent Writing Assistant
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Optimize Content as You Write
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                Our intelligent editor helps you write better content faster. Get real-time suggestions for clarity, tone, structure, and engagement—ensuring every piece meets your quality standards.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Smart writing suggestions for clarity and readability",
                  "Tone and style consistency checks across all content",
                  "SEO optimization recommendations built into the editor",
                  "80+ pre-built templates for every content type",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="/platform/features/content-editor">See Content Editor</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="relative rounded-lg overflow-hidden border border-white/10 w-full">
                <img
                  src="/images/content-editor-ui.jpg"
                  alt="Content editor interface with writing suggestions and optimization tools"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience - Industries */}
      <section
        ref={industriesRef}
        className={`py-12 md:py-16 border-y border-white/10 transition-all duration-700 ${
          industriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Built for Every Industry</h2>
              <p className="text-white/70">Trusted by content teams across diverse sectors</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center mb-3">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{industry.name}</h3>
                  <p className="text-xs text-white/60">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience - Roles */}
      <section
        ref={rolesRef}
        className={`py-12 md:py-16 transition-all duration-700 ${
          rolesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Built for Every Role</h2>
              <p className="text-white/70">Empower your entire content team</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center mb-3">
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{role.role}</h3>
                  <p className="text-xs text-white/60">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience - Business Sizes */}
      <section
        ref={sizesRef}
        className={`py-12 md:py-16 border-y border-white/10 transition-all duration-700 ${
          sizesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Scales With Your Business</h2>
              <p className="text-white/70">From startup to enterprise, we grow with you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessSizes.map((size, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <h3 className="font-semibold text-white mb-2 text-lg">{size.size}</h3>
                  <p className="text-sm text-white/70 mb-3">{size.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                    <Users className="w-3 h-3" />
                    {size.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className={`py-16 md:py-20 bg-black transition-all duration-700 overflow-hidden ${
          testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Thousands trust WriteWorks</h2>
            <p className="text-base text-white/70 mb-2">See how content teams are boosting productivity</p>
            <p className="text-sm text-white/60">
              Real results from teams streamlining their content workflows
            </p>
          </div>

          <div className="space-y-6">
            {/* First Row */}
            <div className="relative">
              <div className="flex gap-4 animate-scroll-testimonials">
                {[
                  {
                    heading: "Productivity Transformed",
                    name: "Sarah Chen",
                    role: "Content Director",
                    quote:
                      "Our team's productivity has increased by 75% since using WriteWorks. The research tools alone save us hours every day.",
                  },
                  {
                    heading: "Game Changer",
                    name: "Marcus Rodriguez",
                    role: "Marketing Manager",
                    quote: "Finally, a platform that streamlines our entire content workflow. Game changer for our team.",
                  },
                  {
                    heading: "Faster Time to Market",
                    name: "Emily Watson",
                    role: "CEO",
                    quote:
                      "We're publishing 3x more content without adding headcount. WriteWorks lets us move at the speed our business needs.",
                  },
                  {
                    heading: "Scales with Quality",
                    name: "David Park",
                    role: "Growth Lead",
                    quote:
                      "WriteWorks helped us scale our content production while maintaining quality. The templates ensure brand consistency across all pieces.",
                  },
                  {
                    heading: "Best Investment",
                    name: "Lisa Thompson",
                    role: "Content Strategist",
                    quote: "Best investment we've made for our content strategy this year. ROI has been incredible.",
                  },
                  {
                    heading: "Seamless Collaboration",
                    name: "James Wilson",
                    role: "VP Marketing",
                    quote:
                      "The collaboration features have eliminated version control chaos. Our entire team works together seamlessly now.",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={`row1-${testimonial.name}-${index}`}
                    className="flex-shrink-0 w-[400px] rounded-lg border border-white/10"
                  >
                    <div className="rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="url(#star-gradient)"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <h3 className="text-white font-semibold text-base mb-3">{testimonial.heading}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">{testimonial.quote}</p>

                      <div className="mt-auto pt-4 border-t border-white/10">
                        <div className="text-white font-medium text-sm">{testimonial.name}</div>
                        <div className="text-white/60 text-xs mt-1">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  {
                    heading: "Productivity Transformed",
                    name: "Sarah Chen",
                    role: "Content Director",
                    quote:
                      "Our team's productivity has increased by 75% since using WriteWorks. The research tools alone save us hours every day.",
                  },
                  {
                    heading: "Game Changer",
                    name: "Marcus Rodriguez",
                    role: "Marketing Manager",
                    quote: "Finally, a platform that streamlines our entire content workflow. Game changer for our team.",
                  },
                  {
                    heading: "Faster Time to Market",
                    name: "Emily Watson",
                    role: "CEO",
                    quote:
                      "We're publishing 3x more content without adding headcount. WriteWorks lets us move at the speed our business needs.",
                  },
                  {
                    heading: "Scales with Quality",
                    name: "David Park",
                    role: "Growth Lead",
                    quote:
                      "WriteWorks helped us scale our content production while maintaining quality. The templates ensure brand consistency across all pieces.",
                  },
                  {
                    heading: "Best Investment",
                    name: "Lisa Thompson",
                    role: "Content Strategist",
                    quote: "Best investment we've made for our content strategy this year. ROI has been incredible.",
                  },
                  {
                    heading: "Seamless Collaboration",
                    name: "James Wilson",
                    role: "VP Marketing",
                    quote:
                      "The collaboration features have eliminated version control chaos. Our entire team works together seamlessly now.",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={`row1-duplicate-${testimonial.name}-${index}`}
                    className="flex-shrink-0 w-[400px] rounded-lg border border-white/10"
                  >
                    <div className="rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="url(#star-gradient)"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <h3 className="text-white font-semibold text-base mb-3">{testimonial.heading}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">{testimonial.quote}</p>

                      <div className="mt-auto pt-4 border-t border-white/10">
                        <div className="text-white font-medium text-sm">{testimonial.name}</div>
                        <div className="text-white/60 text-xs mt-1">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row */}
            <div className="relative">
              <div className="flex gap-4 animate-scroll-testimonials-reverse">
                {[
                  {
                    heading: "Doubled Output",
                    name: "Rachel Kim",
                    role: "Head of Content",
                    quote:
                      "Our content output has doubled since implementing WriteWorks. The intelligent editor is incredibly powerful.",
                  },
                  {
                    heading: "Clear ROI",
                    name: "Tom Anderson",
                    role: "Marketing Director",
                    quote:
                      "We can finally measure the efficiency of our content process. WriteWorks gives us clarity on what's working.",
                  },
                  {
                    heading: "Transformed Workflow",
                    name: "Jennifer Lee",
                    role: "Content Manager",
                    quote:
                      "WriteWorks transformed how we approach content creation. The streamlined workflow is a game changer.",
                  },
                  {
                    heading: "Research Made Easy",
                    name: "Michael Brown",
                    role: "Content Specialist",
                    quote:
                      "The research integration is brilliant. What used to take hours now takes minutes.",
                  },
                  {
                    heading: "Better Communication",
                    name: "Amanda White",
                    role: "Brand Manager",
                    quote:
                      "Feedback loops are so much clearer now. Everyone knows exactly what needs to be done.",
                  },
                  {
                    heading: "All-in-One Platform",
                    name: "Chris Taylor",
                    role: "Content Lead",
                    quote:
                      "The collaboration features make it easy to manage our entire content team. Everything we need in one place.",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={`row2-${testimonial.name}-${index}`}
                    className="flex-shrink-0 w-[400px] rounded-lg border border-white/10"
                  >
                    <div className="rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="url(#star-gradient)"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <h3 className="text-white font-semibold text-base mb-3">{testimonial.heading}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">{testimonial.quote}</p>

                      <div className="mt-auto pt-4 border-t border-white/10">
                        <div className="text-white font-medium text-sm">{testimonial.name}</div>
                        <div className="text-white/60 text-xs mt-1">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  {
                    heading: "Doubled Output",
                    name: "Rachel Kim",
                    role: "Head of Content",
                    quote:
                      "Our content output has doubled since implementing WriteWorks. The intelligent editor is incredibly powerful.",
                  },
                  {
                    heading: "Clear ROI",
                    name: "Tom Anderson",
                    role: "Marketing Director",
                    quote:
                      "We can finally measure the efficiency of our content process. WriteWorks gives us clarity on what's working.",
                  },
                  {
                    heading: "Transformed Workflow",
                    name: "Jennifer Lee",
                    role: "Content Manager",
                    quote:
                      "WriteWorks transformed how we approach content creation. The streamlined workflow is a game changer.",
                  },
                  {
                    heading: "Research Made Easy",
                    name: "Michael Brown",
                    role: "Content Specialist",
                    quote:
                      "The research integration is brilliant. What used to take hours now takes minutes.",
                  },
                  {
                    heading: "Better Communication",
                    name: "Amanda White",
                    role: "Brand Manager",
                    quote:
                      "Feedback loops are so much clearer now. Everyone knows exactly what needs to be done.",
                  },
                  {
                    heading: "All-in-One Platform",
                    name: "Chris Taylor",
                    role: "Content Lead",
                    quote:
                      "The collaboration features make it easy to manage our entire content team. Everything we need in one place.",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={`row2-duplicate-${testimonial.name}-${index}`}
                    className="flex-shrink-0 w-[400px] rounded-lg border border-white/10"
                  >
                    <div className="rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="url(#star-gradient)"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <h3 className="text-white font-semibold text-base mb-3">{testimonial.heading}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">{testimonial.quote}</p>

                      <div className="mt-auto pt-4 border-t border-white/10">
                        <div className="text-white font-medium text-sm">{testimonial.name}</div>
                        <div className="text-white/60 text-xs mt-1">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Ready to Transform Your Content Workflow?</h2>
            <p className="text-white/70 mb-6">
              Join 10,000+ teams streamlining content creation, boosting productivity, and scaling their content operations.
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
                <a href="https://app.writeworks.ai/demo">Talk to Sales</a>
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-4">No credit card required • 75% time saved • Instant results</p>
          </div>
        </div>
      </section>
    </div>
  )
}
