import PageBanner from "@/components/PageBanner";
import EventsExplorer from "@/components/EventsExplorer";

export const metadata = {
  title: "Events & Programme | Dental Show 2027",
  description: "Browse conferences, clinical workshops, exhibitions, and 20 years of flagship editions organized by TNDTMA across Tamil Nadu.",
};

export default function EventsPage() {
  return (
    <>
      <PageBanner
        title="Events & Programme"
        crumbs={[{ label: "Events" }]}
        subtitle="Conferences, clinical masterclasses, exhibitions and 20 years of landmark dental conventions across Tamil Nadu."
      />

      <section className="section section-events-page font-modern fold-white" id="events-main-section">
        <div className="container">
          <div className="events-page-header">
            <div className="events-page-header__left">
              <div className="events-eyebrow-row">
                <span className="events-accent-dash" aria-hidden="true" />
                <span className="events-eyebrow-text">PROGRAMME &amp; EDITIONS</span>
              </div>
              <h2 className="events-page-title">
                All Events &amp; Flagship Editions
              </h2>
              <p className="events-page-subtitle">
                Select an edition to explore scientific schedules, keynote clinical faculties, trade directories, and delegate access.
              </p>
            </div>
          </div>

          <EventsExplorer />
        </div>
      </section>
    </>
  );
}
