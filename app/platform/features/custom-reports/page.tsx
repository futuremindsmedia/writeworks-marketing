import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { FileText, BarChart, Download, Filter, Calendar, Share2, CheckCircle, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Custom Reports Software | WriteWorks AI",
  description: "Create custom reports tailored to your needs with flexible data visualization and export options.",
}

const challenges = [
  {
    title: "Generic Reports",
    description: "Standard reports don't provide the specific insights stakeholders need for decision-making.",
  },
  {
    title: "Manual Data Gathering",
    description: "Spending hours pulling data from multiple sources to create comprehensive reports.",
  },
  {
    title: "Inconsistent Formatting",
    description: "Reports lack visual consistency and professional presentation for stakeholders.",
  },
]

const solutions = [
  {
    title: "Flexible Report Builder",
    description: "Drag-and-drop interface to create reports with exactly the metrics you need.",
  },
  {
    title: "Automated Data Aggregation",
    description: "Pull data from all content sources automatically into unified reports.",
  },
  {
    title: "Professional Templates",
    description: "Beautiful, consistent report templates ready for stakeholder presentations.",
  },
]

const capabilities = [
  {
    icon: FileText,
    title: "Tailored Insights",
    description: "Create reports that focus on the metrics that matter most to you.",
  },
  {
    icon: BarChart,
    title: "Visual Data",
    description: "Present data with charts, graphs, and visualizations for clarity.",
  },
  {
    icon: Download,
    title: "Easy Export",
    description: "Export reports in multiple formats for sharing and presentations.",
  },
]

const jobsToBeDone = [
  { task: "Create stakeholder report", before: "4 hours", after: "20 min", saved: "92%" },
  { task: "Gather content metrics", before: "2 hours", after: "Auto", saved: "100%" },
  { task: "Format report visuals", before: "1 hour", after: "5 min", saved: "92%" },
  { task: "Schedule recurring reports", before: "30 min", after: "2 min", saved: "93%" },
]

const targetAudience = [
  { role: "Marketing Leaders", description: "Present content performance to executive stakeholders" },
  { role: "Content Directors", description: "Track team productivity and content output metrics" },
  { role: "Analytics Teams", description: "Build custom dashboards for content intelligence" },
]

const features = [
  { icon: FileText, text: "Custom report builder" },
  { icon: BarChart, text: "Data visualization tools" },
  { icon: Download, text: "Multiple export formats" },
  { icon: Filter, text: "Advanced filtering options" },
  { icon: Calendar, text: "Scheduled report generation" },
  { icon: Share2, text: "Team sharing capabilities" },
]

export default function CustomReportsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumbs */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 pt-8">
          <nav className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Platform", href: "/platform" },
                { label: "Features", href: "/platform/features" },
                { label: "Custom Reports" },
              ]}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom Content Reports: Tell Your Story with Data
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Create custom reports tailored to your needs with flexible data visualization and export options.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
                <Link href="https://app.writeworks.ai/sign-up">Start Free Trial <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">92%</div>
                <div className="text-xs text-white/60">Faster Reports</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Automated Data</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white/60">Report Templates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Reporting Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-white/70 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How WriteWorks Solves This</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-white/70 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
              >
                <capability.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-white/70 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs to be Done */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Time Saved on Key Tasks</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 text-sm font-semibold text-white/80">
                <div>Task</div>
                <div className="text-center">Before</div>
                <div className="text-center">After</div>
                <div className="text-center">Saved</div>
              </div>
              {jobsToBeDone.map((job, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 last:border-b-0 text-sm"
                >
                  <div className="text-white/70">{job.task}</div>
                  <div className="text-center text-white/50">{job.before}</div>
                  <div className="text-center text-white">{job.after}</div>
                  <div className="text-center text-green-400 font-semibold">{job.saved}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Built For</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-5 text-center hover:border-white/20 transition-colors"
              >
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{audience.role}</h3>
                <p className="text-white/70 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 md:py-14 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What's Included</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Create Custom Reports?</h2>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Start building custom reports today and get the insights you need, your way.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90">
            <Link href="https://app.writeworks.ai/sign-up">Get Started Free <ArrowRight className="ml-2 w-4 h-4 inline" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
