import Link from 'next/link'

export default function MidPageLink() {
  return (
    <section className="bg-grey-light py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-base leading-relaxed text-black/60 text-center">
          For travelers extending their stay beyond December,{" "}
          <Link
            href="https://www.timetostay.com/hotels-and-travels"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 font-semibold underline underline-offset-4 hover:text-black/50 transition-colors duration-300"
          >
            Timetostay
          </Link>{" "}
          helps travellers find stays that fit their preferences across London, New York, Miami and the Cote d'Azur, with local insights to support each destination.
        </p>
      </div>
    </section>
  )
}
