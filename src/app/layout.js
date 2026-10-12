import {
  Inter,
  Merriweather,
  Source_Sans_3,
  Lora,
  Lato,
  Roboto_Slab,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

// 1. Inter: Modern, Institutional & Clean (Default for interactive elements, portals, header nav)
const inter = Inter({
  variable: "--next-font-inter",
  subsets: ["latin"],
  display: "swap",
});

// 2. Merriweather: Academic & Authoritative (Headings for legacy history, bylaws & legal pages)
const merriweather = Merriweather({
  variable: "--next-font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

// Source Sans 3: Academic & Authoritative (Body text for reading heavy text like journal entries and legal bylaws)
const sourceSans = Source_Sans_3({
  variable: "--next-font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// 3. Lora: Approachable & Trustworthy (Soft clean serif edges for clinical, patient-facing & empathy pages)
const lora = Lora({
  variable: "--next-font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Lato: Approachable & Trustworthy (Empathetic body text for attendee benefits)
const lato = Lato({
  variable: "--next-font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

// 4. Roboto Slab: Structured & Corporate (Headings for data tables, event calendars & directories)
const robotoSlab = Roboto_Slab({
  variable: "--next-font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Roboto: Structured & Corporate (Body text for calendars, tables, stall specifications)
const roboto = Roboto({
  variable: "--next-font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: `${site.name} – Chennai Trade Centre | Organised by TNDTMA`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} – Chennai Trade Centre`,
    description: site.description,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#023E73",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${merriweather.variable} ${sourceSans.variable} ${lora.variable} ${lato.variable} ${robotoSlab.variable} ${roboto.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
