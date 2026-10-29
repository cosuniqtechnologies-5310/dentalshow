import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";
import BeaverMascot from "@/components/BeaverMascot";
import InteractiveStagesAccordion from "@/components/InteractiveStagesAccordion";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import TrustedPartnersShowcase from "@/components/TrustedPartnersShowcase";

export const metadata = {
  title: "About Us | TNDTMA & Dental Show 2027",
  description:
    "What began as a vision to strengthen the dental trade around 2000 has grown into a journey of bringing the dental community closer through TNDTMA and Dental Show.",
};

const objectives = [
  {
    num: "01",
    tag: "ETHICAL TRADE",
    icon: "sparkle",
    title: "Supply Integrity & Verified Warranties",
    text: "Enforcing strict standards so every handpiece, biomaterial, and operatory system carries verified manufacturer warranties and direct after-sales service.",
  },
  {
    num: "02",
    tag: "DISTRIBUTION",
    icon: "users",
    title: "Statewide District Dealer Network",
    text: "Uniting authorized suppliers across all 38 districts of Tamil Nadu to ensure rapid doorstep delivery, maintenance, and emergency clinic repairs.",
  },
  {
    num: "03",
    tag: "CLINICAL CDE",
    icon: "star",
    title: "Subsidized Education & CDE Credits",
    text: "Partnering with certified dental academies to conduct high-yield, hands-on clinical masterclasses that award recognized continuing education credits.",
  },
  {
    num: "04",
    tag: "INCUBATION",
    icon: "pin",
    title: "New Clinic Incubation & Practice Grants",
    text: "Providing freshly graduated BDS and MDS clinicians with specialized equipment financing guidance, startup bundles, and expert operatory layout advisory.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Banner with Mr. Dentalshow Mascot */}
      <PageBanner
        title="About Us"
        crumbs={[{ label: "About Us" }]}
        subtitle="A vision that began with trade. A future we build together."
        mascotQuote="Celebrating 20 Years of Dental Excellence!"
        editionBadge="20th Milestone Edition · 2005–2027"
      />

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 (SCREENSHOT 3 STYLE): SPLIT HERO STORY & OVERLAPPING PHOTOS */}
      {/* ------------------------------------------------------------------ */}
      <section className="section about-split-story font-modern" id="about-genesis">
        <div className="about-theme-container">
          <div className="split-story-grid">
            {/* Left Column: Overlapping Photos with Theme Floating Circular Badge */}
            <div className="split-media-wrapper">
              <div className="split-img-back-card">
                <Image
                  src="/images/dental-show-images/vlcsnap-2026-10-29-00h42m51s996.png"
                  alt="Dental Show Exhibition & Trade Floor"
                  width={440}
                  height={540}
                  priority
                  className="split-img-back"
                />
              </div>

              <div className="split-img-front-card">
                <Image
                  src="/images/dental-show-images/vlcsnap-2026-10-29-00h42m12s093.png"
                  alt="Dental Show Operatory Chairs & Technology"
                  width={340}
                  height={340}
                  className="split-img-front"
                />
              </div>

              {/* Floating Circular Badge Adopting Theme Gradient */}
              <div className="split-badge-circle">
                <span className="split-badge-val">20+</span>
                <span className="split-badge-sub">Years Legacy</span>
              </div>
            </div>

            {/* Right Column: Eyebrow Pill, Theme Headline, Lead, 3 Feature Rows */}
            <div className="about-split-content">
              <div className="split-eyebrow-pill">
                <span className="split-eyebrow-dot" />
                <span className="split-eyebrow-text">FOUNDING VISION · ESTABLISHED IN TAMIL NADU</span>
              </div>

              <h2 className="split-main-title">
                A Vision Born to Elevate Dental Healthcare Across South India.
              </h2>

              <p className="split-lead-p">
                At the turn of the millennium, Tamil Nadu&apos;s dental community faced a critical challenge:
                advanced clinical technologies were hard to procure, imported supplies carried steep markups,
                and practitioners lacked direct access to authorized equipment makers. To bridge this divide,
                pioneer dental trade leaders joined hands to establish TNDTMA. What began as an effort to organize
                the trade has transformed into South India&apos;s most influential dental movement—uniting technology,
                clinical mentorship, and professional growth.
              </p>

              {/* 3 Circular Icon Feature Rows with Theme Colors */}
              <div className="split-features-list">
                <div className="split-feature-item">
                  <div className="split-feature-icon-pod pod-navy">
                    <Icon name="store" size={20} />
                  </div>
                  <div className="split-feature-info">
                    <h3 className="split-feature-title">Direct Manufacturer Access</h3>
                    <p className="split-feature-desc">
                      Connecting clinics from Chennai to Coimbatore and Madurai directly with global equipment makers,
                      removing multi-layered markups and guaranteeing authentic CE/FDA certifications.
                    </p>
                  </div>
                </div>

                <div className="split-feature-item">
                  <div className="split-feature-icon-pod pod-royal">
                    <Icon name="handshake" size={20} />
                  </div>
                  <div className="split-feature-info">
                    <h3 className="split-feature-title">Standardized Local Service</h3>
                    <p className="split-feature-desc">
                      Ensuring operatory chairs, digital autoclaves, intraoral sensors, and CAD/CAM units are
                      supported by trained local biomedical engineers and prompt spare parts availability.
                    </p>
                  </div>
                </div>

                <div className="split-feature-item">
                  <div className="split-feature-icon-pod pod-emerald">
                    <Icon name="sparkle" size={20} />
                  </div>
                  <div className="split-feature-info">
                    <h3 className="split-feature-title">Bridging Clinical Academia</h3>
                    <p className="split-feature-desc">
                      Collaborating with premier dental universities so that graduating scholars gain hands-on
                      proficiency with cutting-edge equipment before beginning private clinical practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4-Column Stat Counter Bar with Theme Color Accents */}
          <div className="split-stats-bar">
            <div className="split-stat-item">
              <span className="split-stat-num num-navy">20+</span>
              <span className="split-stat-lbl">Years Of Experience</span>
            </div>
            <div className="split-stat-item">
              <span className="split-stat-num num-royal">250+</span>
              <span className="split-stat-lbl">Exhibiting Brands</span>
            </div>
            <div className="split-stat-item">
              <span className="split-stat-num num-emerald">6,000+</span>
              <span className="split-stat-lbl">Dental Professionals</span>
            </div>
            <div className="split-stat-item">
              <span className="split-stat-num num-turquoise">10,000+</span>
              <span className="split-stat-lbl">Sq. Meters Expo Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 (SCREENSHOT 4 STYLE): HORIZONTAL PROCESS & MILESTONES (FULL SCREEN) */}
      {/* ------------------------------------------------------------------ */}
      <section className="about-process-section full-screen-process font-modern" id="process-flow">
        <div className="process-fullscreen-wrap">
          <div className="process-flow-grid">
            {/* Left Header Column */}
            <div className="process-left-col">
              <div>
                <div className="process-eyebrow-pill">
                  <span className="process-eyebrow-dot" />
                  <span>OUR PROCESS · HISTORIC ERAS</span>
                </div>
                <h2 className="process-title">
                  From insight<br />to impact<span className="process-title-dot">.</span>
                </h2>
                <p className="process-desc">
                  A community-centered journey powered by innovation and dental trade unity across
                  Tamil Nadu.
                </p>
              </div>

              <div>
                <a href="#historic-stages" className="process-link">
                  <span>Explore Community</span>
                  <span className="process-link-arrow">→</span>
                </a>
              </div>
            </div>

            {/* 01: Around 2000 */}
            <div className="process-step-col">
              <span className="process-step-num num-c1">01</span>
              <div className="process-step-accent-bar bar-c1" />
              <h3 className="process-step-year">Around 2000</h3>
              <span className="process-era-pill pill-navy">ORIGIN ERA</span>
              <p className="process-step-text">
                Pioneer dental trade leaders recognize the urgent need for a unified state body to
                eliminate supply bottlenecks and support local practitioners.
              </p>
              <span className="process-step-tag">✓ Trade Unity Formed</span>
            </div>

            {/* 02: 2005 */}
            <div className="process-step-col">
              <span className="process-step-num num-c2">02</span>
              <div className="process-step-accent-bar bar-c2" />
              <h3 className="process-step-year">2005</h3>
              <span className="process-era-pill pill-royal">HISTORIC BEGINNING</span>
              <p className="process-step-text">
                TNDTMA is officially registered under the Tamil Nadu Societies Act. That same year,
                the first landmark Dental Show debuts in Chennai.
              </p>
              <span className="process-step-tag">✓ TNDTMA Registered</span>
            </div>

            {/* 03: 2015 */}
            <div className="process-step-col">
              <span className="process-step-num num-c3">03</span>
              <div className="process-step-accent-bar bar-c3" />
              <h3 className="process-step-year">2015</h3>
              <span className="process-era-pill pill-turquoise">DECADE OF PROGRESS</span>
              <p className="process-step-text">
                Dental Show expands into South India&apos;s premier B2B expo, introducing live surgical
                workshops, digital radiography, and hands-on masterclasses.
              </p>
              <span className="process-step-tag">✓ Digital CAD/CAM Era</span>
            </div>

            {/* 04: 2025 */}
            <div className="process-step-col">
              <span className="process-step-num num-c4">04</span>
              <div className="process-step-accent-bar bar-c4" />
              <h3 className="process-step-year">2025</h3>
              <span className="process-era-pill pill-emerald">TWO DECADES IMPACT</span>
              <p className="process-step-text">
                Celebrating 20 editions of trust, empowering over 6,000 dental delegates annually and
                establishing Chennai as South India&apos;s dental innovation capital.
              </p>
              <span className="process-step-tag">✓ 6,000+ Delegates</span>
            </div>

            {/* 05: 2027 */}
            <div className="process-step-col">
              <span className="process-step-num num-c5">05</span>
              <div className="process-step-accent-bar bar-c5" />
              <h3 className="process-step-year">2027</h3>
              <span className="process-era-pill pill-mint">THE NEXT CHAPTER</span>
              <p className="process-step-text">
                The landmark 20th Milestone Edition at Chennai Trade Centre (6–7 Feb 2027)—unveiling AI
                diagnostics, 3D biomaterials, and next-gen prosthetics.
              </p>
              <span className="process-step-tag">✓ CTC · 6–7 Feb 2027</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 (SCREENSHOT 1 STYLE): TRUST SECTION + MODERN CARDS STACK */}
      {/* ------------------------------------------------------------------ */}
      <section className="section about-trust-section font-modern" id="association-purpose">
        <div className="about-theme-container">
          <div className="trust-section-grid">
            {/* Left Content Column Matching Screenshot 1 with Balanced Height */}
            <div className="trust-left-content">
              <div className="trust-eyebrow-pill">
                <span className="trust-eyebrow-dot" />
                <span>ESTABLISHED 2005 · TNDTMA COMMUNITY</span>
              </div>

              <h2 className="trust-headline">
                Trusted by<br />
                <span className="trust-headline-highlight">6,000+ Dental Leaders</span>
              </h2>

              <p className="trust-lead-desc">
                Backing private dental clinics, hospital departments, and educational institutions with
                transparent equipment pricing, verified warranties, and ethical trade governance.
              </p>

              {/* Overlapping Avatars + Social Proof Meta */}
              <div className="trust-social-proof">
                <div className="trust-avatars-row">
                  <div className="trust-avatar-item">
                    <Image
                      src="/images/speaker-1.jpg"
                      alt="Dental Show Leader"
                      width={44}
                      height={44}
                      className="trust-avatar-img"
                    />
                  </div>
                  <div className="trust-avatar-item">
                    <Image
                      src="/images/speaker-2.jpg"
                      alt="Dental Show Leader"
                      width={44}
                      height={44}
                      className="trust-avatar-img"
                    />
                  </div>
                  <div className="trust-avatar-item">
                    <Image
                      src="/images/speaker-3.jpg"
                      alt="Dental Show Leader"
                      width={44}
                      height={44}
                      className="trust-avatar-img"
                    />
                  </div>
                  <div className="trust-avatar-item">
                    <Image
                      src="/images/speaker-4.jpg"
                      alt="Dental Show Leader"
                      width={44}
                      height={44}
                      className="trust-avatar-img"
                    />
                  </div>
                </div>

                <div className="trust-social-meta">
                  <div className="trust-stars-row">
                    <span className="star-icon">★</span>
                    <span className="star-icon">★</span>
                    <span className="star-icon">★</span>
                    <span className="star-icon">★</span>
                    <span className="star-icon">★</span>
                    <span className="star-rating-score">4.9 / 5</span>
                  </div>
                  <span className="trust-rating-sub">6,000+ Verified Dental Delegates</span>
                </div>
              </div>

              {/* 3 Quick Metrics with Theme Colors */}
              <div className="trust-metrics-row">
                <div className="trust-metric-item">
                  <span className="trust-metric-num metric-navy">20+</span>
                  <span className="trust-metric-lbl">Years Legacy</span>
                </div>
                <div className="trust-metric-item">
                  <span className="trust-metric-num metric-royal">250+</span>
                  <span className="trust-metric-lbl">Exhibiting Brands</span>
                </div>
                <div className="trust-metric-item">
                  <span className="trust-metric-num metric-emerald">4.9 ★</span>
                  <span className="trust-metric-lbl">Positive Rating</span>
                </div>
              </div>

              {/* Credential Seal */}
              <div className="trust-credential-footer">
                <span className="trust-check-badge">✓</span>
                <span>Official state dental trade association registered under TN Societies Act</span>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="trust-divider-bar" aria-hidden="true" />

            {/* Right Stack of Modern Cards (Screenshot 1 Balanced Layout) */}
            <div className="trust-cards-stack">
              {objectives.map((obj, idx) => (
                <article key={obj.num} className="trust-card">
                  <div className={`trust-card-icon-pod pod-card-${idx}`}>
                    <Icon name={obj.icon} size={20} />
                  </div>

                  <div className="trust-card-body">
                    <h3 className="trust-card-title">{obj.title}</h3>
                    <p className="trust-card-desc">{obj.text}</p>
                  </div>

                  <div className="trust-card-arrow-btn" aria-hidden="true">
                    <span>→</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 (SCREENSHOT 2 STYLE): INTERACTIVE EXPANDABLE ACCORDION */}
      {/* ------------------------------------------------------------------ */}
      <section className="section about-stages-section font-modern" id="historic-stages">
        <div className="about-theme-container">
          <InteractiveStagesAccordion />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: PANORAMIC TIMELINE & MASCOT PODIUM */}
      {/* ------------------------------------------------------------------ */}
      <section className="section section-legacy font-modern timeline-section-fullwidth" id="timeline">
        <div className="container">
          <div className="timeline-header-compact text-left">
            <div className="timeline-header-grid">
              <div className="timeline-header-col-left">
                <div className="timeline-eyebrow-row">
                  <span className="timeline-accent-dash" aria-hidden="true" />
                  <span className="section-eyebrow timeline-eyebrow-text">
                    PANORAMIC TIMELINE &amp; AMBASSADOR
                  </span>
                </div>
                <h2 className="section-main-title timeline-main-title">
                  Experience Two Decades of Momentum
                </h2>
              </div>
              <div className="timeline-header-col-right">
                <p className="section-desc timeline-header-desc">
                  Step through each era with Mr. Dentalshow, our official mascot guide. Watch the
                  auto-cycling timeline or select any milestone year to relive the breakthroughs that
                  shaped modern dentistry.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-interactive-mount">
            <InteractiveTimeline />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6: MR. DENTALSHOW MASCOT AMBASSADOR FEATURE */}
      {/* ------------------------------------------------------------------ */}
      <section className="section about-mascot-section fold-primary-dark bg-gradient-dark text-white">
        <div className="container split align-items-center">
          <div className="split__content text-white">
            <div className="ambassador-badge-pill">
              <span className="ambassador-pulse" />
              <span>MEET OUR AMBASSADOR</span>
            </div>
            <h2 className="section-main-title text-white" style={{ color: "#ffffff" }}>
              Meet Mr. Dentalshow &mdash; Official Mascot
            </h2>
            <div className="title-zigzag" style={{ margin: "0 0 20px 0" }} />
            <p className="about-mascot-desc text-white" style={{ color: "rgba(255, 255, 255, 0.95)" }}>
              Why the beaver? Nature&apos;s greatest builders possess teeth that never stop growing,
              naturally reinforced with iron, making them an enduring symbol of dental strength,
              persistence, and meticulous precision!
            </p>
            <p className="about-mascot-desc text-white" style={{ color: "rgba(255, 255, 255, 0.95)" }}>
              Our friendly mascot, Mr. Dentalshow, welcomes thousands of clinicians, students, and exhibitors
              to Chennai Trade Centre, embodying the spirit: <em>&ldquo;See. Touch. Feel. Experience.&rdquo;</em>
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

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7: TRUSTED DENTAL PARTNERS & INDUSTRY COLLABORATORS */}
      {/* ------------------------------------------------------------------ */}
      <section className="section about-partners-section font-modern" id="partners">
        <div className="container">
          <SectionTitle
            eyebrow="INDUSTRY COLLABORATORS"
            title="Trusted Dental Partners"
            subtitle="Working alongside renowned medical manufacturers, diagnostic pioneers, and clinical bodies to shape South India's premier dental exposition."
          />
          <TrustedPartnersShowcase />
        </div>
      </section>
    </>
  );
}
