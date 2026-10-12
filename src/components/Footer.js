import Link from "next/link";
import Icon from "./Icon";
import SubscribeForm from "./SubscribeForm";
import { footerLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site Footer">
      <div className="container footer-container">
        {/* 1. TOP CENTERPIECE: Emblem, Headline & Quick Pill CTAs (Like Screenshot 2) */}
        <div className="footer-hero-centerpiece">
          {/* Centered Organic Asterisk Crest */}
          <div className="footer-center-emblem" aria-hidden="true">
            <svg
              width="44"
              height="44"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="emblem-svg"
            >
              <path
                d="M20 2C21.1 2 22 2.9 22 4V14.5L29.4 7.1C30.2 6.3 31.5 6.3 32.3 7.1C33.1 7.9 33.1 9.2 32.3 10L24.9 17.4H35.4C36.5 17.4 37.4 18.3 37.4 19.4C37.4 20.5 36.5 21.4 35.4 21.4H24.9L32.3 28.8C33.1 29.6 33.1 30.9 32.3 31.7C31.5 32.5 30.2 32.5 29.4 31.7L22 24.3V34.8C22 35.9 21.1 36.8 20 36.8C18.9 36.8 18 35.9 18 34.8V24.3L10.6 31.7C9.8 32.5 8.5 32.5 7.7 31.7C6.9 30.9 6.9 29.6 7.7 28.8L15.1 21.4H4.6C3.5 21.4 2.6 20.5 2.6 19.4C2.6 18.3 3.5 17.4 4.6 17.4H15.1L7.7 10C6.9 9.2 6.9 7.9 7.7 7.1C8.5 6.3 9.8 6.3 10.6 7.1L18 14.5V4C18 2.9 18.9 2 20 2Z"
                fill="#3BBF8F"
              />
              <circle cx="20" cy="19.4" r="3.5" fill="#0A2119" />
            </svg>
          </div>

          <h2 className="footer-hero-title">Dental Show 2027</h2>
          <p className="footer-hero-tagline">
            “See • Touch • Feel • Experience. Where South India’s Dental Future Begins.”
          </p>

          {/* Dual Floating Action Pills (Like Screenshot 2) */}
          <div className="footer-action-pills">
            <Link
              href="/visitor-registration"
              className="footer-pill-btn footer-pill-btn--primary"
              id="footer-cta-visitor"
            >
              <span>Register as Visitor (Free Pass)</span>
              <span className="pill-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/exhibitor-registration"
              className="footer-pill-btn footer-pill-btn--secondary"
              id="footer-cta-exhibitor"
            >
              <span>Book Exhibitor Stall</span>
              <span className="pill-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* 2. FIVE-COLUMN EDITORIAL NAVIGATION GRID (Like Screenshot 1) */}
        <div className="footer-nav-grid">
          {/* Column 1: Organiser / Association Info */}
          <div className="footer-nav-col footer-nav-col--brand">
            <h4 className="footer-col-title">Organiser</h4>
            <div className="footer-org-badge">
              <span className="footer-org-tndtma">TNDTMA</span>
              <span className="footer-org-desc">Tamil Nadu Dental Trade &amp; Manufacturers Association</span>
            </div>
            <p className="footer-org-statement">
              Strengthening Tamil Nadu&apos;s dental ecosystem and bringing global CAD/CAM innovations directly to regional clinicians for over two decades.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-col-links">
              <li><Link href="/">Home &amp; Countdown</Link></li>
              <li><Link href="/about">About TNDTMA</Link></li>
              <li><Link href="/#legacy">Our Legacy &amp; Timeline</Link></li>
              <li><Link href="/#benefits">Who Benefits</Link></li>
              <li><Link href="/gallery">Central Expo Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Registration Categories */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Participation</h4>
            <ul className="footer-col-links">
              <li><Link href="/visitor-registration">Visitor Registration</Link></li>
              <li><Link href="/exhibitor-registration">Exhibitor Stall Booking</Link></li>
              <li><Link href="/student-registration">Student Delegations</Link></li>
              <li><Link href="/visitor-registration#faq">Visitor FAQ &amp; Badge</Link></li>
              <li><Link href="/exhibitor-registration#stalls">Hall 2, 3 &amp; 3A Layout</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-col-links">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms of Use</Link></li>
              <li><Link href="/disclaimer">Acceptance Policy</Link></li>
              <li><Link href="/security">Security &amp; Badging</Link></li>
              <li><Link href="/cookies">Cookie Preferences</Link></li>
            </ul>
          </div>

          {/* Column 5: Secretariat & Contact */}
          <div className="footer-nav-col footer-nav-col--contact">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-details">
              <a href={`mailto:${site.email}`} className="footer-contact-row">
                <Icon name="mail" size={15} />
                <span>{site.email}</span>
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="footer-contact-row">
                <Icon name="phone" size={15} />
                <span>{site.phone}</span>
              </a>
              <div className="footer-contact-row footer-contact-row--address">
                <Icon name="pin" size={15} />
                <span>Chennai Trade Centre (New Halls)</span>
              </div>
            </div>

            <div className="footer-mini-subscribe">
              <span className="mini-sub-label">Subscribe to Bulletins</span>
              <SubscribeForm compact />
            </div>
          </div>
        </div>

        {/* 3. CRISP HORIZONTAL DIVIDER (Like Screenshot 1) */}
        <div className="footer-divider-line" />

        {/* 4. BOTTOM METADATA & SOCIAL ROW (Like Screenshot 1 & 2) */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-info">
            <p className="footer-bottom-address">
              Chennai Trade Centre, Mount Poonamallee High Rd, Nandambakkam, Chennai 600089, India.
            </p>
            <p className="footer-bottom-copyright">
              © 2027 Dental Show · Organised by TNDTMA. All rights reserved.
            </p>
          </div>

          <div className="footer-bottom-social-cluster">
            {/* Circular Social Badges (Like Screenshot 1) */}
            <div className="footer-social-circles" aria-label="Official Social Channels">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="footer-social-icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={s.icon} size={15} />
                </a>
              ))}
            </div>

            {/* Region & Credential Pills (Like Screenshot 2) */}
            <div className="footer-credential-pills">
              <span className="cred-pill">🇮🇳 Tamil Nadu, India</span>
              <span className="cred-pill">TNDTMA Accredited</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. GIGANTIC SEMI-TRANSPARENT BRAND WORDMARK WATERMARK (Like Screenshot 1) */}
      <div className="footer-giant-watermark" aria-hidden="true">
        <span>DentalShow</span>
      </div>
    </footer>
  );
}
