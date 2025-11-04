"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ShaderBackground from "@/components/ShaderBackground"
import Header from "@/components/Header"
import HeroContent from "@/components/HeroContent"
import { BentoGrid } from "@/components/bento-grid"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    // Remove smooth scroll for better performance
    document.documentElement.style.scrollBehavior = "auto"
  }, [])

  return (
    <div className="bg-black relative">
      {/* Global Shader Background - Fixed */}
      <div className="fixed inset-0 w-full h-full z-0">
        <ShaderBackground>
          <div />
        </ShaderBackground>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen w-full z-10">
        <motion.div
          ref={containerRef}
          style={{ 
            opacity, 
            scale,
            willChange: "opacity, transform",
          }}
          className="relative h-screen w-full"
        >
          <Header />
          <HeroContent />

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/50 text-xs font-light">Scroll to explore</span>
              <svg
                className="w-6 h-6 text-white/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Second Section - BentoGrid with Glass Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative min-h-screen z-20"
        style={{
          willChange: "opacity",
        }}
      >
        {/* Glass Overlay */}
        <div 
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(40px) saturate(150%)",
            WebkitBackdropFilter: "blur(40px) saturate(150%)",
          }}
        />
        
        {/* Subtle gradient overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div className="relative z-10 pt-20 pb-20 px-8">
          <BentoGrid />
        </div>
      </motion.div>
    </div>
  )
}

