import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Dental Show collects, uses and protects your personal information.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: ["We collect information you provide directly to us when you interact with the site and our events:"],
    list: [
      "Contact details such as name, email address, phone number and clinic or company name.",
      "Registration and ticketing details when you book an event.",
      "Messages you send us through the contact form or by email.",
      "Technical information such as browser type, device and pages visited, collected through cookies and similar technologies.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use your information",
    list: [
      "To process registrations, tickets and event communications.",
      "To respond to your enquiries and provide support.",
      "To send newsletters and show updates where you have opted in.",
      "To improve our website, programme and attendee experience.",
      "To comply with legal and regulatory obligations.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing of information",
    paragraphs: [
      "We do not sell your personal information. We may share it with trusted service providers who help us run the event — such as payment processors, ticketing and email platforms — and only to the extent necessary to provide their services.",
      "Where you attend a sponsored session or visit an exhibitor and scan your badge, your details may be shared with that sponsor or exhibitor.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "We use cookies to keep the site working, understand how it is used and improve it. You can control or delete cookies through your browser settings, although some features may not function correctly without them.",
    ],
  },
  {
    id: "data-retention-security",
    title: "Data retention and security",
    paragraphs: [
      "We keep personal information only for as long as needed for the purposes described in this policy or as required by law. We use reasonable technical and organisational safeguards to protect your information, but no method of transmission over the internet is completely secure.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    paragraphs: [
      "Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal information, and to withdraw consent at any time. You can unsubscribe from marketing emails using the link in any message.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [`If you have questions about this policy or want to exercise your rights, email us at ${site.email}.`],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      crumb="Privacy Policy"
      updated="1 October 2026"
      intro={`${site.name} ("we", "our", "us") respects your privacy. This policy explains what information we collect when you use our website and attend our events, how we use it, and the choices you have.`}
      sections={sections}
    />
  );
}
