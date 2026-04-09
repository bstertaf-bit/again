import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { groupId } = await req.json();
  const membership = await prisma.groupMembership.create({ data: { groupId, userId: auth.userId } });
  return NextResponse.json({ membership }, { status: 201 });
}
