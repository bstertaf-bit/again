import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { content, postId } = await req.json();
  if (!content || !postId) return NextResponse.json({ error: "content and postId required" }, { status: 400 });

  const comment = await prisma.comment.create({
    data: { content, postId, userId: auth.userId }
  });

  return NextResponse.json({ comment }, { status: 201 });
}
