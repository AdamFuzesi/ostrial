"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sun, Moon } from "lucide-react"

export default function AboutPage() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div 
      className={`relative w-full h-screen overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Full-page ASCII Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/gifs/fullscreenAscii.jpg"
          alt="ASCII Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay - only visible in dark mode */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            isDark ? 'bg-black/30 opacity-100' : 'opacity-0'
          }`} 
        />
      </div>

      {/* Back Button - Top Left */}
      <Link href="/">
        <motion.button
          className={`absolute top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
            isDark 
              ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
              : 'bg-[#8b5cf6]/10 border-[#8b5cf6]/20 text-[#8b5cf6] hover:bg-[#8b5cf6]/20'
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
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
            : 'bg-[#8b5cf6]/10 border-[#8b5cf6]/20 text-[#8b5cf6] hover:bg-[#8b5cf6]/20'
        }`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileTap={{ scale: 0.95 }}
      >
        {isDark ? (
          <Sun className="w-6 h-6" strokeWidth={1.5} />
        ) : (
          <Moon className="w-6 h-6" strokeWidth={1.5} />
        )}
      </motion.button>

      {/* Content - Text on Both Sides */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-16 md:px-24">
        {/* Left Side - "About." */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 
            className={`text-8xl md:text-9xl font-light tracking-tight transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-[#8b5cf6]'
            }`}
          >
            About.
          </h1>
        </motion.div>

        {/* Right Side - "Me" */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 
            className={`text-8xl md:text-9xl font-light tracking-tight transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-[#8b5cf6]'
            }`}
          >
            Me
          </h1>
        </motion.div>
      </div>

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
              isDark ? 'text-white/70' : 'text-[#8b5cf6]/70'
            }`}
          >
            Scroll to learn more
          </span>
          <motion.svg
            className={`w-6 h-6 transition-colors duration-500 ${
              isDark ? 'text-white/70' : 'text-[#8b5cf6]/70'
            }`}
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
  )
}

