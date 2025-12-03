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
    <div className="bg-black relative min-h-[200vh]">
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
        </motion.div>
      </div>

      {/* Second Section - BentoGrid with Same Background */}
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
        {/* Content */}
        <div className="relative z-10 pt-20 pb-20 px-8">
          <BentoGrid />
        </div>
      </motion.div>
    </div>
  )
}

