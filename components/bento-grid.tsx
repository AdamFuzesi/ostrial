"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import {
  User,
  Mail,
  Users,
  FolderGit2,
  Trophy,
  Briefcase,
  Code,
  Award,
  Calendar,
  Target,
  Lightbulb,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

const mainSections = [
  {
    id: "about",
    title: "About",
    description: "Learn more about me",
    icon: User,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch",
    icon: Mail,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-green-500/20 to-green-500/5",
  },
  {
    id: "involvement",
    title: "Involvement",
    description: "Community & activities",
    icon: Users,
    className: "md:col-span-1 md:row-span-2",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    id: "projects",
    title: "Projects",
    description: "My work & creations",
    icon: FolderGit2,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-orange-500/20 to-orange-500/5",
  },
  {
    id: "hackathons",
    title: "Hackathons",
    description: "Competition highlights",
    icon: Trophy,
    className: "md:col-span-3 md:row-span-1",
    gradient: "from-red-500/20 to-red-500/5",
  },
]

const sectionContent: Record<string, any[]> = {
  about: [
    {
      id: "bio",
      title: "Biography",
      description: "My story and background",
      icon: User,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-blue-500/20 to-blue-500/5",
    },
    {
      id: "skills",
      title: "Skills",
      description: "Technical expertise",
      icon: Code,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      id: "experience",
      title: "Experience",
      description: "Professional journey",
      icon: Briefcase,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      id: "interests",
      title: "Interests",
      description: "What drives me",
      icon: Lightbulb,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-purple-500/20 to-purple-500/5",
    },
  ],
  contact: [
    {
      id: "email",
      title: "Email",
      description: "Send me a message",
      icon: Mail,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-green-500/20 to-green-500/5",
    },
    {
      id: "social",
      title: "Social Media",
      description: "Connect online",
      icon: Users,
      className: "md:col-span-1 md:row-span-2",
      gradient: "from-teal-500/20 to-teal-500/5",
    },
    {
      id: "schedule",
      title: "Schedule",
      description: "Book a meeting",
      icon: Calendar,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-emerald-500/20 to-emerald-500/5",
    },
  ],
  involvement: [
    {
      id: "organizations",
      title: "Organizations",
      description: "Groups I'm part of",
      icon: Users,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-purple-500/20 to-purple-500/5",
    },
    {
      id: "volunteer",
      title: "Volunteer Work",
      description: "Giving back",
      icon: Target,
      className: "md:col-span-1 md:row-span-2",
      gradient: "from-pink-500/20 to-pink-500/5",
    },
    {
      id: "leadership",
      title: "Leadership",
      description: "Roles & responsibilities",
      icon: Award,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-violet-500/20 to-violet-500/5",
    },
  ],
  projects: [
    {
      id: "web",
      title: "Web Projects",
      description: "Full-stack applications",
      icon: Code,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-orange-500/20 to-orange-500/5",
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      description: "iOS & Android",
      icon: FolderGit2,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-amber-500/20 to-amber-500/5",
    },
    {
      id: "opensource",
      title: "Open Source",
      description: "Community contributions",
      icon: Users,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-yellow-500/20 to-yellow-500/5",
    },
    {
      id: "research",
      title: "Research",
      description: "Academic work",
      icon: Lightbulb,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-red-500/20 to-red-500/5",
    },
  ],
  hackathons: [
    {
      id: "wins",
      title: "Competition Wins",
      description: "Awards & recognition",
      icon: Trophy,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-red-500/20 to-red-500/5",
    },
    {
      id: "projects",
      title: "Hackathon Projects",
      description: "Built in 24-48 hours",
      icon: Code,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-rose-500/20 to-rose-500/5",
    },
    {
      id: "upcoming",
      title: "Upcoming Events",
      description: "What's next",
      icon: Calendar,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-pink-500/20 to-pink-500/5",
    },
  ],
}

type AnimationState = "idle" | "collapsing" | "waiting" | "expanding"

interface CardRect {
  top: number
  left: number
  width: number
  height: number
  centerX: number
  centerY: number
}

export function BentoGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [animationState, setAnimationState] = useState<AnimationState>("idle")
  const [clickedCardId, setClickedCardId] = useState<string | null>(null)
  const [clickedCardPosition, setClickedCardPosition] = useState({ x: 0, y: 0 })
  const [clickedCardRect, setClickedCardRect] = useState<CardRect | null>(null)
  const [shouldStartFromCenter, setShouldStartFromCenter] = useState(false)
  const [clickedCardClassName, setClickedCardClassName] = useState<string>("")
  const [isReturningToMain, setIsReturningToMain] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const getCardPosition = (cardId: string) => {
    const element = cardRefs.current[cardId]
    if (!element) return { x: 0, y: 0 }
    const rect = element.getBoundingClientRect()
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return { x: 0, y: 0 }

    return {
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top + rect.height / 2 - containerRect.top,
    }
  }

  const getCardRect = (cardId: string): CardRect | null => {
    const element = cardRefs.current[cardId]
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!element || !containerRect) return null

    const rect = element.getBoundingClientRect()
    return {
      top: rect.top - containerRect.top,
      left: rect.left - containerRect.left,
      width: rect.width,
      height: rect.height,
      centerX: rect.left + rect.width / 2 - containerRect.left,
      centerY: rect.top + rect.height / 2 - containerRect.top,
    }
  }

  const handleCardClick = (sectionId: string, event: React.MouseEvent<HTMLDivElement>) => {
    if (animationState !== "idle") return

    console.log("[v0] Card clicked:", sectionId)

    const cardRect = getCardRect(sectionId)
    if (cardRect) {
      setClickedCardRect(cardRect)
      setClickedCardPosition({ x: cardRect.centerX, y: cardRect.centerY })
    }
    setClickedCardId(sectionId)

    const clickedCard = mainSections.find((s) => s.id === sectionId)
    if (clickedCard) {
      setClickedCardClassName(clickedCard.className)
    }

    console.log("[v0] Starting collapse animation")
    setAnimationState("collapsing")

    setTimeout(() => {
      console.log("[v0] Collapse complete, waiting...")
      setAnimationState("waiting")
      setActiveSection(sectionId)
      setShouldStartFromCenter(true)

      setTimeout(() => {
        console.log("[v0] Starting expansion")
        setAnimationState("expanding")

        setTimeout(() => {
          console.log("[v0] Animation complete")
          setAnimationState("idle")
          setClickedCardId(null)
          setShouldStartFromCenter(false)
        }, 400)
      }, 10)
    }, 250)
  }

  const handleBack = () => {
    if (animationState !== "idle") return

    console.log("[v0] Going back to main")

    // Get the position of the main section card in the detail view
    if (activeSection) {
      const cardPosition = getCardPosition(activeSection)
      const cardRect = getCardRect(activeSection)
      
      setClickedCardPosition(cardPosition)
      if (cardRect) {
        setClickedCardRect(cardRect)
      }
      setClickedCardId(activeSection)
    }

    setIsReturningToMain(true)
    setAnimationState("collapsing")

    setTimeout(() => {
      setAnimationState("waiting")
      setShouldStartFromCenter(true)

      setTimeout(() => {
        setActiveSection(null)
        setAnimationState("expanding")

        setTimeout(() => {
          setAnimationState("idle")
          setClickedCardId(null)
          setShouldStartFromCenter(false)
          setClickedCardRect(null)
          setClickedCardClassName("")
          setIsReturningToMain(false)
        }, 400)
      }, 10)
    }, 250)
  }

  const currentItems = activeSection
    ? [mainSections.find((s) => s.id === activeSection)!, ...sectionContent[activeSection]]
    : mainSections

  useEffect(() => {
    if (animationState === "expanding" && shouldStartFromCenter) {
      requestAnimationFrame(() => {
        currentItems.forEach((item) => {
          const element = cardRefs.current[item.id]
          if (element) {
            element.offsetHeight
            element.classList.add("expanding")
          }
        })
      })
    }
  }, [animationState, shouldStartFromCenter, currentItems])

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div ref={containerRef} className="relative grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {currentItems.map((item, index) => {
          const Icon = item.icon
          const isHovered = hoveredId === item.id
          const isClickedCard = clickedCardId === item.id
          const isMainSectionInDetail = activeSection && item.id === activeSection

          let cardClassName = item.className

          // For detail cards (not the main section card), use smaller spans to avoid overlap
          if (activeSection && !isMainSectionInDetail) {
            // Simplify the grid spans for detail cards to prevent overlap
            cardClassName = item.className
          }

          let animationStyle: React.CSSProperties = {}

          if ((isMainSectionInDetail || (isReturningToMain && item.id === clickedCardId)) && clickedCardRect) {
            animationStyle = {
              position: "absolute",
              top: clickedCardRect.top,
              left: clickedCardRect.left,
              width: clickedCardRect.width,
              height: clickedCardRect.height,
              gridColumn: "unset",
              gridRow: "unset",
            }
          }

          if (animationState === "collapsing") {
            if (isClickedCard || isMainSectionInDetail || (isReturningToMain && item.id === clickedCardId)) {
              animationStyle = {
                ...animationStyle,
                transform: "scale(1.05)",
                opacity: 1,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 50,
              }
            } else {
              const currentPos = getCardPosition(item.id)
              const deltaX = clickedCardPosition.x - currentPos.x
              const deltaY = clickedCardPosition.y - currentPos.y

              animationStyle = {
                ...animationStyle,
                transform: `translate(${deltaX}px, ${deltaY}px) scale(0.1)`,
                opacity: 0,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 1,
              }
            }
          } else if (animationState === "waiting") {
            if (isClickedCard || isMainSectionInDetail || (isReturningToMain && item.id === clickedCardId)) {
              animationStyle = {
                ...animationStyle,
                transform: "scale(1.05)",
                opacity: 1,
                zIndex: 50,
              }
            } else {
              animationStyle = {
                ...animationStyle,
                opacity: 0,
                transform: "scale(0.1)",
                pointerEvents: "none",
              }
            }
          } else if (animationState === "expanding") {
            if (isMainSectionInDetail || (isReturningToMain && item.id === clickedCardId)) {
              animationStyle = {
                ...animationStyle,
                transform: "scale(1)",
                opacity: 1,
                transition: "all 0.2s ease",
                zIndex: 50,
              }
            } else {
              const currentPos = getCardPosition(item.id)
              const deltaX = clickedCardPosition.x - currentPos.x
              const deltaY = clickedCardPosition.y - currentPos.y

              if (shouldStartFromCenter) {
                animationStyle = {
                  ...animationStyle,
                  transform: `translate(${deltaX}px, ${deltaY}px) scale(0.1)`,
                  opacity: 0,
                  transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.03}s`,
                  zIndex: 1,
                }
              } else {
                animationStyle = {
                  ...animationStyle,
                  transform: "translate(0, 0) scale(1)",
                  opacity: 1,
                  transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.03}s`,
                  zIndex: 1,
                }
              }
            }
          } else if (animationState === "idle") {
            animationStyle = {
              ...animationStyle,
              transform: "scale(1)",
              opacity: 1,
              transition: "all 0.3s ease",
              zIndex: (isMainSectionInDetail || (isReturningToMain && item.id === clickedCardId)) ? 50 : 1,
            }
          }

          return (
            <Card
              key={item.id}
              ref={(el) => {
                cardRefs.current[item.id] = el
              }}
              className={`group relative overflow-hidden border-2 border-card bg-card cursor-pointer ${cardClassName}`}
              style={animationStyle}
              onMouseEnter={() => animationState === "idle" && setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={(e) => {
                if (animationState !== "idle") return
                if (!activeSection) {
                  handleCardClick(item.id, e)
                } else if (isMainSectionInDetail) {
                  handleBack()
                }
              }}
            >
              <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <div
                    className={`rounded-xl bg-card-foreground/10 p-3 transition-all duration-300 ${
                      isHovered ? "scale-110 bg-card-foreground/20" : ""
                    }`}
                  >
                    <Icon className="h-6 w-6 text-card-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-normal tracking-tight text-card-foreground md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-card-foreground/70 md:text-base italic">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}


