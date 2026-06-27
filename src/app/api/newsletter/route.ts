import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { newsletterWelcomeEmail, adminNewsletterEmail } from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "saudiplumbingservices@gmail.com";
const FROM = "Miyar Technical Services <noreply@miyartechnicalservices.com>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, source } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // 1. Welcome email to subscriber
    const welcomeRes = await resend.emails.send({
      from: FROM,
      to: [email],
      subject: "You're subscribed — Miyar Technical Services",
      html: newsletterWelcomeEmail({ email, name }),
    });

    if (welcomeRes.error) {
      console.error("Newsletter welcome error:", welcomeRes.error);
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    // 2. Admin notification (fire-and-forget)
    resend.emails.send({
      from: FROM,
      to: [ADMIN_EMAIL],
      subject: `New Subscriber: ${email}`,
      html: adminNewsletterEmail({ email, name, source }),
    }).catch(console.error);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
