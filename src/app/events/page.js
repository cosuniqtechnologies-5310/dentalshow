import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import EventsExplorer from "@/components/EventsExplorer";

export const metadata = {
  title: "Events",
  description: "Browse conferences, workshops, exhibitions and networking events at DentalShow 2027.",
};

export default function EventsPage() {
  return (
    <>
      <PageBanner title="Events" crumbs={[{ label: "Events" }]} subtitle="Conferences, workshops, exhibitions and networking — filter by what interests you." />
      <section className="section font-corporate">
        <div className="container">
          <SectionTitle eyebrow="Programme" title="All Events" subtitle="Select an event to see sessions, speakers and ticket details." />
          <EventsExplorer />
        </div>
      </section>
    </>
  );
}
