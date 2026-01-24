export default function Loading() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs skeleton */}
      <div className="container mx-auto px-3 md:px-4 pt-6">
        <div className="h-4 w-48 bg-white/5 rounded animate-pulse" />
      </div>

      {/* Hero Section skeleton */}
      <section className="pt-4 md:pt-6 pb-12 md:pb-16">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category badge */}
            <div className="mb-6">
              <div className="h-6 w-20 bg-white/5 rounded-full animate-pulse" />
            </div>
            {/* Title */}
            <div className="h-12 md:h-16 w-full bg-white/5 rounded animate-pulse mb-6" />
            {/* Description */}
            <div className="h-6 w-3/4 bg-white/5 rounded animate-pulse mb-8" />
            {/* Meta info */}
            <div className="flex gap-6 pb-8 border-b border-white/10">
              <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-20 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image skeleton */}
      <section className="pb-12">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <div className="aspect-video bg-white/5 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="pb-20">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
              <div className="h-8 w-full bg-transparent" />
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
