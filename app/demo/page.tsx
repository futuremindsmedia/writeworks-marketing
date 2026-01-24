"use client"

import { Calendar, CheckCircle2, Users, Video, Clock, Send } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useState } from "react"

export default function DemoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form handling logic would go here
    setFormSubmitted(true)
  }

  const benefits = [
    {
      icon: Video,
      title: "Personalized Walkthrough",
      description: "See how WriteWorks AI fits your specific use case and workflow",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get answers from our team about features, pricing, and implementation",
    },
    {
      icon: CheckCircle2,
      title: "No Commitment",
      description: "Free demo with no obligation - see if we're the right fit",
    },
    {
      icon: Clock,
      title: "Quick & Efficient",
      description: "30-minute focused session at a time that works for you",
    },
  ]

  if (formSubmitted) {
    return (
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-3 md:px-4 pt-6">
          <Breadcrumbs items={[{ label: "Book a Demo" }]} />
        </div>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#6366F1]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You!</h1>
              <p className="text-lg text-white/70 mb-8">
                We've received your demo request. Our team will reach out within 24 hours to schedule your personalized
                walkthrough.
              </p>
              <a
                href="/"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Book a Demo" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-4">
              <Calendar className="w-3 h-3 text-white" />
              Book Your Demo
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              See WriteWorks in Action
            </h1>
            <p className="text-base md:text-lg text-white/70">
              Discover how WriteWorks AI can transform your content workflow. Schedule a personalized demo with our
              team and see firsthand how we help teams create content that gets cited by ChatGPT, Claude, and
              Perplexity.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 hover:border-white/20 transition-all">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Request Your Demo</h2>
              <p className="text-white/70 mb-8">
                Fill out the form below and we'll schedule a time that works best for you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-white mb-2">
                      Job Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
                    >
                      <option value="">Select your role</option>
                      <option value="content-marketing">Content Marketing</option>
                      <option value="product-marketing">Product Marketing</option>
                      <option value="performance-marketing">Performance Marketing</option>
                      <option value="brand-marketing">Brand Marketing</option>
                      <option value="pr-communications">PR & Communications</option>
                      <option value="cmo-vp">CMO / VP Marketing</option>
                      <option value="director">Director / Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="company-size" className="block text-sm font-medium text-white mb-2">
                    Company Size *
                  </label>
                  <select
                    id="company-size"
                    name="company-size"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1,000 employees</option>
                    <option value="1001+">1,001+ employees</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    What are you looking to achieve with WriteWorks? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all resize-none"
                    placeholder="Tell us about your content goals and challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#6366F1]/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What to Expect</h2>
              <p className="text-white/70">Here's how your demo will work</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "We'll reach out within 24 hours",
                  description:
                    "Our team will contact you to schedule a time that works best for your schedule.",
                },
                {
                  step: "2",
                  title: "30-minute personalized demo",
                  description:
                    "We'll walk through the platform, focusing on features most relevant to your use case and goals.",
                },
                {
                  step: "3",
                  title: "Q&A and next steps",
                  description:
                    "Get all your questions answered about pricing, implementation, and how to get started.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Prefer to Start on Your Own?</h2>
            <p className="text-base md:text-lg text-white/70 mb-8">
              Jump right in with a free trial - no credit card required
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.writeworks.ai/sign-up"
                className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Start Free Trial
              </a>
              <a
                href="/pricing"
                className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 hover:border-white/40 transition-all"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
