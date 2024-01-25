import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("qwpt");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (req.url.includes("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/order", "/settings", "/users", "/auth/:path*"],
};
