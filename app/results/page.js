import { FinalCta, PageHero, ResultsSection } from "../components/site-components";

const reviews = [];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        label="Results"
        title="Player progress, parent feedback, and training wins"
        body="Approved player progress and parent feedback will appear here once real reviews are added."
      />
      <ResultsSection reviews={reviews} />
      <FinalCta
        title="Want progress like this?"
        body="DM SBA Shark Basketball Academy to ask about the right session for your player, family, or school team."
      />
    </>
  );
}
