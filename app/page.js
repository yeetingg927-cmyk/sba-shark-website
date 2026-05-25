import Link from "next/link";
import {
  AboutSection,
  FinalCta,
  HeroSection,
  PreviewCards,
} from "./components/site-components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PreviewCards />
      <FinalCta
        title="Book a session or ask about training"
        body="Parents, players, and schools can send a quick enquiry to Coach Sebastian and get current schedule details by Instagram DM."
      />
      <section className="sr-only">
        <Link href="/book">Go to booking enquiry</Link>
      </section>
    </>
  );
}
