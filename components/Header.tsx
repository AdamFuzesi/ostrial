"use client"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Left side - Navigation  no need for navigation*/}


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

