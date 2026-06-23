import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug } from "@/data/blogs";
import styles from "./blog.module.css";
import type { Metadata } from "next";
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_BASE, BASE_URL, BUSINESS_NAME } from "@/lib/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const relatedBlogs = blogs
    .filter((b) => b.slug !== blog.slug && b.category === blog.category)
    .slice(0, 4)
    .concat(blogs.filter((b) => b.slug !== blog.slug && b.category !== blog.category))
    .slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
      { "@type": "ListItem", "position": 3, "name": blog.title, "item": `${BASE_URL}/blog/${blog.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.metaDescription,
    "datePublished": blog.date,
    "author": {
      "@type": "Organization",
      "name": BUSINESS_NAME,
      "url": BASE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_NAME,
      "url": BASE_URL,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${blog.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faq.map((item) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className={styles.page}>
      <div className="container">
        {/* Back Button */}
        <Link href="/blog" className={styles.backBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to All Guides
        </Link>

        {/* Hero Header */}
        <header className={styles.hero}>
          <span
            className={styles.categoryBadge}
            style={{
              backgroundColor: blog.categoryColor + "20",
              color: blog.categoryColor,
            }}
          >
            {blog.category}
          </span>

          <h1 className={styles.title}>{blog.title}</h1>

          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {blog.date}
            </span>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {blog.readTime}
            </span>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Saudi Arabia
            </span>
          </div>
        </header>

        {/* Main Layout */}
        <div className={styles.layout}>
          {/* Article */}
          <article className={styles.article}>
            {/* Content Sections */}
            {blog.content.map((section, idx) => {
              if (section.type === "paragraph") {
                return <p key={idx}>{section.text}</p>;
              }
              if (section.type === "heading") {
                return <h2 key={idx}>{section.text}</h2>;
              }
              if (section.type === "subheading") {
                return <h3 key={idx} style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px", color: "var(--foreground)" }}>{section.text}</h3>;
              }
              if (section.type === "list") {
                return (
                  <ul key={idx} className={styles.articleList}>
                    {section.items?.map((item, i) => (
                      <li key={i} className={styles.articleListItem}>
                        <span className={styles.bullet} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "callout") {
                return (
                  <div key={idx} className={styles.callout}>
                    {section.text}
                  </div>
                );
              }
              if (section.type === "table" && section.headers && section.rows) {
                return (
                  <figure key={idx} className={styles.tableWrapper}>
                    <div className={styles.tableScroll}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            {section.headers.map((h, i) => (
                              <th key={i} className={styles.th}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? styles.trEven : styles.trOdd}>
                              {row.map((cell, ci) => (
                                <td key={ci} className={`${styles.td} ${ci === 0 ? styles.tdLabel : ""}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {section.tableCaption && (
                      <figcaption className={styles.tableCaption}>{section.tableCaption}</figcaption>
                    )}
                  </figure>
                );
              }
              return null;
            })}

            {/* FAQ Section */}
            <div className={styles.faqSection}>
              <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
              {blog.faq.map((item, idx) => (
                <div key={idx} className={styles.faqCard}>
                  <p className={styles.question}>
                    <span className={styles.qIcon}>Q</span>
                    {item.question}
                  </p>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA at bottom of article */}
            <div style={{
              marginTop: "48px",
              padding: "32px",
              background: "linear-gradient(135deg, rgba(14,116,144,0.1), rgba(22,163,74,0.05))",
              border: "1px solid rgba(14,116,144,0.2)",
              borderRadius: "var(--radius-lg)",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>Need Professional Help in Saudi Arabia?</h3>
              <p style={{ color: "var(--foreground-muted)", marginBottom: "24px", fontSize: "0.95rem" }}>
                Our certified engineers are available 24/7 across Riyadh, Jeddah, Dammam, and more.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/#contact" className="btn btn-primary">Get a Free Quote</a>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp Expert
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Quick Contact */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Need Urgent Help?</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--foreground-muted)", marginBottom: "20px" }}>
                Speak to a certified engineer today.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href={`tel:${PHONE_E164}`} className="btn btn-primary" style={{ width: "100%", fontSize: "0.9rem" }}>
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%", fontSize: "0.9rem" }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Related Blogs */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>More Expert Guides</h3>
              <ul className={styles.otherBlogList}>
                {relatedBlogs.map((b) => (
                  <li key={b.slug} className={styles.otherBlogItem}>
                    <Link href={`/blog/${b.slug}`} className={styles.otherBlogLink}>
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Quick Links */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Our Services</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link href="/services/ac" className="btn btn-secondary" style={{ width: "100%", fontSize: "0.875rem", justifyContent: "flex-start" }}>
                  AC & HVAC →
                </Link>
                <Link href="/services/plumbing" className="btn btn-secondary" style={{ width: "100%", fontSize: "0.875rem", justifyContent: "flex-start" }}>
                  Plumbing →
                </Link>
                <Link href="/services/solar" className="btn btn-secondary" style={{ width: "100%", fontSize: "0.875rem", justifyContent: "flex-start" }}>
                  Solar Energy →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  );
}
