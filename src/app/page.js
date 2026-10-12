import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import BeaverMascot from "@/components/BeaverMascot";
import Icon from "@/components/Icon";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { site } from "@/data/site";
import { events } from "@/data/events";
import { galleryItems } from "@/data/gallery";

export default function HomePage() {
  const upcomingEvent = events.find((e) => e.status === "Upcoming") || events[0];
  const pastEvent = events.find((e) => e.status === "Past") || events[1];
  const galleryPreview = galleryItems.slice(0, 6);

  const audienceGroups = [
    {
      role: "For Dentists",
      icon: "star",
      discover: "Explore the latest dental technologies, equipment, materials and clinical solutions.",
      connect: "Meet manufacturers, dealers and industry experts.",
      grow: "Find innovative solutions to enhance your practice and patient care.",
    },
    {
      role: "For Dental Students & Aspiring Dentists",
      icon: "users",
      discover: "Experience emerging technologies and advancements in modern dentistry.",
      connect: "Interact with industry professionals and learn about the evolving dental landscape.",
      grow: "Gain inspiration and insights to prepare for a successful dental career.",
    },
    {
      role: "For Dental Dealers & Traders",
      icon: "pin",
      discover: "Explore new products, brands and business opportunities.",
      connect: "Build relationships with manufacturers, suppliers and fellow traders.",
      grow: "Expand your network, strengthen your market presence and discover new avenues for business growth.",
    },
    {
      role: "For Manufacturers & Brands",
      icon: "sparkle",
      discover: "Understand market needs and emerging industry trends.",
      connect: "Engage directly with dentists, dealers, institutions and potential business partners.",
      grow: "Showcase innovations, strengthen brand visibility and expand your market reach.",
    },
    {
      role: "For Dental Technicians, Laboratories & Institutions",
      icon: "check",
      discover: "Explore advanced equipment, materials and workflow solutions.",
      connect: "Meet suppliers, manufacturers and professionals across the dental ecosystem.",
      grow: "Identify technologies and partnerships that can improve capabilities and support future development.",
    },
  ];

  return (
    <>
      {/* ============================================================
          SECTION 3.2: HERO BANNER (Section 1: Dark Fold)
          ============================================================ */}
      <section className="hero-area font-modern fold-dark" id="hero">
        <div className="banner-item">
          <div className="container">
            <div className="row align-items-center hero-main-row">
              {/* Left Column: Text & Registration Actions */}
              <div className="col-lg-7 hero-content-col">
                <div className="banner-content-wrap">
                  {/* Non-repeating Authority Eyebrow */}
                  <div className="hero-badge-row">
                    <span className="hero-tagline-pill">
                      <span className="live-pulse-dot" aria-hidden="true" />
                      <span>Official TNDTMA Biennial Convention</span>
                    </span>
                  </div>

                  {/* Main Title with High-Contrast Highlight */}
                  <h1 className="banner-title">
                    Dental Show <span className="title-gradient-year">2027</span>
                  </h1>

                  {/* Core Description Copy */}
                  <p className="hero-description">
                    More than an exhibition, Dental Show 2027 is where dreams take shape, ideas spark
                    innovation, and the people who move dentistry forward come together.
                  </p>

                  <div className="hero-subquote-callout">
                    <span className="quote-accent-bar" aria-hidden="true" />
                    <p className="hero-subquote-text">
                      “One community. Countless possibilities. A future we build together.”
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="hero-cta-buttons">
                    <Link
                      href="/visitor-registration"
                      className="btn btn-hero-visitor"
                      id="hero-visitor-btn"
                    >
                      <span>Register as a Visitor</span>
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/exhibitor-registration"
                      className="btn btn-hero-exhibitor"
                      id="hero-exhibitor-btn"
                    >
                      <span>Register as an Exhibitor</span>
                    </Link>
                  </div>

                  {/* Non-repeating Value Propositions */}
                  <div className="hero-trust-chips">
                    <span className="trust-chip">
                      <span className="chip-dot" /> Free Visitor Access Pass
                    </span>
                    <span className="trust-chip">
                      <span className="chip-dot" /> Live Digital CAD/CAM Demos
                    </span>
                    <span className="trust-chip">
                      <span className="chip-dot" /> Direct Manufacturer Pricing
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Banner Features Beaver Mascot */}
              <div className="col-lg-5 hero-mascot-col">
                <BeaverMascot size={310} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 3.3: COUNTDOWN (Section 2: White Fold)
          ============================================================ */}
      <section className="countdown-section-wrap font-modern fold-white" id="countdown">
        <div className="container">
          <div className="countdown-showcase-card">
            {/* Overall 3-Column Grid: Left Info Hub + Center Timer Dashboard + Right Feature Highlights */}
            <div className="countdown-3col-grid">
              {/* Column 1: Left-Aligned Information, Venue Details & CTAs */}
              <div className="countdown-left-col">
                <div className="countdown-badge-pill">
                  <span className="live-pulse-dot" aria-hidden="true" />
                  <span>SOUTH INDIA&apos;S PREMIER DENTAL SPECTACLE</span>
                </div>

                <h2 className="countdown-main-title">
                  The Countdown to <br className="countdown-title-br" />
                  <span className="title-highlight-royal">Dental Show 2027</span> Begins
                </h2>

                <p className="countdown-sub-lead">
                  Mark your calendar for <strong>6th &amp; 7th February 2027</strong>. Connect with 250+ global brands,
                  discover next-gen CAD/CAM innovations, and network with 6,000+ peers at Chennai Trade Centre.
                </p>

                {/* Event Quick Details Banner */}
                <div className="countdown-details-strip">
                  <div className="detail-pill">
                    <Icon name="calendar" size={14} />
                    <span><strong>Feb 6 – 7, 2027</strong> · 09:00 AM – 06:00 PM</span>
                  </div>
                  <div className="detail-pill">
                    <Icon name="pin" size={14} />
                    <span>Chennai Trade Centre <em>(New Hall 2, 3 &amp; 3A)</em></span>
                  </div>
                  <div className="detail-pill detail-pill--access">
                    <Icon name="ticket" size={14} />
                    <span><strong>Free Visitor Access</strong> for Dental Clinicians</span>
                  </div>
                </div>

                {/* Dual Call to Action Buttons */}
                <div className="countdown-actions-group">
                  <Link
                    href="/visitor-registration"
                    className="btn btn-countdown-primary"
                    id="countdown-register-btn"
                  >
                    <span>Register as Visitor (Free Pass)</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href="/exhibitor-registration"
                    className="btn btn-countdown-secondary"
                    id="countdown-exhibitor-btn"
                  >
                    <span>Book an Exhibitor Booth</span>
                  </Link>
                </div>
              </div>

              {/* Column 2 (Center): Dedicated Live Countdown Dashboard Panel */}
              <div className="countdown-timer-col">
                <div className="countdown-timer-header">
                  <span className="live-pulse-dot" aria-hidden="true" />
                  <span>Time Until Grand Opening</span>
                </div>
                <div className="countdown-timer-wrapper">
                  <Countdown target="2027-02-06T09:00:00+05:30" />
                </div>
              </div>

              {/* Column 3 (Right Side Last Column): 3 Enriched Feature Cards */}
              <div className="countdown-features-col">
                <div className="countdown-feature-box countdown-feature-box--navy">
                  <div className="feature-box-top">
                    <div className="feature-box-icon icon-navy">
                      <Icon name="store" size={20} />
                    </div>
                    <span className="feature-box-badge badge-navy">EXHIBITION</span>
                    <div className="feature-box-stat stat-navy">
                      <span className="stat-dot dot-navy" />
                      <span>250+ Brands</span>
                    </div>
                  </div>
                  <div className="feature-box-body">
                    <h4>250+ Global Exhibitors</h4>
                    <p>Cutting-edge CAD/CAM, implants, lasers &amp; next-gen biomaterials from 18+ nations</p>
                  </div>
                  <div className="feature-box-pills">
                    <span className="feature-pill"><span className="pill-sparkle">✦</span> Live Clinical Demos</span>
                    <span className="feature-pill"><span className="pill-sparkle">✦</span> Exclusive Expo Offers</span>
                  </div>
                </div>

                <div className="countdown-feature-box countdown-feature-box--royal">
                  <div className="feature-box-top">
                    <div className="feature-box-icon icon-royal">
                      <Icon name="users" size={20} />
                    </div>
                    <span className="feature-box-badge badge-royal">NETWORKING</span>
                    <div className="feature-box-stat stat-royal">
                      <span className="stat-dot dot-royal" />
                      <span>6,000+ Peers</span>
                    </div>
                  </div>
                  <div className="feature-box-body">
                    <h4>6,000+ Trade Delegates</h4>
                    <p>Connect with clinicians, clinic owners, lab technicians, dealers &amp; students</p>
                  </div>
                  <div className="feature-box-pills">
                    <span className="feature-pill"><span className="pill-sparkle">✦</span> B2B Trade Exchange</span>
                    <span className="feature-pill"><span className="pill-sparkle">✦</span> Clinical Networking</span>
                  </div>
                </div>

                <div className="countdown-feature-box countdown-feature-box--cyan">
                  <div className="feature-box-top">
                    <div className="feature-box-icon icon-cyan">
                      <Icon name="sparkle" size={20} />
                    </div>
                    <span className="feature-box-badge badge-cyan">INFRASTRUCTURE</span>
                    <div className="feature-box-stat stat-cyan">
                      <span className="stat-dot dot-cyan" />
                      <span>10,000+ sq.m</span>
                    </div>
                  </div>
                  <div className="feature-box-body">
                    <h4>10,000+ sq.m Exhibition Floor</h4>
                    <p>Chennai Trade Centre&apos;s state-of-the-art New Halls 2, 3 &amp; 3A</p>
                  </div>
                  <div className="feature-box-pills">
                    <span className="feature-pill"><span className="pill-sparkle">✦</span> Fully Air-Conditioned</span>
                    <span className="feature-pill"><span className="pill-sparkle">✦</span> Easy Metro &amp; Parking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3.4: OUR LEGACY & TIMELINE (Full-Screen Connection Thread)
          ============================================================ */}
      <section className="section section-legacy font-academic timeline-section-fullwidth" id="legacy">
        <div className="container-fluid timeline-container-fluid">
          <div className="text-center mb-40">
            <span className="section-eyebrow">OUR LEGACY & TWO DECADE JOURNEY</span>
            <h2 className="section-main-title text-white">
              A vision born around 2000. A milestone achieved in 2005. A future shaped by innovation.
            </h2>
            <div className="title-zigzag" />
            <p className="max-w-700 mx-auto section-desc-light">
              From the initial trade vision committee around 2000 to South India’s largest dental showcase
              in 2027. Explore our continuous progression across two decades of clinical and trade leadership.
            </p>
          </div>

          <div className="timeline-interactive-mount">
            <InteractiveTimeline />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3.5: DISCOVER. CONNECT. GROW. (Section 4: Primary Dark Fold)
          ============================================================ */}
      <section className="section section-benefits font-clinical fold-primary-dark" id="benefits">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-eyebrow text-mint">ONE PLATFORM. MULTIPLE OPPORTUNITIES.</span>
            <h2 className="section-main-title text-white">Discover. Connect. Grow.</h2>
            <div className="title-zigzag" />
            <p className="max-w-700 mx-auto section-desc-light">
              A stronger future for the entire dental community. Dental Show 2027 brings together the
              people, products and possibilities shaping the future of dentistry. Whether you are a
              dentist exploring better clinical solutions, a student aspiring to excel, a dealer
              looking to grow, or a manufacturer ready to expand your reach, there is something here
              for you.
            </p>
            <h3 className="column-title text-white mt-md">Who Benefits from Dental Show?</h3>
          </div>

          {/* 5 Audience Cards */}
          <div className="audience-cards-grid">
            {audienceGroups.map((group, idx) => (
              <div key={group.role} className="audience-benefit-card pop-in" style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="audience-card-header">
                  <div className="audience-card-icon">
                    <Icon name={group.icon} size={22} />
                  </div>
                  <h4 className="audience-card-role">{group.role}</h4>
                </div>

                <div className="audience-triad-list">
                  <div className="triad-item">
                    <span className="triad-badge badge-discover">Discover</span>
                    <p>{group.discover}</p>
                  </div>

                  <div className="triad-item">
                    <span className="triad-badge badge-connect">Connect</span>
                    <p>{group.connect}</p>
                  </div>

                  <div className="triad-item">
                    <span className="triad-badge badge-grow">Grow</span>
                    <p>{group.grow}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Concluding Highlight Quote */}
          <div className="audience-conclusion-box">
            <p className="conclusion-quote">
              “At Dental Show 2027, every connection can spark an idea, every discovery can open a door,
              and <span>every opportunity can move dentistry forward</span>.”
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3.6: EVENTS (Section 5: White Fold)
          ============================================================ */}
      <section className="section section-events font-corporate fold-white" id="events-section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-eyebrow">SHOWCASE & SESSIONS</span>
            <h2 className="section-main-title">Events</h2>
            <div className="title-zigzag" />
            <p className="max-w-700 mx-auto text-muted">
              Explore the upcoming flagship exhibition and revisit the proud milestones of past editions.
            </p>
          </div>

          <div className="events-duo-grid">
            {/* Upcoming Event Card */}
            {upcomingEvent && (
              <article className="event-duo-card pop-in">
                <div className="event-duo-media">
                  <Image
                    src={upcomingEvent.image}
                    alt={upcomingEvent.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="event-duo-badge badge-upcoming-glow">
                    ★ {upcomingEvent.badge}
                  </span>
                </div>
                <div className="event-duo-body">
                  <h3 className="event-duo-title">{upcomingEvent.title}</h3>
                  <ul className="event-duo-meta">
                    <li>
                      <Icon name="calendar" size={16} /> {upcomingEvent.dateLabel}
                    </li>
                    <li>
                      <Icon name="pin" size={16} /> {upcomingEvent.venue}
                    </li>
                  </ul>
                  <p className="event-duo-excerpt">{upcomingEvent.excerpt}</p>
                  <ul className="event-duo-highlights">
                    {upcomingEvent.highlights.slice(0, 3).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="event-duo-actions">
                    <Link href="/visitor-registration" className="btn btn--primary">
                      Register as Visitor
                    </Link>
                    <Link href="/exhibitor-registration" className="btn btn--ghost">
                      Register as Exhibitor
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Past Event Card */}
            {pastEvent && (
              <article className="event-duo-card pop-in" style={{ animationDelay: "150ms" }}>
                <div className="event-duo-media">
                  <Image
                    src={pastEvent.image}
                    alt={pastEvent.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="event-duo-badge badge-past-gray">
                    {pastEvent.badge}
                  </span>
                </div>
                <div className="event-duo-body">
                  <h3 className="event-duo-title">{pastEvent.title}</h3>
                  <ul className="event-duo-meta">
                    <li>
                      <Icon name="calendar" size={16} /> {pastEvent.dateLabel}
                    </li>
                    <li>
                      <Icon name="pin" size={16} /> {pastEvent.venue}
                    </li>
                  </ul>
                  <p className="event-duo-excerpt">{pastEvent.excerpt}</p>
                  <ul className="event-duo-highlights">
                    {pastEvent.highlights.slice(0, 3).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="event-duo-actions">
                    <Link href="/gallery" className="btn btn--ghost">
                      View 2025 Photos & Highlights
                    </Link>
                    <Link href="/about" className="link-arrow">
                      Read Legacy Story →
                    </Link>
                  </div>
                </div>
              </article>
            )}
          </div>

          <div className="text-center mt-lg">
            <Link href="/events" className="btn btn--primary">
              View All Events & Sessions <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3.7: GALLERY PREVIEW (Section 6: Light Primary Fold)
          ============================================================ */}
      <section className="section section-gallery font-modern fold-light-primary" id="gallery-preview">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-eyebrow">PHOTO & VIDEO HIGHLIGHTS</span>
            <h2 className="section-main-title">Gallery Preview</h2>
            <div className="title-zigzag" />
            <p className="max-w-700 mx-auto text-muted">
              Moments That Bring Us Together. Revisit the people, experiences and memories that make
              every Dental Show special.
            </p>
          </div>

          <div className="gallery-preview-grid">
            {galleryPreview.map((item, idx) => (
              <Link
                key={item.id}
                href="/gallery"
                className={`gallery-preview-tile ${idx === 0 || idx === 5 ? "tall" : ""}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="preview-tile-overlay">
                  <span className="preview-tile-year">{item.year} • {item.category}</span>
                  <span className="preview-tile-title">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-lg">
            <Link href="/gallery" className="btn btn--primary" id="btn-full-gallery">
              Explore Central Gallery (Filterable by Year) <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3.8: REGISTRATION CTA (Section 7: Primary Dark Fold)
          ============================================================ */}
      <section className="cta-dual-section font-modern fold-primary-dark" id="registration-cta">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">JOIN DENTAL SHOW 2027</span>
            <h2 className="section-main-title">Be Part of the Next Chapter</h2>
            <div className="title-zigzag" />
            <p className="max-w-700 mx-auto text-muted">
              Join thousands of clinicians, dental students, dealers, technicians, and world-class
              manufacturers at Chennai Trade Centre on 6th & 7th February 2027.
            </p>
          </div>

          <div className="cta-dual-grid">
            {/* For Visitors Card */}
            <div className="cta-dual-card visitor-side pop-in">
              <span className="cta-card-badge">FOR CLINICIANS, STUDENTS & TEAMS</span>
              <h3 className="cta-card-title">Register as a Visitor</h3>
              <p className="cta-card-desc">
                For Visitors: Discover the dental industry and connect with the community.
              </p>
              <ul className="cta-perks-list">
                <li>
                  <Icon name="check" size={18} /> Free access to 3 massive exhibition halls (New Hall 2, 3 & 3A)
                </li>
                <li>
                  <Icon name="check" size={18} /> Experience hands-on scanning, laser & 3D printing demos
                </li>
                <li>
                  <Icon name="check" size={18} /> Meet the Beaver Mascot and network with 6,000+ peers
                </li>
              </ul>
              <div>
                <Link
                  href="/visitor-registration"
                  className="btn btn--primary"
                  id="cta-visitor-register-btn"
                >
                  Register as a Visitor
                </Link>
              </div>
            </div>

            {/* For Exhibitors Card */}
            <div className="cta-dual-card exhibitor-side pop-in" style={{ animationDelay: "100ms" }}>
              <span className="cta-card-badge">FOR BRANDS, MANUFACTURERS & TRADERS</span>
              <h3 className="cta-card-title">Register as an Exhibitor</h3>
              <p className="cta-card-desc">
                For Exhibitors: Showcase your business and build new connections.
              </p>
              <ul className="cta-perks-list">
                <li>
                  <Icon name="check" size={18} /> Premium shell schemes and bare space custom stalls
                </li>
                <li>
                  <Icon name="check" size={18} /> Direct access to active dental buyers & institutional clinic heads
                </li>
                <li>
                  <Icon name="check" size={18} /> Full backing and trade promotion by TNDTMA
                </li>
              </ul>
              <div>
                <Link
                  href="/exhibitor-registration"
                  className="btn btn-header-exhibitor"
                  style={{ padding: "13px 30px", fontSize: "14px" }}
                  id="cta-exhibitor-register-btn"
                >
                  Register as an Exhibitor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
