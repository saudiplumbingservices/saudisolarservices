import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "saudiplumbingservices@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, city, service, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Miyar Technical Services <noreply@miyartechnicalservices.com>",
      to: [ADMIN_EMAIL],
      replyTo: undefined,
      subject: `New Quote Request — ${service} in ${city}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f4f5; }
    .wrap { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #0e7490, #0f766e); padding: 32px 36px; }
    .header h1 { margin: 0; color: #fff; font-size: 22px; font-weight: 700; }
    .header p { margin: 6px 0 0; color: rgba(255,255,255,0.8); font-size: 14px; }
    .body { padding: 32px 36px; }
    .row { display: flex; margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 20px; }
    .row:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #71717a; width: 110px; flex-shrink: 0; padding-top: 2px; }
    .value { font-size: 15px; color: #18181b; font-weight: 500; flex: 1; }
    .badge { display: inline-block; background: #e0f2fe; color: #0e7490; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }
    .footer { background: #f4f4f5; padding: 20px 36px; text-align: center; font-size: 12px; color: #a1a1aa; }
    .footer a { color: #0e7490; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>New Quote Request</h1>
      <p>Received via miyartechnicalservices.com contact form</p>
    </div>
    <div class="body">
      <div class="row">
        <span class="label">Customer</span>
        <span class="value">${name}</span>
      </div>
      <div class="row">
        <span class="label">Phone</span>
        <span class="value"><a href="tel:${phone}" style="color:#0e7490;">${phone}</a></span>
      </div>
      <div class="row">
        <span class="label">City</span>
        <span class="value">${city}</span>
      </div>
      <div class="row">
        <span class="label">Service</span>
        <span class="value"><span class="badge">${service}</span></span>
      </div>
      <div class="row">
        <span class="label">Message</span>
        <span class="value" style="white-space:pre-wrap;">${message || "—"}</span>
      </div>
    </div>
    <div class="footer">
      <p>Miyar Technical Services — <a href="https://miyartechnicalservices.com">miyartechnicalservices.com</a></p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
