import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const correctPassword = process.env.ADMIN_PASSWORD ?? "miyar123";

    if (password === correctPassword) {
      return NextResponse.json({ success: true, token: password });
    }

    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  } catch (err) {
    console.error("Admin auth API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
