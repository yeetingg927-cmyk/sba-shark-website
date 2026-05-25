import { BookingForm, PageHero } from "../components/site-components";

export default function BookPage() {
  return (
    <>
      <PageHero
        label="Book"
        title="Create a clear booking enquiry for Coach Sebastian"
        body="Fill in the training details, copy the generated message, and send it by Instagram DM to SBA Shark Basketball Academy."
      />
      <BookingForm />
    </>
  );
}
