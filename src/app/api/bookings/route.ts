import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { addBooking, readBookings } from "@/lib/bookingsDb";
import { adminBookingEmail, customerBookingEmail } from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "saudiplumbingservices@gmail.com";
const FROM = "Miyar Technical Services <noreply@miyartechnicalservices.com>";

// Helper to check admin authorization
function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return false;

  const password = authHeader.replace("Bearer ", "");
  const correctPassword = process.env.ADMIN_PASSWORD ?? "miyar123";
  return password === correctPassword;
}

// 1. GET - Fetch all bookings (Admin Only)
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const bookings = await readBookings();
    return NextResponse.json(bookings);
  } catch (err) {
    console.error("GET bookings error:", err);
    return NextResponse.json({ error: "Failed to read bookings" }, { status: 500 });
  }
}

// 2. POST - Submit a new booking
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, city, service, date, time, message } = body;

    // Validate required fields
    if (!name || !phone || !city || !service || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save booking to local JSON database
    const newBooking = await addBooking({
      name,
      phone,
      email: email || undefined,
      city,
      service,
      date,
      time,
      message: message || "",
    });

    // 1. Admin Email Notification (via Resend)
    try {
      await resend.emails.send({
        from: FROM,
        to: [ADMIN_EMAIL],
        subject: `New Service Booking — ${service} in ${city} for ${date}`,
        html: adminBookingEmail({
          name,
          phone,
          email,
          city,
          service,
          date,
          time,
          message,
        }),
      });
    } catch (emailErr) {
      // Log error but do not fail the request; writing to database is primary
      console.error("Resend admin email failure:", emailErr);
    }

    // 2. Customer Confirmation Email (only if valid email provided)
    if (email && email.includes("@")) {
      try {
        await resend.emails.send({
          from: FROM,
          to: [email],
          subject: `Booking Confirmation — ${service} | Miyar Technical Services`,
          html: customerBookingEmail({
            name,
            phone,
            city,
            service,
            date,
            time,
          }),
        });
      } catch (emailErr) {
        console.error("Resend customer confirmation email failure:", emailErr);
      }
    }

    return NextResponse.json({ success: true, booking: newBooking });
  } catch (err) {
    console.error("POST bookings error:", err);
    return NextResponse.json({ error: "Server error occurred" }, { status: 500 });
  }
}
