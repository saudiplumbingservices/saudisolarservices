import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities, getCityBySlug } from "@/data/cities";
import { blogs } from "@/data/blogs";
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_BASE, BASE_URL, BUSINESS_NAME } from "@/lib/siteConfig";
import styles from "./area.module.css";

interface Props {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${BASE_URL}/areas/${data.slug}`,
      type: "website",
    },
    alternates: { canonical: `${BASE_URL}/areas/${data.slug}` },
  };
}

const SERVICE_CONFIG = [
  {
    key: "ac" as const,
    color: "#06b6d4",
    label: "AC & HVAC",
    href: "/services/ac",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    key: "plumbing" as const,
    color: "#3b82f6",
    label: "Plumbing",
    href: "/services/plumbing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    key: "solar" as const,
    color: "#eab308",
    label: "Solar Energy",
    href: "/services/solar",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
];

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  const otherCities = cities.filter((c) => c.slug !== data.slug);
  const cityArticles = blogs.filter((b) => b.city === data.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": `${BASE_URL}/areas` },
      { "@type": "ListItem", "position": 3, "name": data.name, "item": `${BASE_URL}/areas/${data.slug}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${BUSINESS_NAME} — ${data.name}`,
    "url": `${BASE_URL}/areas/${data.slug}`,
    "telephone": PHONE_E164,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.street,
      "addressLocality": data.name,
      "postalCode": data.postalCode,
      "addressCountry": "SA",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.lat,
      "longitude": data.lng,
    },
    "areaServed": {
      "@type": "City",
      "name": data.name,
    },
    "parentOrganization": {
      "@id": `${BASE_URL}/#business`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className={styles.page}>
        <div className="container">

          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#services">Services</Link>
            <span>›</span>
            <span>{data.name}</span>
          </nav>

          {/* Hero */}
          <section className={styles.hero}>
            <span className={styles.regionTag}>{data.region}</span>
            <h1 className={styles.heroTitle}>
              AC, Plumbing &amp; Solar Services<br />in {data.name}
            </h1>
            <p className={styles.heroAr}>{data.nameAr} — خدمات التكييف والسباكة والطاقة الشمسية</p>
            <p className={styles.introText}>{data.intro}</p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href={`tel:${PHONE_E164}`} className="btn btn-primary">
                Call {PHONE_DISPLAY}
              </a>
              <a href={`${WHATSAPP_BASE}?text=Hello%2C%20I%20need%20service%20in%20${encodeURIComponent(data.name)}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                WhatsApp Us
              </a>
            </div>

            <div className={styles.statBar}>
              <div className={styles.stat}>
                <span className={styles.statValue}>2h</span>
                <span className={styles.statLabel}>Response Time</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Emergency Service</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>Service Categories</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>SEC</span>
                <span className={styles.statLabel}>Certified Solar</span>
              </div>
            </div>
          </section>

          {/* Service Cards */}
          <section className={styles.services}>
            {SERVICE_CONFIG.map((svc) => {
              const info = data[svc.key];
              return (
                <div key={svc.key} className={styles.serviceCard}>
                  <div className={styles.cardAccent} style={{ backgroundColor: svc.color }} />
                  <div className={styles.cardInner}>
                    <div className={styles.serviceIcon} style={{ backgroundColor: svc.color + "18", color: svc.color }}>
                      {svc.icon}
                    </div>
                    <h2 className={styles.serviceHeadline}>{info.headline}</h2>
                    <p className={styles.serviceBody}>{info.body}</p>
                    <ul className={styles.factList}>
                      {info.facts.map((fact, i) => (
                        <li key={i} className={styles.factItem}>
                          <span className={styles.factDot} style={{ backgroundColor: svc.color }} />
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={svc.href} className="btn btn-secondary" style={{ fontSize: "0.875rem" }}>
                      Learn More About {svc.label} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>

          {/* FAQ */}
          <section className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Questions About Our Services in {data.name}</h2>
            <div className={styles.faqGrid}>
              {data.faq.map((item, idx) => (
                <div key={idx} className={styles.faqCard}>
                  <p className={styles.question}>{item.question}</p>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* City-Specific Blog Articles */}
          {cityArticles.length > 0 && (
            <section style={{ marginBottom: "64px" }}>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "28px" }}>
                Expert Guides for {data.name}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                {cityArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      overflow: "hidden",
                      background: "var(--card-bg)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}>
                      <div style={{ height: "3px", backgroundColor: article.categoryColor }} />
                      <div style={{ padding: "20px" }}>
                        <span style={{
                          display: "inline-block",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          backgroundColor: article.categoryColor + "20",
                          color: article.categoryColor,
                          marginBottom: "10px",
                        }}>
                          {article.category}
                        </span>
                        <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--foreground)", lineHeight: 1.4, marginBottom: "8px" }}>
                          {article.title}
                        </p>
                        <p style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 500 }}>
                          Read Guide →
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Book a Service in {data.name} Today</h2>
            <p className={styles.ctaDesc}>
              Our certified engineers are ready to respond across {data.name}. Get a free assessment and quote within 2 hours.
            </p>
            <div className={styles.ctaBtns}>
              <a href="/#contact" className="btn btn-primary">Get a Free Quote</a>
              <a href={`${WHATSAPP_BASE}?text=Hi%2C%20I%20need%20a%20service%20quote%20in%20${encodeURIComponent(data.name)}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                WhatsApp Our Team
              </a>
              <a href={`tel:${PHONE_E164}`} className="btn btn-secondary">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Other Cities Strip */}
          <nav className={styles.citiesNav} aria-label="Other service cities">
            <p className={styles.citiesNavTitle}>We also serve:</p>
            <div className={styles.cityChips}>
              {otherCities.map((c) => (
                <Link key={c.slug} href={`/areas/${c.slug}`} className={styles.cityChip}>
                  {c.name}
                </Link>
              ))}
            </div>
          </nav>

        </div>
      </div>
    </>
  );
}
