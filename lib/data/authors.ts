import { createClient as createSupabaseClient } from "@/lib/supabase/server"

export interface Author {
  id: string
  slug: string
  name: string
  role: string
  bio: string
  image?: string
}

// Fetch authors from Supabase
export async function getAuthors(): Promise<Author[]> {
  try {
    const supabase = await createSupabaseClient()

    const { data: authors, error } = await supabase.from("authors").select("*").order("name", { ascending: true })

    if (error) {
      console.error("[Supabase] Error fetching authors:", error)
      return []
    }

    return authors || []
  } catch (error) {
    console.error("[Supabase] Error fetching authors:", error)
    return []
  }
}

// Get single author by slug
export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  try {
    const supabase = await createSupabaseClient()

    const { data: author, error } = await supabase.from("authors").select("*").eq("slug", slug).single()

    if (error) {
      console.error("[Supabase] Error fetching author:", error)
      return null
    }

    return author
  } catch (error) {
    console.error("[Supabase] Error fetching author:", error)
    return null
  }
}
