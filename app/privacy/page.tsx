import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy and Demo Limitations",
  description:
    "Understand the privacy boundaries and limitations of Havenwell Pharmacy, a fictional static website concept by TGG HUB."
};

const demoBoundaries = [
  {
    number: "01",
    title: "No customer account",
    description:
      "The demonstration has no sign-up, login, profile or account-management system."
  },
  {
    number: "02",
    title: "No medical submissions",
    description:
      "There is no prescription upload, medical-record submission, patient intake form or clinical messaging feature."
  },
  {
    number: "03",
    title: "No transactions",
    description:
      "The concept has no medicine ordering, checkout, payment collection, delivery booking or appointment-booking workflow."
  },
  {
    number: "04",
    title: "External websites are separate",
    description:
      "Links to external organisations take visitors to websites with their own operators, services and privacy practices."
  }
];

const privacyQuestions = [
  {
    question: "Does this website collect my medical information?",
    answer:
      "The current demonstration does not provide a medical-information form, prescription upload, account system or clinical messaging feature. Do not enter sensitive information into any demonstration or test feature."
  },
  {
    question: "Does that mean absolutely no information is processed?",
    answer:
      "No. When a website is hosted, the hosting provider or related infrastructure may process technical request information, such as information used to deliver, secure and troubleshoot the site. The specific processing depends on the hosting and deployment configuration. This page does not claim that all such processing is absent."
  },
  {
    question: "Do external links follow Havenwell's privacy practices?",
    answer:
      "No. External websites operate independently and may have their own data collection, cookies, analytics and privacy policies. Review the destination's information before using it."
  },
  {
    question: "Can I use this page to contact a real pharmacy or request healthcare?",
    answer:
      "No. Havenwell Pharmacy is fictional. This demonstration has no verified physical location, operating pharmacy team or healthcare service. It should not be used to seek medical advice or care."
  },
  {
    question: "What would need to change before a real pharmacy could use this design?",
    answer:
      "The actual operator would need to define its data practices, identify the systems and service providers involved, verify any forms or integrations, establish appropriate security and retention controls, and publish a privacy notice that accurately describes its real operations."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy and demo limitations"
        title="Be clear about what a website does with information."
        description="A trustworthy website should explain what it does, what it does not do and where its limitations begin. This page documents the intended boundaries of the Havenwell Pharmacy portfolio concept."
        primaryAction={{
          href: "/",
          label: "Return to the homepage"
        }}
        secondaryAction={{
          href: "/contact",
          label: "View contact-page concept"
        }}
      />

      <section
        aria-labelledby="privacy-scope-title"
        className="section"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Current demonstration</p>
            <h2 id="privacy-scope-title">
              A website concept, not a customer-service platform.
            </h2>
            <p>
              The current project is a demonstration of website structure,
              interface design and informational content. It is not connected
              to an operating pharmacy or patient-management system.
            </p>
          </div>

          <div className="card-grid">
            {demoBoundaries.map((item) => (
              <article className="service-card" key={item.number}>
                <span className="service-card__number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">Information and infrastructure</p>
            <h2>Distinguish website features from hosting operations.</h2>

            <p>
              The absence of a form or account system does not establish that
              every system involved in serving a website processes no
              information. Hosting, security and delivery infrastructure may
              process technical information as part of operating the site.
            </p>

            <p>
              The exact data, retention periods and applicable controls depend
              on the actual deployment and service configuration. Those
              details should be verified rather than assumed.
            </p>

            <p>
              Havenwell does not claim that every possible cookie, log,
              third-party request or infrastructure-level data process has
              been independently audited.
            </p>
          </div>

          <div className="split-layout__visual">
            <div className="visual-panel">
              <span className="visual-panel__label">
                Privacy principles
              </span>

              <h3>Make specific, verifiable statements.</h3>

              <ul className="bullet-list">
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>
                    Describe the features that are actually implemented.
                  </span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>
                    Identify third-party services before describing their
                    data practices.
                  </span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>
                    Confirm retention, access and security arrangements
                    against the deployed system.
                  </span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>
                    Update privacy disclosures when actual functionality
                    changes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="privacy-questions-title"
        className="section"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Common questions</p>
            <h2 id="privacy-questions-title">
              Important boundaries to understand.
            </h2>
          </div>

          <div className="faq-list">
            {privacyQuestions.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compact section--white">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Fictional portfolio concept</p>
              <h2>Clear boundaries are part of a good user experience.</h2>
              <p>
                Havenwell demonstrates how a pharmacy website can organise
                information while being transparent about the features and
                services that have not been implemented.
              </p>
            </div>

            <div className="cta-panel__action">
              <div className="button-row">
                <Link className="button button--light" href="/about">
                  About the concept
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  className="button button--secondary"
                  href="/health-resources"
                >
                  Health resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}