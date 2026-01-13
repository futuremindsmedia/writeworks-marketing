import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import { resources } from "@/lib/resources-data"
import { Breadcrumbs } from "@/components/breadcrumbs"

// Define valid category slugs
const validCategories = ["blog", "guide", "case-study", "whitepaper", "video", "webinar"] as const
type CategorySlug = (typeof validCategories)[number]

// Category metadata
const categoryMetadata: Record<CategorySlug, { title: string; description: string; label: string }> = {
  blog: {
    title: "Blog Posts",
    description: "Latest insights, updates, and thought leadership on AI-powered content intelligence",
    label: "Blog Posts",
  },
  guide: {
    title: "Guides",
    description: "Step-by-step tutorials and best practices for optimizing your content strategy",
    label: "Guides",
  },
  "case-study": {
    title: "Case Studies",
    description: "Real-world success stories from marketing teams using WriteWorks AI",
    label: "Case Studies",
  },
  whitepaper: {
    title: "Whitepapers",
    description: "In-depth research and analysis on content intelligence and AI trends",
    label: "Whitepapers",
  },
  video: {
    title: "Videos",
    description: "Visual learning content and product demonstrations",
    label: "Videos",
  },
  webinar: {
    title: "Webinars",
    description: "Live and recorded sessions with industry experts",
    label: "Webinars",
  },
}

export async function generateStaticParams() {
  return validCategories.map((slug) => ({ slug }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Validate category
  if (!validCategories.includes(slug as CategorySlug)) {
    notFound()
  }

  const category = slug as CategorySlug
  const metadata = categoryMetadata[category]

  // Filter resources by category
  const categoryResources = resources.filter((resource) => resource.category === category)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pb-16 bg-black">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: metadata.label }]} />

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">{metadata.title}</h1>
            <p className="text-base md:text-lg text-white/70 text-pretty">{metadata.description}</p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          {categoryResources.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/70 text-lg">No {metadata.label.toLowerCase()} available yet.</p>
              <Button className="mt-6" asChild>
                <Link href="/resources">View All Resources</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {categoryResources.map((resource) => (
                <Link
                  key={resource.id}
                  href={`/resources/${resource.slug}`}
                  className="group rounded-xl bg-white/5 border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 h-full overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white">
                        {resource.category.replace("-", " ").toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-4 line-clamp-2 flex-grow">{resource.description}</p>

                    <div className="space-y-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <User className="w-3 h-3" />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/70">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(resource.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {resource.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Content?</h2>
            <p className="text-base text-white/70 mb-8">
              Start using WriteWorks to drive citations and mentions from ChatGPT, Claude, Perplexity, and more.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10 shadow-lg"
              asChild
            >
              <a href="https://app.writeworks.ai/sign-up">Start Free</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
