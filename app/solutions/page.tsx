import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import {
  FileText,
  BarChart3,
  Calendar,
  Palette,
  Megaphone,
  Code,
  Package,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Search,
  Bot,
  Share2,
  Mail,
  DollarSign,
  Video,
  Link as LinkIcon,
  Users,
  Image,
  Newspaper,
  Smartphone,
  Mic,
  Presentation,
} from "lucide-react"

const solutions = [
  {
    title: "Content Marketing",
    description: "Create LLM-optimized blog posts, articles, and guides that get cited by AI platforms.",
    href: "/solutions/content-marketing",
    icon: FileText,
    stats: "70% faster content creation",
  },
  {
    title: "Performance Marketing",
    description: "Optimize ad copy and landing pages for AI search visibility and conversions.",
    href: "/solutions/performance-marketing",
    icon: BarChart3,
    stats: "3x more AI citations",
  },
  {
    title: "Product Marketing",
    description: "Launch products faster with AI-optimized positioning, messaging, and collateral.",
    href: "/solutions/product-marketing",
    icon: Package,
    stats: "75% faster launches",
  },
  {
    title: "Field & Events Marketing",
    description: "Create event content that drives attendance and gets cited in AI responses.",
    href: "/solutions/field-events-marketing",
    icon: Calendar,
    stats: "65% time saved",
  },
  {
    title: "Brand Marketing",
    description: "Maintain brand consistency while optimizing for LLM visibility across all content.",
    href: "/solutions/brand-marketing",
    icon: Palette,
    stats: "100% brand compliance",
  },
  {
    title: "PR & Communications",
    description: "Craft press releases and communications that AI platforms cite and reference.",
    href: "/solutions/pr-communications",
    icon: Megaphone,
    stats: "4x media mentions",
  },
  {
    title: "Technology",
    description: "Technical documentation and developer content optimized for AI discoverability.",
    href: "/solutions/technology",
    icon: Code,
    stats: "80% faster docs",
  },
]

const channelSolutions = [
  {
    title: "SEO Content",
    description: "Create search-optimized content that ranks and gets cited by AI platforms.",
    href: "/solutions/seo-content",
    icon: Search,
    stats: "85% faster content",
  },
  {
    title: "LLM Optimization",
    description: "Optimize content for ChatGPT, Claude, Perplexity, and AI Overviews.",
    href: "/solutions/llm-optimization",
    icon: Bot,
    stats: "6x more citations",
  },
  {
    title: "Social Media",
    description: "Create engaging social media content at scale for all platforms.",
    href: "/solutions/social-media",
    icon: Share2,
    stats: "3x engagement",
  },
  {
    title: "Email Marketing",
    description: "Write high-converting email campaigns faster with AI assistance.",
    href: "/solutions/email-marketing",
    icon: Mail,
    stats: "2x open rates",
  },
  {
    title: "Paid Advertising",
    description: "Create high-converting ad copy for Google, Meta, and LinkedIn.",
    href: "/solutions/paid-advertising",
    icon: DollarSign,
    stats: "4x CTR",
  },
  {
    title: "Content Marketing",
    description: "Scale your blog posts, articles, and thought leadership content.",
    href: "/solutions/content-marketing-channel",
    icon: FileText,
    stats: "4x traffic",
  },
  {
    title: "Video Marketing",
    description: "Write video scripts, YouTube descriptions, and marketing content.",
    href: "/solutions/video-marketing",
    icon: Video,
    stats: "3x views",
  },
  {
    title: "Affiliate Marketing",
    description: "Create compelling product reviews and comparison content.",
    href: "/solutions/affiliate-marketing",
    icon: LinkIcon,
    stats: "3x conversions",
  },
  {
    title: "Influencer Marketing",
    description: "Streamline influencer collaboration with AI-powered briefs.",
    href: "/solutions/influencer-marketing",
    icon: Users,
    stats: "4x ROI",
  },
  {
    title: "Display Advertising",
    description: "Create banner ads and display copy that converts.",
    href: "/solutions/display-advertising",
    icon: Image,
    stats: "3x CTR",
  },
  {
    title: "Native Advertising",
    description: "Create sponsored content that blends seamlessly.",
    href: "/solutions/native-advertising",
    icon: Newspaper,
    stats: "3x engagement",
  },
  {
    title: "SMS Marketing",
    description: "Write high-impact SMS and mobile marketing messages.",
    href: "/solutions/sms-marketing",
    icon: Smartphone,
    stats: "4x response rate",
  },
  {
    title: "Podcast Marketing",
    description: "Create podcast scripts, show notes, and promotional content.",
    href: "/solutions/podcast-marketing",
    icon: Mic,
    stats: "3x listeners",
  },
  {
    title: "Webinar Marketing",
    description: "Write compelling webinar scripts and promotional content.",
    href: "/solutions/webinar-marketing",
    icon: Presentation,
    stats: "3x registrations",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: "Solutions" }]} />
      </div>

      {/* Hero Section - Compact */}
      <section className="max-w-7xl mx-auto px-4 pt-8 pb-12 md:pt-10 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            The AI Content Platform Built for Enterprise Marketing Teams
          </h1>
          <p className="text-base text-white/70 mb-6 text-pretty">
            WriteWorks helps marketing teams create content that gets cited by ChatGPT, Claude, Perplexity, and all
            major AI platforms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              <span>70% faster content</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-white" />
              <span>4x AI citations</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-white" />
              <span>300% visibility increase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">{solution.stats}</span>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90">{solution.title}</h2>
              <p className="text-sm text-white/60 mb-4">{solution.description}</p>
              <div className="flex items-center text-sm text-white/70 group-hover:text-white transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Channel Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Solutions by Channel</h2>
          <p className="text-white/70 text-center">AI-powered content creation for every marketing channel</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channelSolutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">{solution.stats}</span>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90">{solution.title}</h2>
              <p className="text-sm text-white/60 mb-4">{solution.description}</p>
              <div className="flex items-center text-sm text-white/70 group-hover:text-white transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
          <p className="text-sm text-white/60 mb-6 max-w-lg mx-auto">
            Join thousands of marketing teams creating AI-optimized content with WriteWorks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
              asChild
            >
              <a href="https://app.writeworks.ai/sign-up">
                Start Free <ArrowRight className="ml-2 w-4 h-4 inline" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 bg-transparent"
              asChild
            >
              <Link href="/demo"><Calendar className="mr-2 w-4 h-4 inline" /> Book Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
