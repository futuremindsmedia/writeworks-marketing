import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { GitBranch, History, FileText, Users, Shield, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Version Control Software | WriteWorks AI",
  description:
    "Track every change, restore previous versions, and maintain complete content history with intelligent version control.",
}

export default function VersionControlPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs
            items={[
              { label: "Platform", href: "/platform" },
              { label: "Features", href: "/platform/features" },
              { label: "Version Control" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Version Control Software</h1>
            <p className="text-xl text-white/70 mb-8">
              Track every change, restore previous versions, and maintain complete content history with intelligent
              version control that gives you confidence and control.
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Version Control Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <History className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Complete History</h3>
              <p className="text-white/70">
                Track every change made to your content with detailed version history and timestamps.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <GitBranch className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Easy Restoration</h3>
              <p className="text-white/70">
                Restore previous versions instantly with one-click rollback functionality.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Shield className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Change Protection</h3>
              <p className="text-white/70">
                Protect your content from accidental changes with comprehensive version tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How Version Control Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Automatic Tracking</h3>
              <p className="text-white/70 text-sm">Every change is automatically saved and tracked with timestamps</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">View History</h3>
              <p className="text-white/70 text-sm">Browse complete version history with detailed change logs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compare Versions</h3>
              <p className="text-white/70 text-sm">See exactly what changed between any two versions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Restore Instantly</h3>
              <p className="text-white/70 text-sm">Roll back to any previous version with one click</p>
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
                { icon: History, text: "Unlimited version history" },
                { icon: GitBranch, text: "One-click version restoration" },
                { icon: FileText, text: "Detailed change tracking" },
                { icon: Users, text: "Author attribution" },
                { icon: Clock, text: "Timestamp tracking" },
                { icon: Shield, text: "Version comparison tools" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Track Your Content History?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Start using version control today and never worry about losing content changes again.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
