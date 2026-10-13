"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/data/gallery";

export default function GalleryHierarchicalPreview() {
  const [activeFilter, setActiveFilter] = useState("All");

  const previewItems = galleryItems.slice(0, 6);

  const categories = [
    { label: "All Moments", value: "All", count: 6 },
    { label: "Keynotes", value: "Keynotes & Conferences", count: 2 },
    { label: "Workshops", value: "Workshops", count: 2 },
    { label: "Networking", value: "Networking", count: 2 },
  ];

  const filteredItems =
    activeFilter === "All"
      ? previewItems
      : previewItems.filter((item) => item.category === activeFilter);

  // Layout assignment for the 6 items to create the hierarchical bento grid
  const getTileLayoutClass = (index) => {
    switch (index) {
      case 0:
        return "gallery-tile--hero"; // 2 cols x 2 rows
      case 1:
        return "gallery-tile--wide-top"; // 2 cols x 1 row
      case 2:
        return "gallery-tile--compact-1"; // 1 col x 1 row
      case 3:
        return "gallery-tile--compact-2"; // 1 col x 1 row
      case 4:
        return "gallery-tile--wide-bottom-1"; // 2 cols x 1 row
      case 5:
        return "gallery-tile--wide-bottom-2"; // 2 cols x 1 row
      default:
        return "gallery-tile--compact";
    }
  };

  const getCategoryThemeClass = (category) => {
    if (category.includes("Keynotes")) return "badge-theme-blue";
    if (category.includes("Workshops")) return "badge-theme-green";
    if (category.includes("Networking")) return "badge-theme-cyan";
    return "badge-theme-blue";
  };

  return (
    <div className="gallery-hierarchical-section">
      {/* 1. Category Filter Tabs Row with Right-Aligned Explore Button */}
      <div className="gallery-filter-bar-row">
        <div className="gallery-tabs-nav" role="tablist" aria-label="Gallery category filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat.value}
              className={`gallery-filter-tab ${activeFilter === cat.value ? "is-active" : ""}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              <span className="gallery-tab-label">{cat.label}</span>
              <span className="gallery-tab-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Header Right Action Button */}
        <Link
          href="/gallery"
          className="btn-gallery-explore-all gallery-btn-header-right"
          id="btn-header-gallery"
        >
          <span>Explore Central Expo Gallery</span>
          <svg
            className="btn-gallery-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* 2. Hierarchical Grid of Photos */}
      <div className="gallery-hierarchical-grid" role="region" aria-label="Photo highlights grid">
        {filteredItems.map((item, index) => {
          const layoutClass = activeFilter === "All" ? getTileLayoutClass(index) : "gallery-tile--filtered";
          const themeBadgeClass = getCategoryThemeClass(item.category);

          return (
            <Link
              key={item.id}
              href={`/gallery#gallery-item-${item.id}`}
              className={`gallery-hierarchical-tile ${layoutClass}`}
              aria-label={`View photo: ${item.title}`}
            >
              {/* Photo Image with smooth zoom transition */}
              <div className="gallery-tile-img-container">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="gallery-tile-img"
                  priority={index === 0}
                />
              </div>

              {/* Default Ambient Pill (Visible before hover) */}
              <div className="gallery-tile-ambient-badge" aria-hidden="true">
                <span className="ambient-badge-year">{item.year}</span>
              </div>

              {/* Hover Text Overlay (Reveals on Hover) */}
              <div className="gallery-tile-hover-overlay">
                <div className="hover-overlay-top">
                  <span className={`hover-category-badge ${themeBadgeClass}`}>
                    {item.category}
                  </span>
                  <span className="hover-year-pill">{item.year} EDITION</span>
                </div>

                <div className="hover-overlay-bottom">
                  <h3 className="hover-photo-title">{item.title}</h3>
                  <p className="hover-photo-caption">{item.caption}</p>

                  <div className="hover-action-row">
                    <span className="hover-view-btn">
                      <span>View in Gallery</span>
                      <svg
                        className="hover-btn-arrow"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>

                    <span className="hover-zoom-icon" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
