import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET() {
  const groups = await prisma.group.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ groups });
}

export async function POST(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, description } = await req.json();
  const group = await prisma.group.create({ data: { name, description } });
  return NextResponse.json({ group }, { status: 201 });
}
