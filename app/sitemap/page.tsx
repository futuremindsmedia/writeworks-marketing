import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | WriteWorks AI",
  description: "Complete sitemap of WriteWorks AI - Your Content Intelligence Platform",
}

function getRoutes() {
  const routes: { [key: string]: { name: string; path: string }[] } = {
    "Main Pages": [
      { name: "Home", path: "/" },
      { name: "Platform", path: "/platform" },
      { name: "Pricing", path: "/pricing" },
      { name: "Enterprise", path: "/enterprise" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    "Platform Features": [
      { name: "Features Overview", path: "/platform/features" },
      { name: "Content Editor", path: "/platform/features/content-editor" },
      { name: "Rich Text Editor", path: "/platform/features/rich-text-editor" },
      { name: "AI Text Actions", path: "/platform/features/ai-text-actions" },
      { name: "Content Writing Agents", path: "/platform/features/ai-agents" },
      { name: "Brand Management", path: "/platform/features/brand-management" },
      { name: "Project Management", path: "/platform/features/project-management" },
      { name: "Workflow & Collaboration", path: "/platform/features/workflow-collaboration" },
      { name: "Analytics", path: "/platform/features/analytics" },
      { name: "Security & Compliance", path: "/platform/features/security-compliance" },
      { name: "Role-Based Access", path: "/platform/features/role-based-access" },
      { name: "Content Templates", path: "/platform/features/content-templates" },
      { name: "Content Calendar", path: "/platform/features/content-calendar" },
      { name: "Approval Workflows", path: "/platform/features/approval-workflows" },
      { name: "Knowledge Base", path: "/platform/features/knowledge-base" },
      { name: "Citation Tracking", path: "/platform/features/citation-tracking" },
      { name: "Performance Insights", path: "/platform/features/performance-insights" },
      { name: "Version Control", path: "/platform/features/version-control" },
      { name: "Audit Logs", path: "/platform/features/audit-logs" },
      { name: "AI Chat Assistant", path: "/platform/features/ai-chat-assistant" },
      { name: "Content Library", path: "/platform/features/content-library" },
      { name: "Audience Profiles", path: "/platform/features/audience-profiles" },
      { name: "Custom Reports", path: "/platform/features/custom-reports" },
      { name: "Content Optimization", path: "/platform/features/content-optimization" },
      { name: "GDPR Compliance", path: "/platform/features/gdpr-compliance" },
    ],
    Solutions: [
      { name: "Solutions Overview", path: "/solutions" },
      { name: "Brand Marketing", path: "/solutions/brand-marketing" },
      { name: "Content Marketing", path: "/solutions/content-marketing" },
      { name: "Field Events Marketing", path: "/solutions/field-events-marketing" },
      { name: "Performance Marketing", path: "/solutions/performance-marketing" },
      { name: "PR Communications", path: "/solutions/pr-communications" },
      { name: "Product Marketing", path: "/solutions/product-marketing" },
      { name: "Technology", path: "/solutions/technology" },
    ],
    Resources: [
      { name: "Resources Hub", path: "/resources" },
      { name: "News", path: "/news" },
      { name: "Resource Tags", path: "/resources/tag/[tag]" },
      { name: "News Tags", path: "/news/tag/[tag]" },
    ],
    Legal: [{ name: "Sitemap", path: "/sitemap" }],
  }

  return routes
}

export default function SitemapPage() {
  const routes = getRoutes()

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sitemap</h1>
            <p className="text-lg text-white/70">All pages on WriteWorks AI</p>
          </div>

          <div className="space-y-10">
            {Object.entries(routes).map(([section, sectionRoutes]) => (
              <div key={section}>
                <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">{section}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                  {sectionRoutes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className="group flex items-baseline gap-2 py-1 hover:text-white transition-colors"
                    >
                      <span className="text-white/30 group-hover:text-white transition-colors">→</span>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                          {route.name}
                        </span>
                        <span className="ml-2 text-xs text-white/40 font-mono">{route.path}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <p>
              Automatically generated • Last updated:{" "}
              {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
