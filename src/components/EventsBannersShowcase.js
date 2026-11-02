"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

const defaultBanners = [
  {
    id: "ds-2027",
    title: "Dental Show 2027",
    statusBadge: "UPCOMING FLAGSHIP EXPO",
    dateVenue: "6th & 7th February 2027 • Chennai Trade Centre New Halls 2, 3 & 3A",
    highlight: "300+ Stalls & Brands • 10,000+ Trade Delegates • Free Visitor Pass Access",
    excerpt: "Bringing dentists, dental students, manufacturers, traders and the wider dental community together to discover innovations, experience new possibilities and build meaningful connections.",
    image: "/images/dental-show-images/vlcsnap-2026-10-29-00h40m41s322.png",
    link: "/visitor-registration",
    stampText: "• REGISTER NOW • REGISTER NOW ",
    themeClass: "banner-theme-navy",
    ctaLabel: "Register as Visitor",
  },
  {
    id: "ds-2026",
    title: "Dental Show 2026",
    statusBadge: "SOUTH INDIA'S BIGGEST DENTAL EXPO",
    dateVenue: "15th & 16th August 2026 • Chennai Trade Centre, Nandambakkam",
    highlight: "210+ Exhibitors & Global Brands • 5,400+ Clinical Attendees • AI Diagnostics",
    excerpt: "A forward-looking edition spotlighting artificial intelligence diagnostic tools, robotic-assisted implantology, and next-generation clinical workflows.",
    image: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m18s269.png",
    link: "/gallery",
    stampText: "• VIEW GALLERY • VIEW GALLERY ",
    themeClass: "banner-theme-green",
    ctaLabel: "View 2026 Photos",
  },
  {
    id: "ds-2024",
    title: "Dental Show 2024",
    statusBadge: "DIGITAL DENTISTRY EXPO",
    dateVenue: "15th & 16th August 2024 • Chennai Trade Centre, Nandambakkam",
    highlight: "160+ Exhibitors • 4,300+ Delegates • Live CAD/CAM & Intraoral Demos",
    excerpt: "Spotlighting intraoral scanning accuracy, chairside single-visit restorations, and digital lab communication protocols.",
    image: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m22s889.png",
    link: "/gallery",
    stampText: "• EXPLORE RECAP • EXPLORE RECAP ",
    themeClass: "banner-theme-cyan",
    ctaLabel: "View 2024 Photos",
  },
];

function StampBadge({ id = "stamp", text = "• REGISTER NOW • REGISTER NOW " }) {
  const pathId = `stampCirclePath-${id}`;
  return (
    <div className="event-stamp-badge" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="event-stamp-svg">
        <defs>
          <path
            id={pathId}
            d="M 50, 50 m -31, 0 a 31,31 0 1,1 62,0 a 31,31 0 1,1 -62,0"
          />
        </defs>

        {/* 12-lobed scalloped rosette stamp background */}
        <path
          d="M 50,4 
             C 54,4 56,9 60,10 
             C 64,11 68,8 72,11 
             C 76,14 76,19 79,22 
             C 83,25 88,24 90,29 
             C 93,33 90,37 91,41 
             C 93,46 96,48 96,50 
             C 96,52 93,54 91,59 
             C 90,63 93,67 90,71 
             C 88,76 83,75 79,78 
             C 76,81 76,86 72,89 
             C 68,92 64,89 60,90 
             C 56,91 54,96 50,96 
             C 46,96 44,91 40,90 
             C 36,89 32,92 28,89 
             C 24,86 24,81 21,78 
             C 17,75 12,76 10,71 
             C 7,67 10,63 9,59 
             C 7,54 4,52 4,50 
             C 4,48 7,46 9,41 
             C 10,37 7,33 10,29 
             C 12,24 17,25 21,22 
             C 24,19 24,14 28,11 
             C 32,8 36,11 40,10 
             C 44,9 46,4 50,4 Z"
          fill="#ffffff"
          className="stamp-rosette-path"
        />

        {/* Circular uppercase rotating text */}
        <text className="stamp-circular-text">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>

        {/* Center dark circle + white arrow pointing top-right */}
        <circle cx="50" cy="50" r="16" className="stamp-center-circle" />
        <path
          d="M 45 55 L 55 45 M 48 45 L 55 45 L 55 52"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stamp-arrow-path"
        />
      </svg>
    </div>
  );
}

export default function EventsBannersShowcase({ banners = defaultBanners }) {
  const [activeIndex] = useState(0);

  return (
    <div className="events-showcase-wrapper">
      {/* 1. TOP HEADER ROW (Matching Reference Screenshot layout) */}
      <div className="events-showcase-header">
        {/* Left Column: Line accent, Eyebrow, Main Title */}
        <div className="events-header-left">
          <div className="events-eyebrow-row">
            <span className="events-accent-dash" aria-hidden="true" />
            <span className="events-eyebrow-text">SHOWCASE & SESSIONS</span>
          </div>

          <h2 className="events-main-title">
            Events &amp; flagship editions
          </h2>

          <p className="events-sub-desc">
            Explore the upcoming flagship exhibition and revisit the proud milestones of past editions.
          </p>
        </div>

        {/* Right Column: VIEW ALL Button */}
        <div className="events-header-controls" role="region" aria-label="Events navigation">
          {/* VIEW ALL Button in Top (Mirroring Reference Screenshot) */}
          <Link
            href="/events"
            className="btn-events-view-all"
            id="btn-events-view-all-top"
          >
            <span>VIEW ALL</span>
            <svg
              className="events-view-all-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 2. THREE PANORAMIC HORIZONTAL BOUTIQUE BANNERS (Exact match to Reference Screenshot) */}
      <div className="events-banners-stack" role="list">
        {banners.map((item, idx) => {
          const isCurrent = idx === activeIndex;

          return (
            <Link
              key={item.id}
              href={item.link}
              className={`event-panorama-banner ${item.themeClass} ${isCurrent ? "is-focused" : ""}`}
              role="listitem"
              id={`event-banner-${item.id}`}
            >
              {/* Clean Brand Gradient Surface (Background photo removed as requested) */}
              <div className="panorama-banner-overlay" aria-hidden="true" />

              {/* Banner Left Content */}
              <div className="panorama-banner-content">
                <div className="panorama-badge-pill">
                  <span>{item.statusBadge}</span>
                </div>

                <h3 className="panorama-banner-title">{item.title}</h3>

                <div className="panorama-meta-strip">
                  <span className="panorama-meta-item">
                    <Icon name="calendar" size={14} className="panorama-meta-icon" />
                    <span>{item.dateVenue.split("•")[0]?.trim()}</span>
                  </span>
                  <span className="panorama-meta-sep" aria-hidden="true">•</span>
                  <span className="panorama-meta-item">
                    <Icon name="pin" size={14} className="panorama-meta-icon" />
                    <span>{item.dateVenue.split("•")[1]?.trim()}</span>
                  </span>
                </div>

                <p className="panorama-banner-excerpt">
                  {item.highlight}
                </p>
              </div>

              {/* Banner Right Stamp Button (Exact match to Reference Screenshot) */}
              <div className="panorama-banner-stamp">
                <StampBadge id={item.id} text={item.stampText} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
