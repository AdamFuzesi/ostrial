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
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="bg-black">
      {/* Hero Section with Shader Background */}
      <div className="relative h-screen w-full">
        <motion.div
          ref={containerRef}
          style={{ opacity, scale }}
          className="fixed inset-0 h-screen w-full z-0"
        >
        <ShaderBackground>
          <Header />
          <HeroContent />
        </ShaderBackground>

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

      {/* Second Section - BentoGrid with Soft Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative min-h-screen z-20"
        style={{
          background: "linear-gradient(135deg, #f8f7ff 0%, #faf9ff 50%, #f5f3ff 100%)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 pt-20 pb-20 px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BentoGrid />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

