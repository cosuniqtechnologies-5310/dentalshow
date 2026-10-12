"use client";

import { useEffect, useState, useRef } from "react";

const timeUnits = [
  { key: "days", label: "DAYS" },
  { key: "hours", label: "HOURS" },
  { key: "minutes", label: "MINUTES" },
  { key: "seconds", label: "SECONDS" },
];

function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

function CounterItem({ unit, val }) {
  const [animating, setAnimating] = useState(false);
  const prevValRef = useRef(null);

  useEffect(() => {
    if (prevValRef.current !== null && prevValRef.current !== val) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    prevValRef.current = val;
  }, [val]);

  return (
    <div
      className={`counter-item counter-item--${unit.key} ${animating ? "is-ticking" : ""}`}
      data-unit={unit.key}
    >
      <div className="counter-inner-content">
        <span
          key={`${unit.key}-${val}`}
          className={`counter-number counter-number--${unit.key} ${animating ? "number-tick" : ""}`}
        >
          {val}
        </span>
        <span className={`counter-label-tag counter-label--${unit.key}`}>
          {unit.label}
        </span>
      </div>
    </div>
  );
}

export default function Countdown({ target = "2027-02-06T09:00:00+05:30" }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => setTime(diff(target));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [target]);

  return (
    <div className="countdown" role="timer" aria-label="Time until Dental Show 2027">
      {timeUnits.map((u) => {
        const val = time ? String(time[u.key]).padStart(2, "0") : "00";
        return <CounterItem key={u.key} unit={u} val={val} />;
      })}
    </div>
  );
}
