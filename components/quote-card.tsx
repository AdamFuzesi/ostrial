"use client"

import { memo } from "react"

export const QuoteCard = memo(function QuoteCard() {
  return (
    <div
      className="rounded-[2rem] bg-[#8b5cf6] p-8 md:p-12 relative overflow-hidden transition-all duration-300 h-full flex items-center justify-center"
      style={{
        boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
        contain: "paint layout",
      }}
    >
      <blockquote className="text-white">
        <p className="text-8xl md:text-7xl font-light leading-relaxed text-balance italic">
          "Stay Hungry. Stay Foolish."
        </p>
        <footer className="mt-6 text-white/80 text-lg">— Steve Jobs</footer>
      </blockquote>
    </div>
  )
})

