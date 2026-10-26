"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/health-resources", label: "Health resources" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="site-notice">
        <strong>Portfolio concept:</strong>{" "}
        Havenwell Pharmacy is a fictional demonstration by TGG HUB, not a
        verified operating pharmacy.
      </div>

      <header className="site-header">
        <div className="site-header__inner container">
          <Link
            aria-label="Havenwell Pharmacy home"
            className="brand"
            href="/"
            onClick={closeMenu}
          >
            <span aria-hidden="true" className="brand__mark">
              H
            </span>

            <span className="brand__text">
              Havenwell
              <span className="brand__caption">Pharmacy concept</span>
            </span>
          </Link>

          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            aria-label="Primary navigation"
            className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
            id="primary-navigation"
          >
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className="site-nav__link"
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__action">
            <Link className="button button--small" href="/contact">
              Get in touch
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}