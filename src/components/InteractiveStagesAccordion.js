"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const stagesData = [
  {
    num: "01",
    pillarSubtitle: "Clinicians & Practices",
    eraName: "PRACTICE EXCELLENCE",
    title: "Private Practitioners & Clinic Owners",
    tagline: "CHAIRSIDE INNOVATION & PRACTICE GROWTH",
    story:
      "Empowering solo and group dental practices across Tamil Nadu with direct-from-manufacturer access to high-precision equipment, intraoral digital scanners, hands-on clinical training, and special expo purchase subsidies.",
    tags: [
      "Pillar 01 of 05",
      "Chairside CAD/CAM",
      "Operatory Upgrades",
      "Direct Manufacturer Warranties",
      "Special Expo Offers",
    ],
    previewImage: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m36s862.png",
    previewCaption: "Over 4,500 active dental clinicians attend annually to upgrade their operatory capabilities.",
    accentColor: "#023E73",
  },
  {
    num: "02",
    pillarSubtitle: "Dental Laboratories",
    eraName: "DIGITAL PROSTHETICS",
    title: "Dental Laboratories & Technicians",
    tagline: "DIGITAL PROSTHETICS & PRECISION LAB TECH",
    story:
      "Bridging commercial technicians with state-of-the-art milling systems, sintered ceramics, and CAD design software, ensuring dental labs deliver world-class aesthetic and functional restorations.",
    tags: [
      "Pillar 02 of 05",
      "5-Axis Zirconia Milling",
      "3D Resin Printing",
      "Biocompatible Ceramics",
      "Analog-to-Digital Shift",
    ],
    previewImage: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m18s269.png",
    previewCaption: "Showcasing next-generation 5-axis dry and wet milling machines alongside biocompatible resins.",
    accentColor: "#0477BF",
  },
  {
    num: "03",
    pillarSubtitle: "Postgraduates & Students",
    eraName: "ACADEMIC LAUNCHPAD",
    title: "Postgraduates & Aspiring Dentists",
    tagline: "ACADEMIC EXCELLENCE & CAREER LAUNCHPAD",
    story:
      "Providing student-friendly registration packages, live clinical masterclasses with renowned faculty members, and realistic consultation guidance for setting up new clinical operatory practices.",
    tags: [
      "Pillar 03 of 05",
      "BDS & MDS Workshops",
      "Hands-on Simulators",
      "Senior Mentorship",
      "Startup Clinic Advisory",
    ],
    previewImage: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m43s621.png",
    previewCaption: "Nurturing the future of South Indian dentistry with subsidized educational certifications.",
    accentColor: "#069DBF",
  },
  {
    num: "04",
    pillarSubtitle: "Dealers & Exporters",
    eraName: "ETHICAL COMMERCE",
    title: "Dental Trade Dealers & Distributors",
    tagline: "ETHICAL COMMERCE & STATEWIDE DISTRIBUTION",
    story:
      "Fostering transparent partnerships between international manufacturers and regional dealers across all 38 districts of Tamil Nadu, backed by structured regulatory oversight and genuine spare parts channels.",
    tags: [
      "Pillar 04 of 05",
      "Authorized Dealerships",
      "Supply Chain Integrity",
      "TNDTMA Governance",
      "B2B Matchmaking",
    ],
    previewImage: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m51s996.png",
    previewCaption: "Connecting 250+ global brands with trusted regional distributors and service engineers.",
    accentColor: "#00A86B",
  },
  {
    num: "05",
    pillarSubtitle: "Dental Colleges & Academia",
    eraName: "RESEARCH SYNERGY",
    title: "Academic Institutions & Research Bodies",
    tagline: "FACULTY COLLABORATION & RESEARCH SYNERGY",
    story:
      "Partnering with prestigious dental universities across South India to modernize phantom head labs, introduce digital dentistry modules, and sponsor clinical paper presentations.",
    tags: [
      "Pillar 05 of 05",
      "Phantom Head Modernization",
      "Institutional Procurement",
      "Research Paper Grants",
      "Faculty Development",
    ],
    previewImage: "/images/dental-show-images/vlcsnap-2026-10-29-00h41m12s751.png",
    previewCaption: "Facilitating institutional memorandums and technology transfer to university dental faculties.",
    accentColor: "#008756",
  },
];

export default function InteractiveStagesAccordion() {
  const [activeStage, setActiveStage] = useState(1); // default stage 02 active as in Screenshot 2

  return (
    <div className="stages-accordion-wrapper">
      {/* Header section matching Screenshot 2 */}
      <div className="stages-accordion-header">
        <div className="stages-accordion-header-left">
          <div className="stages-eyebrow-row">
            <span className="stages-accent-dash" />
            <span className="stages-eyebrow-text">WHO WE EMPOWER · COMMUNITY PILLARS</span>
          </div>
          <h2 className="stages-main-title">
            Our Stakeholders <span className="stages-title-sep">|</span> Who We Serve
            <span className="stages-title-sparkle">✦</span>
          </h2>
        </div>

        <div className="stages-accordion-header-right">
          <p className="stages-header-desc">
            Dental Show and TNDTMA unite every sector of South India&apos;s dental ecosystem.
            Select any stakeholder group below to explore dedicated initiatives, technologies,
            and clinical opportunities.
          </p>
        </div>
      </div>

      {/* Accordion List matching Screenshot 2 */}
      <div className="stages-accordion-list" role="tablist" aria-label="Community Pillars">
        {stagesData.map((stage, idx) => {
          const isActive = idx === activeStage;

          if (isActive) {
            return (
              <div
                key={stage.title}
                className="stage-card-active"
                role="region"
                aria-label={`${stage.title} (${stage.pillarSubtitle})`}
              >
                {/* Active Top Row: Number, Title, and Circular Arrow Button */}
                <div className="stage-active-topbar">
                  <div className="stage-active-title-group">
                    <span className="stage-active-num">{stage.num}.</span>
                    <h3 className="stage-active-heading" style={{ color: "#ffffff" }}>
                      {stage.title} <span className="stage-active-year">({stage.pillarSubtitle})</span>
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="stage-active-arrow-btn"
                    onClick={() => setActiveStage((idx + 1) % stagesData.length)}
                    aria-label="Next stakeholder pillar"
                    title="Next stakeholder pillar"
                  >
                    <span>↗</span>
                  </button>
                </div>

                {/* Tag Pills matching Screenshot 2 */}
                <div className="stage-active-tags-row">
                  {stage.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="stage-active-tag-pill" style={{ color: "#ffffff" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Narrative Text */}
                <p className="stage-active-story" style={{ color: "rgba(255, 255, 255, 0.95)" }}>{stage.story}</p>

                {/* Visual Preview Box embedded inside active card matching Screenshot 2 */}
                <div className="stage-active-preview-card">
                  <div className="stage-preview-img-wrap">
                    <Image
                      src={stage.previewImage}
                      alt={stage.title}
                      width={700}
                      height={280}
                      className="stage-preview-img"
                    />
                    <div className="stage-preview-gradient" />
                  </div>
                  <div className="stage-preview-caption-bar">
                    <span className="stage-preview-icon">✦</span>
                    <span className="stage-preview-text">{stage.previewCaption}</span>
                    <span className="stage-preview-badge">{stage.eraName}</span>
                  </div>
                </div>
              </div>
            );
          }

          // Inactive Row matching Screenshot 2
          return (
            <button
              key={stage.title}
              type="button"
              className="stage-row-inactive"
              onClick={() => setActiveStage(idx)}
              role="tab"
              aria-selected="false"
              title={`View ${stage.title}: ${stage.pillarSubtitle}`}
            >
              <div className="stage-inactive-left">
                <span className="stage-inactive-num">{stage.num}.</span>
                <span className="stage-inactive-title">
                  {stage.title} &mdash; <strong>{stage.pillarSubtitle}</strong>
                </span>
              </div>

              <div className="stage-inactive-arrow-btn" aria-hidden="true">
                <span>↗</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Action matching Screenshot 2 */}
      <div className="stages-accordion-bottom">
        <Link href="/events" className="stages-view-all-btn">
          <span>View All Events &amp; Programme</span>
          <span className="stages-btn-circle-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
