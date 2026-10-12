import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, subtitle, align = "center", as: Tag = "h2" }) {
  return (
    <Reveal className={`section-title section-title--${align}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <Tag className="section-title__heading">{title}</Tag>
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
    </Reveal>
  );
}
