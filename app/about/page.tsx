import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the thinking behind Havenwell Pharmacy, a fictional TGG HUB portfolio concept exploring clear communication, responsible health information and accessible pharmacy website design."
};

const designPrinciples = [
  {
    number: "01",
    title: "Clarity before complexity",
    description:
      "Organise information around the questions people actually have. Use understandable language, meaningful headings and navigation that does not require visitors to guess."
  },
  {
    number: "02",
    title: "Careful communication",
    description:
      "Explain the limits of general health information, avoid unsupported claims and help visitors recognise when a question needs a qualified healthcare professional."
  },
  {
    number: "03",
    title: "Trust through transparency",
    description:
      "Make service descriptions, qualifications, availability and contact information verifiable rather than relying on polished design to imply credibility."
  },
  {
    number: "04",
    title: "Access for everyday users",
    description:
      "Build a responsive experience with readable text, visible keyboard focus, descriptive links and a consistent structure across screen sizes."
  }
];

const experienceStages = [
  {
    number: "01",
    title: "Find",
    description:
      "Visitors can identify the relevant information area without navigating through an unnecessarily complicated menu."
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Content explains its purpose, limitations and relevant next steps in language that is easier to follow."
  },
  {
    number: "03",
    title: "Act appropriately",
    description:
      "Visitors can identify what information remains to be confirmed and where a real pharmacy would provide verified contact or service details."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the concept"
        title="A more considered way to communicate everyday care."
        description="Havenwell Pharmacy is a fictional website concept created to explore how thoughtful design and responsible information architecture could make a community-pharmacy website easier to understand and navigate."
        primaryAction={{
          href: "/services",
          label: "Explore service themes"
        }}
        secondaryAction={{
          href: "/health-resources",
          label: "Explore health resources"
        }}
      />

      <section className="section section--white">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">The idea behind Havenwell</p>
            <h2>Make important information easier to find and understand.</h2>

            <p>
              A pharmacy website can be more than a list of products and
              contact details. It can help visitors understand the information
              available to them, distinguish general education from
              personalised advice and identify the appropriate next step.
            </p>

            <p>
              Havenwell explores that possibility through a calm visual
              identity, clear page structure and content organised around
              familiar customer questions.
            </p>

            <p>
              The intention is not to make healthcare look more complicated
              than it is. It is to reduce avoidable confusion while being
              honest about what a website can and cannot do.
            </p>
          </div>

          <div className="split-layout__visual">
            <div className="visual-panel">
              <span className="visual-panel__label">
                Our guiding idea
              </span>

              <h3>Good design supports good decisions.</h3>

              <p>
                A well-organised interface can improve how information is
                presented. It cannot replace professional judgement,
                verified credentials or appropriate care.
              </p>

              <ul className="bullet-list">
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Readable and logically organised information.</span>
                </li>

                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Honest descriptions and clear limitations.</span>
                </li>

                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Practical next steps without false promises.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="design-principles-title"
        className="section"
      >
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Design principles</p>
              <h2 id="design-principles-title">
                Four principles shape the experience.
              </h2>
              <p>
                These principles guide how the concept presents information,
                structures pages and communicates its limitations.
              </p>
            </div>
          </div>

          <div className="grid grid--two">
            {designPrinciples.map((principle) => (
              <article className="card" key={principle.number}>
                <span className="service-card__number">
                  {principle.number}
                </span>

                <h3>{principle.title}</h3>

                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">The intended experience</p>
            <h2 id="experience-stages-title">
              From the first question to a clearer next step.
            </h2>
            <p>
              The website is designed around a simple information journey
              rather than a collection of disconnected pages.
            </p>
          </div>

          <div className="grid grid--three">
            {experienceStages.map((stage) => (
              <article className="card" key={stage.number}>
                <span className="service-card__number">
                  {stage.number}
                </span>

                <h3>{stage.title}</h3>

                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">What this concept is not</p>
            <h2>A credible design should never depend on invented facts.</h2>

            <p>
              Havenwell does not represent an established pharmacy. It has no
              verified operating premises, registered pharmacy identity,
              confirmed professional team, medicine inventory or active
              healthcare service.
            </p>

            <p>
              Service categories and descriptions are illustrative content
              used to demonstrate website structure. They are not statements
              that any real pharmacy provides those services.
            </p>

            <p>
              Before a concept like this is adapted for an operating pharmacy,
              its authorised representatives would need to verify and approve
              all institutional information, professional details, services,
              health content and applicable requirements.
            </p>
          </div>

          <div className="split-layout__visual">
            <div className="notice-panel">
              <p>
                <strong>Important distinction:</strong> A professional-looking
                website is not proof of registration, licensing, clinical
                competence or service availability. Visitors should verify a
                real pharmacy's identity and qualifications independently.
              </p>
            </div>

            <div style={{ marginTop: "22px" }}>
              <Link className="text-link" href="/privacy">
                Read privacy and demo limitations{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact section--white">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Continue exploring</p>

              <h2>Explore how the information is organised.</h2>

              <p>
                Review the sample service categories or see how general
                health-education content can be presented responsibly.
              </p>
            </div>

            <div className="cta-panel__action">
              <div className="button-row">
                <Link className="button button--light" href="/services">
                  Explore services <span aria-hidden="true">→</span>
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