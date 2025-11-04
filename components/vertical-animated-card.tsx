"use client"

import { type ReactNode, memo, useMemo } from "react"

interface VerticalAnimatedCardProps {
  title: string
  description: string | ReactNode
  className?: string
}

export const VerticalAnimatedCard = memo(function VerticalAnimatedCard({ 
  title, 
  description, 
  className = "" 
}: VerticalAnimatedCardProps) {
  // Memoize the repeated title elements to prevent re-creation
  const repeatedTitles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="text-7xl md:text-9xl font-light text-white py-6 leading-none text-center">
          {title}
        </span>
      )),
    [title]
  )

  return (
    <div
      className={`rounded-[2rem] bg-[#8b5cf6] p-8 md:p-10 relative overflow-hidden cursor-pointer group transition-all duration-300 ${className}`}
      style={{
        boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
        contain: "paint layout",
      }}
    >
      {/* Vertical scrolling text - always visible and animating */}
      <div className="absolute inset-0 flex flex-col items-center justify-start overflow-hidden">
        <div className="flex flex-col animate-scroll-down">
          {repeatedTitles}
        </div>
      </div>
    </div>
  )
})

