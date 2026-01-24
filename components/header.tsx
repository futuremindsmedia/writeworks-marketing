"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  Megaphone,
  FileText,
  TrendingUp,
  Calendar,
  Shield,
  MessageSquare,
  Cpu,
  ShoppingCart,
  Building2,
  Newspaper,
  BookOpen,
  GraduationCap,
  BarChart3,
  FileCheck,
  Video,
  Radio,
  Library,
  Sparkles,
  Wand2,
  Bot,
  Palette,
  Users,
  LineChart,
  Lock,
  Layout,
  ArrowRight,
  Search,
  Share2,
  Mail,
  DollarSign,
  Link as LinkIcon,
  Image,
  Smartphone,
  Mic,
  Presentation,
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
  Zap,
  UserPlus,
  Handshake,
  Building,
  FileCode,
  Presentation as PresentationIcon,
  UserCheck,
  Users2,
  Award,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const platformDropdownRef = useRef<HTMLDivElement>(null)
  const resourcesDropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    closeAllDropdowns()
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) {
      setSolutionsOpen(false)
      setPlatformOpen(false)
      setResourcesOpen(false)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false)
      }
      if (platformDropdownRef.current && !platformDropdownRef.current.contains(event.target as Node)) {
        setPlatformOpen(false)
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false)
      }
    }

    if (solutionsOpen || platformOpen || resourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [solutionsOpen, platformOpen, resourcesOpen])

  const closeAllDropdowns = () => {
    setSolutionsOpen(false)
    setPlatformOpen(false)
    setResourcesOpen(false)
  }

  const solutionsByRole = [
    {
      name: "Product Marketing",
      href: "/solutions/product-marketing",
      icon: Megaphone,
      description: "Align GTM strategy and launch faster",
    },
    {
      name: "Content Marketing",
      href: "/solutions/content-marketing",
      icon: FileText,
      description: "Plan, create, and scale with ease",
    },
    {
      name: "Performance Marketing",
      href: "/solutions/performance-marketing",
      icon: TrendingUp,
      description: "Drive engagement and growth",
    },
    {
      name: "Field & Events Marketing",
      href: "/solutions/field-events-marketing",
      icon: Calendar,
      description: "Maximize event attendance",
    },
    {
      name: "Brand Marketing",
      href: "/solutions/brand-marketing",
      icon: Shield,
      description: "Automate brand compliance",
    },
    {
      name: "PR & Communications",
      href: "/solutions/pr-communications",
      icon: MessageSquare,
      description: "Craft clear, aligned messaging",
    },
    {
      name: "Demand Generation",
      href: "/solutions/demand-generation",
      icon: Zap,
      description: "Create pipeline and conversions",
    },
    {
      name: "Customer Marketing",
      href: "/solutions/customer-marketing",
      icon: UserPlus,
      description: "Drive adoption and advocacy",
    },
    {
      name: "Partner Marketing",
      href: "/solutions/partner-marketing",
      icon: Handshake,
      description: "Enable channel collaboration",
    },
    {
      name: "Growth Marketing",
      href: "/solutions/growth-marketing",
      icon: TrendingUp,
      description: "Experiment and scale acquisition",
    },
    {
      name: "Corporate Communications",
      href: "/solutions/corporate-communications",
      icon: Building,
      description: "Align internal messaging",
    },
    {
      name: "Technical Writing",
      href: "/solutions/technical-writing",
      icon: FileCode,
      description: "Document products and processes",
    },
    {
      name: "Sales Enablement",
      href: "/solutions/sales-enablement",
      icon: PresentationIcon,
      description: "Equip teams with winning content",
    },
    {
      name: "Customer Education",
      href: "/solutions/customer-education",
      icon: GraduationCap,
      description: "Train and onboard users",
    },
    {
      name: "Community Management",
      href: "/solutions/community-management",
      icon: Users2,
      description: "Foster engagement and loyalty",
    },
    {
      name: "Analyst Relations",
      href: "/solutions/analyst-relations",
      icon: Award,
      description: "Position thought leadership",
    },
  ]

  const solutionsByIndustry = [
    {
      name: "Technology & SaaS",
      href: "/solutions/technology-saas",
      icon: Cpu,
      description: "Scale technical content faster",
    },
    {
      name: "Healthcare & Wellness",
      href: "/solutions/healthcare-wellness",
      icon: Heart,
      description: "Compliant, accurate health content",
    },
    {
      name: "Finance",
      href: "/solutions/finance",
      icon: Briefcase,
      description: "Clear, compliant financial content",
    },
    {
      name: "Real Estate",
      href: "/solutions/real-estate",
      icon: Home,
      description: "Compelling property content",
    },
    {
      name: "Marketing & Advertising",
      href: "/solutions/marketing-advertising",
      icon: Megaphone,
      description: "Scale campaign content",
    },
    {
      name: "Education & E-learning",
      href: "/solutions/education-elearning",
      icon: GraduationCap,
      description: "Engaging course content",
    },
    {
      name: "B2B Services",
      href: "/solutions/b2b-services",
      icon: Building2,
      description: "Professional proposals & case studies",
    },
    {
      name: "Legal",
      href: "/solutions/legal",
      icon: Scale,
      description: "Clear, accurate legal content",
    },
    {
      name: "Fashion & Beauty",
      href: "/solutions/fashion-beauty",
      icon: Shirt,
      description: "Trend-forward brand content",
    },
    {
      name: "Travel & Hospitality",
      href: "/solutions/travel-hospitality",
      icon: Plane,
      description: "Inspiring travel content",
    },
    {
      name: "Food & Culinary",
      href: "/solutions/food-culinary",
      icon: Utensils,
      description: "Mouth-watering food content",
    },
    {
      name: "Automotive",
      href: "/solutions/automotive",
      icon: Car,
      description: "Technical specs & marketing",
    },
    {
      name: "Non-profits & Charities",
      href: "/solutions/nonprofits-charities",
      icon: HandHeart,
      description: "Compelling fundraising content",
    },
    {
      name: "Sports & Fitness",
      href: "/solutions/sports-fitness",
      icon: Dumbbell,
      description: "Motivating fitness content",
    },
  ]

  const solutionsByChannel = [
    { name: "SEO Content", href: "/solutions/seo-content", icon: Search, description: "Search-optimized content" },
    { name: "LLM Optimization", href: "/solutions/llm-optimization", icon: Bot, description: "AI citation optimization" },
    { name: "Social Media", href: "/solutions/social-media", icon: Share2, description: "Multi-platform social content" },
    { name: "Email Marketing", href: "/solutions/email-marketing", icon: Mail, description: "High-converting emails" },
    { name: "Paid Advertising", href: "/solutions/paid-advertising", icon: DollarSign, description: "Ad copy that converts" },
    { name: "Content Marketing", href: "/solutions/content-marketing-channel", icon: FileText, description: "Blog & thought leadership" },
    { name: "Video Marketing", href: "/solutions/video-marketing", icon: Video, description: "Scripts & descriptions" },
    { name: "Affiliate Marketing", href: "/solutions/affiliate-marketing", icon: LinkIcon, description: "Reviews & comparisons" },
    { name: "Influencer Marketing", href: "/solutions/influencer-marketing", icon: Users, description: "Briefs & collaboration" },
    { name: "Display Advertising", href: "/solutions/display-advertising", icon: Image, description: "Banner & display ads" },
    { name: "Native Advertising", href: "/solutions/native-advertising", icon: Newspaper, description: "Sponsored content" },
    { name: "SMS Marketing", href: "/solutions/sms-marketing", icon: Smartphone, description: "Mobile messaging" },
    { name: "Podcast Marketing", href: "/solutions/podcast-marketing", icon: Mic, description: "Scripts & show notes" },
    { name: "Webinar Marketing", href: "/solutions/webinar-marketing", icon: Presentation, description: "Webinar scripts & promos" },
  ]

  const platformFeatures = [
    {
      name: "Platform Overview",
      href: "/platform",
      icon: Layout,
      description: "Explore the complete platform",
    },
    {
      name: "All Features",
      href: "/platform/features",
      icon: Sparkles,
      description: "View all platform capabilities",
    },
    {
      name: "Content Editor with LLM Scoring",
      href: "/platform/features/content-editor",
      icon: FileText,
      description: "Real-time visibility scoring",
    },
    {
      name: "AI Text Actions",
      href: "/platform/features/ai-text-actions",
      icon: Wand2,
      description: "One-click text optimization",
    },
    {
      name: "80+ Content Writing Agents",
      href: "/platform/features/ai-agents",
      icon: Bot,
      description: "Expert Content Writing agents for every content type",
    },
    {
      name: "Brand & Content Management",
      href: "/platform/features/brand-management",
      icon: Palette,
      description: "Centralized brand voice and assets",
    },
    {
      name: "Workflow & Collaboration",
      href: "/platform/features/workflow-collaboration",
      icon: Users,
      description: "Team collaboration tools",
    },
    {
      name: "Content Analytics",
      href: "/platform/features/analytics",
      icon: LineChart,
      description: "Track performance and insights",
    },
    {
      name: "Security & Compliance",
      href: "/platform/features/security-compliance",
      icon: Lock,
      description: "Enterprise-grade security",
    },
  ]

  const resourceCategories = [
    {
      name: "All Resources",
      href: "/resources",
      icon: Library,
      description: "Browse all content types",
    },
    {
      name: "News",
      href: "/news",
      icon: Newspaper,
      description: "Latest AI and LLM industry news",
    },
    {
      name: "Blog Posts",
      href: "/resources/category/blog",
      icon: BookOpen,
      description: "Latest insights and updates",
    },
    {
      name: "Guides",
      href: "/resources/category/guide",
      icon: GraduationCap,
      description: "Step-by-step tutorials",
    },
    {
      name: "Case Studies",
      href: "/resources/category/case-study",
      icon: BarChart3,
      description: "Real-world success stories",
    },
    {
      name: "Whitepapers",
      href: "/resources/category/whitepaper",
      icon: FileCheck,
      description: "In-depth research and analysis",
    },
    {
      name: "Videos",
      href: "/resources/category/video",
      icon: Video,
      description: "Visual learning content",
    },
    {
      name: "Webinars",
      href: "/resources/category/webinar",
      icon: Radio,
      description: "Live and recorded sessions",
    },
  ]

  return (
    <header className="border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src="/images/writeworks-20logo1.png" alt="WriteWorks AI" className="h-12 md:h-16 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1"
            >
              Solutions <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>
            {solutionsOpen && (
              <div className="fixed left-0 right-0 top-[calc(100%+1px)] flex justify-center pointer-events-none z-50">
                <div className="pointer-events-auto container mx-auto px-3 md:px-4">
                  <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl shadow-white/5 p-4 md:p-6 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-[#6366F1] to-[#8B5CF6] rounded-full"></div>
                          Solutions by Role
                        </h3>
                        <ul className="space-y-0.5">
                          {solutionsByRole.map((solution) => (
                            <Link
                              key={solution.href}
                              href={solution.href}
                              className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                            >
                              <solution.icon className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-all" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                                  {solution.name}
                                </div>
                                <div className="text-xs text-white/60 mt-0.5">{solution.description}</div>
                              </div>
                            </Link>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-[#6366F1] to-[#8B5CF6] rounded-full"></div>
                          Solutions by Industry
                        </h3>
                        <ul className="space-y-0.5">
                          {solutionsByIndustry.map((solution) => (
                            <Link
                              key={solution.href}
                              href={solution.href}
                              className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                            >
                              <solution.icon className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-all" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                                  {solution.name}
                                </div>
                                <div className="text-xs text-white/60 mt-0.5">{solution.description}</div>
                              </div>
                            </Link>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-[#6366F1] to-[#8B5CF6] rounded-full"></div>
                          Solutions by Channel
                        </h3>
                        <ul className="space-y-0.5 max-h-[400px] overflow-y-auto pr-2">
                          {solutionsByChannel.map((solution) => (
                            <Link
                              key={solution.href}
                              href={solution.href}
                              className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                            >
                              <solution.icon className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-all" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                                  {solution.name}
                                </div>
                                <div className="text-xs text-white/60 mt-0.5">{solution.description}</div>
                              </div>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href="/solutions"
                        className="text-sm text-[#6366F1] hover:text-[#8B5CF6] transition-colors flex items-center gap-2"
                      >
                        View all solutions <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </Link>
                      <div className="text-xs text-white/60">AI that accelerates workflows across the entire team</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative" ref={platformDropdownRef}>
            <button
              onClick={() => setPlatformOpen(!platformOpen)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1"
            >
              Platform <ChevronDown className={`w-4 h-4 transition-transform ${platformOpen ? "rotate-180" : ""}`} />
            </button>
            {platformOpen && (
              <div className="fixed left-0 right-0 top-[calc(100%+1px)] flex justify-center pointer-events-none z-50">
                <div className="pointer-events-auto container mx-auto px-3 md:px-4">
                  <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl shadow-white/5 p-4 md:p-6 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {platformFeatures.map((feature) => (
                        <Link
                          key={feature.href}
                          href={feature.href}
                          className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                          <feature.icon className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-all" />
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                              {feature.name}
                            </div>
                            <div className="text-xs text-white/60 mt-0.5">{feature.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href="/platform"
                        className="text-sm text-[#6366F1] hover:text-[#8B5CF6] transition-colors flex items-center gap-2"
                      >
                        View platform overview <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </Link>
                      <div className="text-xs text-white/60">
                        Enterprise AI content platform for high-performance teams
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/enterprise" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Enterprise
          </Link>
          <div className="relative" ref={resourcesDropdownRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1"
            >
              Resources <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>
            {resourcesOpen && (
              <div className="fixed left-0 right-0 top-[calc(100%+1px)] flex justify-center pointer-events-none z-50">
                <div className="pointer-events-auto container mx-auto px-3 md:px-4">
                  <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl shadow-white/5 p-4 md:p-6 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {resourceCategories.map((resource) => (
                        <Link
                          key={resource.href}
                          href={resource.href}
                          className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                          <resource.icon className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-all" />
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                              {resource.name}
                            </div>
                            <div className="text-xs text-white/60 mt-0.5">{resource.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Link
                        href="/resources"
                        className="text-sm text-[#6366F1] hover:text-[#8B5CF6] transition-colors flex items-center gap-2"
                      >
                        View all resources <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-white" asChild>
            <Link href="https://app.writeworks.ai/login">Sign In</Link>
          </Button>
          <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/5 font-bold" asChild>
            <Link href="/demo">
              <Calendar className="mr-2 w-4 h-4 inline" /> Book Demo
            </Link>
          </Button>
          <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 font-bold" asChild>
            <Link href="https://app.writeworks.ai/sign-up">
              <ArrowRight className="mr-2 w-4 h-4 inline" /> Free Trial
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-lg absolute left-0 right-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto z-40">
          <nav className="container mx-auto px-3 md:px-4 py-6 flex flex-col gap-2">
            <div className="border-b border-white/10 pb-4 mb-2">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="text-base text-white hover:text-white/80 transition-colors py-3 flex items-center justify-between w-full font-medium"
              >
                Solutions{" "}
                <ChevronDown className={`w-5 h-5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {solutionsOpen && (
                <div className="mt-3 space-y-4 animate-in slide-in-from-top-2 duration-200">
                  <div>
                    <div className="text-xs font-semibold text-white/70 mb-3 uppercase tracking-wider">By Role</div>
                    <div className="space-y-1">
                      {solutionsByRole.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="flex items-center gap-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg cursor-pointer"
                        >
                          <solution.icon className="w-5 h-5 text-white flex-shrink-0" />
                          <span>{solution.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white/70 mb-3 uppercase tracking-wider">By Industry</div>
                    <div className="space-y-1">
                      {solutionsByIndustry.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="flex items-center gap-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg cursor-pointer"
                        >
                          <solution.icon className="w-5 h-5 text-white flex-shrink-0" />
                          <span>{solution.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white/70 mb-3 uppercase tracking-wider">By Channel</div>
                    <div className="space-y-1">
                      {solutionsByChannel.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="flex items-center gap-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg cursor-pointer"
                        >
                          <solution.icon className="w-5 h-5 text-white flex-shrink-0" />
                          <span>{solution.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/solutions"
                    className="flex items-center justify-center gap-2 text-sm text-[#6366F1] hover:text-[#8B5CF6] transition-colors py-3 px-3 rounded-lg border border-white/20 hover:border-white/40 cursor-pointer"
                  >
                    View all solutions <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </Link>
                </div>
              )}
            </div>
            <div className="border-b border-white/10 pb-4 mb-2">
              <button
                onClick={() => setPlatformOpen(!platformOpen)}
                className="text-base text-white hover:text-white/80 transition-colors py-3 flex items-center justify-between w-full font-medium"
              >
                Platform <ChevronDown className={`w-5 h-5 transition-transform ${platformOpen ? "rotate-180" : ""}`} />
              </button>
              {platformOpen && (
                <div className="mt-3 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {platformFeatures.map((feature) => (
                    <Link
                      key={feature.href}
                      href={feature.href}
                      className="flex items-center gap-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg cursor-pointer"
                    >
                      <feature.icon className="w-5 h-5 text-white flex-shrink-0" />
                      <span>{feature.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/enterprise"
              className="text-base text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg"
            >
              Enterprise
            </Link>
            <div className="border-b border-white/10 pb-4 mb-2">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="text-base text-white hover:text-white/80 transition-colors py-3 flex items-center justify-between w-full font-medium"
              >
                Resources{" "}
                <ChevronDown className={`w-5 h-5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {resourcesOpen && (
                <div className="mt-3 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {resourceCategories.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="flex items-center gap-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg cursor-pointer"
                    >
                      <resource.icon className="w-5 h-5 text-white flex-shrink-0" />
                      <span>{resource.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/pricing"
              className="text-base text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg"
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-3 pt-6 mt-4 border-t border-white/10">
              <Button variant="outline" className="w-full border-white/20 text-white bg-transparent h-12 font-semibold" asChild>
                <Link href="https://app.writeworks.ai/login">Sign In</Link>
              </Button>
              <Button variant="outline" className="w-full border-white text-white bg-transparent h-12 font-bold" asChild>
                <Link href="/demo">
                  <Calendar className="mr-2 w-4 h-4 inline" /> Book Demo
                </Link>
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 h-12 font-bold"
                asChild
              >
                <Link href="https://app.writeworks.ai/sign-up">
                  <ArrowRight className="mr-2 w-4 h-4 inline" /> Free Trial
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
