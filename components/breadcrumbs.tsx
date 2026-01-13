import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex justify-center md:justify-start">
      <ol className="flex flex-wrap items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {/* Home */}
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            href="/"
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors group"
            itemProp="item"
          >
            <Home className="w-4 h-4" />
            <span itemProp="name" className="sr-only">
              Home
            </span>
            <meta itemProp="position" content="1" />
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            <ChevronRight className="w-4 h-4 text-white/70" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-white/70 hover:text-white transition-colors border-b-2 border-transparent hover:border-white/40"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-white font-medium" itemProp="name">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
