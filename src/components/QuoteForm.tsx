"use client";

import React, { useState, useEffect } from "react";
import styles from "./QuoteForm.module.css";
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_BASE, EMAIL } from "@/lib/siteConfig";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Riyadh",
    service: "AC Installation & Repair",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Pre-fill form from URL query params (e.g. from calculator CTAs)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const message = params.get("message");
    if (service || message) {
      setFormData((prev) => ({
        ...prev,
        ...(service ? { service } : {}),
        ...(message ? { message } : {}),
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppLink = () => {
    const baseText = `Hello ${`Miyar Technical Services`}! I want to request a quote:
- *Name*: ${formData.name}
- *Phone*: ${formData.phone}
- *City*: ${formData.city}
- *Service*: ${formData.service}
- *Message*: ${formData.message}`;

    return `${WHATSAPP_BASE}?text=${encodeURIComponent(baseText)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Send email via Resend (fire-and-forget — don't block WhatsApp)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {}); // silent fail — WhatsApp is the reliable fallback
    // Open WhatsApp so the business receives it immediately
    window.open(generateWhatsAppLink(), "_blank", "noopener,noreferrer");
    setLoading(false);
    setSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      city: "Riyadh",
      service: "AC Installation & Repair",
      message: "",
    });
    setSuccess(false);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={`${styles.grid} container`}>
        {/* Left Column: Direct Contacts */}
        <div className={styles.contactInfo}>
          <div>
            <span className="section-tag">Get in Touch</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "16px" }}>Connect With Us</h2>
            <p style={{ color: "var(--foreground-muted)", fontSize: "0.95rem" }}>
              Have questions or need immediate service? Call our support desk or send a direct inquiry. We respond to emergency calls instantly.
            </p>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Phone Call Support</span>
                <a href={`tel:${PHONE_E164}`} className={styles.contactVal}>{PHONE_DISPLAY}</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Email Inquiry</span>
                <a href={`mailto:${EMAIL}`} className={styles.contactVal}>{EMAIL}</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Head Office Location</span>
                <span className={styles.contactVal}>King Fahd Road, Riyadh, KSA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className={styles.formCard}>
          {!success ? (
            <>
              <h3 className={styles.formTitle}>Request a Quote</h3>
              <p className={styles.formDesc}>Provide your service requirements. We will contact you within 30 minutes.</p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Mohammed Ahmed"
                      className={styles.input}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="^\+?[0-9\s\-]{7,20}$"
                      title="Please enter a valid phone number (7–20 digits)"
                      placeholder="e.g. +966 50 123 4567"
                      className={styles.input}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="city" className={styles.label}>City (KSA)</label>
                    <select
                      id="city"
                      name="city"
                      className={styles.select}
                      value={formData.city}
                      onChange={handleChange}
                    >
                      <option value="Riyadh">Riyadh</option>
                      <option value="Jeddah">Jeddah</option>
                      <option value="Dammam">Dammam</option>
                      <option value="Mecca">Mecca</option>
                      <option value="Medina">Medina</option>
                      <option value="Al Khobar">Al Khobar</option>
                      <option value="Taif">Taif</option>
                      <option value="Tabuk">Tabuk</option>
                      <option value="Abha">Abha</option>
                      <option value="Jubail">Jubail</option>
                      <option value="Yanbu">Yanbu</option>
                      <option value="Buraydah">Buraydah</option>
                      <option value="Khamis Mushait">Khamis Mushait</option>
                      <option value="Ha'il">Ha&apos;il</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="service" className={styles.label}>Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      className={styles.select}
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="AC Installation & Repair">AC Repair &amp; Maintenance</option>
                      <option value="AC Cleaning Service">AC Cleaning &amp; Duct Sanitizing</option>
                      <option value="Emergency Plumbing Repair">Emergency Plumbing &amp; Repair</option>
                      <option value="Water Pump & Heater Setup">Pump &amp; Water Heater Install</option>
                      <option value="Solar Panel System Install">Solar Panel Installation</option>
                      <option value="Solar Panel Maintenance">Solar Cleaning &amp; Maintenance</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Describe Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us what you need (e.g. 3 split AC units cleaned, solar panel consultation for house roof, water heater leak repair)."
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: "12px", width: "100%" }}>
                  {loading ? (
                    <span>Opening WhatsApp...</span>
                  ) : (
                    <>
                      <span>Submit via WhatsApp</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className={styles.successMessage}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(22, 163, 74, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--secondary)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.successTitle}>Request Sent via WhatsApp!</h3>
              <p className={styles.successDesc}>
                Thank you, <strong>{formData.name}</strong>. Your request for <strong>{formData.service}</strong> in <strong>{formData.city}</strong> has been sent. If WhatsApp did not open automatically, tap the button below.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", marginTop: "16px" }}>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%" }}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: "4px" }}>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.558 1.866 14.077.834 11.442.833 6.005.833 1.582 5.253 1.578 10.69c-.001 1.71.452 3.38 1.312 4.869l-1.02 3.733 3.825-.999zm12.39-7.234c-.272-.136-1.61-.794-1.859-.885-.25-.091-.432-.136-.613.136-.18.272-.703.885-.862 1.066-.158.182-.317.204-.589.068-.272-.136-1.15-.424-2.19-1.353-.809-.721-1.355-1.613-1.514-1.886-.159-.272-.017-.419.119-.554.122-.122.272-.318.408-.477.136-.16.182-.273.272-.455.09-.182.046-.341-.023-.477-.068-.136-.613-1.477-.84-2.023-.22-.53-.443-.457-.613-.466-.158-.009-.34-.01-.522-.01-.182 0-.477.068-.727.341-.25.272-.954.932-.954 2.273s.977 2.636 1.114 2.818c.136.182 1.92 2.932 4.654 4.113.65.28 1.157.447 1.554.573.654.208 1.25.178 1.721.108.525-.078 1.61-.659 1.837-1.295.227-.636.227-1.182.159-1.295-.068-.113-.25-.204-.522-.34z"/>
                  </svg>
                  Resend via WhatsApp
                </a>

                <button onClick={handleReset} className="btn btn-secondary" style={{ width: "100%" }}>
                  Submit Another Request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
