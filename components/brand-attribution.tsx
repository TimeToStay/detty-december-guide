import { Facebook, Instagram, } from "lucide-react"
import { SiTiktok } from "react-icons/si"
import Link from 'next/link'

export default function BrandAttribution() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-[#dadada] rounded-lg p-8 sm:p-12 md:p-16 shadow-lg">
          <h2 className="font-display text-2xl md:text-3xl mb-12 text-black">About the Brand Behind This Guide</h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-4">
              <header className="font-lausanne font-bold text-xl text-black">Timetostay</header>
              <p className="font-sans text-base leading-relaxed text-black/80">
                Time to stay is a small, private and highly efficient platform dedicated to matching our clients with
                ideal accommodations. Experts in 4 cities across London, New York, Miami, Côte d'Azur.
              </p>
            </div>

            {/* Right side: Brand links */}
            <div className="flex flex-col justify-center space-y-6">
              <Link
                href="https://www.timetostay.com/hotels-and-travels"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-base text-black hover:text-black/60 transition-colors duration-300 underline underline-offset-4"
              >
                Visit Timetostay
              </Link>

              <div className="flex items-center gap-6">
                <Link
                  href="https://facebook.com/timetostay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="text-black hover:text-black/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link
                  href="https://instagram.com/timetostay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="text-black hover:text-black/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link
                  href="https://tiktok.com/@timetostay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on TikTok"
                  className="text-black hover:text-black/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <SiTiktok className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
