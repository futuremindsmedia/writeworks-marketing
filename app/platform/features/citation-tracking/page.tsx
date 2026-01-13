import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Link2, FileText, CheckCircle, Search, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Citation Tracking Software | WriteWorks AI",
  description:
    "Track sources, manage citations, and ensure proper attribution with intelligent citation tracking tools.",
}

export default function CitationTrackingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs
            items={[
              { label: "Platform", href: "/platform" },
              { label: "Features", href: "/platform/features" },
              { label: "Citation Tracking" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Citation Tracking Software</h1>
            <p className="text-xl text-white/70 mb-8">
              Track sources, manage citations, and ensure proper attribution with intelligent citation tracking tools
              that maintain credibility and compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Citation Tracking Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Link2 className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Source Management</h3>
              <p className="text-white/70">Keep track of all sources and references used in your content.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <CheckCircle className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Proper Attribution</h3>
              <p className="text-white/70">Ensure all sources are properly cited and attributed in your content.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <BookOpen className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Credibility</h3>
              <p className="text-white/70">Build trust with properly sourced and cited content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How Citation Tracking Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Add Sources</h3>
              <p className="text-white/70 text-sm">Record sources and references as you create content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Link Citations</h3>
              <p className="text-white/70 text-sm">Connect citations to specific content sections</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Format Citations</h3>
              <p className="text-white/70 text-sm">Automatically format citations in your preferred style</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Verify Sources</h3>
              <p className="text-white/70 text-sm">Check that all sources are properly cited</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What's Included</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Link2, text: "Source link management" },
                { icon: FileText, text: "Citation formatting" },
                { icon: CheckCircle, text: "Attribution verification" },
                { icon: Search, text: "Source search & discovery" },
                { icon: BookOpen, text: "Bibliography generation" },
                { icon: ExternalLink, text: "External link tracking" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white/70">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Track Your Citations?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Start managing sources and citations today for more credible, trustworthy content.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
