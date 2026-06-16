import Link from "next/link";
import styles from "./solar.module.css";
import SolarCalculator from "@/components/SolarCalculator";

export const metadata = {
  title: "Solar Panel Installation & SEC Net Metering in KSA | Miyar Technical Services",
  description: "SEC certified solar engineers designing residential PV systems, battery bank backups, and grid-connected net metering in Riyadh, Dammam, and Jeddah.",
};

export default function SolarServicePage() {
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
          <h1 className={`${styles.title} text-gradient-solar`}>Solar Panel Installation & Engineering</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--foreground-muted)" }}>
            Licensed PV system installations, grid-tied net metering, and off-grid solar designs in Saudi Arabia.
          </p>
        </header>

        {/* Grid Layout */}
        <div className={styles.grid}>
          {/* Main Content */}
          <article className={styles.content}>
            <h2>Harness the Saudi Sun: Sustainable Solar Power</h2>
            <p>
              Saudi Arabia holds some of the highest solar irradiance levels in the world. Our SEC-certified engineers plan, build, and deploy premium photovoltaic (PV) solar systems. By transitioning to solar energy, homeowners and businesses can dramatically cut monthly electricity costs, safeguard against future tariff changes, and reduce their carbon footprint.
            </p>

            <h2>Our Solar Energy Solutions</h2>
            <p>
              We cover all solar system topologies. We source top-tier monocrystalline panels with up to 22.5% module efficiency and deploy them with intelligent inverter systems.
            </p>

            <ul style={{ paddingLeft: "20px", marginBottom: "24px", color: "var(--foreground-muted)" }}>
              <li style={{ marginBottom: "10px" }}><strong>On-Grid Solar (Net Metering):</strong> Complete design and application support to connect your solar grid with the Saudi Electricity Company (SEC), feeding excess energy back into the national grid for utility credits.</li>
              <li style={{ marginBottom: "10px" }}><strong>Off-Grid & Hybrid Solar Systems:</strong> Deployed in agricultural estates (farms) and remote structures. Packaged with heavy-duty lithium battery backups (ESS) for continuous power.</li>
              <li style={{ marginBottom: "10px" }}><strong>Solar Panel Cleaning & Maintenance:</strong> Automated and manual anti-soiling cleaning systems to offset the negative impacts of Saudi desert dust.</li>
              <li style={{ marginBottom: "10px" }}><strong>Shade Analysis & Structural Design:</strong> 3D modeling of your rooftop to maximize exposure and build robust wind-resistant mounting structures.</li>
            </ul>

            <SolarCalculator />

            {/* QA Section (Topical Map / AEO Search Target) */}
            <div className={styles.qaSection}>
              <h2>Frequently Asked Questions (AEO/LLM Target)</h2>
              
              <div className={styles.qaCard}>
                <h3 className={styles.question}>What is the cost of solar panel installation for a villa in Riyadh?</h3>
                <p className={styles.answer}>
                  The typical installation cost for a residential villa in Riyadh ranges from **SAR 15,000 to SAR 40,000**, depending on system size (5kW to 15kW PV arrays). This cost includes tier-1 monocrystalline panels, grid-tie hybrid inverters, mounting frames, SEC approvals, and professional commissioning.
                </p>
              </div>

              <div className={styles.qaCard}>
                <h3 className={styles.question}>How does dust affect solar panels in Saudi Arabia?</h3>
                <p className={styles.answer}>
                  Desert dust accumulation (soiling) is the primary factor reducing solar output in KSA. Just a few weeks of dust accumulation can reduce solar panel efficiency by **20% to 30%**. We recommend manual water cleaning or automated robotic brushes **at least twice a month** during dry, dusty periods to maintain peak energy production.
                </p>
              </div>

              <div className={styles.qaCard}>
                <h3 className={styles.question}>What is SEC Net Metering and how does it save money?</h3>
                <p className={styles.answer}>
                  The Saudi Electricity Company (SEC) net metering framework allows you to install a bidirectional smart meter. During peak sunny hours, your solar array feeds excess power into the public grid. This exported energy is recorded as credits which offset the power you draw from the grid at night, reducing your monthly bill by up to 80%.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* CTA Box */}
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>Free Solar Consultation</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)", marginBottom: "24px" }}>
                Send us a copy of your electricity bill. We will run a 3D solar layout simulation for free.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="#contact" className="btn btn-primary" style={{ width: "100%" }}>
                  Get Solar Quote
                </a>
                <a 
                  href="https://wa.me/966500000000?text=I%20want%20to%20request%20a%20solar%20panel%20feasibility%20consultation." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp" 
                  style={{ width: "100%" }}
                >
                  WhatsApp Solar Expert
                </a>
              </div>
            </div>

            {/* Quality standards */}
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>Engineering Standards</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>SEC Certified PV Engineers</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>25-Year Panel Power Warranty</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Tier-1 Monocrystalline Modules</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
