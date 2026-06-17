import Link from "next/link";
import styles from "./plumbing.module.css";
import PlumbingCalculator from "@/components/PlumbingCalculator";
import { PHONE_E164, WHATSAPP_BASE } from "@/lib/siteConfig";

export const metadata = {
  title: "Certified Plumbing & Water Leak Detection in Saudi Arabia | Miyar Technical Services",
  description: "Professional plumbers offering acoustic leak detection, booster pump repair, smart water heater installation, and pipe fittings in Riyadh, Jeddah, and Dammam.",
};

export default function PlumbingServicePage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Back Button */}
        <Link href="/" className={styles.backBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <header className={styles.header}>
          <h1 className={`${styles.title} text-gradient-plumbing`}>Certified Plumbing & Hydraulic Solutions</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--foreground-muted)" }}>
            Residential & commercial plumbing engineering, acoustic leak detection, and pump maintenance in KSA.
          </p>
        </header>

        {/* Individual Services */}
        <section style={{ marginBottom: "56px", paddingBottom: "48px", borderBottom: "1px solid var(--border)" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px", color: "var(--foreground)" }}>Browse Plumbing Services</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--foreground-muted)", marginBottom: "20px" }}>Select a specific service for detailed information, pricing, and process steps.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
            {[
              { slug: "leak-detection", label: "Acoustic Leak Detection", note: "No-dig pipe leak finding, thermal imaging, tracer gas" },
              { slug: "pipe-replacement", label: "PPR Pipe Replacement", note: "50-year-life polypropylene, heat-fusion welded" },
              { slug: "booster-pump", label: "Booster Pump Installation & Repair", note: "Grundfos, Wilo inverter pumps, dynamo replacement" },
              { slug: "water-heater", label: "Water Heater Installation & Repair", note: "Electric, solar thermal, and heat pump systems" },
              { slug: "drain-cleaning", label: "Drain Cleaning & Hydro-Jetting", note: "3,500 PSI jetting, grease removal, CCTV survey" },
              { slug: "bathroom-fitting", label: "Bathroom & Kitchen Fitting", note: "Taps, showers, WC, bidets, smart bidet seats" },
            ].map(({ slug, label, note }) => (
              <a
                key={slug}
                href={`/services/plumbing/${slug}`}
                style={{
                  display: "flex", flexDirection: "column", gap: "4px",
                  padding: "16px 18px", border: "1px solid var(--border)",
                  borderRadius: "var(--radius)", textDecoration: "none",
                  background: "var(--card-bg)", transition: "border-color 0.2s",
                  borderLeft: "3px solid #3b82f6",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--foreground)" }}>{label} →</span>
                <span style={{ fontSize: "0.775rem", color: "var(--foreground-muted)" }}>{note}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Grid Layout */}
        <div className={styles.grid}>
          {/* Main Content */}
          <article className={styles.content}>
            <h2>Reliable Hydraulic Systems for KSA Properties</h2>
            <p>
              In Saudi Arabia, domestic water networks undergo extreme thermal expansion and high pressure. Our certified plumbing specialists design, install, and troubleshoot water systems using premium, heat-resistant PPR (Polypropylene Random Copolymer) and PEX piping systems to guarantee clean, leak-free water distribution.
            </p>

            <h2>Our Plumbing Service Offerings</h2>
            <p>
              From hidden pipe leaks behind bathroom tiles to complete sewage and pump station updates, we provide rapid, non-destructive diagnostic solutions for residential villas and commercial offices.
            </p>

            <ul style={{ paddingLeft: "20px", marginBottom: "24px", color: "var(--foreground-muted)" }}>
              <li style={{ marginBottom: "10px" }}><strong>Acoustic & Thermal Leak Detection:</strong> Identifying hidden pipe leaks without breaking walls, using digital listening equipment and thermal imaging cameras.</li>
              <li style={{ marginBottom: "10px" }}><strong>Booster Pump (Dynamo) Servicing:</strong> Installation, pressure switches calibrating, and motor rewinding for automatic rooftop pump units.</li>
              <li style={{ marginBottom: "10px" }}><strong>Water Heater Installations:</strong> Setup of energy-efficient electric and hybrid solar water heaters with safety release valves.</li>
              <li style={{ marginBottom: "10px" }}><strong>Drainage Descaling & Jetting:</strong> High-pressure hydro-jetting to clean greasy restaurant drains and sewer blockages before winter rains.</li>
            </ul>

            <PlumbingCalculator />

            {/* QA Section (Topical Map / AEO Search Target) */}
            <div className={styles.qaSection}>
              <h2>Frequently Asked Questions</h2>
              
              <div className={styles.qaCard}>
                <h3 className={styles.question}>Why is water pressure low in my Saudi villa?</h3>
                <p className={styles.answer}>
                  Low water pressure is typically caused by: 1) A malfunctioning gravity-fed rooftop tank booster pump (dynamo) or incorrect pressure switch calibration, 2) Calcium scale buildup inside local PPR pipes due to water hardness, or 3) An active leak in the main supply lines draining pressure. Installing a smart automatic booster pump resolves this instantly.
                </p>
              </div>

              <div className={styles.qaCard}>
                <h3 className={styles.question}>How do you find water leaks without breaking the walls?</h3>
                <p className={styles.answer}>
                  We utilize non-destructive technologies. Acoustic leak detectors capture the specific sound frequency of pressurized water escaping from pipes. Thermal imaging cameras detect hidden moisture patterns and temperature differentials behind concrete walls and floor tiles, allowing us to pinpoint leaks within a single tile radius.
                </p>
              </div>

              <div className={styles.qaCard}>
                <h3 className={styles.question}>What type of water pipes are best for houses in Saudi Arabia?</h3>
                <p className={styles.answer}>
                  PPR (Polypropylene Random) pipes are highly recommended for hot and cold water supply lines in KSA. They offer excellent heat resistance, prevent calcium scale buildup, do not corrode from salty coastal air, and are connected using fusion welding to create solid, leak-free joints.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* CTA Box */}
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>Plumbing Emergency?</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)", marginBottom: "24px" }}>
                Water leak or broken pump? Contact our hotline for rapid dispatch.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href={`tel:${PHONE_E164}`} className="btn btn-primary" style={{ width: "100%" }}>
                  Call Emergency Plumber
                </a>
                <a
                  href={`${WHATSAPP_BASE}?text=I%20need%20urgent%20plumbing%20leak%20assistance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%" }}
                >
                  WhatsApp Plumbing
                </a>
              </div>
            </div>

            {/* Quality standards */}
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>Our Quality Guarantee</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Non-Destructive Technology</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>MOMRAH Certified Plumbers</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100% Leak-Free Guarantee</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* City Coverage */}
        <section style={{ marginTop: "64px", paddingTop: "48px", borderTop: "1px solid var(--border)" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "8px" }}>Plumbing Service — City Guides</h2>
          <p style={{ color: "var(--foreground-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
            Water quality and infrastructure differ across Saudi Arabia. Read the guide for your city.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              ["Riyadh", "riyadh", "TDS 600–900 ppm scale"],
              ["Jeddah", "jeddah", "Flash flood drainage"],
              ["Dammam", "dammam", "SWCC desalinated water"],
              ["Mecca", "mecca", "Hajj occupancy surge"],
              ["Medina", "medina", "Pilgrim hot water"],
              ["Al Khobar", "khobar", "Premium PPR systems"],
            ].map(([city, slug, note]) => (
              <Link key={slug} href={`/areas/${slug}`} style={{
                padding: "10px 18px", border: "1px solid var(--border)", borderRadius: "var(--radius)",
                textDecoration: "none", fontSize: "0.875rem", color: "var(--foreground-muted)",
                background: "var(--card-bg)", display: "flex", flexDirection: "column", gap: "2px",
                transition: "border-color 0.2s, color 0.2s",
              }}>
                <span style={{ fontWeight: 600, color: "var(--foreground)" }}>Plumbing in {city} →</span>
                <span style={{ fontSize: "0.75rem" }}>{note}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
