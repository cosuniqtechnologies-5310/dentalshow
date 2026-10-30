"use client";

import { useEffect, useState, useRef } from "react";

function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

function RollingDigit({ digit }) {
  const [isTicking, setIsTicking] = useState(false);
  const prevRef = useRef(digit);

  useEffect(() => {
    if (prevRef.current !== digit) {
      prevRef.current = digit;
      setIsTicking(true);
      const timer = setTimeout(() => setIsTicking(false), 220);
      return () => clearTimeout(timer);
    }
  }, [digit]);

  return (
    <div className="odometer-slot" aria-hidden="true">
      <span
        className={`odometer-digit ${isTicking ? "is-ticking" : ""}`}
        suppressHydrationWarning
      >
        {digit}
      </span>
    </div>
  );
}

function RollingGroup({ label, value }) {
  const digits = String(value).split("");

  return (
    <div className="odometer-group" data-unit={label.toLowerCase()} suppressHydrationWarning>
      <div className="odometer-slots-row" suppressHydrationWarning>
        {digits.map((d, idx) => (
          <RollingDigit key={`${label}-${idx}`} digit={d} />
        ))}
      </div>
      <span className="odometer-group-label">{label}</span>
    </div>
  );
}

export default function Countdown({ target = "2027-02-06T09:00:00+05:30" }) {
  // Initialize with precomputed diff so static HTML build contains authentic numbers, never "00"
  const [time, setTime] = useState(() => diff(target));

  useEffect(() => {
    const tick = () => setTime(diff(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const daysVal = time
    ? String(time.days).padStart(Math.max(2, String(time.days).length), "0")
    : "98";
  const hoursVal = time ? String(time.hours).padStart(2, "0") : "18";
  const minsVal = time ? String(time.minutes).padStart(2, "0") : "00";
  const secsVal = time ? String(time.seconds).padStart(2, "0") : "00";

  return (
    <div className="odometer-centered-layout">
      {/* Left Decorative Wing Design */}
      <div className="odometer-side-flank odometer-side-flank--left" aria-hidden="true">
        <span className="flank-accent-dot" />
        <span className="flank-accent-line" />
        <span className="flank-sparkle-badge">✦</span>
        <span className="flank-inner-line" />
      </div>

      {/* Centered Odometer Board */}
      <div
        className="odometer-board"
        role="timer"
        aria-label={`Time until Dental Show 2027: ${daysVal} days, ${hoursVal} hours, ${minsVal} minutes, ${secsVal} seconds`}
        suppressHydrationWarning
      >
        <RollingGroup label="DAYS" value={daysVal} />
        <div className="odometer-separator" aria-hidden="true">
          <span>:</span>
        </div>
        <RollingGroup label="HOURS" value={hoursVal} />
        <div className="odometer-separator" aria-hidden="true">
          <span>:</span>
        </div>
        <RollingGroup label="MINUTES" value={minsVal} />
        <div className="odometer-separator" aria-hidden="true">
          <span>:</span>
        </div>
        <RollingGroup label="SECONDS" value={secsVal} />
      </div>

      {/* Right Decorative Wing Design */}
      <div className="odometer-side-flank odometer-side-flank--right" aria-hidden="true">
        <span className="flank-inner-line" />
        <span className="flank-sparkle-badge">✦</span>
        <span className="flank-accent-line" />
        <span className="flank-accent-dot" />
      </div>
    </div>
  );
}
