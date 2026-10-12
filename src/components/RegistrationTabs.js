"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function RegistrationTabs() {
  const [activeTab, setActiveTab] = useState("visitor");

  return (
    <div className={`registration-showcase-card tab-${activeTab}`}>
      {/* 1. Header & Segmented Pill Switcher (Like Screenshot 1 & 2) */}
      <div className="registration-showcase-header">
        <div className="registration-eyebrow-pill">
          <span className="live-pulse-dot" aria-hidden="true" />
          <span>JOIN DENTAL SHOW 2027 · CHENNAI TRADE CENTRE</span>
        </div>

        <h2 className="registration-showcase-title">Be Part of the Next Chapter</h2>

        <p className="registration-showcase-subtitle">
          Join thousands of clinicians, dental students, dealers, technicians, and world-class
          manufacturers at Chennai Trade Centre on 6th &amp; 7th February 2027.
        </p>

        {/* Dual Segmented Tabs (Like Screenshot 1 & 2) */}
        <div className="registration-segmented-tabs" role="tablist" aria-label="Registration Categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "visitor"}
            className={`registration-tab-pill ${activeTab === "visitor" ? "is-active" : ""}`}
            onClick={() => setActiveTab("visitor")}
            id="tab-btn-visitor"
          >
            <span className="tab-pill-icon">✦</span>
            <span>Register as a Visitor</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "exhibitor"}
            className={`registration-tab-pill ${activeTab === "exhibitor" ? "is-active" : ""}`}
            onClick={() => setActiveTab("exhibitor")}
            id="tab-btn-exhibitor"
          >
            <span className="tab-pill-icon">✦</span>
            <span>Register as an Exhibitor</span>
          </button>
        </div>
      </div>

      {/* 2. TAB 1: VISITOR VIEW (Animal on the LEFT, Content on the RIGHT - All Blue & Cyan Palette) */}
      {activeTab === "visitor" && (
        <div className="registration-tab-content layout-animal-left" key="visitor-view">
          {/* Left Column: Animal Mascot */}
          <div className="registration-animal-col">
            <div className="registration-animal-wrapper">
              {/* Dynamic Speech Bubble */}
              <div className="registration-animal-bubble bubble-visitor">
                <span className="bubble-kicker">FREE VISITOR PASS</span>
                <p className="bubble-text">“See • Touch • Feel • Experience”</p>
                <span className="bubble-sub">South India&apos;s Premier Dental Spectacle</span>
                <div className="bubble-tail-down" aria-hidden="true" />
              </div>

              {/* Mascot Image */}
              <div className="registration-animal-image-box">
                <Image
                  src="/images/friendly-beaver-dentist-mascot.png"
                  alt="Dental Show Mascot - Visitor Host"
                  width={290}
                  height={380}
                  priority
                  className="registration-animal-img"
                />
              </div>

              {/* Status Badge */}
              <div className="registration-animal-tag tag-blue">
                <span className="tag-pulse" />
                <span>Instant Digital Entry E-Badge</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visitor Content */}
          <div className="registration-info-col">
            <div className="registration-info-body">
              <span className="registration-badge-label badge-blue">
                FOR CLINICIANS, STUDENTS &amp; CLINIC TEAMS
              </span>

              <h3 className="registration-role-title">Register as a Visitor</h3>

              <p className="registration-role-desc">
                Gain complimentary access to South India&apos;s largest dental exhibition. Connect with 250+
                global brands, discover revolutionary CAD/CAM equipment, and attend hands-on clinical masterclasses.
              </p>

              <ul className="registration-perks-list perks-blue">
                <li>
                  <span className="perk-icon-wrap icon-blue"><Icon name="check" size={16} /></span>
                  <span><strong>Free access to 3 massive exhibition halls</strong> (New Hall 2, 3 &amp; 3A)</span>
                </li>
                <li>
                  <span className="perk-icon-wrap icon-blue"><Icon name="check" size={16} /></span>
                  <span><strong>Live hands-on scanning, laser &amp; 3D printing demos</strong> across exhibitor booths</span>
                </li>
                <li>
                  <span className="perk-icon-wrap icon-blue"><Icon name="check" size={16} /></span>
                  <span><strong>Network with 6,000+ peers</strong>, surgeons, specialists &amp; dental technicians</span>
                </li>
                <li>
                  <span className="perk-icon-wrap icon-blue"><Icon name="check" size={16} /></span>
                  <span><strong>Exclusive expo-only equipment pricing</strong> and clinic package offers</span>
                </li>
              </ul>

              <div className="registration-cta-action">
                <Link
                  href="/visitor-registration"
                  className="btn btn-showcase-visitor"
                  id="cta-visitor-register-btn"
                >
                  <span>Register as a Visitor (Free Pass)</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
                <span className="action-hint">100% Free Pass · Instant Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. TAB 2: EXHIBITOR VIEW (Content on the LEFT, Animal on the RIGHT - Mint Green Palette) */}
      {activeTab === "exhibitor" && (
        <div className="registration-tab-content layout-animal-right" key="exhibitor-view">
          {/* Left Column: Exhibitor Content */}
          <div className="registration-info-col">
            <div className="registration-info-body">
              <span className="registration-badge-label badge-green">
                FOR BRANDS, MANUFACTURERS &amp; TRADERS
              </span>

              <h3 className="registration-role-title">Register as an Exhibitor</h3>

              <p className="registration-role-desc">
                Elevate your dental brand and accelerate B2B commercial pipelines. Showcase your diagnostic
                equipment, consumables, and clinical solutions directly to thousands of high-intent buyers.
              </p>

              <ul className="registration-perks-list perks-green">
                <li>
                  <span className="perk-icon-wrap icon-green"><Icon name="check" size={16} /></span>
                  <span><strong>Premium shell schemes &amp; bare space custom stalls</strong> across 10,000+ sq.m</span>
                </li>
                <li>
                  <span className="perk-icon-wrap icon-green"><Icon name="check" size={16} /></span>
                  <span><strong>Direct commercial access to 6,000+ active dental buyers</strong> &amp; clinic owners</span>
                </li>
                <li>
                  <span className="perk-icon-wrap icon-green"><Icon name="check" size={16} /></span>
                  <span><strong>Full state promotional backing &amp; official endorsement</strong> by TNDTMA</span>
                </li>
                <li>
                  <span className="perk-icon-wrap icon-green"><Icon name="check" size={16} /></span>
                  <span><strong>VIP trade lounge access</strong>, digital exhibitor directory listing &amp; marketing reach</span>
                </li>
              </ul>

              <div className="registration-cta-action">
                <Link
                  href="/exhibitor-registration"
                  className="btn btn-showcase-exhibitor"
                  id="cta-exhibitor-register-btn"
                >
                  <span>Register as an Exhibitor (Book Stall)</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
                <span className="action-hint">Prime Stalls Filling Fast · New Hall 2, 3 &amp; 3A</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animal Mascot / Trade Host on the RIGHT */}
          <div className="registration-animal-col">
            <div className="registration-animal-wrapper">
              {/* Dynamic Speech Bubble */}
              <div className="registration-animal-bubble bubble-green">
                <span className="bubble-kicker">OFFICIAL TRADE HOST</span>
                <p className="bubble-text">“Expand Your Market Reach”</p>
                <span className="bubble-sub">Connect With 6,000+ Trade Delegates</span>
                <div className="bubble-tail-down" aria-hidden="true" />
              </div>

              {/* Mascot Image */}
              <div className="registration-animal-image-box">
                <Image
                  src="/images/friendly-beaver-dentist-mascot.png"
                  alt="Dental Show Mascot - Exhibitor Host"
                  width={290}
                  height={380}
                  priority
                  className="registration-animal-img"
                />
              </div>

              {/* Status Badge */}
              <div className="registration-animal-tag tag-green">
                <span className="tag-pulse pulse-green" />
                <span>10,000+ sq.m · 250+ Global Brands</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
