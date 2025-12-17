interface ResourceLinksProps {
  links: Array<{ label: string; url: string }>
}

export default function ResourceLinks({ links }: ResourceLinksProps) {
  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
          <span className="inline-flex items-center gap-2 border-b border-black/20 group-hover:border-black transition-colors">
            {link.label}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  )
}
