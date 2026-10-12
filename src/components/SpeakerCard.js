"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function SpeakerCard({ speaker, delay = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="ts-speaker wow fadeInUp" style={{ animationDelay: `${delay}ms` }}>
        <div className="speaker-img">
          <Image
            className="img-fluid"
            src={speaker.image}
            alt={speaker.name}
            width={255}
            height={255}
            style={{ objectFit: "cover" }}
          />
          <button
            type="button"
            className="view-speaker"
            aria-label={`View ${speaker.name} details`}
            onClick={() => setModalOpen(true)}
          >
            <span className="plus-icon">+</span>
          </button>
        </div>
        <div className="ts-speaker-info">
          <h3 className="ts-title">
            <button
              type="button"
              className="speaker-name-btn"
              onClick={() => setModalOpen(true)}
            >
              {speaker.name}
            </button>
          </h3>
          <p className="speaker-role">{speaker.role}</p>
        </div>
      </div>

      {modalOpen && (
        <div
          className="speaker-modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setModalOpen(false)}
        >
          <div className="speaker-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="speaker-modal-close"
              aria-label="Close modal"
              onClick={() => setModalOpen(false)}
            >
              <Icon name="close" size={24} />
            </button>

            <div className="speaker-modal-body">
              <div className="speaker-modal-photo">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={340}
                  height={380}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>

              <div className="speaker-modal-content">
                <h3 className="modal-speaker-name">{speaker.name}</h3>
                <span className="speaker-designation">{speaker.role}</span>
                <p className="speaker-bio">{speaker.bio}</p>

                <h4 className="session-heading">Sessions by {speaker.name}</h4>
                <div className="speaker-sessions-grid">
                  {(speaker.sessions || [
                    { day: "Day 1", time: "10.30 - 11.30 am", topic: "Marketing Matters" },
                    { day: "Day 2", time: "02.00 - 03.30 pm", topic: "Digital Strategy" },
                  ]).map((s, idx) => (
                    <div className="session-item" key={idx}>
                      <h4>{s.day}</h4>
                      <span className="session-time">{s.time}</span>
                      <p className="session-topic">{s.topic}</p>
                    </div>
                  ))}
                </div>

                <div className="speaker-social-links">
                  <a href="#" aria-label="Facebook"><Icon name="facebook" size={16} /></a>
                  <a href="#" aria-label="Twitter"><Icon name="twitter" size={16} /></a>
                  <a href="#" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
                  <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
