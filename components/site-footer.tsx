import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Pharmacy services" },
  { href: "/about", label: "About Havenwell" },
  { href: "/health-resources", label: "Health resources" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy and demo limitations" }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main container">
        <div className="site-footer__identity">
          <Link
            aria-label="Havenwell Pharmacy home"
            className="brand"
            href="/"
          >
            <span aria-hidden="true" className="brand__mark">
              H
            </span>

            <span className="brand__text">
              Havenwell
              <span className="brand__caption">Pharmacy concept</span>
            </span>
          </Link>

          <p>
            A considered community-pharmacy website concept, designed to make
            service information easier to navigate and customer communication
            more approachable.
          </p>

          <p>
            Created by <span className="site-footer__credit">TGG HUB</span> as a
            portfolio demonstration.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="site-footer__navigation"
        >
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom container">
        <p>
          © {new Date().getFullYear()} Havenwell Pharmacy concept.
        </p>

        <p className="site-footer__credit">A TGG HUB demonstration</p>

        <p className="site-footer__disclaimer">
          Havenwell Pharmacy is fictional and is not a verified operating
          pharmacy. Services and health information shown in this demonstration
          are illustrative, are not individualized medical advice, and must not
          be treated as confirmation that any pharmacy service is available.
          Please do not submit real personal, prescription or medical
          information through demonstration features.
        </p>
      </div>
    </footer>
  );
}