import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password, country, school, year, bio } = body;

  if (!name || !email || !password || !country || !school || !year) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: "Email already exists" }, { status: 409 });

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, 10),
      country,
      school,
      year: Number(year),
      bio
    }
  });

  const token = signToken({ userId: user.id, email: user.email });
  const res = NextResponse.json({ user: { ...user, password: undefined } }, { status: 201 });
  res.cookies.set("token", token, { httpOnly: true, sameSite: "lax", maxAge: 60 * 60 * 24 * 7, path: "/" });
  return res;
}
