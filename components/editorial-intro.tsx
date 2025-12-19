import Link from 'next/link'

export default function EditorialIntro() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-base md:text-lg leading-relaxed text-black/70 text-balance">
          This guide exists to help visitors navigate Lagos during Detty December with practical, on-the-ground
          information. If you're also planning where to stay or how to organize your trip, you can explore more
          resources on{" "}
          <Link
            href="https://www.timetostay.com/hotels-and-travels"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold underline underline-offset-4 hover:text-black/60 transition-colors duration-300"
          >
            Timetostay
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
