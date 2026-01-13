import { createClient as createSupabaseClient } from "@/lib/supabase/server"
import { getClient as getContentfulClient } from "@/lib/contentful/client"
import { resources as staticResources, type Resource } from "@/lib/resources-data"

// Fetch resources from Contentful
async function fetchFromContentful(preview = false): Promise<Resource[] | null> {
  try {
    const client = getContentfulClient(preview)
    if (!client) return null

    const response = await client.getEntries({
      content_type: "resource",
      order: ["-fields.date"],
    })

    if (!response.items.length) return null

    return response.items.map((item: any) => ({
      id: item.sys.id,
      slug: item.fields.slug,
      title: item.fields.title,
      description: item.fields.description,
      category: item.fields.category,
      date: item.fields.date,
      modifiedDate: item.fields.modifiedDate,
      readTime: item.fields.readTime,
      image: item.fields.image?.fields?.file?.url || "/placeholder.svg",
      author: item.fields.author,
      authorRole: item.fields.authorRole,
      authorSlug: item.fields.authorSlug,
      authorBio: item.fields.authorBio,
      tags: item.fields.tags || [],
      content: item.fields.content,
      keyHighlights: item.fields.keyHighlights || [],
    }))
  } catch (error) {
    console.error("[Contentful] Error fetching resources:", error)
    return null
  }
}

// Fetch resources from Supabase
async function fetchFromSupabase(): Promise<Resource[] | null> {
  try {
    const supabase = await createSupabaseClient()

    const { data: resources, error } = await supabase
      .from("resources")
      .select(`
        *,
        author:authors(slug, name, role, bio)
      `)
      .order("date", { ascending: false })

    if (error) {
      console.error("[Supabase] Error fetching resources:", error)
      return null
    }

    if (!resources || resources.length === 0) return null

    return resources.map((resource: any) => ({
      id: resource.id,
      slug: resource.slug,
      title: resource.title,
      description: resource.description,
      category: resource.category,
      date: resource.date,
      modifiedDate: resource.modified_date,
      readTime: resource.read_time,
      image: resource.image,
      author: resource.author?.name || "Unknown",
      authorRole: resource.author?.role || "",
      authorSlug: resource.author?.slug || "",
      authorBio: resource.author?.bio || "",
      tags: resource.tags || [],
      content: resource.content,
      keyHighlights: resource.key_highlights || [],
    }))
  } catch (error) {
    console.error("[Supabase] Error fetching resources:", error)
    return null
  }
}

// Main function to fetch resources with fallback strategy
export async function getResources(preview = false): Promise<Resource[]> {
  // Try Contentful first
  const contentfulResources = await fetchFromContentful(preview)
  if (contentfulResources && contentfulResources.length > 0) {
    console.log("[Data] Using Contentful resources")
    return contentfulResources
  }

  // Try Supabase second
  const supabaseResources = await fetchFromSupabase()
  if (supabaseResources && supabaseResources.length > 0) {
    console.log("[Data] Using Supabase resources")
    return supabaseResources
  }

  // Fall back to static data
  console.log("[Data] Using static resources (fallback)")
  return staticResources
}

// Get single resource by slug
export async function getResourceBySlug(slug: string, preview = false): Promise<Resource | null> {
  const resources = await getResources(preview)
  return resources.find((r) => r.slug === slug) || null
}

// Get resources by category
export async function getResourcesByCategory(category: string, preview = false): Promise<Resource[]> {
  const resources = await getResources(preview)
  if (category === "all") return resources
  return resources.filter((r) => r.category === category)
}

// Get resources by author
export async function getResourcesByAuthor(authorSlug: string, preview = false): Promise<Resource[]> {
  const resources = await getResources(preview)
  return resources.filter((r) => r.authorSlug === authorSlug)
}

// Get related resources
export async function getRelatedResources(currentSlug: string, limit = 3, preview = false): Promise<Resource[]> {
  const currentResource = await getResourceBySlug(currentSlug, preview)
  if (!currentResource) return []

  const resources = await getResources(preview)
  return resources
    .filter(
      (r) =>
        r.slug !== currentSlug &&
        (r.category === currentResource.category || r.tags.some((tag) => currentResource.tags.includes(tag))),
    )
    .slice(0, limit)
}

// Get resources by tag
export async function getResourcesByTag(tag: string, preview = false): Promise<Resource[]> {
  const resources = await getResources(preview)
  return resources.filter((r) => r.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
}
