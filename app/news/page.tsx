"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, ArrowRight, User, Newspaper } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { resources } from "@/lib/resources-data"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Pagination from "@/components/pagination"

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const router = useRouter()

  // Filter only news articles
  const newsArticles = useMemo(() => {
    return resources
      .filter((resource) => resource.category === "news")
      .filter((resource) => {
        if (searchQuery === "") return true
        return (
          resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [searchQuery])

  const totalPages = Math.ceil(newsArticles.length / itemsPerPage)
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return newsArticles.slice(startIndex, endIndex)
  }, [newsArticles, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-black">
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumbs items={[{ label: "News" }]} />

            <div className="flex items-center justify-center gap-2 mb-4">
              <Newspaper className="w-8 h-8 text-white" />
              <h1 className="text-3xl md:text-5xl font-bold text-white text-balance">AI & LLM Industry News</h1>
            </div>
            <p className="text-base md:text-lg text-white/70 mb-8 text-pretty">
              Stay updated with the latest developments in AI search, LLM technology, and content optimization
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          {newsArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/70 text-lg">No news articles found matching your search.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {paginatedArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => router.push(`/news/${article.slug}`)}
                    className="group rounded-xl bg-white/5 border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 h-full cursor-pointer overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white flex items-center gap-1">
                          <Newspaper className="w-3 h-3" />
                          NEWS
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-4 line-clamp-2 flex-grow">{article.description}</p>

                      <div className="space-y-3 pt-3 border-t border-white/10">
                        <Link
                          href={`/resources/author/${article.authorSlug}`}
                          className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors group/author"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <User className="w-3 h-3" />
                          <span className="border-b border-transparent group-hover/author:border-white/40">
                            {article.author}
                          </span>
                        </Link>
                        <div className="flex items-center justify-between text-xs text-white/70">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(article.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Stay Ahead of AI Trends</h2>
            <p className="text-base text-white/70 mb-8">
              Get the latest AI and LLM news delivered to your inbox. Subscribe to our newsletter.
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
  )
}
