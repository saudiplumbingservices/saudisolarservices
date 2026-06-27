"use client";

import { useState } from "react";
import styles from "./NewsletterForm.module.css";

interface Props {
  source?: string;
  compact?: boolean;
}

export default function NewsletterForm({ source = "website", compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please try again");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`${styles.wrap} ${compact ? styles.compact : ""} ${styles.successWrap}`}>
        <div className={styles.successIcon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <p className={styles.successTitle}>You&apos;re subscribed!</p>
          <p className={styles.successDesc}>Check your inbox — a welcome email is on its way.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.wrap} ${compact ? styles.compact : ""}`}>
      {!compact && (
        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>Stay Informed</p>
          <h3 className={styles.heading}>Saudi AC &amp; Solar Tips in Your Inbox</h3>
          <p className={styles.subtext}>
            Maintenance reminders, seasonal checklists, and exclusive offers for customers across Saudi Arabia. No spam — unsubscribe anytime.
          </p>
        </div>
      )}
      {compact && <p className={styles.compactLabel}>Subscribe for AC &amp; solar tips</p>}

      <form onSubmit={submit} className={styles.form}>
        <div className={styles.inputRow}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={styles.input}
            disabled={status === "loading"}
          />
          <button type="submit" className={styles.btn} disabled={status === "loading"}>
            {status === "loading" ? (
              <span className={styles.spinner} />
            ) : (
              <>
                <span>Subscribe</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </div>
        {status === "error" && (
          <p className={styles.errorMsg}>{errorMsg}</p>
        )}
        {!compact && (
          <p className={styles.privacy}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            No spam · Unsubscribe anytime
          </p>
        )}
      </form>
    </div>
  );
}
