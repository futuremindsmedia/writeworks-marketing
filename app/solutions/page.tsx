"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Sparkles, Zap, Target, Users, TrendingUp, Award } from "lucide-react"
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

export default function SolutionsPage() {
  const [heroRef, heroInView] = useInView()
  const [challenge1Ref, challenge1InView] = useInView()
  const [challenge2Ref, challenge2InView] = useInView()
  const [challenge3Ref, challenge3InView] = useInView()
  const [challenge4Ref, challenge4InView] = useInView()
  const [challenge5Ref, challenge5InView] = useInView()
  const [challenge6Ref, challenge6InView] = useInView()
  const [challenge7Ref, challenge7InView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Solutions" }]} />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`container mx-auto px-3 md:px-4 pt-6 pb-20 md:pt-10 md:pb-28 transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-white mb-6">
            <Target className="w-3 h-3 text-white" />
            Solutions for Content Teams
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance leading-tight">
            Get Your Content Cited by AI Platforms
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-8 text-pretty max-w-2xl mx-auto">
            WriteWorks helps content writers and marketing leaders create content that gets cited by ChatGPT, Claude,
            Perplexity, and other AI platforms using human-built LLM optimization frameworks.
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
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent hover:border-white/30"
              asChild
            >
              <a href="#challenges">View Solutions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement - Single Column */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-white mb-6">
              <Target className="w-3 h-3 text-white" />
              The Challenge
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Your Content is Invisible to AI Platforms
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              While your competitors get cited by ChatGPT, Claude, and Perplexity, your brand stays invisible. You're
              creating content, but AI platforms aren't finding it or referencing it.
            </p>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-white mb-2">0%</div>
                <p className="text-sm text-white/70">Of your content gets cited by AI platforms</p>
              </Card>
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <p className="text-sm text-white/70">Of your competitors are ahead in AI visibility</p>
              </Card>
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-white mb-2">$0</div>
                <p className="text-sm text-white/70">ROI from content that nobody sees</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge 1: Content Invisible to AI Platforms */}
      <section
        id="challenges"
        ref={challenge1Ref}
        className={`py-20 md:py-28 border-t border-white/10 transition-all duration-700 ${
          challenge1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full text-xs text-white mb-4">Challenge #1</div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">
                Your Content is Invisible to AI Platforms
              </h2>
              <p className="text-base text-white/70 mb-4 text-pretty leading-relaxed">
                You're creating great content, but ChatGPT, Claude, and Perplexity never cite it. Your competitors are
                getting mentioned in AI responses while your brand stays invisible.
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 py-2 mb-6 italic text-sm text-white/60">
                "We publish 50 articles a month but never show up in ChatGPT responses. Our competitors are getting all
                the AI citations."
              </blockquote>
              <h3 className="text-lg font-semibold text-white mb-4">How WriteWorks Solves This:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Human-built LLM optimization frameworks for maximum citability",
                  "80+ specialized AI agents trained on LLM citation patterns",
                  "Content structured specifically for AI platform parsing",
                  "Real-time LLM visibility scoring before you publish",
                  "Keyword research focused on AI search queries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/80 font-medium">
                  "Our LLM visibility score shows you exactly how likely your content is to get cited by AI platforms
                  before you hit publish."
                </p>
              </div>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">Increase LLM Visibility</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2016.20.59-zq9nj0vkQPEQuIK68uvlJR2xdAbjVE.png"
                  alt="LLM Visibility Score in Content Editor"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge 2: No Framework for LLM Optimization */}
      <section
        ref={challenge2Ref}
        className={`py-20 md:py-28 border-t border-white/10 transition-all duration-700 ${
          challenge2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full text-xs text-white mb-4">Challenge #2</div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">
                No Framework for Writing LLM-Optimized Content
              </h2>
              <p className="text-base text-white/70 mb-4 text-pretty leading-relaxed">
                You know AI citations matter, but you don't know how to write for them. No clear guidelines, no proven
                frameworks, just guesswork and hoping for the best.
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 py-2 mb-6 italic text-sm text-white/60">
                "We're told to optimize for AI, but nobody knows what that actually means. We're just winging it."
              </blockquote>
              <h3 className="text-lg font-semibold text-white mb-4">How WriteWorks Solves This:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Human-built frameworks based on what actually gets cited",
                  "AI text actions that optimize content for LLM parsing",
                  "Content quality scoring for relevance and structure",
                  "Built-in best practices for citations and mentions",
                  "Competitor analysis to see what's working in your space",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/80 font-medium">
                  "Stop guessing. Our human-built frameworks show you exactly how to structure content for maximum AI
                  platform visibility."
                </p>
              </div>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">Get the Framework</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2016.23.17-YbTuWjyHiI5ZgcGxBIuvtkxX5atoYN.png"
                  alt="AI Text Actions for LLM Optimization"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge 3: Can't Scale LLM-Optimized Content */}
      <section
        ref={challenge3Ref}
        className={`py-20 md:py-28 border-t border-white/10 transition-all duration-700 ${
          challenge3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full text-xs text-white mb-4">Challenge #3</div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">
                Can't Scale LLM-Optimized Content Production
              </h2>
              <p className="text-base text-white/70 mb-4 text-pretty leading-relaxed">
                Optimizing one article for AI citations takes hours. You need to publish 50+ pieces a month. The math
                doesn't work with manual optimization.
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 py-2 mb-6 italic text-sm text-white/60">
                "It takes our team 4 hours to properly optimize one article for LLM visibility. We can't keep up with
                content demand."
              </blockquote>
              <h3 className="text-lg font-semibold text-white mb-4">How WriteWorks Solves This:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "80+ specialized AI agents for different content types",
                  "Automated LLM optimization built into the writing workflow",
                  "Bulk content creation with consistent LLM visibility",
                  "Templates and frameworks that scale across your team",
                  "Real-time optimization suggestions as you write",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/80 font-medium">
                  "Create 10X more LLM-optimized content without 10X more time. Our AI agents handle the optimization
                  while you focus on strategy."
                </p>
              </div>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">Scale Your Content</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2015.03.01-J44HE6PTdm736X5QD8Hw7I9Mxn5o0H.png"
                  alt="80+ Specialized Content Agents"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge 4: Inconsistent LLM Visibility */}
      <section
        ref={challenge4Ref}
        className={`py-20 md:py-28 border-t border-white/10 transition-all duration-700 ${
          challenge4InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full text-xs text-white mb-4">Challenge #4</div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">
                Inconsistent LLM Visibility Across Your Team
              </h2>
              <p className="text-base text-white/70 mb-4 text-pretty leading-relaxed">
                Some writers create content that gets cited by AI platforms, others don't. No consistency, no standards,
                no way to ensure quality across your content team.
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 py-2 mb-6 italic text-sm text-white/60">
                "Our senior writer's content gets cited all the time. Our junior writers? Never. We need to level up the
                whole team."
              </blockquote>
              <h3 className="text-lg font-semibold text-white mb-4">How WriteWorks Solves This:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Consistent LLM optimization frameworks for every writer",
                  "Brand voice and tone guidelines built into the platform",
                  "Quality scoring ensures minimum visibility standards",
                  "Collaborative workflows with built-in review processes",
                  "Knowledge base of best-performing content patterns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/80 font-medium">
                  "Every writer on your team can create content that meets your LLM visibility standards. No more
                  inconsistency."
                </p>
              </div>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">Standardize Quality</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2016.24.11-3qvocKjyuQAvQJvctZfMC3jJhNJF4a.png"
                  alt="Content Dashboard with Projects"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge 5: Competitors Dominating AI Responses */}
      <section
        ref={challenge5Ref}
        className={`py-20 md:py-28 border-t border-white/10 transition-all duration-700 ${
          challenge5InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full text-xs text-white mb-4">Challenge #5</div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">
                Competitors Dominating AI Platform Responses
              </h2>
              <p className="text-base text-white/70 mb-4 text-pretty leading-relaxed">
                When people ask ChatGPT or Perplexity about your industry, your competitors get cited. You don't.
                They're capturing mindshare in the AI era while you're invisible.
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 py-2 mb-6 italic text-sm text-white/60">
                "I searched our brand in ChatGPT and got nothing. Then I searched our competitor and got three detailed
                citations. We're losing."
              </blockquote>
              <h3 className="text-lg font-semibold text-white mb-4">How WriteWorks Solves This:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Competitor analysis shows what content gets cited in your space",
                  "Gap identification reveals opportunities you're missing",
                  "Keyword research focused on AI search queries",
                  "Content strategies based on what's working for competitors",
                  "Faster content production to capture opportunities first",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/80 font-medium">
                  "See exactly what content your competitors are getting cited for, then create better content faster to
                  win those citations."
                </p>
              </div>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">Beat Your Competitors</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2015.03.01-J44HE6PTdm736X5QD8Hw7I9Mxn5o0H.png"
                  alt="Content Editor with LLM Optimization"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge 6: Generic AI Content Doesn't Perform */}
      <section
        ref={challenge6Ref}
        className={`py-20 md:py-28 border-t border-white/10 transition-all duration-700 ${
          challenge6InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full text-xs text-white mb-4">Challenge #6</div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">
                Generic AI Content Doesn't Get Cited
              </h2>
              <p className="text-base text-white/70 mb-4 text-pretty leading-relaxed">
                You've tried generic AI writing tools. The content is bland, lacks expertise, and never gets cited by AI
                platforms. You need human expertise combined with AI optimization.
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 py-2 mb-6 italic text-sm text-white/60">
                "We tried ChatGPT to write our content. It's generic garbage that nobody cites. We need something
                better."
              </blockquote>
              <h3 className="text-lg font-semibold text-white mb-4">How WriteWorks Solves This:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Human-built frameworks ensure expertise and authority",
                  "80+ specialized agents for different content types and industries",
                  "Your brand voice and expertise built into every piece",
                  "Keyword research and competitor insights inform content",
                  "Quality scoring ensures content meets citation standards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/80 font-medium">
                  "This isn't generic AI content. It's your expertise amplified by AI agents trained on what actually
                  gets cited."
                </p>
              </div>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">Create Expert Content</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2016.20.59-zq9nj0vkQPEQuIK68uvlJR2xdAbjVE.png"
                  alt="Specialized AI Agents for Different Content Types"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge 7: No Clear ROI from Content Investment */}
      <section
        ref={challenge7Ref}
        className={`py-20 md:py-28 border-t border-white/10 transition-all duration-700 ${
          challenge7InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full text-xs text-white mb-4">Challenge #7</div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">
                Can't Prove Content ROI to Leadership
              </h2>
              <p className="text-base text-white/70 mb-4 text-pretty leading-relaxed">
                Leadership asks what you're getting from content investment. You can't show clear results. Budget is at
                risk because you can't prove the value of LLM optimization.
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 py-2 mb-6 italic text-sm text-white/60">
                "My CMO wants to know if our content investment is working. I have no data to show them about AI
                citations or brand visibility."
              </blockquote>
              <h3 className="text-lg font-semibold text-white mb-4">How WriteWorks Solves This:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "LLM visibility scores show content quality before publishing",
                  "Citation tracking across AI platforms (coming soon)",
                  "Content quality metrics and improvement over time",
                  "Team productivity gains and time savings",
                  "Competitive benchmarking against industry leaders",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/80 font-medium">
                  "Show leadership exactly how your content is improving with clear metrics on LLM visibility and team
                  productivity."
                </p>
              </div>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">Prove Your ROI</a>
              </Button>
            </div>
            <div className="relative flex items-center">
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2016.20.59-zq9nj0vkQPEQuIK68uvlJR2xdAbjVE.png"
                  alt="LLM Visibility Scoring Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Why Content Teams Choose WriteWorks</h2>
            <p className="text-base text-white/70">The only platform built specifically for LLM content optimization</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-white" />,
                title: "Human-Built Frameworks",
                description: "LLM optimization frameworks built by experts, not generic AI",
              },
              {
                icon: <Target className="w-6 h-6 text-white" />,
                title: "80+ Specialized Agents",
                description: "AI agents trained for different content types and industries",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: "LLM Visibility Scoring",
                description: "Know how likely your content is to get cited before you publish",
              },
              {
                icon: <Zap className="w-6 h-6 text-white" />,
                title: "10X Content Velocity",
                description: "Create more LLM-optimized content without sacrificing quality",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Consistent Quality",
                description: "Every writer creates content that meets your visibility standards",
              },
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Competitive Edge",
                description: "Beat competitors to AI citations with faster, better content",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-colors">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`container mx-auto px-3 md:px-4 py-20 transition-all duration-700 ${
          ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Card className="bg-white/5 border-white/10 p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Get Cited by AI Platforms?</h2>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join content writers and marketing leaders using WriteWorks to create content that gets cited by ChatGPT,
            Claude, Perplexity, and other AI platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10"
              asChild
            >
              <a href="https://app.writeworks.ai/sign-up">Start Free</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent hover:border-white/30"
              asChild
            >
              <a href="mailto:sales@writeworks.ai">Contact Sales</a>
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-6">
            No credit card required • 80+ specialized AI agents • Human-built LLM frameworks
          </p>
        </Card>
      </section>
    </div>
  )
}
