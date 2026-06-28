"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_BASE } from "@/lib/siteConfig";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Riyadh",
    service: "AC Installation & Repair",
    date: "",
    time: "Morning (8 AM - 12 PM)",
    message: "",
  });

  const [minDate, setMinDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [createdBooking, setCreatedBooking] = useState<any>(null);

  // Set minimum date to today
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppLink = (booking: any) => {
    const baseText = `Hello Miyar Technical Services! I have submitted a service booking online:
- *Booking ID*: ${booking?.id || "N/A"}
- *Name*: ${formData.name}
- *Phone*: ${formData.phone}
- *City*: ${formData.city}
- *Service*: ${formData.service}
- *Date*: ${formData.date}
- *Time Slot*: ${formData.time}
- *Details*: ${formData.message || "None"}`;

    return `${WHATSAPP_BASE}?text=${encodeURIComponent(baseText)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setCreatedBooking(data.booking);
      setSuccess(true);

      // Try opening WhatsApp prefilled message as a fallback/accelerator
      try {
        const waLink = generateWhatsAppLink(data.booking);
        window.open(waLink, "_blank", "noopener,noreferrer");
      } catch (waErr) {
        console.error("Failed to open WhatsApp window automatically:", waErr);
      }
    } catch (err: any) {
      setError(err.message || "Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "Riyadh",
      service: "AC Installation & Repair",
      date: "",
      time: "Morning (8 AM - 12 PM)",
      message: "",
    });
    setSuccess(false);
    setError("");
    setCreatedBooking(null);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className="container">
        {!success ? (
          <div className={styles.grid}>
            {/* Left Column - Benefits & Premium Info */}
            <div className={styles.infoCol}>
              <span className={styles.tag}>Online Booking</span>
              <h1 className={styles.title}>
                Schedule Your Service <span className="text-gradient">With Us</span>
              </h1>
              <p className={styles.description}>
                Book certified AC technicians, professional plumbers, and solar installation experts instantly. 
                Fill in your details, pick a convenient date & time, and our team will be dispatched to your location.
              </p>

              <div className={styles.features}>
                <div className={styles.featureItem}>
                  <div className={styles.iconCircle}>⏱️</div>
                  <div>
                    <h4>30-Min Confirmation</h4>
                    <p>We confirm all scheduled appointments within 30 minutes of submittal.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.iconCircle}>🛠️</div>
                  <div>
                    <h4>Certified Experts Only</h4>
                    <p>All service calls are handled by fully licensed and insured technicians.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.iconCircle}>🇸🇦</div>
                  <div>
                    <h4>Kingdom-Wide Coverage</h4>
                    <p>Serving Riyadh, Jeddah, Dammam, and 11 other cities across Saudi Arabia.</p>
                  </div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <p>Need Emergency Service right now?</p>
                <div className={styles.contactActions}>
                  <a href={`tel:${PHONE_E164}`} className={styles.callLink}>
                    📞 Call Support: {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Book An Appointment</h3>
                <p className={styles.formSubtitle}>Select your service preference below.</p>

                {error && <div className={styles.errorAlert}>{error}</div>}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Mohammed Salem"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.group}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="^\+?[0-9\s\-]{7,20}$"
                        title="Please enter a valid phone number (7–20 digits)"
                        placeholder="e.g. +966 50 123 4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="email">
                      Email Address <span>(Optional — for confirmation receipts)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. m.salem@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label htmlFor="city">City (Saudi Arabia)</label>
                      <select id="city" name="city" value={formData.city} onChange={handleChange}>
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

                    <div className={styles.group}>
                      <label htmlFor="service">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="AC Installation & Repair">AC Repair &amp; Maintenance</option>
                        <option value="AC Cleaning Service">AC Cleaning &amp; Sanitization</option>
                        <option value="Emergency Plumbing Repair">Emergency Plumbing Repair</option>
                        <option value="Water Pump & Heater Setup">Water Pump &amp; Heater Install</option>
                        <option value="Solar Panel System Install">Solar Panel Installation</option>
                        <option value="Solar Panel Maintenance">Solar Cleaning &amp; Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label htmlFor="date">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={minDate}
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.group}>
                      <label htmlFor="time">Preferred Time Slot</label>
                      <select id="time" name="time" value={formData.time} onChange={handleChange}>
                        <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                        <option value="Night Emergency (8 PM - 8 AM)">Night Emergency (8 PM - 8 AM)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="message">Describe Service Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Please details what you need (e.g. split AC not cooling, toilet pipe leak, solar panel estimation, etc.)"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? "Scheduling Booking..." : "Submit Booking Schedule"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className={styles.successWrapper}>
            <div className={styles.successCard}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>Booking Scheduled Successfully!</h2>
              <p className={styles.successDesc}>
                Thank you, <strong>{formData.name}</strong>. Your appointment for{" "}
                <strong>{formData.service}</strong> in <strong>{formData.city}</strong> has been
                registered.
              </p>

              <div className={styles.detailsBox}>
                <div className={styles.detailsHeader}>Booking Ref: {createdBooking?.id}</div>
                <div className={styles.detailsRow}>
                  <span>Scheduled Date:</span>
                  <strong>{formData.date}</strong>
                </div>
                <div className={styles.detailsRow}>
                  <span>Time Slot:</span>
                  <strong>{formData.time}</strong>
                </div>
                <div className={styles.detailsRow}>
                  <span>Contact Phone:</span>
                  <strong>{formData.phone}</strong>
                </div>
              </div>

              <p className={styles.followUpText}>
                We have sent a copy of this booking to your email. If WhatsApp did not open
                automatically to finalize details, please click the button below:
              </p>

              <div className={styles.successActions}>
                <a
                  href={generateWhatsAppLink(createdBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waButton}
                >
                  Confirm details on WhatsApp
                </a>

                <button onClick={handleReset} className={styles.resetButton}>
                  Book Another Appointment
                </button>

                <Link href="/" className={styles.homeLink}>
                  Back to Home Page
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
