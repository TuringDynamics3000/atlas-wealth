import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// v2: all Alpha Wealth routes require auth
export function middleware(req: NextRequest) {
  const hasSession = true // stub; replace with cookie/JWT check

  if (!hasSession && req.nextUrl.pathname.startsWith('/wealth')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/wealth/:path*', '/evidence/:path*', '/workflows']
}
