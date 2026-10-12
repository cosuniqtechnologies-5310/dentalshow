"use client";

import Image from "next/image";

function SparkleStar({ className = "", size = 20, color = "#ffffff" }) {
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

export default function BeaverMascot({ size = 310, className = "" }) {
  const width = typeof size === "number" ? size : 310;
  const height = Math.round(width * (1491 / 1055));

  return (
    <div
      className={`beaver-mascot-wrapper ${className}`}
      role="img"
      aria-label="Dental Show 2027 Mascot - See, Touch, Feel, Experience"
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

        {/* SPEECH BUBBLE: Floating cleanly to the left, 100% clear of animal's face */}
        <div className="mascot-speech-bubble">
          <div className="speech-badge-pill">
            <span className="live-pulse-dot" aria-hidden="true" />
            <span>6TH &amp; 7TH FEB 2027</span>
          </div>
          <p className="speech-quote">“See • Touch • Feel • Experience”</p>
          <span className="speech-sub">South India&apos;s Premier Expo</span>

          {/* Curved tail pointing toward beaver's cheerful face */}
          <div className="speech-tail-right" aria-hidden="true">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2 C6 5, 13 10, 20 16 C13 13, 6 7, 0 6 Z"
                fill="#ffffff"
              />
              <path
                d="M0 2 C6 5, 13 10, 20 16"
                stroke="#069DBF"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M20 16 C13 13, 6 7, 0 6"
                stroke="#069DBF"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* CENTER: Free-standing Beaver Doctor - 100% Unobstructed Face & Body */}
        <div className="mascot-character-core">
          <Image
            src="/images/friendly-beaver-dentist-mascot.png"
            alt="Dental Show 2027 Beaver Mascot"
            width={width}
            height={height}
            priority
            className="mascot-cutout-img"
          />
          <div className="mascot-pedestal-shadow" aria-hidden="true" />
        </div>

        {/* FLOATING INFO BADGE - Docked cleanly near thumbs-up hand */}
        <div className="mascot-info-badge">
          <div className="info-badge-head">
            <span className="info-badge-dot" aria-hidden="true" />
            <span className="info-badge-tag">CHENNAI TRADE CENTRE</span>
          </div>
          <div className="info-badge-title">New Hall 2, 3 &amp; 3A</div>
          <div className="info-badge-stats">250+ Exhibitors · 6k+ Peers</div>
        </div>
      </div>
    </div>
  );
}

