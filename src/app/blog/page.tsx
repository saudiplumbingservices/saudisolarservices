"use client";

import Link from "next/link";
import { useState } from "react";
import { blogs } from "@/data/blogs";
import styles from "./blog-list.module.css";

const CATEGORIES = ["All", "AC & HVAC", "Plumbing", "Solar Energy"] as const;
type FilterCategory = (typeof CATEGORIES)[number];

const CATEGORY_COLORS: Record<string, string> = {
  "AC & HVAC": "#06b6d4",
  "Plumbing": "#3b82f6",
  "Solar Energy": "#eab308",
};

const CITIES = [
  { slug: "riyadh", name: "Riyadh" },
  { slug: "jeddah", name: "Jeddah" },
  { slug: "dammam", name: "Dammam" },
  { slug: "mecca", name: "Mecca" },
  { slug: "medina", name: "Medina" },
  { slug: "khobar", name: "Al Khobar" },
];

export default function BlogPage() {
  const [active, setActive] = useState<FilterCategory>("All");
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const filtered = blogs.filter((b) => {
    const matchesCategory = active === "All" || b.category === active;
    const matchesCity = activeCity === null ? true : b.city === activeCity;
    return matchesCategory && matchesCity;
  });

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

        {/* Category Filter Tabs */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px" }}>
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            const color = cat === "All" ? "var(--primary)" : CATEGORY_COLORS[cat];
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border: `1.5px solid ${isActive ? color : "var(--border)"}`,
                  background: isActive ? color : "transparent",
                  color: isActive ? "#fff" : "var(--foreground-muted)",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
                <span style={{ marginLeft: "6px", fontSize: "0.8rem", opacity: 0.8 }}>
                  ({cat === "All" ? blogs.length : blogs.filter((b) => b.category === cat).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* City Filter */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px", alignItems: "center" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--foreground-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginRight: "4px" }}>
            City:
          </span>
          <button
            onClick={() => setActiveCity(null)}
            style={{
              padding: "5px 14px", borderRadius: "999px",
              border: `1.5px solid ${activeCity === null ? "var(--primary)" : "var(--border)"}`,
              background: activeCity === null ? "var(--primary)" : "transparent",
              color: activeCity === null ? "#fff" : "var(--foreground-muted)",
              fontSize: "0.8rem", cursor: "pointer", fontWeight: activeCity === null ? 600 : 400,
            }}
          >
            All Cities
          </button>
          {CITIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCity(activeCity === c.slug ? null : c.slug)}
              style={{
                padding: "5px 14px", borderRadius: "999px",
                border: `1.5px solid ${activeCity === c.slug ? "var(--primary)" : "var(--border)"}`,
                background: activeCity === c.slug ? "var(--primary)" : "transparent",
                color: activeCity === c.slug ? "#fff" : "var(--foreground-muted)",
                fontSize: "0.8rem", cursor: "pointer", fontWeight: activeCity === c.slug ? 600 : 400,
              }}
            >
              {c.name}
              <span style={{ marginLeft: "4px", fontSize: "0.72rem", opacity: 0.7 }}>
                ({blogs.filter((b) => b.city === c.slug).length})
              </span>
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className={styles.grid}>
          {filtered.map((blog) => (
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

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--foreground-muted)", marginTop: "48px" }}>
            No articles in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
