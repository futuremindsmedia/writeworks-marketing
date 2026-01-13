import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, Newspaper } from "lucide-react"
import Link from "next/link"
import { ArticleProgressBar } from "@/components/article-progress-bar"
import { TableOfContents } from "@/components/table-of-contents"
import { KeyHighlights } from "@/components/key-highlights"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"
import { getResourceBySlug, getRelatedResources } from "@/lib/data/resources"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const article = await getResourceBySlug(slug)

  if (!article || article.category !== "news") {
    return {
      title: "News Article Not Found",
    }
  }

  return {
    title: `${article.title} | WriteWorks News`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.modifiedDate || article.date,
      authors: [article.author],
      images: [article.image],
    },
  }
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const article = await getResourceBySlug(slug)

  if (!article || article.category !== "news") {
    notFound()
  }

  const relatedArticles = (await getRelatedResources(slug, 2)).filter((r) => r.category === "news")

  // NewsArticle schema for Google News compliance
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    dateModified: article.modifiedDate || article.date,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      url: `https://writeworks.ai/resources/author/${article.authorSlug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "WriteWorks",
      logo: {
        "@type": "ImageObject",
        url: "https://writeworks.ai/logo.png",
        width: 600,
        height: 60,
      },
      url: "https://writeworks.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://writeworks.ai/news/${params.slug}`,
    },
    articleSection: "Technology",
    keywords: article.tags.join(", "),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }} />

      <ArticleProgressBar />

      <div className="min-h-screen bg-black">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-3 md:px-4 pt-6 text-center md:text-left">
          <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: article.title }]} />
        </div>

        <section className="pt-4 md:pt-6 pb-12 md:pb-16">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white flex items-center gap-1.5">
                  <Newspaper className="w-3 h-3" />
                  NEWS
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">{article.title}</h1>
              <p className="text-lg text-white/70 mb-8">{article.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 pb-8 border-b border-white/10">
                <Link
                  href={`/resources/author/${article.authorSlug}`}
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <User className="w-4 h-4" />
                  <span className="text-white border-b-2 border-transparent group-hover:border-white/40">
                    {article.author}
                  </span>
                  <span className="hidden md:inline">• {article.authorRole}</span>
                </Link>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
                {article.modifiedDate && article.modifiedDate !== article.date && (
                  <div className="text-xs text-white/70">
                    Updated:{" "}
                    {new Date(article.modifiedDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
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
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[250px_1fr] gap-8 lg:gap-12">
                <aside className="hidden lg:block">
                  <TableOfContents content={article.content} />
                </aside>

                <div className="max-w-3xl">
                  <KeyHighlights highlights={article.keyHighlights} />

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
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />

                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/news/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
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
                      <Link href={`/resources/author/${article.authorSlug}`} className="flex gap-4 items-start group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                            <User className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-white/90 transition-colors">
                            {article.author}
                          </h4>
                          <p className="text-sm text-white/70 mb-2">{article.authorRole}</p>
                          <p className="text-sm text-white/70 leading-relaxed">{article.authorBio}</p>
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
            </div>
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className="py-16 md:py-20 border-t border-white/10">
            <div className="container mx-auto px-3 md:px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Related News</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/news/${related.slug}`}>
                      <div className="group rounded-xl bg-white/5 border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 p-6 h-full">
                        <span className="text-xs text-white/70 mb-2 block flex items-center gap-1">
                          <Newspaper className="w-3 h-3" />
                          NEWS
                        </span>
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

        {/* Stay Updated with AI News Section */}
        <section className="py-16 md:py-20 bg-black border-t border-white/10">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Stay Updated with AI News</h2>
              <p className="text-base text-white/70 mb-8">
                Subscribe to get the latest AI and LLM industry news delivered to your inbox.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 px-10 shadow-lg"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">Subscribe Now</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
