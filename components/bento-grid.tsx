"use client"

import { memo } from "react"
import { Linkedin, Github, Mail } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"
import { VerticalAnimatedCard } from "@/components/vertical-animated-card"
import { QuoteCard } from "@/components/quote-card"

export const BentoGrid = memo(function BentoGrid() {
  return (
    <div className="p-6 md:p-8">
      <div className="mx-auto max-w-[1800px]">
        {/* FIRST PAGE - Main Feature Cards */}
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[400px_1fr_400px] gap-6 pb-20">
          {/* Left - About (Tall Vertical Card) */}
          <div className="h-[700px]">
            <VerticalAnimatedCard title="About" description="Learn more about my journey and skills" className="h-full" />
          </div>

          {/* Middle - Skills and Quote */}
          <div className="flex flex-col gap-6 h-[700px]">
            <AnimatedCard title="Skills" description="Full-stack development, UI/UX design, and modern web technologies" className="h-[330px]" />
            <div className="flex-1">
              <QuoteCard />
            </div>
          </div>

          {/* Right - Portrait Image */}
          <div className="h-[700px]">
            <div
              className="rounded-[2rem] bg-[#8b5cf6] overflow-hidden h-full"
              style={{
                boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
              }}
            >
              {/* Image will be added later */}
            </div>
          </div>
        </div>

        {/* SECOND PAGE - Additional Cards */}
        <div className="min-h-screen pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard title="Projects" description="Explore my latest work and creations" className="h-[280px]" />

            <AnimatedCard
              title="Hackathons"
              description="Competition wins and collaborative builds"
              className="h-[280px]"
            />

            <AnimatedCard title="Involvement" description="Community contributions and leadership roles" className="h-[280px]" />

            <AnimatedCard title="Education" description="Academic background and certifications" className="h-[280px]" />

            {/* Get In Touch Card with Social Icons */}
            <div className="lg:col-span-1">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
