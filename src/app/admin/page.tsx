"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

interface Booking {
  id: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  date: string;
  time: string;
  message: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [loadingAuth, setLoadingAuth] = useState(false);

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [dataError, setDataError] = useState("");

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedService, setSelectedService] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Check if admin is already logged in on mount
  useEffect(() => {
    const savedToken = sessionStorage.getItem("admin_token");
    if (savedToken) {
      setIsAuthenticated(true);
      fetchBookings(savedToken);
    }
  }, []);

  const fetchBookings = async (token: string) => {
    setLoadingData(true);
    setDataError("");
    try {
      const res = await fetch("/api/bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          handleLogout();
          throw new Error("Session expired. Please log in again.");
        }
        throw new Error("Failed to fetch bookings.");
      }

      const data = await res.json();
      setBookings(data);
    } catch (err: any) {
      setDataError(err.message || "Failed to load bookings database.");
    } finally {
      setLoadingData(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setLoadingAuth(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      sessionStorage.setItem("admin_token", data.token);
      setIsAuthenticated(true);
      fetchBookings(data.token);
    } catch (err: any) {
      setAuthError(err.message || "Invalid password");
    } finally {
      setLoadingAuth(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    setPassword("");
    setBookings([]);
  };

  const handleStatusChange = async (id: string, newStatus: Booking["status"]) => {
    const token = sessionStorage.getItem("admin_token");
    if (!token) return;

    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      // Update local state directly to be fast & fluid
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
      );
    } catch (err: any) {
      alert("Error updating status: " + err.message);
    }
  };

  // WhatsApp quick response generator
  const getWhatsAppLink = (booking: Booking) => {
    let msg = "";
    if (booking.status === "pending") {
      msg = `Hello ${booking.name}! This is Miyar Technical Services. We have received your booking request for ${booking.service} in ${booking.city} on ${booking.date} (${booking.time}). Can we confirm your exact address and schedule details?`;
    } else if (booking.status === "confirmed") {
      msg = `Hello ${booking.name}! Miyar Technical Services here. Your booking for ${booking.service} in ${booking.city} on ${booking.date} at ${booking.time} is CONFIRMED. A specialist will call you shortly before dispatching.`;
    } else if (booking.status === "completed") {
      msg = `Hello ${booking.name}! Thank you for choosing Miyar Technical Services. Your service for ${booking.service} is marked as COMPLETED. We would love to hear your feedback!`;
    } else {
      msg = `Hello ${booking.name}, your service booking for ${booking.service} on ${booking.date} has been cancelled. If you would like to reschedule, please let us know.`;
    }

    // Clean phone number (remove space, dash, ensure + or country code)
    let cleanPhone = booking.phone.replace(/[\s\-]/g, "");
    if (!cleanPhone.startsWith("+") && !cleanPhone.startsWith("00")) {
      // If starts with 5 (KSA mobile), append 966
      if (cleanPhone.startsWith("5")) {
        cleanPhone = "966" + cleanPhone;
      } else if (cleanPhone.startsWith("05")) {
        cleanPhone = "966" + cleanPhone.substring(1);
      }
    }
    // Remove + for wa.me API
    cleanPhone = cleanPhone.replace("+", "");

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  };

  // Stats calculation
  const totalCount = bookings.length;
  const pendingCount = bookings.filter((b) => b.status === "pending").length;
  const confirmedCount = bookings.filter((b) => b.status === "confirmed").length;
  const completedCount = bookings.filter((b) => b.status === "completed").length;
  const cancelledCount = bookings.filter((b) => b.status === "cancelled").length;

  // Filtering logic
  const filteredBookings = bookings.filter((booking) => {
    // Search
    const searchStr = `${booking.name} ${booking.phone} ${booking.id}`.toLowerCase();
    const matchesSearch = searchStr.includes(searchQuery.toLowerCase());

    // City
    const matchesCity = selectedCity === "All" || booking.city === selectedCity;

    // Service
    const matchesService =
      selectedService === "All" || booking.service === selectedService;

    // Status
    const matchesStatus =
      selectedStatus === "All" || booking.status === selectedStatus;

    return matchesSearch && matchesCity && matchesService && matchesStatus;
  });

  // Extract unique cities & services from existing bookings for filtering
  const uniqueCities = ["All", ...Array.from(new Set(bookings.map((b) => b.city)))];
  const uniqueServices = ["All", ...Array.from(new Set(bookings.map((b) => b.service)))];

  if (!isAuthenticated) {
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginCard}>
          <div className={styles.logoHeader}>
            <div className={styles.logoCircle}>⚙️</div>
            <h2>Miyar Admin Console</h2>
            <p>Enter administrative credential to access bookings database.</p>
          </div>

          {authError && <div className={styles.errorBox}>{authError}</div>}

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="pass">Security Password</label>
              <input
                type="password"
                id="pass"
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" disabled={loadingAuth} className={styles.loginBtn}>
              {loadingAuth ? "Authorizing..." : "Access Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardWrapper}>
      {/* Top Navigation */}
      <header className={styles.dbHeader}>
        <div className={styles.headerTitle}>
          <h2>⚙️ Miyar Tech Services</h2>
          <span>Admin Booking Control</span>
        </div>
        <div className={styles.headerActions}>
          <button onClick={() => fetchBookings(sessionStorage.getItem("admin_token") || "")} className={styles.refreshBtn}>
            🔄 Refresh
          </button>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Log Out
          </button>
        </div>
      </header>

      <main className={styles.dbContent}>
        {dataError && <div className={styles.errorAlert}>{dataError}</div>}

        {/* Stats Grid */}
        <section className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.statTotal}`}>
            <span className={styles.statLabel}>Total Bookings</span>
            <span className={styles.statValue}>{totalCount}</span>
          </div>

          <div className={`${styles.statCard} ${styles.statPending}`}>
            <span className={styles.statLabel}>Pending Verification</span>
            <span className={styles.statValue}>{pendingCount}</span>
          </div>

          <div className={`${styles.statCard} ${styles.statConfirmed}`}>
            <span className={styles.statLabel}>Confirmed Schedule</span>
            <span className={styles.statValue}>{confirmedCount}</span>
          </div>

          <div className={`${styles.statCard} ${styles.statCompleted}`}>
            <span className={styles.statLabel}>Completed Work</span>
            <span className={styles.statValue}>{completedCount}</span>
          </div>

          <div className={`${styles.statCard} ${styles.statCancelled}`}>
            <span className={styles.statLabel}>Cancelled</span>
            <span className={styles.statValue}>{cancelledCount}</span>
          </div>
        </section>

        {/* Filter Controls */}
        <section className={styles.filterCard}>
          <div className={styles.filterGrid}>
            <div className={styles.searchBox}>
              <label>Search Bookings</label>
              <input
                type="text"
                placeholder="Search by name, phone or ref ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.filterSelects}>
              <div className={styles.selectGroup}>
                <label>Filter City</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                  {uniqueCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.selectGroup}>
                <label>Filter Service</label>
                <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                  {uniqueServices.map((service) => (
                    <option key={service} value={service}>
                      {service === "All" ? "All Services" : service}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.selectGroup}>
                <label>Filter Status</label>
                <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                  <option value="All">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Bookings List */}
        <section className={styles.tableCard}>
          {loadingData ? (
            <div className={styles.loadingSpinner}>
              <span>Loading dynamic bookings database...</span>
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>No Bookings Found</h3>
              <p>Try clearing filters or search terms.</p>
            </div>
          ) : (
            <div className={styles.tableWrapper}>
              <table className={styles.bookingsTable}>
                <thead>
                  <tr>
                    <th>Reference / Date</th>
                    <th>Customer Detail</th>
                    <th>Required Service</th>
                    <th>Preferences</th>
                    <th>Work Status</th>
                    <th style={{ textAlign: "right" }}>Dispatcher Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>
                        <div className={styles.refId}>{booking.id}</div>
                        <div className={styles.createdAt}>
                          {new Date(booking.createdAt).toLocaleString("en-SA", {
                            dateStyle: "short",
                            timeStyle: "short",
                          })}
                        </div>
                      </td>
                      <td>
                        <div className={styles.custName}>{booking.name}</div>
                        <div className={styles.custPhone}>📞 {booking.phone}</div>
                        {booking.email && (
                          <div className={styles.custEmail}>✉️ {booking.email}</div>
                        )}
                      </td>
                      <td>
                        <span className={styles.serviceBadge}>{booking.service}</span>
                        <div className={styles.custCity}>📍 {booking.city}</div>
                      </td>
                      <td>
                        <div className={styles.prefDate}>📅 {booking.date}</div>
                        <div className={styles.prefTime}>🕒 {booking.time}</div>
                        {booking.message && (
                          <div className={styles.prefMsg} title={booking.message}>
                            📝 &ldquo;{booking.message}&rdquo;
                          </div>
                        )}
                      </td>
                      <td>
                        <select
                          className={`${styles.statusSelect} ${styles[`status_${booking.status}`]}`}
                          value={booking.status}
                          onChange={(e) =>
                            handleStatusChange(booking.id, e.target.value as Booking["status"])
                          }
                        >
                          <option value="pending">🟡 Pending</option>
                          <option value="confirmed">🟢 Confirmed</option>
                          <option value="completed">🔵 Completed</option>
                          <option value="cancelled">🔴 Cancelled</option>
                        </select>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <div className={styles.actionBtnRow}>
                          <a
                            href={getWhatsAppLink(booking)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionWa}
                            title="Chat on WhatsApp"
                          >
                            💬 WhatsApp
                          </a>
                          <a href={`tel:${booking.phone}`} className={styles.actionCall} title="Call Phone">
                            📞 Call
                          </a>
                          {booking.email && (
                            <a
                              href={`mailto:${booking.email}?subject=Booking Ref ${booking.id} — Miyar Services`}
                              className={styles.actionMail}
                              title="Email Customer"
                            >
                              ✉️ Email
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
