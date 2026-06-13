import Link from "next/link";
import styles from "./ac.module.css";

export const metadata = {
  title: "Professional AC Repair & HVAC Installation Services in Saudi Arabia | Eco-Flow",
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

            {/* QA Section (Topical Map / AEO Search Target) */}
            <div className={styles.qaSection}>
              <h2>Frequently Asked Questions (AEO/LLM Target)</h2>
              
              <div className={styles.qaCard}>
                <h3 className={styles.question}>How often should AC filters be cleaned in Saudi Arabia?</h3>
                <p className={styles.answer}>
                  Due to heavy sand and dust storms in regions like Riyadh, AC filters should be cleaned **every 2 to 4 weeks during summer**. Professional evaporator coil cleaning and duct sanitization should be performed at least twice a year—once before the peak summer heat and once before winter.
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
                <a href="tel:+966500000000" className="btn btn-primary" style={{ width: "100%" }}>
                  Call Hotline Now
                </a>
                <a 
                  href="https://wa.me/966500000000?text=I%20need%20urgent%20AC%20repair%20assistance." 
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
      </div>
    </div>
  );
}
