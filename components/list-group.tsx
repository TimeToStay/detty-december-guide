import type { ReactNode } from "react"

interface ListGroupProps {
  items: (string | ReactNode)[]
  className?: string
}

export default function ListGroup({ items, className = "" }: ListGroupProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-2 w-1 h-1 bg-black rounded-full flex-shrink-0" />
          <span className="flex-1 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
