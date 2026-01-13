import { notFound } from "next/navigation"
import { User, ArrowRight, Newspaper } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"
import { getResourcesByTag } from "@/lib/data/resources"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const tagName = decodeURIComponent(slug).replace(/-/g, " ")

  return {
    title: `${tagName} News | WriteWorks`,
    description: `Browse all news articles tagged with ${tagName}`,
  }
}

export default async function NewsTagPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const tagName = decodeURIComponent(slug).replace(/-/g, " ")
  const allResources = await getResourcesByTag(tagName)
  const newsArticles = allResources.filter((r) => r.category === "news")

  if (!newsArticles || newsArticles.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-3 md:px-4 pt-6 text-center md:text-left">
        <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: `Tag: ${tagName}` }]} />
      </div>

      {/* Hero Section */}
      <section className="pt-4 md:pt-6 pb-12 md:pb-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white flex items-center gap-1.5 w-fit">
                <Newspaper className="w-3 h-3" />
                NEWS
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              News tagged with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                {tagName}
              </span>
            </h1>
            <p className="text-lg text-white/70">
              {newsArticles.length} {newsArticles.length === 1 ? "article" : "articles"} found
            </p>
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <Link key={article.slug} href={`/news/${article.slug}`}>
                  <article className="group rounded-xl bg-white/5 border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-white/70 flex items-center gap-1">
                          <Newspaper className="w-3 h-3" />
                          NEWS
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="text-xs text-white/70">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-4 line-clamp-2 flex-1">{article.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-xs text-white/70">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-white group-hover:text-white/90 transition-colors">
                          Read
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
