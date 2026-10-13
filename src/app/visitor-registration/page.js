"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";
import BeaverMascot from "@/components/BeaverMascot";
import { site } from "@/data/site";

export default function VisitorRegistrationPage() {
  const [redirecting, setRedirecting] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState("trade");

  const handleExternalRedirect = (e) => {
    e.preventDefault();
    setRedirecting(true);
    // Simulate portal redirect sequence
    setTimeout(() => {
      window.open("https://registration.dentalshow.in/visitor", "_blank", "noopener,noreferrer");
      setRedirecting(false);
    }, 1200);
  };

  const visitorBenefits = [
    {
      icon: "check",
      title: "Complimentary Expo Entry",
      text: "Free access to all 3 expansive halls: Chennai Trade Centre New Hall 2, 3 & 3A.",
    },
    {
      icon: "sparkle",
      title: "250+ Global Brands & Live Demos",
      text: "Hands-on experience with intraoral scanners, 3D printers, CBCT, and advanced biomaterials.",
    },
    {
      icon: "users",
      title: "Community & Networking",
      text: "Connect with 6,000+ dental colleagues, professors, and pioneering industry leaders.",
    },
    {
      icon: "star",
      title: "Show-Exclusive Deals",
      text: "Unlock exclusive trade discounts and seasonal package offers directly from manufacturers.",
    },
    {
      icon: "pin",
      title: "Express QR Badge Check-In",
      text: "Fast-track, touchless entry with your digital badge on WhatsApp and Email.",
    },
    {
      icon: "calendar",
      title: "Scientific Seminars",
      text: "Access to open-floor scientific sessions, product launches, and clinical masterclasses.",
    },
  ];

  const whoBenefits = [
    {
      role: "Practicing Dentists",
      desc: "Discover breakthrough clinical technologies, explore new restorative materials, and negotiate direct factory rates for clinic upgrades.",
    },
    {
      role: "Dental Students & Interns",
      desc: "Gain first-hand exposure to the evolving digital dental landscape, network with senior mentors, and witness live equipment demonstrations.",
    },
    {
      role: "Dental Technicians & Lab Owners",
      desc: "Explore high-precision milling machines, sintering furnaces, zirconia blanks, and seamless CAD/CAM digital workflows.",
    },
    {
      role: "Clinic Managers & Dental Assistants",
      desc: "Learn advanced sterilization protocols, touchless operatory workflows, and dental practice management software.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Visitor Registration"
        crumbs={[{ label: "Visitor Registration" }]}
        subtitle="Dental Show 2027 • 6th & 7th February 2027 • Chennai Trade Centre New Hall 2, 3 & 3A"
      />

      <section className="section">
        <div className="container">
          {/* External Platform Notice Card */}
          <div className="registration-redirect-card pop-in">
            <div className="redirect-card-header">
              <div className="portal-badge-pill">
                <span className="live-indicator" /> Official External Portal
              </div>
              <h2 className="redirect-card-title">Dental Show 2027 visitor pass portal</h2>
              <p className="redirect-card-desc">
                Visitor registration is hosted on our secure ticketing partner platform. Register today
                to receive your instant digital entry badge.
              </p>
            </div>

            <div className="badge-selection-grid">
              <div
                className={`badge-option-card ${selectedBadge === "trade" ? "is-selected" : ""}`}
                onClick={() => setSelectedBadge("trade")}
              >
                <div className="badge-option-radio">
                  <span className={`radio-dot ${selectedBadge === "trade" ? "active" : ""}`} />
                </div>
                <div className="badge-option-info">
                  <span className="badge-option-name">Trade Visitor Pass</span>
                  <span className="badge-option-role">Dentists, Students, Technicians, Dealers</span>
                  <span className="badge-option-price">FREE (Online Pre-Registration)</span>
                </div>
                <div className="badge-option-perk">Full 2-Day Access</div>
              </div>

              <div
                className={`badge-option-card ${selectedBadge === "vip" ? "is-selected" : ""}`}
                onClick={() => setSelectedBadge("vip")}
              >
                <div className="badge-option-radio">
                  <span className={`radio-dot ${selectedBadge === "vip" ? "active" : ""}`} />
                </div>
                <div className="badge-option-info">
                  <span className="badge-option-name">VIP Delegate & Masterclass Pass</span>
                  <span className="badge-option-role">Includes hands-on CME workshop access</span>
                  <span className="badge-option-price">₹1,500 / Delegate</span>
                </div>
                <div className="badge-option-perk">VIP Lounge + Workshop Kit</div>
              </div>
            </div>

            <div className="redirect-action-box">
              <a
                href={site.registrationUrls.visitorExternal}
                onClick={handleExternalRedirect}
                className="btn btn--primary btn-large-redirect"
                id="btn-visitor-redirect"
              >
                {redirecting ? (
                  <span>Connecting to Registration Portal...</span>
                ) : (
                  <>
                    <span>Proceed to External Registration Platform</span>
                    <Icon name="arrow" size={20} />
                  </>
                )}
              </a>

              <p className="redirect-notice-small">
                <Icon name="check" size={14} /> You will be securely redirected to{" "}
                <code>registration.dentalshow.in/visitor</code>. Badge issuance takes under 60 seconds.
              </p>
            </div>
          </div>

          {/* Highlights & Benefits */}
          <div className="mt-lg">
            <SectionTitle
              eyebrow="WHY VISIT DENTAL SHOW 2027"
              title="What’s Included with Your Visitor Badge"
              subtitle="Everything you need for an inspiring two days at Chennai Trade Centre."
            />

            <div className="grid grid--3 mt-md">
              {visitorBenefits.map((b, idx) => (
                <div key={b.title} className="benefit-card pop-in" style={{ animationDelay: `${idx * 60}ms` }}>
                  <div className="benefit-card__icon">
                    <Icon name={b.icon} size={24} />
                  </div>
                  <h3 className="benefit-card__title">{b.title}</h3>
                  <p className="benefit-card__text">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Attend */}
          <div className="mt-lg">
            <SectionTitle
              eyebrow="TARGET AUDIENCE"
              title="Who Benefits from Dental Show 2027?"
              subtitle="From aspiring dental undergraduates to veteran clinic founders, Dental Show is designed for the entire community."
            />

            <div className="grid grid--2 mt-md">
              {whoBenefits.map((item) => (
                <div key={item.role} className="audience-card">
                  <h4 className="audience-card__title">
                    <span className="audience-pill">{item.role}</span>
                  </h4>
                  <p className="audience-card__text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Registration Steps */}
          <div className="mt-lg registration-steps-container">
            <h3 className="steps-heading">4 Quick Steps to Get Your Badge</h3>
            <div className="grid grid--4 mt-md">
              <div className="step-item">
                <span className="step-num">01</span>
                <h4>Click Register</h4>
                <p>Click the link to open the official registration portal.</p>
              </div>
              <div className="step-item">
                <span className="step-num">02</span>
                <h4>Enter Details</h4>
                <p>Provide your name, clinic/college, mobile number, and email.</p>
              </div>
              <div className="step-item">
                <span className="step-num">03</span>
                <h4>Get QR Code</h4>
                <p>Instantly receive your digital entry QR badge on WhatsApp & Email.</p>
              </div>
              <div className="step-item">
                <span className="step-num">04</span>
                <h4>Express Entry</h4>
                <p>Scan your QR code at Chennai Trade Centre fast-track kiosks on 6-7 Feb.</p>
              </div>
            </div>
          </div>

          {/* Mascot Banner */}
          <div className="mt-lg mascot-callout-card">
            <div className="mascot-callout-flex">
              <div className="mascot-callout-mascot">
                <BeaverMascot size={220} />
              </div>
              <div className="mascot-callout-content">
                <span className="mascot-tag">SEE. TOUCH. FEEL. EXPERIENCE</span>
                <h3>Need Assistance With Your Registration?</h3>
                <p>
                  Our visitor support desk is available to assist group college registrations, dental
                  associations, and outstation delegates.
                </p>
                <div className="support-links">
                  <a href={`mailto:${site.email}`} className="support-link">
                    <Icon name="mail" size={16} /> {site.email}
                  </a>
                  <a href={`tel:${site.mobilePhone}`} className="support-link">
                    <Icon name="phone" size={16} /> {site.mobilePhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
