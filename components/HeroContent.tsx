"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroContent() {
  // Track vertical scroll position
  const { scrollY } = useScroll()
  
  // Title moves down as user scrolls
  const yTitle = useTransform(scrollY, [0, 500], [0, 200])
  
  // Description moves up as user scrolls
  const yDescription = useTransform(scrollY, [0, 500], [0, -100])
  
  // Both fade out
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <main className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-12">
      <div className="max-w-[90rem] mx-auto w-full">
        
        {/* Title with downward parallax */}
        <motion.div style={{ y: yTitle, opacity }} className="flex flex-col">
          <h1 className="text-[12vw] leading-[0.85] font-light tracking-tighter text-white/90 select-none">
            ADAM <span className="font-medium italic instrument text-white/70">FUZESI</span>
          </h1>
        </motion.div>
        
        {/* Description with upward parallax */}
        <motion.div 
          style={{ y: yDescription, opacity }} 
          className="flex flex-col justify-between items-start mt-12 gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-light text-white/80 leading-snug">
              Software <span className="font-medium italic instrument">Engineer</span>
              <br />
              Design, Build, Ship, Repeat
            </h2>
          </div>
          
          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#work"
              className="px-8 py-3 rounded-full bg-white text-black font-normal transition-all duration-200 hover:bg-white/90 cursor-pointer inline-block"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer inline-block"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
      </motion.div>
    </main>
  )
}

