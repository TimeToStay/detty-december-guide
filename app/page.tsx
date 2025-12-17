import Hero from "@/components/hero"
import SafetySection from "@/components/safety-section"
import EmergencySection from "@/components/emergency-section"
import TransportSection from "@/components/transport-section"
import MoneySection from "@/components/money-section"
import EventsSection from "@/components/events-section"
import NeighborhoodsSection from "@/components/neighborhoods-section"
import ScamsSection from "@/components/scams-section"
import EmbassySection from "@/components/embassy-section"
import FinalNotes from "@/components/final-notes"
import Footer from "@/components/footer"
import BrandAttribution from "@/components/brand-attribution"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SafetySection />
      <EmergencySection />
      <TransportSection />
      <MoneySection />
      <EventsSection />
      <NeighborhoodsSection />
      <ScamsSection />
      <EmbassySection />
      <FinalNotes />
      <BrandAttribution />
      <Footer />
    </main>
  )
}
