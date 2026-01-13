"use client"

import { useEffect, useState } from "react"
import { List } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Extract headings from HTML content
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const headingElements = doc.querySelectorAll("h2, h3")

    const items: TOCItem[] = Array.from(headingElements).map((heading, index) => {
      const id = `heading-${index}`
      const text = heading.textContent || ""
      const level = Number.parseInt(heading.tagName.substring(1))
      return { id, text, level }
    })

    setHeadings(items)

    // Add IDs to actual headings in the DOM
    setTimeout(() => {
      const actualHeadings = document.querySelectorAll(".article-content h2, .article-content h3")
      actualHeadings.forEach((heading, index) => {
        heading.id = `heading-${index}`
      })
    }, 100)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-[1px]">
        <div className="rounded-[11px] bg-black/90 backdrop-blur-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <List className="w-4 h-4 text-[#A5B4FC]" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wide">Table of Contents</h3>
          </div>
          <nav>
            <ul className="space-y-2">
              {headings.map(({ id, text, level }) => (
                <li key={id} style={{ paddingLeft: level === 3 ? "0.75rem" : "0" }}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className={`block text-sm py-1 transition-colors border-l-2 pl-3 ${
                      activeId === id
                        ? "border-[#6366F1] text-white font-medium"
                        : "border-transparent text-white/70 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
