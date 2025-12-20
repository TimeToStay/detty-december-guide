import SectionContainer from "./section-container"
import { WarningCard } from "./ui-card"
import Image from 'next/image'


export default function SafetySection() {
  return (
    <SectionContainer
      id="safety"
      background="grey"
      title="Safety & Survival Tips for Lagos"
      intro="Lagos is vibrant, welcoming, and fast-paced. Staying alert makes a real difference."
    >
      <div className="mb-16 -mx-6 md:-mx-12 lg:-mx-24">
        <Image
          src="/lagos-neighborhood-watch-securing-an-event.jpg"
          alt="Lagos Neigbourhood Watch Securing the entrance to an event"
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          loading="lazy"
          width={1280}
          height={800}
        />
      </div>

      {/* Safety Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WarningCard
          title="Everyday Safety"
          items={[
            "Keep phones and valuables discreet in public",
            "Use cross‑body bags or zipped pockets",
            "Avoid walking alone at night in unfamiliar areas",
            "Politely decline unsolicited assistance",
            "Trust your instincts; leave situations that feel uncomfortable",
          ]}
        />
        <WarningCard
          title="Night Time Awareness"
          items={[
            "Attend events in groups when possible",
            "Arrange your ride home before nightlife activities",
            "Do not leave drinks unattended",
            "Avoid sharing your live location publicly",
          ]}
        />
      </div>
    </SectionContainer>
  )
}
