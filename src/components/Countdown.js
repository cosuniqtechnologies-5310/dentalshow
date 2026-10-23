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
  const [current, setCurrent] = useState(digit);
  const [previous, setPrevious] = useState(digit);
  const [isRolling, setIsRolling] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      setCurrent(digit);
      setPrevious(digit);
      return;
    }

    if (digit !== current) {
      setPrevious(current);
      setCurrent(digit);
      setIsRolling(true);
      const timer = setTimeout(() => {
        setIsRolling(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [digit, current]);

  return (
    <div className="odometer-slot" aria-hidden="true">
      {/* Outgoing digit: moves to the top */}
      {isRolling && (
        <span key={`prev-${previous}`} className="odometer-digit odometer-digit--prev">
          {previous}
        </span>
      )}

      {/* Incoming digit: comes from the bottom */}
      <span
        key={`curr-${current}`}
        className={`odometer-digit odometer-digit--curr ${isRolling ? "is-entering" : ""}`}
      >
        {current}
      </span>

      {/* Subtle top/bottom slot vignettes for mechanical depth */}
      <div className="odometer-slot-overlay" />
    </div>
  );
}

function RollingGroup({ label, value }) {
  const digits = String(value).split("");

  return (
    <div className="odometer-group" data-unit={label.toLowerCase()}>
      <div className="odometer-slots-row">
        {digits.map((d, idx) => (
          <RollingDigit key={`${label}-${idx}-${digits.length}`} digit={d} />
        ))}
      </div>
      <span className="odometer-group-label">{label}</span>
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

  // Uniform digits: 3 digits for days (e.g. "115"), 2 digits for hours/mins/secs
  const daysVal = time
    ? String(time.days).padStart(Math.max(2, String(time.days).length), "0")
    : "00";
  const hoursVal = time ? String(time.hours).padStart(2, "0") : "00";
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
      >
        <RollingGroup label="DAYS" value={daysVal} />
        <RollingGroup label="HOURS" value={hoursVal} />
        <RollingGroup label="MINUTES" value={minsVal} />
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
