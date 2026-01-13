"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Sparkles, Target, FileText, Users, Eye, BarChart3, Shield, Workflow } from "lucide-react"
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

export default function PlatformPage() {
  const [heroRef, heroInView] = useInView()
  const [feature1Ref, feature1InView] = useInView()
  const [feature2Ref, feature2InView] = useInView()
  const [feature3Ref, feature3InView] = useInView()
  const [feature4Ref, feature4InView] = useInView()
  const [feature5Ref, feature5InView] = useInView()
  const [howItWorksRef, howItWorksInView] = useInView()

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Platform" }]} />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`container mx-auto px-3 md:px-4 pt-6 pb-12 md:pt-10 md:pb-16 transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-6">
            <Sparkles className="w-3 h-3 text-white" />
            Enterprise AI Content Platform
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance leading-tight">
            AI Content Writing Software for Marketing Teams
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Everything you need to create content that gets cited by ChatGPT, Claude, Perplexity, AI Overviews, and
            other AI platforms. Built on human-crafted frameworks and powered by 80+ specialized AI agents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-8"
              asChild
            >
              <a href="https://app.writeworks.ai/sign-up">Start Free</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent hover:border-white/40"
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden border border-white/10">
            <div className="bg-black rounded-lg overflow-hidden">
              <img
                src="/images/screenshot-202025-10-27-20at-2016.png"
                alt="WriteWorks AI Platform Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="container mx-auto px-3 md:px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <Target className="w-8 h-8 text-white" />,
              title: "Human-Built LLM Frameworks",
              description:
                "Content structures specifically designed for maximum citation likelihood across AI platforms",
            },
            {
              icon: <Users className="w-8 h-8 text-white" />,
              title: "80+ Content Writing Agents",
              description:
                "Expert Content Writing agents for every content type, from blog posts to technical documentation",
            },
            {
              icon: <Eye className="w-8 h-8 text-white" />,
              title: "LLM Visibility Scoring",
              description: "Real-time analysis of how likely your content is to be cited by AI models",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="bg-white/5 backdrop-blur border-white/10 p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature 1: Content Editor with LLM Scoring */}
      <section
        ref={feature1Ref}
        className={`py-16 md:py-20 bg-black transition-all duration-700 ${
          feature1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Content Editor
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Write with Real-Time LLM Visibility Scoring
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                Our intelligent content editor analyzes your content in real-time, showing you exactly how likely it is
                to be cited by AI platforms. Get instant feedback on content quality, relevance, and structure.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time LLM Visibility Score (0-100)",
                  "Content quality and relevance analysis",
                  "Structure and formatting recommendations",
                  "Citation-optimized content checklist",
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
                <a href="https://app.writeworks.ai/sign-up">Try the Editor</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <AnimatedChat
                messages={[
                  { role: "user", content: "What's my LLM Visibility Score for this article?", delay: 500 },
                  {
                    role: "assistant",
                    content:
                      "Your current score is 72/100. Good start! I'm analyzing content quality (60/100), relevance (75/100), and structure (80/100).",
                    delay: 800,
                  },
                  { role: "user", content: "How can I improve the score?", delay: 1000 },
                  {
                    role: "assistant",
                    content:
                      "Add more data points and examples. Your structure is excellent, but increasing content depth with statistics will boost quality and citation likelihood.",
                    delay: 1200,
                  },
                ]}
                className="w-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: AI Text Actions */}
      <section
        ref={feature2Ref}
        className={`py-16 md:py-20 bg-black border-y border-white/10 transition-all duration-700 ${
          feature2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
            <div className="relative flex items-center order-2 md:order-1">
              <AnimatedChat
                messages={[
                  { role: "user", content: "Can you make this paragraph more professional?", delay: 500 },
                  {
                    role: "assistant",
                    content:
                      "I'll optimize it for you. Applying professional tone and enhancing clarity while maintaining LLM citation potential...",
                    delay: 800,
                  },
                  { role: "user", content: "Perfect! Can you also expand on the key points?", delay: 1000 },
                  {
                    role: "assistant",
                    content:
                      "Expanding now with additional context and data. This will improve both readability and your LLM Visibility Score.",
                    delay: 1200,
                  },
                ]}
                className="w-full min-h-[400px]"
              />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                AI Text Actions
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Optimize Any Text with One Click
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                Select any text and instantly improve it with AI-powered actions. Expand, simplify, rephrase, or
                optimize for LLM visibility without leaving your workflow.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Expand or simplify content on demand",
                  "Rephrase for better clarity and impact",
                  "Make content more professional or casual",
                  "Custom instructions for specific optimizations",
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
                <a href="https://app.writeworks.ai/sign-up">Start Optimizing</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: 80+ Specialized Agents */}
      <section
        ref={feature3Ref}
        className={`py-16 md:py-20 bg-black transition-all duration-700 ${
          feature3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Content Writing Agents
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                80+ Content Writing Agents for Every Content Type
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                Access a library of expert Content Writing agents, each trained on specific content types and LLM
                optimization frameworks. From blog posts to technical documentation, we have an agent for every
                workflow.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "SEO Content Optimizer for search visibility",
                  "Blog Writer for engaging long-form content",
                  "Social Media Creator for platform-specific posts",
                  "Technical Writer for authority documentation",
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
                <a href="https://app.writeworks.ai/sign-up">Explore All Content Writing Agents</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <AnimatedChat
                messages={[
                  { role: "user", content: "Show me the available Content Writing agents", delay: 500 },
                  {
                    role: "assistant",
                    content:
                      "Here are some popular Content Writing agents: Blog Writer, SEO Optimizer, Social Media Creator, Technical Writer, Email Copywriter, and 75+ more!",
                    delay: 800,
                  },
                  { role: "user", content: "I need help with LinkedIn posts", delay: 1000 },
                  {
                    role: "assistant",
                    content:
                      "Perfect! The Social Media Creator Content Writing agent specializes in LinkedIn. It creates professional posts optimized for engagement and LLM citations.",
                    delay: 1200,
                  },
                ]}
                className="w-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Brand & Content Management */}
      <section
        ref={feature4Ref}
        className={`py-16 md:py-20 bg-black border-y border-white/10 transition-all duration-700 ${
          feature4InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
            <div className="relative flex items-center order-2 md:order-1">
              <div className="relative rounded-lg overflow-hidden border border-white/10 w-full">
                <div className="bg-black rounded-lg overflow-hidden">
                  <img
                    src="/images/screenshot-202025-10-27-20at-2016.png"
                    alt="Brand Management Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Brand Management
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Centralize Your Brand Voice & Content Assets
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                Define your brand identity, tone, target audience, and knowledge base in one place. Every Content
                Writing agent uses your brand guidelines to create consistent, on-brand content.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Brand identity and voice guidelines",
                  "Target audience and persona definitions",
                  "Knowledge base for brand-specific information",
                  "Content library and asset management",
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
                <a href="https://app.writeworks.ai/sign-up">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Workflow & Collaboration */}
      <section
        ref={feature5Ref}
        className={`py-16 md:py-20 bg-black transition-all duration-700 ${
          feature5InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium mb-4 w-fit">
                Workflow & Collaboration
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Scale Content Production with Your Team
              </h2>
              <p className="text-base text-white/70 mb-6 text-pretty leading-relaxed">
                Manage projects, collaborate with team members, and streamline your content workflow. From ideation to
                publication, keep everything organized in one platform.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Project management and task organization",
                  "Team collaboration and shared workspaces",
                  "Content calendar and scheduling",
                  "Version control and content history",
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
                <a href="https://app.writeworks.ai/sign-up">Start Collaborating</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="relative rounded-lg overflow-hidden border border-white/10 w-full">
                <div className="bg-black rounded-lg overflow-hidden">
                  <img
                    src="/images/screenshot-202025-10-27-20at-2015.png"
                    alt="Content Workflow"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        ref={howItWorksRef}
        className={`py-16 md:py-20 bg-black border-y border-white/10 transition-all duration-700 ${
          howItWorksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">How the Platform Works</h2>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              From setup to publication, here's how WriteWorks helps you create LLM-optimized content
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Set Up Your Brand",
                description: "Define your brand voice, target audience, and content guidelines",
                icon: <Shield className="w-6 h-6 text-white" />,
              },
              {
                step: "2",
                title: "Choose Your Content Writing Agent",
                description: "Select from 80+ Content Writing agents for your content type",
                icon: <Users className="w-6 h-6 text-white" />,
              },
              {
                step: "3",
                title: "Create & Optimize",
                description: "Write with real-time LLM visibility scoring and AI-powered suggestions",
                icon: <FileText className="w-6 h-6 text-white" />,
              },
              {
                step: "4",
                title: "Publish & Scale",
                description: "Collaborate with your team and scale content production",
                icon: <Workflow className="w-6 h-6 text-white" />,
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="bg-white/5 backdrop-blur border-white/10 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 relative"
              >
                <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-xs">
                  {item.step}
                </div>
                <div className="mt-4 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Everything You Need in One Platform
            </h2>
            <p className="text-base text-white/70">Comprehensive tools for LLM content optimization</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-6 h-6 text-white" />,
                title: "LLM Visibility Scoring",
                description: "Real-time analysis of citation likelihood",
              },
              {
                icon: <FileText className="w-6 h-6 text-white" />,
                title: "Rich Text Editor",
                description: "Professional editing with AI-powered suggestions",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "80+ Content Writing Agents",
                description: "Content Writing agents for every content type",
              },
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: "Brand Management",
                description: "Centralized brand voice and guidelines",
              },
              {
                icon: <Workflow className="w-6 h-6 text-white" />,
                title: "Project Management",
                description: "Organize and track content projects",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-white" />,
                title: "Content Analytics",
                description: "Track content performance and insights",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="bg-white/5 backdrop-blur border-white/10 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-3 md:px-4 py-16">
        <Card className="bg-white/5 border-white/20 p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Content for AI Platforms?
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join content teams using WriteWorks to drive citations and mentions from ChatGPT, Claude, Perplexity, and
            more.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10"
            asChild
          >
            <a href="https://app.writeworks.ai/sign-up">Start Free</a>
          </Button>
          <p className="text-sm text-white/60 mt-4">
            No credit card required • 80+ Content Writing agents • Human-built LLM frameworks
          </p>
        </Card>
      </section>
    </div>
  )
}
