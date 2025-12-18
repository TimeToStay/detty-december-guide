import SectionContainer from "./section-container"
import Image from 'next/image'
import { InfoCard, WarningCard } from "./ui-card"

export default function TransportSection() {
  return (
    <SectionContainer
      id="transport"
      background="grey"
      title="Transport & Airport Guidance"
      intro="The safest way for visitors to move around Lagos is by registered ride‑hailing services."
    >
      <div className="mb-16 -mx-6 md:-mx-12 lg:-mx-24">
        <Image
          src="/lagos-airport-exterior-at-dusk-with-city-traffic.jpg"
          alt="Lagos airport and urban transport scene"
          className="w-full md:h-[500px] lg:h-[600px] object-cover"
          loading="lazy"
          width={800}
          height={520}
        />
      </div>

      {/* Ride Services */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold mb-8">
          Recommended Ride Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard title="Uber" description="International ride-hailing service available across Lagos" linkText="Download App" href="https://www.uber.com/ng/en/download" />
          <InfoCard title="Bolt" description="Popular alternative with competitive pricing" linkText="Visit Website" href="https://bolt.eu/en-ng/cities/lagos" />
          <InfoCard title="LagRide" description="Government-backed local service" linkText="Visit Website" href="https://www.lagride.ng" />
        </div>
      </div>

      {/* Safety Tips & Airport Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WarningCard
          title="Transport Safety Tips"
          items={[
            "Always confirm the plate number and driver photo",
            "Sit in the back seat if riding alone",
            "Share your trip details with a trusted contact",
          ]}
        />
        <WarningCard
          title="Airport Arrival (LOS)"
          items={[
            "Use official airport taxi desks or pre‑arranged pickups",
            "Avoid random greeters offering transport",
            "Expect delays during peak arrival times",
          ]}
        />
      </div>

      <div className="mt-16 -mx-6 md:-mx-12 lg:-mx-24">
      <Image
          src="/lagos-nightlife-crowd-movement-at-night-slightly.jpg"
          alt="Nighttime atmosphere in Lagos showing urban activity"
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          loading="lazy"
          width={2400}
          height={1600}
        />
        </div>

      {/* Traffic Reality */}
      <div className="mt-12 bg-black text-white p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold mb-4">Traffic Reality</h3>
        <p className="text-lg leading-relaxed">
          Peak congestion hours: <strong>6–10am</strong> and <strong>4–9pm</strong>
        </p>
        <p className="text-base text-white/70 mt-2">Heavy traffic around Lekki, Victoria Island, and Ikoyi bridges</p>
      </div>
    </SectionContainer>
  )
}
