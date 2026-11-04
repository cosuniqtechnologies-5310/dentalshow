"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SparkleStar } from "@/components/BeaverMascot";

export default function ComingSoonClient() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Target date: February 6, 2027 09:00:00 IST (+05:30)
    const targetDate = new Date("2027-02-06T09:00:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cs-fit-wrapper">
      {/* Ambient Atmospheric Visual Backdrops */}
      <div className="cs-ambient-mesh" aria-hidden="true" />
      <div className="cs-dot-mesh" aria-hidden="true" />

      <div className="cs-fit-container">
        {/* ======================================================================
            1. TOP BRAND ROW: DENTAL SHOW LOGO + TNDTMA ORGANISER LOGO
            ====================================================================== */}
        <div className="cs-fit-topbar">
          <Link href="/" className="cs-fit-logo-link" aria-label="Dental Show 2027 Home">
            <Image
              src="/images/logos/dental_show_2027_logo.png"
              alt="Dental Show 2027 Logo"
              width={200}
              height={55}
              priority
              className="cs-fit-logo-img"
            />
          </Link>

          <span className="cs-fit-brand-divider" aria-hidden="true" />

          {/* TNDTMA Organiser Badge */}
          <div className="cs-fit-tndtma" title="Organised by Tamilnadu Dental Traders and Manufacturers Association">
            <div className="cs-fit-tndtma-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="cs-fit-tndtma-svg">
                <path d="M12 2L4 6v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V6l-8-4z" />
                <path d="M12 7v8M8 11h8" />
              </svg>
            </div>
            <div className="cs-fit-tndtma-info">
              <span className="cs-fit-tndtma-sub">Organised by</span>
              <span className="cs-fit-tndtma-main">TNDTMA</span>
              <span className="cs-fit-tndtma-full">Tamilnadu Dental Traders &amp; Manufacturers Association</span>
            </div>
          </div>
        </div>

        {/* ======================================================================
            2. MAIN STAGE: MASCOT + SPEECH BUBBLE + COUNTDOWN + SOCIAL ICONS
            ====================================================================== */}
        <div className="cs-fit-stage">
          {/* Left Column: Announcement & Countdown */}
          <div className="cs-fit-content">
            <div className="cs-fit-badge">
              <span className="cs-fit-pulse" aria-hidden="true" />
              <span>Flagship Edition • Dental Show 2027</span>
            </div>

            <h1 className="cs-fit-title">
              Our Brand New Page is <br />
              <span className="cs-fit-gradient">Coming Soon</span>
            </h1>

            <p className="cs-fit-subtitle">
              6th &amp; 7th February 2027 • Chennai Trade Centre (CTC), Halls 2, 3 &amp; 3A
            </p>

            {/* Live Countdown Timer */}
            <div className="cs-fit-countdown" aria-label="Countdown to Dental Show 2027">
              <div className="cs-fit-countdown-header">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Countdown to Flagship Event</span>
              </div>
              <div className="cs-fit-timer-grid">
                <div className="cs-fit-time-box">
                  <div className="cs-fit-time-num" suppressHydrationWarning>{timeLeft.days}</div>
                  <div className="cs-fit-time-lbl">Days</div>
                </div>
                <div className="cs-fit-time-box">
                  <div className="cs-fit-time-num" suppressHydrationWarning>{timeLeft.hours}</div>
                  <div className="cs-fit-time-lbl">Hours</div>
                </div>
                <div className="cs-fit-time-box">
                  <div className="cs-fit-time-num" suppressHydrationWarning>{timeLeft.minutes}</div>
                  <div className="cs-fit-time-lbl">Mins</div>
                </div>
                <div className="cs-fit-time-box">
                  <div className="cs-fit-time-num" suppressHydrationWarning>{timeLeft.seconds}</div>
                  <div className="cs-fit-time-lbl">Secs</div>
                </div>
              </div>
            </div>

            {/* Social Media Channels Row */}
            <div className="cs-fit-social-wrap">
              <span className="cs-fit-social-lead">Follow Us:</span>
              <div className="cs-fit-social-icons">
                {/* 1. Facebook */}
                <a
                  href="https://www.facebook.com/dentalshow.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-fit-social-btn cs-fit-social-btn--fb"
                  aria-label="Follow Dental Show on Facebook"
                  title="Facebook: dentalshow.in"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="cs-fit-social-text">Facebook</span>
                </a>

                {/* 2. Instagram */}
                <a
                  href="https://www.instagram.com/dentalshow.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-fit-social-btn cs-fit-social-btn--ig"
                  aria-label="Follow Dental Show on Instagram"
                  title="Instagram: @dentalshow.in"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="cs-fit-social-text">Instagram</span>
                </a>

                {/* 3. LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/dentalshowindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-fit-social-btn cs-fit-social-btn--li"
                  aria-label="Follow Dental Show on LinkedIn"
                  title="LinkedIn: dentalshowindia"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="cs-fit-social-text">LinkedIn</span>
                </a>

                {/* 4. YouTube */}
                <a
                  href="https://www.youtube.com/@dentalshow_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-fit-social-btn cs-fit-social-btn--yt"
                  aria-label="Subscribe to Dental Show on YouTube"
                  title="YouTube: @dentalshow_in"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="cs-fit-social-text">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mascot with Speech Bubble */}
          <div className="cs-fit-mascot-col">
            <div className="cs-fit-mascot-stage">
              {/* Radiant Ambient Spotlight */}
              <div className="cs-fit-aura" aria-hidden="true" />

              {/* Sparkle Stars */}
              <SparkleStar className="cs-sparkle cs-sparkle-1" size={22} color="#ffffff" />
              <SparkleStar className="cs-sparkle cs-sparkle-2" size={18} color="#3bbf8f" />
              <SparkleStar className="cs-sparkle cs-sparkle-3" size={20} color="#069dbf" />

              {/* Mascot Speech Bubble: "Our brand new page is Coming Soon" */}
              <div
                className="cs-fit-speech-bubble"
                role="note"
                aria-label="Mr. Dentalshow Mascot: Our brand new page is Coming Soon"
              >
                <div className="cs-fit-bubble-badge">
                  <span className="cs-fit-pulse-dot" aria-hidden="true" />
                  <span>Mr. Dentalshow</span>
                </div>
                <div className="cs-fit-bubble-quote">
                  “Our brand new page is Coming Soon”
                </div>
                <div className="cs-fit-bubble-sub">
                  See you at Chennai Trade Centre!
                </div>
                <div className="cs-fit-bubble-tail" aria-hidden="true" />
              </div>

              {/* Mascot Image */}
              <div className="cs-fit-mascot-img-wrap">
                <Image
                  src="/images/dental-show-mascot-new.png"
                  alt="Dental Show Official Mascot Mr. Dentalshow"
                  width={250}
                  height={350}
                  priority
                  className="cs-fit-mascot-img"
                />
              </div>

              {/* Pedestal Shadow */}
              <div className="cs-fit-mascot-shadow" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Bottom subtle accreditation note */}
        <div className="cs-fit-bottom-bar">
          <span>Dental Show 2027 • Accredited by Tamilnadu Dental Traders and Manufacturers Association (TNDTMA)</span>
        </div>
      </div>
    </div>
  );
}
