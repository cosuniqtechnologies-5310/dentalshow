"use client";

export default function FilterBar({ options, active, onChange, counts = {}, idPrefix = "filter" }) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Filter">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          role="tab"
          id={`${idPrefix}-${opt.toLowerCase().replace(/\s+/g, "-")}`}
          aria-selected={active === opt}
          className={`filter-bar__btn ${active === opt ? "is-active" : ""}`}
          onClick={() => onChange(opt)}
        >
          {opt}
          {counts[opt] !== undefined && <span className="filter-bar__count">{counts[opt]}</span>}
        </button>
      ))}
    </div>
  );
}
