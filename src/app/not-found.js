import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="not-found__code text-gradient">404</span>
        <h1>This page has gone missing</h1>
        <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn btn--primary btn--lg">
          Back to home <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
