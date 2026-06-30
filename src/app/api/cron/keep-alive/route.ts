import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// This route will be triggered automatically by Vercel Cron to prevent Supabase 
// from pausing/stopping due to inactivity on the free tier.
export async function GET(req: Request) {
  try {
    // Execute a simple limit query to trigger database activity on Supabase
    const { data, error } = await supabaseAdmin
      .from("bookings")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Keep-alive database query failed:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "Supabase database connection successfully pinged & active" 
    });
  } catch (err: any) {
    console.error("Keep-alive cron error:", err);
    return NextResponse.json({ error: err.message || "Cron error" }, { status: 500 });
  }
}
