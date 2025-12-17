import type { ReactNode } from "react"

interface ContentBlockProps {
  title?: string
  children: ReactNode
  className?: string
}

export default function ContentBlock({ title, children, className = "" }: ContentBlockProps) {
  return (
    <div className={`mb-12 ${className}`}>
      {title && <h3 className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">{title}</h3>}
      <div className="space-y-4 text-base md:text-lg leading-relaxed">{children}</div>
    </div>
  )
}
