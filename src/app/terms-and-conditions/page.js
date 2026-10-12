import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Terms & Conditions | Dental Show 2027",
  description: "Terms and conditions for visitors, exhibitors, and delegates at Dental Show 2027 organized by TNDTMA.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    paragraphs: [
      `By registering as a visitor, booking an exhibitor booth, or attending Dental Show 2027 organized by TNDTMA (Tamil Nadu Dental Trade & Manufacturers Association) at Chennai Trade Centre, you agree to comply with and be bound by these Terms & Conditions.`
    ],
  },
  {
    id: "visitor-terms",
    title: "2. Visitor & Delegate Regulations",
    paragraphs: [
      "Dental Show 2027 is a specialized trade exhibition and professional conference for dental practitioners, healthcare workers, students, and trade delegates.",
    ],
    list: [
      "Badges are personal, non-transferable, and must be worn visibly at all times within Chennai Trade Centre New Halls 2, 3 & 3A.",
      "The organizers reserve the right to verify professional or student identification credentials upon arrival.",
      "Photography and recording of specific commercial stalls or scientific lectures may require explicit exhibitor or speaker consent.",
      "Children under the age of 15 are not permitted entry during trade hours to ensure safety in heavy machinery areas."
    ],
  },
  {
    id: "exhibitor-terms",
    title: "3. Exhibitor & Stall Allocation Terms",
    paragraphs: [
      "All exhibitors agree to abide by the TNDTMA code of conduct, Chennai Trade Centre venue safety regulations, and local fire safety codes.",
    ],
    list: [
      "Stall allotments are confirmed only upon receipt of official booking confirmations via the designated platform.",
      "Subletting or sharing allotted booths without written prior approval from TNDTMA is strictly prohibited.",
      "All displayed dental devices and products must comply with Central Drugs Standard Control Organisation (CDSCO) and relevant Indian regulatory standards.",
      "Move-in and move-out schedules provided in the official Exhibitor Manual must be strictly adhered to."
    ],
  },
  {
    id: "cancellation",
    title: "4. Force Majeure & Event Changes",
    paragraphs: [
      "TNDTMA reserves the right to alter floor layouts, timing, or dates of the event in response to unforeseen venue maintenance, government directives, or force majeure events. Reasonable efforts will be made to notify all registered parties promptly."
    ],
  },
  {
    id: "contact-legal",
    title: "5. Questions and Official Inquiries",
    paragraphs: [
      `For any clarifications regarding these Terms & Conditions, please contact the TNDTMA Secretariat at ${site.organizerEmail} or ${site.phone}.`
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      effectiveDate="October 2026"
      intro="Please read these terms and conditions carefully before registering as a visitor or booking a stall for Dental Show 2027."
      sections={sections}
    />
  );
}
