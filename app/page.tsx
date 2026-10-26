import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Havenwell Pharmacy, a fictional community-pharmacy website concept by TGG HUB focused on clear information, accessible navigation and customer communication."
};

const serviceThemes = [
  {
    number: "01",
    title: "Understanding medicines",
    description:
      "A sample information area for explaining medicine-related topics in plain language, with appropriate guidance on when to consult a qualified healthcare professional.",
    href: "/services",
    label: "Explore service themes",
    icon: "medicine"
  },
  {
    number: "02",
    title: "Everyday wellbeing",
    description:
      "A considered space for general health-education topics, designed to help readers find useful information without replacing individual professional advice.",
    href: "/health-resources",
    label: "Explore health resources",
    icon: "wellbeing"
  },
  {
    number: "03",
    title: "Clear next steps",
    description:
      "An example of how a pharmacy website can organise contact information, explain what to expect and make the next step easier to understand.",
    href: "/contact",
    label: "View contact concept",
    icon: "conversation"
  }
] as const;

function ServiceIcon({ name }: { name: (typeof serviceThemes)[number]["icon"] }) {
  if (name === "medicine") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height="27"
        viewBox="0 0 28 28"
        width="27"
      >
        <rect
          height="10"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.7"
          transform="rotate(-45 8.1 19.9)"
          width="19"
          x="8.1"
          y="19.9"
        />
        <path
          d="m10.5 13.2 6.3 6.3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (name === "wellbeing") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height="27"
        viewBox="0 0 28 28"
        width="27"
      >
        <path
          d="M23.2 5.7a6.1 6.1 0 0 0-8.6 0L14 6.3l-.6-.6a6.1 6.1 0 0 0-8.6 8.6l.6.6L14 23.5l8.6-8.6.6-.6a6.1 6.1 0 0 0 0-8.6Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          d="M8 14h3l1.8-3.2 2.5 6.1 1.7-2.9H20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="27"
      viewBox="0 0 28 28"
      width="27"
    >
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h15A2.5 2.5 0 0 1 24 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-8l-5.5 4v-4h-1.5A2.5 2.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 10h10M9 14h7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="A considered approach to everyday care"
        title="Everyday care starts with clear information."
        description="A thoughtful pharmacy website should make service information easier to understand, help people find relevant health resources and explain the next step without overwhelming them."
        primaryAction={{
          href: "/services",
          label: "Explore service themes"
        }}
        secondaryAction={{
          href: "/about",
          label: "About the concept"
        }}
      />

      <section
        aria-label="Our approach"
        className="section section--compact section--white"
      >
        <div className="container">
          <div className="trust-strip">
            <div className="trust-item">
              <strong>Clear information</strong>
              <p>
                Organised content that helps visitors understand what they are
                reading.
              </p>
            </div>

            <div className="trust-item">
              <strong>Thoughtful guidance</strong>
              <p>
                Responsible health communication that recognises the limits of
                general information.
              </p>
            </div>

            <div className="trust-item">
              <strong>Transparent next steps</strong>
              <p>
                Straightforward navigation without invented services or
                unsupported promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Explore the concept</p>
              <h2>A clearer starting point for everyday questions.</h2>
              <p>
                These example content areas demonstrate how a pharmacy website
                can organise information around the questions visitors may
                bring with them.
              </p>
            </div>

            <div className="section-heading__action">
              <Link className="text-link" href="/services">
                View all service themes <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="card-grid">
            {serviceThemes.map((theme) => (
              <article className="service-card" key={theme.number}>
                <span className="service-card__number">
                  {theme.number}
                </span>

                <div
                  className={`card__icon${theme.icon === "wellbeing" ? " card__icon--teal" : ""}`}
                >
                  <ServiceIcon name={theme.icon} />
                </div>

                <h3>{theme.title}</h3>
                <p>{theme.description}</p>

                <Link className="text-link" href={theme.href}>
                  {theme.label} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">Designed with people in mind</p>
            <h2>Useful decisions matter more than unnecessary complexity.</h2>

            <p>
              Pharmacy websites often need to communicate sensitive,
              practical information. The interface should help visitors
              distinguish general education from professional advice and
              understand which information still needs confirmation.
            </p>

            <ul className="bullet-list">
              <li>
                <span aria-hidden="true" className="bullet-list__mark">
                  ✓
                </span>
                <span>Readable content and a predictable page structure.</span>
              </li>
              <li>
                <span aria-hidden="true" className="bullet-list__mark">
                  ✓
                </span>
                <span>
                  Clear distinctions between illustrative content and
                  confirmed facts.
                </span>
              </li>
              <li>
                <span aria-hidden="true" className="bullet-list__mark">
                  ✓
                </span>
                <span>
                  Straightforward navigation across desktop and mobile
                  layouts.
                </span>
              </li>
            </ul>

            <div style={{ marginTop: "26px" }}>
              <Link className="text-link" href="/about">
                Understand the approach <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="split-layout__visual">
            <div className="visual-panel">
              <span className="visual-panel__label">
                The information journey
              </span>

              <h3>From a question to a clearer next step.</h3>

              <p>
                The proposed experience helps visitors orient themselves
                before they decide where to seek further information or
                professional assistance.
              </p>

              <ul className="bullet-list">
                <li>
                  <span aria-hidden="true" className="bullet-list__mark">
                    1
                  </span>
                  <span>
                    <strong>Find</strong> the relevant information area.
                  </span>
                </li>
                <li>
                  <span aria-hidden="true" className="bullet-list__mark">
                    2
                  </span>
                  <span>
                    <strong>Understand</strong> the limits of general
                    information.
                  </span>
                </li>
                <li>
                  <span aria-hidden="true" className="bullet-list__mark">
                    3
                  </span>
                  <span>
                    <strong>Choose</strong> an appropriate next step.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">A responsible starting point</p>
            <h2>Trust begins with being clear about what is real.</h2>
            <p>
              Havenwell is a fictional demonstration, so it does not claim
              professional credentials, operating hours, medicine stock,
              service availability or a physical pharmacy location.
            </p>
          </div>

          <div className="notice-panel">
            <p>
              <strong>Important:</strong> This website is a portfolio concept,
              not an operating pharmacy or a medical service. Its sample
              information is not individualized medical advice. Do not use
              this demo to make treatment decisions or submit personal,
              prescription or medical information.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--compact section--white">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Explore the next step</p>
              <h2>Good information should be easy to find.</h2>
              <p>
                Explore the example service categories or review how a clear
                contact experience could work on a pharmacy website.
              </p>
            </div>

            <div className="cta-panel__action">
              <div className="button-row">
                <Link className="button button--light" href="/services">
                  Explore services <span aria-hidden="true">→</span>
                </Link>
                <Link
                  className="button button--secondary"
                  href="/contact"
                >
                  Contact concept
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}