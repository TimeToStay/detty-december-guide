import Hero from "@/components/hero"
import EditorialIntro from "@/components/editorial-intro"
import SafetySection from "@/components/safety-section"
import EmergencySection from "@/components/emergency-section"
import TransportSection from "@/components/transport-section"
import MoneySection from "@/components/money-section"
import MidPageLink from "@/components/mid-page-link"
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
      <EditorialIntro />
      <SafetySection />
      <EventsSection />
      <TransportSection />
      <NeighborhoodsSection />
      <MoneySection />
      <MidPageLink />
      <EmergencySection />
      <ScamsSection />
      <EmbassySection />
      <FinalNotes />
      <BrandAttribution />
      <Footer />
    </main>
  )
}
