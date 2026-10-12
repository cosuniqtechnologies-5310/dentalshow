"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import FilterBar from "./FilterBar";
import { events, eventCategories } from "@/data/events";

export default function EventsExplorer() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? events : events.filter((e) => e.category === active);

  return (
    <>
      <FilterBar
        idPrefix="event-filter"
        options={["All", ...eventCategories]}
        active={active}
        onChange={setActive}
        counts={Object.fromEntries([
          ["All", events.length],
          ...eventCategories.map((c) => [c, events.filter((e) => e.category === c).length]),
        ])}
      />
      <div className="grid grid--3" key={active}>
        {list.map((event, i) => (
          <div className="pop-in" style={{ animationDelay: `${i * 60}ms` }} key={event.slug}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </>
  );
}
