import { NextResponse } from "next/server"
import { getResourceBySlug } from "@/lib/data/resources"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { searchParams } = new URL(request.url)
    const preview = searchParams.get("preview") === "true"

    const resource = await getResourceBySlug(params.slug, preview)

    if (!resource) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 })
    }

    return NextResponse.json({ resource })
  } catch (error) {
    console.error("[API] Error fetching resource:", error)
    return NextResponse.json({ error: "Failed to fetch resource" }, { status: 500 })
  }
}
