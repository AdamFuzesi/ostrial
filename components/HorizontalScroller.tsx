"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/gifs/firstin.png",
    alt: "First In",
    title: "First In",
    description: "Full scale mobile application for events and line skipping.",
  },
  {
    id: 2,
    image: "/gifs/yorigo.png",
    alt: "Yorigo",
    title: "Yorigo",
    description: "Social media application for recipes and ingredients ordered straight to your door.",
  },
  {
    id: 3,
    image: "/gifs/vision.png",
    alt: "Vision",
    title: "Vision",
    description: "Easy to use unreal engine inspired no code AVS builder.",
  },
  {
    id: 4,
    image: "/gifs/redbullGood.png",
    alt: "Red Bull",
    title: "Red Bull",
    description: "UI/UX designer for team Canada Redbull Basement Pitch competition.",
  },
  {
    id: 5,
    image: "/gifs/mosaic.png",
    alt: "Mosaic",
    title: "Mosaic",
    description: "Reliability of traditional payment systems with the innovation of blockchain technology..",
  },
  {
    id: 6,
    image: "/gifs/kickit.png",
    alt: "Kick It",
    title: "Kick It",
    description: "Website development venture for local businesses. Full scale CRM system built.",
  },
  {
    id: 7,
    image: "/gifs/aptos.png",
    alt: "Aptos",
    title: "Aptos",
    description: "AptosPixel is a decentralized pixel art platform built on the Aptos blockchain.",
  },
  {
    id: 8,
    image: "/gifs/3dportfolio.png",
    alt: "3D Portfolio",
    title: "3D Portfolio",
    description: "THREEJS Interactive 3D portfolio experience. Full model built on blender from scratch.",
  },
  {
    id: 9,
    image: "/gifs/challenger.png",
    alt: "Challenger",
    title: "Challenger",
    description: "Competitive matchmaking IOS application for racket sports.",
  },
]

export default function HorizontalScroller() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const targetScrollProgress = useRef(0)
  const currentScrollProgress = useRef(0)
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const animate = () => {
      // Lerp (linear interpolation) for smooth, heavy scrolling
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor
      }

      // Lower factor = heavier/slower movement (0.05 = very heavy, 0.15 = lighter)
      const lerpFactor = 0.08

      currentScrollProgress.current = lerp(currentScrollProgress.current, targetScrollProgress.current, lerpFactor)

      // Calculate which slide we're on
      const totalSlides = slides.length
      const currentSlide = Math.min(Math.floor(currentScrollProgress.current * totalSlides), totalSlides - 1)

      setCurrentIndex(currentSlide)

      // Translate content horizontally based on smoothed progress
      const maxTranslate = -(slides.length - 1) * 100
      const translateX = currentScrollProgress.current * maxTranslate

      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${translateX}vw)`
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight - container.clientHeight
      const progress = scrollTop / scrollHeight

      targetScrollProgress.current = progress
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scrollHeight = container.scrollHeight - container.clientHeight
    const targetScroll = (index / (slides.length - 1)) * scrollHeight

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-50">
      <div
        ref={containerRef}
        className="h-screen w-full overflow-y-auto overflow-x-hidden scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Spacer to create scroll height - height = slides.length * 100vh */}
        <div style={{ height: `${slides.length * 100}vh` }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={contentRef}
          className="flex h-full will-change-transform"
          style={{
            width: `${slides.length * 100}vw`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative h-full w-screen flex flex-col items-center justify-center gap-6">
              <div className="relative h-[50vh] w-[60vw] overflow-hidden">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  draggable={false}
                />
              </div>
              
              {/* Project Title and Description */}
              <div className="text-center px-8 max-w-[60vw]">
                <h3 className="text-neutral-800 text-lg md:text-xl font-light tracking-wide mb-1">
                  {slide.title}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm font-light tracking-wide">
                  {slide.description}
                </p>
              </div>
              
              {/* Slide number indicator */}
              <div className="absolute left-8 bottom-8 md:left-16 md:bottom-16">
                <p className="text-neutral-400 text-sm md:text-base font-light tracking-wider">
                  {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 flex gap-2 pointer-events-auto z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-8 bg-neutral-800" : "w-2 bg-neutral-400 hover:bg-neutral-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      {currentIndex > 0 && (
        <button
          onClick={() => scrollToSlide(currentIndex - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg pointer-events-auto z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {currentIndex < slides.length - 1 && (
        <button
          onClick={() => scrollToSlide(currentIndex + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg pointer-events-auto z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

