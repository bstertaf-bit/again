import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET() {
  const announcements = await prisma.announcement.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ announcements });
}

export async function POST(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content } = await req.json();
  const announcement = await prisma.announcement.create({ data: { title, content } });
  return NextResponse.json({ announcement }, { status: 201 });
}
