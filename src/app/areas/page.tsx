import Link from "next/link";
import { cities } from "@/data/cities";
import { blogs } from "@/data/blogs";
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_BASE, BASE_URL } from "@/lib/siteConfig";

const SERVICE_STATS = [
  { label: "Cities Covered", value: "6" },
  { label: "Response Time", value: "2h" },
  { label: "Availability", value: "24/7" },
  { label: "Certified Engineers", value: "SEC" },
];

export default function AreasPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": `${BASE_URL}/areas` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Miyar Technical Services — Saudi Arabia Service Areas",
    "description": "Cities where Miyar Technical Services provides AC, plumbing, and solar services",
    "itemListElement": cities.map((city, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": city.name,
      "url": `${BASE_URL}/areas/${city.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div style={{ paddingTop: "100px", paddingBottom: "80px", minHeight: "100vh" }}>
        <div className="container">

          {/* Breadcrumb */}
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.85rem", color: "var(--foreground-muted)", marginBottom: "40px" }}>
            <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <span>Service Areas</span>
          </nav>

          {/* Header */}
          <div style={{ marginBottom: "56px" }}>
            <span className="section-tag">Coverage Map</span>
            <h1 className="section-title" style={{ textAlign: "left", maxWidth: "680px" }}>
              AC, Plumbing &amp; Solar Services Across Saudi Arabia
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--foreground-muted)", maxWidth: "720px", lineHeight: 1.7, marginBottom: "32px" }}>
              We operate permanent service teams in all major Saudi cities. Each team is trained for the specific climate, water chemistry, and infrastructure challenges of their city — not a generic national contractor dispatched from one central hub.
            </p>

            {/* Stat bar */}
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", padding: "20px 28px", background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", width: "fit-content" }}>
              {SERVICE_STATS.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--primary)" }}>{s.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--foreground-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* City cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px", marginBottom: "80px" }}>
            {cities.map((city) => {
              const cityArticles = blogs.filter((b) => b.city === city.slug);
              return (
                <div
                  key={city.slug}
                  style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--card-bg)" }}
                >
                  {/* Region colour band */}
                  <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                      <h2 style={{ fontSize: "1.35rem", fontWeight: 700 }}>{city.name}</h2>
                      <span style={{ fontSize: "1rem", fontFamily: "serif", direction: "rtl", color: "var(--foreground-muted)" }}>{city.nameAr}</span>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "12px" }}>{city.region}</p>
                    <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)", lineHeight: 1.6 }}>{city.intro.slice(0, 160)}…</p>
                  </div>

                  <div style={{ padding: "20px 28px" }}>
                    {/* Service rows */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                      {[
                        { label: "AC & HVAC", text: city.ac.headline, color: "#06b6d4" },
                        { label: "Plumbing", text: city.plumbing.headline, color: "#3b82f6" },
                        { label: "Solar", text: city.solar.headline, color: "#eab308" },
                      ].map((svc) => (
                        <div key={svc.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: svc.color, background: svc.color + "18", padding: "2px 8px", borderRadius: "999px", whiteSpace: "nowrap", marginTop: "2px" }}>
                            {svc.label}
                          </span>
                          <span style={{ fontSize: "0.85rem", color: "var(--foreground-muted)" }}>{svc.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* City guides count */}
                    {cityArticles.length > 0 && (
                      <p style={{ fontSize: "0.8rem", color: "var(--foreground-muted)", marginBottom: "16px" }}>
                        {cityArticles.length} city-specific expert guide{cityArticles.length > 1 ? "s" : ""} available
                      </p>
                    )}

                    <Link href={`/areas/${city.slug}`} className="btn btn-primary" style={{ width: "100%", fontSize: "0.875rem", justifyContent: "center" }}>
                      View {city.name} Services →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div style={{
            padding: "48px",
            borderRadius: "var(--radius-lg)",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(14,116,144,0.1), rgba(22,163,74,0.06))",
            border: "1px solid rgba(14,116,144,0.18)",
          }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "12px" }}>
              Your City Not Listed? We Still Cover It.
            </h2>
            <p style={{ color: "var(--foreground-muted)", marginBottom: "28px", fontSize: "0.95rem", maxWidth: "540px", margin: "0 auto 28px" }}>
              We deploy engineers to all cities in Saudi Arabia. Contact us with your location and we will confirm coverage and response time within 1 hour.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn btn-primary">Get a Free Quote</a>
              <a href={`${WHATSAPP_BASE}?text=Hi%2C%20I%20need%20service%20in%20my%20area`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                WhatsApp Us
              </a>
              <a href={`tel:${PHONE_E164}`} className="btn btn-secondary">{PHONE_DISPLAY}</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
