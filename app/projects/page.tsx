"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sun, Moon } from "lucide-react"
import { SpinningAsciiCube } from "@/components/SpinningAsciiCube"
import HorizontalScroller from "@/components/HorizontalScroller"

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="w-full">
      {/* Landing Section */}
      <div 
        className={`relative w-full h-screen transition-colors duration-500 ${
          isDark ? 'bg-[#b2b2b2]' : 'bg-white'
        }`}
      >
        {/* Optional subtle background gradient */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className={`absolute inset-0 transition-opacity duration-500 ${
              isDark 
                ? 'bg-gradient-to-br from-[#b2b2b2] via-[#b2b2b2] to-[#9a9aaa] opacity-100' 
                : 'bg-gradient-to-br from-white via-white to-purple-50 opacity-100'
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

        {/* Content Layout */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-8 md:px-16">
          <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            {/* Left Side - "My" */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 
                className={`text-8xl md:text-9xl font-light tracking-tight transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-[#8b5cf6]'
                }`}
              >
                My
              </h1>
            </motion.div>

            {/* Center - Spinning ASCII Cube */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <SpinningAsciiCube color={isDark ? 'white' : '#8b5cf6'} />
            </motion.div>

            {/* Right Side - "Projects." */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 
                className={`text-7xl md:text-8xl font-light tracking-tight transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-[#8b5cf6]'
                }`}
              >
                Projects.
              </h1>
            </motion.div>
          </div>
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
              Scroll to see projects
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

      {/* Horizontal Scroller Section */}
      <HorizontalScroller />
    </div>
  )
}

