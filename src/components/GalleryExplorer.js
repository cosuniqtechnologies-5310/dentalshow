"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { galleryItems, galleryYears, galleryCategories } from "@/data/gallery";

export default function GalleryExplorer() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index within filtered list

  const items = galleryItems.filter((item) => {
    const matchYear = selectedYear === "All" || item.year === selectedYear;
    const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchYear && matchCategory;
  });

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <div className="gallery-explorer-wrap">
      {/* Year Filter Bar (Strict requirement: Central gallery filterable by year) */}
      <div className="gallery-filter-section">
        <div className="filter-group">
          <span className="filter-label">Filter By Year:</span>
          <div className="year-pills" role="tablist" aria-label="Filter gallery by year">
            {galleryYears.map((year) => {
              const count =
                year === "All"
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.year === year).length;
              const isActive = selectedYear === year;
              return (
                <button
                  type="button"
                  key={year}
                  role="tab"
                  aria-selected={isActive}
                  className={`year-pill-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => {
                    setSelectedYear(year);
                    setLightbox(null);
                  }}
                >
                  <span className="year-name">{year === "All" ? "All Years" : year}</span>
                  <span className="year-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Pills */}
        <div className="filter-group mt-sm">
          <span className="filter-label">Filter By Topic:</span>
          <div className="category-pills">
            {galleryCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  type="button"
                  key={cat}
                  className={`cat-pill-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightbox(null);
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Items Grid - Clean Photo-First ("Only Show Image") */}
      {items.length === 0 ? (
        <div className="gallery-empty-state">
          <p>No photos found for the selected year and category combination.</p>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setSelectedYear("All");
              setSelectedCategory("All");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="gallery-grid" key={`${selectedYear}-${selectedCategory}`}>
          {items.map((item, i) => (
            <button
              type="button"
              key={item.id}
              className="gallery-item pop-in"
              style={{ animationDelay: `${i * 35}ms` }}
              onClick={() => setLightbox(i)}
              aria-label={`View photo in full view: ${item.title}`}
            >
              <div className="gallery-img-box">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.width || 800}
                  height={item.height || 600}
                  className="gallery-thumb"
                  loading={i < 6 ? "eager" : "lazy"}
                />

                {/* Floating Top Badges (Year & Category) */}
                <div className="gallery-item-badges">
                  <span className="badge-year">
                    <Icon name="calendar" size={11} className="badge-year-icon" />
                    <span>{item.year}</span>
                  </span>
                  <span className="badge-cat">{item.category}</span>
                </div>

                {/* Sleek Minimal Hover Overlay: Full View Action Pill */}
                <div className="gallery-item__overlay">
                  <div className="gallery-clean-zoom-pill">
                    <Icon name="expand" size={16} />
                    <span>View Fullscreen &amp; Details</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Deluxe Lightbox Modal: Full View, Proper Space & Additional Things */}
      {current && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <div className="gallery-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            {/* 1. Header Bar: Counter, Category, Year, Esc Hint & Close */}
            <div className="gallery-lightbox__header">
              <div className="gallery-lightbox__meta-group">
                <span className="lightbox-count-badge">
                  Photo {lightbox + 1} of {items.length}
                </span>
                <span className="lightbox-cat-badge">{current.category}</span>
                <span className="lightbox-year-badge">
                  <Icon name="calendar" size={12} />
                  <span>{current.year} Dental Show</span>
                </span>
              </div>

              <div className="gallery-lightbox__header-right">
                <span className="lightbox-esc-hint">Esc to close</span>
                <button
                  type="button"
                  className="gallery-lightbox__close-btn"
                  aria-label="Close photo preview"
                  title="Close (Esc)"
                  onClick={close}
                >
                  <Icon name="close" size={20} />
                </button>
              </div>
            </div>

            {/* 2. Media Stage: Full View Image with Proper Room and Navigation Controls */}
            <div className="gallery-lightbox__stage">
              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    className="gallery-lightbox__nav-btn prev"
                    aria-label="Previous photo (Left arrow key)"
                    title="Previous (←)"
                    onClick={prev}
                  >
                    <Icon name="chevronLeft" size={24} />
                  </button>
                  <button
                    type="button"
                    className="gallery-lightbox__nav-btn next"
                    aria-label="Next photo (Right arrow key)"
                    title="Next (→)"
                    onClick={next}
                  >
                    <Icon name="chevronRight" size={24} />
                  </button>
                </>
              )}

              <div className="gallery-lightbox__img-stage-box">
                <Image
                  src={current.src}
                  alt={current.title}
                  width={current.width || 1920}
                  height={current.height || 1080}
                  className="gallery-lightbox__stage-img"
                  priority
                />
              </div>
            </div>

            {/* 3. Details Container: Proper Space, Typography & Additional Features */}
            <div className="gallery-lightbox__details-box">
              <div className="gallery-lightbox__details-top">
                <div className="gallery-lightbox__location-pill">
                  <span className="location-sparkle">✦</span>
                  <span>Chennai Trade Centre · Landmark Exposition</span>
                </div>
                <span className="gallery-lightbox__aspect-tag">16:9 Full View HD</span>
              </div>

              <h3 className="gallery-lightbox__main-title">{current.title}</h3>
              <p className="gallery-lightbox__main-desc">{current.caption}</p>

              {/* Additional Bar: Navigation Hotkeys & Open High-Res Action */}
              <div className="gallery-lightbox__additional-bar">
                <div className="gallery-lightbox__shortcuts">
                  <span className="shortcut-key">←</span>
                  <span className="shortcut-key">→</span>
                  <span className="shortcut-text">Navigate photos</span>
                  <span className="shortcut-dot">•</span>
                  <span className="shortcut-key">Esc</span>
                  <span className="shortcut-text">Close</span>
                </div>

                <div className="gallery-lightbox__actions">
                  <a
                    href={current.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-lightbox__btn-open-res"
                    title="Open original high-resolution photo in new tab"
                  >
                    <span>View Original HD</span>
                    <Icon name="arrowUpRight" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
