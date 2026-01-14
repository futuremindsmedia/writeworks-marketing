import type { Metadata } from "next"
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Contact Us | WriteWorks AI",
  description:
    "Get in touch with WriteWorks AI. Contact our sales team, support, or general inquiries. We're here to help you optimize your content for LLM citations.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-base md:text-lg text-white/70">
              Have questions about WriteWorks AI? Our team is here to help you optimize your content for LLM citations
              and drive brand visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Sales */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sales</h3>
              <p className="text-sm text-white/70 mb-4">
                Interested in WriteWorks AI? Let's discuss how we can help your business.
              </p>
              <a
                href="mailto:sales@writeworks.ai"
                className="text-[#6366F1] hover:text-[#8B5CF6] transition-colors text-sm font-medium"
              >
                sales@writeworks.ai
              </a>
            </div>

            {/* Support */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
              <p className="text-sm text-white/70 mb-4">Need help? Our support team is ready to assist you.</p>
              <a
                href="mailto:support@writeworks.ai"
                className="text-[#6366F1] hover:text-[#8B5CF6] transition-colors text-sm font-medium"
              >
                support@writeworks.ai
              </a>
            </div>

            {/* General */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">General Inquiries</h3>
              <p className="text-sm text-white/70 mb-4">For partnerships, press, or other inquiries.</p>
              <a
                href="mailto:hello@writeworks.ai"
                className="text-[#6366F1] hover:text-[#8B5CF6] transition-colors text-sm font-medium"
              >
                hello@writeworks.ai
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 hover:border-white/20 transition-all">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Send us a message</h2>
              <p className="text-white/70 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
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
                      Email Address *
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
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#6366F1]/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Visit Our Office</h2>
              <p className="text-white/70">We're located in the heart of San Francisco's tech district</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 hover:border-white/20 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Headquarters</h3>
                      <p className="text-white/70">
                        123 Market Street, Suite 400
                        <br />
                        San Francisco, CA 94103
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-white/70">
                    <p>
                      <span className="text-white font-medium">Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM PST
                    </p>
                    <p>
                      <span className="text-white font-medium">Phone:</span> +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="aspect-video rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-white/70">Quick answers to common questions about WriteWorks AI</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is your response time?",
                  answer:
                    "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please contact our support team directly.",
                },
                {
                  question: "Do you offer a free trial?",
                  answer:
                    "Yes! We offer a free trial so you can experience WriteWorks AI firsthand. Sign up at app.writeworks.ai to get started.",
                },
                {
                  question: "What support options are available?",
                  answer:
                    "We offer email support for all plans, with priority support and dedicated account management available for enterprise customers.",
                },
                {
                  question: "Can I schedule a call?",
                  answer:
                    "After submitting your inquiry, our team will reach out to schedule a call at your convenience.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-base md:text-lg text-white/70 mb-8">
              Join hundreds of businesses optimizing their content for LLM citations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="px-8 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Pricing
              </a>
              <a
                href="/resources"
                className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Explore Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
