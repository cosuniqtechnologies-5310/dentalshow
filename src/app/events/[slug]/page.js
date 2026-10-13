import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import { events, getEvent } from "@/data/events";
import { getSpeaker } from "@/data/speakers";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event not found" };
  return { title: event.title, description: event.excerpt };
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const related = events.filter((e) => e.slug !== event.slug && e.category === event.category).concat(
    events.filter((e) => e.slug !== event.slug && e.category !== event.category)
  ).slice(0, 3);

  const idx = events.findIndex((e) => e.slug === event.slug);
  const prev = events[(idx - 1 + events.length) % events.length];
  const next = events[(idx + 1) % events.length];

  return (
    <>
      <PageBanner
        title={event.title}
        crumbs={[{ label: "Events", href: "/events" }, { label: event.title }]}
        subtitle={event.excerpt}
        image={event.image}
      />

      <section className="section font-modern fold-white">
        <div className="container event-layout">
          <article className="event-main">
            <div className="event-hero">
              <Image src={event.image} alt={event.title} fill priority sizes="(max-width: 1000px) 100vw, 66vw" />
              <span className="chip chip--float">{event.category}</span>
            </div>

            <h2>About this event</h2>
            {event.description.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h3 className="mt-md">Highlights</h3>
            <ul className="check-list check-list--cols">
              {event.highlights.map((h) => (
                <li key={h}>
                  <Icon name="check" size={18} /> {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-md">Sessions</h3>
            <ol className="timeline">
              {event.sessions.map((s) => {
                const sp = getSpeaker(s.speaker);
                return (
                  <li key={s.title}>
                    <span className="timeline__time">{s.time}</span>
                    <div>
                      <strong>{s.title}</strong>
                      {sp && <span>with {sp.name}</span>}
                    </div>
                  </li>
                );
              })}
            </ol>

            <h3 className="mt-md">Speakers</h3>
            <div className="mini-speakers">
              {event.speakers.map((id) => {
                const sp = getSpeaker(id);
                return (
                  <div className="mini-speaker" key={id}>
                    <Image src={sp.image} alt={sp.name} width={72} height={72} />
                    <div>
                      <strong>{sp.name}</strong>
                      <span>{sp.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="event-pager">
              <Link href={`/events/${prev.slug}`} className="event-pager__link">
                <small>← Previous</small>
                <strong>{prev.title}</strong>
              </Link>
              <Link href={`/events/${next.slug}`} className="event-pager__link event-pager__link--next">
                <small>Next →</small>
                <strong>{next.title}</strong>
              </Link>
            </div>
          </article>

          <aside className="event-side">
            <div className="side-card">
              <div className="side-card__price">
                <span>Ticket</span>
                <strong>{event.price}</strong>
              </div>
              <ul className="side-card__list">
                <li>
                  <Icon name="calendar" size={20} />
                  <div>
                    <small>Date</small>
                    {event.dateLabel}
                  </div>
                </li>
                <li>
                  <Icon name="clock" size={20} />
                  <div>
                    <small>Time</small>
                    {event.time}
                  </div>
                </li>
                <li>
                  <Icon name="pin" size={20} />
                  <div>
                    <small>Venue</small>
                    {event.venue}
                  </div>
                </li>
                <li>
                  <Icon name="users" size={20} />
                  <div>
                    <small>Capacity</small>
                    {event.seats.toLocaleString("en-IN")} seats
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="btn btn--primary btn--block btn--lg">
                <Icon name="ticket" size={20} /> Reserve your seat
              </Link>
              <p className="side-card__note">Questions about this event? <Link href="/contact">Contact our team</Link>.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--alt font-modern fold-white">
        <div className="container">
          <SectionTitle eyebrow="You may also like" title="Related Events" />
          <div className="grid grid--3">
            {related.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
