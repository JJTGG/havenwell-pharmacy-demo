import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Health Resources",
  description:
    "Explore general medicine-safety guidance and selected public health resources in the Havenwell Pharmacy website concept. This fictional demo does not provide medical advice or healthcare services."
};

const resourceTopics = [
  {
    number: "01",
    title: "Understand medicine labels",
    description:
      "Read the product label and any accompanying patient information before use. Check the product name, instructions, expiry information and storage directions. Ask an appropriately qualified professional when anything is unclear.",
    note: "Do not guess when instructions are missing or confusing."
  },
  {
    number: "02",
    title: "Store medicines responsibly",
    description:
      "Follow the storage instructions supplied with the product. Keep medicines in their appropriate packaging and somewhere inaccessible to children and other people who should not take them.",
    note: "Storage requirements can differ between products."
  },
  {
    number: "03",
    title: "Discuss your medicines",
    description:
      "When speaking with a healthcare professional, provide an accurate account of the medicines and other health products you use. Mention known allergies and raise concerns about possible side effects or interactions.",
    note: "A complete medication history can support a more informed conversation."
  },
  {
    number: "04",
    title: "Avoid unverified health claims",
    description:
      "Do not rely on a social post, forwarded message or promotional claim as the sole basis for a medicine decision. Check information with a reliable source and a qualified healthcare professional.",
    note: "A confident claim online is not proof that it is safe or suitable."
  },
  {
    number: "05",
    title: "Be cautious about suspicious products",
    description:
      "Pay attention to unusual packaging, altered expiry details, missing product information or other reasons to doubt a medicine's authenticity. Seek guidance through appropriate official channels.",
    note: "Do not use a product you suspect may be falsified or compromised."
  },
  {
    number: "06",
    title: "Prepare questions before a visit",
    description:
      "Write down what you want to ask a pharmacist or other healthcare professional. Useful questions may cover the purpose of a medicine, how to follow its instructions, possible concerns and what to do when directions are unclear.",
    note: "Individual decisions should be discussed with a suitable professional."
  }
];

const publicResources = [
  {
    label: "01 / Nigerian regulator",
    title: "NAFDAC Consumer Safety",
    description:
      "Find official consumer-safety information and routes to relevant regulatory resources in Nigeria.",
    href: "https://nafdac.gov.ng/consumer-safety/",
    linkLabel: "Visit NAFDAC Consumer Safety"
  },
  {
    label: "02 / Safety notices",
    title: "Medicine recalls and safety alerts",
    description:
      "Check notices published by NAFDAC about recalls, suspected falsified products and other product-safety concerns.",
    href: "https://nafdac.gov.ng/category/recalls-and-alerts/",
    linkLabel: "View safety alerts"
  },
  {
    label: "03 / Medicine safety",
    title: "NAFDAC Med Safety information",
    description:
      "Read NAFDAC's information about reporting suspected substandard or falsified medical products and adverse drug reactions.",
    href: "https://nafdac.gov.ng/nafdac-launches-improved-med-safety-app-to-strengthen-reporting-of-substandard-and-falsified-medical-products-and-adverse-drug-reactions-in-nigeria/",
    linkLabel: "Read the official announcement"
  },
  {
    label: "04 / Patient safety",
    title: "World Health Organization",
    description:
      "Explore WHO patient-safety guidance, including practical advice for patients and families participating in safer care.",
    href: "https://www.who.int/campaigns/world-patient-safety-day/2023/practical-advice-for-stakeholders",
    linkLabel: "Read WHO guidance"
  }
];

const commonQuestions = [
  {
    question: "Can I get a diagnosis or treatment recommendation here?",
    answer:
      "No. Havenwell is a fictional website concept. It does not provide consultations, diagnoses, prescriptions, personalised treatment recommendations or emergency assistance. Contact an appropriately qualified healthcare professional about your individual situation."
  },
  {
    question: "Can I send a prescription or medical records to this website?",
    answer:
      "No. This demonstration has no prescription upload, medical-record submission or clinical messaging service. Do not enter real medical information or other sensitive personal details into demonstration features."
  },
  {
    question: "Does every resource apply specifically to Nigeria?",
    answer:
      "No. The listed regulatory links include Nigerian resources, while the WHO link provides international patient-safety material. Always check the location, scope and date of a resource before relying on it."
  },
  {
    question: "What should I do about an urgent health concern?",
    answer:
      "Do not wait for a website response. Seek appropriate urgent medical care or contact local emergency services when symptoms are severe, rapidly worsening or potentially life-threatening. For a suspected poisoning or medicine overdose, seek urgent professional guidance."
  }
];

export default function HealthResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Health resources"
        title="Better questions start with more reliable information."
        description="A useful pharmacy website can help people find credible information, understand what to ask and recognise when professional support is needed. This page demonstrates that approach; it is not a source of individual medical advice."
        primaryAction={{
          href: "#public-resources",
          label: "Explore public resources"
        }}
        secondaryAction={{
          href: "/services",
          label: "Explore service information"
        }}
      />

      <section
        aria-labelledby="resource-principles-title"
        className="section"
      >
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Practical starting points</p>
              <h2 id="resource-principles-title">
                Six habits for more informed medicine conversations.
              </h2>
              <p>
                These general educational prompts can help visitors prepare
                questions and find appropriate support. They are not
                instructions for treating a medical condition.
              </p>
            </div>
          </div>

          <div className="card-grid">
            {resourceTopics.map((topic) => (
              <article className="service-card" key={topic.number}>
                <span className="service-card__number">
                  {topic.number}
                </span>

                <h3>{topic.title}</h3>

                <p>{topic.description}</p>

                <div className="notice-panel">
                  <p>{topic.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-layout">
          <div className="split-layout__copy">
            <p className="eyebrow">Prepare for a conversation</p>
            <h2>Make it easier to ask a useful question.</h2>

            <p>
              Online information can help you prepare, but it cannot account
              for every detail of an individual person's health. A
              professional conversation is the appropriate place to discuss
              personal symptoms, medicines and treatment concerns.
            </p>

            <ul className="bullet-list">
              <li>
                <span aria-hidden="true" className="bullet-list__mark">
                  1
                </span>
                <span>
                  <strong>Explain the concern:</strong> describe the question
                  or problem you want addressed.
                </span>
              </li>
              <li>
                <span aria-hidden="true" className="bullet-list__mark">
                  2
                </span>
                <span>
                  <strong>Share relevant details:</strong> provide accurate
                  medicine information and mention known allergies when
                  speaking with your professional.
                </span>
              </li>
              <li>
                <span aria-hidden="true" className="bullet-list__mark">
                  3
                </span>
                <span>
                  <strong>Clarify the next step:</strong> ask what to do if
                  instructions are unclear or the situation changes.
                </span>
              </li>
            </ul>
          </div>

          <div className="split-layout__visual">
            <div className="visual-panel">
              <span className="visual-panel__label">
                Conversation checklist
              </span>

              <h3>Understand before acting.</h3>

              <p>
                Bring questions, verify the source of information and make
                sure you understand the guidance given to you.
              </p>

              <ul className="bullet-list">
                <li>
                  <span aria-hidden="true" className="bullet-list__mark">
                    ✓
                  </span>
                  <span>Information from a credible source.</span>
                </li>
                <li>
                  <span aria-hidden="true" className="bullet-list__mark">
                    ✓
                  </span>
                  <span>Accurate details about the concern.</span>
                </li>
                <li>
                  <span aria-hidden="true" className="bullet-list__mark">
                    ✓
                  </span>
                  <span>Questions about unclear instructions.</span>
                </li>
                <li>
                  <span aria-hidden="true" className="bullet-list__mark">
                    ✓
                  </span>
                  <span>A clear understanding of appropriate next steps.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="public-resources-title"
        className="section"
        id="public-resources"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Selected external references</p>
            <h2 id="public-resources-title">
              Start with recognised public health sources.
            </h2>
            <p>
              These links lead to external organisations, not services
              operated by Havenwell. Their pages and guidance may change;
              check the source directly for current information.
            </p>
          </div>

          <div className="card-grid">
            {publicResources.map((resource) => (
              <article className="service-card" key={resource.title}>
                <span className="service-card__number">
                  {resource.label}
                </span>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <a
                  className="text-link"
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.linkLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Important limitations</p>
            <h2>Know when online information is not enough.</h2>
            <p>
              General resources are a starting point, not a substitute for
              professional assessment or urgent care.
            </p>
          </div>

          <div className="notice-panel">
            <p>
              <strong>Urgent concerns:</strong> if a health problem is severe,
              rapidly worsening or potentially life-threatening, seek
              appropriate urgent medical care or contact local emergency
              services. If you suspect an overdose or poisoning, seek urgent
              professional guidance rather than waiting for an online reply.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="resource-questions-title"
        className="section"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Common questions</p>
            <h2 id="resource-questions-title">
              What these resources can and cannot do.
            </h2>
          </div>

          <div className="faq-list">
            {commonQuestions.map((item) => (
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
                a fictional website concept created to demonstrate website
                structure and communication. No pharmacy, practitioner,
                licence, physical location or healthcare service has been
                verified for this demo. The page is not a clinical resource
                maintained by a healthcare provider.
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
              <h2>Clear information should lead to clear expectations.</h2>
              <p>
                Explore how this concept presents service categories and the
                principles behind the website experience.
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
                  About the concept
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}