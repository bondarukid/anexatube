import { type NextRequest, NextResponse } from "next/server"

const STUDIO_PREFIX = "studio."

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? ""
  const { pathname } = request.nextUrl
  const isStudioHost = host.startsWith(STUDIO_PREFIX)

  if (isStudioHost) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.startsWith("/studio")
      ? pathname
      : `/studio${pathname === "/" ? "" : pathname}`
    return NextResponse.rewrite(url)
  }

  if (pathname === "/studio" || pathname.startsWith("/studio/")) {
    const studioHost = `${STUDIO_PREFIX}${host}`
    const path = pathname.replace(/^\/studio\/?/, "/")
    return NextResponse.redirect(
      new URL(path, `${request.nextUrl.protocol}//${studioHost}`),
    )
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
