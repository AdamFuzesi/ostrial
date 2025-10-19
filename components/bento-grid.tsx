"use client"

import { Linkedin, Github, Mail } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

export function BentoGrid() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-6">
          {/* Left Column - Navigation Cards */}
          <div className="flex flex-col gap-6">
            <AnimatedCard title="About" description="Learn more about my journey and skills" />

            <AnimatedCard title="Involvement" description="Community contributions and leadership roles" />

            {/* Get In Touch Card */}
            <AnimatedCard title="Get In Touch" description="Currently available for hire" />

            <AnimatedCard title="Education" description="Academic background and certifications" />
          </div>

          {/* Middle Column - Large Cards */}
          <div className="flex flex-col gap-6">
            <AnimatedCard title="Projects" description="Explore my latest work and creations" className="flex-1" />

            <AnimatedCard
              title="Hackathons"
              description="Competition wins and collaborative builds"
              className="flex-1"
            />
                </div>

          {/* Right Column - Social Icons and Portrait */}
          <div className="flex flex-col gap-6 lg:w-[400px]">
            <div className="flex gap-4">
              <button 
                className="w-[140px] h-[100px] rounded-[2rem] bg-[#8b5cf6] flex items-center justify-center hover:bg-[#7c3aed] transition-all duration-300"
                style={{
                  boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(139, 92, 246, 0.5), 0 15px 30px -15px rgba(139, 92, 246, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)";
                }}
              >
                <Linkedin className="w-12 h-12 text-white" strokeWidth={1.5} />
              </button>
              <button 
                className="w-[140px] h-[100px] rounded-[2rem] bg-[#8b5cf6] flex items-center justify-center hover:bg-[#7c3aed] transition-all duration-300"
                style={{
                  boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(139, 92, 246, 0.5), 0 15px 30px -15px rgba(139, 92, 246, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)";
                }}
              >
                <Github className="w-12 h-12 text-white" strokeWidth={1.5} />
              </button>
              <button 
                className="w-[140px] h-[100px] rounded-[2rem] bg-[#8b5cf6] flex items-center justify-center hover:bg-[#7c3aed] transition-all duration-300"
                style={{
                  boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(139, 92, 246, 0.5), 0 15px 30px -15px rgba(139, 92, 246, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)";
                }}
              >
                <Mail className="w-12 h-12 text-white" strokeWidth={1.5} />
              </button>
                </div>

            {/* Portrait Image Placeholder */}
            <div 
              className="rounded-[2rem] bg-[#8b5cf6] overflow-hidden flex-1 min-h-[600px]"
              style={{
                boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.35), 0 10px 20px -10px rgba(139, 92, 246, 0.3)",
              }}
            >
              {/* Image will be added later */}
            </div>
                </div>
              </div>
      </div>
    </div>
  )
}
