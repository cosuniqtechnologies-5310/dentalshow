"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { footerLinks, site } from "@/data/site";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/coming-soon") {
    return null;
  }
  return (
    <footer className="footer" role="contentinfo" aria-label="Site Footer">
      <div className="container footer-container">

        {/* 2. FIVE-COLUMN EDITORIAL NAVIGATION GRID (Like Screenshot 1) */}
        <div className="footer-nav-grid">
          {/* Column 1: Organiser / Association Info */}
          <div className="footer-nav-col footer-nav-col--brand">
            <h4 className="footer-col-title">Organiser</h4>
            <div className="footer-org-badge">
              <span className="footer-org-tndtma">TNDTMA</span>
              <span className="footer-org-desc">Tamilnadu Dental Traders and Manufacturers Association</span>
            </div>
            <p className="footer-org-statement">
              Strengthening Tamil Nadu&apos;s dental ecosystem and bringing global CAD/CAM innovations directly to regional clinicians for over two decades.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-col-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Registration Categories */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Participation</h4>
            <ul className="footer-col-links">
              <li><Link href="/visitor-registration">Visitor Registration</Link></li>
              <li><Link href="/exhibitor-registration">Exhibitor Registration</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-col-links">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
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
                <span>New No.2, Mini Street, Kodambakkam, Chennai - 600 024</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CRISP HORIZONTAL DIVIDER (Like Screenshot 1) */}
        <div className="footer-divider-line" />

        {/* 4. BOTTOM METADATA & SOCIAL ROW (Like Screenshot 1 & 2) */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-info">
            <p className="footer-bottom-address">
              New No.2, Mini Street, Kodambakkam, Chennai - 600 024, India.
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
              <Link href="/about" className="cred-pill cred-pill--mascot" title="Meet Mr. Dentalshow">
                <span className="cred-mascot-star">✦</span> Mr. Dentalshow
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH DENTAL SHOW 2027 DISPLAY AT BOTTOM WITH WHITE GRADIENT & PROPER FIT */}
      <div className="footer-giant-brand" aria-hidden="true">
        <span className="footer-giant-brand-text">DENTAL SHOW 2027</span>
      </div>
    </footer>
  );
}
