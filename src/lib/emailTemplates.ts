const BASE = "https://miyartechnicalservices.com";
const BRAND = "Miyar Technical Services";
const PHONE = "+966 50 000 0000";
const WHATSAPP = "https://wa.me/966500000000";

const base = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  background: #f4f4f5;
  margin: 0; padding: 0;
`;

const wrap = `
  max-width: 600px; margin: 32px auto; background: #ffffff;
  border-radius: 14px; overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.09);
`;

const header = (title: string, subtitle: string) => `
  <div style="background:linear-gradient(135deg,#0e7490,#0f766e);padding:36px 40px;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <div style="width:38px;height:38px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;">
        <span style="color:#fff;font-size:18px;font-weight:900;line-height:1;">M</span>
      </div>
      <span style="color:rgba(255,255,255,0.9);font-size:14px;font-weight:600;">${BRAND}</span>
    </div>
    <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;line-height:1.3;">${title}</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,0.78);font-size:14px;">${subtitle}</p>
  </div>
`;

const footer = () => `
  <div style="background:#f4f4f5;padding:24px 40px;text-align:center;border-top:1px solid #e4e4e7;">
    <p style="margin:0 0 8px;font-size:13px;color:#71717a;">
      <a href="${BASE}" style="color:#0e7490;text-decoration:none;font-weight:600;">${BRAND}</a>
       · AC · Plumbing · Solar · Saudi Arabia
    </p>
    <p style="margin:0;font-size:12px;color:#a1a1aa;">
      King Fahd Road, Riyadh 12211, KSA ·
      <a href="tel:${PHONE.replace(/\s/g, '')}" style="color:#a1a1aa;">${PHONE}</a>
    </p>
  </div>
`;

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:14px 20px;border-bottom:1px solid #f1f5f9;width:130px;vertical-align:top;">
      <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.7px;color:#94a3b8;">${label}</span>
    </td>
    <td style="padding:14px 20px;border-bottom:1px solid #f1f5f9;vertical-align:top;">
      <span style="font-size:15px;color:#0f172a;font-weight:500;">${value}</span>
    </td>
  </tr>
`;

// ─────────────────────────────────────────────────────────
// 1. Admin notification — new quote request
// ─────────────────────────────────────────────────────────
export function adminQuoteEmail(data: {
  name: string; phone: string; email?: string;
  city: string; service: string; message: string;
}): string {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="${base}">
<div style="${wrap}">
  ${header("New Quote Request", `Submitted via miyartechnicalservices.com — ${new Date().toLocaleString("en-SA", { timeZone: "Asia/Riyadh" })}`)}
  <div style="padding:8px 0;">
    <table style="width:100%;border-collapse:collapse;">
      ${row("Customer", data.name)}
      ${row("Phone", `<a href="tel:${data.phone}" style="color:#0e7490;">${data.phone}</a>`)}
      ${data.email ? row("Email", `<a href="mailto:${data.email}" style="color:#0e7490;">${data.email}</a>`) : ""}
      ${row("City", data.city)}
      ${row("Service", `<span style="display:inline-block;background:#e0f2fe;color:#0e7490;font-size:12px;font-weight:700;padding:3px 12px;border-radius:20px;">${data.service}</span>`)}
      ${row("Message", data.message || "—")}
    </table>
  </div>
  <div style="padding:24px 40px;">
    <a href="${WHATSAPP}?text=Hi%20${encodeURIComponent(data.name)}%2C%20we%20received%20your%20request%20for%20${encodeURIComponent(data.service)}"
       style="display:inline-block;background:#25d366;color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;">
      Reply via WhatsApp →
    </a>
  </div>
  ${footer()}
</div></body></html>`;
}

// ─────────────────────────────────────────────────────────
// 2. Customer auto-reply — quote confirmation
// ─────────────────────────────────────────────────────────
export function customerQuoteEmail(data: {
  name: string; phone: string; city: string; service: string;
}): string {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="${base}">
<div style="${wrap}">
  ${header(`Thank you, ${data.name}!`, "We received your request and will contact you within 30 minutes.")}
  <div style="padding:32px 40px;">
    <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.7;">
      Your service request has been received. Our team will call you on <strong>${data.phone}</strong> shortly to confirm your booking.
    </p>
    <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:20px 24px;margin-bottom:28px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#0369a1;">Your Request Summary</p>
      <p style="margin:0;font-size:15px;color:#0f172a;">
        <strong>${data.service}</strong> in <strong>${data.city}</strong>
      </p>
    </div>
    <p style="margin:0 0 20px;font-size:14px;color:#6b7280;line-height:1.6;">
      Need immediate assistance? Chat with us directly on WhatsApp or call our 24/7 hotline.
    </p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <a href="${WHATSAPP}?text=Hi%2C%20I%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(data.service)}"
         style="display:inline-block;background:#25d366;color:#fff;font-size:14px;font-weight:700;padding:12px 22px;border-radius:8px;text-decoration:none;margin-right:10px;">
        Chat on WhatsApp
      </a>
      <a href="tel:${PHONE.replace(/\s/g, '')}"
         style="display:inline-block;border:1.5px solid #0e7490;color:#0e7490;font-size:14px;font-weight:700;padding:11px 22px;border-radius:8px;text-decoration:none;">
        ${PHONE}
      </a>
    </div>
  </div>
  <div style="background:#fafafa;padding:20px 40px;border-top:1px solid #e4e4e7;">
    <p style="margin:0;font-size:13px;color:#6b7280;">
      Our services: AC &amp; HVAC · Plumbing · Solar Energy · Available 24/7 across 14 Saudi cities.
    </p>
  </div>
  ${footer()}
</div></body></html>`;
}

// ─────────────────────────────────────────────────────────
// 3. Newsletter welcome email — sent to subscriber
// ─────────────────────────────────────────────────────────
export function newsletterWelcomeEmail(data: { email: string; name?: string }): string {
  const greeting = data.name ? `Hi ${data.name}` : "Welcome";
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="${base}">
<div style="${wrap}">
  ${header(`${greeting} — You're subscribed!`, "Get expert AC, plumbing & solar tips for Saudi Arabia.")}
  <div style="padding:32px 40px;">
    <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.7;">
      Thank you for subscribing to ${BRAND} updates. You'll receive expert guides, maintenance tips, and seasonal offers for AC, plumbing, and solar systems across Saudi Arabia.
    </p>
    <p style="margin:0 0 24px;font-size:14px;font-weight:700;color:#0f172a;">What you'll get:</p>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
      ${[
        ["🌡️", "Seasonal AC maintenance reminders before Saudi summer"],
        ["🔧", "Plumbing tips for hard water and high-pressure systems"],
        ["☀️", "Solar ROI guides and SEC net metering updates"],
        ["🏷️", "Exclusive offers for subscribers only"],
      ].map(([icon, text]) => `
        <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#f8fafc;border-radius:8px;border-left:3px solid #0e7490;">
          <span style="font-size:18px;">${icon}</span>
          <span style="font-size:14px;color:#374151;">${text}</span>
        </div>
      `).join("")}
    </div>
    <a href="${BASE}/blog"
       style="display:inline-block;background:linear-gradient(135deg,#0e7490,#0f766e);color:#fff;font-size:14px;font-weight:700;padding:13px 26px;border-radius:8px;text-decoration:none;">
      Browse Expert Guides →
    </a>
  </div>
  <div style="background:#fafafa;padding:16px 40px;border-top:1px solid #e4e4e7;">
    <p style="margin:0;font-size:12px;color:#9ca3af;">
      You subscribed with ${data.email}. To unsubscribe, simply reply with "unsubscribe".
    </p>
  </div>
  ${footer()}
</div></body></html>`;
}

// ─────────────────────────────────────────────────────────
// 4. Admin notification — new newsletter subscriber
// ─────────────────────────────────────────────────────────
export function adminNewsletterEmail(data: { email: string; name?: string; source?: string }): string {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="${base}">
<div style="${wrap}">
  ${header("New Newsletter Subscriber", `via miyartechnicalservices.com`)}
  <div style="padding:8px 0;">
    <table style="width:100%;border-collapse:collapse;">
      ${data.name ? row("Name", data.name) : ""}
      ${row("Email", `<a href="mailto:${data.email}" style="color:#0e7490;">${data.email}</a>`)}
      ${row("Source", data.source || "Blog / Website")}
      ${row("Time", new Date().toLocaleString("en-SA", { timeZone: "Asia/Riyadh" }))}
    </table>
  </div>
  ${footer()}
</div></body></html>`;
}
