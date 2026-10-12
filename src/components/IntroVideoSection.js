"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function IntroVideoSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="ts-intro intro-line section-bg" style={{ backgroundImage: "url(/images/lines.png)" }}>
      <div className="container">
        <div className="intro-grid-container">
          {/* Left Column (Cards 01 and 03) */}
          <div className="intro-column left-col">
            <div className="single-intro-text mb-70 card-01">
              <span className="intro-card-icon" aria-hidden="true">
                <Icon name="mic" size={44} strokeWidth={1.5} />
              </span>
              <h3 className="ts-title">Great Speakers</h3>
              <p>How you transform your business as technology, consumer, habits industry dynamic</p>
              <span className="count-number">01</span>
            </div>

            <div className="single-intro-text card-03">
              <span className="intro-card-icon" aria-hidden="true">
                <Icon name="users" size={44} strokeWidth={1.5} />
              </span>
              <h3 className="ts-title">New People</h3>
              <p>How you transform your business as technology, consumer, habits industry dynamic</p>
              <span className="count-number">03</span>
            </div>
          </div>

          {/* Center Column (Circular Video Portal) */}
          <div className="intro-column center-col">
            <div className="intro-video-portal">
              <Image
                className="img-fluid"
                src="/images/video/video_img.jpg"
                alt="Conference Attendees"
                width={700}
                height={700}
                priority
              />
              <button
                type="button"
                className="video-play-btn"
                aria-label="Play conference video"
                onClick={() => setVideoOpen(true)}
              >
                <span className="play-triangle">▶</span>
              </button>
            </div>
          </div>

          {/* Right Column (Cards 02 and 04) */}
          <div className="intro-column right-col">
            <div className="single-intro-text mb-70 card-02">
              <span className="intro-card-icon" aria-hidden="true">
                <Icon name="handshake" size={44} strokeWidth={1.5} />
              </span>
              <h3 className="ts-title">Networking</h3>
              <p>How you transform your business as technology, consumer, habits industry dynamic</p>
              <span className="count-number">02</span>
            </div>

            <div className="single-intro-text card-04">
              <span className="intro-card-icon" aria-hidden="true">
                <Icon name="sparkle" size={44} strokeWidth={1.5} />
              </span>
              <h3 className="ts-title">Have Fun</h3>
              <p>How you transform your business as technology, consumer, habits industry dynamic</p>
              <span className="count-number">04</span>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          className="video-modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setVideoOpen(false)}
        >
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="video-modal-close"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
            >
              <Icon name="close" size={26} />
            </button>
            <div className="video-iframe-wrap">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/Bey4XXJAqS8?autoplay=1"
                title="Conference Teaser"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
