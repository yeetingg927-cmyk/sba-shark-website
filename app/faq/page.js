import { FinalCta, HelperBotSection, PageHero } from "../components/site-components";

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Simple answers before you DM"
        body="The SBA Helper Bot is a prepared-answer guide. It does not use real AI, and it does not send any information anywhere."
      />
      <HelperBotSection />
      <FinalCta
        title="Still have a question?"
        body="DM SBA Shark Basketball Academy with the player's age, training goal, and preferred area."
      />
    </>
  );
}
