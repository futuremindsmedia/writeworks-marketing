import { createClient as createContentfulClient } from "contentful"

// Contentful client for fetching published content
export function createClient() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    console.warn("[Contentful] Missing environment variables. Contentful integration disabled.")
    return null
  }

  return createContentfulClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
}

// Contentful preview client for fetching draft content
export function createPreviewClient() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    console.warn("[Contentful] Missing preview environment variables. Preview mode disabled.")
    return null
  }

  return createContentfulClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: "preview.contentful.com",
  })
}

// Helper to get client based on preview mode
export function getClient(preview = false) {
  return preview ? createPreviewClient() : createClient()
}
