"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SparkleStar } from "@/components/BeaverMascot";
import { site } from "@/data/site";

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
    <div className="cs-page-wrapper">
      {/* Ambient Atmospheric Visual Backdrops */}
      <div className="cs-ambient-mesh" aria-hidden="true" />
      <div className="cs-dot-mesh" aria-hidden="true" />

      {/* ==========================================================================
          1. TOP BRAND HEADER: DENTAL SHOW LOGO + TNDTMA LOGO & EMBLEM
          ========================================================================== */}
      <header className="cs-header" role="banner">
        <div className="container cs-header-inner">
          {/* Brand Cluster: Dental Show Logo & TNDTMA Seal */}
          <div className="cs-brand-cluster">
            {/* Dental Show 2027 Logo */}
            <Link href="/" className="cs-logo-link" aria-label="Dental Show 2027 Home">
              <Image
                src="/images/logos/dental_show_2027_logo.png"
                alt="Dental Show 2027 Logo"
                width={220}
                height={64}
                priority
                className="cs-logo-img"
              />
            </Link>

            <span className="cs-brand-divider" aria-hidden="true" />

            {/* Official TNDTMA Organiser Brand Seal */}
            <div className="cs-tndtma-seal" aria-label="Organised by Tamilnadu Dental Traders and Manufacturers Association">
              <div className="cs-tndtma-badge" title="TNDTMA Official Accredited Seal">
                <svg className="cs-tndtma-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L4 6v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V6l-8-4z" />
                  <path d="M12 7v8M8 11h8" />
                </svg>
              </div>
              <div className="cs-tndtma-text">
                <span className="cs-tndtma-sup">Organised by</span>
                <span className="cs-tndtma-acronym">TNDTMA</span>
                <span className="cs-tndtma-fullname">Tamilnadu Dental Traders &amp; Manufacturers Association</span>
              </div>
            </div>
          </div>

          {/* Quick Event Chip */}
          <div className="cs-header-event-chip">
            <span className="cs-pulse-dot" aria-hidden="true" />
            <span>6th &amp; 7th Feb 2027 • Chennai Trade Centre</span>
          </div>
        </div>
      </header>

      {/* ==========================================================================
          2. MAIN COMING SOON HERO: CONTENT, COUNTDOWN & MR. DENTALSHOW MASCOT
          ========================================================================== */}
      <main className="cs-hero" role="main">
        <div className="container">
          <div className="cs-hero-grid">
            {/* Left Column: Announcement, Countdown & Highlights */}
            <div className="cs-hero-content">
              {/* Eyebrow Pill */}
              <div className="cs-eyebrow-pill">
                <span className="cs-pulse-dot" aria-hidden="true" />
                <span>Something Big Is Coming • Dental Show 2027</span>
              </div>

              {/* Main Headline */}
              <h1 className="cs-hero-title">
                Our Brand New Page is <br />
                <span className="cs-gradient-text">Coming Soon</span>
              </h1>

              {/* Sub-paragraph */}
              <p className="cs-hero-desc">
                We are crafting an extraordinary new digital platform for South India&apos;s largest dental exhibition. Stay tuned for visitor registrations, interactive stall layouts, and scientific session schedules.
              </p>

              {/* Live Countdown Timer */}
              <div className="cs-countdown-card" aria-label="Countdown to Dental Show 2027">
                <div className="cs-countdown-label">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Countdown to Flagship Edition 2027</span>
                </div>
                <div className="cs-countdown-grid">
                  <div className="cs-countdown-box">
                    <div className="cs-countdown-num" suppressHydrationWarning>{timeLeft.days}</div>
                    <div className="cs-countdown-unit">Days</div>
                  </div>
                  <div className="cs-countdown-box">
                    <div className="cs-countdown-num" suppressHydrationWarning>{timeLeft.hours}</div>
                    <div className="cs-countdown-unit">Hours</div>
                  </div>
                  <div className="cs-countdown-box">
                    <div className="cs-countdown-num" suppressHydrationWarning>{timeLeft.minutes}</div>
                    <div className="cs-countdown-unit">Minutes</div>
                  </div>
                  <div className="cs-countdown-box">
                    <div className="cs-countdown-num" suppressHydrationWarning>{timeLeft.seconds}</div>
                    <div className="cs-countdown-unit">Seconds</div>
                  </div>
                </div>
              </div>

              {/* Key Event Highlights Ribbon */}
              <div className="cs-features-row">
                <div className="cs-feature-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>6th &amp; 7th February 2027</span>
                </div>

                <div className="cs-feature-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Chennai Trade Centre (CTC)</span>
                </div>

                <div className="cs-feature-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>New Halls 2, 3 &amp; 3A</span>
                </div>

                <div className="cs-feature-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>300+ Stalls · 10,000+ Trade Delegates</span>
                </div>
              </div>

              {/* Secretariat Direct Contact Links */}
              <div className="cs-contact-strip">
                <span>Direct Secretariat Inquiries:</span>
                <a href={`mailto:${site.email}`} className="cs-contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{site.email}</span>
                </a>
                <span>·</span>
                <a href={`tel:${site.mobilePhone.replace(/\s+/g, "")}`} className="cs-contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Mr. Dentalshow Mascot with Speech Bubble */}
            <div className="cs-hero-mascot-col">
              <div className="cs-mascot-stage">
                {/* Radiant Ambient Spotlight Aura */}
                <div className="cs-mascot-aura" aria-hidden="true" />

                {/* Animated Magical Sparkle Stars */}
                <SparkleStar className="cs-sparkle cs-sparkle-1" size={24} color="#ffffff" />
                <SparkleStar className="cs-sparkle cs-sparkle-2" size={20} color="#3bbf8f" />
                <SparkleStar className="cs-sparkle cs-sparkle-3" size={22} color="#069dbf" />
                <SparkleStar className="cs-sparkle cs-sparkle-4" size={18} color="#ffffff" />

                {/* Mascot Speech Bubble: "Our brand new page is Coming Soon" */}
                <div
                  className="cs-mascot-speech-bubble"
                  role="note"
                  aria-label="Mr. Dentalshow Mascot: Our brand new page is Coming Soon"
                >
                  <div className="cs-bubble-header">
                    <span className="cs-pulse-dot" aria-hidden="true" />
                    <span className="cs-bubble-badge">Mr. Dentalshow · Official Mascot</span>
                  </div>
                  <div className="cs-bubble-quote">
                    “Our brand new page is Coming Soon”
                  </div>
                  <div className="cs-bubble-sub">
                    See you at Chennai Trade Centre! Feb 6–7, 2027
                  </div>
                  <div className="cs-bubble-tail" aria-hidden="true" />
                </div>

                {/* Floating Mascot Character */}
                <div className="cs-mascot-character-wrap">
                  <Image
                    src="/images/dental-show-mascot-new.png"
                    alt="Dental Show Official Mascot Mr. Dentalshow"
                    width={270}
                    height={381}
                    priority
                    className="cs-mascot-img"
                  />
                </div>

                {/* Pedestal Ground Shadow */}
                <div className="cs-mascot-shadow" aria-hidden="true" />

                {/* Docked Mascot Pill */}
                <div className="cs-mascot-pill">
                  <span className="cs-mascot-pill-dot" aria-hidden="true" />
                  <span>Official Mascot · Mr. Dentalshow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ==========================================================================
          3. OFFICIAL SOCIAL CHANNELS SECTION
          ========================================================================== */}
      <section className="cs-social-section" aria-label="Official Social Channels">
        <div className="container">
          <div className="cs-social-header">
            <h2 className="cs-social-title">Follow Us on Official Social Channels</h2>
            <p className="cs-social-subtitle">
              Be the first to know when registrations, booth layouts, and event highlights go live.
            </p>
          </div>

          <div className="cs-social-grid">
            {/* 1. Facebook */}
            <a
              href="https://www.facebook.com/dentalshow.in"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-social-card cs-social-card--facebook"
              aria-label="Follow Dental Show on Facebook"
            >
              <div className="cs-social-icon-wrap cs-icon-fb">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="cs-social-text">
                <span className="cs-social-platform">Facebook</span>
                <span className="cs-social-handle">dentalshow.in</span>
              </div>
              <svg className="cs-social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>

            {/* 2. Instagram */}
            <a
              href="https://www.instagram.com/dentalshow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-social-card cs-social-card--instagram"
              aria-label="Follow Dental Show on Instagram"
            >
              <div className="cs-social-icon-wrap cs-icon-ig">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="cs-social-text">
                <span className="cs-social-platform">Instagram</span>
                <span className="cs-social-handle">@dentalshow.in</span>
              </div>
              <svg className="cs-social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>

            {/* 3. LinkedIn */}
            <a
              href="https://www.linkedin.com/company/dentalshowindia"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-social-card cs-social-card--linkedin"
              aria-label="Follow Dental Show on LinkedIn"
            >
              <div className="cs-social-icon-wrap cs-icon-li">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="cs-social-text">
                <span className="cs-social-platform">LinkedIn</span>
                <span className="cs-social-handle">dentalshowindia</span>
              </div>
              <svg className="cs-social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>

            {/* 4. YouTube */}
            <a
              href="https://www.youtube.com/@dentalshow_in"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-social-card cs-social-card--youtube"
              aria-label="Subscribe to Dental Show on YouTube"
            >
              <div className="cs-social-icon-wrap cs-icon-yt">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="cs-social-text">
                <span className="cs-social-platform">YouTube</span>
                <span className="cs-social-handle">@dentalshow_in</span>
              </div>
              <svg className="cs-social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4. FOOTER: ACCREDITATION & COPYRIGHT
          ========================================================================== */}
      <footer className="cs-footer" role="contentinfo">
        <div className="container cs-footer-inner">
          <div className="cs-footer-text">
            <strong>Dental Show 2027</strong> · Organised by <strong>Tamilnadu Dental Traders and Manufacturers Association (TNDTMA)</strong>.
            <br />
            Chennai Trade Centre New Halls 2, 3 &amp; 3A · Nandambakkam, Chennai 600 089.
          </div>
          <div className="cs-footer-badge">
            <span>✓ TNDTMA Accredited Event</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
