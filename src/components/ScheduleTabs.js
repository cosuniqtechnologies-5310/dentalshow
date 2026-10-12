"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { programme } from "@/data/events";
import { getSpeaker } from "@/data/speakers";

export default function ScheduleTabs() {
  const [active, setActive] = useState(programme[0].id);
  const currentDay = programme.find((d) => d.id === active) || programme[0];

  return (
    <div className="ts-schedule-wrapper">
      <div className="row align-items-center mb-50 schedule-top-row">
        <div className="col-lg-6 schedule-header-col">
          <div className="ts-schedule-content">
            <h2 className="column-title">
              <span>SCHEDULE DETAILS</span>
              Information of Event Schedules
            </h2>
            <div className="title-zigzag" aria-hidden="true" />
            <p className="schedule-intro-text">
              World is committed to making participation in the event a harassment free experience for everyone,
              regardless of level of experience, gender, gender identity and expression
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="ts-schedule-info">
            <ul className="nav nav-tabs circle-tab-list" role="tablist">
              {programme.map((d, index) => {
                const isActive = active === d.id;
                return (
                  <li className={`nav-item circle-tab-item tab-item-${index + 1}`} key={d.id}>
                    <button
                      type="button"
                      role="tab"
                      id={`tab-bubble-${d.id}`}
                      aria-selected={isActive}
                      className={`circle-tab-btn ${isActive ? "active" : ""}`}
                      onClick={() => setActive(d.id)}
                    >
                      <h3>{d.date}</h3>
                      <span>{d.day}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="tab-content schedule-tabs">
        <div role="tabpanel" className="tab-pane active" id={`panel-${currentDay.id}`} key={currentDay.id}>
          {currentDay.slots.map((slot, i) => {
            const speaker = slot.speaker ? getSpeaker(slot.speaker) : null;
            return (
              <div className={`schedule-listing ${slot.sponsorLogo ? "is-lunch" : ""}`} key={`${slot.title}-${i}`}>
                <div className="schedule-slot-time">
                  <span>{slot.time}</span>
                  {slot.type && <span className="slot-type-label">{slot.type}</span>}
                </div>
                <div className="schedule-slot-info">
                  {speaker && (
                    <div className="schedule-slot-speaker-avatar">
                      <Image
                        className="schedule-slot-speakers"
                        src={speaker.image}
                        alt={speaker.name}
                        width={85}
                        height={85}
                      />
                    </div>
                  )}
                  <div className="schedule-slot-info-content">
                    <h3 className="schedule-slot-title">
                      {slot.title}
                      {(slot.speakerName || (speaker && speaker.name)) && (
                        <strong> @ {slot.speakerName || speaker.name}</strong>
                      )}
                    </h3>
                    {slot.desc && <p>{slot.desc}</p>}
                    {slot.sponsorLogo && (
                      <div className="schedule-sponsor-logo">
                        <Image
                          src={slot.sponsorLogo}
                          alt="Sponsor Logo"
                          width={140}
                          height={45}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="schedule-more-btn-wrap">
        <Link href="/events" className="btn btn--primary">
          Browse All Events
        </Link>
      </div>
    </div>
  );
}
