"use client"

import { useEffect, useState } from "react"

export function ArticleProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener("scroll", updateProgress)
    updateProgress()

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/50">
      <div
        className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] transition-all duration-150 ease-out shadow-lg shadow-[#6366F1]/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
