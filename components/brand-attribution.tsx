import { Facebook, Instagram, } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function BrandAttribution() {
  return (
    <section className="bg-grey-light py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg p-12 md:p-16 shadow-sm">
          <h2 className="font-display text-2xl md:text-3xl mb-12 text-black">About the Brand Behind This Guide</h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left side: Brand context */}
            <div className="space-y-4">
              <header className="font-lausanne font-bold text-xl text-black">Timetostay</header>
              <p className="font-sans text-base leading-relaxed text-black/80">
                Time to stay is a small, private and highly efficient platform dedicated to matching our clients with
                ideal accommodations. Experts in 4 cities across London, New York, Miami, Côte d'Azur.
              </p>
            </div>

            {/* Right side: Brand links */}
            <div className="flex flex-col justify-center space-y-6">
              <a
                href="https://www.timetostay.com/hotels-and-travels"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-base text-black hover:text-black/60 transition-colors duration-300 underline underline-offset-4"
              >
                Visit Timetostay
              </a>

              <div className="flex items-center gap-6">
                <a
                  href="https://facebook.com/timetostay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="text-black hover:text-black/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://instagram.com/timetostay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="text-black hover:text-black/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://tiktok.com/@timetostay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on TikTok"
                  className="text-black hover:text-black/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <SiTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
