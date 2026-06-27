import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { adminQuoteEmail, customerQuoteEmail } from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "saudiplumbingservices@gmail.com";
const FROM = "Miyar Technical Services <noreply@miyartechnicalservices.com>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, city, service, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Admin notification
    const adminRes = await resend.emails.send({
      from: FROM,
      to: [ADMIN_EMAIL],
      subject: `New Quote Request — ${service} in ${city}`,
      html: adminQuoteEmail({ name, phone, email, city, service, message }),
    });

    if (adminRes.error) {
      console.error("Admin email error:", adminRes.error);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    // 2. Customer auto-reply (only if they provided an email)
    if (email && email.includes("@")) {
      await resend.emails.send({
        from: FROM,
        to: [email],
        subject: `We received your request — ${service} | Miyar Technical Services`,
        html: customerQuoteEmail({ name, phone, city, service }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
