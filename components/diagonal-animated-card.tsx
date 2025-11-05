"use client"

import { type ReactNode, memo } from "react"

interface DiagonalAnimatedCardProps {
  title: string
  description: string | ReactNode
  className?: string
}

export const DiagonalAnimatedCard = memo(function DiagonalAnimatedCard({ 
  title, 
  description, 
  className = "" 
}: DiagonalAnimatedCardProps) {
  return (
    <div
      className={`rounded-[2rem] bg-[#8b5cf6] relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
      }}
    >
      {/* Multiple angled horizontal scrolling text layers */}
      <div 
        className="absolute overflow-hidden"
        style={{
          top: "-20%",
          left: "-20%",
          right: "-20%",
          bottom: "-20%",
          transform: "rotate(-15deg)",
        }}
      >
        <div className="relative w-full h-full flex flex-col justify-center gap-16">
          {/* Top row - moving left */}
          <div 
            className="flex whitespace-nowrap"
            style={{
              animation: "diagonal-scroll-left 40s linear infinite",
              willChange: "transform",
            }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={`top-first-${i}`} className="text-8xl md:text-9xl font-light text-white px-8">
                {title}
              </span>
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={`top-second-${i}`} className="text-8xl md:text-9xl font-light text-white px-8">
                {title}
              </span>
            ))}
          </div>

          {/* Middle row - moving right */}
          <div 
            className="flex whitespace-nowrap"
            style={{
              animation: "diagonal-scroll-right 40s linear infinite",
              willChange: "transform",
            }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={`mid-first-${i}`} className="text-8xl md:text-9xl font-light text-white px-8">
                {title}
              </span>
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={`mid-second-${i}`} className="text-8xl md:text-9xl font-light text-white px-8">
                {title}
              </span>
            ))}
          </div>

          {/* Bottom row - moving left */}
          <div 
            className="flex whitespace-nowrap"
            style={{
              animation: "diagonal-scroll-left 40s linear infinite",
              willChange: "transform",
            }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={`bot-first-${i}`} className="text-8xl md:text-9xl font-light text-white px-8">
                {title}
              </span>
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={`bot-second-${i}`} className="text-8xl md:text-9xl font-light text-white px-8">
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

