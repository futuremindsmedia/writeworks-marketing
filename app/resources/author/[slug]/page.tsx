import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowRight, Mail, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Pagination from "@/components/pagination"
import type { Metadata } from "next"

const authors = {
  "sarah-chen": {
    name: "Sarah Chen",
    role: "Content Director",
    bio: "Sarah is a content strategist specializing in AI optimization with over 10 years of experience in digital marketing and SEO. She leads the content team at WriteWorks and has helped hundreds of brands increase their LLM visibility.",
    image: "/professional-woman-portrait.png",
    email: "sarah@writeworks.ai",
    linkedin: "https://linkedin.com/in/sarahchen",
    twitter: "https://twitter.com/sarahchen",
    articles: [
      {
        slug: "llm-optimization-guide-2025",
        title: "The Complete Guide to LLM Optimization in 2025",
        category: "Guide",
        date: "2025-01-15",
        readTime: "12 min read",
        image: "/ai-optimization-guide.jpg",
      },
    ],
  },
  "marcus-rodriguez": {
    name: "Marcus Rodriguez",
    role: "AI Research Lead",
    bio: "Marcus leads AI research at WriteWorks, focusing on LLM citation behavior and optimization strategies. With a PhD in Computer Science and 8 years of experience in AI, he's at the forefront of understanding how AI platforms select and cite sources.",
    image: "/professional-man-portrait.png",
    email: "marcus@writeworks.ai",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    twitter: "https://twitter.com/marcusrodriguez",
    articles: [
      {
        slug: "chatgpt-citation-patterns",
        title: "Understanding ChatGPT Citation Patterns",
        category: "Blog Post",
        date: "2025-01-12",
        readTime: "8 min read",
        image: "/chatgpt-citations.jpg",
      },
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const author = authors[params.slug as keyof typeof authors]

  if (!author) {
    return {
      title: "Author Not Found",
    }
  }

  return {
    title: `${author.name} - ${author.role} | WriteWorks`,
    description: author.bio,
  }
}

export default function AuthorPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { page?: string }
}) {
  const author = authors[params.slug as keyof typeof authors]

  if (!author) {
    notFound()
  }

  const currentPage = Number(searchParams.page) || 1
  const itemsPerPage = 6
  const totalPages = Math.ceil(author.articles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedArticles = author.articles.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-3 md:px-4 pt-8">
        <Breadcrumbs
          items={[
            { label: "Resources", href: "/resources" },
            { label: "Authors", href: "/resources" },
            { label: author.name },
          ]}
        />
      </div>

      {/* Author Profile */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl bg-white/5 border border-white/10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20">
                    <img
                      src={author.image || "/placeholder.svg"}
                      alt={author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{author.name}</h1>
                  <p className="text-lg text-white/70 mb-4">{author.role}</p>
                  <p className="text-white/70 leading-relaxed mb-6">{author.bio}</p>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${author.email}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-sm text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-sm text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href={author.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-sm text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles by Author */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Articles by {author.name.split(" ")[0]}
              <span className="text-white/70 text-lg ml-2">
                ({author.articles.length} {author.articles.length === 1 ? "article" : "articles"})
              </span>
            </h2>
            <div className="grid gap-6">
              {paginatedArticles.map((article) => (
                <Link key={article.slug} href={`/resources/${article.slug}`}>
                  <div className="group rounded-xl bg-white/5 border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-64 aspect-video overflow-hidden flex-shrink-0">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white inline-block mb-3">
                          {article.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                          {article.title}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/70 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4">
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
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  basePath={`/resources/author/${params.slug}`}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
