import PageBanner from "./PageBanner";

export default function LegalPage({ title, updated, intro, sections, crumb }) {
  return (
    <>
      <PageBanner title={title} crumbs={[{ label: crumb || title }]} subtitle={`Last updated: ${updated}`} />
      <section className="section">
        <div className="container legal">
          <aside className="legal__toc" aria-label="On this page">
            <strong>On this page</strong>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
          <article className="legal__body">
            <p className="legal__intro">{intro}</p>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal__section">
                <h2>
                  {i + 1}. {s.title}
                </h2>
                {s.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
