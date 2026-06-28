import { NextRequest, NextResponse } from "next/server";
import { updateBookingStatus } from "@/lib/bookingsDb";

function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return false;

  const password = authHeader.replace("Bearer ", "");
  const correctPassword = process.env.ADMIN_PASSWORD ?? "miyar123";
  return password === correctPassword;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
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

    const updatedBooking = await updateBookingStatus(id, status as any);
    if (!updatedBooking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, booking: updatedBooking });
  } catch (err) {
    console.error("PATCH booking status error:", err);
    return NextResponse.json({ error: "Server error occurred" }, { status: 500 });
  }
}
