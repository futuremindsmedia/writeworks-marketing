import type { Metadata } from "next"
import { Shield, Lock, Eye, UserCheck, FileText, Globe } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Privacy Policy | WriteWorks AI",
  description:
    "Learn how WriteWorks AI collects, uses, and protects your personal information. Our commitment to data privacy and security.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm text-white/70">Last Updated: January 26, 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-base md:text-lg text-white/70">
              At WriteWorks AI, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data.
            </p>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Our Privacy Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Security</h3>
                <p className="text-sm text-white/70">
                  We use industry-leading security measures to protect your data from unauthorized access.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
                <p className="text-sm text-white/70">
                  We are clear and transparent about what data we collect and how we use it.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-white/20 hover:bg-white/[0.07] transition-all">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Your Control</h3>
                <p className="text-sm text-white/70">
                  You have control over your data and can request access, correction, or deletion at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#6366F1]" />
                  1. Information We Collect
                </h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">Account Information:</strong> Name, email address, company name,
                      and other registration details when you create an account.
                    </li>
                    <li>
                      <strong className="text-white">Content Data:</strong> Content you create, upload, or process
                      through our platform, including drafts, published content, and related metadata.
                    </li>
                    <li>
                      <strong className="text-white">Payment Information:</strong> Billing details and payment card
                      information (processed securely through our payment processor).
                    </li>
                    <li>
                      <strong className="text-white">Communication Data:</strong> Information from your communications
                      with us, including support requests and feedback.
                    </li>
                    <li>
                      <strong className="text-white">Usage Data:</strong> Information about how you interact with our
                      services, including features used, pages viewed, and actions taken.
                    </li>
                    <li>
                      <strong className="text-white">Technical Data:</strong> IP address, browser type, device
                      information, operating system, and other technical identifiers.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#6366F1]" />
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your transactions and manage your account</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Develop new features and functionality</li>
                    <li>Monitor and analyze usage patterns and trends</li>
                    <li>Detect, prevent, and address technical issues and security threats</li>
                    <li>
                      Comply with legal obligations and protect our rights, privacy, safety, or property, and that of
                      our users
                    </li>
                    <li>
                      Send you marketing communications about our products and services (with your consent where
                      required)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. AI and Machine Learning</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    WriteWorks AI uses artificial intelligence and machine learning technologies to provide our content
                    optimization services. Here's how we handle your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">Content Processing:</strong> Your content is processed by our AI
                      systems to provide optimization recommendations and generate content suggestions.
                    </li>
                    <li>
                      <strong className="text-white">Model Training:</strong> We may use aggregated, anonymized data to
                      improve our AI models. We never use your specific content to train models without explicit
                      consent.
                    </li>
                    <li>
                      <strong className="text-white">Data Isolation:</strong> Your data is isolated and not shared with
                      other customers or used for their benefit.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">We may share your information in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">Service Providers:</strong> We work with third-party service
                      providers who perform services on our behalf, such as hosting, payment processing, and analytics.
                    </li>
                    <li>
                      <strong className="text-white">Business Transfers:</strong> In connection with any merger, sale
                      of company assets, financing, or acquisition of all or a portion of our business.
                    </li>
                    <li>
                      <strong className="text-white">Legal Requirements:</strong> When required by law or to respond to
                      legal process, or to protect the rights, property, or safety of WriteWorks AI, our users, or
                      others.
                    </li>
                    <li>
                      <strong className="text-white">With Your Consent:</strong> When you explicitly consent to sharing
                      your information with third parties.
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    We do not sell your personal information to third parties for their marketing purposes.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information,
                    including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection and security</li>
                    <li>Incident response and breach notification procedures</li>
                    <li>SOC 2 Type II certification and ISO 27001 compliance</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    While we strive to protect your information, no security system is impenetrable. We cannot guarantee
                    the absolute security of your data.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services and fulfill the
                    purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted
                    by law.
                  </p>
                  <p className="leading-relaxed">
                    When you close your account, we will delete or anonymize your personal information within 90 days,
                    except where we are required to retain it for legal, accounting, or security purposes.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">Depending on your location, you may have certain rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">Access:</strong> Request access to the personal information we hold
                      about you
                    </li>
                    <li>
                      <strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete
                      information
                    </li>
                    <li>
                      <strong className="text-white">Deletion:</strong> Request deletion of your personal information
                    </li>
                    <li>
                      <strong className="text-white">Portability:</strong> Request a copy of your data in a
                      machine-readable format
                    </li>
                    <li>
                      <strong className="text-white">Objection:</strong> Object to processing of your personal
                      information in certain circumstances
                    </li>
                    <li>
                      <strong className="text-white">Restriction:</strong> Request restriction of processing in certain
                      circumstances
                    </li>
                    <li>
                      <strong className="text-white">Withdraw Consent:</strong> Withdraw consent where processing is
                      based on consent
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:privacy@writeworks.ai" className="text-[#6366F1] hover:text-[#8B5CF6]">
                      privacy@writeworks.ai
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    WriteWorks AI is based in the United States. If you are accessing our services from outside the
                    United States, please be aware that your information may be transferred to, stored, and processed in
                    the United States and other countries where our service providers operate.
                  </p>
                  <p className="leading-relaxed">
                    We ensure that such transfers comply with applicable data protection laws and implement appropriate
                    safeguards, such as Standard Contractual Clauses approved by the European Commission.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We use cookies and similar tracking technologies to collect information about your browsing
                    activities and provide personalized features. You can control cookies through your browser settings.
                  </p>
                  <p className="leading-relaxed">
                    For more information about our use of cookies, please see our Cookie Policy.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect
                    personal information from children. If you become aware that a child has provided us with personal
                    information, please contact us so we can take appropriate action.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you
                    to review this Privacy Policy periodically.
                  </p>
                  <p className="leading-relaxed">
                    Your continued use of our services after any changes indicates your acceptance of the updated
                    Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy
                    practices, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-4">
                    <p className="text-white font-semibold mb-2">WriteWorks AI</p>
                    <p>123 Market Street, Suite 400</p>
                    <p>San Francisco, CA 94103</p>
                    <p className="mt-3">
                      Email:{" "}
                      <a href="mailto:privacy@writeworks.ai" className="text-[#6366F1] hover:text-[#8B5CF6]">
                        privacy@writeworks.ai
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

              {/* GDPR Section */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">13. GDPR Compliance (For EU Users)</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    If you are located in the European Economic Area (EEA), you have additional rights under the General
                    Data Protection Regulation (GDPR):
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to lodge a complaint with your local data protection authority</li>
                    <li>The right to receive information about how we process your personal data</li>
                    <li>The right to not be subject to automated decision-making, including profiling</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Our legal basis for processing your personal information includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Performance of a contract with you</li>
                    <li>Compliance with legal obligations</li>
                    <li>Your consent (which you can withdraw at any time)</li>
                    <li>Our legitimate business interests</li>
                  </ul>
                </div>
              </div>

              {/* CCPA Section */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">14. CCPA Rights (For California Users)</h2>
                <div className="space-y-4 text-white/70">
                  <p className="leading-relaxed">
                    If you are a California resident, you have specific rights under the California Consumer Privacy Act
                    (CCPA):
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to know what personal information we collect, use, and disclose</li>
                    <li>Right to request deletion of your personal information</li>
                    <li>Right to opt-out of the sale of your personal information (we do not sell personal information)</li>
                    <li>Right to non-discrimination for exercising your CCPA rights</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:privacy@writeworks.ai" className="text-[#6366F1] hover:text-[#8B5CF6]">
                      privacy@writeworks.ai
                    </a>
                    .
                  </p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Questions About Our Privacy Policy?</h2>
            <p className="text-base md:text-lg text-white/70 mb-8">
              Our team is here to help. Contact us if you have any questions or concerns.
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
