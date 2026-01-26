"use client"

import { Twitter, Linkedin } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { label: "Content Marketing", href: "/solutions/content-marketing" },
        { label: "Performance Marketing", href: "/solutions/performance-marketing" },
        { label: "Field Events Marketing", href: "/solutions/field-events-marketing" },
        { label: "Brand Marketing", href: "/solutions/brand-marketing" },
        { label: "PR Communications", href: "/solutions/pr-communications" },
        { label: "Technology", href: "/solutions/technology" },
        { label: "Product Marketing", href: "/solutions/product-marketing" },
      ],
    },
    {
      title: "Solutions by Channel",
      links: [
        { label: "SEO Content", href: "/solutions/seo-content" },
        { label: "Social Media", href: "/solutions/social-media" },
        { label: "Email Marketing", href: "/solutions/email-marketing" },
        { label: "Paid Advertising", href: "/solutions/paid-advertising" },
        { label: "Video Marketing", href: "/solutions/video-marketing" },
        { label: "Podcast Marketing", href: "/solutions/podcast-marketing" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Features Overview", href: "/platform/features" },
        { label: "Content Editor", href: "/platform/features/content-editor" },
        { label: "AI Agents", href: "/platform/features/ai-agents" },
        { label: "Brand Management", href: "/platform/features/brand-management" },
        { label: "Analytics", href: "/platform/features/analytics" },
        { label: "Security & Compliance", href: "/platform/features/security-compliance" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/resources" },
        { label: "News", href: "/news" },
        { label: "Case Studies", href: "/resources/category/case-study" },
        { label: "Guides", href: "/resources/category/guide" },
        { label: "Webinars", href: "/resources/category/webinar" },
        { label: "Contact Support", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "GDPR Compliance", href: "/platform/features/gdpr-compliance" },
        { label: "Security", href: "/platform/features/security-compliance" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/10 mt-20 bg-black">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-12 md:py-16">
        {/* Desktop Navigation */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Navigation - Accordion */}
        <div className="md:hidden mb-12">
          <Accordion type="single" collapsible className="w-full">
            {footerSections.map((section, index) => (
              <AccordionItem key={section.title} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-white hover:text-white/80 text-center justify-center py-4">
                  <span className="font-semibold text-sm">{section.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2.5 text-center pb-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors block">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo on the left */}
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WriteWorks%20Logo1-Rm1hq6fM67OQcTXXNiAOlnZs28cQrH.png"
                alt="WriteWorks AI"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </div>

            {/* Trust badges on the right */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs text-white/50">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                SOC 2 Certified
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                GDPR Compliant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                ISO 27001
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-sm text-white/60">© 2025 WriteWorks AI. All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://linkedin.com/company/writeworksai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/writeworksai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
