import { NextRequest, NextResponse } from "next/server";
import { PostCategory } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET() {
  const posts = await prisma.post.findMany({ include: { author: { select: { name: true } } }, orderBy: { createdAt: "desc" } });
  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  const auth = getUserFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { title, content, category } = await req.json();

  const post = await prisma.post.create({
    data: {
      title,
      content,
      category: (category || "EXPERIENCE") as PostCategory,
      authorId: auth.userId
    }
  });

  return NextResponse.json({ post }, { status: 201 });
}
