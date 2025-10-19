"use client"

import { type ReactNode, useState } from "react"

interface AnimatedCardProps {
  title: string
  description: string | ReactNode
  className?: string
}

export function AnimatedCard({ title, description, className = "" }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`rounded-[2rem] bg-[#8b5cf6] p-8 md:p-10 relative overflow-hidden cursor-pointer group transition-all duration-300 ${className}`}
      style={{
        boxShadow: isHovered 
          ? "0 25px 50px -12px rgba(139, 92, 246, 0.5), 0 15px 30px -15px rgba(139, 92, 246, 0.4)" 
          : "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Normal content - visible when not hovered */}
      <div className={`transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
        <h2 className="text-5xl md:text-6xl font-light text-white mb-3">{title}</h2>
        <p className="text-white/90 text-lg leading-relaxed">{description}</p>
      </div>

      {/* Scrolling text - visible when hovered */}
      <div
        className={`absolute inset-0 flex items-end pb-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex whitespace-nowrap animate-scroll-left">
          {/* Repeat the title multiple times for seamless loop */}
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-8xl md:text-9xl font-light text-white px-8 leading-none">
              {title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

