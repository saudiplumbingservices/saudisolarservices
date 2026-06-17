import Link from "next/link";
import styles from "./ac.module.css";
import AcCalculator from "@/components/AcCalculator";
import { PHONE_E164, WHATSAPP_BASE } from "@/lib/siteConfig";

export const metadata = {
  title: "Professional AC Repair & HVAC Installation Services in Saudi Arabia | Miyar Technical Services",
  description: "Licensed HVAC engineers offering split AC repairs, central air maintenance, gas recharging (R410A), and duct sanitizing in Riyadh, Jeddah, and Dammam.",
};

export default function ACServicePage() {
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
          <h1 className={`${styles.title} text-gradient-ac`}>AC & HVAC Cooling Services</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--foreground-muted)" }}>
            Licensed HVAC engineering & emergency air conditioner repair across Saudi Arabia.
          </p>
        </header>

        {/* Individual Services */}
        <section style={{ marginBottom: "56px", paddingBottom: "48px", borderBottom: "1px solid var(--border)" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px", color: "var(--foreground)" }}>Browse AC &amp; HVAC Services</h2>
          <p style={{ fontSize: "0.875rem", color: "var(--foreground-muted)", marginBottom: "20px" }}>Select a specific service for detailed information, pricing, and process steps.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
            {[
              { slug: "split-ac-installation", label: "Split AC Installation", note: "Sizing, copper flaring, vacuum test, commissioning" },
              { slug: "ac-repair", label: "Emergency AC Repair", note: "2-hour response, 24/7, capacitor to compressor" },
              { slug: "ac-maintenance", label: "Annual Maintenance Contract", note: "4 visits/year, anti-corrosion, priority emergency" },
              { slug: "vrf-central-ac", label: "VRF & Central AC Systems", note: "Daikin VRV, Mitsubishi City Multi, multi-zone" },
              { slug: "refrigerant-recharge", label: "Refrigerant Recharge & Leak Repair", note: "Electronic leak detection, brazing, correct charge" },
              { slug: "duct-cleaning", label: "Duct Cleaning & Air Sanitization", note: "HEPA vacuum, antimicrobial, indoor air quality" },
            ].map(({ slug, label, note }) => (
              <a
                key={slug}
                href={`/services/ac/${slug}`}
                style={{
                  display: "flex", flexDirection: "column", gap: "4px",
                  padding: "16px 18px", border: "1px solid var(--border)",
                  borderRadius: "var(--radius)", textDecoration: "none",
                  background: "var(--card-bg)", transition: "border-color 0.2s",
                  borderLeft: "3px solid #06b6d4",
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
            <h2>Beating the Saudi Summer: Premium AC Solutions</h2>
            <p>
              In Saudi Arabia, cooling systems are not a luxury—they are critical infrastructure. Our team of certified HVAC technicians delivers high-performance maintenance, installation, and rapid repair services. We work strictly in accordance with Saudi Arabian Standards Organization (SASO) guidelines.
            </p>

            <h2>Our HVAC Core Solutions</h2>
            <p>
              We cover all air conditioning system architectures. Whether it is a luxury residential villa utilizing modern split air conditioners or a large-scale commercial development running complex VRF (Variable Refrigerant Flow) systems, we secure consistent cooling efficiency.
            </p>

            <ul style={{ paddingLeft: "20px", marginBottom: "24px", color: "var(--foreground-muted)" }}>
              <li style={{ marginBottom: "10px" }}><strong>Split AC Installation & Diagnostics:</strong> Precision mounting, copper tube flaring, pressure vacuuming, and commissioning.</li>
              <li style={{ marginBottom: "10px" }}><strong>Freon Gas Top-up & Leak Testing:</strong> Environmentally conscious refrigerant charging (R410A and R22) with electronic leak detectors.</li>
              <li style={{ marginBottom: "10px" }}><strong>Duct Cleaning & Air Flow Sanitization:</strong> Removal of desert dust, pollen, and allergens from ducted splits and package units to guarantee pristine indoor air quality.</li>
              <li style={{ marginBottom: "10px" }}><strong>Compressor & Fan Motor Swap:</strong> Direct replacement of faulty compressor units with original manufacture warranty parts.</li>
            </ul>

            <AcCalculator />

            {/* QA Section (Topical Map / AEO Search Target) */}
            <div className={styles.qaSection}>
              <h2>Frequently Asked Questions</h2>
              
              <div className={styles.qaCard}>
                <h3 className={styles.question}>How often should AC filters be cleaned in Saudi Arabia?</h3>
                <p className={styles.answer}>
                  Due to heavy sand and dust storms in regions like Riyadh, AC filters should be cleaned <strong>every 2 to 4 weeks during summer</strong>. Professional evaporator coil cleaning and duct sanitization should be performed at least twice a year—once before the peak summer heat and once before winter.
                </p>
              </div>

              <div className={styles.qaCard}>
                <h3 className={styles.question}>Why is my split AC blowing warm air?</h3>
                <p className={styles.answer}>
                  This is typically caused by: 1) Low refrigerant level due to a copper line leak, 2) A failed compressor capacitor, 3) Heavily soiled condenser coils blocking heat exchange, or 4) A faulty outdoor fan motor. A technical inspection is required to determine the exact component replacement needed.
                </p>
              </div>

              <div className={styles.qaCard}>
                <h3 className={styles.question}>What is the advantage of VRF AC systems for Saudi villas?</h3>
                <p className={styles.answer}>
                  VRF (Variable Refrigerant Flow) systems allow a single outdoor unit to connect to multiple indoor units, adjusting motor speed dynamically. This delivers precise zoning, occupies less rooftop space, and reduces monthly electrical consumption by up to 40% compared to standard package units.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* CTA Box */}
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>Instant AC Booking</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)", marginBottom: "24px" }}>
                Book an emergency diagnostic checkup. We arrive within 30 minutes in major cities.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href={`tel:${PHONE_E164}`} className="btn btn-primary" style={{ width: "100%" }}>
                  Call Hotline Now
                </a>
                <a
                  href={`${WHATSAPP_BASE}?text=I%20need%20urgent%20AC%20repair%20assistance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%" }}
                >
                  WhatsApp Support
                </a>
              </div>
            </div>

            {/* Quality standards */}
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>Our HVAC Guarantee</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100% Genuine Spare Parts</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>SASO Compliance Certified</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>6-Month Service Warranty</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* City Coverage */}
        <section style={{ marginTop: "64px", paddingTop: "48px", borderTop: "1px solid var(--border)" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "8px" }}>AC &amp; HVAC Service — City Guides</h2>
          <p style={{ color: "var(--foreground-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
            Each Saudi city has unique HVAC challenges. Explore our city-specific guides.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              ["Riyadh", "riyadh", "Dust storms & extreme heat"],
              ["Jeddah", "jeddah", "Salt corrosion & humidity"],
              ["Dammam", "dammam", "Industrial pollution"],
              ["Mecca", "mecca", "Hajj season surge"],
              ["Medina", "medina", "Ramadan peak demand"],
              ["Al Khobar", "khobar", "Compound contracts"],
            ].map(([city, slug, note]) => (
              <Link key={slug} href={`/areas/${slug}`} style={{
                padding: "10px 18px", border: "1px solid var(--border)", borderRadius: "var(--radius)",
                textDecoration: "none", fontSize: "0.875rem", color: "var(--foreground-muted)",
                background: "var(--card-bg)", display: "flex", flexDirection: "column", gap: "2px",
                transition: "border-color 0.2s, color 0.2s",
              }}>
                <span style={{ fontWeight: 600, color: "var(--foreground)" }}>AC in {city} →</span>
                <span style={{ fontSize: "0.75rem" }}>{note}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
