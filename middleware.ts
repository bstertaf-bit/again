import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

const protectedPaths = ["/dashboard"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/auth/login", req.url));

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"]
};
