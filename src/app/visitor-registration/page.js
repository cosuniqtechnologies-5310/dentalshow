"use client";

import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";
import { SparkleStar } from "@/components/BeaverMascot";
import { site } from "@/data/site";

export default function VisitorRegistrationPage() {
  const visitorBenefits = [
    {
      icon: "ticket",
      tag: "HALL ACCESS",
      theme: "blue",
      title: "Complimentary Expo Entry",
      text: "Free access to all 3 expansive halls: Chennai Trade Centre New Hall 2, 3 & 3A.",
    },
    {
      icon: "sparkle",
      tag: "EXPO FLOOR",
      theme: "green",
      title: "300+ Stalls, Brands & Live Demos",
      text: "Hands-on experience with intraoral scanners, 3D printers, CBCT, and advanced biomaterials.",
    },
    {
      icon: "users",
      tag: "COMMUNITY",
      theme: "sky",
      title: "Community & Networking",
      text: "Connect with 10,000+ dental colleagues, professors, and pioneering industry leaders.",
    },
    {
      icon: "star",
      tag: "SPECIAL OFFERS",
      theme: "amber",
      title: "Show-Exclusive Deals",
      text: "Unlock exclusive trade discounts and seasonal package offers directly from manufacturers.",
    },
    {
      icon: "scan",
      tag: "TOUCHLESS PASS",
      theme: "mint",
      title: "Express QR Badge Check-In",
      text: "Fast-track, touchless entry with your digital badge on WhatsApp and Email.",
    },
    {
      icon: "calendar",
      tag: "CME & SESSIONS",
      theme: "purple",
      title: "Scientific Seminars",
      text: "Access to open-floor scientific sessions, product launches, and clinical masterclasses.",
    },
  ];

  const whoBenefits = [
    {
      role: "Practicing Dentists",
      icon: "tooth",
      tag: "CLINICAL PRACTICE",
      desc: "Discover breakthrough clinical technologies, explore new restorative materials, and negotiate direct factory rates for clinic upgrades.",
      perks: ["Direct Factory Deals", "Latest Biomaterials", "Clinical Masterclasses"],
    },
    {
      role: "Dental Students & Interns",
      icon: "users",
      tag: "ACADEMIA & FUTURE",
      desc: "Gain first-hand exposure to the evolving digital dental landscape, network with senior mentors, and witness live equipment demonstrations.",
      perks: ["Senior Mentorship", "Career Horizons", "Hands-on Tech Demos"],
    },
    {
      role: "Dental Technicians & Lab Owners",
      icon: "cube",
      tag: "DIGITAL WORKFLOW",
      desc: "Explore high-precision milling machines, sintering furnaces, zirconia blanks, and seamless CAD/CAM digital workflows.",
      perks: ["CAD/CAM Scanners", "Zirconia Supplies", "Milling Innovations"],
    },
    {
      role: "Clinic Managers & Assistants",
      icon: "shield",
      tag: "PRACTICE MANAGEMENT",
      desc: "Learn advanced sterilization protocols, touchless operatory workflows, and dental practice management software.",
      perks: ["Sterilization Standards", "Operatory Ergonomics", "Software Solutions"],
    },
  ];

  const registrationSteps = [
    {
      num: "01",
      title: "Select & Click Register",
      desc: "Choose Trade Visitor or VIP Pass and click to access the verified registration portal.",
      badge: "10 SECONDS",
      color: "blue",
      gradient: "from-blue",
    },
    {
      num: "02",
      title: "Enter Simple Details",
      desc: "Fill in your name, dental clinic / institution, mobile number, and city.",
      badge: "30 SECONDS",
      color: "green",
      gradient: "from-green",
    },
    {
      num: "03",
      title: "Receive Instant QR Badge",
      desc: "Your digital entry badge arrives directly in your WhatsApp and email inbox instantly.",
      badge: "INSTANT",
      color: "sky",
      gradient: "from-sky",
    },
    {
      num: "04",
      title: "Fast-Track Express Entry",
      desc: "Scan your QR pass at Chennai Trade Centre express turnstiles on 6–7 Feb 2027.",
      badge: "FAST-TRACK",
      color: "mint",
      gradient: "from-mint",
    },
  ];

  return (
    <>
      <PageBanner
        title="Visitor Registration"
        crumbs={[{ label: "Visitor Registration" }]}
        subtitle="Dental Show 2027 • 6th & 7th February 2027 • Chennai Trade Centre New Hall 2, 3 & 3A"
      />

      {/* 1. Official Visitor Iframe Form (Desktop & Mobile Optimized) */}
      <section className="section section-visitor-portal font-modern fold-white" id="portal-select">
        <div className="container">
          <div className="registration-iframe-card pop-in">
            <div className="iframe-card-header">
              <div className="iframe-header-left">
                <div className="portal-badge-pill">
                  <span className="live-indicator" aria-hidden="true" />
                  <span>OFFICIAL ONLINE REGISTRATION</span>
                </div>
                <h2 className="iframe-card-title">Dental Show 2027 Visitor Pass Form</h2>
                <p className="iframe-card-desc">
                  Register online for complimentary 2-day pass entry across Hall 2, 3 &amp; 3A. Your verified digital QR entry pass will be generated instantly.
                </p>
              </div>
              <div className="iframe-header-actions">
                <a
                  href="https://organiser.eventgrid.softwaller.in/f/vst27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-iframe-fallback"
                  title="Open full form in a new tab"
                >
                  <span>Open in New Tab</span>
                  <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </div>

            {/* Pass Highlights Quick Strip */}
            <div className="iframe-pass-quick-strip">
              <div className="quick-strip-badge">
                <span className="quick-strip-dot green" />
                <span><strong>Complimentary Entry:</strong> Access to all 3 halls (Hall 2, 3 &amp; 3A) · 300+ Brands</span>
              </div>
              <div className="quick-strip-badge">
                <span className="quick-strip-dot blue" />
                <span><strong>Touchless QR Pass:</strong> Instant delivery via WhatsApp &amp; Email</span>
              </div>
            </div>

            {/* Responsive Iframe Container */}
            <div className="iframe-embed-wrapper">
              <iframe
                src="https://organiser.eventgrid.softwaller.in/f/vst27"
                width="100%"
                height="900"
                style={{ border: 0 }}
                title="Registration form"
                loading="lazy"
                className="registration-form-iframe"
              />
            </div>

            {/* Trust & Assistance Strip */}
            <div className="iframe-card-footer">
              <div className="iframe-footer-col">
                <Icon name="shield" size={16} />
                <span>Official EventGrid Partner Platform · 256-Bit SSL Encrypted</span>
              </div>
              <div className="iframe-footer-col">
                <Icon name="scan" size={16} />
                <span>Fast-track contactless entry at Chennai Trade Centre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Highlights & What's Included (GREEN COLOR BG SECTION) */}
      <section className="section section-visitor-benefits font-modern fold-green" id="whats-included">
        <div className="container">
          <SectionTitle
            eyebrow="WHY VISIT DENTAL SHOW 2027"
            title="What’s Included with Your Visitor Badge"
            subtitle="Everything you need for an inspiring two days of innovation and professional connections at Chennai Trade Centre."
          />

          <div className="visitor-benefits-grid mt-md">
            {visitorBenefits.map((b) => (
              <div key={b.title} className="visitor-benefit-card">
                <div className={`benefit-icon-tile tile-theme-${b.theme}`}>
                  <Icon name={b.icon} size={22} />
                </div>
                <span className={`benefit-tag tag-theme-${b.theme}`}>{b.tag}</span>
                <h3 className="benefit-card-title">{b.title}</h3>
                <p className="benefit-card-text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who Benefits From Dental Show (CLEAN WHITE SECTION) */}
      <section className="section section-visitor-audience font-modern fold-white" id="who-benefits">
        <div className="container">
          <SectionTitle
            eyebrow="TARGET AUDIENCE"
            title="Who Benefits from Dental Show 2027?"
            subtitle="From aspiring dental undergraduates to veteran clinic founders, Dental Show is designed for the entire community."
          />

          <div className="visitor-audience-grid mt-md">
            {whoBenefits.map((item) => (
              <div key={item.role} className="visitor-audience-card">
                <div className="audience-card-top">
                  <div className="audience-icon-badge-wrap">
                    <div className="audience-role-icon">
                      <Icon name={item.icon} size={20} />
                    </div>
                    <span className="audience-tag">{item.tag}</span>
                  </div>
                </div>
                <h3 className="audience-card-role-title">{item.role}</h3>
                <p className="audience-card-desc">{item.desc}</p>
                <div className="audience-perks-row">
                  {item.perks.map((perk, i) => (
                    <span key={i} className="audience-perk-pill">
                      <span className="perk-bullet">✦</span> {perk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quick Registration Steps (BLUE COLOR BG SECTION) */}
      <section className="section section-visitor-steps font-modern fold-blue" id="how-it-works">
        <div className="container">
          <SectionTitle
            eyebrow="HOW IT WORKS"
            title="4 Quick Steps to Get Your Badge"
            subtitle="Fast-track, touchless registration takes less than a minute."
          />

          <div className="registration-steps-track mt-md">
            {registrationSteps.map((step) => (
              <div key={step.num} className="registration-step-card">
                <div className="step-card-top">
                  <div className={`step-number-circle step-circle-${step.color}`}>
                    {step.num}
                  </div>
                  <span className="step-speed-pill">{step.badge}</span>
                </div>
                <h4 className="step-card-title">{step.title}</h4>
                <p className="step-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mascot Callout & Dedicated Help Desk Banner (FULL SCREEN SECTION) */}
      <section className="cta-full-section font-modern section-helpdesk-fullscreen" id="registration-support">
        {/* Ambient floating glitters */}
        <div className="cta-section-ambient-glitters" aria-hidden="true">
          <SparkleStar className="sparkle-ambient-1" size={26} color="#ffffff" />
          <SparkleStar className="sparkle-ambient-2" size={20} color="#3BBF8F" />
          <SparkleStar className="sparkle-ambient-3" size={24} color="#069DBF" />
          <SparkleStar className="sparkle-ambient-4" size={18} color="#ffffff" />
          <span className="glitter-dust dust-ambient-1" />
          <span className="glitter-dust dust-ambient-2" />
        </div>

        <div className="container">
          <div className="helpdesk-fullscreen-grid">
            {/* Left Column: Official Mascot (Clean without overlapping cards) */}
            <div className="helpdesk-mascot-col">
              <div className="helpdesk-mascot-wrap">
                <div className="mascot-ambient-aura" aria-hidden="true" />
                <Image
                  src="/images/dental-show-mascot-new.png"
                  alt="Dental Show Mascot - Mr. Dentalshow"
                  width={280}
                  height={396}
                  className="helpdesk-mascot-img"
                  priority
                />
                <div className="helpdesk-mascot-pill">
                  <span className="live-pulse-dot" aria-hidden="true" />
                  <span>Official Mascot · Mr. Dentalshow</span>
                </div>
              </div>
            </div>

            {/* Right Column: Help Desk Content */}
            <div className="helpdesk-content-col">
              <div className="helpdesk-kicker-pill">
                <span className="live-pulse-dot" aria-hidden="true" />
                <span>OFFICIAL VISITOR LIAISON &amp; SUPPORT</span>
              </div>
              <h2 className="helpdesk-main-title">
                Need Assistance With Your Registration?
              </h2>
              <p className="helpdesk-main-desc">
                Our visitor support desk is available to assist group college registrations, dental
                associations, bulk clinician passes, and outstation delegates.
              </p>
              <div className="helpdesk-actions-row">
                <a href={`mailto:${site.email}`} className="helpdesk-action-pill">
                  <Icon name="mail" size={16} /> <span>{site.email}</span>
                </a>
                <a href={`tel:${site.mobilePhone}`} className="helpdesk-action-pill">
                  <Icon name="phone" size={16} /> <span>{site.mobilePhone}</span>
                </a>
                <a
                  href="https://wa.me/919840012027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="helpdesk-action-pill helpdesk-action-pill--whatsapp"
                >
                  <span>Chat on WhatsApp</span>
                  <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
