import SectionContainer from "./section-container"
import { Card } from "./ui-card"
import Link from 'next/link'
import ArrowRight from './ui/arrow-right'
import Image from 'next/image'

export default function EmbassySection() {
  const embassies = [
    {
      country: "United States",
      name: "U.S. Consulate General Lagos",
      address: "2 Walter Carrington Crescent, Victoria Island, Lagos",
      url: "https://ng.usembassy.gov/consulate-lagos/",
    },
    {
      country: "United Kingdom",
      name: "British Deputy High Commission Lagos",
      address: "11 Walter Carrington Crescent, Victoria Island, Lagos",
      url: "https://www.gov.uk/world/organisations/british-deputy-high-commission-lagos",
    },
    {
      country: "Canada",
      name: "Deputy High Commission of Canada",
      address: "4 Anifowoshe Street, Victoria Island, Lagos",
      url: "https://www.international.gc.ca/country-pays/nigeria/lagos.aspx",
    },
    {
      country: "Netherlands",
      name: "Consulate‑General of the Netherlands",
      address: "14A Walter Carrington Crescent, Victoria Island, Lagos",
      url: "https://www.netherlandsworldwide.nl/contact/embassies-consulates-general/nigeria/consulate-general-lagos",
    },
  ]

  return (
    <SectionContainer
      id="embassy"
      background="white"
      title="Embassy & High Commission Directory"
      intro="Additional embassies are located primarily in Victoria Island and Ikoyi."
    >
      

      <div className="mb-16 -mx-6 md:-mx-12 lg:-mx-24">
        <Image
          src="/us-consulate-general-lagos.jpg"
          alt="Lagos Neigbourhood Watch Securing the entrance to an event"
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          loading="lazy"
          width={1280}
          height={800}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {embassies.map((embassy, index) => (
          <Card key={index} hover={true}>
            <p className="text-xs uppercase tracking-wider mb-3 text-black/50">
              {embassy.country}
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              {embassy.name}
            </h3>
            <p className="text-sm md:text-base text-black/70 mb-4 leading-relaxed">{embassy.address}</p>
            <Link
              href={embassy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-black/30 hover:border-black transition-colors text-sm font-medium"
            >
              Visit Website
              <ArrowRight />
            </Link>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}
