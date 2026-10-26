import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore illustrative pharmacy service categories in the Havenwell Pharmacy website concept by TGG HUB. This fictional demo does not provide medical or pharmacy services."
};

const serviceCategories = [
  {
    number: "01",
    title: "Prescription support",
    description:
      "An example information area explaining how a real pharmacy could describe its prescription processes, requirements and appropriate ways to ask questions.",
    note: "No prescriptions are accepted or processed through this demo."
  },
  {
    number: "02",
    title: "Medicine information",
    description:
      "A structured space for general information about medicine use, labels, storage and the importance of following directions from an appropriately qualified professional.",
    note: "This content does not provide individual treatment recommendations."
  },
  {
    number: "03",
    title: "Medication safety",
    description:
      "An example of how a pharmacy website could communicate safe storage, responsible medicine use and the importance of checking with a professional before changing a treatment.",
    note: "Personal medication reviews are not available through this demo."
  },
  {
    number: "04",
    title: "Health screening",
    description:
      "A sample section showing how a pharmacy could explain any screening services it genuinely offers, including eligibility, preparation and what results can and cannot tell someone.",
    note: "No screening, testing, diagnosis or measurement is performed here."
  },
  {
    number: "05",
    title: "Everyday wellbeing",
    description:
      "A potential home for general health-education material covering everyday wellbeing, prevention and informed conversations with healthcare professionals.",
    note: "General education is not a substitute for individual medical advice."
  },
  {
    number: "06",
    title: "Finding appropriate support",
    description:
      "A clear information pathway helping visitors understand where to find verified contact details and when a question needs attention from a qualified healthcare professional.",
    note: "A real pharmacy would publish verified contact and referral information."
  }
];

const serviceQuestions = [
  {
    question: "Can I order or purchase medicines through this website?",
    answer:
      "No. Havenwell is a fictional portfolio demonstration. It has no medicine catalogue, ordering system, prescription workflow or payment checkout."
  },
  {
    question: "Can I request a prescription review or health screening?",
    answer:
      "No. The service categories are illustrative examples of website content structure. No pharmacist consultation, screening, diagnosis or prescription service is provided."
  },
  {
    question: "Does the information replace advice from a healthcare professional?",
    answer:
      "No. The example content is general and educational. Individual symptoms, medication questions, treatment choices and urgent health concerns should be handled through appropriate professional or emergency care."
  },
  {
    question: "How would a real pharmacy confirm its services?",
    answer:
      "A real pharmacy would publish only services it is authorised, equipped and appropriately staffed to provide. Its team would approve the descriptions, eligibility requirements, opening information and contact details before publication."
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services and support"
        title="Helpful information, organised around real questions."
        description="A pharmacy website should explain what a service involves, who it may be for and how to find out more. This concept demonstrates that structure without claiming that any pharmacy service is available."
        primaryAction={{
          href: "/contact",
          label: "Explore the contact concept"
        }}
        secondaryAction={{
          href: "/health-resources",
          label: "Explore health resources"
        }}
      />

      <section
        aria-labelledby="service-categories-title"
        className="section"
      >
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Information categories</p>
              <h2 id="service-categories-title">
                Six ways to make service information clearer.
              </h2>
              <p>
                These sample categories demonstrate how a pharmacy could
                organise its website so visitors can identify relevant
                information without having to search through one long page.
              </p>
            </div>
          </div>

          <div className="card-grid">
            {serviceCategories.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-card__number">
                  {service.number}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="notice-panel">
                  <p>{service.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">What good service pages explain</p>
            <h2>Give people enough information to make their next step clear.</h2>

            <p>
              A useful service page should answer practical questions without
              implying that a service is available when it has not been
              confirmed.
            </p>

            <ul className="bullet-list">
              <li>
                <span
                  aria-hidden="true"
                  className="bullet-list__mark"
                >
                  1
                </span>
                <span>
                  <strong>What it involves:</strong> a plain-language
                  explanation of the service.
                </span>
              </li>
              <li>
                <span
                  aria-hidden="true"
                  className="bullet-list__mark"
                >
                  2
                </span>
                <span>
                  <strong>Who provides it:</strong> verified professional
                  qualifications and relevant limitations.
                </span>
              </li>
              <li>
                <span
                  aria-hidden="true"
                  className="bullet-list__mark"
                >
                  3
                </span>
                <span>
                  <strong>What happens next:</strong> confirmed requirements,
                  availability and contact instructions.
                </span>
              </li>
            </ul>
          </div>

          <div className="split-layout__visual">
            <div className="visual-panel">
              <span className="visual-panel__label">
                Example page structure
              </span>

              <h3>Clear information. Honest expectations.</h3>

              <ul className="bullet-list">
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Plain-language service description.</span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Eligibility, limitations and preparation details.</span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Verified contact and availability information.</span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Appropriate professional and safety guidance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="service-questions-title"
        className="section"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Common questions</p>
            <h2 id="service-questions-title">
              What this demonstration does and does not offer.
            </h2>
            <p>
              These answers distinguish a website design concept from a
              functioning pharmacy or healthcare service.
            </p>
          </div>

          <div className="faq-list">
            {serviceQuestions.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: "34px" }}>
            <div className="notice-panel">
              <p>
                <strong>Portfolio disclosure:</strong> Havenwell Pharmacy is
                fictional. No pharmacy, professional, physical location,
                medicine stock, licence, or actual service has been verified
                for this concept. The information on this page must not be
                treated as confirmation of real-world availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact section--white">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Continue exploring</p>
              <h2>A useful website makes the next step easier to understand.</h2>
              <p>
                See how the concept approaches health education and
                customer communication.
              </p>
            </div>

            <div className="cta-panel__action">
              <div className="button-row">
                <Link className="button button--light" href="/health-resources">
                  Health resources <span aria-hidden="true">→</span>
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