"use client";

import { useState, useId } from "react";
import EventCard from "./EventCard";
import EventDetailModal from "./EventDetailModal";
import Icon from "./Icon";
import { events } from "@/data/events";

export default function EventsExplorer() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const itemsPerPage = 6;
  const searchInputId = useId();

  const filterTabs = [
    { label: "All Editions (2005–2027)", value: "All" },
    { label: "★ Upcoming 2027", value: "Upcoming" },
    { label: "2020–2026", value: "2020-2026" },
    { label: "2010–2019", value: "2010-2019" },
    { label: "2005–2009", value: "2005-2009" },
  ];

  const getEraMatch = (eventYear, tabValue) => {
    const yr = parseInt(eventYear, 10);
    if (tabValue === "All") return true;
    if (tabValue === "Upcoming") return yr === 2027;
    if (tabValue === "2020-2026") return yr >= 2020 && yr <= 2026;
    if (tabValue === "2010-2019") return yr >= 2010 && yr <= 2019;
    if (tabValue === "2005-2009") return yr >= 2005 && yr <= 2009;
    return true;
  };

  // Filter items based on Category tab and Search query
  const filtered = events.filter((e) => {
    const matchesCategory = getEraMatch(e.year, active);
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      e.title.toLowerCase().includes(q) ||
      e.venue.toLowerCase().includes(q) ||
      e.dateLabel.toLowerCase().includes(q) ||
      e.excerpt.toLowerCase().includes(q) ||
      (e.year && e.year.includes(q));
    return matchesCategory && matchesSearch;
  });

  // Calculate Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const paginatedList = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (val) => {
    setActive(val);
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
        {/* Era & Category Filter Pills */}
        <div className="events-category-tabs" role="tablist" aria-label="Event Editions by Era">
          {filterTabs.map((tab) => {
            const count = events.filter((e) => getEraMatch(e.year, tab.value)).length;
            const isSelected = active === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                id={`event-tab-${tab.value}`}
                aria-selected={isSelected}
                className={`events-tab-btn ${isSelected ? "is-active" : ""}`}
                onClick={() => handleCategoryChange(tab.value)}
              >
                <span>{tab.label}</span>
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
              placeholder="Search 2005–2027 by year, topic or CTC hall..."
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
          Showing <strong>{filtered.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, filtered.length)}</strong> of <strong>{filtered.length}</strong> Editions (Click any card to open gallery, brochure PDF &amp; contact form popup)
        </span>
        {active !== "All" && (
          <span className="results-filter-tag">
            Era: <em>{filterTabs.find((t) => t.value === active)?.label || active}</em>
          </span>
        )}
      </div>

      {/* 3. EVENTS GRID (CLICK OPENS MODAL POPUP) */}
      {paginatedList.length > 0 ? (
        <div className="grid grid--3 events-catalog-grid" key={`${active}-${safePage}-${search}`}>
          {paginatedList.map((event, i) => (
            <div className="pop-in" style={{ animationDelay: `${i * 50}ms` }} key={event.slug}>
              <EventCard event={event} onSelect={(evt) => setSelectedEvent(evt)} />
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
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 4. PAGINATION CONTROLS */}
      {totalPages > 1 && (
        <nav className="events-pagination-bar" aria-label="Events pagination">
          <button
            type="button"
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className="pagination-btn pagination-prev"
            aria-label="Previous page"
          >
            <Icon name="arrow" size={14} style={{ transform: "rotate(180deg)" }} />
            <span>Prev</span>
          </button>

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => goToPage(p)}
                aria-current={safePage === p ? "page" : undefined}
                className={`pagination-num-btn ${safePage === p ? "is-active" : ""}`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className="pagination-btn pagination-next"
            aria-label="Next page"
          >
            <span>Next</span>
            <Icon name="arrow" size={14} />
          </button>
        </nav>
      )}

      {/* 5. INTERACTIVE EVENT MODAL POPUP */}
      {selectedEvent && (
        <EventDetailModal
          key={selectedEvent.slug}
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
