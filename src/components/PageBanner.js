import Link from "next/link";
import Image from "next/image";
import { SparkleStar } from "./BeaverMascot";

function resolveMascotQuote(title, customQuote) {
  if (customQuote) return customQuote;
  const t = (title || "").toLowerCase();
  if (t.includes("about")) return "Celebrating 20 Years of Dental Excellence!";
  if (t.includes("contact")) return "Need assistance? Our secretariat is here to help!";
  if (t.includes("event")) return "50+ Clinical Masterclasses & Hands-on Labs!";
  if (t.includes("gallery")) return "Relive 20 Years of Cherished Memories!";
  if (t.includes("visitor")) return "Free entry for registered dental delegates!";
  if (t.includes("exhibitor")) return "Connect with 6,000+ clinicians & trade buyers!";
  if (t.includes("student")) return "Empowering the next generation of dentists!";
  if (t.includes("terms") || t.includes("privacy")) return "Clear, trusted policies for all participants.";
  return "See. Touch. Feel. Experience.";
}

export default function PageBanner({
  title,
  crumbs = [],
  subtitle,
  image = "/images/hero-stage.jpg",
  showMascot = true,
  mascotQuote,
  mascotBadge = "Official Mascot",
  editionBadge = "20th Milestone Edition",
  showMeta = true,
}) {
  const quote = resolveMascotQuote(title, mascotQuote);

  return (
    <section className="page-banner">
      {/* Background Media & Atmospheric Layers */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="page-banner__bg"
      />
      <div className="page-banner__overlay" />
      <div className="page-banner__ambient-glow" aria-hidden="true" />
      <div className="page-banner__pattern-mesh" aria-hidden="true" />

      <div className="container page-banner__container">
        <div className="page-banner__grid">
          {/* Left Column: Navigation, Badge, Headings, Meta Chips */}
          <div className="page-banner__content">
            <div className="page-banner__top-cluster">
              <nav aria-label="Breadcrumb" className="banner-breadcrumb-pill">
                <Link href="/" className="breadcrumb-link breadcrumb-home" aria-label="Home">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Home</span>
                </Link>
                {crumbs.map((c) => (
                  <span key={c.label} className="breadcrumb-step">
                    <svg
                      className="breadcrumb-arrow"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {c.href ? (
                      <Link href={c.href} className="breadcrumb-link">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="breadcrumb-current" aria-current="page">
                        {c.label}
                      </span>
                    )}
                  </span>
                ))}
              </nav>

              {editionBadge && (
                <div className="banner-milestone-pill">
                  <span className="milestone-sparkle" aria-hidden="true">✦</span>
                  <span>{editionBadge}</span>
                </div>
              )}
            </div>

            <h1 className="page-banner__title">{title}</h1>
            {subtitle && <p className="page-banner__sub">{subtitle}</p>}

            {showMeta && (
              <div className="banner-meta-row">
                <div className="banner-meta-chip">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>6th &amp; 7th Feb 2027</span>
                </div>
                <div className="banner-meta-chip">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Chennai Trade Centre (CTC)</span>
                </div>
                <div className="banner-meta-chip banner-meta-chip--highlight">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Hall 2, 3 &amp; 3A · 250+ Brands</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Mascot Presentation Stage */}
          {showMascot && (
            <div className="page-banner__mascot-column">
              <div className="banner-mascot-stage">
                {/* Ambient Aura Behind Mascot */}
                <div className="banner-mascot-aura" aria-hidden="true" />

                {/* Twinkling Magical Sparkles */}
                <div className="banner-mascot-sparkles" aria-hidden="true">
                  <SparkleStar className="b-sparkle-1" size={24} color="#ffffff" />
                  <SparkleStar className="b-sparkle-2" size={18} color="#3BBF8F" />
                  <SparkleStar className="b-sparkle-3" size={20} color="#069DBF" />
                  <SparkleStar className="b-sparkle-4" size={16} color="#ffffff" />
                </div>

                {/* Speech Bubble from Mascot - Safely Positioned to the Left of Mr. Dentalshow */}
                <div className="banner-mascot-bubble" role="note" aria-label={`Mr. Dentalshow: ${quote}`}>
                  <div className="banner-bubble-header">
                    <span className="live-pulse-dot" aria-hidden="true" />
                    <span className="banner-bubble-badge">Mr. Dentalshow</span>
                  </div>
                  <p className="banner-bubble-text">“{quote}”</p>
                  <div className="banner-bubble-tail" aria-hidden="true">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 2 C5 6, 9 9, 14 11 C8 12, 4 14, 0 16 Z" fill="#ffffff" />
                      <path d="M0 2 C5 6, 9 9, 14 11" stroke="#00A86B" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Mascot Cutout Image with Pedestal Shadow */}
                <div className="banner-mascot-character">
                  <Image
                    src="/images/dental-show-mascot-new.png"
                    alt="Dental Show Official Mascot Mr. Dentalshow"
                    width={185}
                    height={262}
                    priority
                    className="banner-mascot-img"
                  />
                  <div className="banner-mascot-pedestal" aria-hidden="true" />
                </div>

                {/* Docked Mascot Credential Pill */}
                <div className="banner-mascot-tag-pill">
                  <span className="mascot-tag-dot" aria-hidden="true" />
                  <span className="mascot-tag-text">{mascotBadge} · Mr. Dentalshow</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
