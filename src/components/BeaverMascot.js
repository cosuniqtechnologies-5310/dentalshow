"use client";

import Image from "next/image";

export function SparkleStar({ className = "", size = 20, color = "#ffffff" }) {
  return (
    <svg
      className={`magical-sparkle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 0 C12 6.5, 17.5 12, 24 12 C17.5 12, 12 17.5, 12 24 C12 17.5, 6.5 12, 0 12 C6.5 12, 12 6.5, 12 0 Z"
        fill={color}
      />
      <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
    </svg>
  );
}

export default function BeaverMascot({ size = 310, className = "", showCards = true, showChatbox = undefined }) {
  const width = typeof size === "number" ? size : 310;
  const height = Math.round(width * (1920 / 1359));
  const displayChatbox = showChatbox !== undefined ? showChatbox : showCards;

  return (
    <div
      className={`beaver-mascot-wrapper ${className}`}
      role="img"
      aria-label="Dental Show 2027 Mascot Mr. Dentalshow - See, Touch, Feel, Experience"
    >
      <div className="mascot-stage" style={{ width, maxWidth: "100%" }}>
        {/* Soft atmospheric spotlight behind character */}
        <div className="mascot-ambient-aura" aria-hidden="true" />

        {/* MAGICAL GLITTERS & BACKGROUND SPARKLES */}
        <div className="mascot-magical-glitters" aria-hidden="true">
          {/* 4-Pointed Dental Sparkle Stars */}
          <SparkleStar className="sparkle-1" size={24} color="#ffffff" />
          <SparkleStar className="sparkle-2" size={19} color="#3BBF8F" />
          <SparkleStar className="sparkle-3" size={22} color="#069DBF" />
          <SparkleStar className="sparkle-4" size={17} color="#ffffff" />
          <SparkleStar className="sparkle-5" size={18} color="#3BBF8F" />
          <SparkleStar className="sparkle-6" size={15} color="#069DBF" />

          {/* Floating Radiant Glitter Dust */}
          <span className="glitter-dust dust-1" />
          <span className="glitter-dust dust-2" />
          <span className="glitter-dust dust-3" />
          <span className="glitter-dust dust-4" />
          <span className="glitter-dust dust-5" />
        </div>

        {/* BRAND NEW CONVERSATIONAL CHAT BOX: Floating cleanly above waving hand */}
        {displayChatbox && (
          <div className="mascot-chatbox mascot-chatbox--modern" role="status" aria-label="Mr. Dentalshow Mascot Dialogue">
            {/* Header: Avatar + Identity + Live Edition */}
            <div className="chatbox-header-row">
              <div className="chatbox-identity">
                <div className="chatbox-mascot-avatar" aria-hidden="true">
                  <Image
                    src="/images/dental-show-mascot-new.png"
                    alt="Mr. Dentalshow"
                    width={28}
                    height={28}
                    className="chatbox-mascot-img"
                  />
                </div>
                <div className="chatbox-identity-text">
                  <span className="chatbox-name" style={{ color: "#023E73" }}>Mr. Dentalshow</span>
                  <span className="chatbox-tagline" style={{ color: "#0d8258" }}>Official Mascot</span>
                </div>
              </div>
              <span className="chatbox-live-badge" style={{ color: "#0d8258" }}>
                <span className="live-pulse-dot" aria-hidden="true" />
                <span>LIVE</span>
              </span>
            </div>

            {/* Dialogue Message */}
            <div className="chatbox-speech-content">
              <p className="chatbox-speech-text" style={{ color: "#1e293b" }}>
                “See you at <strong style={{ color: "#023E73" }}>Chennai Trade Centre</strong>! Feb 6–7, 2027”
              </p>
            </div>

            {/* Venue & Hall Tag */}
            <div className="chatbox-venue-row">
              <span className="chatbox-venue-pill" style={{ color: "#0369a1" }}>
                <span className="chatbox-pin-dot" aria-hidden="true">📍</span>
                <span>New Halls 2, 3 &amp; 3A · CTC</span>
              </span>
            </div>
          </div>
        )}

        {/* CENTER: Free-standing Beaver Doctor - 100% Unobstructed Face & Body */}
        <div className="mascot-character-core">
          <Image
            src="/images/dental-show-mascot-new.png"
            alt="Dental Show 2027 Mascot Mr. Dentalshow"
            width={width}
            height={height}
            priority
            className="mascot-cutout-img"
          />
          <div className="mascot-pedestal-shadow" aria-hidden="true" />
        </div>

        {/* 3 DISTINCT CARDS ORBITING AROUND THE MASCOT */}
        {showCards && (
          <div className="mascot-orbit-cards-group" aria-label="Expo Highlights and Scale">
            {/* Card 1: Top-Right — 1000+ Dental Product Ranges */}
            <div
              className="mascot-orbit-card mascot-orbit-card--1"
              aria-label="1000+ Dental Product Ranges"
            >
              <div className="orbit-card-inner">
                <div className="orbit-card-num-row">
                  <span className="orbit-card-num">1000+</span>
                  <span className="orbit-card-icon" aria-hidden="true">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </span>
                </div>
                <span className="orbit-card-label">Dental product ranges</span>
              </div>
            </div>

            {/* Card 2: Mid/Bottom-Right — 300+ Stalls */}
            <div
              className="mascot-orbit-card mascot-orbit-card--2"
              aria-label="300+ Stalls"
            >
              <div className="orbit-card-inner">
                <div className="orbit-card-num-row">
                  <span className="orbit-card-num">300+</span>
                  <span className="orbit-card-icon" aria-hidden="true">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </span>
                </div>
                <span className="orbit-card-label">Stalls</span>
              </div>
            </div>

            {/* Card 3: Bottom-Left — New product launch and special offers */}
            <div
              className="mascot-orbit-card mascot-orbit-card--3"
              aria-label="Expo Highlight - New product launch and special offers"
            >
              <div className="orbit-card-inner">
                <div className="orbit-card-tag">
                  <span className="orbit-card-dot" aria-hidden="true" />
                  <span>EXPO HIGHLIGHT</span>
                </div>
                <div className="orbit-card-offer-text">
                  New product launches &amp; special offers
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
