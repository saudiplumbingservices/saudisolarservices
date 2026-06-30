import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { adminBookingEmail, customerBookingEmail } from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "saudiplumbingservices@gmail.com";
const FROM = "Miyar Technical Services <noreply@miyartechnicalservices.com>";

// Helper to check admin authorization by verifying their Supabase JWT token
async function isAuthorized(req: NextRequest): Promise<boolean> {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return false;

  const token = authHeader.replace("Bearer ", "");
  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data.user) {
      return false;
    }
    return true;
  } catch (err) {
    console.error("Token verification error:", err);
    return false;
  }
}

// Helper to map DB row keys to frontend keys
function mapBooking(dbRow: any) {
  return {
    id: dbRow.id,
    name: dbRow.name,
    phone: dbRow.phone,
    email: dbRow.email || undefined,
    city: dbRow.city,
    service: dbRow.service,
    date: dbRow.date,
    time: dbRow.time,
    message: dbRow.message,
    status: dbRow.status,
    createdAt: dbRow.created_at,
  };
}

// 1. GET - Fetch all bookings (Admin Only)
export async function GET(req: NextRequest) {
  const authorized = await isAuthorized(req);
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data: dbBookings, error } = await supabaseAdmin
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    const bookings = (dbBookings || []).map(mapBooking);
    return NextResponse.json(bookings);
  } catch (err) {
    console.error("GET bookings error:", err);
    return NextResponse.json({ error: "Failed to read bookings from Supabase" }, { status: 500 });
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

    // Insert booking into Supabase database
    const { data: dbBooking, error } = await supabaseAdmin
      .from("bookings")
      .insert([
        {
          name,
          phone,
          email: email || null,
          city,
          service,
          date,
          time,
          message: message || "",
          status: "pending",
        },
      ])
      .select()
      .single();

    if (error || !dbBooking) {
      throw error || new Error("Failed to insert booking row");
    }

    const newBooking = mapBooking(dbBooking);

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
    return NextResponse.json({ error: "Server error occurred during booking creation" }, { status: 500 });
  }
}
