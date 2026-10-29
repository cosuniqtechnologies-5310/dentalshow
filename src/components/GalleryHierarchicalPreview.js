"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { galleryItems } from "@/data/gallery";

export default function GalleryHierarchicalPreview() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef(null);

  // 6 authentic moments from the dental show gallery: 2 Keynotes, 2 Workshops, 2 Networking
  const allMoments = galleryItems.slice(0, 6);

  const categories = [
    { label: "All Moments", value: "All", count: 6 },
    { label: "Keynotes", value: "Keynotes & Conferences", count: 2, icon: "mic" },
    { label: "Workshops", value: "Workshops", count: 2, icon: "flask" },
    { label: "Networking", value: "Networking", count: 2, icon: "handshake" },
  ];

  const filteredItems =
    activeFilter === "All"
      ? allMoments
      : allMoments.filter((item) => item.category === activeFilter);

  // Smooth carousel scroll by exactly one card width (330px + 22px gap)
  const scroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = direction === "left" ? -352 : 352;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // On mount or filter change: set initial scroll so left shows half slide & right shows half slide
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    if (activeFilter === "All" && filteredItems.length > 3) {
      // Offset by half a card (165px) so previous card peeks on left and next peeks on right
      el.scrollTo({ left: 165, behavior: "instant" });
    } else {
      el.scrollTo({ left: 0, behavior: "smooth" });
    }

    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeFilter, filteredItems.length]);

  const getThemeMeta = (category) => {
    if (category.includes("Keynotes")) {
      return {
        badgeClass: "badge-glass-blue",
        icon: "mic",
        shortTag: "Keynote Conference",
        location: "Auditorium Hall",
      };
    }
    if (category.includes("Workshops")) {
      return {
        badgeClass: "badge-glass-green",
        icon: "flask",
        shortTag: "Clinical Workshop",
        location: "Hands-on Training Lab",
      };
    }
    if (category.includes("Exhibition")) {
      return {
        badgeClass: "badge-glass-amber",
        icon: "store",
        shortTag: "Exhibition Floor",
        location: "Central Trade Pavilions",
      };
    }
    if (category.includes("Networking")) {
      return {
        badgeClass: "badge-glass-purple",
        icon: "handshake",
        shortTag: "Networking & Gala",
        location: "Grand Ballroom & Lounge",
      };
    }
    return {
      badgeClass: "badge-glass-blue",
      icon: "mic",
      shortTag: category,
      location: "Chennai Trade Centre",
    };
  };

  // Lightbox handlers
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);
  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

  const activePhoto = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="gallery-showcase-section">
      {/* 1. Header (Inside Container for Perfect Alignment with Site Grid) */}
      <div className="container">
        {/* Row 1: Eyebrow, Title & Subtitle on Left + Explore Central Expo Gallery CTA on Right */}
        <div className="gallery-header-top-row">
          <div className="gallery-header-text">
            <div className="gallery-eyebrow-row">
              <span className="gallery-accent-dash" aria-hidden="true" />
              <span className="gallery-eyebrow-text">PHOTO &amp; VIDEO HIGHLIGHTS</span>
            </div>
            <h2 className="gallery-main-headline">
              Gallery preview
            </h2>
            <p className="gallery-sub-lead">
              Moments That Bring Us Together. Revisit the people, clinical breakthroughs and celebrated memories that make every Dental Show special.
            </p>
          </div>

          <div className="gallery-header-archive-wrap">
            <Link
              href="/gallery"
              className="gallery-header-archive-btn"
              id="btn-header-gallery"
            >
              <span>Explore Central Expo Gallery (Filter by Year)</span>
              <Icon name="arrow" size={14} className="archive-btn-icon" />
            </Link>
          </div>
        </div>

        {/* Row 2: Full-Width Unified Tab Bar with Navigation Arrows Inside at the End */}
        <div className="gallery-unified-tab-bar" role="toolbar" aria-label="Category filters and navigation">
          {/* Category Filter Chips on Left */}
          <div className="gallery-tab-items" role="tablist" aria-label="Category filters">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`gallery-category-chip ${isActive ? "is-active" : ""}`}
                  onClick={() => {
                    setActiveFilter(cat.value);
                    setLightboxIndex(null);
                  }}
                >
                  {cat.icon && <Icon name={cat.icon} size={13} className="chip-icon" />}
                  <span className="chip-label">{cat.label}</span>
                  <span className="chip-count">{cat.count}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows INSIDE the Tab Bar at the End */}
          <div className="gallery-tab-end-arrows" aria-label="Gallery carousel navigation">
            <button
              type="button"
              className={`gallery-nav-arrow-btn ${!canScrollLeft ? "is-disabled" : ""}`}
              onClick={() => scroll("left")}
              aria-label="Previous moments"
              disabled={!canScrollLeft}
              title="Previous moments"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className={`gallery-nav-arrow-btn ${!canScrollRight ? "is-disabled" : ""}`}
              onClick={() => scroll("right")}
              aria-label="Next moments"
              disabled={!canScrollRight}
              title="Next moments"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Full-Screen Horizontal Cards Track (Shows half slide on left & half slide on right, NO scrollbar) */}
      <div className="gallery-slider-fullbleed">
        <div
          ref={trackRef}
          className="gallery-cards-track"
          role="region"
          aria-label="Gallery moments cards carousel"
          tabIndex={0}
        >
          {filteredItems.map((item, index) => {
            const theme = getThemeMeta(item.category);

            return (
              <article
                key={item.id}
                className="gallery-clean-card"
                onClick={() => setLightboxIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open photo preview: ${item.title}`}
              >
                {/* Full-Bleed Card Background Photo */}
                <div className="clean-card-img-container">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 300px, 340px"
                    className="clean-card-img"
                    priority={index < 4}
                  />
                  {/* Deep High-Contrast Vignette for 100% Font Visibility */}
                  <div className="clean-card-gradient-overlay" aria-hidden="true" />
                </div>

                {/* Floating Top Badges (Category & Year) */}
                <div className="clean-card-top-bar">
                  <span className={`clean-card-badge ${theme.badgeClass}`}>
                    <Icon name={theme.icon} size={11} className="badge-cat-icon" />
                    <span>{theme.shortTag}</span>
                  </span>

                  <span className="clean-card-year-badge">
                    <Icon name="calendar" size={11} className="badge-cal-icon" />
                    <span>{item.year}</span>
                  </span>
                </div>

                {/* Floating Bottom Info (Crystal-Clear High-Contrast White Font) */}
                <div className="clean-card-bottom-bar">
                  <div className="clean-card-text">
                    <span className="clean-card-location-tag">
                      <span className="location-sparkle">✦</span>
                      <span>{theme.location}</span>
                    </span>

                    <h3 className="clean-card-title">{item.title}</h3>

                    <p className="clean-card-caption">{item.caption}</p>
                  </div>

                  {/* Circular Action Arrow */}
                  <div className="clean-card-arrow-circle" title="View Fullscreen in Lightbox">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="clean-arrow-svg"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 3. Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div
          className="gallery-preview-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={closeLightbox}
        >
          <div
            className="gallery-preview-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="lightbox-dialog-header">
              <div className="lightbox-header-meta">
                <span className="lightbox-count-badge">
                  Highlight {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <span className="lightbox-cat-badge">{activePhoto.category}</span>
                <span className="lightbox-year-badge">
                  <Icon name="calendar" size={11} />
                  <span>{activePhoto.year} Dental Show</span>
                </span>
              </div>

              <button
                type="button"
                className="lightbox-dialog-close"
                onClick={closeLightbox}
                aria-label="Close photo preview"
                title="Close (Esc)"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            {/* Media Box */}
            <div className="lightbox-dialog-media">
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    className="lightbox-nav-btn lightbox-nav-prev"
                    onClick={prevPhoto}
                    aria-label="Previous photo"
                  >
                    <Icon name="chevronLeft" size={22} />
                  </button>
                  <button
                    type="button"
                    className="lightbox-nav-btn lightbox-nav-next"
                    onClick={nextPhoto}
                    aria-label="Next photo"
                  >
                    <Icon name="chevronRight" size={22} />
                  </button>
                </>
              )}

              <div className="lightbox-img-wrapper">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  width={activePhoto.width || 1200}
                  height={activePhoto.height || 896}
                  className="lightbox-main-img"
                  priority
                />
              </div>
            </div>

            {/* Lightbox Footer */}
            <div className="lightbox-dialog-footer">
              <div className="lightbox-footer-content">
                <h3 className="lightbox-footer-title">{activePhoto.title}</h3>
                <p className="lightbox-footer-caption">{activePhoto.caption}</p>
              </div>

              <Link
                href="/gallery"
                className="btn-lightbox-central-link"
                onClick={closeLightbox}
              >
                <span>Central Photo Archive</span>
                <Icon name="arrowUpRight" size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
