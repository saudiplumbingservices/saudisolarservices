import Link from "next/link";
import { blogs } from "@/data/blogs";
import styles from "./blog-list.module.css";

export const metadata = {
  title: "Expert AC, Plumbing & Solar Guides for Saudi Arabia | EcoFlow Blog",
  description: "Professional advice on HVAC maintenance, plumbing repairs, and solar energy installation for Saudi homeowners. Written by certified engineers in KSA.",
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-tag">Knowledge Hub</span>
          <h1 className="section-title">Expert Guides for Saudi Homeowners</h1>
          <p className="section-desc">
            Certified insights from our HVAC engineers and plumbing specialists — written specifically for Saudi Arabia&apos;s climate, regulations, and infrastructure.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.slug} className={styles.card}>
              {/* Category Color Banner */}
              <div
                className={styles.cardBanner}
                style={{ backgroundColor: blog.categoryColor }}
              />

              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span
                    className={styles.categoryBadge}
                    style={{
                      backgroundColor: blog.categoryColor + "20",
                      color: blog.categoryColor,
                    }}
                  >
                    {blog.category}
                  </span>
                  <span className={styles.date}>{blog.date}</span>
                  <span className={styles.readTime}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {blog.readTime}
                  </span>
                </div>

                <h2 className={styles.cardTitle}>{blog.title}</h2>
                <p className={styles.cardExcerpt}>{blog.excerpt}</p>

                <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                  Read Full Guide
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
