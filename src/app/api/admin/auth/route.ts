import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // Authenticate user with Supabase Auth
    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      return NextResponse.json({ error: error?.message || "Invalid credentials" }, { status: 401 });
    }

    // Return the JWT access token to the client
    return NextResponse.json({
      success: true,
      token: data.session.access_token,
      user: {
        id: data.user?.id,
        email: data.user?.email,
      },
    });
  } catch (err) {
    console.error("Admin auth API error:", err);
    return NextResponse.json({ error: "Server error occurred during login" }, { status: 500 });
  }
}
