export default function ImageDivider({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-24 md:my-32">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-full h-[300px] md:h-[400px] object-cover"
        loading="lazy"
      />
    </div>
  )
}
