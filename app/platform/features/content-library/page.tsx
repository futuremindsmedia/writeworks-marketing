import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { FolderOpen, Search, Tag, Filter, Star, Archive } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Content Library Software | WriteWorks AI",
  description: "Organize, search, and manage all your content assets in one centralized, intelligent library.",
}

export default function ContentLibraryPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs
            items={[
              { label: "Platform", href: "/platform" },
              { label: "Features", href: "/platform/features" },
              { label: "Content Library" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Content Library Software</h1>
            <p className="text-xl text-white/70 mb-8">
              Organize, search, and manage all your content assets in one centralized, intelligent library that makes
              finding and reusing content effortless.
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Content Library Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <FolderOpen className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Centralized Storage</h3>
              <p className="text-white/70">
                Keep all your content assets organized in one secure, accessible location.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Search className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Powerful Search</h3>
              <p className="text-white/70">
                Find any content instantly with advanced search and filtering capabilities.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Tag className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Smart Organization</h3>
              <p className="text-white/70">
                Organize content with tags, categories, and custom metadata for easy retrieval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How Content Library Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Upload Content</h3>
              <p className="text-white/70 text-sm">Add content assets to your centralized library</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Organize & Tag</h3>
              <p className="text-white/70 text-sm">Apply tags, categories, and metadata for organization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Search & Filter</h3>
              <p className="text-white/70 text-sm">Find content quickly with powerful search tools</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reuse & Share</h3>
              <p className="text-white/70 text-sm">Access and share content across your team</p>
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
                { icon: FolderOpen, text: "Unlimited storage capacity" },
                { icon: Search, text: "Advanced search & filtering" },
                { icon: Tag, text: "Custom tags & categories" },
                { icon: Filter, text: "Smart content organization" },
                { icon: Star, text: "Favorites & bookmarks" },
                { icon: Archive, text: "Archive & restore functionality" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Organize Your Content?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Start building your content library today and make content management effortless.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
