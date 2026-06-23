"use client";

import { useState, useEffect } from "react";
import styles from "./AnnouncementBar.module.css";
import { WHATSAPP_BASE } from "@/lib/siteConfig";

const DISMISS_KEY = "announcement_dismissed_v2";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.bar} role="banner">
      <div className={styles.inner}>
        <span className={styles.badge}>Summer Offer</span>
        <p className={styles.text}>
          Free AC inspection + 20% off maintenance contract for new customers.{" "}
          <a
            href={`${WHATSAPP_BASE}?text=I%20want%20to%20claim%20the%20summer%20AC%20inspection%20offer`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Claim on WhatsApp →
          </a>
        </p>
      </div>
      <button className={styles.closeBtn} onClick={dismiss} aria-label="Dismiss announcement">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
