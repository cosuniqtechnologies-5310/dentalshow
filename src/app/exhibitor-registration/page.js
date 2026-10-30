"use client";

import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";
import { SparkleStar } from "@/components/BeaverMascot";
import { site } from "@/data/site";

export default function ExhibitorRegistrationPage() {
  const boothTypes = [
    {
      id: "shell",
      theme: "blue",
      name: "Built-up Shell Scheme",
      size: "9 sq.m / 18 sq.m",
      desc: "Ready-to-move stall including octanorm partition walls, fascia name board, 3 spotlights, power socket, counter table, 2 chairs & waste bin.",
      idealFor: "Equipment suppliers, consumable brands, startup technology vendors.",
      popular: true,
      perks: [
        "Pre-assembled Octanorm Structure",
        "Fascia Name Board & 3 Spotlights",
        "Counter Table, 2 Chairs & Power Feed",
      ],
    },
    {
      id: "bare",
      theme: "green",
      name: "Bare Space / Custom Fabrication",
      size: "36+ sq.m",
      desc: "Raw floor space for bespoke architectural fabrication and custom branded experience zones. Ideal for large equipment displays.",
      idealFor: "Major dental chair manufacturers, imaging corporations, implant multinationals.",
      popular: false,
      perks: [
        "Complete Architectural Freedom",
        "Heavy Equipment Flooring Capacity",
        "High-Wattage 3-Phase Power Feed",
      ],
    },
    {
      id: "island",
      theme: "navy",
      name: "Premium 4-Side Open Island Booth",
      size: "54+ sq.m",
      desc: "Maximum 360° visibility at the central atrium of New Hall 2 & 3. Includes prime badge allotment and VIP networking access.",
      idealFor: "Title sponsors, global leaders & multi-category dental brands.",
      popular: false,
      perks: [
        "Full 360° Aisle Exposure & Visibility",
        "Central Prime Hall Positioning",
        "VIP Lounge Passes & 10 Exhibitor Badges",
      ],
    },
  ];

  const exhibitorBenefits = [
    {
      icon: "users",
      tag: "BUYER FOOTFALL",
      theme: "blue",
      title: "10,000+ Qualified Buyers",
      text: "Directly engage practicing dental surgeons, clinic owners, hospital department heads, and institutional purchase officers.",
    },
    {
      icon: "pin",
      tag: "WORLD-CLASS VENUE",
      theme: "green",
      title: "Chennai Trade Centre New Hall 2, 3 & 3A",
      text: "Exhibit in Tamil Nadu’s most advanced exhibition halls with column-free spans, heavy loading docks, and premier acoustics.",
    },
    {
      icon: "star",
      tag: "B2B COMMERCE",
      theme: "sky",
      title: "Strong B2B Dealer Network",
      text: "Meet regional dental dealers, distributors, and stockists looking to expand their product portfolios across South India.",
    },
    {
      icon: "shield",
      tag: "20-YEAR TRUST",
      theme: "mint",
      title: "TNDTMA Association Backing",
      text: "Backed by the trusted authority of Tamil Nadu Dental Trade & Manufacturers Association, running landmark shows since 2005.",
    },
    {
      icon: "sparkle",
      tag: "LIVE SPOTLIGHT",
      theme: "amber",
      title: "Live Product Launch Stages",
      text: "Opportunity to host scheduled product reveals and live clinical demonstrations on our central innovation stages.",
    },
    {
      icon: "check",
      tag: "OMNICHANNEL REACH",
      theme: "purple",
      title: "Complete Digital Visibility",
      text: "Listing in the official printed Show Directory, mobile app exhibitor catalog, and year-round website showcase.",
    },
  ];

  const venueFeatures = [
    {
      icon: "cube",
      tag: "TOTAL EXPANSION",
      theme: "blue",
      title: "10,000+ sq.m Contiguous AC Hall",
      text: "State-of-the-art climate-controlled exhibition space spanning interconnected New Halls 2, 3 & 3A with uninterrupted footfall paths.",
    },
    {
      icon: "scan",
      tag: "PRIME VISIBILITY",
      theme: "green",
      title: "Column-Free Modern Architecture",
      text: "Unobstructed 360° sightlines across all aisles ensure every booth position receives maximum visibility from attending clinicians.",
    },
    {
      icon: "arrowUpRight",
      tag: "GRAND BRANDING",
      theme: "sky",
      title: "12-Meter Ceiling Clearance",
      text: "High ceiling heights accommodate custom double-decker pavilions, overhead hanging truss banners, and monumental lighting arrays.",
    },
    {
      icon: "pin",
      tag: "SEAMLESS ACCESS",
      theme: "mint",
      title: "Direct Freight Bays & 2,000+ Parking",
      text: "Ground-level drive-in loading bays for heavy dental chairs and imaging equipment, backed by multi-level parking for over 2,000 vehicles.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Exhibitor Registration"
        crumbs={[{ label: "Exhibitor Registration" }]}
        subtitle="Dental Show 2027 • Chennai Trade Centre New Hall 2, 3 & 3A • 6th & 7th February 2027"
      />

      {/* 1. Official Exhibitor Booking Iframe Form (Desktop & Mobile Optimized) */}
      <section className="section section-exhibitor-portal font-modern fold-white" id="stall-portal">
        <div className="container">
          <div className="registration-iframe-card pop-in">
            <div className="iframe-card-header">
              <div className="iframe-header-left">
                <div className="portal-badge-pill exhibitor-pill">
                  <span className="live-indicator" aria-hidden="true" />
                  <span>OFFICIAL EXHIBITOR PORTAL</span>
                </div>
                <h2 className="iframe-card-title">Reserve Your Stall at Dental Show 2027</h2>
                <p className="iframe-card-desc">
                  Complete the stall booking enquiry form below. The TNDTMA Secretariat will confirm booth availability and provide layout coordination.
                </p>
              </div>
              <div className="iframe-header-actions">
                <a
                  href="https://organiser.eventgrid.softwaller.in/f/exh27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-iframe-fallback btn-iframe-fallback--exhibitor"
                  title="Open full booking form in a new tab"
                >
                  <span>Open in New Tab</span>
                  <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </div>

            {/* Quick Strip */}
            <div className="iframe-pass-quick-strip">
              <div className="quick-strip-badge">
                <span className="quick-strip-dot blue" />
                <span><strong>Chennai Trade Centre:</strong> New Hall 2, 3 &amp; 3A · 10,000+ sq.m Exhibition Area</span>
              </div>
              <div className="quick-strip-badge">
                <span className="quick-strip-dot green" />
                <span><strong>B2B Footfall:</strong> 10,000+ Dental Surgeons, Dealers &amp; Clinical Decision Makers</span>
              </div>
            </div>

            {/* Responsive Iframe Container */}
            <div className="iframe-embed-wrapper">
              <iframe
                src="https://organiser.eventgrid.softwaller.in/f/exh27"
                width="100%"
                height="900"
                style={{ border: 0 }}
                title="Registration form"
                loading="lazy"
                className="registration-form-iframe"
              />
            </div>

            {/* Trust & Assistance Strip */}
            <div className="iframe-card-footer">
              <div className="iframe-footer-col">
                <Icon name="shield" size={16} />
                <span>Official TNDTMA Organiser Secretariat · 256-Bit SSL Encrypted</span>
              </div>
              <div className="iframe-footer-col">
                <Icon name="cube" size={16} />
                <span>Direct Stall Allotment &amp; Custom Pavilion Enquiries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Available Stall Categories & Specifications */}
      <section className="section section-stall-types font-modern fold-light" id="stall-categories">
        <div className="container">
          <SectionTitle
            eyebrow="EXHIBITION FORMATS"
            title="Available Stall Categories &amp; Specifications"
            subtitle="Choose the booth structure that best showcases your equipment, technology, and clinical innovations."
          />

          <div className="stall-selection-grid stall-selection-grid--3col mt-md">
            {boothTypes.map((b) => (
              <div key={b.id} className={`stall-card stall-card--${b.theme} stall-card--static`}>
                {b.popular && (
                  <span className={`stall-popular-badge stall-badge--${b.theme}`}>
                    Most Popular
                  </span>
                )}
                <div className="stall-header">
                  <div>
                    <h4 className={`stall-title stall-title--${b.theme}`}>{b.name}</h4>
                    <span className={`stall-size-tag tag--${b.theme}`}>{b.size}</span>
                  </div>
                </div>

                <p className="stall-desc">{b.desc}</p>

                <div className="stall-perks-list">
                  {b.perks.map((perk, i) => (
                    <div key={i} className="stall-perk-item">
                      <span className={`stall-check-icon check--${b.theme}`}>✓</span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="stall-ideal">
                  <strong>Best for:</strong> {b.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Exhibit at Dental Show (GREEN COLOR BG SECTION) */}
      <section className="section section-exhibitor-benefits font-modern fold-green" id="why-exhibit">
        <div className="container">
          <SectionTitle
            eyebrow="WHY EXHIBIT AT DENTAL SHOW 2027"
            title="Expand Your Market Reach in South India"
            subtitle="Connect with active buyers and high-volume dental decision makers across Tamil Nadu and neighboring states."
          />

          <div className="visitor-benefits-grid mt-md">
            {exhibitorBenefits.map((b) => (
              <div key={b.title} className="visitor-benefit-card">
                <div className={`benefit-icon-tile tile-theme-${b.theme}`}>
                  <Icon name={b.icon} size={22} />
                </div>
                <span className={`benefit-tag tag-theme-${b.theme}`}>{b.tag}</span>
                <h3 className="benefit-card-title">{b.title}</h3>
                <p className="benefit-card-text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Venue Infrastructure: Chennai Trade Centre New Halls (BLUE COLOR BG SECTION) */}
      <section className="section section-exhibitor-venue font-modern fold-blue" id="venue-infrastructure">
        <div className="container">
          <SectionTitle
            eyebrow="WORLD-CLASS INFRASTRUCTURE"
            title="Chennai Trade Centre New Hall 2, 3 & 3A"
            subtitle="Built to international exhibition specifications ensuring maximum exhibitor convenience and visitor flow."
          />

          <div className="venue-features-grid mt-md">
            {venueFeatures.map((f) => (
              <div key={f.title} className="venue-feature-card">
                <div className={`venue-feature-icon tile-theme-${f.theme}`}>
                  <Icon name={f.icon} size={22} />
                </div>
                <span className={`benefit-tag tag-theme-${f.theme}`}>{f.tag}</span>
                <h3 className="benefit-card-title">{f.title}</h3>
                <p className="benefit-card-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Exhibitor Mascot Helpdesk & Stall Allotment Committee (FULL SCREEN SECTION) */}
      <section className="cta-full-section font-modern section-helpdesk-fullscreen" id="exhibitor-help-desk">
        {/* Ambient floating glitters */}
        <div className="cta-section-ambient-glitters" aria-hidden="true">
          <SparkleStar className="sparkle-ambient-1" size={26} color="#ffffff" />
          <SparkleStar className="sparkle-ambient-2" size={20} color="#3BBF8F" />
          <SparkleStar className="sparkle-ambient-3" size={24} color="#069DBF" />
          <SparkleStar className="sparkle-ambient-4" size={18} color="#ffffff" />
          <span className="glitter-dust dust-ambient-1" />
          <span className="glitter-dust dust-ambient-2" />
        </div>

        <div className="container">
          <div className="helpdesk-fullscreen-grid">
            {/* Left Column: Official Mascot */}
            <div className="helpdesk-mascot-col">
              <div className="helpdesk-mascot-wrap">
                <div className="mascot-ambient-aura" aria-hidden="true" />
                <Image
                  src="/images/dental-show-mascot-new.png"
                  alt="Dental Show Mascot - Mr. Dentalshow"
                  width={280}
                  height={396}
                  className="helpdesk-mascot-img"
                  priority
                />
                <div className="helpdesk-mascot-pill">
                  <span className="live-pulse-dot" aria-hidden="true" />
                  <span>Official Mascot · Mr. Dentalshow</span>
                </div>
              </div>
            </div>

            {/* Right Column: Exhibitor Desk Content */}
            <div className="helpdesk-content-col">
              <div className="helpdesk-kicker-pill">
                <span className="live-pulse-dot" aria-hidden="true" />
                <span>OFFICIAL EXHIBITOR STALL ALLOTMENT COMMITTEE</span>
              </div>
              <h2 className="helpdesk-main-title">
                Need Custom Pavilion Sizing or Sponsorship?
              </h2>
              <p className="helpdesk-main-desc">
                Speak directly with our TNDTMA Stall Allotment Committee for premium island positions,
                corner stalls, lanyard sponsorships, and customized floor branding.
              </p>
              <div className="helpdesk-actions-row">
                <a href={`mailto:${site.organizerEmail}`} className="helpdesk-action-pill">
                  <Icon name="mail" size={16} /> <span>{site.organizerEmail}</span>
                </a>
                <a href={`tel:${site.mobilePhone}`} className="helpdesk-action-pill">
                  <Icon name="phone" size={16} /> <span>{site.mobilePhone}</span>
                </a>
                <a
                  href="https://wa.me/919840012027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="helpdesk-action-pill helpdesk-action-pill--whatsapp"
                >
                  <span>Chat on WhatsApp</span>
                  <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
