import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("qwpt");
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signup", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/order", "/settings", "/users"],
};
