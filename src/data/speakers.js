export const speakers = [
  {
    id: "fredric-martinsson",
    name: "Fredric Martinsson",
    role: "Founder, Edilta",
    org: "Edilta",
    image: "/images/speakers/speaker1.jpg",
    bio: "Fredric is committed to transforming how businesses adapt to technological shifts, consumer behavior, and modern industry dynamics.",
    sessions: [
      { day: "Day 1", time: "10.30 - 11.30 am", topic: "Marketing Matters" },
      { day: "Day 2", time: "02.00 - 03.30 pm", topic: "Digital Strategy & Growth" },
    ],
  },
  {
    id: "melisa-lundryn",
    name: "Melisa Lundryn",
    role: "Lead Designer, Payol",
    org: "Payol",
    image: "/images/speakers/speaker2.jpg",
    bio: "Specializing in user experience and creative direction, Melisa leads design systems for next-generation platforms.",
    sessions: [
      { day: "Day 1", time: "10.30 - 11.30 am", topic: "Reinventing Experiences" },
      { day: "Day 2", time: "11.30 - 12.30 pm", topic: "Product Systems" },
    ],
  },
  {
    id: "agaton-johnsson",
    name: "Agaton Johnsson",
    role: "Developer Expert",
    org: "Google Developer Group",
    image: "/images/speakers/speaker3.jpg",
    bio: "Agaton explores cutting-edge cloud architectures, scalable web frameworks, and creative software workflows.",
    sessions: [
      { day: "Day 1", time: "11.30 - 12.30 pm", topic: "Cultures of Creativity" },
      { day: "Day 3", time: "10.00 - 11.30 am", topic: "Cloud Scale Architecture" },
    ],
  },
  {
    id: "rebecca-henrikon",
    name: "Rebecca Henrikon",
    role: "Founder, Cards",
    org: "Cards",
    image: "/images/speakers/speaker4.jpg",
    bio: "Rebecca is a serial entrepreneur building collaborative tools and rethinking community-driven commerce.",
    sessions: [
      { day: "Day 1", time: "12.30 - 01.30 pm", topic: "Building Sustainable Products" },
      { day: "Day 2", time: "04.00 - 05.00 pm", topic: "Startup Economics" },
    ],
  },
  {
    id: "fredric-martinsson-2",
    name: "Fredric Martinsson",
    role: "Founder, Edilta",
    org: "Edilta",
    image: "/images/speakers/speaker5.jpg",
    bio: "Expert in enterprise transformation and clinical practice management systems.",
    sessions: [
      { day: "Day 2", time: "09.30 - 10.30 am", topic: "The Business of Innovation" },
    ],
  },
  {
    id: "lundryn-melisa-2",
    name: "Lundryn Melisa",
    role: "Lead Designer, Payol",
    org: "Payol",
    image: "/images/speakers/speaker6.jpg",
    bio: "Leading consumer interface teams and digital product design laboratories.",
    sessions: [
      { day: "Day 2", time: "01.30 - 02.30 pm", topic: "Interface Micro-interactions" },
    ],
  },
  {
    id: "johnsson-agaton-2",
    name: "Johnsson Agaton",
    role: "Developer Expert",
    org: "DevRel Labs",
    image: "/images/speakers/speaker7.jpg",
    bio: "Pioneering interactive applications and 3D digital simulation tools.",
    sessions: [
      { day: "Day 3", time: "11.00 - 12.00 pm", topic: "Interactive Tools of Tomorrow" },
    ],
  },
  {
    id: "henrikon-rebecca-2",
    name: "Henrikon Rebecca",
    role: "Founder, Cards",
    org: "Cards Studio",
    image: "/images/speakers/speaker8.jpg",
    bio: "Guiding modern teams through venture growth and disruptive technology adoption.",
    sessions: [
      { day: "Day 3", time: "02.00 - 03.30 pm", topic: "Next-gen Venture Scaling" },
    ],
  },
];

export const getSpeaker = (id) =>
  speakers.find((s) => s.id === id) || {
    id,
    name: "David Robert",
    role: "Chief Architecture",
    org: "Exhibz",
    image: "/images/speakers/speaker1.jpg",
    bio: "Keynote presenter and technology fellow.",
  };
