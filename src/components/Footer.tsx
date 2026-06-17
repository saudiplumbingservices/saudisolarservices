import Link from "next/link";
import styles from "./Footer.module.css";
import { PHONE_E164, PHONE_DISPLAY } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} container`}>
        {/* Brand Information */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <svg
              className={styles.logoIcon}
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
              <path
                d="M16 8C16 8 10 14 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 14 16 8 16 8Z"
                fill="currentColor"
                fillOpacity="0.8"
              />
            </svg>
            <span className={styles.logoText}>Miyar</span>
          </div>
          <p className={styles.brandDesc}>
            Miyar Technical Services is a premier home maintenance and energy provider in Saudi Arabia. We deliver certified services for HVAC systems, plumbing engineering, and smart solar microgrids.
          </p>
          <div className={styles.licenseRow}>
            <span className={styles.badge}>SEC Certified</span>
            <span className={styles.badge}>MOMRAH Licensed</span>
            <span className={styles.badge}>Saber Approved</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#home" className={styles.link}>
                Home Landing
              </a>
            </li>
            <li>
              <a href="#services" className={styles.link}>
                Our Services
              </a>
            </li>
            <li>
              <a href="#why-us" className={styles.link}>
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.link}>
                Recent Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.link}>
                Get a Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/services/ac" className={styles.link}>
                AC &amp; HVAC Repair
              </Link>
            </li>
            <li>
              <Link href="/services/plumbing" className={styles.link}>
                Plumbing &amp; Leak Detection
              </Link>
            </li>
            <li>
              <Link href="/services/solar" className={styles.link}>
                Solar Panel Installation
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.link}>
                Expert Guides (Blog)
              </Link>
            </li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h4 className={styles.colTitle}>Areas We Serve</h4>
          <ul className={styles.linkList}>
            <li><Link href="/areas/riyadh" className={styles.link}>Riyadh</Link></li>
            <li><Link href="/areas/jeddah" className={styles.link}>Jeddah</Link></li>
            <li><Link href="/areas/dammam" className={styles.link}>Dammam</Link></li>
            <li><Link href="/areas/mecca" className={styles.link}>Mecca</Link></li>
            <li><Link href="/areas/medina" className={styles.link}>Medina</Link></li>
            <li><Link href="/areas/khobar" className={styles.link}>Al Khobar</Link></li>
          </ul>
        </div>

        {/* Location & Support */}
        <div>
          <h4 className={styles.colTitle}>Contact Info</h4>
          <div className={styles.contactText}>
            <p>
              <strong>Address:</strong>
              <br />
              Office #102, King Fahd Road,
              <br />
              Riyadh 12211, Kingdom of Saudi Arabia
            </p>
            <p>
              <strong>24/7 Hotline:</strong>
              <br />
              <a href={`tel:${PHONE_E164}`} style={{ color: "var(--primary-light)", fontWeight: "bold" }}>
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <strong>Support Email:</strong>
              <br />
              <a href="mailto:info@miyartechnicalservices.com">info@miyartechnicalservices.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className={`${styles.bottomBar} container`}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Miyar Technical Services. All rights reserved. Made in KSA.
        </span>
        <ul className={styles.bottomLinks}>
          <li>
            <a href="#" className={styles.bottomLink}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className={styles.bottomLink}>
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
