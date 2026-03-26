// proxy.ts
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const isDev = process.env.NODE_ENV === "development";
    const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

    const csp = [
        "default-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "object-src 'none'",
        "img-src 'self' data: blob:",
        "font-src 'self' https://fonts.gstatic.com",
        // In dev tillades inline styles for bedre DX/HMR, i prod bruges nonce
        `style-src 'self' https://fonts.googleapis.com ${isDev ? "'unsafe-inline'" : `'nonce-${nonce}'`}`,
        // strict-dynamic + nonce er kernen i en stram CSP
        `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://va.vercel-scripts.com ${isDev ? "'unsafe-eval'" : ""}`,
        // Vercel analytics/speed-insights netværkskald
        "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
        "upgrade-insecure-requests",
    ]
        .join("; ")
        .replace(/\s{2,}/g, " ")
        .trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-nonce", nonce);
    requestHeaders.set("Content-Security-Policy", csp);

    const response = NextResponse.next({
        request: { headers: requestHeaders },
    });

    response.headers.set("Content-Security-Policy", csp);
    return response;
}

export const config = {
    matcher: [
        {
            source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
            missing: [
                { type: "header", key: "next-router-prefetch" },
                { type: "header", key: "purpose", value: "prefetch" },
            ],
        },
    ],
};