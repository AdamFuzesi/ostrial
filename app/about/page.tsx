"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sun, Moon } from "lucide-react"

const introdata = {
  title: "Hey, I'm Adam",
  animated: {
    first: "Aspiring Software Engineer",
    second: "Google Cloud Certified",
    third: "Cloud Engineer Intern",
    fourth: "Hungarian/Canadian",
    fifth: "BCS student minoring in Mathematics"
  },
  description: "Get to know a little about me...",
  intro_img_url: "/images/evenBetterStudious.png",
}

const dataabout = {
  title: "A bit about myself...",
  aboutme: "Currently in my third year at Dalhousie University studying Computer Science with minors in Mathematics and Economics, I also serve as the Bachelor of Computer Science Representative for my faculty, and the Lead Developer for the Blockchain Society. My software engineering journey began early in high school, developing simple Python scripts and applications for personal use, or offering my services to local businesses looking to have leap into technology, and has since expanded to include significant projects and live applications, competitive programming, and professional work through various internships. Beyond programming, I'm passionate about competitive Tennis and Photography, which gives me a creative and disciplined outlet away from the screen. Committed to my continuous learning field, I actively enjoy pursuing new certifications, continuously working on various UI/UX designs, practicing with my fellow competitive programming teammates for the ICPC, and continuously work on new side projects, constantly seeking to enhance my skills and stay ahead in the ever-evolving tech landscape!",
}

const worktimeline = [
  {
    jobtitle: "Platform Engineer",
    where: "Resmed",
    date: "05/2025 - 09/2025",
  },
  {
    jobtitle: "Part-time Software Engineer",
    where: "CleanValley",
    date: "09/2024 - 01/2025",
  },
  {
    jobtitle: "Cloud Engineer",
    where: "DeepSense",
    date: "04/2024 - 09/2024",
  },
  {
    jobtitle: "Healthcare IT programmer",
    where: "Vitality",
    date: "05/2022 - 09/2022",
  },
  {
    jobtitle: "Student Pharmacy Assistant",
    where: "Shoppers",
    date: "11/2018 - 03/2020",
  },
]

export default function AboutPage() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div 
      className={`relative w-full min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Hero Section with ASCII Image Background */}
      <div className="relative h-screen w-full">
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
            About
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
            Scroll to see more
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

      {/* Scrollable Content Section */}
      <div className={`relative z-20 ${isDark ? 'bg-gradient-to-b from-black/50 to-black' : 'bg-gradient-to-b from-white to-gray-50'} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-8 py-20">
          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <h2 
              className={`text-6xl md:text-7xl font-light mb-6 transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-[#8b5cf6]'
              }`}
            >
              {introdata.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-4">
                {Object.values(introdata.animated).map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 rounded-2xl backdrop-blur-sm transition-colors duration-500 ${
                      isDark 
                        ? 'bg-white/5 border border-white/10' 
                        : 'bg-[#8b5cf6]/5 border border-[#8b5cf6]/10'
                    }`}
                  >
                    <p 
                      className={`text-lg font-light transition-colors duration-500 ${
                        isDark ? 'text-white/90' : 'text-[#8b5cf6]/90'
                      }`}
                    >
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div 
                  className={`w-full max-w-md aspect-square rounded-3xl overflow-hidden transition-all duration-500 ${
                    isDark 
                      ? 'shadow-2xl shadow-white/10' 
                      : 'shadow-2xl shadow-[#8b5cf6]/20'
                  }`}
                >
                  <img
                    src={introdata.intro_img_url}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <h2 
              className={`text-6xl md:text-7xl font-light mb-8 transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-[#8b5cf6]'
              }`}
            >
              {dataabout.title}
            </h2>
            <div 
              className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm transition-colors duration-500 ${
                isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-[#8b5cf6]/5 border border-[#8b5cf6]/10'
              }`}
            >
              <p 
                className={`text-lg md:text-xl leading-relaxed font-light transition-colors duration-500 ${
                  isDark ? 'text-white/90' : 'text-gray-800'
                }`}
              >
                {dataabout.aboutme}
              </p>
            </div>
          </motion.div>

          {/* Work Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <h2 
              className={`text-6xl md:text-7xl font-light mb-12 transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-[#8b5cf6]'
              }`}
            >
              Experience
            </h2>
            <div className="space-y-6">
              {worktimeline.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group p-6 md:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                      : 'bg-[#8b5cf6]/5 border border-[#8b5cf6]/10 hover:bg-[#8b5cf6]/10'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 
                        className={`text-2xl md:text-3xl font-light mb-2 transition-colors duration-500 ${
                          isDark ? 'text-white' : 'text-[#8b5cf6]'
                        }`}
                      >
                        {work.jobtitle}
                      </h3>
                      <p 
                        className={`text-lg font-light transition-colors duration-500 ${
                          isDark ? 'text-white/70' : 'text-gray-600'
                        }`}
                      >
                        {work.where}
                      </p>
                    </div>
                    <div 
                      className={`px-4 py-2 rounded-full text-sm font-light transition-colors duration-500 ${
                        isDark 
                          ? 'bg-white/10 text-white/80' 
                          : 'bg-[#8b5cf6]/10 text-[#8b5cf6]'
                      }`}
                    >
                      {work.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

