import Link from "next/link";

type PageAction = {
  href: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: PageAction;
  secondaryAction?: PageAction;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction
}: PageHeroProps) {
  return (
    <section aria-labelledby="page-hero-title" className="page-hero">
      <div className="page-hero__inner container">
        <p className="eyebrow">{eyebrow}</p>

        <h1 id="page-hero-title">{title}</h1>

        <p className="page-hero__description">{description}</p>

        {(primaryAction || secondaryAction) && (
          <div className="page-hero__actions">
            {primaryAction && (
              <Link className="button" href={primaryAction.href}>
                {primaryAction.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}

            {secondaryAction && (
              <Link
                className="button button--secondary"
                href={secondaryAction.href}
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}