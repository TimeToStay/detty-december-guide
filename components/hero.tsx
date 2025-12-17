"use client"

import { useEffect, useState } from "react"
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/lagos-nigeria-nighttime-cityscape-with-lights.jpg"
          alt="Lagos city at night during December"
          className="w-full h-full object-cover"
          height={2400}
          width={1920}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-[family-name:var(--font-independent)] text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 text-white">
            Time To Stay
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 leading-relaxed text-white">
            Lagos Detty December Survival Guide
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed text-balance text-white/90">
              Practical, on‑the‑ground information for visitors in Lagos. This guide exists for one purpose: to help you
              move safely, confidently, and realistically while in Lagos during Detty December.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-px h-16 bg-white/40" />
      </div>
    </header>
  )
}
