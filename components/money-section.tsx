import SectionContainer from "./section-container"
import { WarningCard } from "./ui-card"

export default function MoneySection() {
  return (
    <SectionContainer
      id="money"
      background="grey"
      title="Money, FX & Payment Realities"
      intro="Lagos operates on a mixed system of cash, card, and bank transfers."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WarningCard
          title="Cash & ATMs"
          items={[
            "Use ATMs inside banks or shopping malls",
            "Expect daily withdrawal limits",
            "Machines may occasionally be out of service",
          ]}
        />
        <WarningCard
          title="Cards, POS & Transfers"
          items={[
            "Cards work mostly in hotels, malls, and upscale restaurants",
            "Bank transfers are common; wait for confirmation",
            "POS scams exist; verify alerts carefully",
          ]}
        />
        <WarningCard
          title="Foreign Exchange"
          items={[
            "Official FX rates differ from street rates",
            "Street currency exchange carries scam and legal risks",
            "Use banks or licensed Bureau de Change locations only",
          ]}
          linkText="Discover verified FX locations"
          href="https://wise.com/gb/currency-exchange/lagos-nigeria"
        />
      </div>
    </SectionContainer>
  )
}
