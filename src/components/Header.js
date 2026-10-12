"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "@/data/site";

export function Logo({ light = false }) {
  return (
    <Link
      href="/"
      className={`exhibz-logo ${light ? "exhibz-logo--light" : ""}`}
      aria-label={`${site.name} home`}
    >
      <div className="site-brand-wrap">
        <Image
          src="/images/logos/logo.png"
          alt="Dental Show 2027 Logo"
          width={240}
          height={80}
          priority
          className="exhibz-logo__img"
        />
      </div>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const t = setTimeout(onScroll, 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Section 3.1: Home | About Us | Events | Gallery | Contact Us
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={`exhibz-header ${scrolled ? "is-sticky" : ""}`}>
      <div className="container exhibz-header__inner">
        <Logo />

        <nav className={`exhibz-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul className="exhibz-nav__list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label} className="exhibz-nav__item">
                  <Link
                    href={item.href}
                    className={`exhibz-nav__link ${isActive ? "is-active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Section 3.1 Buttons: Visitor Registration | Exhibitor Registration */}
          <div className="header-actions">
            <Link
              href="/visitor-registration"
              className="btn-header-visitor"
              onClick={() => setOpen(false)}
            >
              Visitor Registration
            </Link>
            <Link
              href="/exhibitor-registration"
              className="btn-header-exhibitor"
              onClick={() => setOpen(false)}
            >
              Exhibitor Registration
            </Link>
          </div>
        </nav>

        <button
          type="button"
          id="menu-toggle"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>
    </header>
  );
}
