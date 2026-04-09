import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ userId: user.id, email: user.email });
  const res = NextResponse.json({ user: { ...user, password: undefined } });
  res.cookies.set("token", token, { httpOnly: true, sameSite: "lax", maxAge: 60 * 60 * 24 * 7, path: "/" });
  return res;
}
