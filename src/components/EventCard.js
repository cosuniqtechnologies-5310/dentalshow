import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function EventCard({ event }) {
  const isUpcoming = event.category === "Upcoming" || event.status === "Upcoming";

  return (
    <article className="event-card">
      <Link href={`/events/${event.slug}`} className="event-card__media" aria-label={event.title}>
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <span className={`chip chip--float ${isUpcoming ? "chip--upcoming" : "chip--past"}`}>
          {isUpcoming ? "Upcoming Flagship" : "Past Edition"}
        </span>
        <span className={`event-card__price ${isUpcoming ? "event-card__price--upcoming" : "event-card__price--concluded"}`}>
          {event.price}
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
            View details <Icon name="arrow" size={16} />
          </Link>
          {isUpcoming && (
            <Link href="/visitor-registration" className="btn btn--primary btn--sm" style={{ padding: "8px 14px", fontSize: "12px" }}>
              Register Free
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
