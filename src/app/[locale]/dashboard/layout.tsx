"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { getI18n, getScopedI18n } from "@locales/server";
import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="h-full">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
