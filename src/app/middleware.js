import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});

    if(!token){
        return NextResponse.redirect(new URL(req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/news", "/contact"], // add routes that you want to be unaccessible if user not logged in
};