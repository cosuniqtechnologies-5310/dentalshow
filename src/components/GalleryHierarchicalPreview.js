"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { galleryItems } from "@/data/gallery";

// Divide authentic photos into two distinct rows of 15 unique moments each
const row1Items = galleryItems.slice(0, 15);
const row2Items = galleryItems.slice(15, 30);

// Combined unique collection for lightbox carousel browsing
const allModalItems = [...row1Items, ...row2Items];
const TOTAL_PHOTOS = allModalItems.length;

export default function GalleryHierarchicalPreview() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (item) => {
    const idx = allModalItems.findIndex((it) => it.id === item.id);
    setLightboxIndex(idx !== -1 ? idx : 0);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % TOTAL_PHOTOS
    );
  }, []);
  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + TOTAL_PHOTOS) % TOTAL_PHOTOS
    );
  }, []);

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

  const activePhoto = lightboxIndex !== null ? allModalItems[lightboxIndex] : null;

  return (
    <div className="gallery-showcase-section">
      {/* 1. Header (Inside Container for Perfect Alignment with Site Grid) */}
      <div className="container">
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
      </div>

      {/* 2. Dual-Row Continuous Infinite Marquee (Image Only, No Hover Effects) */}
      <div className="gallery-marquee-wrapper" aria-label="Continuous gallery preview stream">
        {/* TOP ROW: Continuously scrolls right to left */}
        <div className="gallery-marquee-row">
          <div className="gallery-marquee-track gallery-marquee-track--left">
            <div className="gallery-marquee-group">
              {row1Items.map((item, idx) => (
                <button
                  key={`top-g1-${item.id}-${idx}`}
                  type="button"
                  className="gallery-marquee-card"
                  onClick={() => openLightbox(item)}
                  aria-label={item.title}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 260px, 350px"
                    className="gallery-marquee-img"
                    priority={idx < 4}
                  />
                </button>
              ))}
            </div>
            <div className="gallery-marquee-group" aria-hidden="true">
              {row1Items.map((item, idx) => (
                <button
                  key={`top-g2-${item.id}-${idx}`}
                  type="button"
                  tabIndex={-1}
                  className="gallery-marquee-card"
                  onClick={() => openLightbox(item)}
                  aria-label={item.title}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 260px, 350px"
                    className="gallery-marquee-img"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Continuously scrolls left to right */}
        <div className="gallery-marquee-row">
          <div className="gallery-marquee-track gallery-marquee-track--right">
            <div className="gallery-marquee-group">
              {row2Items.map((item, idx) => (
                <button
                  key={`bottom-g1-${item.id}-${idx}`}
                  type="button"
                  className="gallery-marquee-card"
                  onClick={() => openLightbox(item)}
                  aria-label={item.title}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 260px, 350px"
                    className="gallery-marquee-img"
                  />
                </button>
              ))}
            </div>
            <div className="gallery-marquee-group" aria-hidden="true">
              {row2Items.map((item, idx) => (
                <button
                  key={`bottom-g2-${item.id}-${idx}`}
                  type="button"
                  tabIndex={-1}
                  className="gallery-marquee-card"
                  onClick={() => openLightbox(item)}
                  aria-label={item.title}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 260px, 350px"
                    className="gallery-marquee-img"
                  />
                </button>
              ))}
            </div>
          </div>
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
                  Photo {lightboxIndex + 1} of {allModalItems.length}
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
              {allModalItems.length > 1 && (
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
                  width={activePhoto.width || 1920}
                  height={activePhoto.height || 1080}
                  className="lightbox-main-img"
                  priority
                />
              </div>
            </div>

            {/* Lightbox Footer */}
            <div className="lightbox-dialog-footer">
              <div className="lightbox-footer-content">
                <h3 className="lightbox-footer-title" style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>
                  {activePhoto.title}
                </h3>
                <p className="lightbox-footer-caption" style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>
                  {activePhoto.caption}
                </p>
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
