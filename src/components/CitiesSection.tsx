import Link from "next/link";
import styles from "./CitiesSection.module.css";

const CITIES = [
  {
    slug: "riyadh",
    name: "Riyadh",
    nameAr: "الرياض",
    region: "Central Region",
    highlight: "Extreme 47°C heat, haboob dust storms",
    acNote: "High-ambient compressors",
    solarNote: "7.0 kWh/m²/day — best in KSA",
    color: "#06b6d4",
  },
  {
    slug: "jeddah",
    name: "Jeddah",
    nameAr: "جدة",
    region: "Western Region",
    highlight: "Red Sea salt-air & coastal humidity",
    acNote: "Anti-corrosion marine service",
    solarNote: "6.3 kWh/m²/day — marine-grade",
    color: "#3b82f6",
  },
  {
    slug: "dammam",
    name: "Dammam",
    nameAr: "الدمام",
    region: "Eastern Province",
    highlight: "Industrial petrochemical pollution",
    acNote: "Industrial alkaline coil cleaning",
    solarNote: "6.2 kWh/m²/day — high ROI",
    color: "#8b5cf6",
  },
  {
    slug: "mecca",
    name: "Mecca",
    nameAr: "مكة المكرمة",
    region: "Makkah Province",
    highlight: "Hajj & Umrah occupancy surges",
    acNote: "Pre-season Hajj maintenance",
    solarNote: "6.1 kWh/m²/day — near Haram",
    color: "#22c55e",
  },
  {
    slug: "medina",
    name: "Medina",
    nameAr: "المدينة المنورة",
    region: "Madinah Province",
    highlight: "High-altitude, Ramadan peak loads",
    acNote: "Pre-Ramadan deep service",
    solarNote: "6.5 kWh/m²/day — top yield",
    color: "#f59e0b",
  },
  {
    slug: "khobar",
    name: "Al Khobar",
    nameAr: "الخبر",
    region: "Eastern Province",
    highlight: "International compounds & Gulf air",
    acNote: "Compound annual contracts",
    solarNote: "Premium panels, 6.2 kWh/m²/day",
    color: "#ef4444",
  },
];

export default function CitiesSection() {
  return (
    <section id="areas" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-tag">Coverage</span>
          <h2 className="section-title">We Serve Every Major Saudi City</h2>
          <p className="section-desc">
            Each Saudi city has a unique climate and infrastructure challenge. Our local teams are trained for the specific conditions in each city — from Riyadh&apos;s haboob dust storms to Jeddah&apos;s coastal corrosion.
          </p>
        </div>

        {/* City Grid */}
        <div className={styles.grid}>
          {CITIES.map((city) => (
            <Link key={city.slug} href={`/areas/${city.slug}`} className={styles.card}>
              <div className={styles.cardAccent} style={{ backgroundColor: city.color }} />

              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cityName}>{city.name}</h3>
                  <span className={styles.cityNameAr}>{city.nameAr}</span>
                </div>

                <p className={styles.region} style={{ color: city.color }}>{city.region}</p>
                <p className={styles.highlight}>{city.highlight}</p>

                <div className={styles.services}>
                  <span className={styles.serviceRow}>
                    <span style={{ color: "#06b6d4", fontWeight: 600 }}>❄</span>
                    {city.acNote}
                  </span>
                  <span className={styles.serviceRow}>
                    <span style={{ color: "#eab308", fontWeight: 600 }}>☀</span>
                    {city.solarNote}
                  </span>
                </div>

                <span className={styles.cta} style={{ color: city.color }}>
                  View {city.name} Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <Link href="/areas" className={styles.outlineBtn}>
            View All Service Areas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
