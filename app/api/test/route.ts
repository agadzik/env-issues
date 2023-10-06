import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    GADZIK_SECRET: process.env.GADZIK_SECRET,
    gadzik_secret: process.env.gadzik_secret,
  });
}
