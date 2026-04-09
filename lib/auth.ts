import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function getTokenFromRequest(req: NextRequest) {
  const header = req.headers.get("authorization");
  if (header?.startsWith("Bearer ")) return header.replace("Bearer ", "");
  return req.cookies.get("token")?.value;
}

export function getUserFromRequest(req: NextRequest) {
  const token = getTokenFromRequest(req);
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}

export function getCurrentUserFromCookieStore() {
  const token = cookies().get("token")?.value;
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}
