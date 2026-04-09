import { HousingType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET() {
  const items = await prisma.housing.findMany({ include: { user: { select: { name: true } } }, orderBy: { createdAt: "desc" } });
  return NextResponse.json({ items });
}

export async function POST(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, description, location, price, type } = await req.json();
  const item = await prisma.housing.create({
    data: {
      title,
      description,
      location,
      price: Number(price),
      type: (type || "OFFER") as HousingType,
      userId: auth.userId
    }
  });

  return NextResponse.json({ item }, { status: 201 });
}
