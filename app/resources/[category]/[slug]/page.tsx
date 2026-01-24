import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ArticleProgressBar } from "@/components/article-progress-bar"
import { KeyHighlights } from "@/components/key-highlights"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"
import { getResourceBySlug, getRelatedResources, getResourceUrl } from "@/lib/data/resources"

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const resource = await getResourceBySlug(slug)

  if (!resource) {
    return {
      title: "Resource Not Found",
    }
  }

  return {
    title: `${resource.title} | WriteWorks Resources`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      type: "article",
      publishedTime: resource.date,
      authors: [resource.author],
      images: [resource.image],
    },
  }
}

export default async function ResourceDetailPage({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const { slug, category } = params
  const resource = await getResourceBySlug(slug)

  if (!resource) {
    notFound()
  }

  // Validate that the category in the URL matches the resource category
  const categoryMap: Record<string, string> = {
    blogs: "blog",
    guides: "guide",
    "case-studies": "case-study",
    whitepapers: "whitepaper",
    videos: "video",
    webinars: "webinar",
    news: "news",
  }
  
  const expectedCategory = categoryMap[category]
  if (expectedCategory && expectedCategory !== resource.category) {
    notFound()
  }

  const relatedResources = await getRelatedResources(slug, 2)

  // Get category display name
  const categoryDisplayMap: Record<string, string> = {
    blogs: "Blog",
    guides: "Guide",
    "case-studies": "Case Study",
    whitepapers: "Whitepaper",
    videos: "Video",
    webinars: "Webinar",
    news: "News",
  }
  const categoryDisplay = categoryDisplayMap[category] || resource.category

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    image: resource.image,
    datePublished: resource.date,
    dateModified: resource.date,
    author: {
      "@type": "Person",
      name: resource.author,
      jobTitle: resource.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "WriteWorks",
      logo: {
        "@type": "ImageObject",
        url: "https://writeworks.ai/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://writeworks.ai${getResourceUrl(resource)}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <ArticleProgressBar />

      <div className="min-h-screen bg-black">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-3 md:px-4 pt-6 text-center md:text-left">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: resource.title }]} />
        </div>

        {/* Hero Section */}
        <section className="pt-4 md:pt-6 pb-12 md:pb-16">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white">
                  {categoryDisplay}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">{resource.title}</h1>
              <p className="text-lg text-white/70 mb-8">{resource.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 pb-8 border-b border-white/10">
                <Link
                  href={`/resources/author/${resource.authorSlug}`}
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <User className="w-4 h-4" />
                  <span className="text-white border-b-2 border-transparent group-hover:border-white/40">
                    {resource.author}
                  </span>
                  <span className="hidden md:inline">• {resource.authorRole}</span>
                </Link>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(resource.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {resource.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-4xl mx-auto">
              <KeyHighlights highlights={resource.keyHighlights} />

              <div
                className="prose prose-invert prose-lg max-w-none article-content
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:scroll-mt-24
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:scroll-mt-24
                prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-white/80 prose-ul:mb-6
                prose-li:mb-2
                prose-strong:text-white
                prose-a:text-white prose-a:no-underline prose-a:border-b prose-a:border-white/40 hover:prose-a:border-white prose-a:transition-colors"
                dangerouslySetInnerHTML={{ __html: resource.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/resources/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/70 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">About the Author</h3>
                  <Link href={`/resources/author/${resource.authorSlug}`} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-white/90 transition-colors">
                        {resource.author}
                      </h4>
                      <p className="text-sm text-white/70 mb-2">{resource.authorRole}</p>
                      <p className="text-sm text-white/70 leading-relaxed">{resource.authorBio}</p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-white group-hover:text-white/90 transition-colors">
                        View author profile
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <section className="py-16 md:py-20 border-t border-white/10">
            <div className="container mx-auto px-3 md:px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedResources.map((related) => (
                    <Link key={related.slug} href={getResourceUrl(related)}>
                      <div className="group rounded-xl bg-white/5 border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 p-6 h-full">
                        <span className="text-xs text-white/70 mb-2 block">{related.category}</span>
                        <h3 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors mb-2">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white">
                          Read more
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-black border-t border-white/10">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Start Optimizing Your Content</h2>
              <p className="text-base text-white/70 mb-6">
                Use WriteWorks to implement these strategies and drive more citations from AI platforms.
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
    </>
  )
}
