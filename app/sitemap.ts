import type { MetadataRoute } from "next"
import { getResources, getResourceUrl } from "@/lib/data/resources"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.writeworks.ai"

  // Fetch all resources and news dynamically
  const allResources = await getResources()
  const resourceArticles = allResources.filter((r) => r.category !== "news")
  const newsArticles = allResources.filter((r) => r.category === "news")

  // Extract unique authors and tags
  const uniqueAuthors = Array.from(new Set(allResources.map((r) => r.authorSlug).filter(Boolean)))
  const uniqueTags = Array.from(new Set(allResources.flatMap((r) => r.tags)))

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/platform`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/platform/features`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/enterprise`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]

  // Feature pages
  const featurePages: MetadataRoute.Sitemap = [
    "content-editor",
    "ai-text-actions",
    "ai-agents",
    "brand-management",
    "project-management",
    "rich-text-editor",
    "security-compliance",
    "workflow-collaboration",
    "analytics",
    "role-based-access",
    "content-templates",
    "content-calendar",
    "approval-workflows",
    "knowledge-base",
    "citation-tracking",
    "performance-insights",
    "version-control",
    "audit-logs",
    "ai-chat-assistant",
    "content-library",
    "audience-profiles",
    "custom-reports",
    "content-optimization",
    "gdpr-compliance",
  ].map((slug) => ({
    url: `${baseUrl}/platform/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Solution pages
  const solutionPages: MetadataRoute.Sitemap = [
    // Role solutions
    "content-marketing",
    "performance-marketing",
    "field-events-marketing",
    "brand-marketing",
    "pr-communications",
    "product-marketing",
    "demand-generation",
    "customer-marketing",
    "partner-marketing",
    "growth-marketing",
    "corporate-communications",
    "technical-writing",
    "sales-enablement",
    "customer-education",
    "community-management",
    "analyst-relations",
    // Channel solutions
    "seo-content",
    "llm-optimization",
    "social-media",
    "email-marketing",
    "paid-advertising",
    "content-marketing-channel",
    "video-marketing",
    "affiliate-marketing",
    "influencer-marketing",
    "display-advertising",
    "native-advertising",
    "sms-marketing",
    "podcast-marketing",
    "webinar-marketing",
    // Industry solutions
    "technology",
    "technology-saas",
    "healthcare-wellness",
    "finance",
    "real-estate",
    "marketing-advertising",
    "education-elearning",
    "b2b-services",
    "legal",
    "fashion-beauty",
    "travel-hospitality",
    "food-culinary",
    "automotive",
    "nonprofits-charities",
    "sports-fitness",
  ].map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Resource articles (dynamically generated)
  const resourcePages: MetadataRoute.Sitemap = resourceArticles.map((resource) => ({
    url: `${baseUrl}${getResourceUrl(resource)}`,
    lastModified: new Date(resource.modifiedDate || resource.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // News articles (dynamically generated)
  const newsPages: MetadataRoute.Sitemap = newsArticles.map((news) => ({
    url: `${baseUrl}/news/${news.slug}`,
    lastModified: new Date(news.modifiedDate || news.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Author pages (dynamically generated)
  const authorPages: MetadataRoute.Sitemap = uniqueAuthors.map((authorSlug) => ({
    url: `${baseUrl}/resources/author/${authorSlug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }))

  // Tag pages for resources (dynamically generated)
  const resourceTagPages: MetadataRoute.Sitemap = uniqueTags.map((tag) => ({
    url: `${baseUrl}/resources/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }))

  // Tag pages for news (dynamically generated)
  const newsTagPages: MetadataRoute.Sitemap = uniqueTags.map((tag) => ({
    url: `${baseUrl}/news/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }))

  // Combine all pages
  return [
    ...staticPages,
    ...featurePages,
    ...solutionPages,
    ...resourcePages,
    ...newsPages,
    ...authorPages,
    ...resourceTagPages,
    ...newsTagPages,
  ]
}
