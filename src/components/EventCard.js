import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function EventCard({ event }) {
  const isUpcoming = event.category === "Upcoming" || event.status === "Upcoming";

  return (
    <article className={`event-card ${isUpcoming ? "event-card--upcoming" : "event-card--past"}`}>
      <Link href={`/events/${event.slug}`} className="event-card__media" aria-label={event.title}>
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <span className={`chip chip--float ${isUpcoming ? "chip--upcoming" : "chip--past"}`}>
          {isUpcoming ? "★ UPCOMING FLAGSHIP" : "PAST EDITION"}
        </span>
        <span className={`event-card__price ${isUpcoming ? "event-card__price--upcoming" : "event-card__price--concluded"}`}>
          {isUpcoming ? "FREE VISITOR REGISTRATION" : "Concluded"}
        </span>
      </Link>
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
          <Link href={`/events/${event.slug}`}>{event.title}</Link>
        </h3>
        <p className="event-card__excerpt">{event.excerpt}</p>
        <div className="event-card__footer">
          <Link href={`/events/${event.slug}`} className="link-arrow">
            <span>View details</span> <Icon name="arrow" size={16} />
          </Link>
          {isUpcoming ? (
            <Link href="/visitor-registration" className="btn-card-register">
              REGISTER FREE
            </Link>
          ) : (
            <Link href={`/events/${event.slug}`} className="btn-card-recap">
              Event Story →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
