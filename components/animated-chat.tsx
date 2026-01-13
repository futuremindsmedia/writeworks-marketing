"use client"

import { useEffect, useState } from "react"
import { Sparkles, User } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
  delay?: number
}

interface AnimatedChatProps {
  messages: Message[]
  className?: string
}

export function AnimatedChat({ messages, className = "" }: AnimatedChatProps) {
  const [visibleMessages, setVisibleMessages] = useState<number>(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (visibleMessages >= messages.length) {
      // Reset animation after a pause
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0)
        setCurrentText("")
      }, 3000)
      return () => clearTimeout(resetTimer)
    }

    const currentMessage = messages[visibleMessages]
    const delay = currentMessage.delay || 1000

    // Wait before showing next message
    const messageTimer = setTimeout(() => {
      setIsTyping(true)
      let charIndex = 0

      // Typewriter effect
      const typingInterval = setInterval(() => {
        if (charIndex < currentMessage.content.length) {
          setCurrentText(currentMessage.content.slice(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
          setCurrentText("")
          setVisibleMessages((prev) => prev + 1)
        }
      }, 30) // Speed of typing

      return () => clearInterval(typingInterval)
    }, delay)

    return () => clearTimeout(messageTimer)
  }, [visibleMessages, messages])

  return (
    <div className={`rounded-xl p-6 h-[400px] flex flex-col ${className}`}>
      {/* Chat Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">WriteWorks AI</div>
          <div className="text-xs text-muted-foreground">Online</div>
        </div>
      </div>

      <div className="flex-1 relative min-h-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="space-y-4">
            {messages.slice(0, visibleMessages).map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 animate-fade-in ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white"
                      : "bg-white/5 text-gray-200 border border-white/10"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Currently typing message */}
            {isTyping && currentText && (
              <div className="flex gap-3 animate-fade-in">
                {messages[visibleMessages].role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    messages[visibleMessages].role === "user"
                      ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white ml-auto"
                      : "bg-white/5 text-gray-200 border border-white/10"
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    {currentText}
                    <span className="inline-block w-0.5 h-4 bg-current ml-0.5 animate-pulse" />
                  </p>
                </div>
                {messages[visibleMessages].role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && !currentText && (
              <div className="flex gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
