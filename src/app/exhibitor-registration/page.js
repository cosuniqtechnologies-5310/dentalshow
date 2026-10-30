"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";
import { SparkleStar } from "@/components/BeaverMascot";
import { site } from "@/data/site";

export default function ExhibitorRegistrationPage() {
  const [redirecting, setRedirecting] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState("shell");

  const handleExternalRedirect = (e) => {
    e.preventDefault();
    setRedirecting(true);
    setTimeout(() => {
      window.open("https://registration.dentalshow.in/exhibitor", "_blank", "noopener,noreferrer");
      setRedirecting(false);
    }, 1000);
  };

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

      {/* 1. Stall Category Selection & External Booking Portal (WHITE SECTION) */}
      <section className="section section-exhibitor-portal font-modern fold-white" id="stall-portal">
        <div className="container">
          <div className="registration-redirect-card pop-in">
            <div className="redirect-card-header">
              <div className="portal-badge-pill exhibitor-pill">
                <span className="live-indicator" aria-hidden="true" />
                <span>OFFICIAL EXHIBITOR BOOKING PORTAL</span>
              </div>
              <h2 className="redirect-card-title">Reserve your stall at Dental Show 2027</h2>
              <p className="redirect-card-desc">
                Exhibitor stall allocation, interactive 3D floor plan selection, and contract management
                are managed via our secure exhibitor portal.
              </p>
            </div>

            {/* Booth Types Selector (3 Themed Cards: Blue, Green, Navy) */}
            <div className="stall-options-container">
              <h3 className="stall-options-heading">Select Desired Stall Category:</h3>
              <div className="stall-selection-grid stall-selection-grid--3col">
                {boothTypes.map((b) => {
                  const isSelected = selectedBooth === b.id;
                  return (
                    <div
                      key={b.id}
                      className={`stall-card stall-card--${b.theme} ${isSelected ? "is-selected" : ""}`}
                      onClick={() => setSelectedBooth(b.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setSelectedBooth(b.id);
                      }}
                    >
                      {b.popular && (
                        <span className={`stall-popular-badge stall-badge--${b.theme}`}>
                          Most Popular
                        </span>
                      )}
                      <div className="stall-header">
                        <span className={`radio-dot radio-dot--${b.theme} ${isSelected ? "active" : ""}`} />
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
                  );
                })}
              </div>
            </div>

            {/* Redirect Action CTA */}
            <div className="redirect-action-box mt-md">
              <a
                href={site.registrationUrls.exhibitorExternal}
                onClick={handleExternalRedirect}
                className="btn btn--primary btn-large-redirect"
                id="btn-exhibitor-redirect"
              >
                {redirecting ? (
                  <span>Accessing Floorplan Portal...</span>
                ) : (
                  <>
                    <span>Proceed to External Exhibitor Booking Portal</span>
                    <Icon name="arrow" size={20} />
                  </>
                )}
              </a>

              <p className="redirect-notice-small">
                <Icon name="shield" size={15} />
                <span>
                  100% Secure SSL Redirect to <code>registration.dentalshow.in/exhibitor</code> · Select available stall numbers on the live interactive floor map.
                </span>
              </p>
            </div>
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
