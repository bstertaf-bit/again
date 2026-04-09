import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ connections: [] });

  const connections = await prisma.connection.findMany({
    where: { requesterId: auth.userId },
    include: { receiver: { select: { name: true } } }
  });

  return NextResponse.json({
    connections: connections.map((item) => ({ id: item.id, receiverName: item.receiver.name, status: item.status }))
  });
}

export async function POST(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { receiverId } = await req.json();

  const connection = await prisma.connection.create({
    data: { requesterId: auth.userId, receiverId }
  });
  return NextResponse.json({ connection }, { status: 201 });
}
