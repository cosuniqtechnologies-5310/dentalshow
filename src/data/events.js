export const eventCategories = ["Upcoming", "Past"];

export const events = [
  {
    slug: "dental-show-2027",
    title: "Dental Show 2027 (Flagship Edition)",
    status: "Upcoming",
    category: "Upcoming",
    badge: "Upcoming Flagship Expo",
    date: "2027-02-06",
    dateLabel: "6th & 7th February 2027",
    time: "09:00 AM – 06:00 PM",
    venue: "Chennai Trade Centre New Hall 2, 3 & 3A",
    city: "Chennai, Tamil Nadu",
    image: "/images/gallery-exhibition-1.jpg",
    price: "Free Visitor Registration",
    seats: 6000,
    excerpt:
      "More than an exhibition, Dental Show 2027 is where dreams take shape, ideas spark innovation, and the people who move dentistry forward come together.",
    description: [
      "Dental Show 2027 is South India's premier international dental exhibition and conference organized by TNDTMA (Tamil Nadu Dental Trade & Manufacturers Association).",
      "Held across the state-of-the-art New Halls 2, 3 and 3A at Chennai Trade Centre, this edition unites clinicians, dental students, dealers, technicians and global manufacturers under one visionary roof.",
      "Experience live equipment demonstrations, touch the newest CAD/CAM scanners and restorative biomaterials, and establish lifelong partnerships that elevate clinical care."
    ],
    highlights: [
      "250+ Leading Global & Indian Exhibitors",
      "Chennai Trade Centre New Halls 2, 3 & 3A (Over 10,000 sq.m of expo floor)",
      "Live clinical demonstrations & hands-on certified workshops",
      "Official Beaver Mascot welcome & interactive attendee zones",
      "Dedicated B2B matchmaking for dental dealers & manufacturers"
    ],
    ctaText: "Register as Visitor",
    ctaLink: "/visitor-registration",
    secondaryCtaText: "Register as Exhibitor",
    secondaryCtaLink: "/exhibitor-registration",
    speakers: ["dr-marcus-obi", "dr-sarah-jenkins", "dr-anya-sharma", "dr-richard-hale"],
    sessions: [
      { time: "09:00 AM - 10:00 AM", title: "Grand Inauguration & Ribbon Cutting", speaker: "TNDTMA Leadership" },
      { time: "10:30 AM - 12:30 PM", title: "Digital Dentistry & AI in Modern Clinical Workflow", speaker: "Keynote Speakers" },
      { time: "02:00 PM - 04:00 PM", title: "Hands-on Implantology & Guided Surgery Masterclass", speaker: "Clinical Faculty" },
      { time: "04:30 PM - 06:00 PM", title: "B2B Dealer-Manufacturer Networking Forum", speaker: "Trade Delegates" },
    ],
  },
  {
    slug: "dental-show-2025",
    title: "Dental Show 2025 (20th Anniversary Edition)",
    status: "Past",
    category: "Past",
    badge: "Past Event • 20th Anniversary",
    date: "2025-02-08",
    dateLabel: "8th & 9th February 2025",
    time: "09:30 AM – 06:00 PM",
    venue: "Chennai Trade Centre, Nandambakkam",
    city: "Chennai, Tamil Nadu",
    image: "/images/gallery-conference-1.jpg",
    price: "Concluded",
    seats: 4800,
    excerpt:
      "A monumental milestone celebrating 20 years of TNDTMA's dedication to advancing dental technology and clinical excellence across Tamil Nadu.",
    description: [
      "Dental Show 2025 brought together over 4,500 dental professionals and 180 leading manufacturers to commemorate two decades since the very first show in 2005.",
      "The event showcased breakthrough developments in laser dentistry, cone-beam computed tomography (CBCT), and 3D printing for prosthodontics.",
      "Attendees enjoyed packed scientific auditoriums, trade discounts, and honorary awards celebrating pioneer clinicians of Tamil Nadu."
    ],
    highlights: [
      "180+ exhibitors across Hall 1 & 2",
      "Over 4,800 registered visitors from across South India",
      "Special 20-Year Retrospective Gala Dinner",
      "Launch of the Student Excellence Dental Grants"
    ],
    ctaText: "View 2025 Gallery",
    ctaLink: "/gallery",
    secondaryCtaText: "Read Recap",
    secondaryCtaLink: "/about",
    speakers: ["dr-marcus-obi", "dr-sarah-jenkins"],
    sessions: [
      { time: "10:00 AM", title: "20 Years of Dental Evolution in Tamil Nadu", speaker: "TNDTMA Founders" },
      { time: "01:00 PM", title: "Smart Ergonomics & Modern Operatory Setup", speaker: "Dr. Marcus Obi" },
      { time: "04:00 PM", title: "TNDTMA Excellence Awards 2025", speaker: "Executive Committee" },
    ],
  },
  {
    slug: "dental-show-2023",
    title: "Dental Show 2023 (Post-Pandemic Revival)",
    status: "Past",
    category: "Past",
    badge: "Past Event",
    date: "2023-02-11",
    dateLabel: "11th & 12th February 2023",
    time: "09:30 AM – 05:30 PM",
    venue: "Chennai Trade Centre, Nandambakkam",
    city: "Chennai, Tamil Nadu",
    image: "/images/gallery-exhibition-1.jpg",
    price: "Concluded",
    seats: 3800,
    excerpt:
      "A triumphant return to in-person connection, highlighting sterilization protocols, touchless ergonomics, and digital impressions.",
    description: [
      "The 2023 show marked the triumphant physical return of the dental fraternity to Chennai Trade Centre with record enthusiams.",
      "Clinicians reconnected with suppliers, tested new autoclave systems and wireless scanners, and participated in over 12 hands-on workshops."
    ],
    highlights: [
      "140+ exhibitors and brands",
      "12 CME certified clinical workshops",
      "Pioneering digital chairside CAD/CAM demos"
    ],
    ctaText: "View 2023 Photos",
    ctaLink: "/gallery",
    secondaryCtaText: "Read History",
    secondaryCtaLink: "/about",
    speakers: ["dr-anya-sharma", "dr-richard-hale"],
    sessions: [
      { time: "09:30 AM", title: "Inaugural Address: Rebuilding Dental Practices Post-COVID", speaker: "TNDTMA President" },
      { time: "02:00 PM", title: "Touchless & Digital Impression Protocols", speaker: "Dr. Anya Sharma" },
    ],
  },
];

export const upcomingEvents = events.filter((e) => e.status === "Upcoming");
export const pastEvents = events.filter((e) => e.status === "Past");

export function getEvent(slug) {
  return events.find((e) => e.slug === slug);
}

