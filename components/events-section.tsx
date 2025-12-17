import SectionContainer from "./section-container"
import { InfoCard, WarningCard } from "./ui-card"
import Image from 'next/image'

export default function EventsSection() {
  return (
    <SectionContainer
      id="events"
      background="white"
      title="Detty December Events & Nightlife"
      intro="December in Lagos is intense, social, and fast‑moving."
    >
      <div className="mb-16 -mx-6 md:-mx-12 lg:-mx-24">
        <Image
          src="/lagos-nightlife-event-queue-at-night-with-crowd.jpg"
          alt="Lagos event scene during Detty December nightlife"
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          loading="lazy"
          height={770}
          width={1080}
        />
      </div>

      {/* Event Types */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">
          What Typically Happens
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard title="Music Concerts" description="Major festivals and live performances" hover={true} linkText="Book Tickets" href="https://egotickets.com/events/happening-in-lagos"/>
          <InfoCard title="Beach Parties" description="Day events along the coast" hover={true} linkText="Discover" href="https://www.jetronticket.com" />
          <InfoCard title="Comedy Shows" description="Pop-up experiences and stand-up" hover={true} linkText="View Events" href="https://www.ariiyatickets.com/events/" />
          <InfoCard title="Art & Markets" description="Exhibitions and cultural events" hover={true} linkText="Explore Art Galleries" href="https://roadbook.com/lagos/city-guide/best-art-galleries-lagos-nigeria" />
        </div>
      </div>

      {/* Nightlife Areas & Safety */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black text-white p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Primary Nightlife Areas
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-bold">Victoria Island</p>
              <p className="text-white/70 mt-1">Upscale clubs and restaurants</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Lekki Phase 1</p>
              <p className="text-white/70 mt-1">Beach clubs and social venues</p>
            </div>
          </div>
        </div>

        <WarningCard
          title="Nightlife Safety Reminders"
          items={[
            "Attend events with people you trust",
            "Arrange transport before venues close",
            "Avoid displaying cash or valuables openly",
          ]}
        />
      </div>
    </SectionContainer>
  )
}
