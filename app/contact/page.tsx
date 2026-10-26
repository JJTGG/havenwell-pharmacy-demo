import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Explore the contact-page concept for Havenwell Pharmacy, a fictional pharmacy website demonstration by TGG HUB. No real pharmacy contact, location or healthcare service is available through this page."
};

const contactChannels = [
  {
    number: "01",
    title: "Phone and WhatsApp",
    description:
      "A real pharmacy could publish its verified telephone or WhatsApp contact, suitable enquiry hours and guidance on the types of questions its team can handle.",
    status:
      "No phone number or WhatsApp line is configured for this concept."
  },
  {
    number: "02",
    title: "Email enquiries",
    description:
      "A monitored business email could give customers another way to ask non-urgent questions about confirmed services, availability and administrative requirements.",
    status:
      "No pharmacy inbox is connected to this demonstration."
  },
  {
    number: "03",
    title: "Location and opening hours",
    description:
      "A verified address, accurate opening hours, accessibility information and appropriate directions could help visitors plan a physical visit.",
    status:
      "Havenwell has no verified physical location or opening schedule."
  }
];

const publicationChecks = [
  {
    title: "Verify every contact channel",
    description:
      "Confirm ownership, monitoring arrangements, response expectations and the people authorised to handle enquiries."
  },
  {
    title: "Publish accurate location details",
    description:
      "Confirm the physical address, operating hours, accessibility information and any directions before making them public."
  },
  {
    title: "Set boundaries for enquiries",
    description:
      "Explain which questions can be handled through each channel and direct urgent or clinical concerns to appropriate care."
  },
  {
    title: "Protect customer information",
    description:
      "Collect only information that is genuinely necessary, explain how it will be used and apply appropriate privacy and security measures."
  }
];

const contactQuestions = [
  {
    question: "Can I call, message or visit Havenwell Pharmacy?",
    answer:
      "No. Havenwell is a fictional portfolio demonstration. It has no verified phone number, WhatsApp account, email inbox, physical premises or operating hours."
  },
  {
    question: "Can I book a consultation or request a prescription?",
    answer:
      "No. This website has no consultation booking, prescription submission, medicine-ordering or healthcare workflow. No medical or personal information should be submitted through the demo."
  },
  {
    question: "Why does this page not display sample contact details?",
    answer:
      "Invented contact details could be mistaken for real business information. The concept demonstrates the structure and information a real pharmacy should publish after verifying its details and operational arrangements."
  },
  {
    question: "What should a real pharmacy confirm before launching a page like this?",
    answer:
      "It should verify its identity and contact channels, confirm operating and accessibility information, approve the published service descriptions, and establish appropriate privacy and enquiry-handling processes."
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact and location"
        title="Make the next step clear before someone reaches out."
        description="A contact page should help visitors identify the right channel, understand when they can expect a response and know what information is appropriate to share. This page demonstrates that structure without inventing a real pharmacy's contact details."
        primaryAction={{
          href: "/services",
          label: "Explore service information"
        }}
        secondaryAction={{
          href: "/about",
          label: "About this concept"
        }}
      />

      <section
        aria-labelledby="contact-channels-title"
        className="section"
      >
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Contact channels</p>
              <h2 id="contact-channels-title">
                Give every enquiry a clear destination.
              </h2>
              <p>
                These are examples of information a genuine pharmacy could
                publish after confirming that its contact channels and
                operating arrangements are in place.
              </p>
            </div>
          </div>

          <div className="card-grid">
            {contactChannels.map((channel) => (
              <article className="service-card" key={channel.number}>
                <span className="service-card__number">
                  {channel.number}
                </span>

                <h3>{channel.title}</h3>

                <p>{channel.description}</p>

                <div className="notice-panel">
                  <p>{channel.status}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">Before publication</p>
            <h2>Useful contact information must be verified.</h2>

            <p>
              A polished contact page is only useful when the information
              behind it is accurate. A real pharmacy should confirm its
              details and operating arrangements before visitors rely on
              them.
            </p>

            <ul className="bullet-list">
              {publicationChecks.map((check, index) => (
                <li key={check.title}>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    {index + 1}
                  </span>

                  <span>
                    <strong>{check.title}:</strong> {check.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="split-layout__visual">
            <div className="visual-panel">
              <span className="visual-panel__label">
                Contact-page standard
              </span>

              <h3>Clear channels. Accurate details. Appropriate boundaries.</h3>

              <p>
                Contact information should reflect actual business
                operations, not assumptions about what a business might
                offer.
              </p>

              <ul className="bullet-list">
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Verified information and responsible ownership.</span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Clear availability and response expectations.</span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Privacy-aware enquiry handling.</span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="bullet-list__mark"
                  >
                    ✓
                  </span>
                  <span>Appropriate guidance for urgent concerns.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-questions-title"
        className="section"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Common questions</p>
            <h2 id="contact-questions-title">
              Know what this demonstration actually supports.
            </h2>
            <p>
              This page illustrates contact-information design. It does not
              connect visitors to a pharmacy team or healthcare service.
            </p>
          </div>

          <div className="faq-list">
            {contactQuestions.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: "34px" }}>
            <div className="notice-panel">
              <p>
                <strong>Important:</strong> Havenwell Pharmacy is fictional.
                No contact channel, business address, pharmacist, licence,
                opening schedule or healthcare service has been verified
                for this concept. Do not use this page to seek medical care
                or submit real personal, prescription or medical information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact section--white">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Explore the concept</p>
              <h2>A useful website connects information with the right next step.</h2>
              <p>
                Continue through the example service descriptions or learn
                more about the thinking behind this website concept.
              </p>
            </div>

            <div className="cta-panel__action">
              <div className="button-row">
                <Link className="button button--light" href="/services">
                  Services <span aria-hidden="true">→</span>
                </Link>

                <Link
                  className="button button--secondary"
                  href="/about"
                >
                  About Havenwell
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}