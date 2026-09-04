import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request) {
  const token = request.cookies.get("jwt")?.value;
  const { pathname } = request.nextUrl;


  const userRoutes = [
    "/checkout",
    "/profile",
  ];

  const isUserRoute = userRoutes.some((route) =>
    pathname.startsWith(route)
  );


  const isAdminRoute = pathname.startsWith("/admin");


  // User Protected Routes
  if (isUserRoute && !token) {
    return NextResponse.redirect(
      new URL("/auth", request.url)
    );
  }


  // Admin Protected Routes
  if (isAdminRoute) {

    // Token nahi hai
    if (!token) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }


    try {

      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY_FOR_ENCRPT
      );


      // Only Admin allowed
      if (decoded.role !== "admin") {
        return NextResponse.redirect(
          new URL("/login", request.url)
        );
      }


    } catch (error) {

      console.log(
        "JWT VERIFY ERROR:",
        error.message
      );


      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/checkout/:path*",
    "/profile/:path*",
    "/admin/:path*",
  ],
};