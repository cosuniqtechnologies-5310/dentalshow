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

      {/* Gallery Items Grid */}
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
              style={{ animationDelay: `${i * 40}ms` }}
              onClick={() => setLightbox(i)}
              aria-label={`Open ${item.title}`}
            >
              <div className="gallery-img-box">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.width || 800}
                  height={item.height || 600}
                  className="gallery-thumb"
                />
                <div className="gallery-item-badges">
                  <span className="badge-year">
                    <Icon name="calendar" size={11} className="badge-year-icon" />
                    {item.year}
                  </span>
                  <span className="badge-cat">{item.category}</span>
                </div>
                <div className="gallery-item__overlay">
                  <div className="gallery-item__icon">
                    <Icon name="search" size={20} />
                  </div>
                  <div className="gallery-item__text">
                    <span className="gallery-overlay-hint">Click to enlarge</span>
                    <strong className="gallery-item__title">{item.title}</strong>
                    <span className="gallery-item__caption">{item.caption}</span>
                  </div>
                </div>
              </div>
              <div className="gallery-card-footer">
                <div className="gallery-card-footer__body">
                  <h3 className="gallery-card-footer__title">{item.title}</h3>
                  <div className="gallery-card-footer__meta">
                    <span className="gallery-card-footer__tag">
                      <span className="gallery-tag-dot" />
                      {item.category}
                    </span>
                    <span className="gallery-card-footer__action">
                      View Photo <Icon name="arrowUpRight" size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {current && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <div className="gallery-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox__close"
              aria-label="Close"
              onClick={close}
            >
              <Icon name="close" size={26} />
            </button>
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-lightbox__nav prev"
                  aria-label="Previous"
                  onClick={prev}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="gallery-lightbox__nav next"
                  aria-label="Next"
                  onClick={next}
                >
                  ›
                </button>
              </>
            )}
            <div className="gallery-lightbox__media">
              <Image
                src={current.src}
                alt={current.title}
                width={current.width || 1200}
                height={current.height || 896}
                className="gallery-lightbox__img"
              />
            </div>
            <div className="gallery-lightbox__caption">
              <div className="lightbox-meta">
                <span className="lightbox-year-badge">{current.year} Dental Show</span>
                <span className="lightbox-category-badge">{current.category}</span>
              </div>
              <h4>{current.title}</h4>
              <p>{current.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
