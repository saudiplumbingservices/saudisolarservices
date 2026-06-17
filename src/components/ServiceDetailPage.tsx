import Link from "next/link";
import type { ServiceData } from "@/data/services";
import { allServices, SERVICE_CATEGORY_META } from "@/data/services";
import { PHONE_E164, WHATSAPP_BASE, BASE_URL } from "@/lib/siteConfig";
import styles from "./ServiceDetailPage.module.css";

interface Props {
  service: ServiceData;
}

export default function ServiceDetailPage({ service }: Props) {
  const catMeta = SERVICE_CATEGORY_META[service.category];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: catMeta.label, item: `${BASE_URL}${catMeta.href}` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${BASE_URL}${catMeta.href}/${service.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const relatedServices = allServices.filter(
    (s) => service.relatedSlugs.includes(s.slug)
  );

  const whatsappMsg = encodeURIComponent(
    `I would like to enquire about ${service.title}.`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.page}>
        <div className="container">
          {/* Back */}
          <Link href={catMeta.href} className={styles.backBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to {catMeta.label}</span>
          </Link>

          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href={catMeta.href}>{catMeta.label}</Link>
            <span>›</span>
            <span style={{ color: "var(--foreground)" }}>{service.title}</span>
          </nav>

          {/* Header */}
          <header className={styles.header}>
            <span
              className={styles.categoryTag}
              style={{ background: service.color + "22", color: service.color }}
            >
              {catMeta.label}
            </span>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.tagline}>{service.tagline}</p>
          </header>

          {/* Main layout */}
          <div className={styles.grid}>
            {/* Left: article */}
            <article className={styles.content}>
              {/* Intro */}
              <p className={styles.intro} style={{ "--accent-color": service.color } as React.CSSProperties}>
                {service.intro}
              </p>

              {/* Offerings */}
              <h2>What&apos;s Included</h2>
              <div className={styles.offeringsGrid}>
                {service.offerings.map((o) => (
                  <div key={o.title} className={styles.offeringCard}>
                    <div className={styles.offeringTitle}>
                      <span className={styles.offeringDot} style={{ background: service.color }} />
                      {o.title}
                    </div>
                    <p className={styles.offeringDesc}>{o.description}</p>
                  </div>
                ))}
              </div>

              {/* Process */}
              <h2>How It Works</h2>
              <div className={styles.processList}>
                {service.process.map((step, idx) => (
                  <div key={step.step} className={styles.processItem}>
                    <div>
                      <div className={styles.processNum} style={{ background: service.color }}>
                        {idx + 1}
                      </div>
                      <div className={styles.processLine} />
                    </div>
                    <div>
                      <div className={styles.processStep}>{step.step}</div>
                      <div className={styles.processDesc}>{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <h2>Pricing Guide</h2>
              <div className={styles.pricingBox}>
                <div className={styles.pricingTitle} style={{ color: service.color }}>
                  Indicative Rates — {service.title}
                </div>
                <p className={styles.pricingText}>{service.pricing}</p>
              </div>

              {/* FAQ */}
              <div className={styles.faqSection}>
                <h2>Frequently Asked Questions</h2>
                {service.faq.map((item) => (
                  <div key={item.question} className={styles.faqCard}>
                    <h3 className={styles.question}>{item.question}</h3>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Right: sidebar */}
            <aside className={styles.sidebar}>
              {/* CTA */}
              <div className={styles.box}>
                <div className={styles.boxAccent} style={{ background: service.color }} />
                <h3 className={styles.boxTitle}>Get a Quote</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--foreground-muted)", marginBottom: "20px" }}>
                  {service.tagline}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <a href={`tel:${PHONE_E164}`} className="btn btn-primary" style={{ width: "100%" }}>
                    Call Now
                  </a>
                  <a
                    href={`${WHATSAPP_BASE}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: "100%" }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className={styles.box}>
                  <h3 className={styles.boxTitle}>Related Services</h3>
                  <div className={styles.relatedList}>
                    {relatedServices.map((rs) => (
                      <Link
                        key={rs.slug}
                        href={`${SERVICE_CATEGORY_META[rs.category].href}/${rs.slug}`}
                        className={styles.relatedLink}
                      >
                        <span>{rs.title}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* City Coverage */}
              <div className={styles.box}>
                <h3 className={styles.boxTitle}>Service Areas</h3>
                <div className={styles.relatedList}>
                  {[
                    { name: "Riyadh", slug: "riyadh" },
                    { name: "Jeddah", slug: "jeddah" },
                    { name: "Dammam", slug: "dammam" },
                    { name: "Mecca", slug: "mecca" },
                    { name: "Medina", slug: "medina" },
                    { name: "Al Khobar", slug: "khobar" },
                  ].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/areas/${city.slug}`}
                      className={styles.relatedLink}
                    >
                      <span>{city.name}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className={styles.bottomCta}>
            <h2 className={styles.bottomCtaTitle}>Ready to Book?</h2>
            <p className={styles.bottomCtaDesc}>
              Contact Miyar Technical Services for a free consultation and quote across Saudi Arabia.
            </p>
            <div className={styles.ctaBtns}>
              <a href="/#contact" className="btn btn-primary">
                Get Free Quote
              </a>
              <a
                href={`${WHATSAPP_BASE}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp Us
              </a>
              <a href={`tel:${PHONE_E164}`} className="btn" style={{ border: "1.5px solid var(--border)" }}>
                Call Hotline
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
