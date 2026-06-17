import styles from "./Hero.module.css";
import { PHONE_E164, WHATSAPP_BASE } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={`${styles.heroContainer} container`}>
        {/* Main Content Area */}
        <div className={styles.content}>
          <div className={styles.statusBar}>
            <span className="pulse-dot"></span>
            <span>24/7 Emergency AC & Plumbing Support in KSA</span>
          </div>
          
          <h1 className={styles.title}>
            Premium <span className={styles.highlight}>AC, Plumbing</span> & <span className={styles.highlight}>Solar</span> Services
          </h1>
          
          <p className={styles.description}>
            Miyar Technical Services delivers certified HVAC maintenance, quick-response plumbing repairs, and energy-saving solar panel installations across Saudi Arabia. Experience expert engineering and reliable support today.
          </p>
          
          <div className={styles.ctaGroup}>
            <a href="#contact" className="btn btn-primary">
              Book a Service
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <a
              href={`${WHATSAPP_BASE}?text=Hello%20Miyar%20Technical%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.558 1.866 14.077.834 11.442.833 6.005.833 1.582 5.253 1.578 10.69c-.001 1.71.452 3.38 1.312 4.869l-1.02 3.733 3.825-.999zm12.39-7.234c-.272-.136-1.61-.794-1.859-.885-.25-.091-.432-.136-.613.136-.18.272-.703.885-.862 1.066-.158.182-.317.204-.589.068-.272-.136-1.15-.424-2.19-1.353-.809-.721-1.355-1.613-1.514-1.886-.159-.272-.017-.419.119-.554.122-.122.272-.318.408-.477.136-.16.182-.273.272-.455.09-.182.046-.341-.023-.477-.068-.136-.613-1.477-.84-2.023-.22-.53-.443-.457-.613-.466-.158-.009-.34-.01-.522-.01-.182 0-.477.068-.727.341-.25.272-.954.932-.954 2.273s.977 2.636 1.114 2.818c.136.182 1.92 2.932 4.654 4.113.65.28 1.157.447 1.554.573.654.208 1.25.178 1.721.108.525-.078 1.61-.659 1.837-1.295.227-.636.227-1.182.159-1.295-.068-.113-.25-.204-.522-.34z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Emergency Services</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Years Combined Exp.</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Warranty on Repair</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Card */}
        <div className={styles.badgeCard}>
          <div>
            <h3 className={styles.badgeTitle}>Our Guarantee</h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>Why home owners trust Miyar</p>
          </div>
          <ul className={styles.badgeList}>
            <li className={styles.badgeItem}>
              <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span><strong>No hidden fees:</strong> Upfront pricing before any service begins.</span>
            </li>
            <li className={styles.badgeItem}>
              <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span><strong>Certified Techs:</strong> Fully background-checked and highly trained teams.</span>
            </li>
            <li className={styles.badgeItem}>
              <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span><strong>Top Tier Materials:</strong> Original spare parts & tier-1 solar brands.</span>
            </li>
            <li className={styles.badgeItem}>
              <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span><strong>Multi-lingual Support:</strong> Services in Arabic and English.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
