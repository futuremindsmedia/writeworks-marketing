import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, UtensilsCrossed, BookOpen, Star } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Food & Culinary Writing Software | WriteWorks AI",
  description: "AI-powered writing software for food and culinary businesses. Create mouth-watering content that drives orders.",
}

export default function FoodCulinaryPage() {
  const challenges = [
    {
      icon: UtensilsCrossed,
      title: "Menu Descriptions",
      description: "Creating appetizing descriptions for every dish that stand out and drive orders takes extensive time.",
    },
    {
      icon: BookOpen,
      title: "Recipe Content",
      description: "Writing detailed recipes, cooking tips, and culinary guides for your audience requires consistent effort.",
    },
    {
      icon: Star,
      title: "Food Blog Content",
      description: "Maintaining an engaging food blog with reviews, stories, and culinary insights demands regular publishing.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Food & Culinary" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Industry</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              AI Writing Software for Food & Culinary Businesses
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Create mouth-watering content that drives orders. Scale menu descriptions and culinary content effortlessly.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Faster Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4x</div>
                <div className="text-xs text-white/60">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">Customer Engagement</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <Link href="https://app.writeworks.ai/sign-up">
                  Start Free <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Food & Culinary Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Create appetizing, engaging content at scale while capturing the essence of your culinary offerings.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <challenge.icon className="w-8 h-8 text-white/80 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                <p className="text-sm text-white/60">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
