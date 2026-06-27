import Link from "next/link";
import styles from "./Footer.module.css";
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_BASE } from "@/lib/siteConfig";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} container`}>

        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M16 8C16 8 10 14 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 14 16 8 16 8Z" fill="currentColor" fillOpacity="0.8" />
            </svg>
            <div>
              <span className={styles.logoText}>Miyar</span>
              <span className={styles.logoSub}> Technical Services</span>
            </div>
          </div>

          <p className={styles.brandDesc}>
            Saudi Arabia&apos;s trusted home maintenance partner — certified HVAC engineers,
            licensed plumbers, and SEC-approved solar specialists serving 14 cities across the Kingdom.
          </p>

          <div className={styles.licenseRow}>
            <span className={styles.badge}>SEC Certified</span>
            <span className={styles.badge}>MOMRAH Licensed</span>
            <span className={styles.badge}>SASO Approved</span>
          </div>

          {/* Social / Contact buttons */}
          <div className={styles.contactBtns}>
            <a
              href={`${WHATSAPP_BASE}?text=Hi%2C%20I%20need%20a%20service%20quote`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a href={`tel:${PHONE_E164}`} className={styles.callBtn}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className={styles.colTitle}>Our Services</h4>
          <ul className={styles.linkList}>
            <li><Link href="/services/ac" className={styles.link}>AC &amp; HVAC Overview</Link></li>
            <li><Link href="/services/ac/split-ac-installation" className={styles.link}>Split AC Installation</Link></li>
            <li><Link href="/services/ac/ac-repair" className={styles.link}>AC Emergency Repair</Link></li>
            <li><Link href="/services/ac/ac-maintenance" className={styles.link}>AC Maintenance Contract</Link></li>
            <li><Link href="/services/plumbing" className={styles.link}>Plumbing Overview</Link></li>
            <li><Link href="/services/plumbing/leak-detection" className={styles.link}>Leak Detection</Link></li>
            <li><Link href="/services/plumbing/pipe-replacement" className={styles.link}>PPR Pipe Replacement</Link></li>
            <li><Link href="/services/solar" className={styles.link}>Solar Energy Overview</Link></li>
            <li><Link href="/services/solar/solar-installation" className={styles.link}>Solar Installation</Link></li>
            <li><Link href="/services/solar/sec-net-metering" className={styles.link}>SEC Net Metering</Link></li>
          </ul>
        </div>

        {/* Cities — split into two mini-cols */}
        <div>
          <h4 className={styles.colTitle}>Areas We Serve</h4>
          <div className={styles.cityGrid}>
            <ul className={styles.linkList}>
              <li><Link href="/areas/riyadh" className={styles.link}>Riyadh</Link></li>
              <li><Link href="/areas/jeddah" className={styles.link}>Jeddah</Link></li>
              <li><Link href="/areas/dammam" className={styles.link}>Dammam</Link></li>
              <li><Link href="/areas/mecca" className={styles.link}>Mecca</Link></li>
              <li><Link href="/areas/medina" className={styles.link}>Medina</Link></li>
              <li><Link href="/areas/khobar" className={styles.link}>Al Khobar</Link></li>
              <li><Link href="/areas/taif" className={styles.link}>Taif</Link></li>
            </ul>
            <ul className={styles.linkList}>
              <li><Link href="/areas/tabuk" className={styles.link}>Tabuk</Link></li>
              <li><Link href="/areas/abha" className={styles.link}>Abha</Link></li>
              <li><Link href="/areas/jubail" className={styles.link}>Jubail</Link></li>
              <li><Link href="/areas/yanbu" className={styles.link}>Yanbu</Link></li>
              <li><Link href="/areas/buraydah" className={styles.link}>Buraydah</Link></li>
              <li><Link href="/areas/khamis-mushait" className={styles.link}>Khamis Mushait</Link></li>
              <li><Link href="/areas/hail" className={styles.link}>Ha&apos;il</Link></li>
            </ul>
          </div>
          <Link href="/areas" className={styles.allCitiesLink}>View all 14 cities →</Link>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.colTitle}>Contact &amp; Support</h4>
          <div className={styles.contactText}>
            <div className={styles.contactItem}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Office #102, King Fahd Road,<br />Riyadh 12211, KSA</span>
            </div>
            <div className={styles.contactItem}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href={`tel:${PHONE_E164}`} className={styles.contactLink}>{PHONE_DISPLAY}</a>
            </div>
            <div className={styles.contactItem}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:info@miyartechnicalservices.com" className={styles.contactLink}>info@miyartechnicalservices.com</a>
            </div>
            <div className={styles.contactItem}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>24 / 7 Emergency Response</span>
            </div>
          </div>
        </div>

      </div>

      {/* Newsletter strip */}
      <div className={`${styles.newsletterStrip} container`}>
        <NewsletterForm source="footer" compact />
      </div>

      {/* Bottom Bar */}
      <div className={`${styles.bottomBar} container`}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Miyar Technical Services. All rights reserved. Kingdom of Saudi Arabia.
        </span>
        <ul className={styles.bottomLinks}>
          <li><Link href="/blog" className={styles.bottomLink}>Blog</Link></li>
          <li><Link href="/areas" className={styles.bottomLink}>Service Areas</Link></li>
          <li><a href="#" className={styles.bottomLink}>Privacy Policy</a></li>
          <li><a href="#" className={styles.bottomLink}>Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}
