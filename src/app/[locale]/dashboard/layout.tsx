import DashboardLayout from "@/components/layouts/DashboardLayout";
import { getI18n, getScopedI18n } from "@locales/server";
import { ReactElement } from "react";

export default async function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
