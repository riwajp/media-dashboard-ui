"use client";

import { useThemeStore } from "@/stores/themeStore";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
}
