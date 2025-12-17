"use client"

import type { ReactNode } from "react"
import ArrowRight from './ui/arrow-right'
import Link from 'next/link'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white border border-[#dadada] rounded-none p-6 md:p-8 max-sm:shadow-lg
        ${hover ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

interface InfoCardProps {
  title: string
  subtitle?: string
  description?: string
  icon?: ReactNode
  hover?: boolean
  href?: string;
  linkText?: string;
}

export function InfoCard({ title, subtitle, description, icon, href, linkText, hover = true }: InfoCardProps) {
  return (
    <Card hover={hover}>
      {icon && <div className="mb-4 text-black/60">{icon}</div>}
      <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold mb-2">{title}</h3>
      {subtitle && <p className="text-base md:text-lg text-black/70 mb-2">{subtitle}</p>}
      {description && <p className="text-sm md:text-base text-black/60 leading-relaxed">{description}</p>}
      {(linkText && href) && <Link href={href} target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-black/30 hover:border-black transition-colors text-sm font-medium mt-4">
                {linkText}
                <ArrowRight />
                </Link>}
    </Card>
  )
}

interface EmergencyCardProps {
  service: string
  number: string
  description?: string
  href?: string;
  linkText?: string;
}

export function EmergencyCard({ service, number, description, linkText, href }: EmergencyCardProps) {
  return (
    <Card hover={true}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-[family-name:var(--font-display)] font-bold mb-2">{service}</h3>
          {description && <p className="text-sm text-black/60 mb-3">{description}</p>}
          {(linkText && href) && <Link href={href} target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-black/30 hover:border-black transition-colors text-sm font-medium">
                {linkText}
                <ArrowRight />
                </Link>}
        </div>
        <div className="text-right">
          <p className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold">{number}</p>
        </div>
      </div>
    </Card>
  )
}

interface WarningCardProps {
  title: string
  items: string[]
  href?: string;
  linkText?: string;
}

export function WarningCard({ title, items, href, linkText }: WarningCardProps) {
  return (
    <Card hover={true} className="border-l-4 border-l-black">
      <h3 className="text-lg md:text-xl font-[family-name:var(--font-display)] font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm md:text-base text-black/80 leading-relaxed">
            • {item}
          </li>
        ))}
      </ul>
      {(linkText && href) && <Link href={href} target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-black/30 hover:border-black transition-colors text-sm font-medium mt-4">
                {linkText}
                <ArrowRight />
                </Link>}
    </Card>
  )
}
