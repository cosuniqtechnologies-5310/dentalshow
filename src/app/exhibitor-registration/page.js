"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";
import BeaverMascot from "@/components/BeaverMascot";
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
    }, 1200);
  };

  const boothTypes = [
    {
      id: "shell",
      name: "Built-up Shell Scheme (9 sq.m / 18 sq.m)",
      desc: "Ready-to-move stall including octanorm walls, fascia name board, 3 spotlights, power socket, counter table, 2 chairs & waste bin.",
      idealFor: "Equipment suppliers, consumable brands, startup technology vendors.",
      popular: true,
    },
    {
      id: "bare",
      name: "Bare Space / Custom Fabrication (36+ sq.m)",
      desc: "Raw floor space for bespoke architectural fabrication and branded experience zones. Ideal for large equipment displays.",
      idealFor: "Major dental chair manufacturers, imaging corporations, implant multinationals.",
      popular: false,
    },
    {
      id: "island",
      name: "Premium 4-Side Open Island Booth (54+ sq.m)",
      desc: "Maximum 360° visibility at the central atrium of New Hall 2 & 3. Includes prime badge allotment and VIP networking access.",
      idealFor: "Title sponsors, global leaders & multi-category dental brands.",
      popular: false,
    },
  ];

  const exhibitorBenefits = [
    {
      icon: "users",
      title: "6,000+ Qualified Buyers",
      text: "Directly engage practicing dental surgeons, clinic owners, hospital department heads, and institutional purchase officers.",
    },
    {
      icon: "sparkle",
      title: "Chennai Trade Centre New Hall 2, 3 & 3A",
      text: "Exhibit in Tamil Nadu’s most advanced exhibition halls with column-free spans, heavy loading docks, and premier acoustics.",
    },
    {
      icon: "pin",
      title: "Strong B2B Dealer Network",
      text: "Meet regional dental dealers, distributors, and stockists looking to expand their product portfolios across South India.",
    },
    {
      icon: "star",
      title: "TNDTMA Association Backing",
      text: "Backed by the trusted authority of Tamil Nadu Dental Trade & Manufacturers Association, running since 2005.",
    },
    {
      icon: "calendar",
      title: "Live Product Launch Stages",
      text: "Opportunity to host scheduled product reveals and live clinical demonstrations on our central innovation stages.",
    },
    {
      icon: "check",
      title: "Complete Digital Visibility",
      text: "Listing in the official printed Show Directory, mobile app exhibitor catalog, and year-round website showcase.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Exhibitor Registration"
        crumbs={[{ label: "Exhibitor Registration" }]}
        subtitle="Showcase your brand at Dental Show 2027 • Chennai Trade Centre New Hall 2, 3 & 3A"
      />

      <section className="section">
        <div className="container">
          {/* External Platform Notice Card */}
          <div className="registration-redirect-card pop-in">
            <div className="redirect-card-header">
              <div className="portal-badge-pill exhibitor-pill">
                <span className="live-indicator" /> Official Exhibitor Booking Portal
              </div>
              <h2 className="redirect-card-title">Reserve Your Stall at Dental Show 2027</h2>
              <p className="redirect-card-desc">
                Exhibitor stall allocation, interactive 3D floor plan selection, and contract management
                are managed via our secure exhibitor portal.
              </p>
            </div>

            {/* Booth Types Selector */}
            <div className="stall-options-container">
              <h4 className="stall-options-heading">Select Desired Stall Category:</h4>
              <div className="stall-selection-grid">
                {boothTypes.map((b) => {
                  const isSelected = selectedBooth === b.id;
                  return (
                    <div
                      key={b.id}
                      className={`stall-card ${isSelected ? "is-selected" : ""}`}
                      onClick={() => setSelectedBooth(b.id)}
                    >
                      {b.popular && <span className="stall-popular-badge">Most Popular</span>}
                      <div className="stall-header">
                        <span className={`radio-dot ${isSelected ? "active" : ""}`} />
                        <h4 className="stall-title">{b.name}</h4>
                      </div>
                      <p className="stall-desc">{b.desc}</p>
                      <div className="stall-ideal">
                        <strong>Best for:</strong> {b.idealFor}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Redirect Call to Action */}
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
                <Icon name="check" size={14} /> You will be redirected to{" "}
                <code>registration.dentalshow.in/exhibitor</code> to select available stall numbers on
                the live interactive hall map.
              </p>
            </div>
          </div>

          {/* Why Exhibit */}
          <div className="mt-lg">
            <SectionTitle
              eyebrow="WHY EXHIBIT AT DENTAL SHOW 2027"
              title="Expand Your Market Reach in South India"
              subtitle="Connect with active buyers and high-volume dental decision makers across Tamil Nadu and neighboring states."
            />

            <div className="grid grid--3 mt-md">
              {exhibitorBenefits.map((b, idx) => (
                <div key={b.title} className="benefit-card pop-in" style={{ animationDelay: `${idx * 60}ms` }}>
                  <div className="benefit-card__icon">
                    <Icon name={b.icon} size={24} />
                  </div>
                  <h3 className="benefit-card__title">{b.title}</h3>
                  <p className="benefit-card__text">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Highlights: Chennai Trade Centre New Halls */}
          <div className="mt-lg ctc-venue-card">
            <div className="ctc-venue-flex">
              <div className="ctc-venue-info">
                <span className="section-eyebrow text-cyan">WORLD-CLASS INFRASTRUCTURE</span>
                <h3 className="ctc-title">Chennai Trade Centre New Hall 2, 3 & 3A</h3>
                <p>
                  Built to international exhibition specifications, Chennai Trade Centre’s newly
                  inaugurated complex offers seamless heavy equipment access, high-capacity electrical
                  distribution, dedicated food courts, and wide aisles ensuring maximum visitor flow
                  through every row.
                </p>
                <ul className="check-list">
                  <li>Over 10,000 sq. meters total contiguous air-conditioned exhibition space</li>
                  <li>Column-free layouts ensuring unobstructed sightlines for brand visibility</li>
                  <li>12-meter ceiling height supporting double-decker pavilions & truss branding</li>
                  <li>Ample dedicated parking for over 2,000 attendee and exhibitor vehicles</li>
                </ul>
              </div>
              <div className="ctc-venue-mascot">
                <BeaverMascot size={260} />
              </div>
            </div>
          </div>

          {/* Direct Contact for Exhibitors */}
          <div className="mt-lg exhibitor-contact-box">
            <h3 className="exhibitor-contact-title">Need Custom Pavilion Sizing or Sponsorship?</h3>
            <p>
              Speak directly with our TNDTMA Stall Allotment Committee for premium island positions,
              lanyard sponsorships, and registration kit branding.
            </p>
            <div className="exhibitor-contact-grid mt-md">
              <div className="ex-contact-item">
                <Icon name="mail" size={20} />
                <div>
                  <strong>Exhibitor Desk:</strong>
                  <a href={`mailto:${site.organizerEmail}`}>{site.organizerEmail}</a>
                </div>
              </div>
              <div className="ex-contact-item">
                <Icon name="phone" size={20} />
                <div>
                  <strong>Stall Hotline:</strong>
                  <a href={`tel:${site.mobilePhone}`}>{site.mobilePhone}</a>
                </div>
              </div>
              <div className="ex-contact-item">
                <Icon name="pin" size={20} />
                <div>
                  <strong>Association HQ:</strong>
                  <span>TNDTMA Secretariat, Chennai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
