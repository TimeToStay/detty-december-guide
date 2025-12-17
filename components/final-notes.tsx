import SectionContainer from "./section-container"

export default function FinalNotes() {
  return (
    <SectionContainer id="final-notes" background="white">
      <div className="text-center max-w-4xl mx-auto py-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Final Notes for Visitors
        </h2>
        <div className="space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed">
          <p>Lagos rewards preparation and awareness.</p>
          <p className="font-semibold text-2xl md:text-3xl">Move smart. Stay informed. Respect the culture.</p>
          <p className="text-black/70">This guide is intended to support you while you are here.</p>
        </div>
      </div>
    </SectionContainer>
  )
}
