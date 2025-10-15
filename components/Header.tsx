"use client"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Left side - Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          href="#work"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Work
        </a>
        <a
          href="#about"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contact
        </a>
      </nav>

      {/* Right side - Name & Title */}
      <div className="text-right">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
          Adam <span className="font-medium italic instrument">Fuzesi</span>
        </h1>
        <p className="text-white/70 text-base md:text-lg font-light mt-2">Software Engineer</p>
      </div>
    </header>
  )
}

