"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function SubscribeForm({ compact = false }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  return (
    <form className={`subscribe ${compact ? "subscribe--compact" : ""}`} onSubmit={onSubmit}>
      <label htmlFor={compact ? "subscribe-email-footer" : "subscribe-email"} className="sr-only">
        Email address
      </label>
      <input
        id={compact ? "subscribe-email-footer" : "subscribe-email"}
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setDone(false);
        }}
      />
      <button type="submit" className="btn btn--primary" id={compact ? "subscribe-submit-footer" : "subscribe-submit"}>
        {done ? (
          <>
            <Icon name="check" size={18} /> Subscribed
          </>
        ) : (
          <>
            Subscribe <Icon name="arrow" size={18} />
          </>
        )}
      </button>
    </form>
  );
}
