import { NextRequest, NextResponse } from "next/server";
import { ConnectionStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function PATCH(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { connectionId } = await req.json();

  const connection = await prisma.connection.updateMany({
    where: { id: connectionId, receiverId: auth.userId },
    data: { status: ConnectionStatus.REJECTED }
  });

  return NextResponse.json({ updated: connection.count });
}
