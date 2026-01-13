import { NextResponse } from "next/server"
import { getResources } from "@/lib/data/resources"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const preview = searchParams.get("preview") === "true"

    const resources = await getResources(preview)

    return NextResponse.json({ resources })
  } catch (error) {
    console.error("[API] Error fetching resources:", error)
    return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 })
  }
}
