import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "np"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

// 🔍 Matcher check
export const config = {
  matcher: ["/((?!api|static|fonts|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
