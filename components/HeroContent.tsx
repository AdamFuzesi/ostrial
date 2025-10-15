"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
      <div className="text-left">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl md:leading-[1.15] tracking-tight font-light text-white mb-6">
          Building <span className="font-medium italic instrument">elegant</span> solutions
          <br />
          <span className="font-light tracking-tight text-white">through innovative code</span>
        </h2>

        {/* Description */}
        <p className="text-sm font-light text-white/70 mb-8 leading-relaxed max-w-xl">
          Full-stack developer passionate about creating beautiful, performant web experiences. 
          Specializing in modern frameworks, UI/UX design, and turning complex problems into simple solutions.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#work"
            className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer inline-block"
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
      </div>
    </main>
  )
}

