import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import GalleryExplorer from "@/components/GalleryExplorer";

export const metadata = {
  title: "Gallery | Central Photo & Video Archive",
  description: "Central photo and video gallery of Dental Show filterable by year (2025, 2024, 2023, 2020) and category.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Central Gallery"
        crumbs={[{ label: "Gallery" }]}
        subtitle="Moments That Bring Us Together. Revisit the people, experiences and memories that make every Dental Show special."
      />
      <section className="section section-gallery-page">
        <div className="container container-gallery-wide">
          <SectionTitle
            eyebrow="PHOTO & VIDEO ARCHIVE"
            title="Moments That Bring Us Together"
            subtitle="Central gallery filterable by edition year and topic. Click any image to explore high-resolution memories."
          />
          <GalleryExplorer />
        </div>
      </section>
    </>
  );
}
