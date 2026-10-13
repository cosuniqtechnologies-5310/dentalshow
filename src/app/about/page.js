import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import BeaverMascot from "@/components/BeaverMascot";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { site, sponsors } from "@/data/site";

export const metadata = {
  title: "About Us | TNDTMA & Dental Show 2027",
  description:
    "Discover the history, objectives, and purpose of TNDTMA (Tamil Nadu Dental Trade & Manufacturers Association) and the story of Dental Show.",
};

const objectives = [
  {
    num: "01",
    tag: "INNOVATION",
    icon: "sparkle",
    title: "Accessible Dental Innovation",
    text: "Make the latest advancements in dental technology, digital workflows, and materials accessible to aspiring dentists across Tamil Nadu.",
  },
  {
    num: "02",
    tag: "COMMUNITY",
    icon: "users",
    title: "Unite the Dental Community",
    text: "Provide an open platform where clinicians, students, dealers, technicians, and manufacturers collaborate to shape modern dentistry.",
  },
  {
    num: "03",
    tag: "ETHICS & TRUST",
    icon: "star",
    title: "Strengthen Ethical Trade",
    text: "Foster trust, transparent partnerships, and highest quality standards across the dental supply chain through TNDTMA stewardship.",
  },
  {
    num: "04",
    tag: "EDUCATION",
    icon: "pin",
    title: "Hands-on Education & Mentorship",
    text: "Bridge the gap between dental academia and real-world clinical excellence through certified workshops and masterclasses.",
  },
];

const timelineMilestones = [
  {
    year: "Around 2000",
    title: "A Vision Born",
    text: "A forward-thinking group of dental trade leaders envisioned a united body to strengthen Tamil Nadu's dental trade ecosystem and support clinical practitioners.",
  },
  {
    year: "2005",
    title: "Milestone Achieved: First Dental Show",
    text: "Official formation of TNDTMA and the triumphant launch of the very first Dental Show in 2005, making state-of-the-art equipment accessible to local dentists.",
  },
  {
    year: "2015",
    title: "Scale at Chennai Trade Centre",
    text: "Dental Show expanded into Chennai Trade Centre, establishing itself as the undisputed premier annual gathering for dental professionals across South India.",
  },
  {
    year: "2025",
    title: "20th Anniversary Landmark",
    text: "Celebrated two decades of pioneering service with 180+ exhibitors, over 4,800 delegates, and the Student Dental Excellence initiative.",
  },
  {
    year: "2027",
    title: "Dental Show 2027: The Grand Chapter",
    text: "Taking place at Chennai Trade Centre New Halls 2, 3 & 3A. One community. Countless possibilities. A future we build together.",
  },
];

const stats = [
  {
    value: "20+",
    label: "Years of Legacy",
    period: "2005 – 2027",
    icon: "calendar",
    highlight: "TNDTMA Milestone",
  },
  {
    value: "250+",
    label: "Expected Exhibitors",
    period: "Global Brands",
    icon: "store",
    highlight: "Industry Innovators",
  },
  {
    value: "6,000+",
    label: "Dental Professionals",
    period: "Clinicians & Specialists",
    icon: "users",
    highlight: "South India Gathering",
  },
  {
    value: "10,000+",
    label: "Sq. Meters Expo Area",
    period: "New Halls 2, 3 & 3A",
    icon: "expand",
    highlight: "Chennai Trade Centre",
  },
];

const partnersData = [
  { name: "NexGen Dental", category: "Dental Implants & Prosthetics", type: "Platinum Partner" },
  { name: "Orthova Systems", category: "Orthodontic & Clear Aligners", type: "Technology Partner" },
  { name: "SmileLab India", category: "CAD/CAM Digital Solutions", type: "Clinical Partner" },
  { name: "Implantis Global", category: "Surgical & Bio-Materials", type: "Premier Partner" },
  { name: "DentaCloud", category: "AI & Practice Management", type: "Digital Partner" },
  { name: "LuminaRay Imaging", category: "3D CBCT & Diagnostic Systems", type: "Imaging Partner" },
  { name: "BioCrown Ceramics", category: "Restorative Aesthetic Ceramics", type: "Materials Partner" },
  { name: "ScanPro 3D", category: "Intraoral Scanning & Milling", type: "Equipment Partner" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        crumbs={[{ label: "About Us" }]}
        subtitle="A vision born around 2000. A milestone achieved in 2005. A future shaped by innovation."
      />

      {/* Legacy & History Section */}
      <section className="section font-academic">
        <div className="container split">
          <Reveal className="split__media">
            <div className="about-media-box">
              <Image
                src="/images/gallery-conference-2.jpg"
                alt="TNDTMA Dental Show Inaugural Stage"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="about-img"
              />
              <div className="about-stat-overlay">
                <strong>2005</strong>
                <span>First Dental Show in Tamil Nadu</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="split__content">
            <span className="section-eyebrow">OUR LEGACY &amp; HISTORY</span>
            <h2 className="section-main-title">A vision born around 2000. A milestone in 2005.</h2>
            <div className="title-zigzag" style={{ margin: "0 0 20px 0" }} />

            <p>
              What began as a vision to strengthen Tamil Nadu’s dental trade grew into the formation of{" "}
              <strong>TNDTMA (Tamil Nadu Dental Trade & Manufacturers Association)</strong> and the
              launch of the first Dental Show in 2005.
            </p>
            <p>
              At the heart of this journey was a larger dream: to make the latest advancements in dental
              technology accessible to aspiring dentists across the state, opening doors to new
              possibilities in learning, practice and patient care.
            </p>
            <p>
              Because the future of dentistry should not just be imagined—it should be experienced,
              explored and made accessible to every aspiring dentist.
            </p>

            <div className="about-cta-btns mt-md">
              <Link href="/visitor-registration" className="btn btn--primary">
                Register as Visitor
              </Link>
              <Link href="/exhibitor-registration" className="btn btn--ghost">
                Register as Exhibitor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="section-stats-bar about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="about-stat-card pop-in" style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="about-stat-card__top">
                  <div className="about-stat-card__icon-pod">
                    <Icon name={s.icon} size={24} />
                  </div>
                  <span className="about-stat-card__badge">{s.period}</span>
                </div>
                <div className="about-stat-card__number-wrap">
                  <span className="about-stat-card__number">{s.value}</span>
                  <span className="about-stat-card__line" />
                </div>
                <h3 className="about-stat-card__label">{s.label}</h3>
                <p className="about-stat-card__sub">{s.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives & Purpose */}
      <section className="section about-objectives-section bg-light">
        <div className="container">
          <SectionTitle
            eyebrow="ASSOCIATION PURPOSE"
            title="Our Objectives & Core Purpose"
            subtitle="TNDTMA is committed to fostering a progressive, high-quality, and ethical dental trade that elevates clinical patient care."
          />

          <div className="about-objectives-grid mt-lg">
            {objectives.map((obj, i) => (
              <div className="about-objective-card pop-in" style={{ animationDelay: `${i * 100}ms` }} key={obj.title}>
                <div className="objective-card-header">
                  <div className="objective-icon-pod">
                    <Icon name={obj.icon} size={26} />
                  </div>
                  <div className="objective-meta-pod">
                    <span className="objective-num">{obj.num}</span>
                    <span className="objective-tag">{obj.tag}</span>
                  </div>
                </div>
                <h3 className="objective-card-title">{obj.title}</h3>
                <p className="objective-card-text">{obj.text}</p>
                <div className="objective-card-footer">
                  <span className="objective-pillar-badge">
                    <Icon name="check" size={14} className="objective-check" />
                    TNDTMA Strategic Pillar
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="section timeline-section-fullwidth" id="timeline">
        <div className="container">
          <SectionTitle
            eyebrow="MILESTONES"
            title="Our Journey of Two Decades"
            subtitle="From initial concept around 2000 to South India's largest dental spectacle in 2027."
          />

          <div className="timeline-interactive-mount mt-lg">
            <InteractiveTimeline />
          </div>
        </div>
      </section>

      {/* Beaver Mascot Feature */}
      <section className="section about-mascot-section bg-gradient-dark text-white">
        <div className="container split align-items-center">
          <div className="split__content text-white">
            <div className="ambassador-badge-pill">
              <span className="ambassador-pulse" />
              <span>MEET OUR AMBASSADOR</span>
            </div>
            <h2 className="section-main-title text-white">The beaver mascot of Dental Show</h2>
            <div className="title-zigzag" style={{ margin: "0 0 20px 0" }} />
            <p className="about-mascot-desc">
              Why the beaver? Nature’s greatest builders possess teeth that never stop growing,
              naturally reinforced with iron, making them an enduring symbol of dental strength,
              persistence, and meticulous precision!
            </p>
            <p className="about-mascot-desc">
              Our friendly Beaver Mascot welcomes thousands of clinicians, students, and exhibitors to
              Chennai Trade Centre, embodying the spirit: <em>“See. Touch. Feel. Experience.”</em>
            </p>
            <div className="mascot-cta-row mt-md">
              <Link href="/events" className="btn btn--primary">
                Discover Programme <Icon name="arrow" size={16} />
              </Link>
              <Link href="/visitor-registration" className="btn btn--outline-light">
                Meet Mascot at CTC
              </Link>
            </div>
          </div>
          <div className="split__media center">
            <BeaverMascot size={330} />
          </div>
        </div>
      </section>

      {/* Sponsors & Partners */}
      <section className="section about-partners-section">
        <div className="container">
          <SectionTitle
            eyebrow="INDUSTRY COLLABORATORS"
            title="Trusted Dental Partners"
            subtitle="Working alongside renowned medical manufacturers and clinical bodies to shape South India's premier dental exposition."
          />
          <div className="about-partners-grid mt-lg">
            {partnersData.map((p, idx) => (
              <div key={p.name} className="about-partner-card pop-in" style={{ animationDelay: `${idx * 60}ms` }}>
                <div className="partner-card-emblem">
                  <Icon name="tooth" size={20} />
                </div>
                <div className="partner-card-info">
                  <h4 className="partner-card-name">{p.name}</h4>
                  <span className="partner-card-category">{p.category}</span>
                </div>
                <span className="partner-card-tier">{p.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
