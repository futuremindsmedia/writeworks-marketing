"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Zap, Users, Check, FileText, Target, Eye, ArrowRight, XCircle, Megaphone, Award, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { AnimatedChat } from "@/components/animated-chat"

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
  const [audienceRef, audienceInView] = useInView()
  const [testimonialsRef, testimonialsInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  const challenges = [
    {
      title: "Content Doesn't Reach AI Platforms",
      description:
        "Your brand isn't being cited by ChatGPT, Claude, or Perplexity when users search for solutions in your space.",
    },
    {
      title: "Slow Content Production",
      description: "Creating high-quality content takes weeks, not days, limiting your ability to scale output.",
    },
    {
      title: "No Visibility into Performance",
      description: "You can't predict how content will perform before publishing it across AI platforms.",
    },
    {
      title: "Disconnected Tools & Workflows",
      description: "Teams struggle with fragmented tools, making collaboration and consistency nearly impossible.",
    },
  ]

  const solutions = [
    {
      title: "LLM-Optimized Content",
      description:
        "Human-built frameworks ensure your content gets cited by ChatGPT, Claude, and Perplexity, driving 300% more visibility.",
      icon: Target,
    },
    {
      title: "Real-Time Visibility Scoring",
      description: "LLM Visibility Scoring (0-100) predicts content performance across AI platforms before you publish.",
      icon: Eye,
    },
    {
      title: "80+ Content Writing Agents",
      description: "Specialized agents generate blog posts, technical docs, social media, emails, and more in hours, not weeks.",
      icon: Zap,
    },
    {
      title: "Complete Content Platform",
      description: "End-to-end platform for creation, collaboration, optimization, and performance tracking in one place.",
      icon: Award,
    },
  ]

  const audiences = [
    {
      role: "Content Teams",
      description: "Scale content production 10X while maintaining quality and brand consistency.",
      icon: FileText,
    },
    {
      role: "Marketing Teams",
      description: "Drive measurable LLM visibility and capture AI-driven demand for your brand.",
      icon: Megaphone,
    },
    {
      role: "Enterprise Teams",
      description: "Streamline workflows, collaboration, and performance tracking across departments.",
      icon: Users,
    },
    {
      role: "Growth Leaders",
      description: "Demonstrate clear ROI with analytics tracking AI-driven traffic and engagement.",
      icon: TrendingUp,
    },
  ]

  const jobs = [
    { task: "Blog posts & articles", time: "3 hours", saved: "85%" },
    { task: "Technical documentation", time: "2 hours", saved: "80%" },
    { task: "Social media content", time: "1 hour", saved: "90%" },
    { task: "Email campaigns", time: "2 hours", saved: "75%" },
    { task: "Product announcements", time: "3 hours", saved: "70%" },
    { task: "Case studies & whitepapers", time: "4 hours", saved: "65%" },
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
              Intelligent Content Writing Platform
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
              AI-Powered Content Platform Built for Performance
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Simplify content writing, streamline collaboration, and drive performance across ChatGPT, Claude, Perplexity, and all major AI platforms. Powered by human-built frameworks and 80+ specialized content agents.
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
              <div className="text-2xl md:text-3xl font-bold text-white">300%</div>
              <div className="text-sm text-white/60">Avg Visibility Increase</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/60">Enterprise Teams</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">80+</div>
              <div className="text-sm text-white/60">Content Agents</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">90</div>
              <div className="text-sm text-white/60">Days to Results</div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">The Content Performance Challenge</h2>
              <p className="text-white/70">Why traditional content strategies fail in the AI era</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">How WriteWorks Solves It</h2>
              <p className="text-white/70">Complete platform for high-performance content at scale</p>
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

      {/* Feature Showcase with AnimatedChat - Human-Built Frameworks */}
      <section className="py-16 md:py-20 bg-black border-y border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Human-Built LLM Frameworks
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Proven Frameworks Drive 300% More AI Visibility
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                WriteWorks delivers human-built frameworks based on analyzing AI platform behavior patterns—creating
                authoritative content that LLMs trust and recommend when users search for solutions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Frameworks built on actual LLM behavior analysis, eliminating guesswork",
                  "Authority signals increase brand mentions and recommendations by 300%",
                  "Content structures optimized for AI platform discovery and trust",
                  "Proven methodology drives measurable traffic and qualified leads from AI search",
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
                <a href="/platform">Increase Brand Visibility</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <AnimatedChat
                messages={[
                  { role: "user", content: "Why doesn't the brand appear in ChatGPT responses?", delay: 500 },
                  {
                    role: "assistant",
                    content:
                      "The content lacks authority signals that LLMs recognize. WriteWorks provides proven frameworks that AI platforms trust and recommend to enterprise customers.",
                    delay: 800,
                  },
                  { role: "user", content: "What makes content trustworthy to AI platforms?", delay: 1000 },
                  {
                    role: "assistant",
                    content:
                      "The platform structures content with authority signals, data, and patterns that ChatGPT, Claude, and Perplexity recognize as credible—based on analyzing thousands of AI platform responses.",
                    delay: 1200,
                  },
                ]}
                className="w-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase with AnimatedChat - Content Writing Agents */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative flex items-center">
              <AnimatedChat
                messages={[
                  { role: "user", content: "The team needs to scale content while maintaining quality", delay: 500 },
                  {
                    role: "assistant",
                    content:
                      "WriteWorks provides Content Writing agents that create high-performance content at enterprise scale. Each agent understands LLM behavior patterns for specific content types.",
                    delay: 800,
                  },
                  { role: "user", content: "Will the content actually perform on AI platforms?", delay: 1000 },
                  {
                    role: "assistant",
                    content:
                      "Yes. The Content Writing agents structure content with authority signals and patterns that ChatGPT, Claude, and Perplexity recognize. Teams see real-time visibility scores before publication.",
                    delay: 1200,
                  },
                ]}
                className="w-full min-h-[400px]"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                80+ Content Writing Agents
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Scale Content Production 10X with AI Agents
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                WriteWorks enables 10X content production without proportional resource investment. The platform
                provides 80+ Content Writing agents trained on LLM behavior patterns—ensuring every piece performs
                across ChatGPT, Claude, and Perplexity.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Blog Writer: Authority content drives organic AI traffic and qualified leads",
                  "Technical Writer: Expert content establishes trust with AI platforms",
                  "Social Media Creator: Platform-optimized posts increase engagement rates",
                  "Email Copywriter: Campaigns convert prospects and drive measurable conversions",
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
                <a href="/platform/features/ai-agents">Explore Content Writing Agents</a>
              </Button>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Built For</h2>
              <p className="text-white/70">Teams who need to create high-performance content at scale</p>
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

      {/* Real-Time LLM Visibility Scoring Feature */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4">
                Real-Time LLM Visibility Scoring
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Real-Time Scoring Predicts AI Platform Performance
              </h2>
              <p className="text-base text-white/70 mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
                The LLM Visibility Scoring system eliminates guesswork. Real-time scoring (0-100) shows exactly how
                content will perform across ChatGPT, Claude, and Perplexity—enabling teams to optimize for maximum
                business impact before publishing.
              </p>
              <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90" asChild>
                <a href="/platform/features/content-editor">Start Optimizing Content</a>
              </Button>
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
            <p className="text-base text-white/70 mb-2">See how marketing teams are driving LLM visibility</p>
            <p className="text-sm text-white/60">
              Real results from content teams optimizing for ChatGPT, Claude, Perplexity, and AI Overviews
            </p>
          </div>

          <div className="space-y-6">
            {/* First Row */}
            <div className="relative">
              <div className="flex gap-4 animate-scroll-testimonials">
                {[
                  {
                    heading: "300% Increase in Citations",
                    name: "Sarah Chen",
                    role: "Content Director",
                    quote:
                      "We've seen a 300% increase in citations from ChatGPT and Perplexity since using WriteWorks. The LLM frameworks actually work.",
                  },
                  {
                    heading: "Game Changer",
                    name: "Marcus Rodriguez",
                    role: "Marketing Manager",
                    quote: "Finally, a platform that understands LLM optimization. Game changer for our team.",
                  },
                  {
                    heading: "Data-Driven Results",
                    name: "Emily Watson",
                    role: "CEO",
                    quote:
                      "The human-built frameworks make all the difference. We're not guessing anymore, we're optimizing based on what actually gets cited by AI models.",
                  },
                  {
                    heading: "Scales with Quality",
                    name: "David Park",
                    role: "Growth Lead",
                    quote:
                      "WriteWorks helped us scale our content production while maintaining quality. The Content Writing agents understand our brand voice perfectly.",
                  },
                  {
                    heading: "Best Investment",
                    name: "Lisa Thompson",
                    role: "Content Strategist",
                    quote: "Best investment we've made for our content strategy this year. ROI has been incredible.",
                  },
                  {
                    heading: "Consistent Citations",
                    name: "James Wilson",
                    role: "VP Marketing",
                    quote:
                      "The research-backed approach to LLM optimization is what sets WriteWorks apart. We're seeing consistent citations across all platforms.",
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
                    heading: "300% Increase in Citations",
                    name: "Sarah Chen",
                    role: "Content Director",
                    quote:
                      "We've seen a 300% increase in citations from ChatGPT and Perplexity since using WriteWorks. The LLM frameworks actually work.",
                  },
                  {
                    heading: "Game Changer",
                    name: "Marcus Rodriguez",
                    role: "Marketing Manager",
                    quote: "Finally, a platform that understands LLM optimization. Game changer for our team.",
                  },
                  {
                    heading: "Data-Driven Results",
                    name: "Emily Watson",
                    role: "CEO",
                    quote:
                      "The human-built frameworks make all the difference. We're not guessing anymore, we're optimizing based on what actually gets cited by AI models.",
                  },
                  {
                    heading: "Scales with Quality",
                    name: "David Park",
                    role: "Growth Lead",
                    quote:
                      "WriteWorks helped us scale our content production while maintaining quality. The AI agents understand our brand voice perfectly.",
                  },
                  {
                    heading: "Best Investment",
                    name: "Lisa Thompson",
                    role: "Content Strategist",
                    quote: "Best investment we've made for our content strategy this year. ROI has been incredible.",
                  },
                  {
                    heading: "Consistent Citations",
                    name: "James Wilson",
                    role: "VP Marketing",
                    quote:
                      "The research-backed approach to LLM optimization is what sets WriteWorks apart. We're seeing consistent citations across all platforms.",
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
                    heading: "Doubled Productivity",
                    name: "Rachel Kim",
                    role: "Head of Content",
                    quote:
                      "Our team productivity has doubled since implementing WriteWorks. The Content Writing agents are incredibly powerful.",
                  },
                  {
                    heading: "Actionable Insights",
                    name: "Tom Anderson",
                    role: "Marketing Director",
                    quote:
                      "The data-informed optimization tools give us insights we never had before. We know exactly what content will perform.",
                  },
                  {
                    heading: "Transformed Our Approach",
                    name: "Jennifer Lee",
                    role: "Content Manager",
                    quote:
                      "WriteWorks transformed how we approach content creation. The LLM visibility scores are a game changer.",
                  },
                  {
                    heading: "Ranking in AI Platforms",
                    name: "Michael Brown",
                    role: "SEO Specialist",
                    quote:
                      "The keyword research integration is brilliant. We're ranking in AI platforms we never thought possible.",
                  },
                  {
                    heading: "Consistent Brand Mentions",
                    name: "Amanda White",
                    role: "Brand Manager",
                    quote:
                      "Finally seeing our brand mentioned consistently across ChatGPT and Claude. The frameworks really work.",
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
                    heading: "Doubled Productivity",
                    name: "Rachel Kim",
                    role: "Head of Content",
                    quote:
                      "Our team productivity has doubled since implementing WriteWorks. The specialized AI agents are incredibly powerful.",
                  },
                  {
                    heading: "Actionable Insights",
                    name: "Tom Anderson",
                    role: "Marketing Director",
                    quote:
                      "The data-informed optimization tools give us insights we never had before. We know exactly what content will perform.",
                  },
                  {
                    heading: "Transformed Our Approach",
                    name: "Jennifer Lee",
                    role: "Content Manager",
                    quote:
                      "WriteWorks transformed how we approach content creation. The LLM visibility scores are a game changer.",
                  },
                  {
                    heading: "Ranking in AI Platforms",
                    name: "Michael Brown",
                    role: "SEO Specialist",
                    quote:
                      "The keyword research integration is brilliant. We're ranking in AI platforms we never thought possible.",
                  },
                  {
                    heading: "Consistent Brand Mentions",
                    name: "Amanda White",
                    role: "Brand Manager",
                    quote:
                      "Finally seeing our brand mentioned consistently across ChatGPT and Claude. The frameworks really work.",
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Ready to Transform Your Content Performance?</h2>
            <p className="text-white/70 mb-6">
              Join 10,000+ teams driving 300% more visibility across ChatGPT, Claude, Perplexity, and all major AI platforms.
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
            <p className="text-xs text-white/50 mt-4">No credit card required • 300% avg visibility increase • 90 days to results</p>
          </div>
        </div>
      </section>
    </div>
  )
}
