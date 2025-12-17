"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface SectionWrapperProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ id, title, children, className = "" }: SectionWrapperProps) {
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
      className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-[#E5E5E5] ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`font-[family-name:var(--font-independent)] text-3xl md:text-5xl lg:text-6xl mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </h2>
        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
