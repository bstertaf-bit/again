import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { postId: string } }) {
  const comments = await prisma.comment.findMany({
    where: { postId: params.postId },
    include: { user: { select: { name: true } } },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json({ comments });
}
