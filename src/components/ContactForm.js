"use client";

import { useState } from "react";
import Icon from "./Icon";

const initial = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email.";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues(initial);
    }
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon">
          <Icon name="check" size={32} strokeWidth={2.2} />
        </span>
        <h3>Thank you!</h3>
        <p>Your message has been received. Our team will get back to you within one business day.</p>
        <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="contact-name">Full name</label>
          <input id="contact-name" name="name" value={values.name} onChange={update} placeholder="Dr. Jane Doe" aria-invalid={!!errors.name} />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" value={values.email} onChange={update} placeholder="you@clinic.com" aria-invalid={!!errors.email} />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" value={values.subject} onChange={update} placeholder="How can we help?" />
      </div>
      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={6} value={values.message} onChange={update} placeholder="Tell us a little more…" aria-invalid={!!errors.message} />
        {errors.message && <span className="field__error">{errors.message}</span>}
      </div>
      <button type="submit" id="contact-submit" className="btn btn--primary btn--lg">
        Send message <Icon name="arrow" size={18} />
      </button>
    </form>
  );
}
