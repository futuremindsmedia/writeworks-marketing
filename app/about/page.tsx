import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Lightbulb, Users, TrendingUp, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "About Us - WriteWorks AI",
  description:
    "Learn about WriteWorks AI's mission to help businesses thrive in the age of AI-powered search and LLM citations.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "About Us" }]} />
      </div>

      {/* Hero Section */}
      <section className="relative py-10 md:py-14 px-3 md:px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm text-white/70">About WriteWorks AI</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
              Pioneering the Future of{" "}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                AI-Powered Visibility
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 text-pretty leading-relaxed">
              We're on a mission to help businesses thrive in the age of AI-powered search, where brand visibility is
              determined by LLM citations, not just traditional SEO rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-20 px-3 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  In 2023, our founders—veterans in AI research, search marketing, and content strategy—noticed a
                  seismic shift happening in how people discover information. ChatGPT, Claude, Perplexity, and other
                  LLMs were rapidly becoming the new search engines.
                </p>
                <p>
                  But there was a problem: businesses had spent decades mastering SEO, only to find their carefully
                  optimized content invisible to AI systems. Traditional search rankings meant nothing when LLMs decided
                  which brands to cite and recommend.
                </p>
                <p>
                  We founded WriteWorks AI to solve this challenge. By combining deep expertise in AI systems, natural
                  language processing, and content optimization, we created the first platform specifically designed to
                  help businesses earn citations and visibility across LLM platforms.
                </p>
                <p>
                  Today, we're proud to help thousands of businesses adapt to this new era of AI-powered discovery,
                  ensuring their brands remain visible, trusted, and recommended by the AI systems that matter most.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">Our Mission</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Empower businesses to thrive in the age of AI-powered search by optimizing content for LLM
                        citations and driving measurable brand visibility.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">Our Vision</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        A world where every business, regardless of size, can be discovered, cited, and trusted by AI
                        systems that shape how billions of people find information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-3 md:px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Impact by the Numbers</h2>
            <p className="text-white/70 text-lg">Real results from real businesses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "500M+", label: "LLM Citations Tracked" },
              { value: "300%", label: "Avg. Citation Increase" },
              { value: "50+", label: "Countries Served" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center h-full hover:border-white/20 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 px-3 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Our Core Values</h2>
            <p className="text-white/70 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Innovation First",
                description:
                  "We stay ahead of AI advancements, constantly evolving our platform to leverage the latest LLM capabilities and search patterns.",
              },
              {
                icon: Award,
                title: "Results-Driven",
                description:
                  "Every feature we build is designed to deliver measurable impact—more citations, higher visibility, and real business growth.",
              },
              {
                icon: Users,
                title: "Customer Success",
                description:
                  "Your success is our success. We're committed to providing world-class support and resources to help you achieve your goals.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden mb-6 bg-white/5">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 px-3 md:px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Meet Our Leadership</h2>
            <p className="text-white/70 text-lg">Industry experts in AI, LLM, and search marketing</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Former AI Research Lead at Google. PhD in Natural Language Processing from Stanford.",
                image: "/professional-woman-portrait.png",
              },
              {
                name: "Marcus Rodriguez",
                role: "CTO & Co-Founder",
                bio: "Ex-OpenAI Engineer. Built large-scale ML systems serving billions of users.",
                image: "/professional-man-portrait.png",
              },
              {
                name: "Emily Watson",
                role: "Head of Product",
                bio: "15+ years in search marketing. Former VP of SEO at Fortune 500 companies.",
                image: "/professional-woman-portrait.png",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 transition-all"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white/5">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-[#6366F1] text-sm mb-3">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 px-3 md:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Our Journey</h2>
            <p className="text-white/70 text-lg">Key milestones in our mission</p>
          </div>
          <div className="space-y-8">
            {[
              {
                year: "2023",
                title: "Founded",
                description: "WriteWorks AI was founded by AI and search marketing experts",
              },
              {
                year: "2023",
                title: "First Platform Launch",
                description: "Released our LLM citation tracking and optimization platform",
              },
              {
                year: "2024",
                title: "1,000 Customers",
                description: "Reached our first thousand active users across 30 countries",
              },
              {
                year: "2024",
                title: "Series A Funding",
                description: "Raised $15M to accelerate product development and expansion",
              },
              {
                year: "2025",
                title: "10K+ Users",
                description: "Serving over 10,000 businesses worldwide with proven results",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-px bg-gradient-to-b from-[#6366F1] to-[#8B5CF6]" />
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                  <p className="text-white/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-3 md:px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Join Us on This Journey</h2>
          <p className="text-lg text-white/70 mb-8 text-pretty">
            Whether you're looking to optimize your content for LLM citations or join our team, we'd love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.writeworks.ai/sign-up">
              <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 h-12 px-8">
                Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent hover:border-white/40 h-12 px-8"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
