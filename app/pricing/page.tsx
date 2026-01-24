"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Sparkles, HelpCircle, X, ArrowRight } from "lucide-react"
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

export default function PricingPage() {
  const [heroRef, heroInView] = useInView()
  const [pricingRef, pricingInView] = useInView()
  const [comparisonRef, comparisonInView] = useInView()
  const [faqRef, faqInView] = useInView()

  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for individuals and small teams",
      features: [
        "80+ specialized AI agents",
        "Core integrations",
        "Project management",
        "24/7 chat assistant",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$79",
      description: "For growing content teams",
      features: [
        "Everything in Starter",
        "Full integration suite",
        "Keyword research tools",
        "Competitor analysis",
        "Department-specific modes",
        "Advanced analytics",
        "Priority support",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "Team training & onboarding",
        "Custom AI agents",
        "SLA guarantee",
        "Advanced security",
        "API access",
      ],
    },
  ]

  const comparisonFeatures = [
    { name: "AI Writing Agents", starter: "80+", professional: "80+", enterprise: "80+ Custom" },
    { name: "LLM Frameworks", starter: true, professional: true, enterprise: true },
    { name: "Project Management", starter: true, professional: true, enterprise: true },
    { name: "Keyword Research", starter: false, professional: true, enterprise: true },
    { name: "Competitor Analysis", starter: false, professional: true, enterprise: true },
    { name: "Advanced Analytics", starter: false, professional: true, enterprise: true },
    { name: "Team Collaboration", starter: "Basic", professional: "Advanced", enterprise: "Advanced" },
    { name: "Custom Integrations", starter: false, professional: false, enterprise: true },
    { name: "Dedicated Support", starter: false, professional: false, enterprise: true },
    { name: "API Access", starter: false, professional: false, enterprise: true },
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Pricing" }]} />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`container mx-auto px-3 md:px-4 pt-6 pb-20 md:pt-10 md:pb-28 transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white mb-6">
            <Sparkles className="w-3 h-3 text-white" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance leading-tight">
            AI Content Platform Pricing: Plans for Every Team Size
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-8 text-pretty max-w-2xl mx-auto">
            Start optimizing your content for LLM visibility today. All plans include access to 80+ specialized AI
            agents and human-built LLM frameworks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section
        ref={pricingRef}
        className={`container mx-auto px-3 md:px-4 py-16 md:py-20 transition-all duration-700 ${
          pricingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}>
              <Card
                className={`bg-white/5 backdrop-blur border-white/10 p-8 relative hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full flex flex-col ${
                  plan.popular ? "border-white/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-white/70 text-sm">/month</span>}
                </div>
                <p className="text-sm text-white/70 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={
                    plan.popular
                      ? "w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10"
                      : "w-full bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                  }
                  asChild
                >
                  <a href="https://app.writeworks.ai/sign-up">
                    {plan.price === "Custom" ? (
                      "Contact Sales"
                    ) : (
                      <>
                        Free Trial <ArrowRight className="ml-2 w-4 h-4 inline" />
                      </>
                    )}
                  </a>
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section
        ref={comparisonRef}
        className={`container mx-auto px-3 md:px-4 py-16 md:py-20 transition-all duration-700 ${
          comparisonInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Compare Plans</h2>
            <p className="text-base text-white/70">See what's included in each plan</p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Starter</th>
                    <th className="text-center p-6 text-white font-semibold">Professional</th>
                    <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={index !== comparisonFeatures.length - 1 ? "border-b border-white/5" : ""}
                    >
                      <td className="p-6 text-white/70">{feature.name}</td>
                      <td className="p-6 text-center">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <Check className="w-5 h-5 text-white mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-white/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-white/70 text-sm">{feature.starter}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.professional === "boolean" ? (
                          feature.professional ? (
                            <Check className="w-5 h-5 text-white mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-white/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-white/70 text-sm">{feature.professional}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <Check className="w-5 h-5 text-white mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-white/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-white/70 text-sm">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {plans.map((plan) => (
              <Card key={plan.name} className="bg-white/5 backdrop-blur border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="space-y-3">
                  {comparisonFeatures.map((feature) => {
                    const value =
                      plan.name === "Starter"
                        ? feature.starter
                        : plan.name === "Professional"
                          ? feature.professional
                          : feature.enterprise
                    return (
                      <div
                        key={feature.name}
                        className="flex items-center justify-between py-2 border-b border-white/5"
                      >
                        <span className="text-sm text-white/70">{feature.name}</span>
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="w-5 h-5 text-white" />
                          ) : (
                            <X className="w-5 h-5 text-white/30" />
                          )
                        ) : (
                          <span className="text-sm text-white/70">{value}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className={`container mx-auto px-3 md:px-4 py-16 md:py-20 transition-all duration-700 ${
          faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-base text-white/70">Everything you need to know about our pricing</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any differences.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, Mastercard, American Express) and offer annual billing with a discount.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes! All plans come with a 14-day free trial. No credit card required to start. You can explore all features before committing.",
              },
              {
                question: "What happens if I exceed my usage limits?",
                answer:
                  "We'll notify you when you're approaching your limits. You can upgrade your plan at any time to increase your capacity.",
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer:
                  "Yes! Save 20% when you choose annual billing. Contact our sales team for custom enterprise pricing.",
              },
              {
                question: "Can I cancel my subscription?",
                answer:
                  "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
              },
            ].map((faq) => (
              <Card
                key={faq.question}
                className="bg-white/5 border-white/10 p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <HelpCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-3 md:px-4 py-16 md:py-20">
        <Card className="bg-white/5 border-white/10 p-12 md:p-16 text-center max-w-4xl mx-auto hover:border-white/20 transition-all">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join marketing teams using WriteWorks to drive citations and mentions from ChatGPT, Claude, Perplexity, and
            more.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10"
            asChild
          >
            <a href="https://app.writeworks.ai/sign-up">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4 inline" />
            </a>
          </Button>
          <p className="text-sm text-white/70 mt-4">14-day free trial • No credit card required • Cancel anytime</p>
        </Card>
      </section>
    </div>
  )
}
