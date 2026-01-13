import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Palette, CheckCircle2, Shield, Users, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Brand & Content Management | WriteWorks AI Platform",
  description:
    "Centralize your brand voice, guidelines, and assets. Ensure consistent messaging across all content and teams.",
  keywords: ["brand management", "content management", "brand voice", "brand guidelines", "asset management"],
}

export default function BrandManagementPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/platform/features"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Features
          </Link>
        </div>
      </div>

      <section className="py-20 md:py-32 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#8B5CF6]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-6">
              <Palette className="h-4 w-4 text-[#6366F1]" />
              <span className="text-sm font-medium text-white">Brand Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Brand Management Software
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Centralize your brand voice, guidelines, and assets in one place. Ensure every piece of content maintains
              consistency and aligns with your brand identity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Key Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Palette,
                  title: "Brand Voice Library",
                  description: "Define and store multiple brand voices with tone, style, and messaging guidelines.",
                },
                {
                  icon: FileText,
                  title: "Content Templates",
                  description: "Create reusable templates that enforce brand standards and speed up content creation.",
                },
                {
                  icon: Shield,
                  title: "Approval Workflows",
                  description: "Set up multi-stage approval processes to ensure quality and compliance.",
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Enable seamless collaboration with role-based permissions and access controls.",
                },
                {
                  icon: CheckCircle2,
                  title: "Brand Compliance",
                  description: "Automatically check content against brand guidelines before publishing.",
                },
                {
                  icon: FileText,
                  title: "Asset Library",
                  description: "Store and organize brand assets, images, and resources in one central location.",
                },
              ].map((capability, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#6366F1]/20 bg-card/50 backdrop-blur-sm hover:border-[#6366F1]/40 hover:shadow-lg hover:shadow-[#6366F1]/10 transition-all duration-300"
                >
                  <capability.icon className="h-12 w-12 text-[#6366F1] mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10 bg-gradient-to-br from-transparent via-[#8B5CF6]/10 to-[#6366F1]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Unlimited brand voice profiles",
                "Custom content templates",
                "Multi-stage approval workflows",
                "Role-based access control",
                "Brand compliance checking",
                "Centralized asset library",
                "Version control and history",
                "Team collaboration tools",
                "Custom brand guidelines",
                "Style guide enforcement",
                "Multi-brand support",
                "API access for integrations",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#6366F1] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10 bg-gradient-to-br from-[#6366F1]/15 via-[#8B5CF6]/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Maintain Brand Consistency at Scale</h2>
            <p className="text-xl text-gray-300 mb-8">
              Centralize your brand management and ensure every piece of content aligns with your identity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 shadow-lg shadow-[#6366F1]/30"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#6366F1]/40 text-white hover:bg-[#6366F1]/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
