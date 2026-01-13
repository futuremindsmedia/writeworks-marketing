# Supabase & Contentful Integration Guide

This document explains how the WriteWorks marketing website is integrated with Supabase and Contentful for content management.

## Overview

The website uses a **fallback strategy** for content delivery:
1. **Contentful** (Primary) - Headless CMS for content management
2. **Supabase** (Secondary) - PostgreSQL database for structured content
3. **Static Data** (Fallback) - Hardcoded content in `lib/resources-data.tsx`

## Architecture

### Data Flow
\`\`\`
Request → Contentful API → Supabase Database → Static Data
          (if available)    (if Contentful fails)  (if both fail)
\`\`\`

### File Structure
\`\`\`
lib/
├── supabase/
│   ├── client.ts          # Browser Supabase client
│   └── server.ts          # Server Supabase client
├── contentful/
│   └── client.ts          # Contentful client
├── data/
│   ├── resources.ts       # Resource fetching with fallback
│   └── authors.ts         # Author fetching from Supabase
└── resources-data.tsx     # Static fallback data

scripts/
├── 001_create_authors_table.sql      # Authors table schema
└── 002_create_resources_table.sql    # Resources table schema

app/api/
├── resources/
│   ├── route.ts           # GET all resources
│   └── [slug]/route.ts    # GET single resource
\`\`\`

## Setup Instructions

### 1. Supabase Setup

#### Environment Variables
The following Supabase environment variables are already configured:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (for admin operations)

#### Database Schema
Run the SQL scripts in order to create the database tables:

1. **Create Authors Table**
   \`\`\`bash
   # Run scripts/001_create_authors_table.sql
   \`\`\`
   This creates:
   - `authors` table with RLS policies
   - Sample author data
   - Indexes for performance

2. **Create Resources Table**
   \`\`\`bash
   # Run scripts/002_create_resources_table.sql
   \`\`\`
   This creates:
   - `resources` table with RLS policies
   - Foreign key to authors table
   - Indexes for slug, category, and date
   - Auto-update trigger for `updated_at`

#### Row Level Security (RLS)
Both tables have RLS enabled with the following policies:
- **Public Read**: Anyone can read content (no auth required)
- **Authenticated Write**: Only authenticated users can insert/update/delete

### 2. Contentful Setup

#### Environment Variables
Configure these Contentful environment variables:
- `CONTENTFUL_SPACE_ID` - Your Contentful space ID
- `CONTENTFUL_ACCESS_TOKEN` - Delivery API token (for published content)
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` - Preview API token (for draft content)

#### Content Models
Create the following content types in Contentful:

**Resource Content Type**
- `slug` (Short text, required, unique)
- `title` (Short text, required)
- `description` (Long text, required)
- `category` (Short text, required) - Options: blog, guide, case-study, whitepaper, video, webinar, news
- `date` (Date & time, required)
- `modifiedDate` (Date & time)
- `readTime` (Short text, required)
- `image` (Media, required)
- `author` (Short text, required)
- `authorRole` (Short text, required)
- `authorSlug` (Short text, required)
- `authorBio` (Long text, required)
- `tags` (Short text, list)
- `content` (Rich text, required)
- `keyHighlights` (Short text, list)

### 3. Data Fetching

#### Server Components (Recommended)
For pages that don't need client-side interactivity:

\`\`\`tsx
import { getResources, getResourceBySlug } from '@/lib/data/resources'

export default async function Page() {
  const resources = await getResources()
  return <div>{/* render resources */}</div>
}
\`\`\`

#### Client Components
For pages with search, filters, or pagination:

\`\`\`tsx
'use client'
import { resources } from '@/lib/resources-data'

export default function Page() {
  // Use static data for now
  // TODO: Fetch from API route for dynamic content
  return <div>{/* render resources */}</div>
}
\`\`\`

#### API Routes
For client-side data fetching:

\`\`\`tsx
// Fetch all resources
const response = await fetch('/api/resources')
const { resources } = await response.json()

// Fetch single resource
const response = await fetch('/api/resources/my-article-slug')
const { resource } = await response.json()
\`\`\`

## Content Management Workflow

### Adding New Content

#### Option 1: Contentful (Recommended)
1. Log in to Contentful dashboard
2. Create new "Resource" entry
3. Fill in all required fields
4. Publish the entry
5. Content appears on website immediately

#### Option 2: Supabase
1. Insert data directly into `resources` table
2. Ensure `author_id` references valid author
3. Content appears on website immediately

#### Option 3: Static Data (Development Only)
1. Edit `lib/resources-data.tsx`
2. Add new resource to `resources` array
3. Rebuild application

### Updating Content

#### Contentful
1. Edit entry in Contentful
2. Publish changes
3. Changes appear immediately

#### Supabase
1. Update row in `resources` table
2. `updated_at` timestamp updates automatically
3. Changes appear immediately

## Monitoring & Debugging

### Check Data Source
The application logs which data source is being used:
\`\`\`
[Data] Using Contentful resources
[Data] Using Supabase resources
[Data] Using static resources (fallback)
\`\`\`

### Common Issues

**No content appearing:**
- Check environment variables are set correctly
- Verify Contentful space has published content
- Verify Supabase tables have data
- Check browser console for errors

**Contentful not working:**
- Verify `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`
- Check content is published (not draft)
- Verify content model matches expected structure

**Supabase not working:**
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Check RLS policies allow public read access
- Verify tables exist and have data

## Performance Considerations

### Caching
- Contentful responses are cached by default
- Consider adding Redis/Upstash for additional caching
- Static data is bundled at build time (fastest)

### Optimization Tips
1. Use server components where possible (better performance)
2. Implement pagination for large datasets
3. Add image optimization for featured images
4. Consider ISR (Incremental Static Regeneration) for article pages

## Security

### RLS Policies
- Public read access is safe for marketing content
- Write operations require authentication
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to client

### API Keys
- Contentful Delivery API token is safe to expose
- Preview API token should only be used server-side
- Supabase anon key is safe to expose (protected by RLS)

## Future Enhancements

1. **Admin Dashboard**: Build admin UI for content management
2. **Content Sync**: Sync between Contentful and Supabase
3. **Search**: Implement full-text search with Algolia or Meilisearch
4. **Analytics**: Track content performance and citations
5. **Webhooks**: Auto-rebuild on content changes
6. **Preview Mode**: Enable draft content preview

## Support

For issues or questions:
- Check Supabase dashboard for database issues
- Check Contentful dashboard for CMS issues
- Review application logs for data fetching errors
- Contact development team for assistance
