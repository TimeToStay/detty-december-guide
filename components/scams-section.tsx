import SectionContainer from "./section-container"
import { WarningCard } from "./ui-card"

export default function ScamsSection() {
  return (
    <SectionContainer
      id="scams"
      background="white"
      title="Common Scams to Avoid"
      intro="Being informed is the best protection."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WarningCard
          title="Common Scams Reported by Visitors"
          items={[
            '"ATM helper" assistance offers',
            "Fake POS or bank transfer alerts",
            "Overpriced airport taxi arrangements",
            "Fake event ticket sellers",
            "Random offers of help from strangers",
          ]}
        />

        <div className="bg-black text-white p-8 md:p-12 flex items-center">
          <div>
            <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold leading-tight">
              General rule: if you did not ask for help, politely decline.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
