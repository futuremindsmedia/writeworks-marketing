import { Sparkles } from "lucide-react"

interface KeyHighlightsProps {
  highlights: string[]
}

export function KeyHighlights({ highlights }: KeyHighlightsProps) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-[1px] mb-12">
      <div className="rounded-[11px] bg-black/90 backdrop-blur-sm p-6 md:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-[#A5B4FC]" />
          <h3 className="text-lg font-bold text-white">Key Highlights</h3>
        </div>
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white text-xs font-bold mt-0.5">
                {index + 1}
              </span>
              <span className="text-gray-300 leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
