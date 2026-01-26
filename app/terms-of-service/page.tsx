import type { Metadata } from "next"
import { FileText, Scale, CreditCard, Users, AlertTriangle, Shield } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Terms of Service | WriteWorks AI",
  description:
    "Read WriteWorks AI's Terms of Service. Learn about our subscription plans, acceptable use policies, billing terms, and user responsibilities.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <Scale className="w-4 h-4 text-white" />
              <span className="text-sm text-white/70">Last Updated: January 26, 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-base md:text-lg text-white/70">
              Please read these Terms of Service carefully before using WriteWorks AI. By accessing or using our
              services, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Key Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Billing</h3>
                <p className="text-sm text-white/70">
                  Monthly and annual subscription options with transparent pricing. Cancel anytime.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">User Responsibilities</h3>
                <p className="text-sm text-white/70">
                  Users are responsible for maintaining account security and complying with acceptable use policies.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Protection</h3>
                <p className="text-sm text-white/70">
                  Your content remains yours. We maintain strict data protection and privacy standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#6366F1]" />
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    By accessing or using WriteWorks AI (the "Service"), you agree to be bound by these Terms of Service
                    ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
                  </p>
                  <p className="leading-relaxed">
                    These Terms apply to all users of the Service, including but not limited to browsers, subscribers,
                    contributors, and administrators.
                  </p>
                  <p className="leading-relaxed">
                    We reserve the right to update or modify these Terms at any time without prior notice. Your continued
                    use of the Service following any changes constitutes acceptance of those changes.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    WriteWorks AI is an AI-powered content creation and optimization platform designed to help marketing
                    teams create high-quality, on-brand content optimized for citations by large language models (LLMs)
                    and AI platforms.
                  </p>
                  <p className="leading-relaxed">Our Service includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">AI Content Agents:</strong> Access to 80+ specialized AI writing
                      agents for various content types and marketing departments
                    </li>
                    <li>
                      <strong className="text-white">Content Editor:</strong> Advanced text editor with real-time LLM
                      scoring and optimization recommendations
                    </li>
                    <li>
                      <strong className="text-white">Brand Management:</strong> Tools for maintaining brand voice,
                      guidelines, and consistency across all content
                    </li>
                    <li>
                      <strong className="text-white">Project Management:</strong> Workflow tools, content calendars, and
                      team collaboration features
                    </li>
                    <li>
                      <strong className="text-white">Analytics & Insights:</strong> Performance tracking, citation
                      monitoring, and custom reporting
                    </li>
                    <li>
                      <strong className="text-white">Integrations:</strong> Connections with third-party platforms and
                      tools
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration and Security</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    To access certain features of the Service, you must register for an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your password and account credentials</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    You are responsible for maintaining the confidentiality of your account credentials. WriteWorks AI
                    will not be liable for any loss or damage arising from your failure to comply with this security
                    obligation.
                  </p>
                  <p className="leading-relaxed">
                    We reserve the right to suspend or terminate your account if we suspect any unauthorized or fraudulent
                    activity.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Subscription Plans and Pricing</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">WriteWorks AI offers multiple subscription tiers:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">Starter Plan:</strong> $29/month - Designed for individuals and
                      small teams with essential features
                    </li>
                    <li>
                      <strong className="text-white">Professional Plan:</strong> $79/month - For growing content teams
                      with advanced features and integrations
                    </li>
                    <li>
                      <strong className="text-white">Enterprise Plan:</strong> Custom pricing - For large organizations
                      with custom needs, dedicated support, and SLA guarantees
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    All prices are in USD and exclude applicable taxes unless otherwise stated. We offer both monthly and
                    annual billing options. Annual subscriptions receive a discount compared to monthly billing.
                  </p>
                  <p className="leading-relaxed">
                    We reserve the right to modify our pricing with at least 30 days' notice to existing subscribers.
                    Price changes will not affect your current billing cycle.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Free Trials</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We may offer free trial periods for new users. During the trial period, you will have access to
                    selected features of the Service at no charge.
                  </p>
                  <p className="leading-relaxed">
                    At the end of the trial period, your subscription will automatically convert to a paid subscription
                    unless you cancel before the trial ends. You will be charged the applicable subscription fee.
                  </p>
                  <p className="leading-relaxed">
                    Free trials are limited to one per user and may not be combined with other promotions unless
                    explicitly stated.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Billing and Payment</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    By subscribing to a paid plan, you agree to pay all fees associated with your chosen subscription
                    tier. You authorize us to charge your payment method on a recurring basis according to your billing
                    cycle.
                  </p>
                  <p className="leading-relaxed">Payment terms:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">Automatic Renewal:</strong> Subscriptions automatically renew at the
                      end of each billing period unless cancelled
                    </li>
                    <li>
                      <strong className="text-white">Payment Methods:</strong> We accept major credit cards, debit cards,
                      and other payment methods as indicated during checkout
                    </li>
                    <li>
                      <strong className="text-white">Failed Payments:</strong> If payment fails, we will attempt to
                      process payment again. Continued failure may result in suspension or termination of service
                    </li>
                    <li>
                      <strong className="text-white">Invoicing:</strong> Enterprise customers may be invoiced separately
                      with payment terms agreed upon in writing
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    You are responsible for all charges incurred under your account, including applicable taxes. We use
                    secure third-party payment processors to handle all payment transactions.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Cancellation and Refunds</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    You may cancel your subscription at any time through your account settings or by contacting our
                    support team at{" "}
                    <a href="mailto:support@writeworks.ai" className="text-[#6366F1] hover:text-[#8B5CF6]">
                      support@writeworks.ai
                    </a>
                    .
                  </p>
                  <p className="leading-relaxed">Cancellation terms:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Cancellations are effective at the end of the current billing period. You will retain access to the
                      Service until that date.
                    </li>
                    <li>No refunds are provided for partial months or years of service.</li>
                    <li>
                      Upon cancellation, you will lose access to your account and all associated data after the current
                      billing period ends.
                    </li>
                    <li>
                      We recommend exporting your content before cancellation as we do not guarantee data retention after
                      account termination.
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    <strong className="text-white">Refund Policy:</strong> We offer refunds within 14 days of your initial
                    purchase if you are not satisfied with the Service. After the 14-day period, all payments are
                    non-refundable. This does not affect your statutory rights.
                  </p>
                  <p className="leading-relaxed">
                    Enterprise customers may have different cancellation terms as specified in their service agreement.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Acceptable Use Policy</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">You agree not to use the Service to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                    <li>
                      Transmit or create content that is unlawful, harmful, threatening, abusive, harassing, defamatory,
                      vulgar, obscene, or otherwise objectionable
                    </li>
                    <li>Infringe upon intellectual property rights of others</li>
                    <li>Generate or distribute spam, malware, viruses, or other harmful code</li>
                    <li>
                      Attempt to gain unauthorized access to our systems, networks, or other users' accounts
                    </li>
                    <li>Interfere with or disrupt the integrity or performance of the Service</li>
                    <li>Use automated systems or bots to access the Service without our permission</li>
                    <li>Scrape, data mine, or extract data from the Service</li>
                    <li>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
                    <li>
                      Resell, rent, lease, or provide access to the Service to third parties without authorization
                    </li>
                    <li>Use the Service to compete with WriteWorks AI or develop competing products</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Violation of this Acceptable Use Policy may result in immediate suspension or termination of your
                    account without refund.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. User Content and Intellectual Property</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <strong className="text-white">Your Content:</strong> You retain all ownership rights to the content
                    you create, upload, or process through the Service ("User Content"). By using the Service, you grant
                    us a limited, non-exclusive, royalty-free license to use, store, and process your User Content solely
                    for the purpose of providing and improving the Service.
                  </p>
                  <p className="leading-relaxed">
                    You represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You own or have the necessary rights to all User Content you submit</li>
                    <li>Your User Content does not violate any third-party rights</li>
                    <li>Your User Content complies with these Terms and all applicable laws</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    <strong className="text-white">Our Intellectual Property:</strong> The Service, including its
                    software, design, features, and content (excluding User Content), is owned by WriteWorks AI and
                    protected by intellectual property laws. You may not copy, modify, distribute, or create derivative
                    works without our express written permission.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">AI-Generated Content:</strong> Content generated by our AI agents based
                    on your inputs is considered your User Content. However, we cannot guarantee that AI-generated content
                    is unique or free from third-party intellectual property claims. You are responsible for reviewing and
                    verifying all AI-generated content before use.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Data Privacy and Security</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    Your privacy is important to us. Our collection, use, and protection of your personal information is
                    governed by our{" "}
                    <a href="/privacy" className="text-[#6366F1] hover:text-[#8B5CF6]">
                      Privacy Policy
                    </a>
                    , which is incorporated into these Terms by reference.
                  </p>
                  <p className="leading-relaxed">Key privacy commitments:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We use industry-standard security measures to protect your data</li>
                    <li>Your User Content is never shared with other customers</li>
                    <li>We do not sell your personal information to third parties</li>
                    <li>We comply with GDPR, CCPA, and other applicable data protection regulations</li>
                    <li>We maintain SOC 2 Type II and ISO 27001 certifications</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    You are responsible for ensuring that your use of the Service complies with applicable data protection
                    laws, particularly if you process personal data of others through the Service.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Service Availability and Support</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We strive to provide reliable, uninterrupted service. However, we do not guarantee that the Service
                    will be available at all times or free from errors.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Scheduled Maintenance:</strong> We may perform scheduled maintenance
                    that temporarily interrupts service. We will provide advance notice when possible.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Support:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Starter Plan: Email support with response within 48 hours</li>
                    <li>Professional Plan: Priority support with response within 24 hours</li>
                    <li>Enterprise Plan: Dedicated account manager and priority support with custom SLA</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Support is available in English. Response times are measured during business hours (Monday-Friday, 9
                    AM - 6 PM PST, excluding holidays).
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. Modifications to Service</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or
                    without notice. We may add or remove features, change functionality, or impose new restrictions.
                  </p>
                  <p className="leading-relaxed">
                    We will make reasonable efforts to notify users of significant changes that materially affect their use
                    of the Service. However, we are not liable for any modification, suspension, or discontinuation of the
                    Service.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">13. Disclaimers and Limitations of Liability</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <strong className="text-white">AS-IS BASIS:</strong> THE SERVICE IS PROVIDED "AS IS" AND "AS
                    AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">AI-GENERATED CONTENT:</strong> We do not guarantee the accuracy,
                    completeness, quality, or reliability of AI-generated content. You are solely responsible for
                    reviewing, editing, and verifying all content before use.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">LIMITATION OF LIABILITY:</strong> TO THE MAXIMUM EXTENT PERMITTED BY
                    LAW, WRITEWORKS AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                    PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING FROM
                    YOUR USE OF THE SERVICE.
                  </p>
                  <p className="leading-relaxed">
                    OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU
                    PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
                  </p>
                  <p className="leading-relaxed">
                    Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so
                    these limitations may not apply to you.
                  </p>
                </div>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">14. Indemnification</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    You agree to indemnify, defend, and hold harmless WriteWorks AI, its affiliates, officers, directors,
                    employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including
                    reasonable attorneys' fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your use or misuse of the Service</li>
                    <li>Your User Content</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Your violation of applicable laws or regulations</li>
                  </ul>
                </div>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">15. Termination</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We may suspend or terminate your account and access to the Service at any time, with or without cause
                    or notice, if we believe you have violated these Terms or engaged in fraudulent or illegal activity.
                  </p>
                  <p className="leading-relaxed">Upon termination:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your right to use the Service immediately ceases</li>
                    <li>You remain responsible for all charges incurred before termination</li>
                    <li>We may delete your account data in accordance with our data retention policies</li>
                    <li>You will have 30 days to export your User Content before permanent deletion</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Sections of these Terms that by their nature should survive termination will continue to apply,
                    including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
                  </p>
                </div>
              </div>

              {/* Section 16 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">16. Governing Law and Dispute Resolution</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    These Terms are governed by the laws of the State of California, United States, without regard to
                    conflict of law principles.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Dispute Resolution:</strong> Any dispute arising from these Terms or
                    the Service shall be resolved through binding arbitration in accordance with the rules of the American
                    Arbitration Association. The arbitration shall take place in San Francisco, California.
                  </p>
                  <p className="leading-relaxed">
                    You agree to waive any right to a jury trial or to participate in a class action lawsuit. However, you
                    may bring claims in small claims court if they qualify.
                  </p>
                  <p className="leading-relaxed">
                    Nothing in these Terms prevents either party from seeking injunctive or other equitable relief in
                    court to prevent actual or threatened infringement, misappropriation, or violation of intellectual
                    property rights.
                  </p>
                </div>
              </div>

              {/* Section 17 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">17. Third-Party Services and Links</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    The Service may contain links to third-party websites, services, or integrations that are not owned or
                    controlled by WriteWorks AI. We are not responsible for the content, privacy policies, or practices of
                    third-party services.
                  </p>
                  <p className="leading-relaxed">
                    Your use of third-party services is governed by their respective terms and conditions. We recommend
                    reviewing their policies before use.
                  </p>
                </div>
              </div>

              {/* Section 18 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">18. General Provisions</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    <strong className="text-white">Entire Agreement:</strong> These Terms, together with our Privacy
                    Policy, constitute the entire agreement between you and WriteWorks AI regarding the Service.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Severability:</strong> If any provision of these Terms is found to be
                    invalid or unenforceable, the remaining provisions will continue in full force and effect.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Waiver:</strong> Our failure to enforce any provision of these Terms
                    does not constitute a waiver of that provision or any other provision.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Assignment:</strong> You may not assign or transfer these Terms or your
                    account without our prior written consent. We may assign these Terms without restriction.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Force Majeure:</strong> We are not liable for any failure or delay in
                    performance due to circumstances beyond our reasonable control, including natural disasters, war,
                    terrorism, labor disputes, or government actions.
                  </p>
                </div>
              </div>

              {/* Section 19 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">19. Contact Information</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-4">
                    <p className="text-white font-semibold mb-2">WriteWorks AI</p>
                    <p>123 Market Street, Suite 400</p>
                    <p>San Francisco, CA 94103</p>
                    <p className="mt-3">
                      Email:{" "}
                      <a href="mailto:legal@writeworks.ai" className="text-[#6366F1] hover:text-[#8B5CF6]">
                        legal@writeworks.ai
                      </a>
                    </p>
                    <p>
                      Support:{" "}
                      <a href="mailto:support@writeworks.ai" className="text-[#6366F1] hover:text-[#8B5CF6]">
                        support@writeworks.ai
                      </a>
                    </p>
                    <p>
                      Phone:{" "}
                      <a href="tel:+15551234567" className="text-[#6366F1] hover:text-[#8B5CF6]">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#6366F1] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Important Notice</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      By using WriteWorks AI, you acknowledge that you have read, understood, and agree to be bound by
                      these Terms of Service. If you do not agree with these Terms, please discontinue use of the Service
                      immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Questions About Our Terms?</h2>
            <p className="text-base md:text-lg text-white/70 mb-8">
              Our team is here to help. Contact us if you have any questions or need clarification.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
