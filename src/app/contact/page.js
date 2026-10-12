import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import BeaverMascot from "@/components/BeaverMascot";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact Us | Dental Show 2027 & TNDTMA",
  description:
    "Official contact details for Dental Show 2027 and TNDTMA. Reach our team for visitor inquiries, booth reservations, and association partnerships.",
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: "pin",
      label: "Official Exhibition Venue",
      primary: "Chennai Trade Centre New Hall 2, 3 & 3A",
      secondary: "CTC Complex, Mount Poonamallee High Rd, Nandambakkam, Chennai 600089",
      actionText: "View on Map",
      actionHref: "https://maps.google.com/?q=Chennai+Trade+Centre+Nandambakkam",
    },
    {
      icon: "mail",
      label: "Official Email Inquiries",
      primary: site.email,
      primaryHref: `mailto:${site.email}`,
      secondary: site.organizerEmail,
      secondaryHref: `mailto:${site.organizerEmail}`,
      actionText: "Send Email",
      actionHref: `mailto:${site.email}`,
    },
    {
      icon: "phone",
      label: "Official Direct Helplines",
      primary: `${site.phone} (Office Desk)`,
      primaryHref: `tel:${site.phone.replace(/\s/g, "")}`,
      secondary: `${site.mobilePhone} (Mobile / WhatsApp)`,
      secondaryHref: `tel:${site.mobilePhone.replace(/\s/g, "")}`,
      actionText: "Call Secretariat",
      actionHref: `tel:${site.phone.replace(/\s/g, "")}`,
    },
    {
      icon: "calendar",
      label: "Exhibition Dates & Timings",
      primary: "6th & 7th February 2027",
      secondary: "09:00 AM – 06:00 PM (Both Days)",
      badge: "Flagship Edition",
    },
  ];

  return (
    <>
      <PageBanner
        title="Contact Us"
        crumbs={[{ label: "Contact Us" }]}
        subtitle="Official Contact Details & Inquiry Secretariat for Dental Show 2027, Organised by TNDTMA."
      />

      <section className="section">
        <div className="container contact">
          <Reveal className="contact__info">
            <span className="section-eyebrow">OFFICIAL LIAISON &amp; SECRETARIAT</span>
            <h2 className="section-main-title">Get in Touch with TNDTMA</h2>
            <div className="title-zigzag" style={{ margin: "0 0 20px 0" }} />
            <p style={{ fontSize: "15px", lineHeight: "1.65", color: "#475569" }}>
              Whether you are a practicing dentist, student delegate, dental dealer, trade visitor or
              global manufacturer, our organizing committee is at your service.
            </p>

            <div className="contact__cards">
              {contactCards.map((card) => (
                <div key={card.label} className="contact-card">
                  <div className="contact-card__icon">
                    <Icon name={card.icon} size={22} />
                  </div>
                  <div className="contact-card__content">
                    <span className="contact-card__label">{card.label}</span>
                    <div className="contact-card__val">
                      {card.primaryHref ? (
                        <a href={card.primaryHref}>{card.primary}</a>
                      ) : (
                        <span>{card.primary}</span>
                      )}
                    </div>
                    {card.secondary && (
                      <div className="contact-card__subval">
                        {card.secondaryHref ? (
                          <a href={card.secondaryHref}>{card.secondary}</a>
                        ) : (
                          <span>{card.secondary}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__social-hub">
              <span className="section-eyebrow" style={{ fontSize: "11px", letterSpacing: "1px" }}>
                CONNECT ON OFFICIAL SOCIAL MEDIA
              </span>
              <div className="contact__social-list" aria-label="Official Social Channels">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="contact__social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="contact__form">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#023E73", margin: "0 0 4px" }}>
                  Send an Official Message
                </h3>
                <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                  Our secretariat will respond to your inquiry promptly.
                </p>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, background: "rgba(4, 119, 191, 0.1)", color: "#0477BF", padding: "4px 10px", borderRadius: "14px", textTransform: "uppercase" }}>
                24h Response
              </span>
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Chennai Trade Centre Venue & Logistics Guide */}
      <section className="section bg-light" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="ctc-venue-card">
            <div className="ctc-venue-flex">
              <div className="ctc-venue-info">
                <span className="section-eyebrow text-cyan">DIRECTIONS &amp; VENUE LOGISTICS</span>
                <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#023E73", margin: "8px 0 14px" }}>
                  Reaching Chennai Trade Centre (CTC)
                </h3>
                <p style={{ fontSize: "14.5px", lineHeight: "1.65", color: "#475569", margin: "0 0 20px" }}>
                  Conveniently situated in Nandambakkam, Chennai Trade Centre is South India’s premier
                  exhibition complex, strategically positioned on Mount Poonamallee Road with seamless airport
                  and metro connectivity.
                </p>

                <div className="ctc-transit-grid">
                  <div className="ctc-transit-item">
                    <Icon name="pin" size={18} />
                    <span><strong>15 Mins</strong> from Chennai Airport (MAA)</span>
                  </div>
                  <div className="ctc-transit-item">
                    <Icon name="arrow" size={18} />
                    <span><strong>Metro:</strong> Alandur / Guindy Stations</span>
                  </div>
                  <div className="ctc-transit-item">
                    <Icon name="star" size={18} />
                    <span><strong>Road:</strong> Mount Poonamallee Arterial</span>
                  </div>
                  <div className="ctc-transit-item">
                    <Icon name="check" size={18} />
                    <span><strong>Parking:</strong> On-Site Multi-Tier Facility</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <a
                    href="https://maps.google.com/?q=Chennai+Trade+Centre+Nandambakkam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    Open in Google Maps <Icon name="arrow" size={16} />
                  </a>
                  <a
                    href="/visitor-registration"
                    className="btn btn--ghost"
                  >
                    Fast-Track Registration
                  </a>
                </div>
              </div>

              {/* Map Embed + Beaver Ambassador */}
              <div className="ctc-map-wrap">
                <iframe
                  title="Chennai Trade Centre Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.279864239857!2d80.1770233758444!3d13.017849187301646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673a62885973%3A0xe54ef5bb502a3a5f!2sChennai%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="ctc-map-frame"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
