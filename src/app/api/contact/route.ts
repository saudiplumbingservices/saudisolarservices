import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
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

    // 1. Save quote inquiry into Supabase contacts table
    try {
      const { error: dbError } = await supabaseAdmin
        .from("contacts")
        .insert([
          {
            name,
            phone,
            email: email || null,
            city: city || null,
            service,
            message: message || "",
          },
        ]);

      if (dbError) throw dbError;
    } catch (dbErr) {
      // Log DB error but proceed to send email so inquiries are never lost
      console.error("Supabase contacts insert failure:", dbErr);
    }

    // 2. Admin notification email
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

    // 3. Customer auto-reply (only if they provided an email)
    if (email && email.includes("@")) {
      try {
        await resend.emails.send({
          from: FROM,
          to: [email],
          subject: `We received your request — ${service} | Miyar Technical Services`,
          html: customerQuoteEmail({ name, phone, city, service }),
        });
      } catch (custEmailErr) {
        console.error("Customer confirmation email failure:", custEmailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error occurred" }, { status: 500 });
  }
}
