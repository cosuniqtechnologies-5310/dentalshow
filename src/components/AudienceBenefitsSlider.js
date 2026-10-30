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
    image: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m36s862.png",
    pillLabel: "Clinicians",
    discover: "Explore the latest dental technologies, equipment, materials and clinical solutions.",
    connect: "Meet manufacturers, dealers and industry experts.",
    grow: "Find innovative solutions to enhance your practice and patient care.",
  },
  {
    id: "students",
    role: "For Dental Students",
    category: "ACADEMIA & FUTURE",
    badgeLabel: "LEARN",
    badgeValue: "Mentorship",
    image: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m43s621.png",
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
    image: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m15s085.png",
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
    badgeValue: "300+ Stalls",
    image: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m12s093.png",
    pillLabel: "Brands",
    discover: "Understand market needs and emerging industry trends.",
    connect: "Engage directly with dentists, dealers, institutions and potential business partners.",
    grow: "Showcase innovations, strengthen brand visibility and expand your market reach.",
  },
  {
    id: "technicians",
    role: "For Dental Technicians & Labs",
    category: "DIGITAL WORKFLOW",
    badgeLabel: "LABS",
    badgeValue: "CAD/CAM",
    image: "/images/dental-show-images/vlcsnap-2026-10-29-00h42m18s269.png",
    pillLabel: "Technicians",
    discover: "Explore advanced equipment, materials and workflow solutions.",
    connect: "Meet suppliers, manufacturers and professionals across the dental ecosystem.",
    grow: "Identify technologies and partnerships that can improve capabilities and support future development.",
  },
];

function AudienceCard({ group, activeKey, onToggleKey }) {
  const triadItems = [
    {
      key: "discover",
      label: "DISCOVER",
      text: group.discover,
    },
    {
      key: "connect",
      label: "CONNECT",
      text: group.connect,
    },
    {
      key: "grow",
      label: "GROW",
      text: group.grow,
    },
  ];

  return (
    <article className="benefit-staple-card" id={`audience-card-${group.id}`}>
      {/* Top Cover Visual Section */}
      <div className="staple-card-cover">
        <Image
          src={group.image}
          alt={group.role}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="staple-card-img"
        />

        {/* Scalloped Floating Top-Left Badge (Left-Aligned) */}
        <div className="staple-scallop-badge">
          <span className="scallop-badge-sub">{group.badgeLabel}</span>
          <strong className="scallop-badge-value">{group.badgeValue}</strong>
        </div>

        {/* Bottom Teal Pill Button Overlaid on Image Bottom */}
        <div className="staple-cover-pill">
          <span>{group.pillLabel}</span>
          <span className="cover-pill-arrow" aria-hidden="true">›</span>
        </div>
      </div>

      {/* Bottom Card Content: Cover Title + Discover, Connect, Grow Accordion */}
      <div className="staple-card-body">
        {/* Cover Title */}
        <h3 className="staple-card-title" title={group.role}>{group.role}</h3>

        {/* Triads Accordion: Discover, Connect, Grow (Full Color Fill) */}
        <div
          className="staple-triads-accordion"
          role="region"
          aria-label={`${group.role} benefit highlights`}
        >
          {triadItems.map((item) => {
            const isOpen = activeKey === item.key;
            return (
              <div
                key={item.key}
                className={`staple-accordion-item staple-accordion-item--${item.key} ${isOpen ? "is-active" : ""}`}
              >
                <button
                  type="button"
                  className={`staple-accordion-header-btn staple-accordion-header-btn--${item.key} ${isOpen ? "is-open" : ""}`}
                  onClick={() => onToggleKey(item.key)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${group.id}-${item.key}`}
                >
                  <span className={`staple-triad-label label--${item.key}`}>
                    {item.label}
                  </span>
                  <span
                    className={`accordion-chevron-toggle chevron--${item.key} ${isOpen ? "is-expanded" : ""}`}
                    aria-hidden="true"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`accordion-content-${group.id}-${item.key}`}
                  className={`staple-accordion-collapse ${isOpen ? "is-expanded" : ""}`}
                  role="region"
                >
                  <div className={`staple-accordion-inner inner--${item.key}`}>
                    <p className="staple-triad-text">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Bottom CTA Link */}
        <div className="staple-card-footer">
          <Link
            href="/visitor-registration"
            className="staple-card-action-btn"
            id={`btn-explore-${group.id}`}
          >
            <span>Explore Role Benefits</span>
            <span className="action-btn-arrow" aria-hidden="true">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function AudienceBenefitsSlider({ audienceGroups = defaultAudienceGroups }) {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isViewAll, setIsViewAll] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const handleToggleKey = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

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
          <AudienceCard
            key={group.id}
            group={group}
            activeKey={activeKey}
            onToggleKey={handleToggleKey}
          />
        ))}
      </div>
    </div>
  );
}
