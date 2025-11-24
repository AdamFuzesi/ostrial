"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sun, Moon, Copy } from "lucide-react"

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
  const [copied, setCopied] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("adam.fuzesi@dal.ca")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

      <div className={`relative z-20 transition-colors duration-500 ${isDark ? "bg-black" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-24 md:py-32">
          {/* Name and Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            {/* Large Name Heading - Full Width */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-7xl md:text-8xl lg:text-9xl font-black mb-16 leading-[0.9] tracking-tighter transition-colors duration-500 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              GET TO
              <br />
              KNOW ME
            </motion.h1>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left Column - Email */}
              <div>
                {/* Email with Copy Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={copyEmail}
                    className={`flex items-center gap-2 group transition-colors duration-300 ${
                      isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <span className="text-base md:text-lg font-light">adam.fuzesi@dal.ca</span>
                    <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`text-sm font-light mt-2 block ${isDark ? "text-white/50" : "text-gray-500"}`}
                    >
                      Copied!
                    </motion.span>
                  )}
                </motion.div>
              </div>

              {/* Right Column - Introduction Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p
                  className={`text-lg md:text-xl leading-relaxed font-light transition-colors duration-500 ${
                    isDark ? "text-white/80" : "text-gray-700"
                  }`}
                >
                  Hello, I'm a student specializing in software engineering with experience in cloud computing and
                  full-stack development — based in Halifax, working on innovative projects. Let's build something
                  great!
                </p>
              </motion.div>
            </div>

          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Section Label */}
              <div className="lg:col-span-3">
                <h2
                  className={`text-3xl md:text-4xl font-light transition-colors duration-500 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  about.
                </h2>
              </div>

              {/* Content */}
              <div className="lg:col-span-9">
                <p
                  className={`text-base md:text-lg leading-relaxed font-light transition-colors duration-500 ${
                    isDark ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {dataabout.aboutme}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Section Label */}
              <div className="lg:col-span-3">
                <h2
                  className={`text-3xl md:text-4xl font-light transition-colors duration-500 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  experience.
                </h2>
              </div>

              {/* Timeline Items */}
              <div className="lg:col-span-9 space-y-12">
                {worktimeline.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-4">
                      {/* Position */}
                      <div>
                        <span
                          className={`text-xs uppercase tracking-wider font-light mb-2 block transition-colors duration-500 ${
                            isDark ? "text-white/40" : "text-gray-400"
                          }`}
                        >
                          POSITION
                        </span>
                        <h3
                          className={`text-2xl md:text-3xl font-light transition-colors duration-500 ${
                            isDark ? "text-white" : "text-black"
                          }`}
                        >
                          {work.jobtitle}
                        </h3>
                      </div>

                      {/* Company and Date Grid */}
                      <div className="grid md:grid-cols-2 gap-6 pt-2">
                        <div>
                          <span
                            className={`text-xs uppercase tracking-wider font-light mb-2 block transition-colors duration-500 ${
                              isDark ? "text-white/40" : "text-gray-400"
                            }`}
                          >
                            COMPANY
                          </span>
                          <p
                            className={`text-lg font-light transition-colors duration-500 ${
                              isDark ? "text-white/80" : "text-gray-700"
                            }`}
                          >
                            {work.where}
                          </p>
                        </div>

                        <div>
                          <span
                            className={`text-xs uppercase tracking-wider font-light mb-2 block transition-colors duration-500 ${
                              isDark ? "text-white/40" : "text-gray-400"
                            }`}
                          >
                            DURATION
                          </span>
                          <p
                            className={`text-lg font-light transition-colors duration-500 ${
                              isDark ? "text-white/80" : "text-gray-700"
                            }`}
                          >
                            {work.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Divider Line */}
                    {index < worktimeline.length - 1 && (
                      <div
                        className={`mt-12 h-px transition-colors duration-500 ${
                          isDark ? "bg-white/10" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

