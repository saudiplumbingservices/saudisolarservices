import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authorized = await isAuthorized(req);
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    const validStatuses = ["pending", "confirmed", "completed", "cancelled"];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
    }

    const { data: dbBooking, error } = await supabaseAdmin
      .from("bookings")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error || !dbBooking) {
      return NextResponse.json({ error: "Booking not found or update failed" }, { status: 404 });
    }

    return NextResponse.json({ success: true, booking: mapBooking(dbBooking) });
  } catch (err) {
    console.error("PATCH booking status error:", err);
    return NextResponse.json({ error: "Server error occurred during status update" }, { status: 500 });
  }
}
