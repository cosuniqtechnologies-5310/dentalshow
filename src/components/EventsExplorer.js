"use client";

import { useState, useId } from "react";
import EventCard from "./EventCard";
import Icon from "./Icon";
import { events, eventCategories } from "@/data/events";

export default function EventsExplorer() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const searchInputId = useId();

  // Filter items based on Category tab and Search query
  const filtered = events.filter((e) => {
    const matchesCategory = active === "All" || e.category === active;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      e.title.toLowerCase().includes(q) ||
      e.venue.toLowerCase().includes(q) ||
      e.dateLabel.toLowerCase().includes(q) ||
      e.excerpt.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  // Calculate Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const paginatedList = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (cat) => {
    setActive(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearch("");
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    const topEl = document.getElementById("events-explorer-top");
    if (topEl) {
      topEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="events-explorer-wrap" id="events-explorer-top">
      {/* 1. FILTER & SEARCH CONTROL BAR */}
      <div className="events-filter-search-bar">
        {/* Category Pills matching screenshot (All 6, Upcoming 1, Past 5) */}
        <div className="events-category-tabs" role="tablist" aria-label="Event Categories">
          {["All", ...eventCategories].map((opt) => {
            const count =
              opt === "All"
                ? events.length
                : events.filter((e) => e.category === opt).length;
            const isSelected = active === opt;

            return (
              <button
                key={opt}
                type="button"
                role="tab"
                id={`event-tab-${opt.toLowerCase()}`}
                aria-selected={isSelected}
                className={`events-tab-btn ${isSelected ? "is-active" : ""}`}
                onClick={() => handleCategoryChange(opt)}
              >
                <span>{opt}</span>
                <span className="events-tab-badge">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input Box */}
        <div className="events-search-box">
          <label htmlFor={searchInputId} className="sr-only">Search Events</label>
          <div className="events-search-input-wrap">
            <span className="search-icon" aria-hidden="true">
              <Icon name="search" size={16} />
            </span>
            <input
              id={searchInputId}
              type="text"
              placeholder="Search by year, topic or venue..."
              value={search}
              onChange={handleSearchChange}
              className="events-search-input"
            />
            {search && (
              <button
                type="button"
                onClick={clearSearch}
                className="events-search-clear"
                title="Clear search"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. SUMMARY STRIP */}
      <div className="events-results-meta">
        <span className="results-count-text">
          Showing <strong>{filtered.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, filtered.length)}</strong> of <strong>{filtered.length}</strong> Flagship Editions
        </span>
        {active !== "All" && (
          <span className="results-filter-tag">
            Filter: <em>{active}</em>
          </span>
        )}
      </div>

      {/* 3. EVENTS GRID */}
      {paginatedList.length > 0 ? (
        <div className="grid grid--3 events-catalog-grid" key={`${active}-${safePage}-${search}`}>
          {paginatedList.map((event, i) => (
            <div className="pop-in" style={{ animationDelay: `${i * 60}ms` }} key={event.slug}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="events-empty-state">
          <div className="empty-state-icon">📅</div>
          <h3>No matching editions found</h3>
          <p>
            No events match your current filter or search criteria &ldquo;{search}&rdquo;.
          </p>
          <button
            type="button"
            className="btn btn--primary btn--sm"
            onClick={() => {
              setActive("All");
              setSearch("");
              setCurrentPage(1);
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 4. PAGINATION CONTROLS BAR (Requested by user) */}
      {totalPages > 1 && (
        <div className="events-pagination-bar" role="navigation" aria-label="Events pagination">
          {/* Previous Page Button */}
          <button
            type="button"
            className="pagination-btn pagination-btn--prev"
            disabled={safePage === 1}
            onClick={() => goToPage(safePage - 1)}
            aria-label="Previous page"
          >
            ← Previous
          </button>

          {/* Page Numbers */}
          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                className={`pagination-num-btn ${safePage === pageNum ? "is-active" : ""}`}
                onClick={() => goToPage(pageNum)}
                aria-label={`Go to page ${pageNum}`}
                aria-current={safePage === pageNum ? "page" : undefined}
              >
                {pageNum}
              </button>
            ))}
          </div>

          {/* Next Page Button */}
          <button
            type="button"
            className="pagination-btn pagination-btn--next"
            disabled={safePage === totalPages}
            onClick={() => goToPage(safePage + 1)}
            aria-label="Next page"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
