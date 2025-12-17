"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"

interface SectionContainerProps {
  children: ReactNode
  id?: string
  background?: "white" | "grey"
  title?: string
  intro?: string
}

export default function SectionContainer({ children, id, background = "white", title, intro }: SectionContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`
        py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24
        ${background === "grey" ? "bg-[#f2f2f2]" : "bg-white"}
        ${isVisible ? "animate-fade-in-up" : "opacity-0"}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-independent font-bold mb-6 leading-tight">
              {title}
            </h2>
            {intro && <p className="text-lg md:text-xl text-black/70 max-w-3xl leading-relaxed">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}