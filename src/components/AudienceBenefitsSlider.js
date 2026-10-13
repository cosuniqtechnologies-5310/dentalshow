"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const defaultAudienceGroups = [
  {
    id: "dentists",
    role: "For Dentists",
    category: "CLINICAL PRACTICE",
    badgeLabel: "ACCESS",
    badgeValue: "Free Pass",
    image: "/images/gallery-workshop-1.jpg",
    pillLabel: "Clinicians",
    discover: "Explore the latest dental technologies, equipment, materials and clinical solutions.",
    connect: "Meet manufacturers, dealers and industry experts.",
    grow: "Find innovative solutions to enhance your practice and patient care.",
  },
  {
    id: "students",
    role: "For Dental Students & Aspiring Dentists",
    category: "ACADEMIA & FUTURE",
    badgeLabel: "LEARN",
    badgeValue: "Mentorship",
    image: "/images/gallery-workshop-2.jpg",
    pillLabel: "Students",
    discover: "Experience emerging technologies and advancements in modern dentistry.",
    connect: "Interact with industry professionals and learn about the evolving dental landscape.",
    grow: "Gain inspiration and insights to prepare for a successful dental career.",
  },
  {
    id: "dealers",
    role: "For Dental Dealers & Traders",
    category: "B2B COMMERCE",
    badgeLabel: "TRADE",
    badgeValue: "B2B Deals",
    image: "/images/gallery-exhibition-1.jpg",
    pillLabel: "Dealers",
    discover: "Explore new products, brands and business opportunities.",
    connect: "Build relationships with manufacturers, suppliers and fellow traders.",
    grow: "Expand your network, strengthen your market presence and discover new avenues for business growth.",
  },
  {
    id: "manufacturers",
    role: "For Manufacturers & Brands",
    category: "INDUSTRY LEADERSHIP",
    badgeLabel: "SCALE",
    badgeValue: "250+ Brands",
    image: "/images/gallery-exhibition-2.jpg",
    pillLabel: "Brands",
    discover: "Understand market needs and emerging industry trends.",
    connect: "Engage directly with dentists, dealers, institutions and potential business partners.",
    grow: "Showcase innovations, strengthen brand visibility and expand your market reach.",
  },
  {
    id: "technicians",
    role: "For Dental Technicians, Laboratories & Institutions",
    category: "DIGITAL WORKFLOW",
    badgeLabel: "LABS",
    badgeValue: "CAD/CAM",
    image: "/images/gallery-networking-1.jpg",
    pillLabel: "Technicians",
    discover: "Explore advanced equipment, materials and workflow solutions.",
    connect: "Meet suppliers, manufacturers and professionals across the dental ecosystem.",
    grow: "Identify technologies and partnerships that can improve capabilities and support future development.",
  },
];

export default function AudienceBenefitsSlider({ audienceGroups = defaultAudienceGroups }) {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isViewAll, setIsViewAll] = useState(false);

  const checkScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    checkScrollState();
    slider.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);
    return () => {
      slider.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, [isViewAll]);

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstCard = container.querySelector(".benefit-staple-card");
    const step = firstCard ? firstCard.offsetWidth + 24 : 360;
    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const toggleViewAll = () => {
    setIsViewAll((prev) => !prev);
  };

  return (
    <div className="benefits-showcase-container">
      {/* 1. TOP HEADER ROW (Aligned inside standard container) */}
      <div className="container">
        <div className="benefits-slider-header">
        {/* Left Column: Line accent, Eyebrow, Main Title, Sub-description */}
        <div className="benefits-header-left">
          <div className="benefits-eyebrow-row">
            <span className="benefits-accent-dash" aria-hidden="true" />
            <span className="benefits-eyebrow-text">ONE PLATFORM. MULTIPLE OPPORTUNITIES.</span>
          </div>

          <h2 className="benefits-main-title">
            Who benefits from Dental Show?
          </h2>

          <p className="benefits-sub-desc">
            A stronger future for the entire dental community. Dental Show 2027 brings together the
            people, products and possibilities shaping the future of dentistry.
          </p>
        </div>

        {/* Right Column: Slider Controls (Prev / Next) + View All Button in Top */}
        <div className="benefits-header-controls" role="region" aria-label="Slider navigation">
          {/* Circular Previous Button */}
          <button
            type="button"
            className={`slider-nav-btn slider-nav-btn--prev ${!canScrollLeft && !isViewAll ? "is-disabled" : ""}`}
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft && !isViewAll}
            aria-label="Previous audience group"
          >
            <svg
              className="slider-nav-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Circular Next Button */}
          <button
            type="button"
            className={`slider-nav-btn slider-nav-btn--next ${!canScrollRight && !isViewAll ? "is-disabled" : ""}`}
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight && !isViewAll}
            aria-label="Next audience group"
          >
            <svg
              className="slider-nav-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* VIEW ALL / FULL VIEW Button in Top */}
          <button
            type="button"
            className={`btn-view-all-top ${isViewAll ? "is-active" : ""}`}
            onClick={toggleViewAll}
            aria-label={isViewAll ? "Switch back to slider view" : "View all audience roles in full view"}
          >
            <span>{isViewAll ? "SLIDER VIEW" : "FULL VIEW"}</span>
            <svg
              className="btn-view-all-icon"
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
              {isViewAll ? (
                <path d="M9 14L4 9l5-5M4 9h10a6 6 0 0 1 6 6v4" />
              ) : (
                <path d="M7 17L17 7M7 7h10v10" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>

      {/* 2. CARDS ROW / SLIDER TRACK (Right side full screen bleed, exactly 3.5 cards shown) */}
      <div
        ref={sliderRef}
        className={`benefits-cards-track ${isViewAll ? "is-grid-mode container" : "is-slider-mode"}`}
        role="region"
        aria-label="Audience roles carousel"
        tabIndex={0}
      >
        {audienceGroups.map((group) => (
          <article key={group.id} className="benefit-staple-card" id={`audience-card-${group.id}`}>
            {/* Top Cover Visual Section */}
            <div className="staple-card-cover">
              <Image
                src={group.image}
                alt={group.role}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="staple-card-img"
              />

              {/* Scalloped Floating Top-Left Badge (Mirroring Screenshot 2) */}
              <div className="staple-scallop-badge">
                <span className="scallop-badge-sub">{group.badgeLabel}</span>
                <strong className="scallop-badge-value">{group.badgeValue}</strong>
              </div>

              {/* Bottom Teal Pill Button Overlaid on Image Bottom (Mirroring Screenshot 2) */}
              <div className="staple-cover-pill">
                <span>{group.pillLabel}</span>
                <span className="cover-pill-arrow" aria-hidden="true">›</span>
              </div>
            </div>

            {/* Bottom Card Content: Cover Title + Discover, Connect, Grow */}
            <div className="staple-card-body">
              {/* Cover Title */}
              <h3 className="staple-card-title">{group.role}</h3>

              {/* Triads List: Discover, Connect, Grow */}
              <div className="staple-triads-stack">
                {/* 1. DISCOVER */}
                <div className="staple-triad-row">
                  <div className="triad-chip-wrap">
                    <span className="staple-triad-chip chip--discover">DISCOVER</span>
                  </div>
                  <p className="staple-triad-text">{group.discover}</p>
                </div>

                {/* 2. CONNECT */}
                <div className="staple-triad-row">
                  <div className="triad-chip-wrap">
                    <span className="staple-triad-chip chip--connect">CONNECT</span>
                  </div>
                  <p className="staple-triad-text">{group.connect}</p>
                </div>

                {/* 3. GROW */}
                <div className="staple-triad-row">
                  <div className="triad-chip-wrap">
                    <span className="staple-triad-chip chip--grow">GROW</span>
                  </div>
                  <p className="staple-triad-text">{group.grow}</p>
                </div>
              </div>

              {/* Card Bottom CTA Link */}
              <div className="staple-card-footer">
                <Link
                  href="/visitor-registration"
                  className="staple-card-action-btn"
                  id={`btn-explore-${group.id}`}
                >
                  <span>Explore Role Benefits</span>
                  <span className="action-btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
