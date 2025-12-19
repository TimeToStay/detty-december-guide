import SectionContainer from "./section-container"
import Image from 'next/image'
import { InfoCard, WarningCard } from "./ui-card"

export default function NeighborhoodsSection() {
  return (
    <SectionContainer
      id="neighborhoods"
      background="white"
      title="Tourist‑Friendly Neighborhoods"
      intro="Visitors generally find these areas easier to navigate with stronger infrastructure and security presence."
    >
      <div className="mb-16 -mx-6 md:-mx-12 lg:-mx-24">
        <Image
          src="/lagos-lekki-victoria-island-beach-daytime-calm.webp"
          alt="Tourist-friendly areas in Lagos including beach and urban spaces"
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          loading="lazy"
          height={1512}
          width={1134}
        />
      </div>

      {/* Neighborhood Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <InfoCard title="Victoria Island" description="Nightlife, dining, business districts" hover={true} />
        <InfoCard title="Ikoyi" description="Quieter, upscale, residential" hover={true} />
        <InfoCard title="Lekki Phase 1" description="Beaches, parties, social venues" hover={true} />
      </div>

<div className="mb-16 -mx-6 md:-mx-12 lg:-mx-24">
        <Image
          src="/tourist-friendly-areas-in-lagos-including-beach-and-urban-spaces.webp"
          alt="Tourist-friendly areas in Lagos including beach and urban spaces"
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          loading="lazy"
          height={1512}
          width={1134}
        />
      </div>

      <WarningCard
        title="In Other Parts of Lagos"
        items={["Exercise increased awareness", "Visit with locals or trusted contacts", "Avoid wandering at night"]}
      />
    </SectionContainer>
  )
}
