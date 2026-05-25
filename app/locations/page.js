import Link from "next/link";
import { FinalCta, LocationGrid, PageHero } from "../components/site-components";

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Locations"
        title="Training courts around Penang"
        body="SBA Shark Basketball Academy can train at regular court areas or suitable nearby parent-preferred locations."
      >
        <Link
          href="/book"
          className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/15 bg-[#0D1F3D] px-6 py-4 text-base font-bold text-white transition hover:border-[#155EEF]/60 hover:bg-[#0B3D91]/60"
        >
          Enquire about area
        </Link>
      </PageHero>
      <LocationGrid />
      <FinalCta
        title="Need a nearby court?"
        body="Use the Book page to include your home area, residential court, or preferred parent location."
      />
    </>
  );
}

