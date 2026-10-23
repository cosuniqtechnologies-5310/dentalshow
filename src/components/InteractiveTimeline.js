"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

const defaultMilestones = [
  {
    year: "Around 2000",
    shortYear: "2000",
    stageNum: "01",
    guideBadge: "FOUNDING STORY",
    tabLabel: "Shared Vision",
    milestoneBadge: "Founding Vision Marker",
    badge: "ORIGIN ERA",
    tagline: "UNITING THE DENTAL COMMUNITY",
    title: "A Shared Vision for Tamil Nadu",
    text: "Around 2000, dental trade leaders envisioned a united community to strengthen Tamil Nadu's dental industry, bridge technology gaps, and help practitioners access quality equipment.",
    impactLabel: "FOUNDING IMPACT",
    stat: "A United Trade Community",
    statDesc: "Dental Leaders United",
    focusLabel: "FOUNDING IDEAS & PRIORITIES",
    icon: "star",
    highlights: ["Trade Unity", "Shared Progress", "Practitioner Support"],
  },
  {
    year: "2005",
    shortYear: "2005",
    stageNum: "02",
    guideBadge: "DENTAL SHOW HISTORY",
    tabLabel: "The First Dental Show",
    milestoneBadge: "A Historic Milestone",
    badge: "HISTORIC BEGINNING",
    tagline: "TNDTMA AND THE FIRST DENTAL SHOW",
    title: "A Vision Becomes Reality",
    text: "TNDTMA was registered in 2005, marking a significant step towards a united dental trade community. That same year, the first Dental Show brought the shared vision to life, creating a platform for connection, discovery and progress.",
    impactLabel: "MILESTONE IMPACT",
    stat: "TNDTMA Registered",
    statDesc: "First Dental Show Held",
    focusLabel: "KEY FOCUS & ACHIEVEMENTS",
    icon: "store",
    highlights: ["First Dental Show", "Dental Trade Unity", "Community Connection"],
  },
  {
    year: "2015",
    shortYear: "2015",
    stageNum: "03",
    guideBadge: "DENTAL SHOW HISTORY",
    tabLabel: "A Decade of Progress",
    milestoneBadge: "A Decade of Growth",
    badge: "A DECADE OF PROGRESS",
    tagline: "BUILDING ON A SHARED VISION",
    title: "A Growing Platform for Dentistry",
    text: "Dental Show continued its journey of bringing the dental trade community together. Building on the vision established in its early years, the event created opportunities for industry connections, product discovery and the exchange of ideas across the dental ecosystem.",
    impactLabel: "MILESTONE IMPACT",
    stat: "A Growing Community",
    statDesc: "Connecting Dental Professionals",
    focusLabel: "KEY FOCUS & ACHIEVEMENTS",
    icon: "tooth",
    highlights: ["Community Connections", "Product Discovery", "Industry Collaboration"],
  },
  {
    year: "2025",
    shortYear: "2025",
    stageNum: "04",
    guideBadge: "DENTAL SHOW HISTORY",
    tabLabel: "Two Decades of Progress",
    milestoneBadge: "A Legacy to Celebrate",
    badge: "TWO DECADES OF IMPACT",
    tagline: "CELEBRATING TWO DECADES OF DENTAL SHOW",
    title: "Two Decades of Connecting Dentistry",
    text: "Celebrating two decades of journey, Dental Show continues to bring the dental community together through innovation, professional connections and shared learning. Its legacy reflects a continuing commitment to supporting dental professionals and inspiring the next generation of dentistry.",
    impactLabel: "MILESTONE IMPACT",
    stat: "Two Decades of Progress",
    statDesc: "A Growing Dental Community",
    focusLabel: "KEY FOCUS & ACHIEVEMENTS",
    icon: "users",
    highlights: ["Legacy & Growth", "Future Dentists", "Dental Innovation"],
  },
  {
    year: "2027",
    shortYear: "2027",
    stageNum: "05",
    guideBadge: "DENTAL SHOW 2027",
    tabLabel: "The Next Chapter",
    milestoneBadge: "Discover What's Next",
    badge: "THE FUTURE CHAPTER",
    tagline: "CHENNAI TRADE CENTRE · 6–7 FEBRUARY",
    title: "Dental Show 2027: Discover What's Next",
    text: "Bringing the dental community together on 6–7 February 2027 at Chennai Trade Centre, Dental Show invites dentists, students and industry professionals to discover innovations, exchange ideas and explore new possibilities for the future of dentistry.",
    impactLabel: "THE DENTAL SHOW EXPERIENCE",
    stat: "A Community of Possibilities",
    statDesc: "Discover. Connect. Grow.",
    focusLabel: "WHAT AWAITS YOU",
    icon: "sparkle",
    highlights: ["Dental Innovations", "Professional Connections", "Learning & Discovery"],
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
      if (isHoveredRef.current) return;
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
      {/* 1. FULL-SCREEN 100VW CONNECTING LINE WITH MID-CONNECTED YEAR PILLS (Positioned Above Showcase Card) */}
      <div className="timeline-connected-thread-section">
        {/* Full-bleed 100vw Horizontal Line */}
        <div className="timeline-thread-line-100vw" />

        <div className="timeline-thread-track-container">
          {/* Active progress segment on the line */}
          <div
            className="timeline-thread-line-active"
            style={{ width: `${threadProgressPercent}%` }}
          />

          {/* Year Pills directly connected in the middle */}
          <div className="timeline-year-pills-row" role="tablist" aria-label="Milestone Years">
            {milestones.map((m, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx < activeIndex;

              return (
                <button
                  key={m.year}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`timeline-year-pill-btn ${isActive ? "is-active" : ""} ${isPassed ? "is-passed" : ""}`}
                  onClick={() => handleSelect(idx)}
                  title={`${m.year}: ${m.title}`}
                >
                  <span className="year-pill-number">{m.shortYear || m.year}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. UNIFIED PANORAMIC MASTER STAGE */}
      <div className="timeline-master-showcase-card">
        {/* Left Stage: Mascot Exhibition Guide & Podium */}
        <div className="timeline-stage-host-alcove">
          <div className="stage-host-header" key={`host-kicker-${activeMilestone.year}`}>
            <div className="stage-host-badge">
              <span className="live-pulse-dot" aria-hidden="true" />
              <span>{activeMilestone.guideBadge || "EXHIBITION GUIDE"}</span>
            </div>
            <div className="stage-host-year-callout">{activeMilestone.year}</div>
            <span className="stage-host-label">{activeMilestone.tabLabel}</span>
          </div>

          <div className="stage-host-podium-wrap">
            <div className="stage-host-glow-ring" aria-hidden="true" />
            <Image
              src="/images/dental-show-mascot-new.png"
              alt="Dental Show Mascot Guide"
              width={200}
              height={282}
              priority
              className="stage-host-mascot-img"
            />
          </div>

          <div className="stage-host-footer-pill">
            <span className="host-dot-blue" aria-hidden="true" />
            <span>{activeMilestone.milestoneBadge || "Official Expo Milestone"}</span>
          </div>
        </div>

        {/* Right Panel: Executive Milestone Showcase */}
        <div className="timeline-stage-content-panel" key={activeMilestone.year}>
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

            <div className="timeline-spotlight-body">
              <div className="timeline-spotlight-year-headline">
                <span className="timeline-spotlight-year">{activeMilestone.year}</span>
                <span className="timeline-spotlight-dot">/</span>
                <span className="timeline-spotlight-tagline">{activeMilestone.tagline}</span>
              </div>
              <h3 className="timeline-spotlight-title">{activeMilestone.title}</h3>
              <p className="timeline-spotlight-text">{activeMilestone.text}</p>
            </div>

            <div className="timeline-spotlight-footer-grid">
              <div className="timeline-stat-chip">
                <div className="timeline-stat-icon-wrap">
                  <Icon name={activeMilestone.icon || "sparkle"} size={20} className="timeline-stat-icon" />
                </div>
                <div className="timeline-stat-text">
                  <span className="stat-label">{activeMilestone.impactLabel || "MILESTONE IMPACT"}</span>
                  <strong className="stat-val">{activeMilestone.stat}</strong>
                  <span className="stat-sub">{activeMilestone.statDesc}</span>
                </div>
              </div>

              <div className="timeline-highlights-panel">
                <span className="highlights-header-label">{activeMilestone.focusLabel || "KEY FOCUS & ACHIEVEMENTS"}</span>
                <div className="timeline-highlight-pills">
                  {activeMilestone.highlights?.map((h, i) => (
                    <span key={i} className="timeline-highlight-pill">
                      <span className="pill-sparkle-blue">✦</span> {h}
                    </span>
                  ))}
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
      </div>
    </div>
  );
}
