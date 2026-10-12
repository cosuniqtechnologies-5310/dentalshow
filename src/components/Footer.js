import Link from "next/link";
import Icon from "./Icon";
import { Logo } from "./Header";
import SubscribeForm from "./SubscribeForm";
import { footerLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site Footer">
      <div className="container footer__top">
        {/* Brand & Association Info (Column 1) */}
        <div className="footer__brand">
          <div className="footer-logo-wrap">
            <Logo />
          </div>

          <div className="footer-brand-meta">
            <h4 className="footer-brand-title">Dental Show 2027</h4>
            <div className="footer-organizer-pill">
              <span className="footer-org-label">Organised by</span>
              <strong className="footer-org-name">TNDTMA</strong>
            </div>
            <p className="footer-org-fullname">
              Tamil Nadu Dental Trade &amp; Manufacturers Association
            </p>
          </div>

          <p className="footer-tagline-text">
            “See. Touch. Feel. Experience. One community. Countless possibilities. A future we build together.”
          </p>

          <div className="social" aria-label="Official Social Media Channels">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="social__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links (Column 2) */}
        <div className="footer__col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links-list">
            {footerLinks.quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer-nav-link">
                  <span className="footer-nav-chevron">›</span>
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Registration & Participation (Column 3) */}
        <div className="footer__col">
          <h3 className="footer-heading">Registration</h3>
          <ul className="footer-links-list">
            {footerLinks.registration.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer-nav-link">
                  <span className="footer-nav-chevron">›</span>
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Official Secretariat & Contact Details (Column 4) */}
        <div className="footer__col footer__col--wide">
          <h3 className="footer-heading">Official Contact</h3>
          <ul className="footer__contact">
            <li className="footer-contact-item">
              <div className="footer-contact-icon">
                <Icon name="pin" size={18} />
              </div>
              <div className="footer-contact-text">
                <strong className="venue-title">Chennai Trade Centre (CTC Complex)</strong>
                <span className="venue-sub">New Hall 2, 3 &amp; 3A, Mount Poonamallee High Rd, Nandambakkam, Chennai 600089</span>
              </div>
            </li>

            <li className="footer-contact-item">
              <div className="footer-contact-icon">
                <Icon name="mail" size={18} />
              </div>
              <div className="footer-contact-text contact-links-group">
                <a href={`mailto:${site.email}`} className="footer-contact-link">
                  <span className="contact-link-label">Expo Inquiries:</span> {site.email}
                </a>
                <a href={`mailto:${site.organizerEmail}`} className="footer-contact-link sub-contact-link">
                  <span className="contact-link-label">Secretariat:</span> {site.organizerEmail}
                </a>
              </div>
            </li>

            <li className="footer-contact-item">
              <div className="footer-contact-icon">
                <Icon name="phone" size={18} />
              </div>
              <div className="footer-contact-text contact-links-group">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="footer-contact-link">
                  <span className="contact-link-label">Hotline:</span> {site.phone}
                </a>
                <a href={`tel:${site.mobilePhone.replace(/\s/g, "")}`} className="footer-contact-link sub-contact-link">
                  <span className="contact-link-label">Mobile:</span> {site.mobilePhone}
                </a>
              </div>
            </li>
          </ul>

          <div className="footer-newsletter-wrap">
            <span className="newsletter-title">Subscribe to Show Bulletins</span>
            <SubscribeForm compact />
          </div>
        </div>
      </div>

      {/* Bottom Bar: Ultra-Rich Dark Blue Strip */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer-copyright-text">
            © 2027 Dental Show · Organised by TNDTMA (Tamil Nadu Dental Trade &amp; Manufacturers Association). All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="bottom-link-dot" aria-hidden="true">·</span>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            <span className="bottom-link-dot" aria-hidden="true">·</span>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
