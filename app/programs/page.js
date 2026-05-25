import Link from "next/link";
import { FinalCta, PageHero, ProgramGrid } from "../components/site-components";

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        label="Programs"
        title="Basketball training for kids, teens, schools, and small groups"
        body="Coach Sebastian builds sessions around age, ability, confidence, and the player's next useful step."
      >
        <Link
          href="/book"
          className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/15 bg-[#0D1F3D] px-6 py-4 text-base font-bold text-white transition hover:border-[#155EEF]/60 hover:bg-[#0B3D91]/60"
        >
          Go to Book page
        </Link>
      </PageHero>
      <ProgramGrid detailed />
      <FinalCta
        title="Not sure which program fits?"
        body="Send Coach Sebastian the player's age, current level, and preferred area. SBA Shark will guide you to the right starting point."
      />
    </>
  );
}

