import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";
import BeaverMascot from "@/components/BeaverMascot";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { site } from "@/data/site";

export const metadata = {
  title: "About Us | TNDTMA & Dental Show 2027",
  description:
    "What began as a vision to strengthen the dental trade around 2000 has grown into a journey of bringing the dental community closer through TNDTMA and Dental Show.",
};

const erasRoadmap = [
  {
    stage: "01",
    totalStages: "05",
    eraName: "ORIGIN ERA",
    year: "Around 2000",
    tagline: "UNITING THE DENTAL COMMUNITY",
    title: "A Shared Vision for Tamil Nadu",
    story:
      "Around 2000, dental trade leaders envisioned a united community to strengthen Tamil Nadu's dental industry, bridge technology gaps, and help practitioners access quality equipment.",
    impactTitle: "FOUNDING IMPACT",
    impacts: ["A United Trade Community", "Dental Leaders United"],
    prioritiesTitle: "FOUNDING IDEAS & PRIORITIES",
    priorities: ["Trade Unity", "Shared Progress", "Practitioner Support"],
  },
  {
    stage: "02",
    totalStages: "05",
    eraName: "HISTORIC BEGINNING",
    year: "2005",
    tagline: "TNDTMA AND THE FIRST DENTAL SHOW",
    title: "A Vision Becomes Reality",
    story:
      "TNDTMA was registered in 2005, marking a significant step towards a united dental trade community. That same year, the first Dental Show brought the shared vision to life, creating a platform for connection, discovery and progress.",
    impactTitle: "MILESTONE IMPACT",
    impacts: ["TNDTMA Registered", "First Dental Show Held"],
    prioritiesTitle: "KEY FOCUS & ACHIEVEMENTS",
    priorities: ["First Dental Show", "Dental Trade Unity"],
  },
  {
    stage: "03",
    totalStages: "05",
    eraName: "A DECADE OF PROGRESS",
    year: "2015",
    tagline: "BUILDING ON A SHARED VISION",
    title: "A Growing Platform for Dentistry",
    story:
      "Dental Show continued its journey of bringing the dental trade community together. Building on the vision established in its early years, the event created opportunities for industry connections, product discovery and the exchange of ideas across the dental ecosystem.",
    impactTitle: "MILESTONE IMPACT",
    impacts: ["A Growing Community", "Connecting Dental Professionals"],
    prioritiesTitle: "KEY FOCUS & ACHIEVEMENTS",
    priorities: ["Community Connections", "Product Discovery"],
  },
  {
    stage: "04",
    totalStages: "05",
    eraName: "TWO DECADES OF IMPACT",
    year: "2025",
    tagline: "CELEBRATING TWO DECADES OF DENTAL SHOW",
    title: "Two Decades of Connecting Dentistry",
    story:
      "Celebrating two decades of journey, Dental Show continues to bring the dental community together through innovation, professional connections and shared learning. Its legacy reflects a continuing commitment to supporting dental professionals and inspiring the next generation of dentistry.",
    impactTitle: "MILESTONE IMPACT",
    impacts: ["Two Decades of Progress", "A Growing Dental Community"],
    prioritiesTitle: "KEY FOCUS & ACHIEVEMENTS",
    priorities: ["Legacy & Growth", "Future Dentists", "Dental Innovation"],
  },
  {
    stage: "05",
    totalStages: "05",
    eraName: "THE FUTURE CHAPTER",
    year: "2027",
    tagline: "CHENNAI TRADE CENTRE · 6–7 FEBRUARY",
    title: "Dental Show 2027: Discover What's Next",
    story:
      "Bringing the dental community together on 6–7 February 2027 at Chennai Trade Centre, Dental Show invites dentists, students and industry professionals to discover innovations, exchange ideas and explore new possibilities for the future of dentistry.",
    impactTitle: "THE DENTAL SHOW EXPERIENCE",
    impacts: ["A Community of Possibilities", "Discover. Connect. Grow."],
    prioritiesTitle: "WHAT AWAITS YOU",
    priorities: ["Dental Innovations", "Professional Connections", "Learning & Discovery"],
  },
];

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
      {/* 1. Page Banner with Dr. Beaver Mascot */}
      <PageBanner
        title="About Us"
        crumbs={[{ label: "About Us" }]}
        subtitle="A vision that began with trade. A future we build together."
        mascotQuote="Celebrating 20 Years of Dental Excellence!"
        editionBadge="20th Milestone Edition · 2005–2027"
      />

      {/* 2. Genesis & Manifesto Section */}
      <section className="section about-manifesto-section font-modern">
        <div className="container">
          <div className="about-manifesto-card">
            <span className="manifesto-header-badge">
              <Icon name="star" size={13} />
              <span>OUR JOURNEY · OUR COMMUNITY · OUR FUTURE</span>
            </span>

            <h2 className="manifesto-main-title">
              A vision that began with trade.<br />
              A future we build together.
            </h2>

            <p className="manifesto-lead-p">
              What began as a vision to strengthen the dental trade around 2000 has grown into a journey of bringing the dental community closer. Through TNDTMA, Dental Show continues to connect professionals, inspire future dentists and bring dental innovations within reach. In 2027, the journey continues—with new discoveries, meaningful connections and possibilities for the future of dentistry.
            </p>

            <div className="manifesto-pillars-grid">
              <div className="manifesto-pillar-item">
                <div className="pillar-icon-row">
                  <div className="pillar-icon-pod">01</div>
                  <h3 className="pillar-title">Trade Unity &amp; Trust</h3>
                </div>
                <p className="pillar-desc">
                  Uniting manufacturers, dealers, and clinical practitioners across Tamil Nadu under an ethical, transparent trade umbrella.
                </p>
              </div>

              <div className="manifesto-pillar-item">
                <div className="pillar-icon-row">
                  <div className="pillar-icon-pod">02</div>
                  <h3 className="pillar-title">Accessible Innovation</h3>
                </div>
                <p className="pillar-desc">
                  Bringing digital CAD/CAM, intraoral scanning, 3D CBCT, and advanced biomaterials directly to local operatory practices.
                </p>
              </div>

              <div className="manifesto-pillar-item">
                <div className="pillar-icon-row">
                  <div className="pillar-icon-pod">03</div>
                  <h3 className="pillar-title">Empowering Future Dentists</h3>
                </div>
                <p className="pillar-desc">
                  Inspiring undergraduate and postgraduate students with certified masterclasses, live demos, and hands-on clinical training.
                </p>
              </div>
            </div>

            <div className="manifesto-cta-row">
              <Link href="/visitor-registration" className="btn btn--primary">
                <span>Register as Visitor (Free Pass)</span>
                <Icon name="arrow" size={15} />
              </Link>
              <Link href="/exhibitor-registration" className="btn btn--ghost">
                <span>Book Exhibitor Stall</span>
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                <span>Contact TNDTMA Secretariat</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5-Era Story Roadmap Grid */}
      <section className="section journey-roadmap-section font-modern" id="five-eras">
        <div className="container">
          <SectionTitle
            eyebrow="FIVE HISTORIC ERAS (2000–2027)"
            title="Our Journey: Stage by Stage"
            subtitle="Explore how a shared vision around 2000 evolved into South India's largest landmark dental convention."
          />

          <div className="journey-roadmap-grid">
            {erasRoadmap.map((era, idx) => (
              <article key={era.year} className={`journey-era-card journey-card--${idx}`}>
                <div className="journey-card-header">
                  <span className="journey-era-pill">{era.eraName}</span>
                  <span className="journey-stage-step">STAGE {era.stage} OF {era.totalStages}</span>
                </div>

                <div className="journey-year-hero">{era.year}</div>
                <div className="journey-card-tagline">{era.tagline}</div>
                <h3 className="journey-card-title">{era.title}</h3>
                <p className="journey-card-story">{era.story}</p>

                <div className="journey-card-impact-box">
                  <div className="journey-impact-title">{era.impactTitle}</div>
                  <ul className="journey-impact-list">
                    {era.impacts.map((item, i) => (
                      <li key={i}>
                        <span className="journey-check">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="journey-priorities-title">{era.prioritiesTitle}</div>
                  <div className="journey-priorities-row">
                    {era.priorities.map((p, i) => (
                      <span key={i} className="journey-priority-pill">
                        <span className="journey-priority-sparkle">✦</span>
                        <span>{p}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Timeline & Ambassador */}
      <section className="section section-legacy font-modern timeline-section-fullwidth" id="timeline">
        <div className="container">
          <div className="timeline-header-compact text-left">
            <div className="timeline-header-grid">
              <div className="timeline-header-col-left">
                <div className="timeline-eyebrow-row">
                  <span className="timeline-accent-dash" aria-hidden="true" />
                  <span className="section-eyebrow timeline-eyebrow-text">INTERACTIVE TIMELINE &amp; AMBASSADOR</span>
                </div>
                <h2 className="section-main-title timeline-main-title">
                  Experience Two Decades of Momentum
                </h2>
              </div>
              <div className="timeline-header-col-right">
                <p className="section-desc timeline-header-desc">
                  Step through each era with Dr. Beaver, our official mascot guide. Watch the auto-cycling timeline or select any milestone year to relive the breakthroughs that shaped modern dentistry.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-interactive-mount">
            <InteractiveTimeline />
          </div>
        </div>
      </section>

      {/* 5. Stats Counter */}
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

      {/* 6. Objectives & Purpose */}
      <section className="section about-objectives-section bg-light">
        <div className="container">
          <SectionTitle
            eyebrow="ASSOCIATION PURPOSE"
            title="Our Objectives &amp; Core Purpose"
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

      {/* 7. Beaver Mascot Ambassador Feature */}
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
                <span>Discover Programme</span>
                <Icon name="arrow" size={16} />
              </Link>
              <Link href="/visitor-registration" className="btn btn--outline-light">
                <span>Meet Mascot at CTC</span>
              </Link>
            </div>
          </div>
          <div className="split__media center">
            <BeaverMascot size={330} />
          </div>
        </div>
      </section>

      {/* 8. Sponsors & Partners */}
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
