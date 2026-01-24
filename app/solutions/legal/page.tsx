import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Scale, FileText, Shield } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Legal Writing Software | WriteWorks AI",
  description: "AI-powered writing software for legal professionals. Create clear, accurate legal content and client communications.",
}

export default function LegalPage() {
  const challenges = [
    {
      icon: FileText,
      title: "Document Drafting",
      description: "Creating legal documents, contracts, and briefs requires precision and extensive time investment.",
    },
    {
      icon: Scale,
      title: "Client Communication",
      description: "Translating complex legal concepts into clear client communications without losing accuracy is challenging.",
    },
    {
      icon: Shield,
      title: "Compliance Documentation",
      description: "Maintaining comprehensive, accurate records and compliance documentation demands constant attention.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Legal" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Industry</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              AI Writing Software for Legal Professionals
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Create clear, accurate legal content and client communications faster. Maintain precision while increasing productivity.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">65%</div>
                <div className="text-xs text-white/60">Faster Drafting</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">Client Clarity</div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Legal Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Balance precision, clarity, and productivity in legal document creation and client communication.
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
