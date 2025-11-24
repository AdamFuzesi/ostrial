"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sun, Moon } from "lucide-react"

export default function EducationPage() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`relative w-full min-h-screen transition-colors duration-500 ${isDark ? "bg-black" : "bg-white"}`}>
      {/* Hero Section with ASCII Image and Text */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 w-full h-full flex">
          {/* Left Side - ASCII Image */}
          <div className="w-1/2 h-full relative">
            <img
              src="/gifs/handupascii.png"
              alt="ASCII Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay - only visible in dark mode */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isDark ? "bg-black/30 opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Right Side - Text */}
          <div className={`w-1/2 h-full relative flex items-center justify-center transition-colors duration-500 ${
            isDark ? "bg-[#b2b2b2]" : "bg-white"
          }`}>
            <div className="relative z-10">
              {/* "My" - smaller, positioned above */}
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className={`text-7xl md:text-8xl font-light tracking-tight mb-4 transition-colors duration-500 ${
                  isDark ? "text-white" : "text-[#8b5cf6]"
                }`}
              >
                My
              </motion.h1>

              {/* "Education" - larger, positioned below */}
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className={`text-8xl md:text-9xl font-light tracking-tight transition-colors duration-500 ${
                  isDark ? "text-white" : "text-[#8b5cf6]"
                }`}
              >
                Education
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Back Button - Top Left */}
        <Link href="/">
          <motion.button
            className={`absolute top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
              isDark
                ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                : "bg-[#8b5cf6]/10 border-[#8b5cf6]/20 text-[#8b5cf6] hover:bg-[#8b5cf6]/20"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            <span className="font-light text-sm">Back</span>
          </motion.button>
        </Link>

        {/* Theme Toggle Button - Top Right */}
        <motion.button
          onClick={toggleTheme}
          className={`absolute top-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-md border transition-all duration-300 ${
            isDark
              ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
              : "bg-[#8b5cf6]/10 border-[#8b5cf6]/20 text-[#8b5cf6] hover:bg-[#8b5cf6]/20"
          }`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? <Sun className="w-6 h-6" strokeWidth={1.5} /> : <Moon className="w-6 h-6" strokeWidth={1.5} />}
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className={`text-xs font-light transition-colors duration-500 ${
                isDark ? "text-white/70" : "text-[#8b5cf6]/70"
              }`}
            >
              Scroll to see more
            </span>
            <motion.svg
              className={`w-6 h-6 transition-colors duration-500 ${isDark ? "text-white/70" : "text-[#8b5cf6]/70"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      {/* Content sections will go here */}
      <div className={`relative z-20 transition-colors duration-500 ${isDark ? "bg-black" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-24 md:py-32">
          <p className={`text-lg ${isDark ? "text-white" : "text-black"}`}>
            Education content coming soon...
          </p>
        </div>
      </div>
    </div>
  )
}

