import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function EventCard({ event, onSelect }) {
  const isUpcoming = event.category === "Upcoming" || event.status === "Upcoming";

  const handleCardClick = (e) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(event);
    }
  };

  return (
    <article
      className={`event-card ${isUpcoming ? "event-card--upcoming" : "event-card--past"} ${onSelect ? "event-card--interactive" : ""}`}
      onClick={onSelect ? handleCardClick : undefined}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={
        onSelect
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(event);
              }
            }
          : undefined
      }
    >
      {onSelect ? (
        <button
          type="button"
          onClick={handleCardClick}
          className="event-card__media event-card__media--btn"
          aria-label={`Open ${event.title} in popup`}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
          <span className={`chip chip--float ${isUpcoming ? "chip--upcoming" : "chip--past"}`}>
            {isUpcoming ? "★ UPCOMING FLAGSHIP" : `${event.year || "PAST"} EDITION`}
          </span>
          <span className={`event-card__price ${isUpcoming ? "event-card__price--upcoming" : "event-card__price--concluded"}`}>
            {isUpcoming ? "FREE VISITOR REGISTRATION" : "Concluded"}
          </span>
        </button>
      ) : (
        <Link href={`/events/${event.slug}`} className="event-card__media" aria-label={event.title}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
          <span className={`chip chip--float ${isUpcoming ? "chip--upcoming" : "chip--past"}`}>
            {isUpcoming ? "★ UPCOMING FLAGSHIP" : `${event.year || "PAST"} EDITION`}
          </span>
          <span className={`event-card__price ${isUpcoming ? "event-card__price--upcoming" : "event-card__price--concluded"}`}>
            {isUpcoming ? "FREE VISITOR REGISTRATION" : "Concluded"}
          </span>
        </Link>
      )}

      <div className="event-card__body">
        <ul className="meta">
          <li>
            <Icon name="calendar" size={16} /> <span>{event.dateLabel}</span>
          </li>
          <li>
            <Icon name="pin" size={16} /> <span>{event.venue}</span>
          </li>
        </ul>

        <h3 className="event-card__title">
          {onSelect ? (
            <button
              type="button"
              className="event-card__title-btn"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(event);
              }}
            >
              {event.title}
            </button>
          ) : (
            <Link href={`/events/${event.slug}`}>{event.title}</Link>
          )}
        </h3>

        <p className="event-card__excerpt">{event.excerpt}</p>

        <div className="event-card__footer">
          {onSelect ? (
            <button
              type="button"
              className="link-arrow btn-open-event-modal"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(event);
              }}
            >
              <span>View details &amp; PDF</span> <Icon name="arrow" size={16} />
            </button>
          ) : (
            <Link href={`/events/${event.slug}`} className="link-arrow">
              <span>View details</span> <Icon name="arrow" size={16} />
            </Link>
          )}

          {isUpcoming ? (
            onSelect ? (
              <button
                type="button"
                className="btn-card-register"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(event);
                }}
              >
                EXPLORE &amp; REGISTER
              </button>
            ) : (
              <Link href="/visitor-registration" className="btn-card-register">
                REGISTER FREE
              </Link>
            )
          ) : (
            onSelect ? (
              <button
                type="button"
                className="btn-card-recap"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(event);
                }}
              >
                View Edition →
              </button>
            ) : (
              <Link href={`/events/${event.slug}`} className="btn-card-recap">
                Event Story →
              </Link>
            )
          )}
        </div>
      </div>
    </article>
  );
}
