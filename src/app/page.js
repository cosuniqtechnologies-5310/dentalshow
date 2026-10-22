import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import BeaverMascot, { SparkleStar } from "@/components/BeaverMascot";
import Icon from "@/components/Icon";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import AudienceBenefitsSlider from "@/components/AudienceBenefitsSlider";
import EventsBannersShowcase from "@/components/EventsBannersShowcase";
import GalleryHierarchicalPreview from "@/components/GalleryHierarchicalPreview";
import { site } from "@/data/site";
import { events } from "@/data/events";
import { galleryItems } from "@/data/gallery";

export default function HomePage() {
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
                      <span>A celebration of dentistry, innovation &amp; networking</span>
                    </span>
                  </div>

                  {/* Main Title — Single solid color */}
                  <h1 className="banner-title">
                    Dental Show 2027
                  </h1>

                  {/* Core Description Copy */}
                  <p className="hero-description">
                    Bringing dentists, dental students, manufacturers, traders and the wider dental
                    community together to discover innovations, experience new possibilities and
                    build meaningful connections.
                  </p>

                  <div className="hero-subquote-callout">
                    <p className="hero-subquote-text">
                      <strong className="hero-subquote-bold">See. Touch. Feel. Experience.</strong>
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="hero-cta-buttons">
                    <Link
                      href="/visitor-registration"
                      className="btn btn-hero-visitor"
                      id="hero-visitor-btn"
                    >
                      <span>Register as a visitor</span>
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/exhibitor-registration"
                      className="btn btn-hero-exhibitor"
                      id="hero-exhibitor-btn"
                    >
                      <span>Register as an exhibitor</span>
                    </Link>
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
                <div className="countdown-eyebrow-row">
                  <span className="countdown-accent-dash" aria-hidden="true" />
                  <span className="section-eyebrow countdown-eyebrow-text">YOUR NEXT DENTAL DISCOVERY AWAITS</span>
                </div>

                <h2 className="countdown-main-title">
                  For the dentist you are. <br className="countdown-title-br" />
                  For the dentist you aspire to be.
                </h2>

                <p className="countdown-sub-lead">
                  Whether you&apos;re advancing your practice or taking your first steps into dentistry, every new discovery opens the door to greater possibilities. Explore innovations, exchange ideas and connect with a community that shares your passion for dentistry.
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

                  <div className="countdown-detail-card countdown-detail-card--access">
                    <div className="detail-card-icon detail-card-icon--access" aria-hidden="true">
                      <Icon name="ticket" size={16} />
                    </div>
                    <div className="detail-card-info">
                      <strong className="detail-card-title">Free Visitor Access</strong>
                      <span className="detail-card-sub">For Dentists &amp; Dental Students</span>
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
                        <span>Visitor registration</span>
                        <span className="btn-arrow" aria-hidden="true">→</span>
                      </Link>
                      <Link
                        href="/exhibitor-registration"
                        className="btn btn-countdown-secondary"
                        id="countdown-exhibitor-btn"
                      >
                        <span>Exhibitor registration</span>
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
                        <span className="feature-stat-sparkle" aria-hidden="true">✦</span>
                        <span>Global dental innovations</span>
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
                        <span className="feature-stat-sparkle" aria-hidden="true">✦</span>
                        <span>Meaningful connections</span>
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
                        <span className="feature-stat-sparkle" aria-hidden="true">✦</span>
                        <span>A world of possibilities</span>
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
        <div className="container">
          <div className="timeline-header-compact text-left">
            <span className="section-eyebrow">OUR LEGACY &amp; TWO DECADE JOURNEY</span>
            <h2 className="section-main-title">
              Two decades of legacy. A future shaped by innovation.
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
        <AudienceBenefitsSlider />
      </section>

      {/* ============================================================
          SECTION 3.6: EVENTS (Reference Screenshot Panorama Layout)
          ============================================================ */}
      <section className="section section-events font-modern fold-events-boutiques" id="events-section">
        <div className="container">
          <EventsBannersShowcase />
        </div>
      </section>

      {/* ============================================================
          SECTION 3.7: GALLERY PREVIEW (Hierarchical Grid with Hover Reveals)
          ============================================================ */}
      <section className="section section-gallery font-modern fold-light-primary" id="gallery-preview">
        <div className="container">
          <div className="gallery-section-header text-left mb-40">
            <div className="gallery-eyebrow-wrapper">
              <span className="gallery-accent-dash" aria-hidden="true" />
              <span className="section-eyebrow">PHOTO &amp; VIDEO HIGHLIGHTS</span>
            </div>
            <h2 className="section-main-title gallery-title-styled">
              Gallery preview
            </h2>
            <p className="max-w-700 text-muted gallery-lead-desc">
              Moments That Bring Us Together. Revisit the people, clinical breakthroughs and celebrated memories that make every Dental Show special.
            </p>
          </div>

          <GalleryHierarchicalPreview />
        </div>
      </section>

      {/* ============================================================
          SECTION 3.8: REGISTRATION CTA (Mascot Left + Elevated Dual-Track Registration)
          ============================================================ */}
      <section className="cta-full-section font-modern" id="registration-cta">
        {/* Section-Wide Ambient Floating Glitters */}
        <div className="cta-section-ambient-glitters" aria-hidden="true">
          <SparkleStar className="sparkle-ambient-1" size={26} color="#ffffff" />
          <SparkleStar className="sparkle-ambient-2" size={20} color="#3BBF8F" />
          <SparkleStar className="sparkle-ambient-3" size={24} color="#069DBF" />
          <SparkleStar className="sparkle-ambient-4" size={18} color="#ffffff" />
          <SparkleStar className="sparkle-ambient-5" size={22} color="#3BBF8F" />
          <span className="glitter-dust dust-ambient-1" />
          <span className="glitter-dust dust-ambient-2" />
          <span className="glitter-dust dust-ambient-3" />
          <span className="glitter-dust dust-ambient-4" />
        </div>

        <div className="container">
          <div className="cta-section-grid">
            {/* Left Column: Friendly Beaver Mascot */}
            <div className="cta-mascot-column">
              <div className="cta-mascot-card">
                <div className="cta-mascot-glow-ring" aria-hidden="true" />
                <div className="mascot-ambient-aura" aria-hidden="true" />

                {/* MAGICAL GLITTERS & BACKGROUND SPARKLES (Home Banner Effect) */}
                <div className="mascot-magical-glitters cta-mascot-glitters" aria-hidden="true">
                  <SparkleStar className="sparkle-1" size={26} color="#ffffff" />
                  <SparkleStar className="sparkle-2" size={20} color="#3BBF8F" />
                  <SparkleStar className="sparkle-3" size={24} color="#069DBF" />
                  <SparkleStar className="sparkle-4" size={18} color="#ffffff" />
                  <SparkleStar className="sparkle-5" size={20} color="#3BBF8F" />
                  <SparkleStar className="sparkle-6" size={16} color="#069DBF" />
                  <SparkleStar className="sparkle-7" size={22} color="#ffffff" />
                  <SparkleStar className="sparkle-8" size={18} color="#3BBF8F" />

                  {/* Floating Radiant Glitter Dust */}
                  <span className="glitter-dust dust-1" />
                  <span className="glitter-dust dust-2" />
                  <span className="glitter-dust dust-3" />
                  <span className="glitter-dust dust-4" />
                  <span className="glitter-dust dust-5" />
                  <span className="glitter-dust dust-6" />
                </div>

                <div className="cta-mascot-img-wrap">
                  <Image
                    src="/images/dental-show-mascot-new.png"
                    alt="Dental Show 2027 Mascot - Dr. Beaver"
                    width={340}
                    height={480}
                    className="cta-mascot-img"
                    priority
                  />
                  <div className="cta-mascot-shadow" aria-hidden="true" />
                </div>
                {/* Floating Mascot Credential Badge */}
                <div className="cta-mascot-pill">
                  <span className="mascot-pill-dot" aria-hidden="true" />
                  <span className="mascot-pill-text">Official Dental Show Mascot</span>
                </div>
              </div>
            </div>

            {/* Right Column: Elevated Editorial Registration Content */}
            <div className="cta-full-content">
              {/* Eyebrow badge */}
              <div className="cta-eyebrow-chip">
                <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
                <span>FAST-TRACK DIGITAL ENTRY • CHENNAI 2027</span>
              </div>

              <h2 className="cta-full-title">
                Be part of the next chapter
              </h2>

              <p className="cta-lead-subtitle">
                Join 10,000+ clinicians, trade pioneers, and global manufacturers shaping modern dental care. Secure your access in seconds.
              </p>

              {/* Elevated Dual-Track Cards (For Visitors & For Exhibitors) */}
              <div className="cta-cards-duo">
                <div className="cta-track-card cta-track-card--visitor">
                  <div className="track-card-badge-row">
                    <span className="track-badge badge--visitor">FOR VISITORS</span>
                    <span className="track-perk-pill">Complimentary Pass</span>
                  </div>
                  <h4 className="track-card-heading">Clinicians, Students &amp; Traders</h4>
                  <p className="track-card-desc">
                    Discover cutting-edge equipment, attend scientific masterclasses, earn CPD credits, and connect with regional colleagues.
                  </p>
                  <Link
                    href="/visitor-registration"
                    className="cta-track-btn cta-track-btn--visitor"
                    id="cta-visitor-register-btn"
                  >
                    <span>Register as a Visitor</span>
                    <svg className="cta-track-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>

                <div className="cta-track-card cta-track-card--exhibitor">
                  <div className="track-card-badge-row">
                    <span className="track-badge badge--exhibitor">FOR EXHIBITORS</span>
                    <span className="track-perk-pill">Prime Hall Stalls</span>
                  </div>
                  <h4 className="track-card-heading">Manufacturers &amp; Brands</h4>
                  <p className="track-card-desc">
                    Showcase innovative CAD/CAM technologies, build B2B distribution pipelines, and engage directly with qualified buyers.
                  </p>
                  <Link
                    href="/exhibitor-registration"
                    className="cta-track-btn cta-track-btn--exhibitor"
                    id="cta-exhibitor-register-btn"
                  >
                    <span>Register as an Exhibitor</span>
                    <svg className="cta-track-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>

              {/* Trust & Accreditations Micro-Strip */}
              <div className="cta-trust-bar">
                <div className="cta-trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3BBF8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Instant E-Badge Issuance</span>
                </div>
                <div className="cta-trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3BBF8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>100% Free Delegate Access</span>
                </div>
                <div className="cta-trust-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3BBF8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>TNDTMA Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
