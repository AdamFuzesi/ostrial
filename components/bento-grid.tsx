"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import { VerticalAnimatedCard } from "@/components/vertical-animated-card"
import { DiagonalAnimatedCard } from "@/components/diagonal-animated-card"
import { QuoteCard } from "@/components/quote-card"

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const BentoGrid = memo(function BentoGrid() {
  return (
    <div className="p-6 md:p-8">
      <div className="mx-auto max-w-[1800px]">
        {/* FIRST PAGE - Main Feature Cards */}
        <motion.div
          className="min-h-screen grid grid-cols-1 lg:grid-cols-[400px_1fr_400px] gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left - About (Tall Vertical Card) */}
          <motion.div className="h-[700px]" variants={itemVariants}>
            <Link href="/about" className="block h-full">
              <VerticalAnimatedCard title="About" description="Learn more about my journey and skills" className="h-full" />
            </Link>
          </motion.div>

          {/* Middle - Skills and Quote */}
          <motion.div className="flex flex-col gap-6 h-[700px]" variants={itemVariants}>
            <AnimatedCard title="Skills" description="Full-stack development, UI/UX design, and modern web technologies" className="h-[330px]" />
            <div className="flex-1">
              <QuoteCard />
            </div>
          </motion.div>

          {/* Right - Portrait Image */}
          <motion.div className="h-[700px]" variants={itemVariants}>
            <div
              className="rounded-[2rem] bg-white overflow-hidden h-full flex items-center justify-center"
              style={{
                boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
              }}
            >
              <img 
                src="/gifs/ascii-better.png" 
                alt="ASCII Art Portrait" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* SECOND PAGE - Additional Cards with Unique Layout */}
        <motion.div
          className="min-h-screen"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_400px] gap-6 auto-rows-min">
            {/* Projects - Large spanning card with inverted colors */}
            <motion.div className="lg:col-span-2 lg:row-span-1" variants={itemVariants}>
              <Link href="/projects" className="block h-full">
                <div
                  className="rounded-[2rem] bg-white p-8 md:p-10 relative overflow-hidden cursor-pointer group transition-all duration-300 h-[350px]"
                  style={{
                    boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
                    willChange: "box-shadow",
                  }}
                >
                  {/* Normal content */}
                  <div className="transition-opacity duration-300 group-hover:opacity-0">
                    <h2 className="text-5xl md:text-6xl font-light text-[#8b5cf6] mb-3">Projects</h2>
                    <p className="text-[#8b5cf6]/90 text-lg leading-relaxed">Explore my latest work and creations</p>
                  </div>

                  {/* Scrolling text on hover */}
                  <div className="absolute inset-0 flex items-end pb-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex whitespace-nowrap animate-scroll-left">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="text-8xl md:text-9xl font-light text-[#8b5cf6] px-8 leading-none">
                          Projects
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Education - Tall diagonal animated card on the right */}
            <motion.div className="lg:row-span-3 h-[700px]" variants={itemVariants}>
              <DiagonalAnimatedCard title="Education" description="Academic background and certifications" className="h-full" />
            </motion.div>

            {/* Hackathons */}
            <motion.div variants={itemVariants}>
              <AnimatedCard
                title="Hackathons"
                description="Competition wins and collaborative builds"
                className="h-[280px]"
              />
            </motion.div>

            {/* Involvement */}
            <motion.div variants={itemVariants}>
              <AnimatedCard title="Involvement" description="Community contributions and leadership roles" className="h-[280px]" />
            </motion.div>

            {/* Get In Touch Card with Social Icons - Spanning 2 columns */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div
                className="rounded-[2rem] bg-[#8b5cf6] p-8 md:p-10 h-[280px] flex flex-col justify-between transition-all duration-300"
                style={{
                  boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
                }}
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-white mb-2">Get In Touch</h2>
                  <p className="text-white/90 text-base leading-relaxed">Currently available for hire</p>
                </div>

                <div className="flex gap-3">
                  <button
                    className="w-[90px] h-[70px] rounded-[1.5rem] bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    style={{
                      boxShadow: "0 8px 16px -6px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Linkedin className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </button>
                  <button
                    className="w-[90px] h-[70px] rounded-[1.5rem] bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    style={{
                      boxShadow: "0 8px 16px -6px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Github className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </button>
                  <button
                    className="w-[90px] h-[70px] rounded-[1.5rem] bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    style={{
                      boxShadow: "0 8px 16px -6px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
})
