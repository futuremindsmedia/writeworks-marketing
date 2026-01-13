"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Presentation,
  User,
  Newspaper,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { resources } from "@/lib/resources-data"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Pagination from "@/components/pagination"

// Resource types
type ResourceType = "all" | "news" | "blog" | "guide" | "case-study" | "whitepaper" | "video" | "webinar"

interface Resource {
  id: string
  slug: string
  title: string
  description: string
  category: Exclude<ResourceType, "all">
  date: string
  readTime: string
  image: string
  author: string
  tags: string[]
}

const categories = [
  { id: "all" as ResourceType, label: "All Resources", icon: BookOpen },
  { id: "news" as ResourceType, label: "News", icon: Newspaper },
  { id: "blog" as ResourceType, label: "Blog Posts", icon: FileText },
  { id: "guide" as ResourceType, label: "Guides", icon: BookOpen },
  { id: "case-study" as ResourceType, label: "Case Studies", icon: Presentation },
  { id: "whitepaper" as ResourceType, label: "Whitepapers", icon: FileText },
  { id: "video" as ResourceType, label: "Videos", icon: Video },
  { id: "webinar" as ResourceType, label: "Webinars", icon: Presentation },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<ResourceType>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const router = useRouter()

  // Filter resources based on search and category
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        searchQuery === "" ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = activeCategory === "all" || resource.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage)
  const paginatedResources = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredResources.slice(startIndex, endIndex)
  }, [filteredResources, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, activeCategory])

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Search */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumbs items={[{ label: "Resources" }]} />

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              Resources & Insights for LLM Optimization
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-8 text-pretty">
              Guides, case studies, and insights to help you maximize your brand's visibility across AI platforms
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 border-b border-white/10 sticky top-[73px] bg-black/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-lg shadow-white/10"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(" ")[0]}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-3 md:px-4">
          {filteredResources.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/70 text-lg">No resources found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {paginatedResources.map((resource) => (
                  <div
                    key={resource.id}
                    onClick={() => router.push(`/resources/${resource.slug}`)}
                    className="group rounded-xl bg-white/5 border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 h-full cursor-pointer overflow-hidden"
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
                        <Link
                          href={`/resources/author/${resource.author.toLowerCase().replace(" ", "-")}`}
                          className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors group/author"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <User className="w-3 h-3" />
                          <span className="border-b border-transparent group-hover/author:border-white/40">
                            {resource.author}
                          </span>
                        </Link>
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
                  </div>
                ))}
              </div>

              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </>
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
