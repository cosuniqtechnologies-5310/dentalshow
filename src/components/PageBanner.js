import Link from "next/link";
import Image from "next/image";

export default function PageBanner({ title, crumbs = [], subtitle, image = "/images/hero-stage.jpg" }) {
  return (
    <section className="page-banner">
      <Image src={image} alt="" fill priority sizes="100vw" className="page-banner__bg" />
      <div className="page-banner__overlay" />
      <div className="container page-banner__inner">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="breadcrumb__sep" aria-hidden="true">/</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="page-banner__title">{title}</h1>
        {subtitle && <p className="page-banner__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
