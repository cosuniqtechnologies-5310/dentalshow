import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Disclaimer",
  description: "Important information about the content, speakers, schedule and external links on the DentalShow website.",
};

const sections = [
  {
    id: "general-information",
    title: "General information",
    paragraphs: [
      "The information on this website is provided for general informational purposes only. While we strive to keep it accurate and up to date, we make no warranties of any kind about its completeness, reliability or suitability.",
    ],
  },
  {
    id: "no-professional-advice",
    title: "No clinical or professional advice",
    paragraphs: [
      "Content presented at or in connection with DentalShow, including talks, workshops and exhibitor materials, represents the views of the individual presenters. It is not clinical, legal or financial advice and should not replace your own professional judgement.",
    ],
  },
  {
    id: "programme-changes",
    title: "Programme changes",
    paragraphs: [
      "Speakers, sessions, venues, dates and prices may change without notice because of circumstances beyond our control. We will make every reasonable effort to inform registered attendees of material changes.",
    ],
  },
  {
    id: "exhibitors-sponsors",
    title: "Exhibitors and sponsors",
    paragraphs: [
      "Products and services shown by exhibitors and sponsors are their own responsibility. Inclusion in the programme or expo does not constitute an endorsement by DentalShow.",
    ],
  },
  {
    id: "external-links",
    title: "External links",
    paragraphs: [
      "This site may contain links to third-party websites. We have no control over their content or privacy practices and accept no responsibility for them.",
    ],
  },
  {
    id: "photography",
    title: "Photography and recording",
    paragraphs: [
      "Photography and video may be taken at our events and used in promotional material. By attending you consent to this unless you notify the organisers in writing beforehand.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    paragraphs: [
      `To the fullest extent permitted by law, ${site.name} will not be liable for any loss or damage arising from your use of this website or attendance at our events. For questions, contact ${site.email}.`,
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      crumb="Disclaimer"
      updated="1 October 2026"
      intro={`Please read this disclaimer carefully before using the ${site.name} website or attending our events.`}
      sections={sections}
    />
  );
}
