"use client";

import { useState, useEffect, useRef } from "react";
import Icon from "@/components/Icon";

const defaultMilestones = [
  {
    year: "Around 2000",
    shortYear: "~2000",
    stageNum: "01",
    badge: "FOUNDING ERA",
    tabLabel: "Founding Vision",
    title: "A Vision Born in Tamil Nadu",
    tagline: "Uniting the Dental Trade Ecosystem",
    text: "A forward-thinking group of dental trade leaders envisioned a united body to strengthen Tamil Nadu's dental trade ecosystem, bridge technological gaps, and support clinical practitioners with accessible world-class equipment.",
    stat: "1st Vision Committee",
    statDesc: "Trade Leaders Convened",
    icon: "star",
    highlights: ["Trade Unity", "Ecosystem Vision", "Practitioner Focus"],
  },
  {
    year: "2005",
    shortYear: "2005",
    stageNum: "02",
    badge: "HISTORIC LAUNCH",
    tabLabel: "Inaugural Expo",
    title: "The First Dental Show is Born",
    tagline: "Official Inception of TNDTMA",
    text: "Official formation of the Tamil Nadu Dental Trade & Manufacturers Association and the triumphant inaugural Dental Show in 2005, putting modern diagnostics and equipment directly within reach of regional dental clinics.",
    stat: "TNDTMA Established",
    statDesc: "Inaugural State Expo",
    icon: "store",
    highlights: ["Inaugural Expo", "Accessibility", "Direct Local Reach"],
  },
  {
    year: "2015",
    shortYear: "2015",
    stageNum: "03",
    badge: "REGIONAL SCALE",
    tabLabel: "CTC Expansion",
    title: "Expansion to Chennai Trade Centre",
    tagline: "South India's Flagship Convention",
    text: "Dental Show relocated to Chennai Trade Centre, expanding floor capacity to accommodate leading multinational dental conglomerates and solidifying its status as South India's premier annual dental gathering.",
    stat: "3,500+ Clinicians",
    statDesc: "CTC Flagship Venue",
    icon: "tooth",
    highlights: ["CTC Trade Centre", "CAD/CAM Influx", "Multi-Hall Expansion"],
  },
  {
    year: "2025",
    shortYear: "2025",
    stageNum: "04",
    badge: "20TH ANNIVERSARY",
    tabLabel: "Two Decades",
    title: "Two Decades of Clinical Excellence",
    tagline: "180+ Global Exhibitors & 4,800+ Delegates",
    text: "Celebrated two decades of continuous leadership with over 180 international brand pavilions, 4,800+ clinical delegates, and the Student Dental Excellence scholarship programme.",
    stat: "20 Years of Impact",
    statDesc: "180+ Brand Pavilions",
    icon: "users",
    highlights: ["20th Landmark", "Student Excellence", "Global Brand Pavilions"],
  },
  {
    year: "2027",
    shortYear: "2027",
    stageNum: "05",
    badge: "THE GRAND CHAPTER",
    tabLabel: "Grand Chapter 2027",
    title: "Dental Show 2027: Next-Gen Innovation",
    tagline: "CTC New Halls 2, 3 & 3A · 10,000+ sq.m",
    text: "Taking place across CTC's newly expanded Halls 2, 3 & 3A. Featuring 250+ global exhibitors, 6,000+ trade delegates, live CAD/CAM digital workflows, and cutting-edge implantology masterclasses.",
    stat: "10,000+ sq.m · 250+ Brands",
    statDesc: "6,000+ Trade Delegates",
    icon: "sparkle",
    highlights: ["New Halls 2, 3 & 3A", "6,000+ Delegates", "CAD/CAM Masterclasses"],
  },
];

export default function InteractiveTimeline({ milestones = defaultMilestones }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  const isHoveredRef = useRef(false);

  const activeMilestone = milestones[activeIndex] || milestones[0];
  const total = milestones.length;

  // Auto-play timer with continuous progress bar (4.5s per step)
  useEffect(() => {
    if (!isPlaying) {
      clearInterval(progressIntervalRef.current);
      return;
    }

    const duration = 4500;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      if (isHoveredRef.current) return; // Pause on hover
      setProgress((prev) => {
        if (prev + step >= 100) {
          setActiveIndex((current) => (current + 1) % total);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      clearInterval(progressIntervalRef.current);
    };
  }, [activeIndex, isPlaying, total]);

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % total);
    setProgress(0);
  };

  // Percentage of the horizontal connection thread line that is active
  const threadProgressPercent = total > 1 ? (activeIndex / (total - 1)) * 100 : 0;

  return (
    <div
      className="interactive-timeline-wrapper"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      role="region"
      aria-label="Two Decades Timeline"
    >
      {/* 1. TOP SPOTLIGHT CARD (Active Milestone Narrative & Stats) */}
      <div className="timeline-spotlight">
        <div className="timeline-spotlight-inner" key={activeMilestone.year}>
          <div className="timeline-spotlight-top">
            <div className="timeline-milestone-pill-wrap">
              <span className="timeline-milestone-pill">
                <span className="live-pulse-dot" aria-hidden="true" />
                <span>{activeMilestone.badge}</span>
              </span>
              <span className="timeline-stage-counter">
                STAGE {activeMilestone.stageNum} OF 0{total}
              </span>
            </div>

            <div className="timeline-autoplay-controls">
              <button
                type="button"
                className="timeline-ctrl-btn"
                onClick={handlePrev}
                aria-label="Previous milestone"
                title="Previous milestone"
              >
                ←
              </button>
              <button
                type="button"
                className="timeline-ctrl-btn timeline-play-btn"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
                title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>
              <button
                type="button"
                className="timeline-ctrl-btn"
                onClick={handleNext}
                aria-label="Next milestone"
                title="Next milestone"
              >
                →
              </button>
              <span className="timeline-autoplay-status">
                {isPlaying ? "AUTO-CYCLING" : "PAUSED"}
              </span>
            </div>
          </div>

          <div className="timeline-spotlight-grid">
            <div className="timeline-spotlight-main">
              <div className="timeline-spotlight-year-headline">
                <span className="timeline-spotlight-year">{activeMilestone.year}</span>
                <span className="timeline-spotlight-dot">/</span>
                <span className="timeline-spotlight-tagline">{activeMilestone.tagline}</span>
              </div>
              <h3 className="timeline-spotlight-title">{activeMilestone.title}</h3>
              <p className="timeline-spotlight-text">{activeMilestone.text}</p>
            </div>

            <div className="timeline-spotlight-aside">
              <div className="timeline-stat-chip">
                <div className="timeline-stat-icon-wrap">
                  <Icon name={activeMilestone.icon || "sparkle"} size={22} className="timeline-stat-icon" />
                </div>
                <div className="timeline-stat-text">
                  <span className="stat-label">MILESTONE IMPACT</span>
                  <strong className="stat-val">{activeMilestone.stat}</strong>
                  <span className="stat-sub">{activeMilestone.statDesc}</span>
                </div>
              </div>
              <div className="timeline-highlight-pills">
                {activeMilestone.highlights?.map((h, i) => (
                  <span key={i} className="timeline-highlight-pill">
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Autoplay Progress Bar */}
        <div className="timeline-progress-track">
          <div
            className="timeline-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 2. MIDDLE HORIZONTAL MILESTONE COLUMNS (Screenshot Layout) */}
      <div className="timeline-columns-stage">
        <div className="timeline-columns-grid">
          {milestones.map((m, idx) => {
            const isActive = idx === activeIndex;
            const isPassed = idx < activeIndex;

            return (
              <div
                key={m.year}
                className={`timeline-column-card ${isActive ? "is-active" : ""} ${isPassed ? "is-passed" : ""}`}
                onClick={() => handleSelect(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(idx);
                  }
                }}
                aria-label={`Milestone ${m.year}: ${m.title}`}
              >
                <div className="timeline-card-header">
                  <div className="timeline-card-icon-wrap">
                    <Icon name={m.icon || "sparkle"} size={18} />
                  </div>
                  <span className="timeline-card-year-badge">{m.shortYear || m.year}</span>
                </div>
                <h4 className="timeline-card-title">{m.title}</h4>
                <p className="timeline-card-desc">{m.tagline}</p>
                <div className="timeline-card-active-indicator">
                  <span className="timeline-card-active-bar" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. FULL-SCREEN CONNECTION THREAD LINE */}
      <div className="timeline-fullscreen-thread">
        <div className="timeline-thread-track-wrap">
          {/* Base Track Line */}
          <div className="timeline-thread-base-line" />
          
          {/* Luminous Active Progress Fill */}
          <div
            className="timeline-thread-active-line"
            style={{ width: `${threadProgressPercent}%` }}
          />

          {/* Node Checkpoints along the thread */}
          <div className="timeline-thread-nodes">
            {milestones.map((m, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx < activeIndex;
              const percentPosition = total > 1 ? (idx / (total - 1)) * 100 : 0;

              return (
                <button
                  key={m.year}
                  type="button"
                  className={`timeline-thread-node-dot ${isActive ? "is-active" : ""} ${isPassed ? "is-passed" : ""}`}
                  style={{ left: `${percentPosition}%` }}
                  onClick={() => handleSelect(idx)}
                  aria-label={`Jump to ${m.year}`}
                  title={`${m.year}: ${m.title}`}
                >
                  <span className="timeline-node-core" />
                  {isActive && <span className="timeline-node-pulse-ring" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. BOTTOM LIST OF YEARS AS TABS ("bottom list of year like tab") */}
      <div className="timeline-bottom-tabs-dock" role="tablist" aria-label="Timeline Year Tabs">
        {milestones.map((m, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;

          return (
            <button
              key={m.year}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`timeline-year-tab-btn ${isActive ? "is-active" : ""} ${isPassed ? "is-passed" : ""}`}
              onClick={() => handleSelect(idx)}
            >
              <div className="timeline-tab-pip" />
              <div className="timeline-tab-content">
                <span className="timeline-tab-year">{m.shortYear || m.year}</span>
                <span className="timeline-tab-label">{m.tabLabel || m.badge}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 5. CONTINUOUS LOOP CYCLE THREAD & TICKER (Screenshot Loop Tracks) */}
      <div className="timeline-continuous-loop-wrap">
        <div className="timeline-loop-track-indicator">
          <span className="timeline-loop-arrow-left">‹‹‹</span>
          <span className="timeline-loop-text">
            Continuous Evolution: <strong>~2000</strong> Vision ➔ <strong>2005</strong> Inception ➔ <strong>2015</strong> CTC Scale ➔ <strong>2025</strong> 20th Jubilee ➔ <strong>2027</strong> Grand Chapter
          </span>
          <span className="timeline-loop-arrow-right">›››</span>
        </div>
      </div>
    </div>
  );
}
