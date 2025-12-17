import SectionContainer from "./section-container"
import { EmergencyCard, InfoCard } from "./ui-card"

export default function EmergencySection() {
  const hospitals = [
    { name: "Lagoon Hospital", location: "17B Bourdillon Road, Ikoyi, Lagos", linkText: "Visit Website", href: "https://www.lagoonhospitals.com" },
    { name: "Reddington Hospital", location: "Victoria Island & Lekki locations", linkText: "Visit Website", href: "https://reddingtonhospital.com" },
    { name: "Evercare Hospital", location: "Bisola Durosinmi‑Etti Drive, Lekki Phase 1", linkText: "Visit Website", href: "https://www.evercare.ng/services" },
    { name: "St Nicholas Hospital", location: "57 Campbell Street, Lagos Island", linkText: "Visit Website", href: "https://saintnicholashospital.com" },
    { name: "Lagos State University Teaching Hospital (LASUTH)", location: "Ikeja", linkText: "Visit Website", href: "https://lasuth.org.ng" },
  ]

  return (
    <SectionContainer
      id="emergency"
      background="white"
      title="Emergency Contacts & Hospitals"
      intro="Keep these numbers accessible. Response times vary, but these are the official channels."
    >
      {/* Emergency Numbers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <EmergencyCard service="Nationwide Emergency" number="112" description="Police, Fire, Ambulance" linkText="Visit Website" href="https://emergencyresponseafrica.com/top-30-lagos-emergency-numbers-you-should-know" />
        <EmergencyCard service="LASEMA" number="767" description="Lagos State Emergency Management" linkText="Visit Website" href="https://www.instagram.com/lasemasocial" />
        <EmergencyCard service="Road Safety" number="122" description="Federal Road Safety Corps" linkText="Visit Website" href="https://ww
        w.frsc.gov.ng/home" />
      </div>

      {/* Hospitals Section */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">
          Hospitals with Reliable Emergency Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hospitals.map((hospital, index) => (
            <InfoCard key={index} title={hospital.name} subtitle={hospital.location} href={hospital.href} linkText={hospital.linkText} />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
