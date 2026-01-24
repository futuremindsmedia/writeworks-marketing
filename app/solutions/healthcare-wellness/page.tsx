import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Shield, Users, Calendar, CheckCircle, Zap, BookOpen, Target } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Content Writing Software for Healthcare & Wellness | WriteWorks",
  description: "Create compliant healthcare content with AI-powered tools. Generate patient education, medical marketing, and clinical materials that maintain accuracy and regulatory compliance.",
}

export default function HealthcareWellnessPage() {
  const challenges = [
    {
      icon: Shield,
      title: "Compliance Requirements",
      description: "Every piece of content must meet strict regulatory standards while remaining accessible to patients.",
    },
    {
      icon: Heart,
      title: "Medical Accuracy",
      description: "Health content requires expert review and precise language to ensure patient safety and trust.",
    },
    {
      icon: Users,
      title: "Patient Education Gap",
      description: "Complex medical information needs to be translated into clear, understandable patient education materials.",
    },
  ]

  const solutions = [
    {
      icon: Shield,
      title: "Compliant Content Creation",
      description: "Generate healthcare content that meets regulatory requirements while remaining accessible to patients.",
    },
    {
      icon: CheckCircle,
      title: "Medical Accuracy",
      description: "Ensure clinical precision and factual accuracy in all patient-facing and medical content.",
    },
    {
      icon: Zap,
      title: "Rapid Content Production",
      description: "Create patient education materials, clinical documentation, and marketing content in hours, not weeks.",
    },
    {
      icon: BookOpen,
      title: "Patient Education",
      description: "Transform complex medical concepts into clear, understandable content that empowers patients.",
    },
  ]

  const audiences = [
    {
      icon: Heart,
      role: "Healthcare Marketers",
      description: "Create compliant marketing content that attracts patients and builds trust.",
    },
    {
      icon: Users,
      role: "Medical Content Writers",
      description: "Scale patient education and clinical content while maintaining accuracy.",
    },
    {
      icon: Shield,
      role: "Compliance Officers",
      description: "Ensure all content meets regulatory standards and maintains brand consistency.",
    },
    {
      icon: Target,
      role: "Healthcare Executives",
      description: "Drive patient engagement and satisfaction with high-quality health content.",
    },
  ]

  const jobs = [
    { task: "Patient education materials", time: "2 hours", saved: "75%" },
    { task: "Health blog articles", time: "1 hour", saved: "80%" },
    { task: "Treatment explanations", time: "30 mins", saved: "85%" },
    { task: "Medical marketing content", time: "3 hours", saved: "70%" },
    { task: "Clinical documentation", time: "2 hours", saved: "65%" },
    { task: "Provider bios & profiles", time: "30 mins", saved: "90%" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Healthcare & Wellness" }]} />

          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-xs text-white/70">Solutions by Industry</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Content Writing Software for Healthcare &amp; Wellness
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Create compliant, accurate health content that builds trust. Scale patient education while maintaining medical precision.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 py-4 border-y border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">75%</div>
                <div className="text-xs text-white/60">Faster Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-xs text-white/60">Patient Engagement</div>
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
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="/demo">
                  <Calendar className="mr-2 w-4 h-4 inline" /> Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Healthcare & Wellness Challenge</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Balance medical accuracy, regulatory compliance, and patient-friendly language at scale.
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

      {/* Solution Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How WriteWorks Solves It</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              AI-powered healthcare content that maintains compliance and accuracy
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5">
                <solution.icon className="w-8 h-8 text-white/80 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-white/60">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs To Be Done */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Jobs To Be Done</h2>
            <p className="text-white/70">Time saved on common healthcare content tasks</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 border-b border-white/10 text-sm font-medium text-white/80">
              <div>Task</div>
              <div className="text-center">New Time</div>
              <div className="text-right">Time Saved</div>
            </div>
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-4 text-sm ${
                  index !== jobs.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="text-white">{job.task}</div>
                <div className="text-center text-white/70">{job.time}</div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                    {job.saved}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Built For</h2>
            <p className="text-white/70">Healthcare professionals and organizations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map((audience, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/10 bg-white/5 text-center">
                <audience.icon className="w-8 h-8 text-white/80 mb-3 mx-auto" />
                <h3 className="text-sm font-semibold mb-2">{audience.role}</h3>
                <p className="text-xs text-white/60">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Healthcare Content?</h2>
            <p className="text-white/70 mb-6">
              Join healthcare organizations creating compliant content that educates patients and builds trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                asChild
              >
                <a href="https://app.writeworks.ai/sign-up">
                  Start Free <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/5"
                asChild
              >
                <a href="/demo">
                  <Calendar className="mr-2 w-4 h-4 inline" /> Talk to Sales
                </a>
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-4">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>
</div>
  )
}
