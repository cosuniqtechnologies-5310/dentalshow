"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

const partnersData = [
  {
    id: "nexgen",
    name: "NexGen Dental",
    category: "Dental Implants & Prosthetics",
    filterCategory: "Implants & Surgery",
    type: "Platinum Partner",
    tierBadge: "★ PLATINUM",
    tierTheme: "tier--platinum",
    icon: "implant",
    podColor: "#023E73",
    podBg: "rgba(2, 62, 115, 0.08)",
    podBorder: "rgba(2, 62, 115, 0.22)",
    desc: "Precision titanium implant fixtures, conical hex connections & guided surgery kits.",
    stall: "Hall 2 · Stall P-14",
    origin: "Germany · India",
    established: "Est. 2008",
  },
  {
    id: "orthova",
    name: "Orthova Systems",
    category: "Orthodontic & Clear Aligners",
    filterCategory: "Orthodontics & Materials",
    type: "Technology Partner",
    tierBadge: "⚙ TECHNOLOGY",
    tierTheme: "tier--tech",
    icon: "aligner",
    podColor: "#00A86B",
    podBg: "rgba(0, 168, 107, 0.08)",
    podBorder: "rgba(0, 168, 107, 0.24)",
    desc: "Custom biomechanic clear aligner suites, thermoformed polymers & virtual staging.",
    stall: "Hall 3 · Stall O-08",
    origin: "USA · India",
    established: "Est. 2014",
  },
  {
    id: "smilelab",
    name: "SmileLab India",
    category: "CAD/CAM Digital Solutions",
    filterCategory: "CAD/CAM & Digital",
    type: "Clinical Partner",
    tierBadge: "✚ CLINICAL",
    tierTheme: "tier--clinical",
    icon: "cpu",
    podColor: "#0477BF",
    podBg: "rgba(4, 119, 191, 0.08)",
    podBorder: "rgba(4, 119, 191, 0.22)",
    desc: "Automated 5-axis zirconia dry milling, hybrid restorative resins & open STL cloud workflows.",
    stall: "Hall 2 · Stall S-22",
    origin: "National Leader",
    established: "Est. 2011",
  },
  {
    id: "implantis",
    name: "Implantis Global",
    category: "Surgical & Bio-Materials",
    filterCategory: "Implants & Surgery",
    type: "Premier Partner",
    tierBadge: "✦ PREMIER",
    tierTheme: "tier--premier",
    icon: "shield",
    podColor: "#011E3D",
    podBg: "rgba(1, 30, 61, 0.08)",
    podBorder: "rgba(1, 30, 61, 0.22)",
    desc: "Synthetic bone graft matrices, resorbable collagen barriers & micro-surgical kits.",
    stall: "Hall 2 · Stall I-05",
    origin: "Switzerland · India",
    established: "Est. 2004",
  },
  {
    id: "dentacloud",
    name: "DentaCloud",
    category: "AI & Practice Management",
    filterCategory: "Imaging & AI",
    type: "Digital Partner",
    tierBadge: "☁ DIGITAL",
    tierTheme: "tier--digital",
    icon: "cloud",
    podColor: "#4F46E5",
    podBg: "rgba(79, 70, 229, 0.08)",
    podBorder: "rgba(79, 70, 229, 0.22)",
    desc: "Intelligent clinical charts, radiographic AI caries detection & automated practice billing.",
    stall: "Hall 3A · Stall D-19",
    origin: "Global Cloud",
    established: "Est. 2019",
  },
  {
    id: "luminaray",
    name: "LuminaRay Imaging",
    category: "3D CBCT & Diagnostic Systems",
    filterCategory: "Imaging & AI",
    type: "Imaging Partner",
    tierBadge: "◎ IMAGING",
    tierTheme: "tier--imaging",
    icon: "scan",
    podColor: "#069DBF",
    podBg: "rgba(6, 157, 191, 0.08)",
    podBorder: "rgba(6, 157, 191, 0.24)",
    desc: "Ultra-low-dose cephalometric 3D CBCT scanners with panoramic reconstruction algorithms.",
    stall: "Hall 2 · Stall L-31",
    origin: "Japan · India",
    established: "Est. 2010",
  },
  {
    id: "biocrown",
    name: "BioCrown Ceramics",
    category: "Restorative Aesthetic Ceramics",
    filterCategory: "Orthodontics & Materials",
    type: "Materials Partner",
    tierBadge: "💎 MATERIALS",
    tierTheme: "tier--materials",
    icon: "crown",
    podColor: "#D97706",
    podBg: "rgba(217, 119, 6, 0.08)",
    podBorder: "rgba(217, 119, 6, 0.22)",
    desc: "Multilayered aesthetic zirconia disks, lithium disilicate blocks & high-polish stain kits.",
    stall: "Hall 3 · Stall B-12",
    origin: "Liechtenstein · India",
    established: "Est. 2013",
  },
  {
    id: "scanpro",
    name: "ScanPro 3D",
    category: "Intraoral Scanning & Milling",
    filterCategory: "CAD/CAM & Digital",
    type: "Equipment Partner",
    tierBadge: "⚡ EQUIPMENT",
    tierTheme: "tier--equip",
    icon: "cube",
    podColor: "#10B981",
    podBg: "rgba(16, 185, 129, 0.08)",
    podBorder: "rgba(16, 185, 129, 0.24)",
    desc: "High-speed powderless intraoral 3D color scanners with AI anti-fog & live margin tracing.",
    stall: "Hall 2 · Stall S-44",
    origin: "South Korea · India",
    established: "Est. 2016",
  },
];

const filterCategories = [
  { label: "All Collaborators", value: "All", count: 8 },
  { label: "Implants & Surgery", value: "Implants & Surgery", count: 2 },
  { label: "CAD/CAM & Digital", value: "CAD/CAM & Digital", count: 2 },
  { label: "Imaging & AI", value: "Imaging & AI", count: 2 },
  { label: "Orthodontics & Materials", value: "Orthodontics & Materials", count: 2 },
];

export default function TrustedPartnersShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPartners =
    activeFilter === "All"
      ? partnersData
      : partnersData.filter((p) => p.filterCategory === activeFilter);

  return (
    <div className="partners-showcase-wrap">
      {/* Dynamic Segmented Filter Bar */}
      <div className="partners-filter-bar-wrap" role="tablist" aria-label="Filter partners by sector">
        <div className="partners-filter-tabs">
          {filterCategories.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`partner-filter-pill ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveFilter(tab.value)}
              >
                <span className="filter-pill-text">{tab.label}</span>
                <span className="filter-pill-count">{tab.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4x2 Responsive Cards Bento Grid */}
      <div className="partners-showcase-grid" key={activeFilter}>
        {filteredPartners.map((partner, index) => (
          <article
            key={partner.id}
            className="partner-elevated-card pop-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Top Row: Specialized Icon Pod + Tier Badge */}
            <div className="partner-card-header-row">
              <div
                className="partner-card-icon-squircle"
                style={{
                  backgroundColor: partner.podBg,
                  borderColor: partner.podBorder,
                  color: partner.podColor,
                }}
                aria-hidden="true"
              >
                <Icon name={partner.icon} size={22} strokeWidth={2} />
              </div>

              <span className={`partner-tier-chip ${partner.tierTheme}`}>
                {partner.tierBadge}
              </span>
            </div>

            {/* Middle: Brand Details */}
            <div className="partner-card-main">
              <div className="partner-card-title-group">
                <h3 className="partner-card-brand-name">{partner.name}</h3>
                <span className="partner-card-sector-tag">{partner.category}</span>
              </div>

              <p className="partner-card-feature-desc">{partner.desc}</p>
            </div>

            {/* Bottom Meta & Expo Presence */}
            <div className="partner-card-footer">
              <div className="partner-stall-badge">
                <span className="stall-location-pin" aria-hidden="true">📍</span>
                <span className="stall-location-text">{partner.stall}</span>
              </div>

              <div className="partner-origin-tag">
                <span>{partner.origin}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Credibility & Exhibitor Onboarding Banner */}
      <div className="partners-cta-strip">
        <div className="partners-cta-strip-left">
          <div className="partners-cta-icon-box" aria-hidden="true">
            <Icon name="handshake" size={26} />
          </div>
          <div className="partners-cta-text-group" style={{ color: "#ffffff" }}>
            <h4
              className="partners-cta-title text-white"
              style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
            >
              Showcase Your Brand at Dental Show 2027
            </h4>
            <p
              className="partners-cta-desc text-white"
              style={{
                color: "rgba(255, 255, 255, 0.95)",
                WebkitTextFillColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              Join 300+ leading dental equipment manufacturers, laboratories, and traders across 10,000+ sq. meters at Chennai Trade Centre.
            </p>
          </div>
        </div>

        <div className="partners-cta-strip-actions">
          <Link href="/exhibitor-registration" className="btn btn-cta-exhibitor">
            <span>Register as Exhibitor</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/contact" className="btn btn-cta-inquire">
            <span>Inquire for Sponsorship</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
