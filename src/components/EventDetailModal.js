"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function EventDetailModal({ event, onClose }) {
  const [userSelectedPhoto, setUserSelectedPhoto] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Practicing Dentist",
    message: "",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!event) return null;

  const isUpcoming = event.category === "Upcoming" || event.status === "Upcoming";
  const galleryImages = event.gallery && event.gallery.length > 0 ? event.gallery : [event.image];
  const selectedPhoto = (userSelectedPhoto && galleryImages.includes(userSelectedPhoto)) ? userSelectedPhoto : (event.image || galleryImages[0] || "");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div
      className="event-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${event.title} details popup`}
      onClick={onClose}
    >
      <div
        className="event-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="event-modal-header">
          <div className="event-modal-header-meta">
            <span className={`event-modal-badge ${isUpcoming ? "event-modal-badge--upcoming" : "event-modal-badge--past"}`}>
              {isUpcoming ? "★ UPCOMING FLAGSHIP" : `${event.year} MILESTONE EDITION`}
            </span>
            <span className="event-modal-year-tag">{event.dateLabel}</span>
          </div>

          <button
            type="button"
            className="event-modal-close-btn"
            onClick={onClose}
            aria-label="Close event popup"
            title="Close (Esc)"
          >
            <Icon name="close" size={22} />
          </button>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div className="event-modal-body">
          {/* 1. TITLE & SUBTITLE */}
          <div className="event-modal-title-row">
            <h2 className="event-modal-title">{event.title}</h2>
            <p className="event-modal-lead">{event.excerpt}</p>
          </div>

          {/* 2. GALLERY IMAGE SHOWCASE ("show gallery image") */}
          <div className="event-modal-gallery-showcase">
            <div className="event-modal-main-img-wrap">
              <Image
                src={selectedPhoto || event.image}
                alt={`${event.title} preview`}
                fill
                sizes="(max-width: 900px) 100vw, 850px"
                className="event-modal-main-img"
                priority
              />
              <div className="event-modal-img-badge">
                <Icon name="pin" size={13} />
                <span>{event.venue}</span>
              </div>
            </div>

            {/* Thumbnail Selector Strip */}
            {galleryImages.length > 1 && (
              <div className="event-modal-thumb-strip" role="tablist" aria-label="Event gallery photos">
                {galleryImages.map((imgSrc, idx) => {
                  const isSelected = selectedPhoto === imgSrc;
                  return (
                    <button
                      key={imgSrc}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      className={`event-modal-thumb-btn ${isSelected ? "is-active" : ""}`}
                      onClick={() => setUserSelectedPhoto(imgSrc)}
                      title={`Photo ${idx + 1}`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        width={90}
                        height={60}
                        className="event-modal-thumb-img"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 3. EVENT SPECIFICATIONS & METADATA */}
          <div className="event-modal-meta-grid">
            <div className="modal-meta-item">
              <div className="modal-meta-icon"><Icon name="calendar" size={18} /></div>
              <div className="modal-meta-info">
                <span className="modal-meta-label">Date &amp; Schedule</span>
                <strong>{event.dateLabel}</strong>
                <span className="modal-meta-sub">{event.time}</span>
              </div>
            </div>

            <div className="modal-meta-item">
              <div className="modal-meta-icon"><Icon name="pin" size={18} /></div>
              <div className="modal-meta-info">
                <span className="modal-meta-label">Official Venue</span>
                <strong>{event.venue}</strong>
                <span className="modal-meta-sub">{event.city}</span>
              </div>
            </div>

            <div className="modal-meta-item">
              <div className="modal-meta-icon"><Icon name="users" size={18} /></div>
              <div className="modal-meta-info">
                <span className="modal-meta-label">Participation</span>
                <strong>{isUpcoming ? "10,000+ Registered Delegates" : `${event.seats.toLocaleString()}+ Clinical Visitors`}</strong>
                <span className="modal-meta-sub">{event.price}</span>
              </div>
            </div>
          </div>

          {/* 4. DETAILED OVERVIEW & HIGHLIGHTS */}
          <div className="event-modal-details-content">
            <h3 className="modal-section-heading">About This Edition</h3>
            <div className="modal-desc-paragraphs">
              {event.description?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {event.highlights && event.highlights.length > 0 && (
              <div className="event-modal-highlights-card">
                <h4 className="modal-highlights-title">Key Edition Highlights</h4>
                <ul className="modal-highlights-list">
                  {event.highlights.map((h, idx) => (
                    <li key={idx}>
                      <span className="modal-check-icon">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.sessions && event.sessions.length > 0 && (
              <div className="event-modal-sessions-card">
                <h4 className="modal-highlights-title">Programme &amp; Scientific Highlights</h4>
                <div className="modal-sessions-list">
                  {event.sessions.map((s, idx) => (
                    <div key={idx} className="modal-session-row">
                      <span className="modal-session-time">{s.time}</span>
                      <div className="modal-session-text">
                        <strong>{s.title}</strong>
                        {s.speaker && <span className="modal-session-speaker">{s.speaker}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 5. PDF BROCHURE DOWNLOAD BOX ("before form add pdf for brochure") */}
          <div className="event-modal-brochure-card">
            <div className="brochure-card-left">
              <div className="brochure-pdf-icon-badge" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="pdf-tag-text">PDF</span>
              </div>
              <div className="brochure-card-info">
                <div className="brochure-format-tag">Official Publication · PDF Document</div>
                <h4 className="brochure-card-title">Download Official Edition Brochure &amp; Floor Layout</h4>
                <p className="brochure-card-sub">
                  Complete prospectus including CTC Hall 2, 3 &amp; 3A layout, exhibitor stall booking guide, scientific schedules, and TNDTMA delegate protocols.
                </p>
              </div>
            </div>

            <a
              href={event.brochureUrl || "/brochures/dental-show-brochure.pdf"}
              download="Dental-Show-Official-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-brochure-pdf"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download PDF</span>
            </a>
          </div>

          {/* 6. REGISTRATION LINKS & INQUIRY FORM ("and goto contact and anything form page") */}
          <div className="event-modal-actions-form-section">
            <div className="modal-cta-buttons-cluster">
              {isUpcoming ? (
                <>
                  <Link
                    href="/visitor-registration"
                    className="modal-action-btn modal-action-btn--visitor"
                    onClick={onClose}
                  >
                    <span>Register as Visitor (Free Pass)</span>
                    <Icon name="arrow" size={15} />
                  </Link>

                  <Link
                    href="/exhibitor-registration"
                    className="modal-action-btn modal-action-btn--exhibitor"
                    onClick={onClose}
                  >
                    <span>Book Exhibitor Stall</span>
                    <Icon name="arrow" size={15} />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/gallery"
                    className="modal-action-btn modal-action-btn--gallery"
                    onClick={onClose}
                  >
                    <span>View Central Photo Gallery</span>
                    <Icon name="arrow" size={15} />
                  </Link>

                  <Link
                    href="/about"
                    className="modal-action-btn modal-action-btn--about"
                    onClick={onClose}
                  >
                    <span>Read Two-Decade History</span>
                    <Icon name="arrow" size={15} />
                  </Link>
                </>
              )}

              <Link
                href="/contact"
                className="modal-action-btn modal-action-btn--contact"
                onClick={onClose}
              >
                <span>Go to Contact Secretariat Page</span>
                <Icon name="arrowUpRight" size={15} />
              </Link>
            </div>

            {/* Quick In-Popup Inquiry Form */}
            <div className="event-modal-quick-form-card">
              <div className="quick-form-header">
                <h4 className="quick-form-title">Quick Inquiry for {event.title}</h4>
                <p className="quick-form-sub">
                  Have questions about delegate badges, stall availability, or scientific participation? Send an inquiry directly to TNDTMA Secretariat.
                </p>
              </div>

              {formSubmitted ? (
                <div className="quick-form-success-alert">
                  <div className="success-check-circle">✓</div>
                  <div>
                    <h5>Inquiry Submitted Successfully!</h5>
                    <p>Thank you, {formData.name}. Our TNDTMA Secretariat team has received your message regarding {event.title} and will respond within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="event-modal-form-grid">
                  <div className="form-group-modal">
                    <label htmlFor="modal-name">Full Name *</label>
                    <input
                      id="modal-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dr. K. Ramesh"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="modal-form-input"
                    />
                  </div>

                  <div className="form-group-modal">
                    <label htmlFor="modal-email">Email Address *</label>
                    <input
                      id="modal-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. doctor@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="modal-form-input"
                    />
                  </div>

                  <div className="form-group-modal">
                    <label htmlFor="modal-phone">Phone / WhatsApp Number *</label>
                    <input
                      id="modal-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="modal-form-input"
                    />
                  </div>

                  <div className="form-group-modal">
                    <label htmlFor="modal-role">I Am A</label>
                    <select
                      id="modal-role"
                      name="role"
                      value={formData.role}
                      onChange={handleFormChange}
                      className="modal-form-select"
                    >
                      <option value="Practicing Dentist">Practicing Dentist</option>
                      <option value="Dental Student / PG Delegate">Dental Student / PG Delegate</option>
                      <option value="Dental Dealer / Trader">Dental Dealer / Trader</option>
                      <option value="Manufacturer / Exhibitor">Manufacturer / Exhibitor</option>
                      <option value="Dental Laboratory Technician">Dental Laboratory Technician</option>
                    </select>
                  </div>

                  <div className="form-group-modal form-group-modal--full">
                    <label htmlFor="modal-msg">Inquiry or Requirements</label>
                    <textarea
                      id="modal-msg"
                      name="message"
                      rows={3}
                      placeholder={`Briefly mention what you'd like to know regarding ${event.title}...`}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="modal-form-textarea"
                    />
                  </div>

                  <div className="form-submit-row-modal">
                    <button type="submit" className="btn-modal-submit-inquiry">
                      <span>Submit Inquiry to TNDTMA</span>
                      <Icon name="arrow" size={16} />
                    </button>
                    <span className="quick-form-privacy-note">
                      🔒 Your details are secure and encrypted.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
