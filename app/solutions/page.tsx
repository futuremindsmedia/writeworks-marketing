"use client"

import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import { useState } from "react"
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
  Cpu,
  ShoppingCart,
  Building2,
  ChevronDown,
  Heart,
  Briefcase,
  Home,
  Dumbbell,
  Plane,
  Utensils,
  Car,
  HandHeart,
  Scale,
  Shirt,
  GraduationCap,
  Shield,
  MessageSquare,
  UserPlus,
  Handshake,
  Building,
  FileCode,
  Users2,
  Award,
} from "lucide-react"

const solutionsByRole = [
  {
    title: "Product Marketing",
    description: "Launch products faster with AI-optimized positioning, messaging, and collateral.",
    href: "/solutions/product-marketing",
    icon: Package,
    stats: "75% faster launches",
  },
  {
    title: "Content Marketing",
    description: "Create blog posts, articles, and guides that drive traffic and engagement.",
    href: "/solutions/content-marketing",
    icon: FileText,
    stats: "70% faster content creation",
  },
  {
    title: "Performance Marketing",
    description: "Optimize ad copy and landing pages for maximum conversions and ROI.",
    href: "/solutions/performance-marketing",
    icon: BarChart3,
    stats: "3x more conversions",
  },
  {
    title: "Field & Events Marketing",
    description: "Create event content that drives attendance and engagement.",
    href: "/solutions/field-events-marketing",
    icon: Calendar,
    stats: "65% time saved",
  },
  {
    title: "Brand Marketing",
    description: "Maintain brand consistency across all content and channels.",
    href: "/solutions/brand-marketing",
    icon: Palette,
    stats: "100% brand compliance",
  },
  {
    title: "PR & Communications",
    description: "Craft press releases and communications that get picked up by media.",
    href: "/solutions/pr-communications",
    icon: Megaphone,
    stats: "4x media mentions",
  },
  {
    title: "Demand Generation",
    description: "Create pipeline and conversions with high-performing content.",
    href: "/solutions/demand-generation",
    icon: Zap,
    stats: "4x lead quality",
  },
  {
    title: "Customer Marketing",
    description: "Drive customer adoption and advocacy with engaging content.",
    href: "/solutions/customer-marketing",
    icon: UserPlus,
    stats: "3x retention",
  },
  {
    title: "Partner Marketing",
    description: "Enable channel collaboration with co-marketing content.",
    href: "/solutions/partner-marketing",
    icon: Handshake,
    stats: "4x partner engagement",
  },
  {
    title: "Growth Marketing",
    description: "Experiment and scale acquisition with data-driven content.",
    href: "/solutions/growth-marketing",
    icon: TrendingUp,
    stats: "5x experiments",
  },
  {
    title: "Corporate Communications",
    description: "Align internal messaging and executive content.",
    href: "/solutions/corporate-communications",
    icon: Building,
    stats: "100% alignment",
  },
  {
    title: "Technical Writing",
    description: "Document products and processes with clarity and precision.",
    href: "/solutions/technical-writing",
    icon: FileCode,
    stats: "5x output",
  },
  {
    title: "Sales Enablement",
    description: "Equip sales teams with winning content and battlecards.",
    href: "/solutions/sales-enablement",
    icon: Presentation,
    stats: "4x win rate",
  },
  {
    title: "Customer Education",
    description: "Train and onboard users with engaging learning content.",
    href: "/solutions/customer-education",
    icon: GraduationCap,
    stats: "4x completion",
  },
  {
    title: "Community Management",
    description: "Foster engagement and loyalty with compelling content.",
    href: "/solutions/community-management",
    icon: Users2,
    stats: "4x engagement",
  },
  {
    title: "Analyst Relations",
    description: "Position thought leadership with research and briefings.",
    href: "/solutions/analyst-relations",
    icon: Award,
    stats: "4x coverage",
  },
]

const solutionsByIndustry = [
  {
    title: "Technology & SaaS",
    description: "Technical documentation and developer content for tech companies.",
    href: "/solutions/technology-saas",
    icon: Cpu,
    stats: "80% faster docs",
  },
  {
    title: "Healthcare & Wellness",
    description: "Compliant, accurate health content that builds trust with patients.",
    href: "/solutions/healthcare-wellness",
    icon: Heart,
    stats: "100% compliance",
  },
  {
    title: "Finance",
    description: "Clear, compliant financial content that builds client confidence.",
    href: "/solutions/finance",
    icon: Briefcase,
    stats: "70% faster content",
  },
  {
    title: "Real Estate",
    description: "Compelling property listings and marketing materials that drive inquiries.",
    href: "/solutions/real-estate",
    icon: Home,
    stats: "80% faster listings",
  },
  {
    title: "Marketing & Advertising",
    description: "Scale campaign content and client deliverables for agencies.",
    href: "/solutions/marketing-advertising",
    icon: Megaphone,
    stats: "4x content output",
  },
  {
    title: "Education & E-learning",
    description: "Engaging course materials and educational content at scale.",
    href: "/solutions/education-elearning",
    icon: GraduationCap,
    stats: "4x course creation",
  },
  {
    title: "B2B Services",
    description: "Professional proposals, case studies, and thought leadership content.",
    href: "/solutions/b2b-services",
    icon: Building2,
    stats: "75% faster proposals",
  },
  {
    title: "Legal",
    description: "Clear, accurate legal content and client communications.",
    href: "/solutions/legal",
    icon: Scale,
    stats: "65% faster drafting",
  },
  {
    title: "Fashion & Beauty",
    description: "Trend-forward content that converts for fashion and beauty brands.",
    href: "/solutions/fashion-beauty",
    icon: Shirt,
    stats: "4x engagement",
  },
  {
    title: "Travel & Hospitality",
    description: "Inspiring destination content and travel guides that drive bookings.",
    href: "/solutions/travel-hospitality",
    icon: Plane,
    stats: "4x bookings",
  },
  {
    title: "Food & Culinary",
    description: "Mouth-watering menu descriptions and food content that drives orders.",
    href: "/solutions/food-culinary",
    icon: Utensils,
    stats: "4x orders",
  },
  {
    title: "Automotive",
    description: "Technical specs and marketing content for the automotive industry.",
    href: "/solutions/automotive",
    icon: Car,
    stats: "3x test drives",
  },
  {
    title: "Non-profits & Charities",
    description: "Compelling fundraising and impact stories that drive donations.",
    href: "/solutions/nonprofits-charities",
    icon: HandHeart,
    stats: "4x donations",
  },
  {
    title: "Sports & Fitness",
    description: "Motivating workout content and training plans that drive results.",
    href: "/solutions/sports-fitness",
    icon: Dumbbell,
    stats: "4x engagement",
  },
]

const channelSolutions = [
  {
    title: "SEO Content",
    description: "Create search-optimized content that ranks on Google and drives organic traffic.",
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
  const [showAllRole, setShowAllRole] = useState(false)
  const [showAllChannel, setShowAllChannel] = useState(false)
  const [showAllIndustry, setShowAllIndustry] = useState(false)

  const visibleRoleSolutions = showAllRole ? solutionsByRole : solutionsByRole.slice(0, 6)
  const visibleChannelSolutions = showAllChannel ? channelSolutions : channelSolutions.slice(0, 6)
  const visibleIndustrySolutions = showAllIndustry ? solutionsByIndustry : solutionsByIndustry.slice(0, 6)

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
            AI-Powered Content Solutions for Every Marketing Team
          </h1>
          <p className="text-base text-white/70 mb-6 text-pretty">
            WriteWorks helps marketing teams create high-quality content faster. From SEO to social media, email to events—find the perfect solution for your marketing needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              <span>70% faster content</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-white" />
              <span>Enterprise-grade AI</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-white" />
              <span>Proven ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Role */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Solutions by Role</h2>
          <p className="text-white/70">Tailored solutions for every marketing function</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleRoleSolutions.map((solution) => (
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
        {solutionsByRole.length > 6 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAllRole(!showAllRole)}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              {showAllRole ? "Show less" : `View all ${solutionsByRole.length} solutions`}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllRole ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </section>

      {/* Solutions by Channel */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Solutions by Channel</h2>
          <p className="text-white/70">AI-powered content creation for every marketing channel</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleChannelSolutions.map((solution) => (
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
        {channelSolutions.length > 6 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAllChannel(!showAllChannel)}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              {showAllChannel ? "Show less" : `View all ${channelSolutions.length} solutions`}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllChannel ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </section>

      {/* Solutions by Industry */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Solutions by Industry</h2>
          <p className="text-white/70">Industry-specific content solutions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleIndustrySolutions.map((solution) => (
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
        {solutionsByIndustry.length > 6 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAllIndustry(!showAllIndustry)}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              {showAllIndustry ? "Show less" : `View all ${solutionsByIndustry.length} solutions`}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllIndustry ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </section>

      {/* CTA Section - Compact */}
      <section className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
          <p className="text-sm text-white/60 mb-6 max-w-lg mx-auto">
            Join thousands of marketing teams creating high-quality content with WriteWorks AI.
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
