import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import BeaverMascot from "@/components/BeaverMascot";
import Icon from "@/components/Icon";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import AudienceBenefitsSlider from "@/components/AudienceBenefitsSlider";
import { site } from "@/data/site";
import { events } from "@/data/events";
import { galleryItems } from "@/data/gallery";

export default function HomePage() {
  const upcomingEvent = events.find((e) => e.status === "Upcoming") || events[0];
  const pastEvent = events.find((e) => e.status === "Past") || events[1];
  const galleryPreview = galleryItems.slice(0, 6);

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
            {/* Overall 2-Column Grid: Left Info & CTAs + Right Timer & Feature Highlights */}
            <div className="countdown-2col-grid">
              {/* Column 1: Left-Aligned Information, Venue Details & CTAs */}
              <div className="countdown-left-col">

                <h2 className="countdown-main-title">
                  The Countdown to <br className="countdown-title-br" />
                  <span className="title-highlight-royal">Dental Show 2027</span> Begins
                </h2>

                <p className="countdown-sub-lead">
                  Mark your calendar for <strong>6th &amp; 7th February 2027</strong>. Connect with 250+ global brands,
                  discover next-gen CAD/CAM innovations, and network with 6,000+ peers at Chennai Trade Centre.
                </p>

                {/* Event Details 3-Column Horizontal Grid */}
                <div className="countdown-details-grid" role="region" aria-label="Event Schedule & Venue">
                  <div className="countdown-detail-card">
                    <div className="detail-card-icon" aria-hidden="true">
                      <Icon name="calendar" size={16} />
                    </div>
                    <div className="detail-card-info">
                      <strong className="detail-card-title">Feb 6 – 7, 2027</strong>
                      <span className="detail-card-sub">09:00 AM – 06:00 PM</span>
                    </div>
                  </div>

                  <div className="countdown-detail-card">
                    <div className="detail-card-icon" aria-hidden="true">
                      <Icon name="pin" size={16} />
                    </div>
                    <div className="detail-card-info">
                      <strong className="detail-card-title">Chennai Trade Centre</strong>
                      <span className="detail-card-sub">New Hall 2, 3 &amp; 3A</span>
                    </div>
                  </div>

                  <div className="countdown-detail-card countdown-detail-card--access">
                    <div className="detail-card-icon detail-card-icon--access" aria-hidden="true">
                      <Icon name="ticket" size={16} />
                    </div>
                    <div className="detail-card-info">
                      <strong className="detail-card-title">Free Visitor Access</strong>
                      <span className="detail-card-sub">For Dental Clinicians</span>
                    </div>
                  </div>
                </div>

                {/* Expo Floor Live Preview Banner with Action Buttons Overlaid on the Image Bottom */}
                <div className="countdown-bottom-visual" role="region" aria-label="Chennai Trade Centre Exhibition Hall & Registration">
                  <Image
                    src="/images/gallery-exhibition-1.jpg"
                    alt="Chennai Trade Centre Dental Exhibition Floor"
                    width={580}
                    height={265}
                    className="countdown-bottom-img"
                    priority
                  />
                  <div className="countdown-bottom-overlay">
                    <div className="bottom-overlay-pill">
                      <span className="live-pulse-dot" aria-hidden="true" />
                      <span>Chennai Trade Centre • Halls 2, 3 &amp; 3A</span>
                    </div>

                    {/* Dual Action Buttons Overlaid on Image Bottom */}
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
                </div>
              </div>

              {/* Column 2: Live Countdown Timer + Integrated Highlight Cards */}
              <div className="countdown-right-col">
                {/* Horizontal Live Countdown Dashboard Panel */}
                <div className="countdown-timer-panel">
                  <div className="countdown-timer-panel-header">
                    <div className="timer-header-left">
                      <span className="live-pulse-dot" aria-hidden="true" />
                      <span className="timer-header-title">Time Until Grand Opening</span>
                    </div>
                    <div className="timer-header-badge">
                      <Icon name="calendar" size={12} />
                      <span>Feb 6–7, 2027</span>
                    </div>
                  </div>
                  <div className="countdown-timer-wrapper">
                    <Countdown target="2027-02-06T09:00:00+05:30" />
                  </div>
                </div>

                {/* 3 Enriched Feature Highlight Cards */}
                <div className="countdown-features-stack">
                  <div className="countdown-feature-box countdown-feature-box--navy">
                    <div className="feature-box-top">
                      <div className="feature-box-icon icon-navy">
                        <Icon name="store" size={18} />
                      </div>
                      <span className="feature-box-badge badge-navy">EXHIBITION</span>
                      <div className="feature-box-stat stat-navy">
                        <span className="stat-dot dot-navy" />
                        <span>250+ Brands</span>
                      </div>
                    </div>
                    <div className="feature-box-body">
                      <h4>250+ Global Exhibitors</h4>
                    </div>
                    <div className="feature-box-pills">
                      <span className="feature-pill"><span className="pill-sparkle">✦</span> Live Clinical Demos</span>
                      <span className="feature-pill"><span className="pill-sparkle">✦</span> Exclusive Expo Offers</span>
                    </div>
                  </div>

                  <div className="countdown-feature-box countdown-feature-box--royal">
                    <div className="feature-box-top">
                      <div className="feature-box-icon icon-royal">
                        <Icon name="users" size={18} />
                      </div>
                      <span className="feature-box-badge badge-royal">NETWORKING</span>
                      <div className="feature-box-stat stat-royal">
                        <span className="stat-dot dot-royal" />
                        <span>6,000+ Peers</span>
                      </div>
                    </div>
                    <div className="feature-box-body">
                      <h4>6,000+ Trade Delegates</h4>
                    </div>
                    <div className="feature-box-pills">
                      <span className="feature-pill"><span className="pill-sparkle">✦</span> B2B Trade Exchange</span>
                      <span className="feature-pill"><span className="pill-sparkle">✦</span> Clinical Networking</span>
                    </div>
                  </div>

                  <div className="countdown-feature-box countdown-feature-box--cyan">
                    <div className="feature-box-top">
                      <div className="feature-box-icon icon-cyan">
                        <Icon name="sparkle" size={18} />
                      </div>
                      <span className="feature-box-badge badge-cyan">INFRASTRUCTURE</span>
                      <div className="feature-box-stat stat-cyan">
                        <span className="stat-dot dot-cyan" />
                        <span>10,000+ sq.m</span>
                      </div>
                    </div>
                    <div className="feature-box-body">
                      <h4>10,000+ sq.m Exhibition Floor</h4>
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
        </div>
      </section>

      {/* ============================================================
          SECTION 3.4: OUR LEGACY & TIMELINE (Light Blue Theme & Connection Thread)
          ============================================================ */}
      <section className="section section-legacy font-modern timeline-section-fullwidth" id="legacy">
        <div className="container-fluid timeline-container-fluid">
          <div className="timeline-header-compact text-left">
            <span className="section-eyebrow">OUR LEGACY &amp; TWO DECADE JOURNEY</span>
            <h2 className="section-main-title">
              Two Decades of Legacy. A Future Shaped by <span className="title-highlight-blue">Innovation</span>.
            </h2>
            <div className="title-zigzag" />
            <p className="section-desc">
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
          SECTION 3.5: DISCOVER. CONNECT. GROW. (Screenshot 2 Slider Layout)
          ============================================================ */}
      <section className="section section-benefits font-modern fold-benefits-staples" id="benefits">
        <div className="container">
          <AudienceBenefitsSlider />
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
          SECTION 3.8: REGISTRATION CTA (Full Section, Left-Aligned, Client Spec)
          ============================================================ */}
      <section className="cta-full-section font-modern" id="registration-cta">
        <div className="container">
          <div className="cta-full-content">
            <h2 className="cta-full-title">Be Part of the Next Chapter</h2>

            <div className="cta-full-roles">
              <p className="cta-role-item">
                <strong className="role-highlight role-highlight--visitor">For Visitors:</strong>{" "}
                Discover the dental industry and connect with the community.
              </p>
              <p className="cta-role-item">
                <strong className="role-highlight role-highlight--exhibitor">For Exhibitors:</strong>{" "}
                Showcase your business and build new connections.
              </p>
            </div>

            <div className="cta-full-actions">
              <Link
                href="/visitor-registration"
                className="cta-full-btn cta-full-btn--primary"
                id="cta-visitor-register-btn"
              >
                <span>Register as a Visitor</span>
                <span className="cta-btn-arrow" aria-hidden="true">→</span>
              </Link>

              <Link
                href="/exhibitor-registration"
                className="cta-full-btn cta-full-btn--secondary"
                id="cta-exhibitor-register-btn"
              >
                <span>Register as an Exhibitor</span>
                <span className="cta-btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
