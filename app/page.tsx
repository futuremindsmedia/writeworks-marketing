"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Zap, Users, Check, FileText, Target, Eye } from "lucide-react"
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
    { name: "ChatGPT", image: "/images/logos/chatgpt.png" },
    { name: "Perplexity", image: "/images/logos/perplexity.png" },
    { name: "Claude", image: "/images/logos/claude.png" },
    { name: "Google AI Overviews", image: "/images/logos/google-ai.png" },
    { name: "Copilot", image: "/images/logos/copilot.png" },
    { name: "Grok", image: "/images/logos/grok.png" },
    { name: "Meta AI", image: "/images/logos/meta-ai.png" },
    { name: "DeepSeek", image: "/images/logos/deepseek.png" },
  ]

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll gap-16">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[200px] h-24 px-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div
              className={`h-12 w-full flex items-center justify-center ${logo.name === "Claude" ? "overflow-hidden" : ""}`}
            >
              <img
                src={logo.image || "/placeholder.svg"}
                alt={logo.name}
                className={`h-full w-auto max-w-[160px] object-contain filter brightness-0 invert ${
                  logo.name === "Claude" ? "scale-110 translate-y-1" : ""
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [heroRef, heroInView] = useInView()
  const [feature1Ref, feature1InView] = useInView()
  const [feature2Ref, feature2InView] = useInView()
  const [feature3Ref, feature3InView] = useInView()
  const [feature4Ref, feature4InView] = useInView()
  const [testimonialsRef, testimonialsInView] = useInView()

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`container mx-auto px-3 md:px-4 pt-12 pb-12 md:pt-16 md:pb-16 transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-6">
            <Sparkles className="w-3 h-3 text-white" />
            Enterprise AI Content Platform
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance leading-tight">
            Enterprise AI Platform for High-Performance Content
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            The enterprise platform combines human-built frameworks with 80+ Content Writing agents to scale content
            production, maintain brand consistency, and optimize performance across ChatGPT, Claude, Perplexity, and all
            major AI platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-8"
              asChild
            >
              <a href="https://app.writeworks.ai/sign-up">Free Trial</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-white" />
              300% avg visibility increase
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
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
      </section>

      {/* Logo Carousel */}
      <section className="py-12 border-y border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <p className="text-center text-sm text-white/60 mb-8">
            WriteWorks drives enterprise growth across all major AI platforms
          </p>
          <LogoCarousel />
        </div>
      </section>

      {/* Stats Callout */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">300%</span>
              </div>
              <p className="text-xl md:text-2xl text-white font-semibold mb-3">
                Average Increase in AI Platform Performance Within 90 Days
              </p>
              <p className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
                Enterprise marketing teams using WriteWorks achieve 3X higher visibility across ChatGPT, Claude,
                Perplexity, and other AI platforms—driving measurable traffic, qualified leads, and performance growth
                from AI-driven search.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm text-white/60">Enterprise Marketing Teams</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">80+</div>
                <div className="text-sm text-white/60">Content Writing Agents</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">90</div>
                <div className="text-sm text-white/60">Days to Measurable Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Human-Built LLM Frameworks */}
      <section
        id="frameworks"
        ref={feature1Ref}
        className={`py-16 md:py-20 bg-black transition-all duration-700 ${
          feature1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Human-Built LLM Frameworks
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Proven Frameworks Drive Growth Across AI Platforms
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                WriteWorks delivers human-built frameworks based on analyzing AI platform behavior patterns—creating
                authoritative content that LLMs trust and recommend when enterprise customers search for solutions.
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

      {/* Feature 2: Data-Connected Intelligence */}
      <section
        ref={feature2Ref}
        className={`py-16 md:py-20 bg-black border-y border-white/10 transition-all duration-700 ${
          feature2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
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

            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-white/10">
                <div className="bg-black rounded-lg overflow-hidden">
                  <img
                    src="/images/screenshot-202025-10-27-20at-2016.png"
                    alt="Content Editor with LLM Visibility Score"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: 80+ Specialized AI Agents */}
      <section
        ref={feature3Ref}
        className={`py-16 md:py-20 bg-black transition-all duration-700 ${
          feature3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                80+ Content Writing Agents
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Content Writing Agents Scale Enterprise Production
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
            <div className="relative flex items-center">
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
          </div>
        </div>
      </section>

      {/* Feature 4: Streamlined Content Workflow */}
      <section
        id="workflow"
        ref={feature4Ref}
        className={`py-16 md:py-20 bg-black border-y border-white/10 transition-all duration-700 ${
          feature4InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative flex items-center">
              <AnimatedChat
                messages={[
                  { role: "user", content: "How does the team track AI platform performance?", delay: 500 },
                  {
                    role: "assistant",
                    content:
                      "WriteWorks tracks brand visibility and mentions across ChatGPT, Claude, Perplexity, and all major AI platforms. Teams see exactly which content drives business results.",
                    delay: 800,
                  },
                  { role: "user", content: "Can leadership measure ROI from AI platforms?", delay: 1000 },
                  {
                    role: "assistant",
                    content:
                      "Absolutely. The platform tracks visibility scores, monitors performance metrics, and measures traffic and engagement from AI platform referrals. Leadership sees what works and optimizes for growth.",
                    delay: 1200,
                  },
                ]}
                className="w-full min-h-[400px]"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Complete AI Optimization Platform
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Complete Platform Delivers Measurable ROI and Growth
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                WriteWorks eliminates tool sprawl. The platform provides AI-optimized creation, real-time visibility
                scoring, performance tracking, and business impact measurement. Teams capture AI-driven demand and
                demonstrate clear ROI to leadership.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Performance tracking monitors visibility and mentions across all AI platforms",
                  "Analytics dashboard measures AI-driven traffic, leads, and engagement",
                  "Competitive benchmarking reveals market positioning opportunities",
                  "Team collaboration tools streamline enterprise content workflows",
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
                <a href="/pricing">Get Started</a>
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

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-black border-y border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Complete Platform Drives Enterprise Growth
            </h2>
            <p className="text-base text-white/70">
              WriteWorks captures AI-driven demand and delivers measurable results from LLMs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-6 h-6 text-white" />,
                title: "Human-Built Frameworks",
                description:
                  "Proven frameworks based on AI platform behavior analysis drive brand visibility and performance growth",
              },
              {
                icon: <Eye className="w-6 h-6 text-white" />,
                title: "Real-Time Visibility Scoring",
                description: "LLM visibility scoring (0-100) predicts performance potential before publication",
              },
              {
                icon: <FileText className="w-6 h-6 text-white" />,
                title: "Performance Tracking",
                description:
                  "Analytics dashboard monitors visibility across AI platforms and measures performance metrics",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "80+ Specialized Agents",
                description:
                  "Content Writing agents trained on LLM behavior patterns scale enterprise content production",
              },
              {
                icon: <Zap className="w-6 h-6 text-white" />,
                title: "Scale Without Compromise",
                description: "The platform enables 10X content production without proportional resource investment",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Complete Platform",
                description:
                  "End-to-end solution delivers creation, optimization, performance tracking, and business impact measurement",
              },
            ].map((benefit) => (
              <Card
                key={benefit.title}
                className="bg-white/5 backdrop-blur border-white/10 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-3 md:px-4 py-16">
        <Card className="bg-white/5 border-white/20 p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Transform AI Invisibility Into Performance Growth
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            10,000+ enterprise marketing teams use proven frameworks to drive visibility across ChatGPT, Claude,
            Perplexity, and all major AI platforms. The platform delivers 300% average visibility increase within 90
            days.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10"
            asChild
          >
            <a href="https://app.writeworks.ai/sign-up">Start Free</a>
          </Button>
          <p className="text-sm text-white/60 mt-4">
            No credit card required • 300% avg visibility increase • 90 days to measurable results
          </p>
        </Card>
      </section>
    </div>
  )
}
