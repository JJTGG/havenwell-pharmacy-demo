import Link from "next/link";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="not-found container">
      <p className="eyebrow">404 / Page not found</p>

      <h1 id="not-found-title">This page isn’t here.</h1>

      <p>
        The address may be incorrect, or the page may have moved. Return to
        the Havenwell Pharmacy concept homepage or explore one of the available
        information pages.
      </p>

      <div
        className="button-row"
        style={{ justifyContent: "center" }}
      >
        <Link className="button" href="/">
          Return to homepage
          <span aria-hidden="true">→</span>
        </Link>

        <Link className="button button--secondary" href="/services">
          Explore services
        </Link>
      </div>

      <p style={{ marginTop: "28px", fontSize: "0.85rem" }}>
        Havenwell Pharmacy is a fictional portfolio concept by TGG HUB.
      </p>
    </section>
  );
}